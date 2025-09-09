// src/components/Play/modes/classic/WheelScreen.jsx

import { useEffect, useRef, useState } from "react";
import { WHEEL_CATEGORIES, CHARACTERS, sliceAngle } from "./config.js";
import { toSlug, playSound } from "../../../../utils/gameHelpers";
import GameDataService from '../../../../services/GameDataService';

export default function WheelScreen({ 
  run, 
  coins, 
  xp, 
  level,
  ownedCharacters,
  onSpin, 
  onBack,
  spinning,
  angle,
  transition,
  result,
  showCallout,
  glowColor,
  soundOn,
  setSoundOn,
  showSparkle,
  pulseIdx,
  nextProgressIdx,
  pendingProgressIdx,
  coinBurstTick,
  lastAnswerWasCorrect,
  coinPillRef,
  wheelRef
}) {
  const nextThreshold = 100 * level * (level - 1);
  const [armFill, setArmFill] = useState(false);
  const [currentCoins, setCurrentCoins] = useState(GameDataService.getCoins());

  // Listen for coin updates
  useEffect(() => {
    const updateCoins = () => setCurrentCoins(GameDataService.getCoins());
    
    window.addEventListener('coinsUpdated', updateCoins);
    window.addEventListener('storage', updateCoins);
    const interval = setInterval(updateCoins, 1000);
    
    return () => {
      window.removeEventListener('coinsUpdated', updateCoins);
      window.removeEventListener('storage', updateCoins);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    return () => {
      document.body.classList.remove('hide-bottom-nav');
    };
  }, []);

  useEffect(() => {
    if (pendingProgressIdx == null) return;
    setArmFill(false);
    const id = setTimeout(() => setArmFill(true), 30);
    return () => clearTimeout(id);
  }, [pendingProgressIdx]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) scale(1);
          }
          50% { 
            transform: translateY(-10px) scale(1.02);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.5;
          }
          50% { 
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      
      <div className="h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+2rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]">
        
        {/* Simplified Header */}
        <header className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center hover:bg-white/20 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            {/* Level Progress Pill */}
            <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/70">Lvl {level}</span>
                <div className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(xp / nextThreshold, 1) * 100}%` }}
                  />
                </div>
              </div>
            </div>
            
            {/* Coins Pill with Animation */}
            <button 
              ref={coinPillRef} 
              className="px-4 py-2 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-500/30 flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span className="text-lg">🪙</span>
              <span className="font-bold text-yellow-300">{currentCoins}</span>
            </button>
          </div>

          <button
            onClick={() => setSoundOn(!soundOn)}
            className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center hover:bg-white/20 transition-all"
          >
            <span className="text-xl">{soundOn ? "🔊" : "🔇"}</span>
          </button>
        </header>

        {/* Owned Characters - Redesigned */}
        {ownedCharacters.length > 0 && (
          <div className="flex justify-center mb-6">
            <div className="inline-flex gap-3 px-5 py-3 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <span className="text-xs text-white/50 self-center">Unlocked:</span>
              {ownedCharacters.map(charSlug => {
                const cat = WHEEL_CATEGORIES.find(c => toSlug(c.name) === charSlug);
                return (
                  <div key={charSlug} className="relative group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                      <span className="text-lg">{cat?.icon}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Progress Dots - More Playful */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2].map((i) => {
            const filled = !!run.progress[i];
            const isPending = i === pendingProgressIdx;
            
            return (
              <div key={i} className="relative">
                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center
                  transition-all duration-500 transform
                  ${filled 
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500 scale-110 shadow-lg shadow-green-500/30' 
                    : 'bg-white/10 backdrop-blur border border-white/20'}
                  ${isPending ? 'animate-pulse' : ''}
                `}>
                  {filled ? (
                    <span className="text-2xl">⭐</span>
                  ) : (
                    <span className="text-white/40 font-bold">{i + 1}</span>
                  )}
                </div>
                
                {showSparkle === i && (
                  <div className="absolute inset-0 rounded-2xl animate-ping bg-yellow-400/30" />
                )}
                
                {pulseIdx === i && (
                  <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced Wheel Section */}
        <section className="flex flex-col items-center mt-12 mb-10">
          <div className="relative">
            {/* Ambient glow behind wheel */}
            <div 
              className="absolute inset-0 w-96 h-96"
              style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}
            >
              <div className="absolute inset-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
            </div>
            
            {/* Wheel container with float animation */}
            <div 
              ref={wheelRef} 
              className="relative w-80 h-80 rounded-full"
              style={{
                animation: spinning ? 'none' : 'float 6s ease-in-out infinite',
              }}
            >
              {/* Shadow for depth */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-12 bg-black/20 rounded-full blur-2xl" />
              
              {/* Glow effect when selected */}
              {glowColor && (
                <div
                  className="pointer-events-none absolute -inset-6 rounded-full animate-pulse"
                  style={{ 
                    boxShadow: `0 0 60px 20px ${glowColor}40`,
                    background: `radial-gradient(circle, ${glowColor}20, transparent 70%)`
                  }}
                />
              )}

              {/* Main wheel */}
              <div
                className="absolute inset-0 rounded-full border-4 border-white/30 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
                style={{ 
                  transform: `rotate(${angle}deg)`, 
                  transition,
                  boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="block">
                  {WHEEL_CATEGORIES.map((cat, i) => {
                    const start = i * sliceAngle;
                    const end = start + sliceAngle;
                    const largeArc = sliceAngle > 180 ? 1 : 0;
                    const sr = (Math.PI * start) / 180;
                    const er = (Math.PI * end) / 180;
                    const x1 = 50 + 48 * Math.cos(sr);
                    const y1 = 50 - 48 * Math.sin(sr);
                    const x2 = 50 + 48 * Math.cos(er);
                    const y2 = 50 - 48 * Math.sin(er);

                    const iconAngle = start + sliceAngle / 2;
                    const iconRadius = 30;
                    const iconX = 50 + iconRadius * Math.cos((iconAngle * Math.PI) / 180);
                    const iconY = 50 - iconRadius * Math.sin((iconAngle * Math.PI) / 180);

                    return (
                      <g key={i}>
                        <defs>
                          <linearGradient id={`grad${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={cat.color} stopOpacity="0.9" />
                            <stop offset="100%" stopColor={cat.color} stopOpacity="0.7" />
                          </linearGradient>
                        </defs>
                        <path
                          d={`M50,50 L${x1},${y1} A48,48 0 ${largeArc} 0 ${x2},${y2} Z`}
                          fill={`url(#grad${i})`}
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="0.5"
                        />
                        <text
                          x={iconX}
                          y={iconY}
                          fill="white"
                          fontSize="20"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                        >
                          {cat.icon}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Enhanced SPIN button */}
              <button
                onClick={onSpin}
                disabled={spinning}
                className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
              >
                <div className={`
                  w-20 h-20 rounded-full 
                  bg-gradient-to-br from-white to-gray-100
                  shadow-2xl flex items-center justify-center
                  transition-all duration-300
                  ${spinning 
                    ? 'scale-90 opacity-80' 
                    : 'hover:scale-110 active:scale-95 hover:shadow-3xl'}
                `}>
                  <span className="font-black text-gray-800 text-sm">SPIN</span>
                </div>
                {!spinning && (
                  <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                )}
              </button>

              {/* Pointer Arrow - Redesigned */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 z-20">
                <div className="relative">
                  <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[25px] border-l-transparent border-r-transparent border-t-white drop-shadow-lg" />
                  <div className="absolute -top-[23px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[13px] border-r-[13px] border-t-[21px] border-l-transparent border-r-transparent border-t-gray-200" />
                </div>
              </div>

              {/* Category Callout - Enhanced */}
              {showCallout && result && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-20 z-30 animate-bounce">
                  <div className="px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{result.cat.icon}</span>
                      <span className="font-bold text-gray-800">{result.cat.name}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom hint - Subtle */}
        <div className="text-center">
          <p className="text-white/30 text-xs">
            Tap SPIN to begin your adventure
          </p>
        </div>
      </div>
    </div>
  );
}