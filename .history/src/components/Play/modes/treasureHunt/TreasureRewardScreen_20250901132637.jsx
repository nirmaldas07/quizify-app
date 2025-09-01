// src/components/Play/modes/treasureHunt/TreasureRewardScreen.jsx

import { useState, useEffect } from "react";
import { GAME_CONSTANTS, getMotivationalMessage } from "./data/islandConfig.js";

export default function TreasureRewardScreen({
  island,
  session,
  earnedTreasure,
  onRetry,
  onContinue,
  soundOn
}) {
  const [animateCoins, setAnimateCoins] = useState(0);
  const [showTreasure, setShowTreasure] = useState(false);
  const [showStars, setShowStars] = useState(false);
  
  const perfectScore = session.correctAnswers === GAME_CONSTANTS.QUESTIONS_PER_ISLAND;
  const motivationalMessage = getMotivationalMessage(session.correctAnswers, island.id);

  useEffect(() => {
    // Animate coin counting
    const targetCoins = session.coinsEarned;
    const duration = 2000;
    const steps = 30;
    const increment = targetCoins / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCoins) {
        setAnimateCoins(targetCoins);
        clearInterval(timer);
        
        // Show treasure after coins
        if (earnedTreasure) {
          setTimeout(() => setShowTreasure(true), 500);
        }
        
        // Show stars after treasure
        setTimeout(() => setShowStars(true), earnedTreasure ? 1500 : 500);
      } else {
        setAnimateCoins(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [session.coinsEarned, earnedTreasure]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br ${island.theme.background} overflow-hidden flex flex-col`}>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes treasureShine {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        
        @keyframes starPop {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .treasure-shine {
          animation: treasureShine 1s ease-out forwards;
        }
        
        .star-pop {
          animation: starPop 0.5s ease-out forwards;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .confetti-fall {
          animation: confetti 3s linear infinite;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {perfectScore && [...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute confetti-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${20 + Math.random() * 20}px`
            }}
          >
            {['🎉', '⭐', '🎊', '✨'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4">

        {/* Title */}
        <div className="mb-3 text-center slide-up">
          <h1 className="text-2xl font-black text-white mb-2">
            {earnedTreasure ? 'TREASURE FOUND!' : 'ISLAND COMPLETE!'}
          </h1>
          <div className="text-5xl bounce-animation">
            {earnedTreasure ? island.rewards.treasurePiece : '🏝️'}
          </div>
        </div>

        {/* Results Card */}
        <div className="glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up" style={{ animationDelay: '0.2s', background: 'rgba(58, 57, 38, 0.25)' }}>
          {/* Score */}
          <div className="text-center mb-2">
            <div className="text-3xl font-black text-white mb-1">
              {session.correctAnswers}/{GAME_CONSTANTS.QUESTIONS_PER_ISLAND}
            </div>
            <div className="text-white/80 font-medium">Questions Correct</div>
          </div>

          {/* Stars */}
          {showStars && (
            <div className="flex justify-center gap-2 mb-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`text-3xl ${i < session.correctAnswers ? 'star-pop' : ''}`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {i < session.correctAnswers ? '⭐' : '☆'}
                </div>
              ))}
            </div>
          )}

          {/* Treasure Piece */}
          {showTreasure && earnedTreasure && (
            <div className="text-center mb-2">
              <div className="text-5xl treasure-shine mb-1">
                {island.rewards.treasurePiece}
              </div>
              <div className="text-white font-bold text-lg">Treasure Piece Earned!</div>
            </div>
          )}

          {/* Coins & Gems */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="glass-card rounded-2xl p-4 text-center">
              <div className="text-4xl mb-1">🪙</div>
              <div className="text-3xl font-black text-yellow-300">{animateCoins}</div>
              <div className="text-white/70 text-sm">Coins Earned</div>
            </div>
            <div className="glass-card rounded-2xl p-4 text-center">
              <div className="text-4xl mb-2">💎</div>
              <div className="text-3xl font-black text-cyan-300">{session.gemsFound}</div>
              <div className="text-white/70 text-sm">Gems Found</div>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="text-center p-4 bg-white/10 rounded-1xl">
            <p className="text-white font-medium text-lg">{motivationalMessage}</p>
          </div>

          {/* Perfect Score Badge */}
          {perfectScore && (
            <div className="mt-4 text-center">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full">
                <span className="text-white font-black text-lg">💯 PERFECT SCORE! 💯</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 w-full max-w-md slide-up" style={{ animationDelay: '0.4s' }}>
          {!earnedTreasure && (
            <button
              onClick={onRetry}
              className="w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">🔄</span>
                <span>Try Again</span>
              </div>
            </button>
          )}
          
          <button
            onClick={onContinue}
            className="w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🗺️</span>
              <span>Back to Map</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}