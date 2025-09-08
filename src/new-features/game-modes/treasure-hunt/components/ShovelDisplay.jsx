// src/components/Play/modes/treasureHunt/components/ShovelDisplay.jsx

import { useEffect, useState } from "react";

export default function ShovelDisplay({ shovelsRemaining, showBreak = false }) {
  const [animateBreak, setAnimateBreak] = useState(false);
  const [previousShovels, setPreviousShovels] = useState(shovelsRemaining);
  
  const totalShovels = 3; // Always show 3 shovel slots

  useEffect(() => {
    // Detect when a shovel is lost
    if (shovelsRemaining < previousShovels) {
      setAnimateBreak(true);
      setTimeout(() => setAnimateBreak(false), 1000);
    }
    setPreviousShovels(shovelsRemaining);
  }, [shovelsRemaining, previousShovels]);

  return (
    <div className="inline-block">
      <style jsx>{`
        @keyframes shovelBreak {
          0% { 
            transform: rotate(0deg) scale(1); 
            opacity: 1; 
          }
          25% { 
            transform: rotate(-15deg) scale(1.1); 
          }
          50% { 
            transform: rotate(45deg) scale(0.9); 
            opacity: 0.8;
          }
          75% {
            transform: rotate(90deg) scale(0.7);
            opacity: 0.5;
          }
          100% { 
            transform: rotate(135deg) scale(0.5); 
            opacity: 0;
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          10% { transform: translateX(-2px) rotate(-2deg); }
          20% { transform: translateX(2px) rotate(2deg); }
          30% { transform: translateX(-2px) rotate(-2deg); }
          40% { transform: translateX(2px) rotate(2deg); }
          50% { transform: translateX(0) rotate(0deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            filter: drop-shadow(0 0 0 rgba(251, 191, 36, 0));
          }
          50% { 
            transform: scale(1.05); 
            filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.6));
          }
        }
        
        @keyframes crack {
          0% { 
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          100% { 
            clip-path: polygon(0 0, 45% 0, 55% 45%, 45% 100%, 0 100%);
          }
        }
        
        @keyframes fall {
          0% { 
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: translateY(30px) rotate(25deg);
            opacity: 0;
          }
        }
        
        .shovel-break {
          animation: shovelBreak 0.8s ease-out forwards;
        }
        
        .shovel-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .shovel-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .shovel-crack {
          position: relative;
          animation: crack 0.3s ease-out forwards;
        }
        
        .shovel-fall {
          animation: fall 0.8s ease-out forwards;
        }
        
        .glass-badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <div className="glass-badge rounded-xl px-4 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-gray-800 font-bold text-xs">Shovels:</span>
          
          <div className="flex gap-2">
            {[...Array(totalShovels)].map((_, index) => {
              const isActive = index < shovelsRemaining;
              const isBreaking = animateBreak && index === shovelsRemaining;
              
              return (
                <div
                  key={index}
                  className="relative w-10 h-10 flex items-center justify-center"
                >
                  {/* Shovel Container */}
                  <div className={`
                    text-3xl transition-all duration-300
                    ${isActive ? 'shovel-pulse' : ''}
                    ${isBreaking ? 'shovel-break' : ''}
                    ${!isActive && !isBreaking ? 'opacity-30 grayscale' : ''}
                  `}>
                    {isActive || isBreaking ? '⛏️' : '🪦'}
                  </div>
                  
                  {/* Breaking effect overlay */}
                  {isBreaking && (
                    <>
                      {/* Crack lines */}
                      <div className="absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 40 40">
                          <path
                            d="M20,10 L18,20 L22,30"
                            stroke="#ff4444"
                            strokeWidth="2"
                            fill="none"
                            opacity="0.8"
                            className="shovel-crack"
                          />
                          <path
                            d="M15,15 L20,20 L25,18"
                            stroke="#ff4444"
                            strokeWidth="1.5"
                            fill="none"
                            opacity="0.6"
                            className="shovel-crack"
                            style={{ animationDelay: '0.1s' }}
                          />
                        </svg>
                      </div>
                      
                      {/* Particle effects */}
                      <div className="absolute inset-0 pointer-events-none">
                        <span className="absolute top-0 left-1/2 text-xs shovel-fall">💔</span>
                        <span className="absolute top-1/2 left-0 text-xs shovel-fall" style={{ animationDelay: '0.2s' }}>✨</span>
                        <span className="absolute top-1/2 right-0 text-xs shovel-fall" style={{ animationDelay: '0.3s' }}>💥</span>
                      </div>
                    </>
                  )}
                  
                  {/* Number indicator */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                    <span className={`text-xs font-bold ${
                      isActive ? 'text-blue-600' : 'text-white/30'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Status indicator */}
          {shovelsRemaining === 0 && (
            <span className="text-red-400 text-sm font-bold animate-pulse ml-2">
              No shovels left!
            </span>
          )}
          {shovelsRemaining === 1 && (
            <span className="text-red-500 text-sm font-bold ml-2">
              Last chance!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}