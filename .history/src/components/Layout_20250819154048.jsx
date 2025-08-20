import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide nav on quiz pages
  const hideNav = location.pathname.includes('/quiz/');

  return (
    <div className="relative min-h-screen pb-20 bg-black text-white">
      {/* Render current page */}
      <Outlet />

      {/* Bottom Navigation (if not on quiz) */}
      {!hideNav && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around items-center h-16 border-t border-gray-700 z-50">
          <button className="flex flex-col items-center text-sm" onClick={() => navigate('/')}>
            <div className="text-xl">🏠</div>
            <span>Home</span>
          </button>
          <button className="flex flex-col items-center text-sm" onClick={() => navigate('/leaderboard')}>
            <div className="text-xl">🏆</div>
            <span>Leaderboard</span>
          </button>
          <button className="flex flex-col items-center text-sm" onClick={() => navigate('/profile')}>
            <div className="text-xl">👤</div>
            <span>You</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
