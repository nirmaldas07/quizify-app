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
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    // Check if this is a perfect score island
    if (progress?.perfectScore) {
      setTimeout(() => setShowConfetti(true), 500);
    }
  }, [progress]);

  const hasPlayed = progress?.attempts > 0;
  const hasTreasure = progress?.treasurePiece;
  const isPerfect = progress?.perfectScore;
  const bestScore = progress?.bestScore || 0;

  // Calculate stars based on best score
  const getStars = () => {
    if (bestScore === 3) return 3;
    if (bestScore === 2) return 2;
    if (bestScore === 1) return 1;
    return 0;
  };

  const stars = getStars();

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartClick = () => {
    if (soundOn) {
      const audio = new Audio("/sounds/start.mp3");
      audio.volume = 0.5;
      audio.play().catch(() => {});
    }
    onStart();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <style jsx>{`
        @keyframes slideUp {
          from { 
            transform: translateY(100px) scale(0.9); 
            opacity: 0; 
          }
          to { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-10px); }
          75% { transform: translateY(5px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes starPop {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes treasureGlow {
          0%, 100% { 
            filter: brightness(1) drop-shadow(0 0 10px rgba(255, 215, 0, 0.5)); 
          }
          50% { 
            filter: brightness(1.3) drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); 
          }
        }
        
        @keyframes confettiFall {
          0% { 
            transform: translateY(-20px) rotate(0deg); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(300px) rotate(720deg); 
            opacity: 0; 
          }
        }
        
        .slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .sparkle-animation {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .shimmer {
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255,255,255,0.4), 
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .star-pop {
          animation: starPop 0.6s ease-out;
        }
        
        .treasure-glow {
          animation: treasureGlow 2s ease-in-out infinite;
        }
        
        .confetti-fall {
          animation: confettiFall 2s linear forwards;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Confetti for perfect score */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-[60]">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute confetti-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                fontSize: `${20 + Math.random() * 20}px`
              }}
            >
              {['🎉', '⭐', '🎊', '✨', '🎈'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Modal Content */}
      <div 
        className={`relative max-w-md w-full bg-gradient-to-br ${island.theme.background} rounded-3xl shadow-2xl overflow-hidden ${
          isAnimating ? 'slide-up' : ''
        }`}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {island.visualElements.bgEmojis.map((emoji, index) => (
            <div
              key={index}
              className="absolute text-6xl opacity-10 float-animation"
              style={{
                top: `${20 + index * 15}%`,
                left: `${10 + index * 20}%`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center z-10 hover:bg-white/30 transition-colors"
        >
          <span className="text-white text-xl">✕</span>
        </button>

        {/* Island Header */}
        <div className="relative p-6 pb-4">
          <div className="text-center">
            {/* Island Emoji */}
            <div className="text-8xl mb-4 pulse-animation">
              {island.emoji}
            </div>
            
            {/* Island Name */}
            <h2 className="text-3xl font-black text-white mb-2">
              {island.name}
            </h2>
            
            {/* Difficulty Badge */}
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
              <span className="text-white font-bold text-sm">
                Level {island.id} • {island.difficulty}
              </span>
            </div>
            
            {/* Description */}
            <p className="text-white/90 text-base leading-relaxed">
              {island.description}
            </p>
          </div>
        </div>

        {/* Game Rules Section */}
        <div className="px-6 py-4 bg-black/10">
          <div className="space-y-3">
            {/* Time Limit */}
            <div className="flex items-center justify-between glass-effect rounded-2xl px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⏱️</span>
                <span className="text-white font-medium">Time Limit</span>
              </div>
              <span className="text-white font-bold">
                {formatTime(island.timeLimit)}
              </span>
            </div>
            
            {/* Questions */}
            <div className="flex items-center justify-between glass-effect rounded-2xl px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">❓</span>
                <span className="text-white font-medium">Questions</span>
              </div>
              <span className="text-white font-bold">
                {GAME_CONSTANTS.QUESTIONS_PER_ISLAND}
              </span>
            </div>
            
            {/* Shovels */}
            <div className="flex items-center justify-between glass-effect rounded-2xl px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⛏️</span>
                <span className="text-white font-medium">Shovels (Lives)</span>
              </div>
              <span className="text-white font-bold">
                {GAME_CONSTANTS.SHOVELS_PER_ISLAND}
              </span>
            </div>
            
            {/* Treasure Requirement */}
            <div className="flex items-center justify-between glass-effect rounded-2xl px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{island.rewards.treasurePiece}</span>
                <span className="text-white font-medium">To Win Treasure</span>
              </div>
              <span className="text-white font-bold">
                {island.requiredCorrect}/{GAME_CONSTANTS.QUESTIONS_PER_ISLAND} Correct
              </span>
            </div>
          </div>
        </div>

        {/* Rewards Preview */}
        <div className="px-6 py-4">
          <h3 className="text-white font-bold text-lg mb-3">🎁 Rewards</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-effect rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">💰</div>
              <div className="text-white font-bold">{island.rewards.perCorrectAnswer}</div>
              <div className="text-white/70 text-xs">Per Question</div>
            </div>
            <div className="glass-effect rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">💎</div>
              <div className="text-white font-bold">{Math.round(island.rewards.gemChance * 100)}%</div>
              <div className="text-white/70 text-xs">Gem Chance</div>
            </div>
            <div className="glass-effect rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-white font-bold">+{island.rewards.speedBonus}</div>
              <div className="text-white/70 text-xs">Speed Bonus</div>
            </div>
            <div className="glass-effect rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-white font-bold">+{island.rewards.perfectBonus}</div>
              <div className="text-white/70 text-xs">Perfect Score</div>
            </div>
          </div>
        </div>

        {/* Previous Attempts */}
        {hasPlayed && (
          <div className="px-6 py-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-bold text-lg">📊 Your Best</h3>
              {hasTreasure && (
                <div className="text-3xl treasure-glow">
                  {island.rewards.treasurePiece}
                </div>
              )}
            </div>
            
            {/* Stars Display */}
            <div className="flex justify-center gap-2 mb-3">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className={`text-4xl ${i < stars ? 'star-pop' : ''}`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {i < stars ? '⭐' : '☆'}
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="text-white font-bold text-2xl">{bestScore}/3</div>
                <div className="text-white/70 text-xs">Best Score</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-2xl">{progress.attempts}</div>
                <div className="text-white/70 text-xs">Attempts</div>
              </div>
            </div>
            
            {isPerfect && (
              <div className="mt-3 text-center">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full font-bold text-sm">
                  💯 PERFECT ISLAND! 💯
                </span>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons - Fixed */}
        <div className="p-6 pt-2 space-y-3">
          <button
            onClick={handleStartClick}
            className="w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
          >
            <span className="relative flex items-center justify-center gap-3">
              <span className="text-2xl">🏴‍☠️</span>
              <span>{hasPlayed ? 'Play Again' : 'Start Adventure'}</span>
              <span className="text-2xl">🏴‍☠️</span>
            </span>
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-3 bg-white/20 backdrop-blur text-white rounded-2xl font-bold hover:bg-white/30 transition-colors border border-white/30"
          >
            Back to Map
          </button>
        </div>
      </div>
    </div>
  );
}