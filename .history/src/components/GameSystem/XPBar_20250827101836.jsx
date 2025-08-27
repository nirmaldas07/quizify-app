//XPBar.jsx
import React, { useEffect, useState } from 'react';

export default function XPBar({ current, required, level, animate = true }) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const percentage = (current / required) * 100;
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setDisplayProgress(percentage);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayProgress(percentage);
    }
  }, [percentage, animate]);
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium">Level {level}</span>
        <span className="text-xs text-base-muted">{current}/{required} XP</span>
      </div>
      <div className="h-2 bg-black/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative"
          style={{ width: `${displayProgress}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}