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
    <div className={`fixed inset-0 bg-gradient-to-br ${island.theme.background} overflow-hidden`}>
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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
        
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
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
        
        .confetti-fall {
          animation: confetti 3s linear infinite;
        }
        
        .glass-card-dark {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {perfectScore && [...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute confetti-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${20 + Math.random() * 15}px`
            }}
          >
            {['🎉', '⭐', '🎊', '✨'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col h-full px-4 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+1rem)]">
        {/* Title - Compact */}
        <div className="text-center mb-3 slide-up">
          <h1 className="text-2xl font-black text-white drop-shadow-lg mb-2">
            {earnedTreasure ? 'TREASURE FOUND!' : 'ISLAND COMPLETE!'}
          </h1>
          <div className="text-5xl bounce-animation">
            {earnedTreasure ? island.rewards.treasurePiece : '🏝️'}
          </div>
        </div>

        {/* Results Card - More Compact */}
        <div className="glass-card-dark rounded-2xl p-3 max-w-sm w-full mx-auto mb-3 slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Score */}
          <div className="text-center mb-2">
            <div className="text-3xl font-black text-white drop-shadow-md">
              {session.correctAnswers}/{GAME_CONSTANTS.QUESTIONS_PER_ISLAND}
            </div>
            <div className="text-white/90 text-xs font-medium">Questions Correct</div>
          </div>

          {/* Stars */}
          {showStars && (
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`text-2xl ${i < session.correctAnswers ? 'star-pop' : ''}`}
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
              <div className="text-4xl treasure-shine mb-1">
                {island.rewards.treasurePiece}
              </div>
              <div className="text-white font-bold text-sm drop-shadow-md">Treasure Piece Earned!</div>
            </div>
          )}

          {/* Coins & Gems - Compact Grid */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="glass-card-dark rounded-lg p-2 text-center">
              <div className="text-xl">💰</div>
              <div className="text-lg font-black text-yellow-300 drop-shadow-md">{animateCoins}</div>
              <div className="text-white/80 text-[10px]">Coins Earned</div>
            </div>
            <div className="glass-card-dark rounded-lg p-2 text-center">
              <div className="text-xl">💎</div>
              <div className="text-lg font-black text-cyan-300 drop-shadow-md">{session.gemsFound}</div>
              <div className="text-white/80 text-[10px]">Gems Found</div>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="text-center p-2 bg-black/20 rounded-xl">
            <p className="text-white font-medium text-xs drop-shadow-md">{motivationalMessage}</p>
          </div>

          {/* Perfect Score Badge */}
          {perfectScore && (
            <div className="mt-2 text-center">
              <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full">
                <span className="text-white font-black text-xs drop-shadow-md">💯 PERFECT SCORE! 💯</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons - Compact */}
        <div className="space-y-2 w-full max-w-sm mx-auto mt-auto slide-up" style={{ animationDelay: '0.4s' }}>
          {!earnedTreasure && (
            <button
              onClick={onRetry}
              className="w-full py-2.5 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl font-black text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">🔄</span>
                <span>Try Again</span>
              </div>
            </button>
          )}
          
          <button
            onClick={onContinue}
            className="w-full py-2.5 bg-black/40 backdrop-blur text-white rounded-xl font-black text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/20"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🗺️</span>
              <span>Back to Map</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}