// src/components/Auth/PhoneAuth.jsx

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkUserExists } from '../../utils/authHelpers';
import { sendOTP, verifyOTP, isTestPhoneNumber } from '../../utils/firebaseAuth';
import './auth.css';

export default function PhoneAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Phone number states
  const [phone, setPhone] = useState(() => {
    return sessionStorage.getItem('tempPhone') || location.state?.phone || '';
  });
  const [countryCode, setCountryCode] = useState(() => {
    return sessionStorage.getItem('tempCountryCode') || '+91';
  });
  
  // OTP flow states
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  
  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  
  // Save phone number to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('tempPhone', phone);
    sessionStorage.setItem('tempCountryCode', countryCode);
  }, [phone, countryCode]);
  
  // Handle resend timer
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);
  
  // Send OTP
  const handleSendOTP = async () => {
    setLoading(true);
    setError('');
    
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      setLoading(false);
      return;
    }
    
    const fullPhone = countryCode + cleanPhone;
    sessionStorage.setItem('fullPhone', fullPhone);
    
    try {
      console.log('Sending OTP to:', fullPhone);
      const result = await sendOTP(fullPhone);
      
      if (result.success) {
        setVerificationId(result.verificationId);
        setOtpSent(true);
        setResendTimer(60); // 60 second cooldown
        
        // Show test mode message if using test number
        if (isTestPhoneNumber(fullPhone)) {
          setError('Test mode: Use code 123456');
        }
      } else {
        setError(result.error || 'Failed to send OTP');
        console.error('OTP send error:', result.details);
      }
    } catch (error) {
      console.error('Send OTP error:', error);
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Verify OTP
  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      setError('Please enter a 6-digit code');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      console.log('Verifying OTP...');
      const result = await verifyOTP(otp, verificationId);
      
      if (result.success) {
        console.log('OTP verified successfully');
        
        // Check if user exists in your local database
        const fullPhone = sessionStorage.getItem('fullPhone');
        const userExists = checkUserExists(fullPhone);
        
        if (userExists) {
          // Existing user - go to sign in
          navigate('/signin', { 
            state: { 
              phone: fullPhone,
              firebaseUser: result.user 
            } 
          });
        } else {
          // New user - go to avatar selection
          sessionStorage.setItem('firebaseUser', JSON.stringify(result.user));
          navigate('/avatar-selection', { 
            state: { 
              phone: fullPhone,
              firebaseUser: result.user 
            } 
          });
        }
      } else {
        setError(result.error || 'Invalid verification code');
        setOtp(''); // Clear the OTP input
      }
    } catch (error) {
      console.error('Verify OTP error:', error);
      setError('Verification failed. Please try again.');
      setOtp('');
    } finally {
      setLoading(false);
    }
  };
  
  // Resend OTP
  const handleResendOTP = async () => {
    if (resendTimer > 0) return;
    
    setOtp('');
    setError('');
    await handleSendOTP();
  };
  
  // Go back to phone input
  const handleChangeNumber = () => {
    setOtpSent(false);
    setOtp('');
    setVerificationId(null);
    setError('');
  };
  
  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (!otpSent) {
        handleSendOTP();
      } else if (otp.length === 6) {
        handleVerifyOTP();
      }
    }
  };
  
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">
          {!otpSent ? 'Enter Your Phone Number' : 'Verify OTP'}
        </h1>
        
        {!otpSent ? (
          // Phone Number Input Screen
          <>
            <p className="auth-subtitle">
              We'll send you a verification code
            </p>
            
            <div className="phone-input-group">
              <select 
                className="country-code-select"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                disabled={loading}
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+86">+86 (China)</option>
                <option value="+81">+81 (Japan)</option>
              </select>
              
              <input
                type="tel"
                className="phone-input"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                maxLength="10"
                onKeyPress={handleKeyPress}
                disabled={loading}
                autoFocus
              />
            </div>
            
            <button 
              className="submit-button"
              onClick={handleSendOTP}
              disabled={loading || phone.length !== 10}
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
          </>
        ) : (
          // OTP Verification Screen
          <>
            <p className="auth-subtitle">
              Enter the 6-digit code sent to
              <br />
              <strong>{countryCode} {phone}</strong>
            </p>
            
            {isTestPhoneNumber(countryCode + phone) && (
              <div style={{
                background: '#fef3c7',
                border: '1px solid #f59e0b',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '20px',
                fontSize: '14px',
                color: '#92400e'
              }}>
                <strong>Test Mode:</strong> Use code <strong>123456</strong>
              </div>
            )}
            
            <input
              type="text"
              className="otp-input"
              placeholder="000000"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              maxLength="6"
              onKeyPress={handleKeyPress}
              disabled={loading}
              autoFocus
              style={{
                width: '100%',
                padding: '18px',
                fontSize: '24px',
                textAlign: 'center',
                letterSpacing: '8px',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                marginBottom: '12px'
              }}
            />
            
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              {otp.length}/6 digits
            </p>
            
            <button 
              className="verify-button"
              onClick={handleVerifyOTP}
              disabled={loading || otp.length !== 6}
              style={{
                width: '100%',
                padding: '18px',
                background: otp.length === 6
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : '#e5e7eb',
                color: otp.length === 6 ? 'white' : '#9ca3af',
                border: 'none',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: otp.length === 6 && !loading ? 'pointer' : 'not-allowed',
                marginBottom: '12px'
              }}
            >
              {loading ? 'Verifying...' : 'Verify & Continue'}
            </button>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <button
                onClick={handleChangeNumber}
                disabled={loading}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: 'transparent',
                  color: '#667eea',
                  border: '2px solid #667eea',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Change Number
              </button>
              
              <button
                onClick={handleResendOTP}
                disabled={loading || resendTimer > 0}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: 'transparent',
                  color: resendTimer > 0 ? '#9ca3af' : '#667eea',
                  border: `2px solid ${resendTimer > 0 ? '#e5e7eb' : '#667eea'}`,
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: resendTimer > 0 ? 'not-allowed' : 'pointer'
                }}
              >
                {resendTimer > 0 ? `Resend (${resendTimer}s)` : 'Resend OTP'}
              </button>
            </div>
          </>
        )}
        
        {error && (
          <div style={{
            marginTop: '16px',
            padding: '12px',
            background: error.includes('Test mode') ? '#fef3c7' : '#fee2e2',
            border: `1px solid ${error.includes('Test mode') ? '#f59e0b' : '#ef4444'}`,
            borderRadius: '8px',
            color: error.includes('Test mode') ? '#92400e' : '#991b1b',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}