// src/components/Play/modes/survival/QuestionScreen.jsx
import { useState, useEffect } from "react";
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
  
  const difficultyEmojis = {
    EASY: { emoji: '🌱', color: 'from-green-400 to-emerald-500', label: 'Sprout' },
    MEDIUM: { emoji: '🌻', color: 'from-yellow-400 to-amber-500', label: 'Blooming' },
    HARD: { emoji: '🔥', color: 'from-orange-400 to-red-500', label: 'On Fire' },
    EXPERT: { emoji: '⚡', color: 'from-purple-400 to-indigo-500', label: 'Lightning' },
    LEGENDARY: { emoji: '🌟', color: 'from-pink-400 to-purple-600', label: 'Superstar' }
  };

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

  const diff = difficultyEmojis[currentDifficulty];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800">
      {/* Playful background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl rotate-12">🎮</div>
        <div className="absolute top-40 right-20 text-6xl -rotate-12">⭐</div>
        <div className="absolute bottom-20 left-20 text-7xl rotate-45">🎯</div>
        <div className="absolute bottom-40 right-10 text-9xl -rotate-45">🎨</div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="px-5 pt-[calc(env(safe-area-inset-top)+1rem)]">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={() => setConfirmQuit(true)} 
              className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur shadow-sm flex items-center justify-center text-2xl hover:scale-105 transition-transform"
            >
              ◀️
            </button>
            
            <LivesDisplay lives={lives} />
            
            <button 
              onClick={() => setSoundOn(!soundOn)} 
              className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur shadow-sm flex items-center justify-center text-2xl hover:scale-105 transition-transform"
            >
              {soundOn ? '🔊' : '🔇'}
            </button>
          </div>

          {/* Score Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/90 backdrop-blur rounded-2xl p-3 shadow-sm">
              <div className="text-center">
                <div className="text-3xl mb-1">🏆</div>
                <div className="text-2xl font-bold text-slate-800">{totalScore}</div>
                <div className="text-xs text-slate-500">Points</div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur rounded-2xl p-3 shadow-sm">
              <div className="text-center">
                <div className="text-3xl mb-1">📝</div>
                <div className="text-2xl font-bold text-slate-800">{questionCount}</div>
                <div className="text-xs text-slate-500">Solved</div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur rounded-2xl p-3 shadow-sm">
              <div className="text-center">
                <div className="text-3xl mb-1">🔥</div>
                <div className="text-2xl font-bold text-slate-800">{correctStreak}</div>
                <div className="text-xs text-slate-500">Streak</div>
              </div>
            </div>
          </div>

          {/* Difficulty Badge & Timer */}
          <div className="flex justify-between items-center mb-8">
            <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${diff.color} text-white shadow-lg`}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{diff.emoji}</span>
                <span className="font-bold text-sm">{diff.label}</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="8"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke={timeLeft <= 5 ? '#ef4444' : '#3b82f6'}
                    strokeWidth="8"
                    strokeDasharray={`${(timeLeft / 30) * 226} 226`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <span className={`relative text-2xl font-bold ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-slate-800'}`}>
                  {timeLeft}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="px-5">
          <div className="bg-white/95 backdrop-blur rounded-3xl shadow-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-center leading-relaxed text-slate-800">
              {question.prompt}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const letters = ['A', 'B', 'C', 'D'];
              const colors = ['from-blue-400 to-blue-500', 'from-green-400 to-green-500', 'from-yellow-400 to-yellow-500', 'from-purple-400 to-purple-500'];
              
              let cardClass = "bg-white/90 backdrop-blur";
              let borderClass = "border-2 border-transparent";
              let scaleClass = "hover:scale-[1.02] active:scale-[0.98]";
              
              if (showFeedback) {
                scaleClass = "";
                if (index === question.correctIndex) {
                  cardClass = "bg-gradient-to-r from-green-100 to-emerald-100";
                  borderClass = "border-2 border-green-400 ring-4 ring-green-200";
                } else if (selectedIndex === index && !lastAnswerCorrect) {
                  cardClass = "bg-gradient-to-r from-red-100 to-pink-100";
                  borderClass = "border-2 border-red-400 ring-4 ring-red-200";
                }
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={showFeedback}
                  className={`w-full p-4 rounded-2xl shadow-md transition-all duration-300 ${cardClass} ${borderClass} ${scaleClass}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} text-white font-bold text-xl flex items-center justify-center shadow-sm`}>
                      {letters[index]}
                    </div>
                    <span className="flex-1 text-left font-medium text-slate-800">
                      {option}
                    </span>
                    {showFeedback && index === question.correctIndex && (
                      <span className="text-2xl animate-bounce">✅</span>
                    )}
                    {showFeedback && selectedIndex === index && !lastAnswerCorrect && (
                      <span className="text-2xl">❌</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Checkpoint indicator */}
          {checkpoint > 0 && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm">
                <span className="text-xl">🏁</span>
                <span className="text-sm font-medium text-slate-600">
                  Checkpoint saved at question {checkpoint}
                </span>
              </div>
            </div>
          )}

          {/* Streak celebration */}
          {correctStreak > 0 && correctStreak % 5 === 0 && showFeedback && lastAnswerCorrect && (
            <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-3xl shadow-2xl animate-bounce">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <div className="text-xl font-bold">Amazing Streak!</div>
                  <div className="text-sm">You earned a life back!</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quit Confirmation */}
      {confirmQuit && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🚪</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Leave the game?</h3>
              <p className="text-slate-600">Your progress saves at checkpoints!</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setConfirmQuit(false)} 
                className="flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Keep Playing
              </button>
              <button 
                onClick={onBack} 
                className="flex-1 py-3 bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
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