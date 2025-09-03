// src/components/Auth/UsernameSelection.jsx
import { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveUser } from '../../utils/authHelpers';
import './auth.css';

export default function UsernameSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone, avatar } = location.state || {};
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [rememberMe, setRememberMe] = useState(false);
  
  // Generate suggestions only once using useMemo
  const suggestions = useMemo(() => [
    'QuizMaster' + Math.floor(Math.random() * 1000),
    'BrainStorm' + Math.floor(Math.random() * 1000),
    'SmartCookie' + Math.floor(Math.random() * 1000),
    'QuizWhiz' + Math.floor(Math.random() * 1000)
  ], []); // Empty dependency array means it only runs once
  
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
    
    // If remember me is checked, save credentials
    if (rememberMe) {
      localStorage.setItem('rememberCredentials', 'true');
    }
    
    // Navigate to welcome screen
    navigate('/welcome', { 
      state: { username }, 
      replace: true 
    });
  };

  const handleBack = () => {
    // Navigate back to avatar selection with phone and avatar preserved
    navigate('/auth/avatar', { 
      state: { phone, avatar } 
    });
  };

  return (
    <div className="auth-screen" style={{
      background: 'linear-gradient(135deg, #ba5174ff 0%, #a9822dff 50%, #ca52baff 100%)'
    }}>
      <button 
        className="back-button"
        onClick={handleBack}
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
          <div className="dot active" style={{ background: '#ff6b9d' }}></div>
        </div>

        <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '16px' }}>
          {avatar?.emoji}
        </div>
        
        <h1 className="title" style={{
          background: 'linear-gradient(135deg, #ff6b9d 0%, #ff9ff3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Almost Done!</h1>
        <p className="subtitle">Pick a username & password</p>

        <div style={{ marginBottom: '24px' }}>
          <input
            type="text"
            className="phone-input"
            placeholder="Choose a username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ 
              width: '100%', 
              marginBottom: '16px',
              color: '#333',
              fontSize: '16px',
              WebkitTextFillColor: '#333',
              backgroundColor: 'white'
            }}
          />
                
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '8px', 
            marginBottom: '16px' 
          }}>
            {suggestions.map((name, index) => (
              <button
                key={index}
                onClick={() => setUsername(name)}
                className="suggestion-button"
                style={{
                  padding: '10px',
                  border: '2px solid #ffe0ec',
                  borderRadius: '12px',
                  background: username === name ? 'rgba(255, 107, 157, 0.1)' : 'white',
                  borderColor: username === name ? '#ff6b9d' : '#ffe0ec',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '600',
                  transition: 'all 0.3s',
                  color: '#333',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {name}
              </button>
            ))}
          </div>
          
          <div style={{ position: 'relative', marginBottom: '16px' }}>
            <input
              type={showPassword ? "text" : "password"}
              className="phone-input"
              placeholder="Create a password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%',
                paddingRight: '45px',
                color: '#333',
                fontSize: '16px',
                WebkitTextFillColor: '#333',
                backgroundColor: 'white'
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '5px',
                fontSize: '20px',
                color: '#ff6b9d'
              }}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '20px'
          }}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{
                width: '18px',
                height: '18px',
                cursor: 'pointer',
                accentColor: '#ff6b9d'
              }}
            />
            <label 
              htmlFor="rememberMe"
              style={{
                fontSize: '14px',
                color: '#64748b',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              Remember me
            </label>
          </div>
        </div>

        <button 
          className="submit-button"
          onClick={handleComplete}
          disabled={!username || !password}
          style={{
            background: 'linear-gradient(135deg, #ff6b9d 0%, #ff9ff3 100%)'
          }}
        >
          Start Playing! 🎯
        </button>
      </div>
    </div>
  );
}