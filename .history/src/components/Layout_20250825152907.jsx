// src/components/Layout.jsx
import React, { useRef, useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function WheelIcon({ size = 22 }) {
  return (
    <div style={{ width: size, height: size }} className="grid place-items-center">
      <svg
        viewBox="0 0 100 100"
        className="motion-safe:animate-[spin_9s_linear_infinite] group-active:motion-safe:animate-[spin_1.2s_linear_infinite]"
      >
        <path d="M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z" fill="#6366F1" />
        <path d="M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z" fill="#22C55E" />
        <path d="M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z" fill="#F59E0B" />
        <path d="M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z" fill="#EF4444" />
        <path d="M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z" fill="#3B82F6" />
        <path d="M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z" fill="#8B5CF6" />
        <circle cx="50" cy="50" r="9" fill="#111827" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollPositions = useRef({});
  const lastTapRef = useRef(0);

  // Preload sound
  const soundRef = useRef(null);
  useEffect(() => {
    soundRef.current = new Audio("/sounds/refresh.mp3");
  }, []);

  // Restore scroll when navigating
  useEffect(() => {
    const pos = scrollPositions.current[pathname];
    if (pos !== undefined) {
      window.scrollTo(0, pos);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const saveScroll = () => {
    scrollPositions.current[pathname] = window.scrollY;
  };

  // ✅ Pull-to-refresh only for bottom nav pages
  const inBottomNavPage = ["/", "/play", "/profile"].includes(pathname);

  // ✅ Track modal-open state reactively
  const [modalOpen, setModalOpen] = useState(false);
  const [leaveConfirm, setLeaveConfirm] = useState({ open: false, go: null });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setModalOpen(document.body.classList.contains("modal-open"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // In your Layout.jsx, update this line:
    const HIDE_ROUTES = [/^\/quiz\//, /^\/practice\//, /^\/profile\//]; // Add /^\/profile\//

// This will hide bottom nav for all profile sub-routes like /profile/leaderboard
  const hideNav = modalOpen || HIDE_ROUTES.some(r => r.test(pathname));

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  /* ---------------- Pull-to-refresh ---------------- */
  const touchStartY = useRef(0);
  const [pulling, setPulling] = useState(false);
  const [pullDist, setPullDist] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const handleTouchStart = (e) => {
    if (!inBottomNavPage) return; // 🚫 only on Home, Play, Leaderboard
    if (window.scrollY === 0) {
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    if (!inBottomNavPage) return; // 🚫 only on Home, Play, Leaderboard
    if (window.scrollY === 0) {
      const dist = e.touches[0].clientY - touchStartY.current;
      if (dist > 0) {
        setPulling(true);
        setPullDist(Math.min(dist, 80));
      }
    }
  };

  const handleTouchEnd = () => {
    if (pulling && pullDist > 40) {
      setRefreshing(true);

      // ✅ Play sound
      if (soundRef.current) {
        soundRef.current.currentTime = 0;
        soundRef.current.play().catch(() => {});
      }

      // ✅ Vibrate
      if (navigator.vibrate) {
        navigator.vibrate(60);
      }

      // ✅ Scroll top
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Stop indicator after 1s
      setTimeout(() => setRefreshing(false), 1000);
    }
    setPulling(false);
    setPullDist(0);
  };

  const NavItem = ({ path, icon, label }) => {
    const active = isActive(path);

    const handleClick = () => {
    // remember scroll before any nav
    saveScroll();

    // what to do after user confirms
    const go = () => {
        if (path === "/play") {
        navigate(`/play?view=modes&reset=${Date.now()}`);
        if (navigator.vibrate) navigator.vibrate(15);
        return;
        }

        if (active) {
        const now = Date.now();
        if (now - lastTapRef.current < 500) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            if (navigator.vibrate) navigator.vibrate(30);
        }
        lastTapRef.current = now;
        } else {
        navigate(path);
        }
    };

    // if user is mid-question, ask first via styled modal
    const inQuestion = localStorage.getItem("qp_in_question") === "true";
    if (inQuestion) {
        setLeaveConfirm({ open: true, go });
        return;
    }

    go();
    };


    return (
      <button
        type="button"
        onClick={handleClick}
        className={`group relative flex h-12 w-20 flex-col items-center justify-center rounded-xl transition
          ${active ? "text-white" : "text-base-muted hover:text-white"}`}
        aria-current={active ? "page" : undefined}
      >
        {active && <span className="absolute -top-1 h-1 w-8 rounded-full bg-white/40" />}
        <div className="leading-none">{icon}</div>
        <span className="mt-0.5 text-[11px]">{label}</span>
      </button>
    );
  };

  return (
    <div
      className="min-h-screen bg-base-bg text-base-text"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pull-to-refresh indicator */}
      {(pulling || refreshing) && (
        <div
          className="fixed left-1/2 z-50 flex flex-col items-center text-white text-sm transition-all duration-200"
          style={{
            top: refreshing ? "4rem" : `${Math.min(pullDist, 100)}px`,
            transform: "translateX(-50%)",
            width: "160px",
            textAlign: "center",
          }}
        >
          <span className={`${!refreshing ? "motion-safe:animate-spin" : "opacity-0"} mb-1`}>
            ⭮
          </span>
          <span className={refreshing ? "animate-bounce" : ""}>
            {refreshing ? "Updated!😍" : "Release to refresh"}
          </span>
        </div>
      )}
        <main
        className="mx-auto max-w-md px-5 overscroll-y-contain"
        style={{
            height: hideNav
            ? "100dvh"
            : "calc(100dvh - (5.25rem + env(safe-area-inset-bottom)))",
            paddingTop: "calc(env(safe-area-inset-top) + 12px)", // add 24px top space
            overflowY: "auto",
            transform: pulling ? `translateY(${pullDist}px)` : undefined,
            transition: (pulling || refreshing) ? "transform 0.3s ease" : undefined,
        }}
        >
        <Outlet />
        </main>

      {leaveConfirm.open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6">
            <div className="w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center">
            <div className="text-lg font-bold mb-2">Want to quit?</div>
            <p className="text-base-muted mb-5">You’ll lose this question’s progress.</p>
            <div className="flex gap-3">
                <button
                onClick={() => setLeaveConfirm({ open: false, go: null })}
                className="flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition"
                >
                Cancel
                </button>
                <button
                onClick={() => {
                    const fn = leaveConfirm.go;
                    setLeaveConfirm({ open: false, go: null });
                    fn?.();
                }}
                className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
                >
                Leave
                </button>
            </div>
            </div>
        </div>
)}


      {!hideNav && (
        <nav role="navigation" aria-label="Bottom navigation" className="fixed inset-x-0 bottom-0 z-50">
          <div
            className="absolute inset-x-0 bottom-0 bg-[#0B0F1A]"
            style={{ height: "calc(5.25rem + env(safe-area-inset-bottom))" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2">
            <div className="flex h-16 items-center justify-around rounded-2xl border border-base-border bg-base-card shadow-xl">
              <NavItem path="/"            icon={<span className="text-xl">🏠</span>} label="Home" />
              <NavItem path="/play"        icon={<WheelIcon size={24} />}      label="Play" />
              <NavItem path="/profile" icon={<span className="text-xl">👤</span>} label="Profile" />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
