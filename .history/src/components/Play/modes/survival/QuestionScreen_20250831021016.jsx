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
  
  const difficultyConfig = {
    EASY: { emoji: '🌱', color: 'from-emerald-400 to-green-500', label: 'Sprout' },
    MEDIUM: { emoji: '🌻', color: 'from-yellow-400 to-amber-500', label: 'Blooming' },
    HARD: { emoji: '🔥', color: 'from-orange-400 to-red-500', label: 'On Fire' },
    EXPERT: { emoji: '⚡', color: 'from-purple-400 to-indigo-500', label: 'Lightning' },
    LEGENDARY: { emoji: '👑', color: 'from-pink-400 to-purple-600', label: 'Legendary' }
  };

  const diff = difficultyConfig[currentDifficulty];

  useEffect(() => {
    if (correctStreak > 0 && correctStreak % 5 === 0 && showFeedback && lastAnswerCorrect) {
      setShowStreakCelebration(true);
      setTimeout(() => setShowStreakCelebration(false), 3000);
    }
  }, [correctStreak, showFeedback, lastAnswerCorrect]);

  const handleOptionClick = (index) => {
    if (showFeedback) return;
    setSelectedIndex(index);
    onAnswer(index);
  };

  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    return () => {
      document.body.classList.remove('hide-bottom-nav');
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white flex flex-col">
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Compact Header - Fixed height */}
      <div className="px-4 pt-safe pb-3">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-3">
          <button 
            onClick={() => setConfirmQuit(true)} 
            className="w-10 h-10 glass-card rounded-xl flex items-center justify-center"
          >
            <span className="text-lg">◀️</span>
          </button>
          
          <LivesDisplay lives={lives} />
          
          <button 
            onClick={() => setSoundOn(!soundOn)} 
            className="w-10 h-10 glass-card rounded-xl flex items-center justify-center"
          >
            <span className="text-lg">{soundOn ? '🔊' : '🔇'}</span>
          </button>
        </div>

        {/* Compact Stats Bar */}
        <div className="glass-card rounded-2xl p-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className={`text-2xl font-black bg-gradient-to-r ${diff.color} bg-clip-text text-transparent`}>
                {totalScore}
              </div>
              <div className="text-[10px] text-white/50">Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">{questionCount}</div>
              <div className="text-[10px] text-white/50">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-orange-400">{correctStreak}</div>
              <div className="text-[10px] text-white/50">Streak 🔥</div>
            </div>
          </div>
        </div>

        {/* Difficulty & Timer Row */}
        <div className="flex justify-between items-center mt-3">
          <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${diff.color} text-white text-sm shadow-lg flex items-center gap-1.5`}>
            <span className="text-lg">{diff.emoji}</span>
            <span className="font-bold text-xs">{diff.label}</span>
            <span className="text-[10px] opacity-75">Lvl {questionCount + 1}</span>
          </div>
          
          <div className="relative">
            <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                <circle 
                  cx="32" cy="32" r="28" fill="none" 
                  stroke={timeLeft <= 5 ? '#ef4444' : timeLeft <= 10 ? '#f59e0b' : '#10b981'}
                  strokeWidth="4" strokeDasharray={`${(timeLeft / 30) * 176} 176`}
                  strokeLinecap="round" className="transition-all duration-1000"
                />
              </svg>
              <span className={`text-xl font-black ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                {timeLeft}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable if needed */}
      <div className="flex-1 px-4 pb-4 overflow-y-auto">
        {/* Question Card */}
        <div className="glass-card rounded-2xl p-5 mb-4">
          <div className="text-center mb-1">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">
              Question {questionCount + 1}
            </span>
          </div>
          <h2 className="text-lg font-bold text-center text-white leading-snug">
            {question.prompt}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="space-y-2.5">
          {question.options.map((option, index) => {
            const letters = ['A', 'B', 'C', 'D'];
            const colors = ['from-blue-400 to-blue-500', 'from-green-400 to-green-500', 
                           'from-yellow-400 to-yellow-500', 'from-purple-400 to-purple-500'];
            
            let cardClass = "glass-card border border-white/10";
            
            if (showFeedback) {
              if (index === question.correctIndex) {
                cardClass = "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400";
              } else if (selectedIndex === index && !lastAnswerCorrect) {
                cardClass = "bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400";
              }
            }
            
            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={showFeedback}
                className={`w-full p-3.5 rounded-xl transition-all ${cardClass} 
                  ${!showFeedback ? 'hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors[index]} 
                    text-white font-bold text-lg flex items-center justify-center shadow-md flex-shrink-0`}>
                    {letters[index]}
                  </div>
                  <span className="flex-1 text-left font-medium text-white text-sm">
                    {option}
                  </span>
                  {showFeedback && index === question.correctIndex && (
                    <span className="text-xl">✅</span>
                  )}
                  {showFeedback && selectedIndex === index && !lastAnswerCorrect && (
                    <span className="text-xl">❌</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Checkpoint Badge */}
        {checkpoint > 0 && (
          <div className="mt-4 flex justify-center">
            <div className="glass-card rounded-full px-3 py-1.5 flex items-center gap-2">
              <span className="text-sm">🏁</span>
              <span className="text-xs font-bold text-white/70">Checkpoint: Question {checkpoint}</span>
            </div>
          </div>
        )}
      </div>

      {/* Streak Celebration Overlay */}
      {showStreakCelebration && (
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-2xl shadow-2xl animate-bounce">
            <div className="text-center">
              <div className="text-3xl mb-2">🎉</div>
              <div className="text-lg font-black">AMAZING STREAK!</div>
              <div className="text-sm">You earned a life back! ❤️</div>
            </div>
          </div>
        </div>
      )}

      {/* Quit Modal */}
      {confirmQuit && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 max-w-sm w-full border border-white/10">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🚪</div>
              <h3 className="text-lg font-bold text-white mb-1">Leave the game?</h3>
              <p className="text-white/60 text-sm">Your progress saves at checkpoints!</p>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setConfirmQuit(false)} 
                className="flex-1 py-2.5 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-bold"
              >
                Keep Playing
              </button>
              <button 
                onClick={onBack} 
                className="flex-1 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold"
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