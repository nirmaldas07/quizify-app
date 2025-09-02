import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useBackButton = (customHandler = null) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBackButton = (e) => {
      // If custom handler is provided and returns true, prevent default
      if (customHandler && customHandler()) {
        e.preventDefault();
        window.history.pushState(null, '', window.location.pathname);
        return;
      }
      
      // Otherwise, let React Router handle it
    };

    // Push a new state when component mounts
    window.history.pushState(null, '', window.location.pathname);
    
    // Listen for popstate (back button)
    window.addEventListener('popstate', handleBackButton);
    
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [customHandler, location]);
};