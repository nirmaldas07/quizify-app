// src/components/Auth/WelcomeScreen.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './auth.css';

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [animateIn, setAnimateIn] = useState(false);
  
  const userName = location.state?.username || localStorage.getItem('userName') || 'Champion';

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setAnimateIn(true), 100);
    
    // Auto redirect after 2.5 seconds
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0f0c29 0%, #302b63 50%, #24243e 100%)'
      }}
    >
      {/* Animated sunset/sun */}
      <div 
        className="absolute"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #ffd700, #ff6b35)',
          boxShadow: '0 0 80px 20px rgba(255, 107, 53, 0.5)',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'sunset 2.5s ease-in-out forwards'
        }}
      />
      
      {/* Horizon line */}
      <div 
        className="absolute"
        style={{
          width: '100%',
          height: '2px',
          background: 'linear-gradient(to right, transparent, rgba(255, 107, 53, 0.5), transparent)',
          bottom: '35%',
          animation: 'fadeIn 1s ease-in-out'
        }}
      />
      
      {/* Stars appearing */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '2px',
              height: '2px',
              background: 'white',
              borderRadius: '50%',
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle 2s ease-in-out ${i * 0.1}s forwards`,
              opacity: 0
            }}
          />
        ))}
      </div>

      {/* Welcome Text */}
      <div className={`text-center px-6 z-10 transition-all duration-1000
        ${animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ maxWidth: '600px' }}
      >
        <h1 className="text-5xl font-bold mb-4"
          style={{ 
            color: '#fff',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '1px',
            textShadow: '0 2px 20px rgba(255, 107, 53, 0.3)',
            animation: 'fadeInUp 1s ease-out forwards'
          }}>
          Welcome {userName}
        </h1>
        
        <div className="flex justify-center gap-2 mt-4"
          style={{
            animation: 'fadeIn 1.5s ease-in-out 0.5s forwards',
            opacity: 0
          }}>
          <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '20px' }}>✨</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '20px' }}>✨</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '20px' }}>✨</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes sunset {
          0% {
            top: 30%;
            opacity: 1;
          }
          100% {
            top: 65%;
            opacity: 0.3;
            box-shadow: 0 0 120px 40px rgba(255, 107, 53, 0.8);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes twinkle {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0.8;
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  );
}