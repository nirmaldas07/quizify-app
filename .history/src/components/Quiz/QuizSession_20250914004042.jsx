// src/components/Quiz/QuizSession.jsx

import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom"; 
import GameDataService from '../../services/GameDataService';
import AnalyticsService from '../../services/AnalyticsService';

const QuizSession = ({ 
  session, 
  mode, 
  category, 
  difficulty, 
  timerConfig,
  onComplete,
  onQuit 
}) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [skipped, setSkipped] = useState([]);
  const [questionTimers, setQuestionTimers] = useState([]);
  const [paused, setPaused] = useState(false);
  const [timeUpFor, setTimeUpFor] = useState(null);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [hasTrackedQuestions, setHasTrackedQuestions] = useState([]);
  
  // Lifelines
  const [used5050, setUsed5050] = useState(false);
  const [usedAudience, setUsedAudience] = useState(false);
  const [elimMap, setElimMap] = useState({});
  const [audienceMap, setAudienceMap] = useState({});
  
  // Practice mode specifics
  const [lockedMap, setLockedMap] = useState([]);
  const [practiceSoundsOn, setPracticeSoundsOn] = useState(true);

  // Gamification feedback for practice mode
  const [answerPattern, setAnswerPattern] = useState([]);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [consecutiveWrong, setConsecutiveWrong] = useState(0);
  
  // UI states
  const [showSubmit, setShowSubmit] = useState(false);
  const [showQuit, setShowQuit] = useState(false);
  const [toast, setToast] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [coinAnimation, setCoinAnimation] = useState(false);
  const [timerActive, setTimerActive] = useState(true);
  const [showQuizSummary, setShowQuizSummary] = useState(false);
  
  // Star and coin system for gamification
  const [earnedStars, setEarnedStars] = useState(0);
  const [earnedCoins, setEarnedCoins] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showReward, setShowReward] = useState(null);
  const [finalQuizCoins, setFinalQuizCoins] = useState(0);
  
  const autoNextRef = useRef(null);
  const timerRef = useRef(null);
  const isPractice = mode === "practice";
  const selected = answers[index];

  // Sound effects
  const playSound = (soundFile) => {
    try {
      const audio = new Audio(soundFile);
      audio.volume = 0.6;
      audio.play();
    } catch (error) {
      console.log('Sound not available:', soundFile);
    }
  };

  // Mock questions data for demo
  const mockQuestions = [
    {
      id: 1,
      category: "General Knowledge",
      difficulty: "medium",
      prompt: "Which element has the atomic number 1?",
      options: ["Helium", "Carbon", "Hydrogen", "Oxygen"],
      answerIndex: 2,
      explanation: "Hydrogen is the first element on the periodic table with atomic number 1!"
    },
    {
      id: 2,
      category: "General Knowledge", 
      difficulty: "medium",
      prompt: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Pacific", "Indian", "Arctic"],
      answerIndex: 1,
      explanation: "The Pacific Ocean covers about one-third of Earth's surface!"
    },
    {
      id: 3,
      category: "General Knowledge",
      difficulty: "easy", 
      prompt: "What color do you get when you mix red and yellow?",
      options: ["Purple", "Orange", "Green", "Pink"],
      answerIndex: 1,
      explanation: "Red and yellow make orange - like a beautiful sunset!"
    }
  ];

  // Safe initialization with proper fallbacks
  const questions = (session && session.questions && Array.isArray(session.questions) && session.questions.length > 0) 
    ? session.questions 
    : mockQuestions;
    
  const currentQuestion = questions[index] || questions[0] || mockQuestions[0];
  const total = questions.length;

  // Load total coins on mount
  useEffect(() => {
    const coins = GameDataService.getCoins();
    setTotalCoins(coins);
  }, []);
  
  // Initialize arrays
  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(new Array(questions.length).fill(null));
      setSkipped(new Array(questions.length).fill(false));
      setLockedMap(new Array(questions.length).fill(false));
      setQuestionTimers(new Array(questions.length).fill(timerConfig?.seconds || 45));
    }
  }, [questions.length, timerConfig?.seconds]);

  // Helper function
  const getTodayKey = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  };

  const handleQuitWithProgress = () => {
    if (isPractice && window.location.search.includes('from=quest')) {
      navigate('/profile/quests', {
        state: {
          questCompleted: true,
          questType: 'practiceQuestions',
        }
      });
    } else {
      onQuit();
    }
  };

  // Handle answer selection with rewards
  const onSelect = useCallback((optIdx, evt) => {
    if (!currentQuestion) return;
    if (isPractice && lockedMap[index]) return;
    if (elimMap[index] && elimMap[index].includes(optIdx)) return;

    const nextAnswers = [...answers];
    nextAnswers[index] = answers[index] === optIdx ? null : optIdx;
    setAnswers(nextAnswers);

    setLastActivity(Date.now());
    
    // Track question attempt for practice mode
    if (isPractice && !hasTrackedQuestions.includes(index) && nextAnswers[index] !== null) {
      const newAttempted = hasTrackedQuestions.length + 1;
      setQuestionsAttempted(newAttempted);
      setHasTrackedQuestions(prev => [...prev, index]);
      
      if (window.location.search.includes('from=quest')) {
        let progress = {};
        try {
          const stored = localStorage.getItem('questProgress');
          if (stored) progress = JSON.parse(stored);
        } catch (e) {
          console.error('Error reading progress:', e);
        }
        
        const currentCount = progress.practiceQuestions || 0;
        progress.practiceQuestions = Math.max(currentCount, newAttempted);
        progress.date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
        
        localStorage.setItem('questProgress', JSON.stringify(progress));
        console.log('Saved practice progress:', progress.practiceQuestions);
        
        window.dispatchEvent(new CustomEvent('questProgressUpdate', { 
          detail: { practiceQuestions: progress.practiceQuestions } 
        }));
      }
    }

    if (nextAnswers[index] !== null) {
      setTimerActive(false);
      clearInterval(timerRef.current);
    }

    const isCorrect = nextAnswers[index] === currentQuestion.answerIndex;

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setConsecutiveCorrect(prev => prev + 1);
      setConsecutiveWrong(0);

      if (isPractice) {
        setEarnedStars(prev => prev + 1);
        const coinsEarned = 2;
        setEarnedCoins(prev => prev + coinsEarned);
        setTotalCoins(prev => prev + coinsEarned);

        playSound('/sounds/correct.mp3');
        setTimeout(() => playSound('/sounds/coin.mp3'), 500);
        
        setCoinAnimation(true);
        setTimeout(() => setCoinAnimation(false), 2000);
        
        setShowReward({ type: 'correct', stars: 1, coins: 2 });
        setTimeout(() => setShowReward(null), 2000);
      }
    } else if (nextAnswers[index] !== null) {
      setStreak(0);
      setConsecutiveCorrect(0);
      setConsecutiveWrong(prev => prev + 1);
      
      if (isPractice) {
        playSound('/sounds/wrong.mp3');
      }
    }

    setAnswerPattern(prev => [...prev.slice(-2), isCorrect]);

    if (nextAnswers[index] !== null && skipped[index]) {
      const nextSkipped = [...skipped];
      nextSkipped[index] = false;
      setSkipped(nextSkipped);
    }

    // Show explanation in practice mode
    if (isPractice && nextAnswers[index] !== null) {
      setShowExplanation(true);
      setLockedMap(prev => {
        const copy = [...prev];
        copy[index] = true;
        return copy;
      });
    } 

    // // Auto-advance in quiz mode after 5 seconds //removed this auto next logic
    // if (!isPractice && nextAnswers[index] !== null) {
    //   clearTimeout(autoNextRef.current);
    //   autoNextRef.current = setTimeout(() => {
    //     if (index < total - 1) {
    //       goNext();
    //     } else {
    //       setShowSubmit(true);
    //       setPaused(true);
    //     }
    //   }, 5000);
    // }
  }, [currentQuestion, isPractice, lockedMap, index, answers, skipped, total, streak, elimMap, answerPattern, consecutiveCorrect, questionsAttempted, hasTrackedQuestions]);

  // Navigation functions
  const goPrev = () => {
    setLastActivity(Date.now());
    if (index > 0) {
      clearInterval(timerRef.current);
      setTimerActive(false);
      setIndex(i => i - 1);
      setShowExplanation(false);
      if (isPractice && answers[index - 1] !== null) {
        setTimeout(() => setShowExplanation(true), 100);
      }
    }
  };

  const goNext = () => {
    setLastActivity(Date.now());
    clearInterval(timerRef.current);
    
    if (selected === null) {
      const next = [...skipped];
      next[index] = true;
      setSkipped(next);
      setStreak(0);
    }

    setTimerActive(false);
    setShowExplanation(false);

    if (index < total - 1) {
      setIndex(i => i + 1);
      if (isPractice && answers[index + 1] !== null) {
        setTimeout(() => setShowExplanation(true), 100);
      } else {
        setTimeout(() => setTimerActive(true), 100);
      }
    } else {
      setShowSubmit(true);
    }
  };

  const onSkip = () => {
    setLastActivity(Date.now());
    const next = [...skipped];
    next[index] = true;
    setSkipped(next);
    setStreak(0);
    goNext();
  };

  const handleSubmit = () => {
    const correct = questions.reduce(
      (sum, q, i) => sum + (answers[i] === q.answerIndex ? 1 : 0),
      0
    );

    // Track practice session completion if in practice mode
  if (isPractice) {
    AnalyticsService.trackFeatureUsage('practice_completed', {
      category: category,
      questionsAttempted: answers.filter(a => a !== null).length,
      correctAnswers: correct
    });
  }
    
    if (isPractice && window.location.search.includes('from=quest')) {
      const answeredCount = answers.filter(a => a !== null).length;
      const progress = JSON.parse(localStorage.getItem('questProgress') || '{}');
      progress.practiceQuestions = Math.min(answeredCount, 15);
      progress.date = getTodayKey();
      localStorage.setItem('questProgress', JSON.stringify(progress));
      console.log('Final practice progress saved:', progress.practiceQuestions);
    }

   if (!isPractice) {
  const quizCoins = correct * 10;
  setFinalQuizCoins(quizCoins);
  // Don't show quiz summary, go directly to results
  if (onComplete) {
    onComplete({
      questions,
      answers,
      skipped,
      correct,
      total,
      mode,
      category,
      difficulty,
      earnedStars: 0,
      earnedCoins: quizCoins,
      finalStreak: streak
    });
  }
} else {
  // Practice mode - this was missing!
  if (onComplete) {
    onComplete({
      questions,
      answers,
      skipped,
      correct,
      total,
      mode,
      category,
      difficulty,
      earnedStars,
      earnedCoins,
      finalStreak: streak
    });
  }
}
  };

  // Timer functions
  useEffect(() => {
    if (paused || timeUpFor !== null || showSubmit || !timerActive || answers[index] !== null) {
      return;
    }
    
    timerRef.current = setInterval(() => {
      setQuestionTimers(prev => {
        const newTimers = [...prev];
        const currentTime = newTimers[index];
        
        if (currentTime <= 1) {
          clearInterval(timerRef.current);
          if (index === total - 1) {
            const timeSinceActivity = Date.now() - lastActivity;
            if (timeSinceActivity >= 5000) {
              setShowSubmit(true);
            }
            return newTimers;
          }
          setTimeUpFor(index);
          return newTimers;
        }
        
        newTimers[index] = currentTime - 1;
        return newTimers;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [paused, timeUpFor, index, showSubmit, total, timerActive, answers, lastActivity]);

  useEffect(() => {
    if (answers[index] === null && !showSubmit && !timeUpFor) {
      setTimerActive(true);
    } else {
      setTimerActive(false);
    }
  }, [index, answers, showSubmit, timeUpFor]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((index + 1) / questions.length) * 100;
  const attempted = answers.filter(a => a !== null).length;
  const skippedCount = skipped.filter(Boolean).length;
  const currentTimer = questionTimers[index] || 0;
  const correctCount = questions.reduce((sum, q, i) => sum + (answers[i] === q.answerIndex ? 1 : 0), 0);

  // Determine if content should be scrollable
  const isScrollable = isPractice && showExplanation && selected !== null;

  return (
    <div className="h-dvh bg-gray-900 text-white flex flex-col overflow-hidden pt-[env(safe-area-inset-top,0px)]">

      {/* Reward Animation Overlay */}
      {showReward && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl">
            +{showReward.coins} Coins!
          </div>
        </div>
      )}

      {/* Coin Flying Animation */}
      {coinAnimation && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-3xl animate-ping"
              style={{
                left: `${-30 + Math.random() * 60}px`,
                top: `${-30 + Math.random() * 60}px`,
                animationDelay: `${i * 150}ms`,
                animationDuration: '2s'
              }}
            >
              🪙
            </div>
          ))}
        </div>
      )}

{/* Header - Always Fixed */}
<div className="bg-gray-900 flex-shrink-0 pt-10">
  {/* Top Status Bar */}
  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg">
          <button 
            onClick={() => setShowQuit(true)}
            className="bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back</span>
          </button>
          
          <div className="flex-1"></div>

          <div className="flex items-center gap-2">
            {isPractice && (
              <>
                <div className="bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="text-yellow-400 text-sm">🪙</span>
                  <span className="text-yellow-200 font-semibold text-sm">{totalCoins}</span>
                </div>
                
                <div className="bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="text-orange-400 text-sm">🔥</span>
                  <span className="text-orange-200 font-semibold text-sm">{streak}</span>
                </div>
              </>
            )}
            
            <div className={`px-2 py-1 rounded-full font-mono font-semibold text-sm ${
              currentTimer <= 10 ? 'bg-red-600/20 text-red-400 animate-pulse' :
              currentTimer <= 30 ? 'bg-yellow-600/20 text-yellow-400' :
              'bg-green-600/20 text-green-400'
            }`}>
              {formatTime(currentTimer)}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4 pb-1 bg-gray-900">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-400">Question {index + 1} of {total}</span>
            <span className="text-xs text-gray-400">{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
              style={{width: `${progress}%`}}
            />
          </div>
          
          <div className="flex justify-center gap-1 mt-1">
            {Array.from({length: total}).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === index ? 'bg-white scale-125' :
                  answers[i] !== null ? 'bg-green-500' :
                  skipped[i] ? 'bg-yellow-500' :
                  'bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <div className="text-center mt-4">
            <span className="text-xs text-gray-500">{currentQuestion.category}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area - Conditionally Scrollable */}
      <div className={`flex-1 flex flex-col ${isScrollable ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        <div className="px-4 py-4 flex-1 flex flex-col">
          
          {/* Question Card */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-4 shadow-2xl shadow-blue-600/20 border border-blue-400/20">
            <div className="absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"></div>
            
            <div className="relative text-center">
              <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3">
                Question {index + 1}
              </div>
              <h2 className="text-xl font-bold leading-relaxed text-white tracking-wide">
                {currentQuestion.prompt}
              </h2>
              {currentQuestion.difficulty && (
                <div className="mt-3 inline-block">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    currentQuestion.difficulty === 'easy' ? 'bg-green-500/20 text-green-300' :
                    currentQuestion.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {currentQuestion.difficulty.toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3 mb-4">
            {currentQuestion.options.map((option, optIndex) => {
              const isSelected = selected === optIndex;
              const isCorrect = optIndex === currentQuestion.answerIndex;
              const showFeedback = isPractice && selected !== null && showExplanation;
              const isEliminated = elimMap[index] && elimMap[index].includes(optIndex);
              
              let cardClass = "p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";
              
              if (isEliminated) {
                cardClass += "bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed";
              } else {
                cardClass += "cursor-pointer ";
                
                if (showFeedback) {
                  if (isSelected && isCorrect) {
                    cardClass += "bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25";
                  } else if (isSelected && !isCorrect) {
                    cardClass += "bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25";
                  } else if (!isSelected && isCorrect) {
                    cardClass += "bg-green-600/20 border-green-500 text-green-300 animate-pulse";
                  } else {
                    cardClass += "bg-gray-700 border-gray-600 text-gray-400";
                  }
                } else if (isSelected) {
                  cardClass += "bg-gray-600 border-gray-500 text-white";
                } else {
                  cardClass += "bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600";
                }
              }

              const optionLabels = ['🅰️', '🅱️', '🅲️', '🅳️'];
              
              return (
                <button
                  key={optIndex}
                  onClick={(e) => onSelect(optIndex, e)}
                  disabled={isPractice && lockedMap[index]}
                  className={cardClass}
                >
                  <div className="flex items-center gap-2 w-full">
                    <div className="text-lg flex-shrink-0 mr-1">{optionLabels[optIndex]}</div>
                    <div className="flex-1 text-left font-semibold text-base leading-relaxed">{option}</div>
                    {audienceMap[index] && audienceMap[index][optIndex] > 0 && !isEliminated && (
                      <div className="bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300">
                        {audienceMap[index][optIndex]}%
                      </div>
                    )}
                    {showFeedback && isSelected && isCorrect && !isEliminated && (
                      <div className="text-lg animate-bounce">🎉</div>
                    )}
                    {showFeedback && isSelected && !isCorrect && !isEliminated && (
                      <div className="text-lg">😔</div>
                    )}
                    {showFeedback && !isSelected && isCorrect && !isEliminated && (
                      <div className="text-base animate-pulse">✨</div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation - Part of scrollable content in practice mode */}
          {isPractice && showExplanation && selected !== null && (
            <div className="bg-gray-800 rounded-xl p-4 mb-4 border border-gray-700">
              <div className="flex gap-3">
                <div className="text-lg flex-shrink-0">
                  {selected === currentQuestion.answerIndex ? '🎊' : '💡'}
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold mb-3 text-sm ${
                    selected === currentQuestion.answerIndex ? 'text-green-400' : 'text-blue-400'
                  }`}>
                    {selected === currentQuestion.answerIndex ? 
                      "Perfect! Well done!" : 
                      "Good try! Here's why:"
                    }
                  </h4>
                  {currentQuestion.explanation && (
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Spacer for bottom controls */}
          <div className="h-[200px]"></div>
        </div>
      </div>

      {/* Bottom Controls - Always Fixed */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"></div>
        
        <div className="relative p-4 pb-8">
          <div className="flex gap-2 mb-3">
            <button
              onClick={goPrev}
              disabled={index === 0}
              className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl"
            >
              Previous
            </button>
            
            <button
              onClick={onSkip}
              disabled={selected !== null}
              className={`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${
                selected !== null 
                  ? 'bg-white/5 text-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600'
              }`}
            >
              Skip
            </button>
            
            <button
              onClick={goNext}
              className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl"
            >
              {index === total - 1 ? 'Finish' : 'Next'}
            </button>
          </div>

          <button
            onClick={() => setShowSubmit(true)}
            className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="relative">Submit Quiz</span>
          </button>
        </div>
      </div>

      {showQuit && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700">
            <div className="text-4xl mb-4">🤔</div>
            <h3 className="text-xl font-bold mb-2">Leave Quiz?</h3>
            <p className="text-gray-400 mb-6">Your progress will be lost</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowQuit(false)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium"
              >
                Stay
              </button>
              <button
                onClick={handleQuitWithProgress}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium"
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )}

      {showSubmit && !showQuizSummary && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Ready to finish?</h3>
            <p className="text-gray-400 mb-4">
              {attempted} of {total} answered • {skippedCount} skipped
            </p>
            {isPractice && (
              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30">
                <div className="flex justify-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl mb-1">⭐</div>
                    <div className="text-yellow-400 font-bold">{earnedStars}</div>
                    <div className="text-xs text-gray-400">Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🪙</div>
                    <div className="text-yellow-400 font-bold">{earnedCoins}</div>
                    <div className="text-xs text-gray-400">Coins</div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowSubmit(false);
                  setTimeUpFor(null);
                  setLastActivity(Date.now());
                }}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium"
              >
                Back
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Submit button clicked');
                  handleSubmit();
                }}
                className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {timeUpFor === index && !showSubmit && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700">
            <div className="text-4xl mb-4 animate-pulse">⏰</div>
            <h3 className="text-xl font-bold mb-2">Time's Up!</h3>
            <p className="text-gray-400 mb-6">Let's move to the next question</p>
            <button
              onClick={() => { 
                setTimeUpFor(null);
                setLastActivity(Date.now());
                if (index < questions.length - 1) {
                  goNext();
                } else {
                  setShowSubmit(true);
                }
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium"
            >
              {index < questions.length - 1 ? "Continue" : "See Results"}
            </button>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50">
          {toast}
        </div>
      )}
      
        <style jsx>{`
        .pt-safe {
            padding-top: env(safe-area-inset-top);
        }
        
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          15% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          80% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
        }
        
        .animate-fadeInOut {
          animation: fadeInOut 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QuizSession;