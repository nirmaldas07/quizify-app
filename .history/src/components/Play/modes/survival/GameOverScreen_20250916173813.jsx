// src/components/Play/modes/survival/GameOverScreen.jsx
import { useEffect, useState, useRef } from 'react';

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
  const [animateScore, setAnimateScore] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const scoreRef = useRef(null);

  useEffect(() => {
    // Animate score counting up
    const duration = 2000;
    const steps = 60;
    const increment = score / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setAnimateScore(score);
        clearInterval(timer);
        if (isNewHighScore) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000);
        }
      } else {
        setAnimateScore(Math.floor(current));
      }
    }, duration / steps);

    // Show achievement after score animation
    setTimeout(() => setShowAchievement(true), 2200);

    return () => clearInterval(timer);
  }, [score, isNewHighScore]);

  // Hide bottom nav
  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    return () => {
      document.body.classList.remove('hide-bottom-nav');
    };
  }, []);

  // Achievement levels
  const getAchievement = () => {
    if (questionsAnswered >= 100) return { 
      emoji: '👑', 
      title: 'LEGENDARY!', 
      subtitle: 'You\'re a true Quiz Legend!',
      color: 'from-purple-400 to-pink-500',
      stars: 5
    };
    if (questionsAnswered >= 50) return { 
      emoji: '🏆', 
      title: 'CHAMPION!', 
      subtitle: 'Outstanding performance!',
      color: 'from-yellow-400 to-amber-500',
      stars: 5
    };
    if (questionsAnswered >= 30) return { 
      emoji: '💎', 
      title: 'EXPERT!', 
      subtitle: 'You\'re getting really good!',
      color: 'from-blue-400 to-cyan-500',
      stars: 4
    };
    if (questionsAnswered >= 20) return { 
      emoji: '⭐', 
      title: 'STAR PLAYER!', 
      subtitle: 'Keep up the great work!',
      color: 'from-green-400 to-emerald-500',
      stars: 3
    };
    if (questionsAnswered >= 10) return { 
      emoji: '🎯', 
      title: 'NICE TRY!', 
      subtitle: 'You\'re improving fast!',
      color: 'from-orange-400 to-red-500',
      stars: 2
    };
    return { 
      emoji: '🌟', 
      title: 'GOOD START!', 
      subtitle: 'Every expert was once a beginner!',
      color: 'from-indigo-400 to-purple-500',
      stars: 1
    };
  };

  const achievement = getAchievement();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes confettiFall {
          0% { 
            transform: translateY(-100vh) rotate(0deg); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh) rotate(720deg); 
            opacity: 0; 
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
          50% { 
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
          }
        }
        
        @keyframes starPop {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .sparkle-animation {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        
        .confetti-fall {
          animation: confettiFall 3s linear infinite;
        }
        
        .glow-text {
          animation: glow 2s ease-in-out infinite;
        }
        
        .star-pop {
          animation: starPop 0.6s ease-out;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-[150px] opacity-5 float-animation">🏆</div>
        <div className="absolute bottom-20 right-10 text-[120px] opacity-5 float-animation" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute top-40 right-20 text-[100px] opacity-5 float-animation" style={{ animationDelay: '2s' }}>🎯</div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute confetti-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <span className="text-3xl">
                {['🎉', '⭐', '🎊', '✨', '🎈', '💫', '🌟'][Math.floor(Math.random() * 7)]}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Game Over Title */}
        <div className="mb-8 slide-up">
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            GAME OVER
          </h1>
          
          {isNewHighScore && (
            <div className="fade-in" style={{ animationDelay: '1s' }}>
              <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  <span className="text-xl">NEW HIGH SCORE!</span>
                  <span className="text-3xl">🏆</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Achievement Badge */}
        {showAchievement && (
          <div className="mb-8 slide-up" style={{ animationDelay: '0.3s' }}>
            <div className={`glass-card rounded-3xl p-6 bg-gradient-to-r ${achievement.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`}>
              <div className="text-6xl mb-3 bounce-animation">{achievement.emoji}</div>
              <h2 className="text-3xl font-black mb-2">{achievement.title}</h2>
              <p className="text-white/80 mb-4">{achievement.subtitle}</p>
              
              {/* Star Rating */}
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-2xl ${i < achievement.stars ? 'star-pop' : ''}`}
                    style={{ animationDelay: `${2.5 + i * 0.1}s` }}
                  >
                    {i < achievement.stars ? '⭐' : '☆'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Score Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-md">
          <div className="glass-card rounded-2xl p-6 shadow-xl slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl mb-2">🎯</div>
            <div ref={scoreRef} className={`text-4xl font-black ${isNewHighScore ? 'text-yellow-400' : 'text-white'}`}>
              {animateScore}
            </div>
            <div className="text-sm text-white/60 font-medium">Points Earned</div>
            
            {/* Points breakdown */}
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="text-xs text-white/50">
                {questionsAnswered} questions
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-6 shadow-xl slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl mb-2">📊</div>
            <div className="text-4xl font-black text-white">{questionsAnswered}</div>
            <div className="text-sm text-white/60 font-medium">Questions</div>
            
            {/* Personal best indicator */}
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="text-xs text-white/50">
                Best: {Math.max(highScore, score)}
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-white/80 font-medium">
            {questionsAnswered >= 50 
              ? "Incredible performance! You're a quiz master! 🌟" 
              : questionsAnswered >= 20
              ? "Great job! You're getting stronger! 💪"
              : "Keep practicing! Every attempt makes you better! 🚀"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 w-full max-w-md">
          {checkpoint > 0 && onContinue && (
            <button 
              onClick={onContinue} 
              className="w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">🏁</span>
                <span>Continue from Question {checkpoint}</span>
              </div>
            </button>
          )}
          
          <button 
            onClick={onRestart} 
            className="w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🎮</span>
              <span>Play Again</span>
            </div>
          </button>
          
            <button 
            onClick={() => {
              // Set a flag to prevent the warning dialog
              window.skipSurvivalWarning = true;
              // Call the original onBack
              onBack();
              // Clean up the flag after a short delay
              setTimeout(() => {
                delete window.skipSurvivalWarning;
              }, 500);
            }} 
            className="w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up"
            style={{ animationDelay: '0.9s' }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🏠</span>
              <span>Back to Games</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}