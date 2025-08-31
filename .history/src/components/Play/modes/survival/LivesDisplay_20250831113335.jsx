// src/components/Play/modes/survival/LivesDisplay.jsx
import { useEffect, useState } from 'react';

export default function LivesDisplay({ lives, maxLives = 3 }) {
  const [animatingHeart, setAnimatingHeart] = useState(null);
  const [prevLives, setPrevLives] = useState(lives);

  useEffect(() => {
    if (lives < prevLives) {
      // Lost a life - animate the lost heart
      setAnimatingHeart(prevLives - 1);
      setTimeout(() => setAnimatingHeart(null), 600);
    } else if (lives > prevLives) {
      // Gained a life - animate the new heart
      setAnimatingHeart(lives - 1);
      setTimeout(() => setAnimatingHeart(null), 1000);
    }
    setPrevLives(lives);
  }, [lives, prevLives]);

  return (
    <div className="relative">
      <style jsx>{`
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(0.95); }
          75% { transform: scale(1.05); }
        }
        
        @keyframes heartLost {
          0% { 
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
        }
        
        @keyframes heartGained {
          0% { 
            transform: scale(0) rotate(180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.3) rotate(90deg);
            opacity: 1;
          }
          100% { 
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
          }
          50% { 
            box-shadow: 0 0 30px rgba(239, 68, 68, 0.6);
          }
        }
        
        .heart-beat {
          animation: heartBeat 1.5s ease-in-out infinite;
        }
        
        .heart-lost {
          animation: heartLost 0.6s ease-out forwards;
        }
        
        .heart-gained {
          animation: heartGained 1s ease-out;
        }
        
        .heart-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl">
        {/* Lives counter badge */}
        <div className="flex items-center gap-1.5">
          {[...Array(maxLives)].map((_, i) => (
            <div 
              key={i} 
              className={`relative transition-all duration-300 ${
                i < lives ? 'scale-100' : 'scale-75'
              }`}
            >
              <div className="relative">
                {i < lives ? (
                  <div className={`relative ${i === animatingHeart && lives > prevLives ? 'heart-gained' : ''}`}>
                    {/* Active heart */}
                    <span className={`text-3xl drop-shadow-lg ${i === lives - 1 ? 'heart-beat' : ''}`}>
                      ❤️
                    </span>
                    {/* Glow effect for last heart */}
                    {i === lives - 1 && lives === 1 && (
                      <div className="absolute inset-0 rounded-full heart-glow" />
                    )}
                  </div>
                ) : (
                  <div className={`relative ${i === animatingHeart && lives < prevLives ? 'heart-lost' : ''}`}>
                    {/* Lost heart */}
                    <span className="text-3xl opacity-20 grayscale">
                      💔
                    </span>
                  </div>
                )}
                
                {/* Pulse effect when gaining life */}
                {i === animatingHeart && lives > prevLives && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30" />
                    <span className="absolute text-sm font-bold text-green-400 animate-bounce">+1</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lives text */}
        <div className="pr-1">
          <div className={`text-sm font-bold ${
            lives === 1 ? 'text-red-400 animate-pulse' : 
            lives === maxLives ? 'text-green-400' : 
            'text-white'
          }`}>
            {lives}/{maxLives}
          </div>
        </div>
      </div>

      {/* Critical health warning */}
      {lives === 1 && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm">
            <span className="text-xs font-medium text-red-400 animate-pulse">
              Last life! Be careful! ⚠️
            </span>
          </div>
        </div>
      )}
    </div>
  );
}