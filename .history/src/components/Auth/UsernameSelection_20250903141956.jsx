// src/components/Auth/UsernameSelection.jsx
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveUser } from '../../utils/authHelpers';
import './auth.css';

export default function UsernameSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone, avatar } = location.state || {};
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const suggestions = [
    'QuizMaster' + Math.floor(Math.random() * 1000),
    'BrainStorm' + Math.floor(Math.random() * 1000),
    'SmartCookie' + Math.floor(Math.random() * 1000),
    'QuizWhiz' + Math.floor(Math.random() * 1000)
  ];
  
  const handleComplete = () => {
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }
    
    // Save user data
    saveUser(phone, {
      username,
      password,
      avatar,
      createdAt: new Date().toISOString()
    });
    
    // Save to localStorage as logged in
    localStorage.setItem('currentUser', JSON.stringify({
      phone,
      username,
      avatar
    }));
    
    // Navigate to home
    navigate('/', { replace: true });
  };

  return (
    <div className="auth-screen">

    <button 
        className="back-button"
        onClick={() => window.history.back()}
        style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'rgba(255,255,255,0.2)',
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
        onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
        onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
        >
        <span style={{ fontSize: '24px', color: 'white' }}>‹</span>
    </button>

      <div className="content-card">
        <div className="progress-dots">
          <div className="dot"></div>
          <div className="dot active"></div>
        </div>

        <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '16px' }}>
          {avatar?.emoji}
        </div>
        
        <h1 className="title">Almost Done!</h1>
        <p className="subtitle">Pick a username & password</p>

        <div style={{ marginBottom: '24px' }}>
          <input
            type="text"
            className="phone-input"
            placeholder="Choose a username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', marginBottom: '16px' }}
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
            {suggestions.map((name, index) => (
              <button
                key={index}
                onClick={() => setUsername(name)}
                className="suggestion-button"
                style={{
                  padding: '12px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  background: username === name ? 'rgba(102, 126, 234, 0.1)' : 'white',
                  borderColor: username === name ? '#667eea' : '#e2e8f0',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
              >
                {name}
              </button>
            ))}
          </div>
          
          <input
            type="password"
            className="phone-input"
            placeholder="Create a password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <button 
          className="submit-button"
          onClick={handleComplete}
          disabled={!username || !password}
        >
          Start Playing! 🎯
        </button>
      </div>
    </div>
  );
}