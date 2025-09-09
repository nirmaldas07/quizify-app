// src/components/Play/modes/classic/ResultScreen.jsx

import { useEffect, useState } from "react";
import { WHEEL_CATEGORIES, CHARACTERS } from "./config.js";
import { toSlug, vibrate, playSound } from "../../../../utils/gameHelpers";

export function ResultInterstitial({ category, onComplete, isBonus = false, soundOn = true }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    setShow(true);
    if (soundOn) playSound("/sounds/flush.mp3", 0.8);
    vibrate([50]);
    
    const timer = setTimeout(onComplete, 2000); // Extended timing
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('hide-bottom-nav');
    };
  }, [onComplete, soundOn]);

  if (isBonus) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className={`relative z-10 text-center transform transition-all duration-700 ${show ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Bonus Round!
          </h2>
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full grid place-items-center backdrop-blur-xl border-2 border-yellow-400/50">
            <span className="text-6xl animate-pulse block">⭐</span>
            </div>
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping" />
          </div>
          <p className="mt-6 text-lg text-white/80">Get ready for a special challenge!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes category-bounce {
          0% { transform: scale(0) rotate(-180deg); }
          50% { transform: scale(1.1) rotate(90deg); }
          70% { transform: scale(0.95) rotate(-20deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
      `}</style>

      {/* Floating category-colored particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              backgroundColor: `${category.color}40`,
              left: `${10 + i * 12}%`,
              animation: `float-up ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div 
        className="relative"
        style={{
          animation: show ? 'category-bounce 0.8s ease-out' : 'none'
        }}
      >
        {/* Glowing backdrop */}
        <div 
          className="absolute -inset-20 rounded-full blur-3xl"
          style={{ backgroundColor: `${category.color}20` }}
        />
        
        {/* Main circle */}
        <div
            className="relative w-96 h-96 rounded-full flex items-center justify-center shadow-2xl"
          style={{ 
            background: `linear-gradient(135deg, ${category.color}dd, ${category.color}99)`,
            boxShadow: `0 20px 60px ${category.color}40, inset 0 0 60px rgba(255,255,255,0.1)`
          }}
        >
          {/* Decorative rings */}
          <div className="absolute inset-4 rounded-full border-2 border-white/10" />
          <div className="absolute inset-8 rounded-full border border-white/5" />
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="text-3xl font-black mb-4 text-white drop-shadow-lg">
              {category.name}
            </div>
            <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-2xl grid place-items-center mx-auto transform hover:scale-110 transition-transform">
              <span className="text-5xl filter drop-shadow-lg">{category.icon}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress dots at bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
      </div>
    </div>
  );
}

export function ThreeStreakFlash({ onDone }) {
  const [showElements, setShowElements] = useState([false, false, false, false]);

  useEffect(() => {
    // Stagger animations
    const timers = [
      setTimeout(() => setShowElements([true, false, false, false]), 100),
      setTimeout(() => setShowElements([true, true, false, false]), 300),
      setTimeout(() => setShowElements([true, true, true, false]), 500),
      setTimeout(() => setShowElements([true, true, true, true]), 700),
      setTimeout(onDone, 2500)
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 flex items-center justify-center text-white relative overflow-hidden">
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes star-pop {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes text-wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Confetti animation */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `confetti-fall ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {['🎉', '🎊', '✨', '⭐', '🌟'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Three stars showing achievement */}
        <div className="flex justify-center gap-6 mb-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`transform transition-all duration-500 ${
                showElements[i] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              style={{
                animation: showElements[i] ? 'star-pop 0.6s ease-out' : 'none'
              }}
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                <span className="text-4xl">⭐</span>
              </div>
            </div>
          ))}
        </div>

        {/* Animated text */}
        <div className={`transform transition-all duration-700 ${
          showElements[3] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}>
          <h2 className="text-4xl font-black mb-2">
            <span style={{ animation: 'text-wave 1s ease-in-out infinite' }}>Perfect</span>{' '}
            <span style={{ animation: 'text-wave 1s ease-in-out 0.1s infinite' }}>Streak!</span>
          </h2>
          <p className="text-xl opacity-90">3 correct in a row!</p>
          
          {/* Celebration emojis */}
          <div className="mt-6 flex justify-center gap-4 text-3xl">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎯</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>💯</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🔥</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CharacterPicker({ onSelect }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white">
      <style>{`
        @keyframes character-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      <div className="mx-auto max-w-md px-5 pt-16 pb-8">
        <header className="text-center mb-10">
          {/* Trophy with glow effect */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl animate-pulse" />
            <div className="relative text-6xl animate-bounce">🏆</div>
          </div>
          
          <h1 className="text-3xl font-black mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Perfect Round!
          </h1>
          <p className="text-lg text-white/80">Choose your reward character</p>
        </header>

        <div className="grid grid-cols-2 gap-4">
          {WHEEL_CATEGORIES.map((cat, index) => {
            const charName = CHARACTERS[toSlug(cat.name)];
            const isHovered = hoveredIndex === index;
            
            return (
              <button
                key={toSlug(cat.name)}
                onClick={() => {
                  vibrate([20]);
                  playSound('/sounds/select.mp3', 0.5);
                  onSelect(toSlug(cat.name));
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative p-6 rounded-2xl backdrop-blur-xl
                  bg-white/10 border border-white/20
                  transform transition-all duration-300
                  hover:scale-105 hover:bg-white/15 active:scale-95
                  ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
                `}
                style={{
                  animation: isHovered ? 'character-float 2s ease-in-out infinite' : 'none',
                  boxShadow: isHovered ? `0 10px 40px ${cat.color}40` : ''
                }}
              >
                {/* Shimmer effect on hover */}
                {isHovered && (
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-30"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, white 50%, transparent 60%)',
                      animation: 'shimmer 1s ease-out'
                    }}
                  />
                )}
                
                {/* Character icon with gradient background */}
                <div 
                  className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${cat.color}40, ${cat.color}20)`
                  }}
                >
                  <span className="text-3xl">{cat.icon}</span>
                </div>
                
                {/* Character name */}
                <div className="font-bold text-base mb-1">{charName}</div>
                
                {/* Category name */}
                <div className="text-xs text-white/60">{cat.name}</div>
                
                {/* Unlock indicator */}
                <div className="absolute top-2 right-2">
                  <span className="text-xs">🔓</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Hint text */}
        <p className="text-center text-xs text-white/40 mt-6">
          Tap to unlock and play bonus round!
        </p>
      </div>
    </div>
  );
}