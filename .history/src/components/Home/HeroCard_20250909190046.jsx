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
    navigate('/play/classic', { state: { from: 'home' } });
  };

  return (
    <div 
      className="relative overflow-hidden rounded-3xl pt-12 pb-12 px-6 mb-4 cursor-pointer transform transition-all hover:scale-[1.01] active:scale-[0.99]"
      style={{
        background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      }}
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
        {/* Left section - Wheel and Title */}
        <div className="flex items-center gap-4">
          {/* Main icon - Animated Wheel */}
          <div 
            className="relative w-14 h-14 flex-shrink-0"
            style={{ animation: isHovered ? 'bounce 1s ease-in-out infinite' : 'float 3s ease-in-out infinite' }}
          >
            <svg 
              width="56" 
              height="56" 
              viewBox="0 0 100 100" 
              className="absolute inset-0"
              style={{ animation: 'spin-slow 4s linear infinite' }}
            >
              {/* Wheel segments */}
              {[
                { color: '#FF6B6B', icon: '🧠' },
                { color: '#4ECDC4', icon: '🎉' },
                { color: '#45B7D1', icon: '🧪' },
                { color: '#FFD700', icon: '🏺' },
                { color: '#9370DB', icon: '🗺️' },
                { color: '#FF9800', icon: '🤖' }
              ].map((segment, i) => {
                const angle = 60; // 360/6 segments
                const start = i * angle;
                const end = start + angle;
                const largeArc = 0;
                const sr = (Math.PI * start) / 180;
                const er = (Math.PI * end) / 180;
                const x1 = 50 + 45 * Math.cos(sr);
                const y1 = 50 - 45 * Math.sin(sr);
                const x2 = 50 + 45 * Math.cos(er);
                const y2 = 50 - 45 * Math.sin(er);
                
                return (
                  <g key={i}>
                    <path
                      d={`M50,50 L${x1},${y1} A45,45 0 ${largeArc} 0 ${x2},${y2} Z`}
                      fill={segment.color}
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.5"
                    />
                  </g>
                );
              })}
              {/* Center circle */}
              <circle cx="50" cy="50" r="12" fill="white" />
              <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-gray-800">
                🪙
              </text>
            </svg>
          </div>
          
          {/* Title and subtitle */}
          <div>
            <h2 className="text-xl font-black text-white drop-shadow-md whitespace-nowrap">
              Spin & Win!
            </h2>
            <p className="text-sm text-white/90">
              Win amazing prizes!
            </p>
          </div>
        </div>

        {/* Right section - Play button with floating elements */}
        <div className="relative">
          {/* Floating coins around button */}
          <div className="absolute -top-2 -left-2 text-sm opacity-70" style={{ animation: 'float 3s ease-in-out infinite' }}>🪙</div>
          <div className="absolute -top-2 -right-2 text-sm opacity-70" style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}>💎</div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm opacity-70" style={{ animation: 'float 3s ease-in-out infinite 1s' }}>⭐</div>
          
          {/* Play button */}
          <button 
            className="relative bg-white text-gray-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all px-5 py-2.5 flex items-center gap-2"
            style={{
              animation: 'pulse-glow 2s ease-in-out infinite'
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <span className="text-sm font-black">PLAY</span>
            <span className="text-base">🎯</span>
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