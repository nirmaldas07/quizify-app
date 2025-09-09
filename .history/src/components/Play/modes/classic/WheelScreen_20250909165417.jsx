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
        
        @keyframes progress-fill {
          0% { 
            width: 0%;
            background-position: -200% center;
          }
          50% {
            background-position: 0% center;
          }
          100% { 
            width: 100%;
            background-position: 200% center;
          }
        }
        
        @keyframes star-bounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }
      `}</style>
      
      <div className="h-full flex flex-col mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+2rem)]">
        
        {/* Header - Moved down */}
        <header className="flex items-center justify-between mb-4 mt-6">
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
            
            {/* Coins Pill */}
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

        {/* Owned Characters */}
        {ownedCharacters.length > 0 && (
          <div className="flex justify-center mb-4">
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

        {/* Creative Progress Bar */}
        <div className="flex justify-center gap-3 mb-6">
          {[0, 1, 2].map((i) => {
            const filled = !!run.progress[i];
            const isPending = i === pendingProgressIdx;
            
            return (
              <div key={i} className="relative flex items-center">
                {/* Connector line */}
                {i < 2 && (
                  <div className="absolute left-full w-3 h-0.5 bg-white/20 top-1/2 z-0" />
                )}
                
                {/* Progress dot/star */}
                <div className="relative z-10">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-700 transform
                    ${filled 
                      ? 'bg-gradient-to-br from-green-400 to-emerald-500 scale-110' 
                      : 'bg-white/10 backdrop-blur border border-white/20'}
                    ${isPending ? 'animate-pulse scale-125' : ''}
                  `}>
                    {filled ? (
                      <span 
                        className="text-xl"
                        style={{ animation: isPending ? 'star-bounce 1s ease-in-out' : 'none' }}
                      >
                        ⭐
                      </span>
                    ) : (
                      <span className="text-white/40 font-bold text-sm">{i + 1}</span>
                    )}
                  </div>
                  
                  {/* Shimmer effect when filling */}
                  {isPending && (
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        style={{ animation: 'shimmer 1s ease-out' }}
                      />
                    </div>
                  )}
                  
                  {/* Sparkle animation */}
                  {showSparkle === i && (
                    <>
                      <div className="absolute -top-1 -right-1 text-yellow-400 animate-ping">✨</div>
                      <div className="absolute -bottom-1 -left-1 text-yellow-400 animate-ping" style={{animationDelay: '0.2s'}}>✨</div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Wheel Section - Centered and Larger */}
        <section className="flex-1 flex items-center justify-center pb-12">

          <div className="relative w-full max-w-sm">
            {/* Ambient glow */}
            <div 
              className="absolute inset-0"
              style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}
            >
              <div className="absolute inset-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
            </div>
            
            {/* Wheel container */}
            <div 
              ref={wheelRef} 
              className="relative w-full aspect-square"
              style={{
                animation: spinning ? 'none' : 'float 6s ease-in-out infinite',
              }}
            >
              {/* Shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 rounded-full blur-xl" />
              
              {/* Glow effect */}
              {glowColor && (
                <div
                  className="pointer-events-none absolute -inset-4 rounded-full animate-pulse"
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

              {/* SPIN button */}
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

              {/* Category Callout - Centered */}
              {showCallout && result && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-20 z-30">
                  <div className="px-10 py-3 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl animate-bounce">
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

        {/* Bottom hint */}
        <div className="text-center pb-12">
          <p className="text-white/30 text-xs">
            Tap SPIN to begin your adventure
          </p>
        </div>
      </div>
    </div>
  );
}