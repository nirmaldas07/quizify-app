// src/components/Auth/WelcomeScreen.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './auth.css';

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [animateIn, setAnimateIn] = useState(false);
  
  const userName = location.state?.username || localStorage.getItem('userName') || 'Champion';

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setAnimateIn(true), 100);
    
    // Auto redirect after 3 seconds
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => navigate('/', { replace: true }), 300);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleContinue = () => {
    setShow(false);
    setTimeout(() => navigate('/', { replace: true }), 300);
  };

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${animateIn ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              fontSize: '20px',
              animationDelay: `${i * 0.2}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className={`text-center px-6 transform transition-all duration-700
        ${animateIn ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}
        style={{ maxWidth: '400px' }}
      >
        
        {/* Mascot with bounce */}
        <div className="text-8xl mb-6" 
          style={{
            animation: 'bounce 2s infinite',
            display: 'inline-block'
          }}>
          🎮
        </div>
        
        {/* Welcome message */}
        <h1 className="text-4xl font-bold text-white mb-3"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          Hello, {userName}! 👋
        </h1>
        <h2 className="text-2xl text-white/90 mb-4">
          Welcome to Quizify
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          Where learning meets fun - Let's make your brain sparkle! ✨
        </p>
        
        {/* Start button */}
        <button
          onClick={handleContinue}
          className="welcome-start-button"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '50px',
            fontSize: '18px',
            fontWeight: 'bold',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            transform: 'scale(1)',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
        >
          Start Learning <span style={{ fontSize: '24px' }}>→</span>
        </button>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}