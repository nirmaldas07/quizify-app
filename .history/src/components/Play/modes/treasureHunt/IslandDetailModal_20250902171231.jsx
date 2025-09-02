// src/components/Play/modes/treasureHunt/IslandDetailModal.jsx

import { useState, useEffect } from "react";
import { GAME_CONSTANTS } from "./data/islandConfig.js";

export default function IslandDetailModal({ 
  island, 
  progress, 
  onStart, 
  onClose, 
  soundOn 
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    setIsAnimating(true);
  }, []);

  // Handle Android back button for modal
  useEffect(() => {
    const handlePopState = (e) => {
      onClose();
    };
    
    // Push state when modal opens
    window.history.pushState({ islandDetail: true }, '', window.location.pathname);
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [onClose]);
  

  const hasPlayed = progress?.attempts > 0;
  const hasTreasure = progress?.treasurePiece;
  const isPerfect = progress?.perfectScore;
  const bestScore = progress?.bestScore || 0;

  const handleStartClick = () => {
    if (soundOn) {
      const audio = new Audio("/sounds/start.mp3");
      audio.volume = 0.5;
      audio.play().catch(() => {});
    }
    onStart();
  };

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100px) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Compact Modal for Mobile */}
      <div 
        className={`relative w-full max-w-sm bg-gradient-to-br ${island.theme.background} rounded-2xl shadow-2xl ${
          isAnimating ? 'slide-up' : ''
        }`}
      >
        {/* Header without Close Button */}
        <div className="relative p-4 pb-2">
          {/* Island Info */}
          <div className="text-center">
            <div className="text-6xl mb-2 pulse-animation">{island.emoji}</div>
            <h2 className="text-2xl font-black text-white">{island.name}</h2>
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2">
              <span className="text-white font-bold text-sm">Level {island.id} • {island.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Compact Game Info */}
        <div className="px-4 py-3 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {/* Time & Questions */}
            <div className="bg-black/10 backdrop-blur rounded-xl p-3 text-center">
              <div className="text-white/70 text-xs mb-1">Time</div>
              <div className="text-white font-bold">{formatTime(island.timeLimit)}</div>
            </div>
            <div className="bg-black/10 backdrop-blur rounded-xl p-3 text-center">
              <div className="text-white/70 text-xs mb-1">Questions</div>
              <div className="text-white font-bold">{GAME_CONSTANTS.QUESTIONS_PER_ISLAND}</div>
            </div>
          </div>

          {/* Win Condition */}
          <div className="bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{island.rewards.treasurePiece}</span>
              <span className="text-white font-medium">To Win</span>
            </div>
            <span className="text-white font-bold">{island.requiredCorrect}/3 Correct</span>
          </div>

          {/* Rewards Preview - Compact */}
          <div className="bg-black/10 backdrop-blur rounded-xl p-3">
            <div className="text-white font-bold text-sm mb-2">Rewards</div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <div className="text-xl">💰</div>
                <div className="text-white/70 text-xs">{island.rewards.perCorrectAnswer}</div>
              </div>
              <div>
                <div className="text-xl">💎</div>
                <div className="text-white/70 text-xs">{Math.round(island.rewards.gemChance * 100)}%</div>
              </div>
              <div>
                <div className="text-xl">⚡</div>
                <div className="text-white/70 text-xs">+{island.rewards.speedBonus}</div>
              </div>
              <div>
                <div className="text-xl">🏆</div>
                <div className="text-white/70 text-xs">+{island.rewards.perfectBonus}</div>
              </div>
            </div>
          </div>

          {/* Previous Attempts - Only if played */}
          {hasPlayed && (
            <div className="bg-black/10 backdrop-blur rounded-xl p-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className="text-lg">
                      {i < bestScore ? '⭐' : '☆'}
                    </span>
                  ))}
                </div>
                <div className="text-white text-sm">
                  <span className="font-bold">{bestScore}/3</span> • {progress.attempts} tries
                </div>
                {hasTreasure && (
                  <div className="text-2xl">{island.rewards.treasurePiece}</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-4 pt-2 space-y-2">
          <button
            onClick={handleStartClick}
            className="w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="text-xl">🏴‍☠️</span>
              <span>{hasPlayed ? 'Play Again' : 'Start Adventure'}</span>
              <span className="text-xl">🏴‍☠️</span>
            </span>
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors"
          >
            Back to Map
          </button>
        </div>
      </div>
    </div>
  );
}