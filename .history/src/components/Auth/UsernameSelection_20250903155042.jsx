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
  const [gender, setGender] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [error, setError] = useState('');
  
  const ageGroups = [
    { value: 'under-5', label: 'Under 5 yrs' },
    { value: '5-10', label: '5-10 yrs' },
    { value: '11-15', label: '11-15 yrs' },
    { value: '16-20', label: '16-20 yrs' },
    { value: '20+', label: '20+ yrs' }
  ];
  
  const handleComplete = () => {
    setError('');
    
    if (!username) {
      setError('Please enter your name');
      return;
    }
    if (!gender) {
      setError('Please select your gender');
      return;
    }
    if (!ageGroup) {
      setError('Please select your age group');
      return;
    }
    
    // Save user data
    saveUser(phone, {
      username,
      gender,
      ageGroup,
      avatar,
      createdAt: new Date().toISOString()
    });
    
    // Save to localStorage as logged in
    localStorage.setItem('currentUser', JSON.stringify({
      phone,
      username,
      gender,
      ageGroup,
      avatar
    }));
    
    localStorage.setItem('userName', username);
    
    // Navigate to welcome screen
    navigate('/welcome', { 
      state: { username }, 
      replace: true 
    });
  };

  const handleBack = () => {
    navigate('/auth/avatar', { 
      state: { phone, avatar } 
    });
  };

  return (
    <div className="auth-screen" style={{
      background: 'linear-gradient(135deg, #6b46c1 0%, #9333ea 50%, #ec4899 100%)'
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
          <div className="dot active" style={{ background: '#9333ea' }}></div>
        </div>

        <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '16px' }}>
          {avatar?.emoji}
        </div>
        
        <h1 className="title" style={{
          background: 'linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Almost Done!</h1>
        <p className="subtitle">Tell us about yourself</p>

        <div style={{ marginBottom: '24px' }}>
          {/* Name Input */}
          <input
            type="text"
            className="phone-input"
            placeholder="Enter your name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ 
              width: '100%', 
              marginBottom: '20px',
              color: '#333',
              fontSize: '16px',
              WebkitTextFillColor: '#333',
              backgroundColor: 'white'
            }}
          />
          
          {/* Gender Selection */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              fontSize: '14px', 
              color: '#64748b', 
              marginBottom: '8px', 
              display: 'block' 
            }}>
              Gender
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setGender('male')}
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '2px solid',
                  borderColor: gender === 'male' ? '#9333ea' : '#e9d5ff',
                  borderRadius: '12px',
                  background: gender === 'male' ? 'rgba(147, 51, 234, 0.1)' : 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: gender === 'male' ? '#9333ea' : '#64748b',
                  transition: 'all 0.3s'
                }}
              >
                👦 Male
              </button>
              <button
                onClick={() => setGender('female')}
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '2px solid',
                  borderColor: gender === 'female' ? '#9333ea' : '#e9d5ff',
                  borderRadius: '12px',
                  background: gender === 'female' ? 'rgba(147, 51, 234, 0.1)' : 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: gender === 'female' ? '#9333ea' : '#64748b',
                  transition: 'all 0.3s'
                }}
              >
                👧 Female
              </button>
              <button
                onClick={() => setGender('other')}
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '2px solid',
                  borderColor: gender === 'other' ? '#9333ea' : '#e9d5ff',
                  borderRadius: '12px',
                  background: gender === 'other' ? 'rgba(147, 51, 234, 0.1)' : 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: gender === 'other' ? '#9333ea' : '#64748b',
                  transition: 'all 0.3s'
                }}
              >
                🌈 Other
              </button>
            </div>
          </div>
          
          {/* Age Group Selection */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              fontSize: '14px', 
              color: '#64748b', 
              marginBottom: '8px', 
              display: 'block' 
            }}>
              Age Group
            </label>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '8px' 
            }}>
              {ageGroups.map(age => (
                <button
                  key={age.value}
                  onClick={() => setAgeGroup(age.value)}
                  style={{
                    padding: '10px 4px',
                    border: '2px solid',
                    borderColor: ageGroup === age.value ? '#9333ea' : '#e9d5ff',
                    borderRadius: '12px',
                    background: ageGroup === age.value ? 'rgba(147, 51, 234, 0.1)' : 'white',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: ageGroup === age.value ? '#9333ea' : '#64748b',
                    transition: 'all 0.3s'
                  }}
                >
                  {age.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Error Message */}
          {error && (
            <div style={{
              color: '#ef4444',
              fontSize: '14px',
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              {error}
            </div>
          )}
        </div>

        <button 
          className="submit-button"
          onClick={handleComplete}
          disabled={!username || !gender || !ageGroup}
          style={{
            width: '100%',
            padding: '18px',
            background: (username && gender && ageGroup)
              ? 'linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)'
              : 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            fontSize: '18px',
            fontWeight: '700',
            cursor: (username && gender && ageGroup) ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          Let's Start! 🚀
        </button>
      </div>
    </div>
  );
}