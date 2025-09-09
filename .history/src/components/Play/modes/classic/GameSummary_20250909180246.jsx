// src/components/Play/modes/classic/GameSummary.jsx

import { useEffect, useState } from "react";
import { playSound } from "../../../../utils/gameHelpers";

export default function GameSummary({ 
  stats, 
  onPlayAgain, 
  onExit,
  soundOn = true 
}) {
  const [showElements, setShowElements] = useState([false, false, false, false]);
  
  // Default stats if not provided
  const gameStats = stats || {
    correctAnswers: 0,
    totalQuestions: 3,
    coinsEarned: 0,
    xpEarned: 0,
    perfectRound: false,
    characterUnlocked: null,
    bonusCorrect: false
  };

  const accuracy = Math.round((gameStats.correctAnswers / gameStats.totalQuestions) * 100);
  const isPerfect = gameStats.perfectRound;

  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    
    // Play celebration sound
    if (soundOn) {
      playSound(isPerfect ? "/sounds/win.mp3" : "/sounds/complete.mp3", 0.7);
    }

    // Stagger animations
    const timers = [
      setTimeout(() => setShowElements([true, false, false, false]), 200),
      setTimeout(() => setShowElements([true, true, false, false]), 500),
      setTimeout(() => setShowElements([true, true, true, false]), 800),
      setTimeout(() => setShowElements([true, true, true, true]), 1100)
    ];
    
    return () => {
      timers.forEach(clearTimeout);
      document.body.classList.remove('hide-bottom-nav');
    };
  }, [soundOn, isPerfect]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white relative overflow-hidden">
      <style>{`
        @keyframes float-in {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes star-rain {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>

      {/* Celebration particles for perfect round */}
      {isPerfect && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `star-rain ${5 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              {['⭐', '✨', '🌟'][Math.floor(Math.random() * 3)]}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-md mx-auto px-5 pt-16 pb-8">
        {/* Header */}
        <div 
          className={`text-center mb-8 transform transition-all duration-700 ${
            showElements[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-6xl mb-4">
            {isPerfect ? '🏆' : accuracy >= 66 ? '⭐' : '✅'}
          </div>
          <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            {isPerfect ? 'Perfect Game!' : accuracy >= 66 ? 'Great Job!' : 'Good Try!'}
          </h1>
          <p className="text-lg text-white/70">Round Complete</p>
        </div>

        {/* Stats Cards */}
        <div className="space-y-4 mb-8">
          {/* Score Card */}
          <div 
            className={`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${
              showElements[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-white/60">Score</span>
              <span className="text-2xl font-bold">{gameStats.correctAnswers}/{gameStats.totalQuestions}</span>
            </div>
            
            {/* Accuracy bar */}
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000"
                style={{ width: `${showElements[1] ? accuracy : 0}%` }}
              />
            </div>
            <div className="text-right text-sm text-white/60 mt-2">{accuracy}% Accuracy</div>
          </div>

          {/* Rewards Card */}
          <div 
            className={`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${
              showElements[2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="text-white/60 mb-4">Rewards Earned</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">🪙</div>
                <div className="text-2xl font-bold text-yellow-400">+{gameStats.coinsEarned}</div>
                <div className="text-xs text-white/60">Coins</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-blue-400">+{gameStats.xpEarned}</div>
                <div className="text-xs text-white/60">XP</div>
              </div>
            </div>
          </div>

          {/* Character Unlock Card (if applicable) */}
          {gameStats.characterUnlocked && (
            <div 
              className={`bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/30 transform transition-all duration-700 ${
                showElements[2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">{gameStats.characterUnlocked.icon}</div>
                <div className="text-lg font-bold text-purple-300">Character Unlocked!</div>
                <div className="text-sm text-white/60">{gameStats.characterUnlocked.name}</div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div 
          className={`space-y-3 transform transition-all duration-700 ${
            showElements[3] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button
            onClick={onPlayAgain}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-transform -mt-4"
          >
            Play Again
          </button>
          
          <button
            onClick={onExit}
            className="w-full py-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white font-bold text-lg hover:bg-white/20 active:scale-95 transition-all -mt-2"
          >
            Back to Games
          </button>
        </div>

        {/* Achievement hints */}
        {isPerfect && (
          <div className="text-center mt-6 text-sm text-white/40">
            🎯 Try other categories to unlock more characters!
          </div>
        )}
      </div>
    </div>
  );
}