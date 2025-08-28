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
  
  // Star and coin system for gamification
  const [earnedStars, setEarnedStars] = useState(0);
  const [earnedCoins, setEarnedCoins] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showReward, setShowReward] = useState(null);
  
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
      setEarnedCoins(prev => prev + (10 * newStreak)); // Bonus for streaks
      
      // Show reward animation
      setShowReward({ type: 'correct', stars: 1, coins: 10 * newStreak });
      setTimeout(() => setShowReward(null), 2000);
    } else if (nextAnswers[index] !== null) {
      setStreak(0); // Break streak on wrong answer
    }

    // Reset skipped status if answered
    if (nextAnswers[index] !== null && skipped[index]) {
      const nextSkipped = [...skipped];
      nextSkipped[index] = false;
      setSkipped(nextSkipped);
    }

    // Lock in practice mode
    if (isPractice && nextAnswers[index] !== null) {
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
  }, [currentQuestion, isPractice, lockedMap, index, answers, skipped, total, streak]);

  // Navigation functions
  const goPrev = () => {
    if (index > 0) {
      setIndex(i => i - 1);
      setRemaining(timerConfig?.seconds || 45);
    }
  };

  const goNext = () => {
    if (index < total - 1) {
      setIndex(i => i + 1);
      setRemaining(timerConfig?.seconds || 45);
    } else {
      setShowSubmit(true);
    }
  };

  const onSkip = () => {
    const next = [...skipped];
    next[index] = true;
    setSkipped(next);
    setStreak(0); // Break streak on skip
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

  const getTimerColor = () => {
    if (remaining <= 5) return "text-red-400 animate-pulse";
    if (remaining <= 15) return "text-yellow-400";
    return "text-green-400";
  };

  const progress = ((index + 1) / questions.length) * 100;
  const attempted = answers.filter(a => a !== null).length;
  const skippedCount = skipped.filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-pink-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-green-300/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 bg-blue-300/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Reward Animation Overlay */}
      {showReward && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-2xl font-bold animate-bounce shadow-2xl">
            ⭐ +{showReward.stars} Stars! 💰 +{showReward.coins} Coins!
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 p-4 sticky top-0 z-40">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => setShowQuit(true)}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:scale-105"
          >
            <span className="text-xl">👈</span>
            <span className="font-medium">Back</span>
          </button>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-xl font-bold text-white">{category}</h1>
            <p className="text-white/80 text-sm">Mode: {isPractice ? "Practice 🎯" : "Quiz 🏆"}</p>
          </div>

          {/* Score Display */}
          <div className="flex items-center gap-4">
            <div className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1">
              <span>⭐</span>
              <span className="text-white font-bold">{earnedStars}</span>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1">
              <span>💰</span>
              <span className="text-white font-bold">{earnedCoins}</span>
            </div>
            {streak > 0 && (
              <div className="bg-gradient-to-r from-orange-400 to-red-500 px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                <span>🔥</span>
                <span className="text-white font-bold">{streak}</span>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <div className="text-white text-sm">
              Question {index + 1} of {questions.length}
            </div>
            <div className={`text-lg font-mono ${getTimerColor()}`}>
              ⏰ {formatTime(remaining)}
            </div>
          </div>
          
          <div className="bg-white/20 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-400 to-emerald-500 h-full transition-all duration-500 rounded-full"
              style={{width: `${progress}%`}}
            ></div>
          </div>

          {/* Question Dots */}
          <div className="flex gap-2 mt-3 justify-center">
            {Array.from({length: questions.length}).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? 'bg-yellow-400 scale-150' :
                  answers[i] !== null ? 'bg-green-400' :
                  skipped[i] ? 'bg-orange-400' :
                  'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="max-w-2xl mx-auto p-4 mt-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Question Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">
                {currentQuestion.difficulty === 'easy' ? '🌟' :
                 currentQuestion.difficulty === 'medium' ? '⚡' : '🔥'}
              </div>
              <div>
                <h2 className="text-lg font-bold">
                  {currentQuestion.difficulty === 'easy' ? 'Easy Question!' :
                   currentQuestion.difficulty === 'medium' ? 'Medium Challenge!' : 'Hard Question!'}
                </h2>
                <p className="text-blue-100 text-sm">{currentQuestion.category}</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold leading-relaxed text-center">
              {currentQuestion.prompt}
            </h3>
          </div>

          {/* Options */}
          <div className="p-6 space-y-4">
            {currentQuestion.options.map((option, optIndex) => {
              const isSelected = selected === optIndex;
              const isCorrect = optIndex === currentQuestion.answerIndex;
              const showFeedback = isPractice && selected !== null;
              
              let buttonClass = "w-full p-4 rounded-2xl text-left font-semibold text-lg transition-all transform hover:scale-102 flex items-center gap-4 ";
              
              if (showFeedback) {
                if (isSelected && isCorrect) {
                  buttonClass += "bg-gradient-to-r from-green-400 to-emerald-500 text-white scale-105 animate-pulse";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "bg-gradient-to-r from-red-400 to-rose-500 text-white";
                } else if (!isSelected && isCorrect) {
                  buttonClass += "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-2 border-green-400";
                } else {
                  buttonClass += "bg-gray-100 text-gray-500";
                }
              } else if (isSelected) {
                buttonClass += "bg-gradient-to-r from-blue-400 to-purple-500 text-white scale-105";
              } else {
                buttonClass += "bg-gray-50 hover:bg-blue-50 text-gray-800 border-2 border-gray-200 hover:border-blue-300";
              }

              const optionLabels = ['🅰️', '🅱️', '🅲️', '🅳️'];
              
              return (
                <button
                  key={optIndex}
                  onClick={(e) => onSelect(optIndex, e)}
                  disabled={isPractice && lockedMap[index]}
                  className={buttonClass}
                >
                  <div className="text-3xl">{optionLabels[optIndex]}</div>
                  <div className="flex-1">{option}</div>
                  {showFeedback && isSelected && isCorrect && (
                    <div className="text-2xl animate-spin">🎉</div>
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <div className="text-2xl">😅</div>
                  )}
                  {showFeedback && !isSelected && isCorrect && (
                    <div className="text-xl animate-bounce">👆</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Practice Feedback */}
          {isPractice && selected !== null && (
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-t">
              <div className="text-center space-y-4">
                <div className="text-6xl animate-bounce">
                  {selected === currentQuestion.answerIndex ? '🎊' : '🤗'}
                </div>
                
                <h4 className={`text-xl font-bold ${
                  selected === currentQuestion.answerIndex ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {selected === currentQuestion.answerIndex ? 
                    "Awesome! You're a star! ⭐" : 
                    "Good try! Let's learn together! 📚"
                  }
                </h4>
                
                {currentQuestion.explanation && (
                  <div className="bg-white/80 rounded-2xl p-4 text-left">
                    <div className="flex gap-3">
                      <div className="text-2xl">💡</div>
                      <div>
                        <div className="font-bold text-blue-700 mb-2">Did you know?</div>
                        <div className="text-gray-700">{currentQuestion.explanation}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Lock Message */}
          {isPractice && lockedMap[index] && (
            <div className="bg-green-50 border-t p-4 text-center">
              <div className="inline-flex items-center gap-2 bg-green-200 px-4 py-2 rounded-full text-green-800 font-bold">
                <span>🔒</span>
                Great job! Answer saved!
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20 p-4">
        <div className="max-w-2xl mx-auto">
          {/* Lifelines for Quiz Mode */}
          {!isPractice && (
            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => {/* 50:50 logic */}}
                disabled={used5050}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2"
              >
                <span>⚡</span>
                50:50
              </button>
              <button
                onClick={() => {/* Audience logic */}}
                disabled={usedAudience}
                className="bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2"
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
              className="flex-1 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white py-3 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>👈</span>
              Previous
            </button>
            
            <button
              onClick={onSkip}
              disabled={selected !== null}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 text-white py-3 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>⏭️</span>
              Skip
            </button>
            
            <button
              onClick={goNext}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>👉</span>
              {index === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => setShowSubmit(true)}
            className="w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>🏆</span>
            Submit Quiz
          </button>
        </div>
      </div>

      {/* Modals */}
      {showQuit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center">
            <div className="text-6xl mb-4">🤔</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Want to quit?</h3>
            <p className="text-gray-600 mb-6">You'll lose all your progress and stars!</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowQuit(false)}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-all"
              >
                Keep Playing! 🎯
              </button>
              <button
                onClick={onQuit}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-xl font-bold transition-all"
              >
                Quit 😢
              </button>
            </div>
          </div>
        </div>
      )}

      {showSubmit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to finish?</h3>
            <p className="text-gray-600 mb-4">
              You answered {attempted} out of {questions.length} questions.
              {skippedCount > 0 && ` You skipped ${skippedCount} questions.`}
            </p>
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-2xl mb-6">
              <div className="flex justify-center items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl">⭐</div>
                  <div className="font-bold text-yellow-600">{earnedStars} Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">💰</div>
                  <div className="font-bold text-orange-600">{earnedCoins} Coins</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmit(false)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition-all"
              >
                Review 👀
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-all"
              >
                Submit! 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      {timeUpFor === index && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center">
            <div className="text-6xl mb-4 animate-bounce">⏰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Time's up!</h3>
            <p className="text-gray-600 mb-6">No worries! Let's move to the next question.</p>
            <button
              onClick={() => { setTimeUpFor(null); goNext(); }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition-all"
            >
              {index < questions.length - 1 ? "Next Question! 🚀" : "See Results! 🏆"}
            </button>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed top-20 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-bounce z-50">
          {toast}
        </div>
      )}
    </div>
  );
};

export default QuizSession;