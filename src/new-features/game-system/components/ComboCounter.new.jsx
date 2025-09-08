//ComboCounter.jsx
import React, { useEffect, useState } from 'react';
import { getComboMultiplier } from '../../utils/gameConstants';

export default function ComboCounter({ streak }) {
  const [show, setShow] = useState(false);
  const [lastStreak, setLastStreak] = useState(0);
  
  const combo = getComboMultiplier(streak);
  
  useEffect(() => {
    if (streak > lastStreak && streak >= 2) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 2000);
      return () => clearTimeout(timer);
    }
    setLastStreak(streak);
  }, [streak, lastStreak]);
  
  if (streak < 2) return null;
  
  const getFlameSize = () => {
    if (streak >= 10) return 'text-3xl';
    if (streak >= 5) return 'text-2xl';
    return 'text-xl';
  };
  
  return (
    <div className={`flex items-center gap-2 transition-all duration-300 ${show ? 'scale-110' : ''}`}>
      <span className={`${getFlameSize()} animate-pulse`}>🔥</span>
      <div>
        <div className="text-sm font-bold text-orange-400">{streak} Streak!</div>
        {combo.text && (
          <div className="text-xs text-orange-300">{combo.text} x{combo.multiplier}</div>
        )}
      </div>
    </div>
  );
}