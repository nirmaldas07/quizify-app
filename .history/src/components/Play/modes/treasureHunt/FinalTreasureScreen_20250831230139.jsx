// src/components/Play/modes/treasureHunt/FinalTreasureScreen.jsx

import { useState, useEffect } from "react";
import { ISLANDS, GAME_CONSTANTS } from "./data/islandConfig.js";

export default function FinalTreasureScreen({
  totalStats,
  onContinue,
  soundOn
}) {
  const [showChest, setShowChest] = useState(false);
  const [chestOpen, setChestOpen] = useState(false);
  const [showRewards, setShowRewards] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    // Animation sequence
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setShowChest(true);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setChestOpen(true);
      setShowFireworks(true);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      setShowRewards(true);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowTitle(true);
    };
    
    sequence();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden">
      <style jsx>{`
        @keyframes chestAppear {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(10deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes chestOpen {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-25deg); }
        }
        
        @keyframes treasureGlow {
          0%, 100% { 
            filter: brightness(1) drop-shadow(0 0 30px rgba(255, 215, 0, 0.8)); 
          }
          50% { 
            filter: brightness(1.5) drop-shadow(0 0 50px rgba(255, 215, 0, 1)); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes coinRain {
          0% { 
            transform: translateY(-100vh) rotate(0deg); 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh) rotate(720deg); 
            opacity: 0; 
          }
        }
        
        @keyframes firework {
          0% { 
            transform: scale(0) rotate(0deg); 
            opacity: 1; 
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
          100% { 
            transform: scale(1.5) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        @keyframes titleShine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .chest-appear {
          animation: chestAppear 1s ease-out forwards;
        }
        
        .chest-open {
          animation: chestOpen 0.8s ease-out forwards;
          transform-origin: bottom center;
        }
        
        .treasure-glow {
          animation: treasureGlow 2s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .coin-rain {
          animation: coinRain 3s linear infinite;
        }
        
        .firework {
          animation: firework 1.5s ease-out forwards;
        }
        
        .title-shine {
          background: linear-gradient(90deg, 
            #fbbf24, 
            #fff, 
            #fbbf24
          );
          background-size: 200% 100%;
          animation: titleShine 3s linear infinite;
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .sparkle-animation {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

      {/* Fireworks */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute firework"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${40 + Math.random() * 40}px`
              }}
            >
              {['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
      )}

      {/* Coin Rain */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute coin-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${20 + Math.random() * 20}px`
            }}
          >
            {['🪙', '💰', '💎'][Math.floor(Math.random() * 3)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Victory Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black text-white mb-4">
            LEGENDARY!
          </h1>
          <div className="text-8xl bounce-animation">👑</div>
        </div>

        {/* Treasure Chest */}
        {showChest && (
          <div className={`relative mb-8 ${showChest ? 'chest-appear' : ''}`}>
            <div className={`text-[150px] ${chestOpen ? 'chest-open' : ''}`}>
              📦
            </div>
            
            {/* Treasure pieces floating out */}
            {chestOpen && (
              <div className="absolute inset-0 flex items-center justify-center">
                {ISLANDS.map((island, index) => (
                  <div
                    key={island.id}
                    className="absolute text-6xl float-animation treasure-glow"
                    style={{
                      transform: `rotate(${index * 72}deg) translateY(-100px)`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {island.rewards.treasurePiece}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Rewards Display */}
        {showRewards && (
          <div className="glass-card rounded-3xl p-6 max-w-md w-full mb-6">
            <h2 className="text-2xl font-black text-white text-center mb-6">
              🏆 FINAL TREASURE UNLOCKED! 🏆
            </h2>

            {/* Final Reward */}
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4">
              <div className="text-center">
                <div className="text-5xl mb-2">💰</div>
                <div className="text-4xl font-black text-white">{GAME_CONSTANTS.FINAL_TREASURE_REWARD}</div>
                <div className="text-white/90 font-medium">Bonus Coins!</div>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="glass-card rounded-xl p-3 text-center">
                <div className="text-3xl mb-1">🏝️</div>
                <div className="text-2xl font-black text-white">5/5</div>
                <div className="text-white/70 text-xs">Islands</div>
              </div>
              <div className="glass-card rounded-xl p-3 text-center">
                <div className="text-3xl mb-1">🧩</div>
                <div className="text-2xl font-black text-white">5/5</div>
                <div className="text-white/70 text-xs">Treasures</div>
              </div>
              <div className="glass-card rounded-xl p-3 text-center">
                <div className="text-3xl mb-1">💰</div>
                <div className="text-2xl font-black text-yellow-300">
                  {totalStats.totalCoinsEarned + GAME_CONSTANTS.FINAL_TREASURE_REWARD}
                </div>
                <div className="text-white/70 text-xs">Total Coins</div>
              </div>
              <div className="glass-card rounded-xl p-3 text-center">
                <div className="text-3xl mb-1">💎</div>
                <div className="text-2xl font-black text-cyan-300">{totalStats.totalGemsFound}</div>
                <div className="text-white/70 text-xs">Total Gems</div>
              </div>
            </div>

            {/* Title Badge */}
            {showTitle && (
              <div className="text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-xl font-black text-white title-shine">
                  {GAME_CONSTANTS.FINAL_TREASURE_TITLE}
                </div>
                <div className="text-white/90 text-sm mt-1">New Title Unlocked!</div>
              </div>
            )}
          </div>
        )}

        {/* Continue Button */}
        {showRewards && (
          <button
            onClick={onContinue}
            className="w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🎉</span>
              <span>Complete Adventure</span>
              <span className="text-2xl">🎉</span>
            </div>
          </button>
        )}

        {/* Sparkle Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl sparkle-animation"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}