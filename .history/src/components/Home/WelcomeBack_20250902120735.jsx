import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WelcomeBack({ player, onContinue }) {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  
  // Check if user has been seen today
  useEffect(() => {
  const lastSeen = localStorage.getItem('lastSeenDate');
  const today = new Date().toDateString();
  
    // TESTING MODE: Always show welcome screen
    // Comment this out for production
    const ALWAYS_SHOW_FOR_TESTING = true;
    
    if (ALWAYS_SHOW_FOR_TESTING) {
        // Always show in testing mode
        return;
    }
    
    // PRODUCTION MODE: Show once per day
    if (lastSeen === today) {
        setShow(false);
        onContinue();
    } else {
        localStorage.setItem('lastSeenDate', today);
    }
    }, [onContinue]);

  const handleContinue = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setShow(false);
      onContinue();
    }, 500);
  };

  if (!show) return null;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const getMotivationalMessage = () => {
    const messages = [
      "Ready to challenge your mind?",
      "Let's make today count!",
      "Your brain workout awaits!",
      "Time to level up your knowledge!",
      "Another day, another victory!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 
      flex items-center justify-center transition-opacity duration-500
      ${animateOut ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-md mx-auto">
        {/* Avatar */}
        <div className="mb-6 animate-bounce">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl shadow-2xl">
            {player?.avatar || '😊'}
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-4xl font-bold text-white mb-2 animate-fade-in">
          {getGreeting()}, {player?.name || 'Champion'}!
        </h1>
        
        {/* Stats */}
        <div className="flex justify-center gap-6 mb-6 animate-slide-up">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{player?.level || 1}</div>
            <div className="text-xs text-gray-300">Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{player?.streak || 0}</div>
            <div className="text-xs text-gray-300">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{player?.coins || 0}</div>
            <div className="text-xs text-gray-300">Coins</div>
          </div>
        </div>

        {/* Motivational message */}
        <p className="text-lg text-gray-200 mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
          {getMotivationalMessage()}
        </p>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full 
            shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300
            animate-pulse-slow"
        >
          Let's Go! 🚀
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          animation-delay: 0.2s;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}