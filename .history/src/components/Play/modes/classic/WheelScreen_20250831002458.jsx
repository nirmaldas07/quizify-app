// src/components/Play/modes/classic/WheelScreen.jsx

import { useEffect, useRef, useState } from "react";
import { WHEEL_CATEGORIES, CHARACTERS, sliceAngle, toSlug, playSound } from "./config.js";

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
  lastAnswerWasCorrect
}) {
  const nextThreshold = 100 * level * (level - 1);
  const [armFill, setArmFill] = useState(false);
  const lastCoinTickRef = useRef(0);
  const coinTargetRef = useRef(null);
  const wheelRef = useRef(null);
  const [coinVector, setCoinVector] = useState({ dx: 110, dy: -260 });
  const [showCoinAnim, setShowCoinAnim] = useState(false);

  useEffect(() => {
    if (pendingProgressIdx == null) return;
    setArmFill(false);
    const id = setTimeout(() => setArmFill(true), 30);
    return () => clearTimeout(id);
  }, [pendingProgressIdx]);

  useEffect(() => {
    if (!coinBurstTick || !lastAnswerWasCorrect) return;
    if (coinBurstTick === lastCoinTickRef.current) return;
    lastCoinTickRef.current = coinBurstTick;
    
    try {
      const wheel = wheelRef?.current?.getBoundingClientRect?.();
      const pill = coinTargetRef?.current?.getBoundingClientRect?.();
      if (wheel && pill) {
        const originX = wheel.left + wheel.width / 2;
        const originY = wheel.top + wheel.height / 2;
        const targetX = pill.left + pill.width / 2;
        const targetY = pill.top + pill.height / 2;
        setCoinVector({ dx: targetX - originX, dy: targetY - originY });
      }
    } catch {}

    if (soundOn) playSound("/sounds/coin.mp3", 0.7);
    setShowCoinAnim(true);
    const t = setTimeout(() => setShowCoinAnim(false), 700);
    return () => clearTimeout(t);
  }, [coinBurstTick, soundOn, lastAnswerWasCorrect]);

  return (
    <div className="fixed inset-0 bg-base-bg text-base-text overflow-hidden">
      <div className="h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]">
        <header className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]"
          >
            ←
          </button>

          <div className="flex items-center gap-3">
            <button className="px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]">
              <div className="text-[11px]">Lvl {level} • {xp}/{nextThreshold}</div>
              <div className="mt-1 h-1 w-full bg-white/10 rounded">
                <div className="h-1 bg-brand-blue rounded" style={{ width: `${Math.min(xp / nextThreshold, 1) * 100}%` }} />
              </div>
            </button>
            <button ref={coinTargetRef} className="px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]">🪙 {coins}</button>
          </div>

          <button
            onClick={() => setSoundOn(!soundOn)}
            className="h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]"
          >
            <span className="text-lg">{soundOn ? "🔊" : "🔇"}</span>
          </button>
        </header>

        {ownedCharacters.length > 0 && (
          <div className="flex justify-center mb-6">
            <div className="flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border">
              {ownedCharacters.map(charSlug => {
                const cat = WHEEL_CATEGORIES.find(c => toSlug(c.name) === charSlug);
                const charName = CHARACTERS[charSlug];
                return (
                  <div key={charSlug} className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                      <span className="text-sm">{cat?.icon}</span>
                    </div>
                    <span className="text-[10px] text-base-muted mt-1">{charName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Progress bar */}
        <div className="flex justify-center mt-12 sm:mt-16 mb-6">
          <div className="w-80 max-w-full">
            <style>{`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}</style>

            <div
              key={run.qIndex}
              className="relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15"
            >
              {[0,1,2].map((i) => {
                const colors = ["#FF9800", "#FFC107", "#cadd75ff"];
                const filled = !!run.progress[i];

                return (
                  <div key={i} className="relative h-full bg-white/10">
                    <div
                      className="absolute inset-y-0 left-0 rounded-[6px]"
                      style={{
                        width: filled
                          ? (i === pendingProgressIdx
                              ? (armFill ? "100%" : "0%")
                              : ((nextProgressIdx === i && pendingProgressIdx == null)
                                  ? "0%"
                                  : "100%"))
                          : "0%",
                        backgroundColor: colors[i],
                        transition: i === pendingProgressIdx ? "width 1200ms ease-out" : "none"
                      }}
                    />
                    {pulseIdx === i && (
                      <span className="absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none">
                        <span
                          className="absolute inset-y-0 left-0 w-1 rounded bg-white/80"
                          style={{ animation: "qp_sweep 1200ms ease-out forwards" }}
                        />
                      </span>
                    )}
                    {showSparkle === i && (
                      <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none">✨</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Wheel */}
        <section className="flex flex-col items-center mt-28 sm:mt-32 mb-10">
          <div ref={wheelRef} className="relative w-96 h-96 rounded-full select-none">
            {glowColor && (
              <div
                className="pointer-events-none absolute -inset-4 rounded-full"
                style={{ boxShadow: `0 0 0 8px ${glowColor}40, 0 0 40px 12px ${glowColor}60` }}
              />
            )}

            <div
              className="absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card"
              style={{ transform: `rotate(${angle}deg)`, transition }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="block">
                {WHEEL_CATEGORIES.map((cat, i) => {
                  const start = i * sliceAngle;
                  const end = start + sliceAngle;
                  const largeArc = sliceAngle > 180 ? 1 : 0;
                  const sr = (Math.PI * start) / 180;
                  const er = (Math.PI * end) / 180;
                  const x1 = 50 + 45 * Math.cos(sr);
                  const y1 = 50 - 45 * Math.sin(sr);
                  const x2 = 50 + 45 * Math.cos(er);
                  const y2 = 50 - 45 * Math.sin(er);

                  const iconAngle = start + sliceAngle / 2;
                  const iconRadius = 28;
                  const iconX = 50 + iconRadius * Math.cos((iconAngle * Math.PI) / 180);
                  const iconY = 50 - iconRadius * Math.sin((iconAngle * Math.PI) / 180);

                  return (
                    <g key={i}>
                      <path
                        d={`M50,50 L${x1},${y1} A45,45 0 ${largeArc} 0 ${x2},${y2} Z`}
                        fill={cat.color}
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="0.5"
                      />
                      <text
                        x={iconX}
                        y={iconY}
                        fill="white"
                        fontSize="8"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className="font-bold"
                      >
                        {cat.icon}
                      </text>
                    </g>
                  );
                })}
                <circle cx="50" cy="50" r="12" fill="white" stroke="#ddd" strokeWidth="1" />
              </svg>
            </div>

            <button
              onClick={onSpin}
              disabled={spinning}
              className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${
                        spinning ? "opacity-60 cursor-not-allowed scale-95" : "hover:scale-105 active:scale-95"
                      }`}
            >
              SPIN
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20">
              <div className="w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1">
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"/>
              </div>
            </div>

            {showCallout && result && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-16 z-30">
                <div className="px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold">
                  <span className="mr-2">{result.cat.icon}</span>
                  {result.cat.name}
                </div>
              </div>
            )}

            {showCoinAnim && (
              <>
                <style>{`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}</style>
                {[0,1,2].map((i) => (
                  <div
                    key={i}
                    className="pointer-events-none absolute z-30 top-1/2 left-1/2"
                    style={{
                      animation: `coinFly 600ms ease-out ${i * 80}ms forwards`,
                      ['--coin-dx']: `${coinVector.dx}px`,
                      ['--coin-dy']: `${coinVector.dy}px`
                    }}
                  >
                    <div className="w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold">
                      🪙
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        <div className="text-center">
          <button 
            disabled
            className="text-base-muted underline opacity-60 cursor-not-allowed text-sm"
          >
            Party Spin (pass & play)
          </button>
        </div>
      </div>
    </div>
  );
}