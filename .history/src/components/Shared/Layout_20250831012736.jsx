// src/components/Layout.jsx
import React, { useRef, useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function WheelIcon({ size = 22, spinning = false }) {
  return (
    <div style={{ width: size, height: size }} className="grid place-items-center">
      <svg
        viewBox="0 0 100 100"
        className={`${spinning ? 'animate-[spin_0.8s_ease-out]' : 'motion-safe:animate-[spin_9s_linear_infinite]'} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`}
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
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
  const [navAnimating, setNavAnimating] = useState(false);

  // Preload sounds
  const soundsRef = useRef({});
  useEffect(() => {
    soundsRef.current = {
      refresh: new Audio("/sounds/refresh.mp3"),
      tap: new Audio("/sounds/tap.mp3"),
      whoosh: new Audio("/sounds/whoosh.mp3")
    };
    // Set volumes
    Object.values(soundsRef.current).forEach(audio => {
      audio.volume = 0.5;
    });
  }, []);

  // Play sound helper
  const playSound = (soundName) => {
    const sound = soundsRef.current[soundName];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  };

  // Enhanced haptic feedback
  const haptic = (pattern) => {
    if (!navigator.vibrate) return;
    switch(pattern) {
      case 'light': navigator.vibrate(10); break;
      case 'medium': navigator.vibrate(20); break;
      case 'heavy': navigator.vibrate(40); break;
      case 'double': navigator.vibrate([20, 50, 20]); break;
      case 'success': navigator.vibrate([10, 50, 10, 50, 10]); break;
      default: navigator.vibrate(15);
    }
  };

 // Restore scroll when navigating
useEffect(() => {
  // Profile sub-routes should always start at top
  if (pathname.startsWith('/profile/')) {
    window.scrollTo(0, 0);
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTop = 0;
    }
  } else {
    const pos = scrollPositions.current[pathname];
    if (pos !== undefined) {
      window.scrollTo(0, pos);
    } else {
      window.scrollTo(0, 0);
    }
  }
}, [pathname]);

  const saveScroll = () => {
    scrollPositions.current[pathname] = window.scrollY;
  };

  // Pull-to-refresh only for bottom nav pages
  const inBottomNavPage = ["/", "/play", "/profile"].includes(pathname);

  // Track modal-open state reactively
  const [modalOpen, setModalOpen] = useState(false);
  const [leaveConfirm, setLeaveConfirm] = useState({ open: false, go: null });

  const [hideBottomNav, setHideBottomNav] = useState(false);

useEffect(() => {
  const checkHideNav = () => {
    setHideBottomNav(document.body.classList.contains('hide-bottom-nav'));
  };
  
  checkHideNav();
  
  const observer = new MutationObserver(checkHideNav);
  observer.observe(document.body, { 
    attributes: true, 
    attributeFilter: ['class'] 
  });
  
  return () => observer.disconnect();
}, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setModalOpen(document.body.classList.contains("modal-open"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
const HIDE_ROUTES = [
  /^\/quiz\//,
  /^\/practice\//,
  /^\/profile\//,
  // /^\/play\/classic/,  // This will hide nav for all classic mode screens
];
  const hideNav = modalOpen || hideBottomNav || HIDE_ROUTES.some(r => r.test(pathname));

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  /* ---------------- Enhanced Pull-to-refresh ---------------- */
  const touchStartY = useRef(0);
  const [pulling, setPulling] = useState(false);
  const [pullDist, setPullDist] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [pullProgress, setPullProgress] = useState(0);

  const handleTouchStart = (e) => {
    if (!inBottomNavPage || refreshing) return;
    if (window.scrollY === 0) {
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    if (!inBottomNavPage || refreshing) return;
    if (window.scrollY === 0) {
      const dist = e.touches[0].clientY - touchStartY.current;
      if (dist > 0) {
        setPulling(true);
        const cappedDist = Math.min(dist, 120);
        setPullDist(cappedDist);
        setPullProgress(Math.min((cappedDist / 60) * 100, 100));
        
        // Light haptic at threshold
        if (dist > 60 && dist < 65) {
          haptic('light');
        }
      }
    }
  };

  const handleTouchEnd = () => {
    if (pulling && pullDist > 60) {
      setRefreshing(true);
      playSound('refresh');
      haptic('success');
      
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Animate completion
      setTimeout(() => {
        setRefreshing(false);
        setPullProgress(0);
      }, 1500);
    }
    setPulling(false);
    setPullDist(0);
  };

  const NavItem = ({ path, icon, label, emoji }) => {
    const active = isActive(path);
    const [bounce, setBounce] = useState(false);

    const handleClick = () => {
      saveScroll();
      
      // Bounce animation
      setBounce(true);
      setTimeout(() => setBounce(false), 600);

      const go = () => {
        if (path === "/play") {
          setNavAnimating(true);
          playSound('whoosh');
          haptic('medium');
          setTimeout(() => {
            navigate(`/play?view=modes&reset=${Date.now()}`);
            setNavAnimating(false);
          }, 200);
          return;
        }

        if (active) {
          const now = Date.now();
          if (now - lastTapRef.current < 500) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            playSound('tap');
            haptic('double');
          }
          lastTapRef.current = now;
        } else {
          playSound('tap');
          haptic('light');
          navigate(path);
        }
      };

      // Check if in quiz
      const inQuestion = localStorage.getItem("qp_in_question") === "true";
      if (inQuestion && !active) {
        setLeaveConfirm({ open: true, go });
        return;
      }

      go();
    };

    return (
      <button
        type="button"
        onClick={handleClick}
        className={`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${active ? "scale-110" : "scale-100 hover:scale-105"}
          ${bounce ? 'animate-bounce' : ''}`}
        aria-current={active ? "page" : undefined}
      >
        {active && (
          <>
            <span className="absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
            <div className="absolute inset-0 rounded-xl bg-white/10 blur-xl" />
          </>
        )}
        <div className={`leading-none text-2xl transition-transform ${active ? 'scale-125' : ''} ${path === '/play' && navAnimating ? 'animate-spin' : ''}`}>
          {emoji ? emoji : icon}
        </div>
        <span className={`mt-1 text-[10px] font-medium transition-all ${active ? 'text-white' : 'text-base-muted/80'}`}>
          {label}
        </span>
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
      <style>{`
        @keyframes rainbow {
          0%, 100% { color: #FF6B6B; }
          20% { color: #4ECDC4; }
          40% { color: #FFD93D; }
          60% { color: #A8E6CF; }
          80% { color: #C7B8FF; }
        }
        
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-20px) scale(0.8); opacity: 0; }
        }
        
        .rainbow-text {
          animation: rainbow 2s linear infinite;
        }
        
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100px) rotate(720deg); opacity: 0; }
        }
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
      `}</style>

      {/* Enhanced Pull-to-refresh indicator */}
      {(pulling || refreshing) && (
        <div
          className="fixed left-1/2 z-50 flex flex-col items-center transition-all duration-300"
          style={{
            top: refreshing ? "60px" : `${Math.max(20, Math.min(pullDist - 20, 80))}px`,
            transform: "translateX(-50%) scale(" + (refreshing ? 1.1 : 1) + ")",
          }}
        >
          {/* Progress circle */}
          <div className="relative mb-2">
            <svg width="48" height="48" className={refreshing ? "animate-spin" : ""}>
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="4"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="4"
                strokeDasharray={`${pullProgress * 1.26} 126`}
                strokeLinecap="round"
                transform="rotate(-90 24 24)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="50%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-2xl">{refreshing ? "🎉" : "⬇"}</span>
            </div>
          </div>
          
          <span className={`text-sm font-medium text-white px-3 py-1 rounded-full bg-white/20 backdrop-blur
            ${refreshing ? 'rainbow-text' : ''}`}>
            {refreshing ? "Refreshed! 🌟" : pullDist > 60 ? "Release! 🚀" : "Pull down..."}
          </span>
          
          {/* Confetti effect when refreshing */}
          {refreshing && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${-30 + i * 15}px`,
                    animation: `confetti 1s ease-out forwards`,
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  {['🎊', '✨', '⭐', '🎈', '🎉', '💫'][i]}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

        <main
        className="mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain"
        style={{
            height: hideNav || document.body.classList.contains('hide-bottom-nav')
            ? "100dvh"
            : "calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",
            paddingTop: "calc(env(safe-area-inset-top) + 12px)",
            paddingBottom: hideNav || document.body.classList.contains('hide-bottom-nav') ? 0 : undefined,
            overflowY: "auto",
            transform: pulling && !refreshing ? `translateY(${pullDist * 0.5}px)` : undefined,
            transition: pulling || refreshing ? "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)" : undefined,
        }}
        >
        <Outlet />
        </main>

      {/* Enhanced Leave Confirmation Modal */}
      {leaveConfirm.open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
             style={{ animation: 'fadeIn 0.2s ease-out' }}>
          <div className="w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl"
               style={{ animation: 'slideUp 0.3s ease-out' }}>
            <div className="text-5xl mb-4" style={{ animation: 'bounce 0.6s ease-out' }}>😟</div>
            <div className="text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Leave the game?
            </div>
            <p className="text-base-muted mb-6 text-sm">You'll lose your current progress!</p>
            
            <div className="flex gap-3">
              <button
                onClick={() => {
                  haptic('light');
                  setLeaveConfirm({ open: false, go: null });
                }}
                className="flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400"
              >
                Keep Playing! 🎮
              </button>
              <button
                onClick={() => {
                  haptic('medium');
                  const fn = leaveConfirm.go;
                  setLeaveConfirm({ open: false, go: null });
                  fn?.();
                }}
                className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all"
              >
                Leave 👋
              </button>
            </div>
          </div>
          
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
        </div>
      )}

      {/* Enhanced Bottom Navigation */}
      {!hideNav && (
        <nav role="navigation" aria-label="Bottom navigation" className="fixed inset-x-0 bottom-0 z-50">
          <div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg"
            style={{ height: "calc(5.5rem + env(safe-area-inset-bottom))" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl" />
              
              <div className="relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl">
                <NavItem path="/" emoji="🏠" label="Home" />
                <NavItem path="/play" icon={<WheelIcon size={26} spinning={navAnimating} />} label="Play" />
                <NavItem path="/swipe" emoji="📚" label="Swipe" />
                <NavItem path="/profile" emoji="👤" label="Profile" />
                
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}