// src/components/Auth/PhoneAuth.jsx

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkUserExists } from '../../utils/authHelpers';
import { sendOTP, verifyOTP } from '../../utils/firebaseAuth';

import './auth.css';

export default function PhoneAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Retrieve saved phone number from sessionStorage or location state
  const [phone, setPhone] = useState(() => {
    return sessionStorage.getItem('tempPhone') || location.state?.phone || '';
  });
  const [countryCode, setCountryCode] = useState(() => {
    return sessionStorage.getItem('tempCountryCode') || '+91';
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  
  // Save phone number to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('tempPhone', phone);
    sessionStorage.setItem('tempCountryCode', countryCode);
  }, [phone, countryCode]);
  
  // Define handleSubmit
// Find the entire handleSubmit function and replace with:
const handleSubmit = async () => {
  setLoading(true);
  setError('');
  
  const fullPhone = countryCode + phone.replace(/\D/g, '');
  
  if (phone.replace(/\D/g, '').length < 10) {
    setError('Please enter a valid phone number');
    setLoading(false);
    return;
  }
  
  try {
    // Send OTP using Firebase
    const confirmation = await sendOTP(fullPhone);
    setConfirmationResult(confirmation);
    setOtpSent(true);
    sessionStorage.setItem('tempPhone', fullPhone); // Store for later use
  } catch (error) {
    setError('Failed to send OTP. Please try again.');
    console.error('OTP send error:', error);
  }
  
  setLoading(false);
};

// Add new function for OTP verification:
const handleVerifyOTP = async () => {
  setLoading(true);
  setError('');
  
  try {
    const user = await verifyOTP(confirmationResult, otp);
    const fullPhone = sessionStorage.getItem('tempPhone');
    
    // Check if user exists in your local database
    const exists = await checkUserExists(fullPhone);
    
    if (exists) {
      navigate('/auth/signin', { state: { phone: fullPhone, firebaseUser: user } });
    } else {
      navigate('/auth/avatar', { state: { phone: fullPhone, firebaseUser: user } });
    }
  } catch (error) {
    setError('Invalid OTP. Please try again.');
    console.error('OTP verification error:', error);
  }
  
  setLoading(false);
};


// Auto-submit useEffect AFTER handleSubmit is defined
useEffect(() => {
  // Don't auto-submit if preventAutoSubmit flag is set
  if (location.state?.preventAutoSubmit) {
    return;
  }
  
  // Don't auto-submit if coming back from avatar screen
  if (location.state?.fromAvatar) {
    return;
  }
  
  if (phone && phone.length === 10) {
    // Auto-check after a brief delay to show the UI
    const timer = setTimeout(() => {
      handleSubmit();
    }, 500);
    return () => clearTimeout(timer);
  }
}, []); // Run only once on mount

  return (
    <div className="auth-screen" style={{ 
      background: 'linear-gradient(135deg, #aa529bff 0%, #6d4397ff 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="decorative-icons">
        <div className="floating-icon" style={{ top: '5%', left: '10%', animationDelay: '0s' }}>🎮</div>
        <div className="floating-icon" style={{ top: '15%', right: '10%', animationDelay: '5s' }}>🏆</div>
        <div className="floating-icon" style={{ top: '20%', left: '15%', animationDelay: '10s' }}>⭐</div>
        <div className="floating-icon" style={{ top: '75%', right: '20%', animationDelay: '15s' }}>🎯</div>
        <div className="floating-icon" style={{ top: '85%', left: '25%', animationDelay: '20s' }}>🪙</div>
      </div>

      <div className="mascot" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px'
      }}>
        <div style={{ fontSize: '100px' }}>🎮</div>
      </div>

      <div className="content-card">
        <h1 className="title">Ready to Play?</h1>
        <p className="subtitle">Enter your phone to start!</p>

        <div className="phone-input-group" style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '24px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <select 
            className="country-select"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            style={{
              width: 'auto',
              minWidth: '95px',
              padding: '16px 8px',
              border: '2px solid #e2e8f0',
              borderRadius: '16px',
              fontSize: '16px',
              fontWeight: '600',
              background: 'white',
              transition: 'all 0.3s',
              color: '#333',
              textAlign: 'center'
            }}
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+86">🇨🇳 +86</option>
            <option value="+81">🇯🇵 +81</option>
          </select>
          
          <input
            type="tel"
            className="phone-input"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              if (value.length <= 10) {
                setPhone(value);
                // Clear error when user starts typing
                if (error) setError('');
              }
            }}
            maxLength="10"
            inputMode="numeric"
            pattern="[0-9]*"
            style={{ 
              flex: 1,
              padding: '16px',
              paddingLeft: '12px',
              border: '2px solid #e2e8f0',
              borderRadius: '16px',
              fontSize: '18px',
              fontWeight: '600',
              transition: 'all 0.3s',
              background: 'white',
              color: '#333',
              WebkitTextFillColor: '#333'
            }}
          />
        </div>

        {/* Show real-time validation message */}
        {phone.length > 0 && phone.length < 10 && (
          <p style={{
            color: '#f59e0b',
            fontSize: '14px',
            textAlign: 'center',
            marginTop: '-16px',
            marginBottom: '16px'
          }}>
            Enter {10 - phone.length} more digit{10 - phone.length > 1 ? 's' : ''}
          </p>
        )}

        <button 
          className="submit-button"
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: '100%',
            padding: '18px',
            background: phone.length === 10 
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
              : 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            fontSize: '18px',
            fontWeight: '700',
            cursor: phone.length === 10 ? 'pointer' : 'not-allowed',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {loading ? 'Loading...' : 'Start Adventure!'} 
          <span>→</span>
        </button>

        {error && (
          <p className="error-message" style={{
            color: '#ef4444',
            fontSize: '14px',
            textAlign: 'center',
            marginTop: '12px',
            fontWeight: '600'
          }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}