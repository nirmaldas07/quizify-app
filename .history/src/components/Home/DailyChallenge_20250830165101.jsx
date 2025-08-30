//src/components/Home/DailyChallenge.jsx
import React from 'react';

export default function DailyChallenge({ 
  dailyQ, 
  isFlipped, 
  picked, 
  onAnswer, 
  dailyCompleted,
  DAILY_Q_COINS,
  DAILY_Q_XP 
}) {
  if (dailyCompleted) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl">✅</span>
          <div>
            <h3 className="font-bold">Daily Challenge Complete!</h3>
            <p className="text-sm text-base-muted">Come back tomorrow for a new challenge</p>
          </div>
        </div>
      </div>
    );
  }

  if (!dailyQ) return null;

  return (
    <div className="flip-card mb-6">
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front - Question */}
        <div className="flip-card-front">
          <div className="rounded-3xl bg-white/5 border border-base-border p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">🎯 Daily Challenge</h3>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                +{DAILY_Q_COINS} coins +{DAILY_Q_XP} XP
              </span>
            </div>
            
            <p className="text-sm mb-4 text-base-muted">{dailyQ.prompt}</p>
            
            <div className="grid grid-cols-2 gap-3">
              {dailyQ.options.map((opt, idx) => {
                const isCorrect = idx === dailyQ.answerIndex;
                const isPicked = picked === idx;
                const showResult = picked !== null;
                
                return (
                  <button
                    key={idx}
                    onClick={(e) => onAnswer(idx, e)}
                    disabled={picked !== null}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                      showResult
                        ? (isCorrect ? 'border-green-500 bg-green-500/20' : (isPicked ? 'border-red-500 bg-red-500/20' : 'border-base-border bg-white/5'))
                        : 'border-base-border bg-white/5 hover:bg-white/10'
                    } ${picked !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Back - Success */}
        <div className="flip-card-back absolute inset-0">
          <div className="rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center">
            <div className="text-6xl mb-4" style={{ animation: 'float 2s ease-in-out infinite' }}>🎉</div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Awesome!</h3>
            <p className="text-sm text-base-muted text-center">You've earned {DAILY_Q_COINS} coins & {DAILY_Q_XP} XP!</p>
            <p className="text-xs text-base-muted/70 mt-2">Come back tomorrow for more</p>
          </div>
        </div>
      </div>
    </div>
  );
}