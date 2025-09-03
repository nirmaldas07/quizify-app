// src/components/Auth/AvatarSelection.jsx
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './auth.css';

export default function AvatarSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone } = location.state || {};
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  
  const avatars = [
    { id: 1, emoji: '🤖', name: 'Robot', color: '#667eea' },
    { id: 2, emoji: '🦄', name: 'Unicorn', color: '#ec4899' },
    { id: 3, emoji: '🐉', name: 'Dragon', color: '#10b981' },
    { id: 4, emoji: '🧙', name: 'Wizard', color: '#8b5cf6' },
    { id: 5, emoji: '👨‍🚀', name: 'Astronaut', color: '#3b82f6' },
    { id: 6, emoji: '🥷', name: 'Ninja', color: '#1f2937' }
  ];

  const handleContinue = () => {
    if (selectedAvatar) {
      navigate('/auth/username', { 
        state: { phone, avatar: selectedAvatar } 
      });
    }
  };

  return (
    <div className="auth-screen">
      <div className="content-card">
        <div className="progress-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>

        <h1 className="title">Pick Your Hero!</h1>
        <p className="subtitle">Choose your quiz champion</p>

        <div className="avatar-grid">
          {avatars.map(avatar => (
            <div
              key={avatar.id}
              className={`avatar-card ${selectedAvatar?.id === avatar.id ? 'selected' : ''}`}
              onClick={() => setSelectedAvatar(avatar)}
            >
              <div className="avatar-emoji">{avatar.emoji}</div>
              <div className="avatar-name">{avatar.name}</div>
            </div>
          ))}
        </div>

        <button 
          className="submit-button"
          disabled={!selectedAvatar}
          onClick={handleContinue}
        >
          Continue
          <span>→</span>
        </button>
      </div>
    </div>
  );
}