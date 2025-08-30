// src/components/Play/modes/survival/QuestionScreen.jsx
import { useState } from "react";
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
  
  const difficultyColors = {
    EASY: 'bg-green-500',
    MEDIUM: 'bg-yellow-500',
    HARD: 'bg-orange-500',
    EXPERT: 'bg-red-500',
    LEGENDARY: 'bg-purple-500'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header */}
      <div className="px-5 pt-16 pb-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setConfirmQuit(true)} className="p-2">←</button>
          <LivesDisplay lives={lives} />
          <button onClick={() => setSoundOn(!soundOn)} className="p-2">
            {soundOn ? '🔊' : '🔇'}
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-white/10 rounded p-2 text-center">
            <div className="text-xs opacity-70">Score</div>
            <div className="font-bold">{totalScore}</div>
          </div>
          <div className="bg-white/10 rounded p-2 text-center">
            <div className="text-xs opacity-70">Questions</div>
            <div className="font-bold">{questionCount}</div>
          </div>
          <div className="bg-white/10 rounded p-2 text-center">
            <div className="text-xs opacity-70">Streak</div>
            <div className="font-bold">🔥 {correctStreak}</div>
          </div>
        </div>
        
        {/* Difficulty & Timer */}
        <div className="flex justify-between items-center mb-6">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColors[currentDifficulty]}`}>
            {currentDifficulty}
          </span>
          <div className={`text-2xl font-bold ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : ''}`}>
            {timeLeft}s
          </div>
        </div>
      </div>
      
      {/* Question */}
      <div className="px-5">
        <h2 className="text-xl mb-6">{question.prompt}</h2>
        
        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let bgClass = "bg-white/10";
            if (showFeedback) {
              if (index === question.correctIndex) {
                bgClass = "bg-green-500/30";
              } else if (index === question.correctIndex - 1 && !lastAnswerCorrect) {
                bgClass = "bg-red-500/30";
              }
            }
            
            return (
              <button
                key={index}
                onClick={() => onAnswer(index)}
                disabled={showFeedback}
                className={`w-full p-4 rounded-xl ${bgClass} transition-all`}
              >
                {option}
              </button>
            );
          })}
        </div>
        
        {checkpoint > 0 && (
          <div className="mt-4 text-center text-sm opacity-70">
            Checkpoint: Question {checkpoint}
          </div>
        )}
      </div>
      
      {/* Quit Confirmation */}
      {confirmQuit && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-base-card p-6 rounded-xl max-w-sm">
            <h3 className="text-lg font-bold mb-2">Quit Game?</h3>
            <p className="mb-4">Your progress will be saved at the last checkpoint.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmQuit(false)} className="flex-1 p-2 bg-white/10 rounded">
                Cancel
              </button>
              <button onClick={onBack} className="flex-1 p-2 bg-red-500 rounded">
                Quit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}