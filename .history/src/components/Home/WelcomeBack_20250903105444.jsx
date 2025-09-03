import { useState, useEffect } from 'react';

export default function WelcomeBack({ player, onContinue }) {
  // Check session storage immediately in initial state
  const [show, setShow] = useState(() => {
    const shownInSession = sessionStorage.getItem('welcomeShown');
    return shownInSession !== 'true';
  });
  const [animateOut, setAnimateOut] = useState(false);
  const [mascotBounce, setMascotBounce] = useState(false);
  const [motivationalText, setMotivationalText] = useState('');
  const [randomMascot, setRandomMascot] = useState('');
  
  // Play welcome sound and vibration
  const playWelcomeSound = () => {
    try {
      const audio = new Audio('/sounds/welcome.mp3'); // You'll need to add this sound file
      audio.volume = 0.6;
      audio.play();
    } catch (error) {
      console.log('Welcome sound not available');
    }
  };
  
  const triggerVibration = () => {
    if (navigator.vibrate) {
      // Pattern: vibrate 100ms, pause 50ms, vibrate 100ms
      navigator.vibrate([100, 50, 100]);
    }
  };
  
  // Get username
  const getUserName = () => {
    if (player?.name) return player.name;
    
    let savedName = localStorage.getItem('userName');
    if (!savedName) {
      savedName = 'Champion';
      localStorage.setItem('userName', savedName);
    }
    return savedName;
  };
  
  const userName = getUserName();

    // Get days since first open
    const getDaysSinceFirstOpen = () => {
    let firstOpenDate = localStorage.getItem('firstOpenDate');
    
    if (!firstOpenDate) {
        // Set today as first open date if not exists
        const today = new Date();
        firstOpenDate = today.toISOString().split('T')[0]; // Store as YYYY-MM-DD
        localStorage.setItem('firstOpenDate', firstOpenDate);
        return 1; // First day
    }
    
    // Calculate difference in days
    const firstDate = new Date(firstOpenDate);
    const today = new Date();
    
    // Set both dates to midnight for accurate day calculation
    firstDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const diffTime = today - firstDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Return at least 1 (Day 1 on first day)
    return diffDays + 1;
    };

    const dayCount = getDaysSinceFirstOpen();
  
  useEffect(() => {
    // If not showing, call onContinue immediately
    if (!show) {
      onContinue();
      return;
    }
    
    // Mark as shown for this session
    sessionStorage.setItem('welcomeShown', 'true');
    
    // Hide bottom nav when showing welcome screen
    document.body.classList.add('hide-bottom-nav');
    
    // Play welcome sound and vibration when component mounts
    playWelcomeSound();
    triggerVibration();
    
    // Pick random mascot on mount
    const mascots = ['🦉', '🐧', '🦝', '🦜', '🦕', '🐙', '🦊', '🐸', '🦁', '🐨'];
    setRandomMascot(mascots[Math.floor(Math.random() * mascots.length)]);
    
    // Trigger mascot animation
    const bounceTimer = setInterval(() => {
      setMascotBounce(prev => !prev);
    }, 2000);
    
    // Rotate motivational messages
    const messages = [
      "🎯 New challenges await!",
      "🏆 Ready to be a champion?",
      "🌟 Your brain adventure starts now!",
      "🎨 Time for fun learning!",
      "🎪 The quiz circus is open!",
      "🚀 Blast off to knowledge!",
      "🎭 Let's play and learn!",
      "🌈 Rainbow of questions ahead!"
    ];
    
    setMotivationalText(messages[Math.floor(Math.random() * messages.length)]);
    
    const messageTimer = setInterval(() => {
      setMotivationalText(messages[Math.floor(Math.random() * messages.length)]);
    }, 3000);
    
    return () => {
      document.body.classList.remove('hide-bottom-nav');
      clearInterval(bounceTimer);
      clearInterval(messageTimer);
    };
  }, [show, onContinue]);

  const handleContinue = () => {
    // Play click sound and vibrate
    try {
      const audio = new Audio('/sounds/tap.mp3');
      audio.volume = 0.5;
      audio.play();
    } catch (error) {
      console.log('Click sound not available');
    }
    
    // Short vibration for button press
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }
    
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

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${animateOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      
      {/* Gradient background with darker bottom-right corner */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)'
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Twinkling stars in fixed positions */}
        {[
          { top: '10%', left: '15%', size: '24px', delay: '0s' },
          { top: '20%', left: '75%', size: '20px', delay: '0.5s' },
          { top: '15%', left: '45%', size: '28px', delay: '1s' },
          { top: '30%', left: '85%', size: '22px', delay: '1.5s' },
          { top: '8%', left: '60%', size: '26px', delay: '2s' },
        ].map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              fontSize: star.size,
              animationDelay: star.delay
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
        {/* Random mascot character */}
        <div className={`text-8xl mb-4 transition-transform duration-500 ${
          mascotBounce ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
        }`}>
          {randomMascot}
        </div>

        {/* Greeting with username (Gemini style) */}
        <div className="relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"></div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"></div>
          <div className="relative">
            <h1 className="text-3xl font-bold text-purple-800">
              Hello, {userName}! 👋
            </h1>
            <p className="text-sm text-purple-600 mt-1">{getGreeting()}</p>
          </div>
        </div>

        {/* Stats display */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"></div>
            <div className="relative">
              <div className="text-3xl mb-1">⭐</div>
              <div className="text-2xl font-bold text-orange-800">{player?.level || 1}</div>
              <div className="text-xs text-orange-600">Level</div>
            </div>
          </div>
          <div className="relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"></div>
            <div className="relative">
              <div className="text-3xl mb-1">🪙</div>
              <div className="text-2xl font-bold text-teal-800">{player?.coins || 0}</div>
              <div className="text-xs text-teal-600">Coins</div>
            </div>
          </div>
          <div className="relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100"></div>
            <div className="relative">
              <div className="text-3xl mb-1">📅</div>
              <div className="text-2xl font-bold text-purple-800">{dayCount}</div>
              <div className="text-xs text-purple-600">Day{dayCount !== 1 ? 's' : ''}</div>
            </div>
          </div>
        </div>


        {/* Spacer */}
        <div className="h-4"></div>

        {/* Animated motivational message (moved up) */}
        <div className="text-white/90 font-medium animate-fade-slide mb-6">
          {motivationalText}
        </div>

        {/* Play button (moved to bottom) */}
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
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2);
          }
        }
        
        @keyframes float-right {
          from { transform: translateX(-100px); }
          to { transform: translateX(calc(100vw + 100px)); }
        }
        
        @keyframes fade-slide {
          0%, 100% { opacity: 0.8; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
        }
        
        .animate-twinkle {
          color: rgba(255, 255, 255, 0.9);
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
        
        .animate-fade-slide {
          animation: fade-slide 3s ease-in-out infinite;
        }
        
        .hide-bottom-nav .bottom-nav {
          display: none !important;
        }
      `}</style>
    </div>
  );
}