// src/components/Play/modes/survival/GameOverScreen.jsx
import { useEffect, useState } from 'react';

export default function GameOverScreen({ 
  score, 
  questionsAnswered, 
  highScore,
  checkpoint,
  onRestart,
  onContinue,
  onBack
}) {
  const isNewHighScore = score > highScore;
  const [animateScore, setAnimateScore] = useState(0);

  useEffect(() => {
    // Quick score animation
    const duration = 1000;
    const steps = 30;
    const increment = score / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setAnimateScore(score);
        clearInterval(timer);
      } else {
        setAnimateScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score]);

  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    return () => {
      document.body.classList.remove('hide-bottom-nav');
    };
  }, []);

  const getAchievement = () => {
    if (questionsAnswered >= 100) return { 
      emoji: '👑', title: 'LEGENDARY!', subtitle: 'You\'re a Quiz Legend!',
      color: 'from-purple-400 to-pink-500', stars: 5
    };
    if (questionsAnswered >= 50) return { 
      emoji: '🏆', title: 'CHAMPION!', subtitle: 'Outstanding performance!',
      color: 'from-yellow-400 to-amber-500', stars: 5
    };
    if (questionsAnswered >= 30) return { 
      emoji: '💎', title: 'EXPERT!', subtitle: 'You\'re really good!',
      color: 'from-blue-400 to-cyan-500', stars: 4
    };
    if (questionsAnswered >= 20) return { 
      emoji: '⭐', title: 'STAR PLAYER!', subtitle: 'Keep up the great work!',
      color: 'from-green-400 to-emerald-500', stars: 3
    };
    if (questionsAnswered >= 10) return { 
      emoji: '🎯', title: 'NICE TRY!', subtitle: 'You\'re improving!',
      color: 'from-orange-400 to-red-500', stars: 2
    };
    return { 
      emoji: '🌟', title: 'GOOD START!', subtitle: 'Keep practicing!',
      color: 'from-indigo-400 to-purple-500', stars: 1
    };
  };

  const achievement = getAchievement();

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white flex flex-col">
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
        {/* Title */}
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
          GAME OVER
        </h1>
        
        {isNewHighScore && (
          <div className="mb-3">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold">
              🏆 NEW HIGH SCORE! 🏆
            </div>
          </div>
        )}

        {/* Achievement Card */}
        <div className={`glass-card rounded-2xl p-4 mb-4 w-full bg-gradient-to-r ${achievement.color} bg-opacity-20`}>
          <div className="text-center">
            <div className="text-5xl mb-2">{achievement.emoji}</div>
            <h2 className="text-2xl font-black mb-1">{achievement.title}</h2>
            <p className="text-white/70 text-sm mb-2">{achievement.subtitle}</p>
            
            {/* Stars */}
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">
                  {i < achievement.stars ? '⭐' : '☆'}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4 w-full">
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-3xl mb-1">🎯</div>
            <div className={`text-3xl font-black ${isNewHighScore ? 'text-yellow-400' : 'text-white'}`}>
              {animateScore}
            </div>
            <div className="text-xs text-white/50">Points Earned</div>
            <div className="text-[10px] text-white/40 mt-1">{questionsAnswered} questions</div>
          </div>
          
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-3xl mb-1">📊</div>
            <div className="text-3xl font-black">{questionsAnswered}</div>
            <div className="text-xs text-white/50">Questions</div>
            <div className="text-[10px] text-white/40 mt-1">Best: {Math.max(highScore, score)}</div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="glass-card rounded-xl px-4 py-3 mb-4 w-full">
          <p className="text-white/70 text-sm font-medium text-center">
            {questionsAnswered >= 20 
              ? "Great job! You're getting stronger! 💪"
              : "Keep practicing! Every attempt makes you better! 🚀"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 w-full">
          {checkpoint > 0 && onContinue && (
            <button 
              onClick={onContinue} 
              className="w-full py-3.5 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-bold text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>🏁</span>
              <span>Continue from Question {checkpoint}</span>
            </button>
          )}
          
          <button 
            onClick={onRestart} 
            className="w-full py-3.5 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-xl font-bold text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>🎮</span>
            <span>Play Again</span>
          </button>
          
          <button 
            onClick={onBack} 
            className="w-full py-3.5 glass-card text-white rounded-xl font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <span>🏠</span>
            <span>Back to Games</span>
          </button>
        </div>
      </div>
    </div>
  );
}