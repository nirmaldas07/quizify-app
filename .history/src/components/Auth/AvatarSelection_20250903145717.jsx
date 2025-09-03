// src/components/Auth/AvatarSelection.jsx
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './auth.css';

export default function AvatarSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone } = location.state || {};
  
  // Retrieve saved avatar from sessionStorage or location state
  const [selectedAvatar, setSelectedAvatar] = useState(() => {
    // First check if coming back from username screen with avatar
    if (location.state?.avatar) {
      return location.state.avatar;
    }
    // Otherwise check sessionStorage
    const savedAvatar = sessionStorage.getItem('tempAvatar');
    return savedAvatar ? JSON.parse(savedAvatar) : null;
  });
  
  const avatars = [
    { id: 1, emoji: '🤖', name: 'Robot', color: '#667eea' },
    { id: 2, emoji: '🦄', name: 'Unicorn', color: '#ec4899' },
    { id: 3, emoji: '🐉', name: 'Dragon', color: '#10b981' },
    { id: 4, emoji: '🧙', name: 'Wizard', color: '#8b5cf6' },
    { id: 5, emoji: '👨‍🚀', name: 'Astronaut', color: '#3b82f6' },
    { id: 6, emoji: '🥷', name: 'Ninja', color: '#1f2937' }
  ];

  // Save selected avatar to sessionStorage whenever it changes
  useEffect(() => {
    if (selectedAvatar) {
      sessionStorage.setItem('tempAvatar', JSON.stringify(selectedAvatar));
    }
  }, [selectedAvatar]);

  const handleContinue = () => {
    if (selectedAvatar) {
      navigate('/auth/username', { 
        state: { phone, avatar: selectedAvatar } 
      });
    }
  };

  return (
    <div className="auth-screen" style={{
      background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 35%, #6d28d9 70%, #a78bfa 100%)'
    }}>
      <button 
        className="back-button"
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: 'rgba(255,255,255,0.15)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.25)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.15)'}
      >
        <span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.9)' }}>‹</span>
      </button>

      <div className="content-card" style={{
        background: 'rgba(248, 250, 252, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '32px',
        padding: '32px',
        width: '90%',
        maxWidth: '400px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        <div className="progress-dots">
          <div className="dot active" style={{ background: '#3730a3' }}></div>
          <div className="dot" style={{ background: '#e2e8f0' }}></div>
        </div>

        <h1 className="title" style={{
          fontSize: '28px',
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '8px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #6d28d9 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Pick Your Hero!</h1>
        
        <p className="subtitle" style={{
          fontSize: '16px',
          color: '#64748b',
          textAlign: 'center',
          marginBottom: '32px'
        }}>Choose your quiz champion</p>

        <div className="avatar-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          marginBottom: '32px',
          padding: '0'
        }}>
          {avatars.map(avatar => (
            <div
              key={avatar.id}
              className={`avatar-card ${selectedAvatar?.id === avatar.id ? 'selected' : ''}`}
              onClick={() => setSelectedAvatar(avatar)}
              style={{
                aspectRatio: '1',
                borderRadius: '20px',
                background: selectedAvatar?.id === avatar.id 
                  ? 'linear-gradient(135deg, rgba(55, 48, 163, 0.1), rgba(109, 40, 217, 0.1))'
                  : 'white',
                border: selectedAvatar?.id === avatar.id 
                  ? '3px solid #3730a3' 
                  : '3px solid transparent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: selectedAvatar?.id === avatar.id 
                  ? '0 4px 20px rgba(55, 48, 163, 0.2)'
                  : '0 2px 10px rgba(0, 0, 0, 0.05)',
                transform: selectedAvatar?.id === avatar.id ? 'scale(1.05)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                if (selectedAvatar?.id !== avatar.id) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(55, 48, 163, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedAvatar?.id !== avatar.id) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                }
              }}
            >
              <div className="avatar-emoji" style={{
                fontSize: '40px',
                marginBottom: '8px'
              }}>{avatar.emoji}</div>
              <div className="avatar-name" style={{
                fontSize: '14px',
                fontWeight: '600',
                color: selectedAvatar?.id === avatar.id ? '#3730a3' : '#64748b'
              }}>{avatar.name}</div>
            </div>
          ))}
        </div>

        <button 
          className="submit-button"
          disabled={!selectedAvatar}
          onClick={handleContinue}
          style={{
            width: '100%',
            padding: '18px',
            background: selectedAvatar 
              ? 'linear-gradient(135deg, #3730a3 0%, #6d28d9 100%)'
              : 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            fontSize: '18px',
            fontWeight: '700',
            cursor: selectedAvatar ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: selectedAvatar 
              ? '0 4px 20px rgba(55, 48, 163, 0.3)'
              : 'none'
          }}
          onMouseEnter={(e) => {
            if (selectedAvatar) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 30px rgba(55, 48, 163, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedAvatar) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(55, 48, 163, 0.3)';
            }
          }}
        >
          Continue
          <span>→</span>
        </button>
      </div>
    </div>
  );
}