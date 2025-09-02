// src/hooks/useBackButton.js
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useBackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [backPressCount, setBackPressCount] = useState(0);
  const [lastBackPress, setLastBackPress] = useState(0);

  useEffect(() => {
    // Function to handle the back button
    const handleBackButton = (e) => {
      // Check if we're at the root path
      if (location.pathname === '/') {
        e.preventDefault();
        
        // Implement double-tap to exit pattern
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastBackPress;
        
        if (timeDiff < 2000) {
          // If back pressed twice within 2 seconds, show exit dialog
          setShowExitDialog(true);
        } else {
          // First back press - show toast-like message
          showExitToast();
          setLastBackPress(currentTime);
        }
        
        // Push a new state to prevent app from closing
        window.history.pushState(null, '', '/');
        return;
      }
      
      // For other routes, let React Router handle navigation
    };

    // Handle popstate event (browser back/forward buttons)
    const handlePopState = (e) => {
      if (location.pathname === '/') {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastBackPress;
        
        if (timeDiff < 2000 && lastBackPress > 0) {
          // Double back press detected
          e.preventDefault();
          setShowExitDialog(true);
        } else {
          // First back press
          showExitToast();
          setLastBackPress(currentTime);
        }
        
        // Push state again to prevent exit
        window.history.pushState(null, '', '/');
      }
    };

    // Add event listeners
    window.addEventListener('popstate', handlePopState);
    
    // For Android hardware back button specifically
    document.addEventListener('backbutton', handleBackButton, false);

    // Push initial state if we're at root
    if (location.pathname === '/') {
      window.history.pushState(null, '', '/');
    }

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('backbutton', handleBackButton);
    };
  }, [location.pathname, navigate, lastBackPress]);

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
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);

    // Remove toast after 2 seconds
    setTimeout(() => {
      if (document.getElementById('exit-toast')) {
        toast.style.animation = 'slideDown 0.3s ease-out';
        toast.style.animationFillMode = 'forwards';
        setTimeout(() => toast.remove(), 300);
      }
    }, 2000);
  };

  // Exit confirmation dialog component
  const ExitDialog = () => {
    if (!showExitDialog) return null;

    const handleExit = () => {
      // Try different methods to close the app
      if (window.navigator.app && window.navigator.app.exitApp) {
        // Cordova/Capacitor method
        window.navigator.app.exitApp();
      } else if (window.close) {
        // Standard browser close (may not work in all cases)
        window.close();
      } else {
        // Fallback: Remove all history and go to blank page
        // This won't actually close the app but will indicate intention to exit
        window.location.href = 'about:blank';
      }
    };

    const handleCancel = () => {
      setShowExitDialog(false);
      // Push state again to maintain prevention
      window.history.pushState(null, '', '/');
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
        `}</style>
      </div>
    );
  };

  // Return a manual back function and the dialog component
  const goBack = () => {
    if (location.pathname === '/') {
      // Show exit dialog instead of going back
      setShowExitDialog(true);
      return;
    }
    navigate(-1);
  };

  return { goBack, ExitDialog };
}