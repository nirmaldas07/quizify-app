// src/components/Home/HeroCard.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroCard() {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    // Navigate directly to wheel screen in classic mode
    navigate('/play/classic');
  };

  return (
    <div 
      className="relative overflow-hidden rounded-2xl p-6 mb-4 cursor-pointer transform transition-all hover:scale-[1.01] active:scale-[0.99]"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 20px rgba(102, 126, 234, 0.25)',
      }}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes sparkle-float {
          0% { transform: translateY(0) scale(0.8); opacity: 0.6; }
          50% { transform: translateY(-10px) scale(1); opacity: 1; }
          100% { transform: translateY(0) scale(0.8); opacity: 0.6; }
        }
      `}</style>

      {/* Subtle sparkles */}
      <div className="absolute top-4 right-4 text-yellow-300 opacity-60" 
           style={{ animation: 'sparkle-float 3s ease-in-out infinite' }}>
        ✨
      </div>
      <div className="absolute bottom-6 right-12 text-yellow-300 opacity-40" 
           style={{ animation: 'sparkle-float 3s ease-in-out infinite 1s' }}>
        ✨
      </div>

      <div className="flex items-center justify-between">
        {/* Left content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl" style={{ animation: 'float 3s ease-in-out infinite' }}>
              🎰
            </span>
            <h2 className="text-2xl font-bold text-white">
              Spin & Win!
            </h2>
          </div>
          
          <p className="text-white/90 text-sm mb-3">
            Test your luck & knowledge!
          </p>
          
          {/* Rewards badges */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur rounded-full text-xs text-white font-medium">
              🪙 5-50 coins
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur rounded-full text-xs text-white font-medium">
              🎭 6 characters
            </span>
          </div>
        </div>

        {/* Play button */}
        <div className={`
          w-14 h-14 rounded-full bg-white/95 flex items-center justify-center
          shadow-lg transition-all ${isPressed ? 'scale-95' : 'hover:scale-105'}
        `}>
          <span className="text-2xl text-purple-600">▶</span>
        </div>
      </div>
    </div>
  );
}