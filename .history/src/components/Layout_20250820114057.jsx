import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const hideNav = pathname.startsWith("/quiz/");
  const isActive = (path) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  const NavItem = ({ path, icon, label }) => {
    const active = isActive(path);
    return (
      <button
        type="button"
        onClick={() => navigate(path)}
        className={`relative flex h-12 w-20 flex-col items-center justify-center rounded-xl transition
          ${active ? "text-white" : "text-base-muted hover:text-white"}`}
        aria-current={active ? "page" : undefined}
      >
        {active && <span className="absolute -top-1 h-1 w-8 rounded-full bg-white/40" />}
        <span className="text-xl leading-none">{icon}</span>
        <span className="mt-0.5 text-[11px]">{label}</span>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-base-bg text-base-text">
      {/* Content area with safe areas */}
      <main
        className={`mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1rem)]
          ${hideNav ? "pb-6" : "pb-[calc(5.25rem+env(safe-area-inset-bottom))]"}`}
      >
        <Outlet />
      </main>

      {/* Opaque bottom-area plate + rounded nav on top */}
      {!hideNav && (
        <nav role="navigation" aria-label="Bottom navigation" className="fixed inset-x-0 bottom-0 z-50">
          {/* Full-width opaque background so content never shows behind icons */}
          <div
            className="absolute inset-x-0 bottom-0 bg-[#0B0F1A]"
            style={{ height: "calc(5.25rem + env(safe-area-inset-bottom))" }}
            aria-hidden
          />
          {/* Nav content */}
          <div className="relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2">
            <div className="flex h-16 items-center justify-around rounded-2xl border border-base-border bg-base-card shadow-xl">
              <NavItem path="/"            icon="🏠" label="Home" />
              <NavItem path="/play"        icon="🎡" label="Play" />
              <NavItem path="/leaderboard" icon="🏆" label="Leaders" />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
