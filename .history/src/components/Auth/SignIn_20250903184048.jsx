// src/components/Auth/SignIn.jsx
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserData } from '../../utils/authHelpers';
import './auth.css';

export default function SignIn() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone } = location.state || {};
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [displayName, setDisplayName] = useState('');
  
  // Get user data to display avatar
  const userData = getUserData(phone);
  
  useEffect(() => {
    // Check if credentials were remembered
    const remembered = localStorage.getItem('rememberCredentials');
    if (remembered === 'true') {
      setRememberMe(true);
    }
    
    // Get the most recent username from profile data if it exists
    if (phone) {
      const profileData = JSON.parse(localStorage.getItem(`user_profile_${phone}`) || '{}');
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      const userInfo = users[phone] || {};
      
      // Use profile name first, then users database name, then userData name
      const currentName = profileData.name || userInfo.username || userData?.username || '';
      setDisplayName(currentName);
    }
  }, [phone, userData]);
  
  const handleSignIn = async () => {
    if (!password) {
      setError('Please enter your password');
      return;
    }
    
    setLoading(true);
    setError('');
    
    // Simulate loading (remove in production)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (userData && userData.password === password) {
      // Get the latest profile data
      const profileData = JSON.parse(localStorage.getItem(`user_profile_${phone}`) || '{}');
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      const userInfo = users[phone] || {};
      
    // Ensure all data is properly set
    const userToSave = {
    phone,
    username: profileData.name || userInfo.username || userData.username,
    avatar: userData.avatar || userInfo.avatar,
    gender: userInfo.gender || userData.gender,
    ageGroup: userInfo.ageGroup || userData.ageGroup
    };

    localStorage.setItem('currentUser', JSON.stringify(userToSave));

    // Also update the qp_player to ensure game state has the name
    const existingPlayer = JSON.parse(localStorage.getItem('qp_player') || '{}');
    existingPlayer.name = userToSave.username;
    localStorage.setItem('qp_player', JSON.stringify(existingPlayer));
      
      if (rememberMe) {
        localStorage.setItem('rememberCredentials', 'true');
      }
      
      navigate('/', { replace: true });
    } else {
      setError('Wrong password');
      setLoading(false);
      // Auto-clear error after 3 seconds
      setTimeout(() => setError(''), 3000);
    }
  };
  
  const handleOTP = () => {
    navigate('/auth/otp', { state: { phone } });
  };
  
  const handleBack = () => {
    // Clear the auto-submit data to prevent auto-redirect
    sessionStorage.removeItem('tempPhone');
    sessionStorage.removeItem('tempCountryCode');
    
    // Extract just the phone number without country code
    const phoneWithoutCode = phone?.replace(/^\+\d{1,3}/, '') || '';
    
    // Navigate back to phone auth without triggering auto-submit
    navigate('/auth', { 
      replace: true,
      state: { phone: phoneWithoutCode, preventAutoSubmit: true } 
    });
  };
  
  const handleCreateNewAccount = () => {
    // Clear all temporary data
    sessionStorage.removeItem('tempPhone');
    sessionStorage.removeItem('tempCountryCode');
    
    // Navigate to phone auth page for new signup
    navigate('/auth', { 
      replace: true,
      state: { isNewAccount: true } 
    });
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignIn();
    }
  };
  
  return (
    <div className="auth-screen" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Back button */}
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

      {/* Floating decorative elements */}
      <div className="decorative-icons">
        <div className="floating-icon" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>🎮</div>
        <div className="floating-icon" style={{ top: '20%', right: '10%', animationDelay: '2s' }}>🏆</div>
        <div className="floating-icon" style={{ top: '70%', left: '8%', animationDelay: '4s' }}>⭐</div>
        <div className="floating-icon" style={{ top: '80%', right: '5%', animationDelay: '6s' }}>🎯</div>
      </div>

      <div className="content-card" style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '32px',
        padding: '32px',
        width: '90%',
        maxWidth: '400px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        margin: '0 auto'
      }}>
        {/* User Avatar Display */}
        {userData?.avatar && (
          <div style={{ 
            fontSize: '60px', 
            textAlign: 'center', 
            marginBottom: '16px',
            animation: 'bounce 2s infinite'
          }}>
            {userData.avatar.emoji}
          </div>
        )}
        
        <div className="welcome-back">
          <h1 className="title" style={{
            fontSize: '28px',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '8px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Welcome Back! 👋
          </h1>
          <p className="subtitle" style={{
            fontSize: '16px',
            color: '#64748b',
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            {displayName ? `Hey ${displayName}!` : 'Good to see you again!'}
          </p>
        </div>

        <div className="phone-display" style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#667eea',
          marginBottom: '24px',
          textAlign: 'center',
          padding: '12px',
          background: 'rgba(102, 126, 234, 0.1)',
          borderRadius: '12px'
        }}>
          {phone}
        </div>

        {/* Password Input with Eye Toggle */}
        <div style={{ position: 'relative', marginBottom: '16px' }}>
          <input
            type={showPassword ? "text" : "password"}
            className="phone-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError('');
            }}
            onKeyPress={handleKeyPress}
            style={{ 
              width: '100%',
              paddingRight: '45px',
              border: error ? '2px solid #ef4444' : '2px solid #e2e8f0',
              color: '#333',
              fontSize: '16px',
              WebkitTextFillColor: '#333',
              backgroundColor: 'white'
            }}
            autoFocus
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
              color: '#667eea'
            }}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>

        {/* Remember Me Checkbox */}
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
              accentColor: '#667eea'
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

        {/* Error Message */}
        {error && (
          <div style={{
            color: '#f59e0b',
            fontSize: '13px',
            textAlign: 'center',
            marginTop: '-12px',
            marginBottom: '16px',
            fontWeight: '500'
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Sign In Button */}
        <button 
          className="submit-button" 
          onClick={handleSignIn}
          disabled={loading}
          style={{
            width: '100%',
            padding: '18px',
            background: loading 
              ? 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            fontSize: '18px',
            fontWeight: '700',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '20px'
          }}
        >
          {loading ? (
            <>
              <span>Signing in...</span>
              <span className="animate-spin">⚙️</span>
            </>
          ) : (
            <>
              <span>Sign In</span>
              <span>🎮</span>
            </>
          )}
        </button>

        <div className="divider" style={{
          textAlign: 'center',
          margin: '20px 0',
          position: 'relative'
        }}>
          <span className="divider-text" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '0 16px',
            position: 'relative',
            color: '#94a3b8',
            fontSize: '14px'
          }}>OR</span>
        </div>

        {/* OTP Button */}
        <button 
          className="otp-button" 
          onClick={handleOTP}
          style={{
            width: '100%',
            padding: '16px',
            background: 'white',
            border: '2px solid #e2e8f0',
            borderRadius: '16px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#667eea',
            cursor: 'pointer',
            transition: 'all 0.3s',
            marginBottom: '12px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(102, 126, 234, 0.05)';
            e.currentTarget.style.borderColor = '#667eea';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.borderColor = '#e2e8f0';
          }}
        >
          Send OTP Instead
        </button>

        {/* Links Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid #e2e8f0'
        }}>
          {/* Forgot Password Link */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              // Handle forgot password
            }}
            style={{
              color: '#667eea',
              fontSize: '14px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Forgot password?
          </a>

          {/* New Account Link */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleCreateNewAccount();
            }}
            style={{
              color: '#667eea',
              fontSize: '14px',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            Create new account
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-spin {
          display: inline-block;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}