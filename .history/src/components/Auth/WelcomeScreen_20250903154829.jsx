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
        background: 'radial-gradient(circle at center, #1a1a2e 0%, #0f0f0f 100%)'
      }}
    >
      {/* Multiple radiating circles from center */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* First pulse - purple */}
        <div 
          className="absolute"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.8), transparent)',
            animation: 'pulseExpand 2.5s ease-out infinite'
          }}
        />
        
        {/* Second pulse - pink */}
        <div 
          className="absolute"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)',
            animation: 'pulseExpand 2.5s ease-out 0.5s infinite'
          }}
        />
        
        {/* Third pulse - blue */}
        <div 
          className="absolute"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)',
            animation: 'pulseExpand 2.5s ease-out 1s infinite'
          }}
        />
        
        {/* Center glow */}
        <div 
          className="absolute"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(147, 51, 234, 0.4))',
            boxShadow: '0 0 60px 20px rgba(147, 51, 234, 0.6)',
            animation: 'glow 2s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Radiating lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '2px',
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3), transparent)',
              transform: `rotate(${i * 30}deg)`,
              animation: `fadeInOut 2.5s ease-in-out ${i * 0.1}s infinite`
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
            textShadow: '0 0 30px rgba(147, 51, 234, 0.5)',
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
        @keyframes pulseExpand {
          0% {
            width: 100px;
            height: 100px;
            opacity: 0.8;
          }
          100% {
            width: 800px;
            height: 800px;
            opacity: 0;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.6;
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
      `}</style>
    </div>
  );
}