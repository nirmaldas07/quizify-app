// src/components/Auth/SignIn.jsx
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserData } from '../../utils/authHelpers';
import './auth.css';

export default function SignIn() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone } = location.state || {};
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSignIn = () => {
    // For now, simple password check (replace with real auth later)
    const userData = getUserData(phone);
    
    if (userData && userData.password === password) {
      localStorage.setItem('currentUser', JSON.stringify({
        phone,
        username: userData.username,
        avatar: userData.avatar
      }));
      navigate('/', { replace: true });
    } else {
      setError('Invalid password');
    }
  };
  
  const handleOTP = () => {
    // Navigate to OTP screen (implement later)
    navigate('/auth/otp', { state: { phone } });
  };
  
  return (
    <div className="auth-screen">
      <div className="content-card">
        <div className="welcome-back">
          <h1 className="title">Welcome Back! 👋</h1>
          <p className="subtitle">Good to see you again!</p>
        </div>

        <div className="phone-display">
          {phone}
        </div>

        <input
          type="password"
          className="phone-input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: '16px' }}
        />

        <button className="submit-button" onClick={handleSignIn}>
          Sign In
          <span>🎮</span>
        </button>

        {error && <p className="error-message">{error}</p>}

        <div className="divider">
          <span className="divider-text">OR</span>
        </div>

        <button className="otp-button" onClick={handleOTP}>
          Send OTP Instead
        </button>
      </div>
    </div>
  );
}