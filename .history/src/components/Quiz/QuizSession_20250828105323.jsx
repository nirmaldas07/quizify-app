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
  const [remaining, setRemaining] = useState(timerConfig?.seconds || 45);
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
  
  // Star and coin system for gamification
  const [earnedStars, setEarnedStars] = useState(0);
  const [earnedCoins, setEarnedCoins] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showReward, setShowReward] = useState(null);
  const [lives, setLives] = useState(5);
  
  const autoNextRef = useRef(null);
  const isPractice = mode === "practice";
  const selected = answers[index];

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
    }
  }, [questions.length]);

  // Handle answer selection with rewards
  const onSelect = useCallback((optIdx, evt) => {
    if (!currentQuestion) return;
    if (isPractice && lockedMap[index]) return;

    const nextAnswers = [...answers];
    nextAnswers[index] = answers[index] === optIdx ? null : optIdx;
    setAnswers(nextAnswers);

    // Check if correct and award points
    if (nextAnswers[index] === currentQuestion.answerIndex) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setEarnedStars(prev => prev + 1);
      setEarnedCoins(prev => prev + (10 * newStreak));
      
      // Show reward animation
      setShowReward({ type: 'correct', stars: 1, coins: 10 * newStreak });
      setTimeout(() => setShowReward(null), 2000);
    } else if (nextAnswers[index] !== null) {
      setStreak(0);
      if (!isPractice && lives > 0) {
        setLives(prev => prev - 1);
      }
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

    // Auto-advance in quiz mode
    if (!isPractice && nextAnswers[index] !== null) {
      clearTimeout(autoNextRef.current);
      autoNextRef.current = setTimeout(() => {
        if (index < total - 1) {
          goNext();
        } else {
          setShowSubmit(true);
          setPaused(true);
        }
      }, 2000);
    }
  }, [currentQuestion, isPractice, lockedMap, index, answers, skipped, total, streak, lives]);

  // Navigation functions
  const goPrev = () => {
    if (index > 0) {
      setIndex(i => i - 1);
      setRemaining(timerConfig?.seconds || 45);
      setShowExplanation(false);
    }
  };

  const goNext = () => {
    if (index < total - 1) {
      setIndex(i => i + 1);
      setRemaining(timerConfig?.seconds || 45);
      setShowExplanation(false);
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
    if (paused || timeUpFor !== null) return;
    
    const timer = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          setTimeUpFor(index);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [paused, timeUpFor, index]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((index + 1) / questions.length) * 100;
  const attempted = answers.filter(a => a !== null).length;
  const skippedCount = skipped.filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Top Status Bar */}
      <div className="flex items-center justify-between p-4 bg-gray-800/50 backdrop-blur-sm">
        <button 
          onClick={() => setShowQuit(true)}
          className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-4">
          {/* Lives */}
          {!isPractice && (
            <div className="flex gap-1">
              {Array.from({length: 5}).map((_, i) => (
                <div key={i} className={`w-6 h-6 ${i < lives ? 'text-red-500' : 'text-gray-600'}`}>
                  ❤️
                </div>
              ))}
            </div>
          )}
          
          {/* Coins */}
          <div className="bg-yellow-600/20 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="text-yellow-400">🪙</span>
            <span className="text-yellow-200 font-semibold">{earnedCoins}</span>
          </div>
          
          {/* Timer */}
          <div className={`px-3 py-1 rounded-full font-mono font-semibold ${
            remaining <= 10 ? 'bg-red-600/20 text-red-400 animate-pulse' :
            remaining <= 30 ? 'bg-yellow-600/20 text-yellow-400' :
            'bg-green-600/20 text-green-400'
          }`}>
            {formatTime(remaining)}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 pb-2">
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
        <div className="flex justify-center gap-1 mt-3">
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
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6 flex flex-col max-h-[calc(100vh-200px)]">
        {/* Question Card */}
        <div className="bg-gray-800 rounded-3xl p-6 mb-6 flex-shrink-0">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full mb-4">
              <span className="text-blue-400 text-xl">
                {currentQuestion.difficulty === 'easy' ? '⭐' :
                 currentQuestion.difficulty === 'medium' ? '⚡' : '🔥'}
              </span>
              <span className="text-blue-300 font-medium capitalize">{currentQuestion.difficulty}</span>
            </div>
            
            <h2 className="text-xl font-semibold leading-relaxed text-white">
              {currentQuestion.prompt}
            </h2>
          </div>
        </div>

        {/* Options Grid */}
        <div className="flex-1 grid grid-cols-1 gap-3 mb-6">
          {currentQuestion.options.map((option, optIndex) => {
            const isSelected = selected === optIndex;
            const isCorrect = optIndex === currentQuestion.answerIndex;
            const showFeedback = isPractice && selected !== null;
            
            let cardClass = "p-4 rounded-2xl transition-all duration-200 transform border-2 min-h-[64px] flex items-center ";
            
            if (showFeedback) {
              if (isSelected && isCorrect) {
                cardClass += "bg-green-600 border-green-500 text-white scale-105 shadow-lg shadow-green-600/25";
              } else if (isSelected && !isCorrect) {
                cardClass += "bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25";
              } else if (!isSelected && isCorrect) {
                cardClass += "bg-green-600/20 border-green-500 text-green-300 animate-pulse";
              } else {
                cardClass += "bg-gray-700 border-gray-600 text-gray-400";
              }
            } else if (isSelected) {
              cardClass += "bg-blue-600 border-blue-500 text-white scale-105 shadow-lg shadow-blue-600/25";
            } else {
              cardClass += "bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600 hover:scale-102";
            }

            const shapes = ['🔴', '🟢', '🔵', '🟡'];
            
            return (
              <button
                key={optIndex}
                onClick={(e) => onSelect(optIndex, e)}
                disabled={isPractice && lockedMap[index]}
                className={cardClass}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="text-2xl flex-shrink-0">{shapes[optIndex]}</div>
                  <div className="flex-1 text-left font-medium">{option}</div>
                  {showFeedback && isSelected && isCorrect && (
                    <div className="text-2xl animate-bounce">🎉</div>
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <div className="text-2xl">😔</div>
                  )}
                  {showFeedback && !isSelected && isCorrect && (
                    <div className="text-xl animate-pulse">✨</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation (Inline) */}
        {isPractice && showExplanation && selected !== null && (
          <div className="bg-gray-800 rounded-2xl p-4 mb-6 border border-gray-700">
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

      {/* Bottom Controls */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-4 flex-shrink-0">
        {/* Lifelines */}
        {!isPractice && (
          <div className="flex justify-center gap-3 mb-4">
            <button
              onClick={() => {/* 50:50 logic */}}
              disabled={used5050}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-700 px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              <span>⚡</span>
              50:50
            </button>
            <button
              onClick={() => {/* Audience logic */}}
              disabled={usedAudience}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              <span>👥</span>
              Ask Friends
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            disabled={index === 0}
            className="flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 py-3 rounded-xl font-medium transition-colors"
          >
            Previous
          </button>
          
          <button
            onClick={onSkip}
            disabled={selected !== null}
            className="flex-1 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-800 py-3 rounded-xl font-medium transition-colors"
          >
            Skip
          </button>
          
          <button
            onClick={index === total - 1 ? () => setShowSubmit(true) : goNext}
            className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium transition-colors"
          >
            {index === total - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>

      {/* Reward Animation */}
      {showReward && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-2xl text-xl font-bold animate-bounce shadow-2xl">
            +{showReward.coins} Coins!
          </div>
        </div>
      )}

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
            <h3 className="text-xl font-bold mb-2">Submit Quiz?</h3>
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
                onClick={() => setShowSubmit(false)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium"
              >
                Review
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

      {timeUpFor === index && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700">
            <div className="text-4xl mb-4 animate-pulse">⏰</div>
            <h3 className="text-xl font-bold mb-2">Time's Up!</h3>
            <p className="text-gray-400 mb-6">Let's move to the next question</p>
            <button
              onClick={() => { setTimeUpFor(null); goNext(); }}
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