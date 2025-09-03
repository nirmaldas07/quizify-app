// src/components/Dev/DevTools.jsx
import { useState, useEffect } from 'react';

export default function DevTools() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null;
  
  const resetAuth = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/auth';
  };
  
  const clearUserData = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('users');
    sessionStorage.clear();
    alert('User data cleared! Refresh to start fresh.');
  };
  
  return (
    <>
      {/* Floating Dev Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#f59e0b',
          color: 'white',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        🛠️
      </button>
      
      {/* Dev Menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '140px',
          right: '20px',
          background: 'white',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          zIndex: 9999,
          minWidth: '200px'
        }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Dev Tools</h3>
          
          <button
            onClick={resetAuth}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '8px',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            🔄 Reset & Go to Signup
          </button>
          
          <button
            onClick={clearUserData}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '8px',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            🗑️ Clear User Data Only
          </button>
          
          <button
            onClick={() => console.log(localStorage)}
            style={{
              width: '100%',
              padding: '10px',
              background: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            📋 Log Storage to Console
          </button>
        </div>
      )}
    </>
  );
}