// src/hooks/useBackButton.jsx
import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useBackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [lastBackPress, setLastBackPress] = useState(0);

  useEffect(() => {
    // Push initial state when at root
    if (location.pathname === '/') {
      // Clear any existing history states
      window.history.replaceState({ path: '/', preventBack: true }, '', '/');
      // Push an extra state to intercept back button
      window.history.pushState({ path: '/', preventBack: true }, '', '/');
    }

    // Handle popstate event (browser back/forward buttons including Android back)
    const handlePopState = (e) => {
      // Check if we're at the root path
      if (location.pathname === '/' || e.state?.preventBack) {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastBackPress;
        
        if (timeDiff < 2000 && lastBackPress > 0) {
          // Double back press detected - show exit dialog
          e.preventDefault();
          setShowExitDialog(true);
          // Push state again to prevent going back
          window.history.pushState({ path: '/', preventBack: true }, '', '/');
        } else {
          // First back press - show toast
          e.preventDefault();
          showExitToast();
          setLastBackPress(currentTime);
          // Push state again to prevent going back
          window.history.pushState({ path: '/', preventBack: true }, '', '/');
        }
      }
    };

    // Add event listener for popstate
    window.addEventListener('popstate', handlePopState);

    // Android-specific: Handle visibility change as a backup
    const handleVisibilityChange = () => {
      if (document.hidden && location.pathname === '/') {
        // App is being hidden, possibly by back button
        // Push state to ensure we stay in the app when returning
        window.history.pushState({ path: '/', preventBack: true }, '', '/');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // For apps wrapped in Capacitor/Cordova
    const handleBackButton = (e) => {
      if (location.pathname === '/') {
        e.preventDefault();
        e.stopPropagation();
        
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastBackPress;
        
        if (timeDiff < 2000 && lastBackPress > 0) {
          setShowExitDialog(true);
        } else {
          showExitToast();
          setLastBackPress(currentTime);
        }
        
        return false;
      }
    };

    // Try to register Cordova/Capacitor back button handler
    document.addEventListener('backbutton', handleBackButton, false);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('backbutton', handleBackButton);
    };
  }, [location.pathname, lastBackPress]);

  // Ensure history state is maintained
  useEffect(() => {
    const maintainHistory = () => {
      if (location.pathname === '/' && !window.history.state?.preventBack) {
        window.history.pushState({ path: '/', preventBack: true }, '', '/');
      }
    };

    // Check periodically to maintain the state
    const interval = setInterval(maintainHistory, 1000);

    return () => clearInterval(interval);
  }, [location.pathname]);

  // Show toast message for first back press
  const showExitToast = () => {
    // Remove any existing toast
    const existingToast = document.getElementById('exit-toast');
    if (existingToast) {
      existingToast.remove();
    }

    // Create and show new toast
    const toast = document.createElement('div');
    toast.id = 'exit-toast';
    toast.className = 'exit-toast';
    toast.textContent = 'Press back again to exit';
    
    // Add styles
    toast.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 24px;
      border-radius: 24px;
      font-size: 14px;
      z-index: 10000;
      animation: slideUp 0.3s ease-out;
      pointer-events: none;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideUp {
        from {
          transform: translateX(-50%) translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }
      @keyframes slideDown {
        from {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        to {
          transform: translateX(-50%) translateY(100%);
          opacity: 0;
        }
      }
    `;
    
    // Only add style if it doesn't exist
    if (!document.getElementById('exit-toast-styles')) {
      style.id = 'exit-toast-styles';
      document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);

    // Remove toast after 2 seconds
    setTimeout(() => {
      const toastEl = document.getElementById('exit-toast');
      if (toastEl) {
        toastEl.style.animation = 'slideDown 0.3s ease-out';
        toastEl.style.animationFillMode = 'forwards';
        setTimeout(() => toastEl.remove(), 300);
      }
    }, 2000);
  };

  // Exit confirmation dialog component
  const ExitDialog = () => {
    if (!showExitDialog) return null;

    const handleExit = () => {
      // Try different methods to close the app
      try {
        // Method 1: Capacitor/Cordova
        if (window.navigator?.app?.exitApp) {
          window.navigator.app.exitApp();
          return;
        }
        
        // Method 2: For Samsung Internet and some Android browsers
        if (window.navigator?.app?.backHistory) {
          window.navigator.app.backHistory();
          return;
        }

        // Method 3: Try to go back beyond app history
        const backCount = window.history.length;
        window.history.go(-backCount);
        
        // Method 4: Standard close (rarely works on mobile)
        window.close();
        
        // Method 5: If all else fails, clear history and go to blank
        setTimeout(() => {
          window.location.href = 'about:blank';
        }, 100);
      } catch (e) {
        console.log('Exit failed:', e);
        // Fallback
        window.location.href = 'about:blank';
      }
    };

    const handleCancel = () => {
      setShowExitDialog(false);
      // Push state again to maintain prevention
      window.history.pushState({ path: '/', preventBack: true }, '', '/');
    };

    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          animation: 'fadeIn 0.2s ease-out'
        }}
        onClick={handleCancel}
      >
        <div 
          style={{
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            borderRadius: '16px',
            padding: '24px',
            maxWidth: '320px',
            width: '90%',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            animation: 'slideIn 0.3s ease-out'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            Exit App?
          </h3>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            marginBottom: '24px',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            Are you sure you want to exit the Quiz Game?
          </p>
          
          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <button
              onClick={handleCancel}
              style={{
                flex: 1,
                padding: '12px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                background: 'transparent',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Stay
            </button>
            
            <button
              onClick={handleExit}
              style={{
                flex: 1,
                padding: '12px',
                border: 'none',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ff4444 100%)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                boxShadow: '0 4px 15px rgba(255, 68, 68, 0.3)'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Exit
            </button>
          </div>
        </div>
        
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideIn {
            from {
              transform: scale(0.9);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  };

  // Manual back function
  const goBack = useCallback(() => {
    if (location.pathname === '/') {
      setShowExitDialog(true);
      return;
    }
    navigate(-1);
  }, [location.pathname, navigate]);

  return { goBack, ExitDialog };
}