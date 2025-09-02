import { useState, useEffect } from 'react';

export default function WelcomeBack({ player, onContinue }) {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [mascotBounce, setMascotBounce] = useState(false);
  
  useEffect(() => {
    // Hide bottom nav
    document.body.classList.add('hide-bottom-nav');
    
    // Trigger mascot animation
    const bounceTimer = setInterval(() => {
      setMascotBounce(prev => !prev);
    }, 2000);
    
    // TESTING MODE
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
      clearInterval(bounceTimer);
    };
  }, [onContinue]);

  const handleContinue = () => {
    setAnimateOut(true);
    // Play a fun sound if you have it
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

  // Fun mascot characters (Duolingo-style)
  const mascots = ['🦉', '🐧', '🦝', '🦜', '🦕', '🐙'];
  const mascot = mascots[player?.level % mascots.length] || mascots[0];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${animateOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #ffd89b 100%)'
      }}>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating stars */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-white/30 animate-twinkle"
            style={{
              fontSize: `${20 + (i % 3) * 10}px`,
              left: `${(i * 17) % 100}%`,
              top: `${(i * 13) % 100}%`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            ⭐
          </div>
        ))}
        
        {/* Floating clouds */}
        <div className="absolute top-10 left-0 w-full">
          <div className="cloud cloud1">☁️</div>
          <div className="cloud cloud2">☁️</div>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 w-full max-w-sm mx-auto">
        {/* Mascot character */}
        <div className={`text-8xl mb-4 transition-transform duration-500 ${
          mascotBounce ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
        }`}>
          {mascot}
        </div>

        {/* Speech bubble greeting */}
        <div className="relative bg-blue rounded-3xl px-6 py-4 mb-6 shadow-xl">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45"></div>
          <h1 className="text-2xl font-bold text-gray-800">
            {getGreeting()}! 👋
          </h1>
          <p className="text-gray-600 mt-1">Welcome back, Superstar!</p>
        </div>

        {/* Fun stats display */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white/90 backdrop-blur rounded-2xl p-3 transform hover:scale-105 transition-transform">
            <div className="text-3xl mb-1">⭐</div>
            <div className="text-2xl font-bold text-gray-800">{player?.level || 1}</div>
            <div className="text-xs text-gray-600">Level</div>
          </div>
          <div className="bg-white/90 backdrop-blur rounded-2xl p-3 transform hover:scale-105 transition-transform">
            <div className="text-3xl mb-1">🪙</div>
            <div className="text-2xl font-bold text-gray-800">{player?.coins || 0}</div>
            <div className="text-xs text-gray-600">Coins</div>
          </div>
        </div>

        {/* Streak indicator if exists */}
        {player?.streak > 0 && (
          <div className="mb-6 animate-pulse">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full">
              <span className="text-2xl">🔥</span>
              <span className="font-bold">{player.streak} day streak!</span>
            </div>
          </div>
        )}

        {/* Big fun play button */}
        <button
          onClick={handleContinue}
          className="group relative w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
            transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
            <span>Let's Learn!</span>
            <span className="text-2xl animate-bounce">🚀</span>
          </div>
        </button>

        {/* Fun motivational messages */}
        <div className="mt-6 text-white/90 font-medium animate-pulse">
          {[
            "🎯 New challenges await!",
            "🏆 Ready to be a champion?",
            "🌟 Your brain adventure starts now!",
            "🎨 Time for fun learning!",
            "🎪 The quiz circus is open!"
          ][Math.floor(Math.random() * 5)]}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes float-right {
          from { transform: translateX(-100px); }
          to { transform: translateX(calc(100vw + 100px)); }
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .cloud {
          position: absolute;
          font-size: 60px;
          opacity: 0.3;
          animation: float-right 20s linear infinite;
        }
        
        .cloud1 {
          top: 10%;
          animation-duration: 25s;
        }
        
        .cloud2 {
          top: 5%;
          animation-duration: 30s;
          animation-delay: 10s;
        }
        
        .hide-bottom-nav .bottom-nav {
          display: none !important;
        }
      `}</style>
    </div>
  );
}