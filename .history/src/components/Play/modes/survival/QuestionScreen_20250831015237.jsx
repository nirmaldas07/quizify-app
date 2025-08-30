// src/components/Play/modes/survival/QuestionScreen.jsx
import { useState, useEffect, useRef } from "react";
import LivesDisplay from "./LivesDisplay.jsx";

export default function QuestionScreen({ 
  question, 
  onAnswer, 
  lives,
  questionCount,
  correctStreak,
  totalScore,
  currentDifficulty,
  timeLeft,
  showFeedback,
  lastAnswerCorrect,
  checkpoint,
  onBack,
  soundOn,
  setSoundOn
}) {
  const [confirmQuit, setConfirmQuit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showStreakCelebration, setShowStreakCelebration] = useState(false);
  const [pulseScore, setPulseScore] = useState(false);
  
  const difficultyConfig = {
    EASY: { 
      emoji: '🌱', 
      color: 'from-emerald-400 to-green-500', 
      bgGradient: 'from-green-50 to-emerald-50',
      label: 'Sprout',
      motivationalText: 'Great start! Keep growing! 🌱'
    },
    MEDIUM: { 
      emoji: '🌻', 
      color: 'from-yellow-400 to-amber-500', 
      bgGradient: 'from-yellow-50 to-amber-50',
      label: 'Blooming',
      motivationalText: 'You\'re blooming beautifully! 🌻'
    },
    HARD: { 
      emoji: '🔥', 
      color: 'from-orange-400 to-red-500', 
      bgGradient: 'from-orange-50 to-red-50',
      label: 'On Fire',
      motivationalText: 'You\'re on fire! Keep it up! 🔥'
    },
    EXPERT: { 
      emoji: '⚡', 
      color: 'from-purple-400 to-indigo-500', 
      bgGradient: 'from-purple-50 to-indigo-50',
      label: 'Lightning',
      motivationalText: 'Lightning fast thinking! ⚡'
    },
    LEGENDARY: { 
      emoji: '👑', 
      color: 'from-pink-400 to-purple-600', 
      bgGradient: 'from-pink-50 to-purple-50',
      label: 'Legendary',
      motivationalText: 'Legendary performance! 👑'
    }
  };

  const diff = difficultyConfig[currentDifficulty];

  useEffect(() => {
    if (correctStreak > 0 && correctStreak % 5 === 0 && showFeedback && lastAnswerCorrect) {
      setShowStreakCelebration(true);
      setTimeout(() => setShowStreakCelebration(false), 3000);
    }
  }, [correctStreak, showFeedback, lastAnswerCorrect]);

  useEffect(() => {
    if (showFeedback && lastAnswerCorrect) {
      setPulseScore(true);
      setTimeout(() => setPulseScore(false), 1000);
    }
  }, [showFeedback, lastAnswerCorrect]);

  const handleOptionClick = (index) => {
    if (showFeedback) return;
    setSelectedIndex(index);
    onAnswer(index);
  };

  // Hide bottom nav
  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    return () => {
      document.body.classList.remove('hide-bottom-nav');
    };
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-b ${diff.bgGradient} text-slate-800 relative overflow-hidden`}>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slideInTop {
          from { transform: translateY(-100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scorePopup {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        
        @keyframes correctAnswer {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        
        @keyframes wrongAnswer {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        @keyframes streakFlame {
          0%, 100% { 
            transform: scale(1) translateY(0);
            filter: brightness(1);
          }
          50% { 
            transform: scale(1.2) translateY(-5px);
            filter: brightness(1.3);
          }
        }

        @keyframes coinFloat {
          0% { 
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: translateY(-50px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slideInTop 0.5s ease-out;
        }
        
        .score-pulse {
          animation: scorePopup 0.5s ease-out;
        }
        
        .correct-bounce {
          animation: correctAnswer 0.6s ease-out;
        }
        
        .wrong-shake {
          animation: wrongAnswer 0.4s ease-out;
        }
        
        .streak-flame {
          animation: streakFlame 2s ease-in-out infinite;
        }

        .coin-animation {
          animation: coinFloat 1s ease-out forwards;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .progress-ring {
          transform: rotate(-90deg);
          transform-origin: center;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-[100px] opacity-5 float-animation">{diff.emoji}</div>
        <div className="absolute top-40 right-20 text-[80px] opacity-5 float-animation" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-40 left-20 text-[90px] opacity-5 float-animation" style={{ animationDelay: '2s' }}>🎯</div>
        <div className="absolute bottom-20 right-10 text-[70px] opacity-5 float-animation" style={{ animationDelay: '3s' }}>🏆</div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+1rem)]">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center mb-4 slide-in">
          <button 
            onClick={() => setConfirmQuit(true)} 
            className="w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-xl">◀️</span>
          </button>
          
          <LivesDisplay lives={lives} />
          
          <button 
            onClick={() => setSoundOn(!soundOn)} 
            className="w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-xl">{soundOn ? '🔊' : '🔇'}</span>
          </button>
        </div>

        {/* Stats Dashboard */}
        <div className="glass-card rounded-3xl p-4 shadow-xl mb-4 slide-in" style={{ animationDelay: '0.1s' }}>
          <div className="grid grid-cols-3 gap-3">
            {/* Score */}
            <div className="text-center">
              <div className={`text-3xl font-black bg-gradient-to-r ${diff.color} bg-clip-text text-transparent ${pulseScore ? 'score-pulse' : ''}`}>
                {totalScore}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">Points</div>
              {showFeedback && lastAnswerCorrect && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <span className="text-green-500 font-bold text-sm coin-animation">
                    +{difficultyConfig[currentDifficulty] ? 
                      (currentDifficulty === 'EASY' ? 10 : 
                       currentDifficulty === 'MEDIUM' ? 20 : 
                       currentDifficulty === 'HARD' ? 30 : 
                       currentDifficulty === 'EXPERT' ? 50 : 100) : 10}
                  </span>
                </div>
              )}
            </div>
            
            {/* Questions */}
            <div className="text-center">
              <div className="text-3xl font-black text-slate-700">
                {questionCount}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">Questions</div>
            </div>
            
            {/* Streak */}
            <div className="text-center relative">
              <div className={`text-3xl font-black text-orange-500 ${correctStreak > 0 ? 'streak-flame' : ''}`}>
                {correctStreak}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">Streak 🔥</div>
            </div>
          </div>
        </div>

        {/* Difficulty & Timer Section */}
        <div className="flex justify-between items-center mb-6 slide-in" style={{ animationDelay: '0.2s' }}>
          {/* Difficulty Badge */}
          <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${diff.color} text-white shadow-lg`}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{diff.emoji}</span>
              <div>
                <div className="font-bold text-sm">{diff.label}</div>
                <div className="text-[10px] opacity-90">Level {questionCount + 1}</div>
              </div>
            </div>
          </div>
          
          {/* Animated Timer */}
          <div className="relative">
            <div className="w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  fill="none"
                  stroke="rgba(226, 232, 240, 0.5)"
                  strokeWidth="6"
                  className="progress-ring"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  fill="none"
                  stroke={timeLeft <= 5 ? '#ef4444' : timeLeft <= 10 ? '#f59e0b' : '#10b981'}
                  strokeWidth="6"
                  strokeDasharray={`${(timeLeft / 30) * 220} 220`}
                  strokeLinecap="round"
                  className="progress-ring transition-all duration-1000"
                />
              </svg>
              <div className="relative z-10">
                <span className={`text-2xl font-black ${
                  timeLeft <= 5 ? 'text-red-500 animate-pulse' : 
                  timeLeft <= 10 ? 'text-amber-500' : 
                  'text-slate-700'
                }`}>
                  {timeLeft}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="px-4 slide-in" style={{ animationDelay: '0.3s' }}>
        <div className="glass-card rounded-3xl shadow-xl p-6 mb-6">
          <div className="text-center mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Question {questionCount + 1}
            </span>
          </div>
          <h2 className="text-xl font-bold text-center text-slate-800 leading-relaxed">
            {question.prompt}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const letters = ['A', 'B', 'C', 'D'];
            const colors = [
              'from-blue-400 to-blue-500',
              'from-green-400 to-green-500',
              'from-yellow-400 to-yellow-500',
              'from-purple-400 to-purple-500'
            ];
            
            let cardClass = "glass-card";
            let animationClass = "";
            
            if (showFeedback) {
              if (index === question.correctIndex) {
                cardClass = "bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400";
                animationClass = "correct-bounce";
              } else if (selectedIndex === index && !lastAnswerCorrect) {
                cardClass = "bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-400";
                animationClass = "wrong-shake";
              }
            }
            
            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={showFeedback}
                className={`w-full p-4 rounded-2xl shadow-lg transition-all ${cardClass} ${animationClass} 
                  ${!showFeedback ? 'hover:scale-[1.02] active:scale-[0.98]' : ''} slide-in`}
                style={{ animationDelay: `${0.4 + index * 0.05}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`}>
                    {letters[index]}
                  </div>
                  <span className="flex-1 text-left font-medium text-slate-800">
                    {option}
                  </span>
                  {showFeedback && index === question.correctIndex && (
                    <span className="text-2xl">✅</span>
                  )}
                  {showFeedback && selectedIndex === index && !lastAnswerCorrect && (
                    <span className="text-2xl">❌</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Motivational Text */}
        {showFeedback && (
          <div className="mt-6 text-center slide-in">
            <p className="text-sm font-medium text-slate-600">
              {lastAnswerCorrect ? diff.motivationalText : "No worries! Keep trying! 💪"}
            </p>
          </div>
        )}

        {/* Checkpoint Badge */}
        {checkpoint > 0 && (
          <div className="mt-6 flex justify-center slide-in" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card rounded-full px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏁</span>
                <span className="text-sm font-bold text-slate-700">
                  Checkpoint: Question {checkpoint}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Streak Celebration */}
      {showStreakCelebration && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce">
            <div className="text-center">
              <div className="text-5xl mb-3">🎉</div>
              <div className="text-2xl font-black mb-2">AMAZING STREAK!</div>
              <div className="text-lg">You earned a life back! ❤️</div>
            </div>
          </div>
        </div>
      )}

      {/* Quit Confirmation Modal */}
      {confirmQuit && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="glass-card rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🚪</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Leave the game?</h3>
              <p className="text-slate-600">Your progress saves at checkpoints!</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setConfirmQuit(false)} 
                className="flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                Keep Playing
              </button>
              <button 
                onClick={onBack} 
                className="flex-1 py-3 bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}