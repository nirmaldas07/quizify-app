// src/components/Auth/WelcomeScreen.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './auth.css';

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [animateIn, setAnimateIn] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  const userName = location.state?.username || localStorage.getItem('userName') || 'Champion';

  useEffect(() => {
    // Mark that user just signed up (to prevent WelcomeBack from showing)
    sessionStorage.setItem('justSignedUp', 'true');
    
    // Trigger animation
    setTimeout(() => setAnimateIn(true), 100);
    
    // Show button after 2 seconds
    setTimeout(() => setShowButton(true), 2000);
  }, []);

  const handleStart = () => {
    // Navigate directly to home
    navigate('/', { replace: true });
  };

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

      {/* Welcome Text - positioned above the center glow */}
      <div className={`absolute z-10 transition-all duration-1000
        ${animateIn ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          top: 'calc(50% - 200px)',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center'
        }}
      >
        <h1 style={{ 
          color: '#fff',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '1px',
          textShadow: '0 0 30px rgba(147, 51, 234, 0.5)',
          animation: 'fadeInUp 1s ease-out forwards',
          margin: 0
        }}>
          <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '8px' }}>
            Welcome
          </div>
          <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
            {userName}
          </div>
        </h1>
      </div>

      {/* CTA Button - positioned below the center glow */}
      {showButton && (
        <div className="absolute z-10"
          style={{
            bottom: '120px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <button
            onClick={handleStart}
            className="welcome-start-button"
            style={{
              background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
              color: 'white',
              padding: '18px 40px',
              borderRadius: '50px',
              fontSize: '20px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transform: 'scale(1)',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 4px 30px rgba(147, 51, 234, 0.4)',
              animation: 'slideUp 0.5s ease-out forwards'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 40px rgba(147, 51, 234, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(147, 51, 234, 0.4)';
            }}
          >
            Let's Learn <span style={{ fontSize: '24px' }}>🚀</span>
          </button>
        </div>
      )}

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
        
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}