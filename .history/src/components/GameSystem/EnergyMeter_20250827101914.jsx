//EnergyMeter.jsx
import React, { useEffect, useState } from 'react';
import { GAME_CONSTANTS } from '../../utils/gameConstants';

export default function EnergyMeter({ current, max = GAME_CONSTANTS.MAX_ENERGY, regenAt }) {
  const [timeToRegen, setTimeToRegen] = useState('');
  
  useEffect(() => {
    if (regenAt && current < max) {
      const updateTimer = () => {
        const now = Date.now();
        const diff = Math.max(0, regenAt - now);
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        setTimeToRegen(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      };
      
      updateTimer();
      const interval = setInterval(updateTimer, 1000);
      return () => clearInterval(interval);
    }
  }, [regenAt, current, max]);
  
  const hearts = Array.from({ length: max }, (_, i) => i < current);
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {hearts.map((filled, i) => (
          <span 
            key={i} 
            className={`text-lg transition-all duration-300 ${
              filled ? 'text-red-500 scale-110' : 'text-gray-600 scale-90'
            }`}
          >
            {filled ? '❤️' : '🖤'}
          </span>
        ))}
      </div>
      {current < max && timeToRegen && (
        <span className="text-xs text-base-muted ml-2">+1 in {timeToRegen}</span>
      )}
    </div>
  );
}