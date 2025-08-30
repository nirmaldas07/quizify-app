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
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isNewHighScore) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isNewHighScore]);

  // Hide bottom nav
  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    return () => {
      document.body.classList.remove('hide-bottom-nav');
    };
  }, []);

  // Achievement levels based on questions answered
  const getAchievement = () => {
    if (questionsAnswered >= 50) return { emoji: '🏆', title: 'Quiz Champion!', color: 'from-yellow-400 to-amber-500' };
    if (questionsAnswered >= 30) return { emoji: '🥇', title: 'Quiz Master!', color: 'from-purple-400 to-indigo-500' };
    if (questionsAnswered >= 20) return { emoji: '🥈', title: 'Quiz Expert!', color: 'from-blue-400 to-cyan-500' };
    if (questionsAnswered >= 10) return { emoji: '🥉', title: 'Quiz Star!', color: 'from-green-400 to-emerald-500' };
    return { emoji: '⭐', title: 'Good Try!', color: 'from-slate-400 to-slate-500' };
  };

  const achievement = getAchievement();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-purple-50 text-slate-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-[200px] opacity-5 rotate-12 animate-pulse">🎮</div>
        <div className="absolute bottom-20 right-10 text-[150px] opacity-5 -rotate-12 animate-pulse">🎯</div>
      </div>

      {/* Confetti for new high score */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <span className="text-3xl">
                {['🎉', '⭐', '🎊', '✨', '🎈', '🏆'][Math.floor(Math.random() * 6)]}
              </span>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Game Over Title */}
        <div className="mb-8">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            Game Over!
          </h1>
          <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${achievement.color} text-white font-bold shadow-lg`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{achievement.emoji}</span>
              <span className="text-lg">{achievement.title}</span>
            </div>
          </div>
        </div>

        {/* New High Score Celebration */}
        {isNewHighScore && (
          <div className="mb-6 animate-bounce">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🏆</span>
                <div className="text-left">
                  <div className="text-sm font-medium">WOW!</div>
                  <div className="text-xl font-black">NEW RECORD!</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Score Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-sm">
          <div className="bg-white/90 backdrop-blur rounded-3xl p-6 shadow-xl">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-3xl font-black text-slate-800">{score}</div>
            <div className="text-sm text-slate-500 font-medium">Points Earned</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur rounded-3xl p-6 shadow-xl">
            <div className="text-4xl mb-2">📝</div>
            <div className="text-3xl font-black text-slate-800">{questionsAnswered}</div>
            <div className="text-sm text-slate-500 font-medium">Questions</div>
          </div>
        </div>

        {/* Previous Best */}
        {!isNewHighScore && highScore > 0 && (
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm">
              <span className="text-xl">🏅</span>
              <span className="text-sm font-medium text-slate-600">
                Your best: {highScore} points
              </span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 w-full max-w-sm">
          {checkpoint > 0 && onContinue && (
            <button 
              onClick={onContinue} 
              className="w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">🏁</span>
                <span>Continue from Question {checkpoint}</span>
              </div>
            </button>
          )}
          
          <button 
            onClick={onRestart} 
            className="w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🎮</span>
              <span>Play Again!</span>
            </div>
          </button>
          
          <button 
            onClick={onBack} 
            className="w-full py-4 bg-white/90 backdrop-blur text-slate-700 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🏠</span>
              <span>Back to Games</span>
            </div>
          </button>
        </div>

        {/* Motivational message */}
        <div className="mt-8">
          <p className="text-slate-500 font-medium">
            {questionsAnswered >= 20 
              ? "You're amazing! Keep it up! 🌟" 
              : "Practice makes perfect! Try again! 💪"}
          </p>
        </div>
      </div>
    </div>
  );
}