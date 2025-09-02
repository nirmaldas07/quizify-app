import { useState, useEffect } from 'react';

export default function WelcomeBack({ player, onContinue }) {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  
  useEffect(() => {
    // Hide bottom nav
    document.body.classList.add('hide-bottom-nav');
    
    // TESTING MODE: Always show
    const ALWAYS_SHOW_FOR_TESTING = true;
    
    if (!ALWAYS_SHOW_FOR_TESTING) {
      const lastSeen = localStorage.getItem('lastSeenDate');
      const today = new Date().toDateString();
      
      if (lastSeen === today) {
        setShow(false);
        onContinue();
      } else {
        localStorage.setItem('lastSeenDate', today);
      }
    }
    
    return () => {
      document.body.classList.remove('hide-bottom-nav');
    };
  }, [onContinue]);

  const handleContinue = () => {
    setAnimateOut(true);
    setTimeout(() => {
      document.body.classList.remove('hide-bottom-nav');
      setShow(false);
      onContinue();
    }, 400);
  };

  if (!show) return null;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  // Fun kid-friendly avatars
  const avatars = ['🦄', '🐨', '🦊', '🐸', '🦁', '🐙', '🦋', '🌟'];
  const userAvatar = player?.avatar || avatars[Math.floor(Math.random() * avatars.length)];

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-b from-sky-400 via-purple-400 to-pink-400
      flex items-center justify-center transition-all duration-500
      ${animateOut ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
      
      {/* Floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + i * 15}%`,
              top: `${70 - i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-8 max-w-sm mx-auto">
        {/* Avatar with bounce */}
        <div className="mb-8 animate-bounce-slow">
          <div className="w-28 h-28 mx-auto bg-white/90 backdrop-blur rounded-3xl flex items-center justify-center text-6xl shadow-xl">
            {userAvatar}
          </div>
        </div>

        {/* Simple greeting */}
        <h1 className="text-3xl font-bold text-white mb-8 animate-fade-in">
          {getGreeting()}!
        </h1>

        {/* Stats in simple pills */}
        <div className="flex justify-center gap-3 mb-10">
          <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2 animate-slide-up">
            <span className="text-2xl font-bold text-white">{player?.level || 1}</span>
            <span className="text-xs text-white/80 ml-1">Level</span>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <span className="text-2xl font-bold text-white">{player?.coins || 0}</span>
            <span className="text-xs text-white/80 ml-1">Coins</span>
          </div>
        </div>

        {/* Big friendly button */}
        <button
          onClick={handleContinue}
          className="relative group"
        >
          <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative bg-white text-purple-600 px-12 py-5 rounded-full font-bold text-xl shadow-2xl 
            transform transition-all duration-300 hover:scale-105 active:scale-95">
            Let's Play!
          </div>
        </button>

        {/* Fun motivational text */}
        <p className="text-white/90 text-sm mt-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
          Ready for today's adventure?
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .hide-bottom-nav .bottom-nav {
          display: none !important;
        }
      `}</style>
    </div>
  );
}