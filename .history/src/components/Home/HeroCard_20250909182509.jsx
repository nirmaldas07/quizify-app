// src/components/Home/HeroCard.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroCard() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const newSparkles = [...Array(6)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);

  const handleClick = () => {
    navigate('/play/classic');
  };

  return (
    <div 
      className="relative overflow-hidden rounded-3xl p-6 mb-4 cursor-pointer transform transition-all hover:scale-[1.01] active:scale-[0.99]"
      style={{
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes sparkle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { transform: translateY(-50px) scale(1); opacity: 1; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255,255,255,0.5); }
          50% { box-shadow: 0 0 20px rgba(255,255,255,0.8); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-5px); }
          75% { transform: translateY(2px); }
        }
      `}</style>

      {/* Animated sparkles */}
      {isHovered && sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute text-lg pointer-events-none"
          style={{
            left: `${sparkle.left}%`,
            bottom: '0',
            animation: `sparkle ${sparkle.duration}s ease-out`,
            animationDelay: `${sparkle.delay * 0.1}s`
          }}
        >
          ✨
        </div>
      ))}

      {/* Floating wheel in background */}
      <div 
        className="absolute -top-10 -right-10 text-7xl opacity-10"
        style={{ 
          animation: 'spin-slow 20s linear infinite',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s'
        }}
      >
        🎡
      </div>

      {/* Main content in horizontal layout */}
      <div className="flex items-center justify-between gap-4">
        {/* Left section */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            {/* Main icon */}
            <div 
              className="text-5xl"
              style={{ animation: isHovered ? 'bounce 1s ease-in-out infinite' : 'float 3s ease-in-out infinite' }}
            >
              🎰
            </div>
            
            {/* Title */}
            <div>
              <h2 className="text-2xl font-black text-white drop-shadow-md">
                Spin & Win!
              </h2>
              <p className="text-sm text-white/90">
                Win amazing prizes!
              </p>
            </div>
          </div>

          {/* Rewards preview - compact */}
          <div className="flex gap-2 mt-3">
            <div className="px-2 py-1 bg-black/20 backdrop-blur rounded-full text-xs font-medium text-white flex items-center gap-1">
              🪙 <span>Up to 100</span>
            </div>
            <div className="px-2 py-1 bg-black/20 backdrop-blur rounded-full text-xs font-medium text-white flex items-center gap-1">
              🦄 <span>6 heroes</span>
            </div>
          </div>
        </div>

        {/* Right section - Floating coins and play button */}
        <div className="flex flex-col items-center gap-2">
          {/* Floating coins */}
          <div className="flex gap-1 mb-2">
            {['🪙', '💎', '⭐'].map((emoji, i) => (
              <span
                key={i}
                className="text-xl"
                style={{
                  animation: 'float 3s ease-in-out infinite',
                  animationDelay: `${i * 0.3}s`
                }}
              >
                {emoji}
              </span>
            ))}
          </div>

          {/* Play button */}
          <button 
            className="relative bg-white text-gray-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all px-6 py-3 flex items-center gap-2"
            style={{
              animation: 'pulse-glow 2s ease-in-out infinite'
            }}
          >
            <span className="text-sm font-black">PLAY</span>
            <span className="text-lg">🎯</span>
          </button>
        </div>
      </div>

      {/* Daily bonus indicator - small and subtle */}
      {isHovered && (
        <div className="absolute bottom-2 left-6 text-xs text-white/80 flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
          <span>Bonus available!</span>
        </div>
      )}
    </div>
  );
}