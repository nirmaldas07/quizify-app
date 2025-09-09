// src/components/Home/HeroCard.jsx

import React, { useState, useEffect } from 'react';

export default function HeroCard({ onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  // Generate random sparkles
  useEffect(() => {
    const newSparkles = [...Array(6)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div 
      className="relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02] active:scale-[0.98]"
      style={{
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes sparkle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { transform: translateY(-100px) scale(1); opacity: 1; }
          100% { transform: translateY(-200px) scale(0); opacity: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.5); }
          50% { box-shadow: 0 0 40px rgba(255,255,255,0.8); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-8px); }
          75% { transform: translateY(4px); }
        }
      `}</style>

      {/* Animated sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute text-2xl pointer-events-none"
          style={{
            left: `${sparkle.left}%`,
            bottom: '0',
            animation: `sparkle ${sparkle.duration}s ease-out infinite`,
            animationDelay: `${sparkle.delay}s`
          }}
        >
          ✨
        </div>
      ))}

      {/* Floating wheel in background */}
      <div 
        className="absolute top-[-30px] right-[-30px] text-8xl opacity-20"
        style={{ 
          animation: 'spin-slow 20s linear infinite',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s'
        }}
      >
        🎡
      </div>

      {/* Floating coins */}
      <div className="absolute top-4 right-4 flex gap-2">
        {['🪙', '💎', '⭐'].map((emoji, i) => (
          <span
            key={i}
            className="text-2xl"
            style={{
              animation: 'float 3s ease-in-out infinite',
              animationDelay: `${i * 0.3}s`
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main character/mascot */}
        <div 
          className="text-6xl mb-4"
          style={{ animation: isHovered ? 'bounce 1s ease-in-out infinite' : 'none' }}
        >
          🎰
        </div>

        {/* Title with gradient */}
        <h2 className="text-4xl font-black mb-2 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
          Spin & Win!
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg text-white/90 mb-6">
          Win coins, unlock characters & more!
        </p>

        {/* Rewards preview */}
        <div className="flex gap-3 mb-6">
          <div className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
            🪙 Up to 100 coins
          </div>
          <div className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
            🦄 6 characters
          </div>
        </div>

        {/* Play button with glow effect */}
        <button 
          className="relative inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          style={{
            animation: 'pulse-glow 2s ease-in-out infinite'
          }}
        >
          <span>Play Now</span>
          <span className="text-2xl" style={{ animation: 'bounce 1.5s ease-in-out infinite' }}>
            🎯
          </span>
        </button>

        {/* Daily bonus indicator */}
        <div className="absolute bottom-4 left-8 text-sm text-white/80 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Daily bonus available!
        </div>
      </div>
    </div>
  );
}