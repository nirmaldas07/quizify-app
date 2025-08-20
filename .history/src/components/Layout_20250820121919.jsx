// src/components/Layout.jsx
import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  // hide nav on quiz screens
  const hideNav = location.pathname.includes("/quiz/");

  return (
    <div className="min-h-screen bg-base-bg text-base-text flex flex-col">
      {/* Page content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Bottom Nav */}
      {!hideNav && (
        <div className="fixed bottom-0 left-0 w-full bg-base-card text-base-text flex justify-around items-center h-16 border-t border-base-border">
          <button
            className="flex flex-col items-center text-sm"
            onClick={() => navigate("/")}
          >
            <div className="text-xl">🏠</div>
            <span>Home</span>
          </button>

          <button
            className="flex flex-col items-center text-sm"
            onClick={() => navigate("/play")}
          >
            <div className="text-xl">🎮</div>
            <span>Play</span>
          </button>

          <button
            className="flex flex-col items-center text-sm"
            onClick={() => navigate("/leaderboard")}
          >
            <div className="text-xl">🏆</div>
            <span>Leaders</span>
          </button>
        </div>
      )}
    </div>
  );
}
