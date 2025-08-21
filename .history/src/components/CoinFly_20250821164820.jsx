// src/components/CoinFly.jsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function CoinFly({ startRect, pillRect, count = 5, onDone }) {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (startRect && pillRect) {
      const arr = Array.from({ length: count }, (_, i) => i);
      setCoins(arr);
      const t = setTimeout(() => {
        setCoins([]);
        onDone?.();
      }, 900); // same as transition duration
      return () => clearTimeout(t);
    }
  }, [startRect, pillRect, count, onDone]);

  if (!startRect || !pillRect) return null;

  return createPortal(
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {coins.map((i) => (
        <motion.div
          key={i}
          initial={{
            x: startRect.left + startRect.width / 2,
            y: startRect.top + startRect.height / 2,
            opacity: 1,
            scale: 0.8,
          }}
          animate={{
            x: pillRect.left + pillRect.width / 2,
            y: pillRect.top + pillRect.height / 2,
            opacity: 0,
            scale: 0.4,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            // 🚀 no delay — all coins move at the same time
          }}
          className="absolute"
        >
          <img src="/coin.png" alt="coin" className="w-6 h-6" />
        </motion.div>
      ))}
    </div>,
    document.body
  );
}
