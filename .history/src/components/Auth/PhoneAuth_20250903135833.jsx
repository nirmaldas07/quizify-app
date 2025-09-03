// src/components/Auth/PhoneAuth.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkUserExists } from '../../utils/authHelpers';
import './auth.css';

export default function PhoneAuth() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    
    const fullPhone = countryCode + phone.replace(/\D/g, '');
    
    if (phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid phone number');
      setLoading(false);
      return;
    }
    
    // Check if user exists
    const exists = await checkUserExists(fullPhone);
    
    if (exists) {
      // Redirect to signin
      navigate('/auth/signin', { state: { phone: fullPhone } });
    } else {
      // Continue to avatar selection
      navigate('/auth/avatar', { state: { phone: fullPhone } });
    }
    setLoading(false);
  };

  return (
    <div className="auth-screen" style={{ 
  background: 'linear-gradient(135deg, #aa529bff 0%, #6d4397ff 100%)' 
}}>
      <div className="decorative-icons">
        <div className="floating-icon" style={{ top: '20%', animationDelay: '0s' }}>🎮</div>
        <div className="floating-icon" style={{ top: '30%', animationDelay: '5s' }}>🏆</div>
        <div className="floating-icon" style={{ top: '50%', animationDelay: '10s' }}>⭐</div>
        <div className="floating-icon" style={{ top: '70%', animationDelay: '15s' }}>🎯</div>
      </div>

      <div className="mascot">
        <div style={{ fontSize: '100px' }}>🎮</div>
      </div>

      <div className="content-card">
        <h1 className="title">Ready to Play?</h1>
        <p className="subtitle">Enter your phone to start!</p>

        <div className="phone-input-group">
          <select 
            className="country-select"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+91">🇮🇳 +91</option>
            <option value="+86">🇨🇳 +86</option>
            <option value="+81">🇯🇵 +81</option>
          </select>
          
            <input
            type="tel"
            className="phone-input"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                setPhone(value);
            }}
            maxLength="10"
            inputMode="numeric"
            pattern="[0-9]*"
            />
        </div>

        <button 
          className="submit-button"
          onClick={handleSubmit}
          disabled={loading || phone.length < 10}
        >
          {loading ? 'Loading...' : 'Start Adventure!'} 
          <span>→</span>
        </button>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}