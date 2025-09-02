// src/hooks/useBackButton.js
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Function to handle the back button
    const handleBackButton = (e) => {
      // Check if we're at the root path
      if (location.pathname === '/') {
        // Prevent default back behavior at root
        e.preventDefault();
        
        // Push a new state to prevent app from closing
        window.history.pushState(null, '', '/');
        
        // Optional: You could show an exit confirmation here
        // For now, we just prevent the back action
        return;
      }
      
      // For other routes, let React Router handle navigation
      // The browser's default back behavior will work with React Router
    };

    // Handle popstate event (browser back/forward buttons)
    const handlePopState = (e) => {
      if (location.pathname === '/') {
        // At root, push state again to prevent exit
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
  }, [location.pathname, navigate]);

  // Return a manual back function that components can use
  const goBack = () => {
    if (location.pathname === '/') {
      // Already at home, do nothing
      return;
    }
    navigate(-1);
  };

  return { goBack };
}