import { useEffect, useRef, useState, useCallback } from "react";

const QuizSession = ({ 
  session, 
  mode, 
  category, 
  difficulty, 
  timerConfig,
  onComplete,
  onQuit 
}) => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [skipped, setSkipped] = useState([]);
  const [questionTimers, setQuestionTimers] = useState([]); // Track time spent per question
  const [paused, setPaused] = useState(false);
  const [timeUpFor, setTimeUpFor] = useState(null);
  
  // Lifelines
  const [used5050, setUsed5050] = useState(false);
  const [usedAudience, setUsedAudience] = useState(false);
  const [elimMap, setElimMap] = useState({});
  const [audienceMap, setAudienceMap] = useState({});
  
  // Practice mode specifics
  const [lockedMap, setLockedMap] = useState([]);
  const [practiceSoundsOn, setPracticeSoundsOn] = useState(true);
  
  // UI states
  const [showSubmit, setShowSubmit] = useState(false);
  const [showQuit, setShowQuit] = useState(false);
  const [toast, setToast] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [coinAnimation, setCoinAnimation] = useState(false);
  const [timerActive, setTimerActive] = useState(true);
  
  // Star and coin system for gamification
  const [earnedStars, setEarnedStars] = useState(0);
  const [earnedCoins, setEarnedCoins] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showReward, setShowReward] = useState(null);
  
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

  // Initialize arrays
  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(new Array(questions.length).fill(null));
      setSkipped(new Array(questions.length).fill(false));
      setLockedMap(new Array(questions.length).fill(false));
      // Initialize timer array with default time for each question
      setQuestionTimers(new Array(questions.length).fill(timerConfig?.seconds || 45));
    }
  }, [questions.length, timerConfig?.seconds]);

  // Lifeline handlers
  const handleFiftyFifty = () => {
    if (used5050 || selected !== null) {
      setToast("Already used or answer selected");
      setTimeout(() => setToast(""), 2000);
      return;
    }
    
    if (!currentQuestion) return;
    
    // Find wrong answers and eliminate 2 of them
    const wrongOptions = [0,1,2,3].filter(i => i !== currentQuestion.answerIndex);
    const toEliminate = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    
    setElimMap({ ...elimMap, [index]: toEliminate });
    setUsed5050(true);
  };

  const handleAudience = () => {
    if (usedAudience || selected !== null) {
      setToast("Already used or answer selected");
      setTimeout(() => setToast(""), 2000);
      return;
    }
    
    if (!currentQuestion) return;
    
    // Generate realistic audience poll percentages
    const correctAnswer = currentQuestion.answerIndex;
    const percentages = [0, 0, 0, 0];
    
    // Correct answer gets 40-70% of votes
    const correctPercentage = 40 + Math.floor(Math.random() * 31);
    percentages[correctAnswer] = correctPercentage;
    
    // Distribute remaining percentage among other options
    let remaining = 100 - correctPercentage;
    const otherOptions = [0,1,2,3].filter(i => i !== correctAnswer);
    
    for (let i = 0; i < otherOptions.length - 1; i++) {
      const maxPossible = Math.min(remaining - (otherOptions.length - 1 - i), remaining / 2);
      const percentage = Math.floor(Math.random() * (maxPossible + 1));
      percentages[otherOptions[i]] = percentage;
      remaining -= percentage;
    }
    
    // Give remaining to last option
    percentages[otherOptions[otherOptions.length - 1]] = remaining;
    
    setAudienceMap({ ...audienceMap, [index]: percentages });
    setUsedAudience(true);
  };

  // Handle answer selection with rewards
  const onSelect = useCallback((optIdx, evt) => {
    if (!currentQuestion) return;
    if (isPractice && lockedMap[index]) return;

    const nextAnswers = [...answers];
    nextAnswers[index] = answers[index] === optIdx ? null : optIdx;
    setAnswers(nextAnswers);

    // Stop timer immediately when answer is selected
    if (nextAnswers[index] !== null) {
      setTimerActive(false);
      clearInterval(timerRef.current);
    }

    // Check if correct and award points
    if (nextAnswers[index] === currentQuestion.answerIndex) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setEarnedStars(prev => prev + 1);
      const coinsEarned = 10 * newStreak;
      setEarnedCoins(prev => prev + coinsEarned);
      
      // Play sounds and show animations
      playSound('/sounds/correct.mp3');
      setTimeout(() => playSound('/sounds/coin.mp3'), 500);
      
      // Trigger coin animation
      setCoinAnimation(true);
      setTimeout(() => setCoinAnimation(false), 2000);
      
      // Show reward animation
      setShowReward({ type: 'correct', stars: 1, coins: coinsEarned });
      setTimeout(() => setShowReward(null), 2000);
    } else if (nextAnswers[index] !== null) {
      setStreak(0);
      playSound('/sounds/wrong.mp3');
    }

    // Reset skipped status if answered
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

    // Auto-advance in quiz mode after 5 seconds
    if (!isPractice && nextAnswers[index] !== null) {
      clearTimeout(autoNextRef.current);
      autoNextRef.current = setTimeout(() => {
        if (index < total - 1) {
          goNext();
        } else {
          setShowSubmit(true);
          setPaused(true);
        }
      }, 5000); // Wait 5 seconds before auto-advance
    }
  }, [currentQuestion, isPractice, lockedMap, index, answers, skipped, total, streak]);

  // Navigation functions
  const goPrev = () => {
    if (index > 0) {
      clearInterval(timerRef.current);
      setTimerActive(false);
      setIndex(i => i - 1);
      setShowExplanation(false);
      // Show explanation for previous question if it was answered in practice mode
      if (isPractice && answers[index - 1] !== null) {
        setTimeout(() => setShowExplanation(true), 100);
      }
    }
  };

  const goNext = () => {
    clearInterval(timerRef.current);
    
    // Mark as skipped if moving next without answering
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
      // Show explanation for next question if it was answered in practice mode
      if (isPractice && answers[index + 1] !== null) {
        setTimeout(() => setShowExplanation(true), 100);
      } else {
        // Start timer for unanswered questions
        setTimeout(() => setTimerActive(true), 100);
      }
    } else {
      setShowSubmit(true);
    }
  };

  const onSkip = () => {
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
            setShowSubmit(true);
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
  }, [paused, timeUpFor, index, showSubmit, total, timerActive, answers]);

  // Start timer when moving to unanswered question
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

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden flex flex-col">
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
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-ping"
              style={{
                left: `${-20 + Math.random() * 40}px`,
                top: `${-20 + Math.random() * 40}px`,
                animationDelay: `${i * 100}ms`,
                animationDuration: '1s'
              }}
            >
              🪙
            </div>
          ))}
        </div>
      )}

      {/* Top Status Bar */}
      <div className="flex items-center justify-between p-3 bg-gray-800/50 backdrop-blur-sm flex-shrink-0">
        <button 
          onClick={() => setShowQuit(true)}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>
        
        <div className="flex-1"></div>

        <div className="flex items-center gap-3">
          {/* Coins */}
          <div className="bg-yellow-600/20 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="text-yellow-400">🪙</span>
            <span className="text-yellow-200 font-semibold">{earnedCoins}</span>
          </div>
          
          {/* Streak - Always visible */}
          <div className="bg-orange-600/20 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="text-orange-400">🔥</span>
            <span className="text-orange-200 font-semibold">{streak}</span>
          </div>
          
          {/* Timer */}
          <div className={`px-3 py-1 rounded-full font-mono font-semibold ${
            currentTimer <= 10 ? 'bg-red-600/20 text-red-400 animate-pulse' :
            currentTimer <= 30 ? 'bg-yellow-600/20 text-yellow-400' :
            'bg-green-600/20 text-green-400'
          }`}>
            {formatTime(currentTimer)}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 pb-2 flex-shrink-0">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Question {index + 1} of {total}</span>
          <span className="text-sm text-gray-400">{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
            style={{width: `${progress}%`}}
          />
        </div>
        
        {/* Progress Dots */}
        <div className="flex justify-center gap-1 mt-2">
          {Array.from({length: total}).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? 'bg-white scale-125' :
                answers[i] !== null ? 'bg-green-500' :
                skipped[i] ? 'bg-yellow-500' :
                'bg-gray-600'
              }`}
            />
          ))}
        </div>
        
        {/* Category Name - After progress dots */}
        <div className="text-center mt-1">
          <span className="text-xs text-gray-500">{currentQuestion.category}</span>
        </div>
      </div>

      {/* Main Content - Scrollable when explanation is shown */}
      <div className={`flex-1 px-4 py-4 flex flex-col min-h-0 ${showExplanation ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        {/* Question Card */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 mb-4 flex-shrink-0">
          <div className="text-center">
            <h2 className="text-xl font-semibold leading-relaxed text-white mb-4">
              {currentQuestion.prompt}
            </h2>
          </div>
        </div>

        {/* Options Grid */}
        <div className="flex-1 grid grid-cols-1 gap-3 mb-12">
          {currentQuestion.options.map((option, optIndex) => {
            const isSelected = selected === optIndex;
            const isCorrect = optIndex === currentQuestion.answerIndex;
            const showFeedback = (isPractice && selected !== null) || showExplanation;
            const isEliminated = elimMap[index] && elimMap[index].includes(optIndex);
            
            // Skip eliminated options in 50:50
            if (isEliminated) return null;
            
            let cardClass = "p-3 rounded-xl transition-all duration-200 transform border-2 min-h-[48px] flex items-center cursor-pointer ";
            
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
              cardClass += "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/25";
            } else {
              cardClass += "bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600 hover:scale-102";
            }

            const optionLabels = ['🅰️', '🅱️', '🅲️', '🅳️'];
            
            return (
              <button
                key={optIndex}
                onClick={(e) => onSelect(optIndex, e)}
                disabled={isPractice && lockedMap[index]}
                className={cardClass}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="text-xl flex-shrink-0">{optionLabels[optIndex]}</div>
                  <div className="flex-1 text-left font-medium text-sm">{option}</div>
                  {/* Show audience percentage if active */}
                  {audienceMap[index] && audienceMap[index][optIndex] > 0 && (
                    <div className="bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300">
                      {audienceMap[index][optIndex]}%
                    </div>
                  )}
                  {showFeedback && isSelected && isCorrect && (
                    <div className="text-xl animate-bounce">🎉</div>
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <div className="text-xl">😔</div>
                  )}
                  {showFeedback && !isSelected && isCorrect && (
                    <div className="text-lg animate-pulse">✨</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation (Inline) */}
        {isPractice && showExplanation && selected !== null && (
          <div className="bg-gray-800 rounded-2xl p-4 mb-4 border border-gray-700 flex-shrink-0">
            <div className="flex gap-3">
              <div className="text-2xl flex-shrink-0">
                {selected === currentQuestion.answerIndex ? '🎊' : '💡'}
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold mb-2 ${
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
      </div>

      {/* Bottom Controls - Positioned higher */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-3 mt-4 flex-shrink-0">
        {/* Lifelines */}
        {!isPractice && (
          <div className="flex justify-center gap-3 mb-3">
            <button
              onClick={handleFiftyFifty}
              disabled={used5050 || selected !== null}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-700 disabled:text-gray-500 px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              <span>⚡</span>
              50:50
            </button>
            <button
              onClick={handleAudience}
              disabled={usedAudience || selected !== null}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:text-gray-500 px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              <span>👥</span>
              Ask Friends
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-2 mb-3">
          <button
            onClick={goPrev}
            disabled={index === 0}
            className="flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 py-3 rounded-xl font-medium transition-colors text-sm"
          >
            Previous
          </button>
          
          <button
            onClick={onSkip}
            disabled={selected !== null}
            className="flex-1 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-800 py-3 rounded-xl font-medium transition-colors text-sm"
          >
            Skip
          </button>
          
          <button
            onClick={goNext}
            className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium transition-colors text-sm"
          >
            {index === total - 1 ? 'Finish' : 'Next'}
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={() => setShowSubmit(true)}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors"
        >
          Submit
        </button>
      </div>

      {/* Modals */}
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
                onClick={onQuit}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium"
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )}

      {showSubmit && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Ready to finish?</h3>
            <p className="text-gray-400 mb-4">
              {attempted} of {total} answered • {skippedCount} skipped
            </p>
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
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowSubmit(false);
                  setTimeUpFor(null); // Clear any timeUpFor state
                }}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
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
    </div>
  );
};

export default QuizSession;