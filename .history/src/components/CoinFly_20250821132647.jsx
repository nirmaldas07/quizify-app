// src/components/CoinFly.jsx
import React, { useEffect, useState } from "react";

/**
 * CoinFly animation
 * Props:
 * - count: number of coins to animate (default 1)
 * - targetId: DOM id of the coin pill target
 * - onDone?: callback when animation finishes
 */
export default function CoinFly({ count = 1, targetId = "coin-pill", onDone }) {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;

    const rect = target.getBoundingClientRect();

    // Spawn `count` coins
    const newCoins = Array.from({ length: count }).map((_, i) => ({
      id: Date.now() + "-" + i,
      startX: window.innerWidth / 2,
      startY: window.innerHeight / 2,
      endX: rect.left + rect.width / 2,
      endY: rect.top + rect.height / 2,
    }));
    setCoins(newCoins);

    // Clear after animation
    const timer = setTimeout(() => {
      setCoins([]);
      onDone && onDone();
    }, 1200);

    return () => clearTimeout(timer);
  }, [count, targetId, onDone]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]">
      {coins.map((c) => (
        <span
          key={c.id}
          className="absolute text-yellow-400 text-2xl animate-[coinfly_1.2s_ease-in-out]"
          style={{
            left: c.startX,
            top: c.startY,
            "--tx": `${c.endX - c.startX}px`,
            "--ty": `${c.endY - c.startY}px`,
          }}
        >
          🪙
        </span>
      ))}

      {/* Tailwind custom keyframes */}
      <style>{`
        @keyframes coinfly {
          0%   { transform: translate(0,0) scale(1); opacity: 1; }
          80%  { transform: translate(var(--tx), var(--ty)) scale(0.6); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
