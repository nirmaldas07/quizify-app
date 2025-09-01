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
    const duration = 1500;
    const steps = 30;
    const increment = targetCoins / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCoins) {
        setAnimateCoins(targetCoins);
        clearInterval(timer);
        
        if (earnedTreasure) {
          setTimeout(() => setShowTreasure(true), 300);
        }
        setTimeout(() => setShowStars(true), earnedTreasure ? 800 : 300);
      } else {
        setAnimateCoins(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [session.coinsEarned, earnedTreasure]);

  // Fixed screen to prevent scrolling
  useEffect(() => {
    document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    return () => {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br ${island.theme.background} overflow-hidden flex flex-col`}>
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes treasureShine {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        
        @keyframes starPop {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        .slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .treasure-shine {
          animation: treasureShine 0.8s ease-out forwards;
        }
        
        .star-pop {
          animation: starPop 0.4s ease-out forwards;
        }
        
        .confetti-fall {
          animation: confetti 3s linear infinite;
        }
      `}</style>

      {/* Confetti for perfect score */}
      {perfectScore && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute confetti-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: '24px'
              }}
            >
              {['🎉', '⭐', '✨'][Math.floor(Math.random() * 3)]}
            </div>
          ))}
        </div>
      )}

      {/* Header with back button - moved down */}
      <div className="relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2.5rem)]">
        <div className="text-center mb-3 slide-up">
          <h1 className="text-2xl font-black text-white drop-shadow-lg">
            {earnedTreasure ? 'TREASURE FOUND!' : 'ISLAND COMPLETE!'}
          </h1>
          <div className="text-5xl mt-2">
            {earnedTreasure ? island.rewards.treasurePiece : '🏝️'}
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          {/* Compact Results Card */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/30 slide-up" style={{ animationDelay: '0.1s' }}>
            
            {/* Score and Stars in one row */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-center">
                <div className="text-3xl font-black text-white drop-shadow-md">
                  {session.correctAnswers}/3
                </div>
                <div className="text-xs text-white/90 font-medium">Correct</div>
              </div>
              
              {/* Stars */}
              {showStars && (
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`text-2xl ${i < session.correctAnswers ? 'star-pop' : ''}`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {i < session.correctAnswers ? '⭐' : '☆'}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Treasure Piece - Compact */}
            {showTreasure && earnedTreasure && (
              <div className="text-center mb-3 bg-white/10 rounded-xl py-2">
                <div className="text-4xl treasure-shine mb-1">
                  {island.rewards.treasurePiece}
                </div>
                <div className="text-white font-bold text-sm">Treasure Earned!</div>
              </div>
            )}

            {/* Coins & Gems - Horizontal */}
            <div className="flex justify-around mb-3">
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <span className="text-2xl">💰</span>
                  <span className="text-2xl font-black text-yellow-200 drop-shadow-md">{animateCoins}</span>
                </div>
                <div className="text-[10px] text-white/80">Coins</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <span className="text-2xl">💎</span>
                  <span className="text-2xl font-black text-cyan-200 drop-shadow-md">{session.gemsFound}</span>
                </div>
                <div className="text-[10px] text-white/80">Gems</div>
              </div>
            </div>

            {/* Motivational Message - Compact */}
            <div className="bg-black/20 backdrop-blur rounded-xl p-2.5">
              <p className="text-white font-medium text-sm text-center drop-shadow">
                {motivationalMessage}
              </p>
            </div>

            {/* Perfect Score Badge - Inline */}
            {perfectScore && (
              <div className="mt-3 text-center">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full">
                  <span className="text-white font-bold text-xs">💯 PERFECT! 💯</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons - Fixed at bottom */}
      <div className="relative z-10 px-4 pb-[calc(env(safe-area-inset-bottom)+1.5rem)]">
        <div className="space-y-2 w-full max-w-sm mx-auto slide-up" style={{ animationDelay: '0.2s' }}>
          {!earnedTreasure && (
            <button
              onClick={onRetry}
              className="w-full py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">🔄</span>
                <span>Try Again</span>
              </div>
            </button>
          )}
          
          <button
            onClick={onContinue}
            className="w-full py-3 bg-white/90 text-gray-800 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">🗺️</span>
              <span>Back to Map</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}