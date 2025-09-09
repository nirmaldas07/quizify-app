// src/components/Layout.jsx
import React, { useRef, useEffect, useState, useCallback } from "react";
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
  const lastTapRef = useRef({});
  const [navAnimating, setNavAnimating] = useState(false);
  const mainRef = useRef(null);
  const scrollVelocityRef = useRef(0);
  const scrollTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  // Enhanced haptic feedback
  const haptic = (pattern) => {
    if (!navigator.vibrate) return;
    switch(pattern) {
      case 'light': navigator.vibrate(20); break;
      case 'medium': navigator.vibrate(35); break;
      case 'heavy': navigator.vibrate(50); break;
      case 'double': navigator.vibrate([30, 50, 30]); break;
      case 'success': navigator.vibrate([20, 50, 20, 50, 20]); break;
      default: navigator.vibrate(25);
    }
  };

  // Implement smooth scrolling with momentum
  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    let isUserScrolling = false;
    let momentumAnimation = null;
    let lastTouchY = 0;
    let velocity = 0;
    let lastTime = Date.now();

    // Handle touch start
    const handleTouchStart = (e) => {
      isUserScrolling = true;
      lastTouchY = e.touches[0].clientY;
      lastTime = Date.now();
      velocity = 0;
      
      // Cancel any ongoing momentum animation
      if (momentumAnimation) {
        cancelAnimationFrame(momentumAnimation);
        momentumAnimation = null;
      }
    };

    // Handle touch move
    const handleTouchMove = (e) => {
      if (!isUserScrolling) return;
      
      const currentY = e.touches[0].clientY;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime;
      const distance = currentY - lastTouchY;
      
      // Calculate velocity
      if (timeDelta > 0) {
        velocity = distance / timeDelta * 1000; // pixels per second
      }
      
      lastTouchY = currentY;
      lastTime = currentTime;
    };

    // Handle touch end - apply momentum
    const handleTouchEnd = () => {
      isUserScrolling = false;
      
      // Apply momentum scrolling if velocity is significant
      if (Math.abs(velocity) > 50) {
        const deceleration = 0.95; // Friction coefficient
        const minVelocity = 5;
        
        const applyMomentum = () => {
          if (Math.abs(velocity) > minVelocity) {
            const scrollAmount = velocity * 0.016; // 60fps timing
            
            // Check boundaries for rubber band effect
            const scrollTop = mainElement.scrollTop;
            const scrollHeight = mainElement.scrollHeight;
            const clientHeight = mainElement.clientHeight;
            
            if (scrollTop <= 0 && velocity > 0) {
              // At top, scrolling up - apply rubber band
              velocity *= 0.5;
              mainElement.classList.add('rubber-band-top');
              setTimeout(() => mainElement.classList.remove('rubber-band-top'), 300);
            } else if (scrollTop + clientHeight >= scrollHeight && velocity < 0) {
              // At bottom, scrolling down - apply rubber band
              velocity *= 0.5;
              mainElement.classList.add('rubber-band-bottom');
              setTimeout(() => mainElement.classList.remove('rubber-band-bottom'), 300);
            } else {
              mainElement.scrollTop -= scrollAmount;
            }
            
            velocity *= deceleration;
            momentumAnimation = requestAnimationFrame(applyMomentum);
          }
        };
        
        momentumAnimation = requestAnimationFrame(applyMomentum);
      }
    };

    // Add touch event listeners
    mainElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    mainElement.addEventListener('touchmove', handleTouchMove, { passive: true });
    mainElement.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      mainElement.removeEventListener('touchstart', handleTouchStart);
      mainElement.removeEventListener('touchmove', handleTouchMove);
      mainElement.removeEventListener('touchend', handleTouchEnd);
      if (momentumAnimation) {
        cancelAnimationFrame(momentumAnimation);
      }
    };
  }, []);

  // Enhanced scroll detection with direction
  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const handleScroll = () => {
      const currentScrollY = mainElement.scrollTop;
      
      // Detect scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
        mainElement.classList.add('scrolling-down');
        mainElement.classList.remove('scrolling-up');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
        mainElement.classList.add('scrolling-up');
        mainElement.classList.remove('scrolling-down');
      }
      
      lastScrollY.current = currentScrollY;
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set scrolling to false after scroll ends
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        mainElement.classList.remove('scrolling-up', 'scrolling-down');
      }, 150);
      
      // Save scroll position
      if (['/', '/play', '/swipe', '/profile'].includes(pathname)) {
        scrollPositions.current[pathname] = currentScrollY;
      }
    };

    mainElement.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [pathname]);

  // Save scroll position helper
  const saveScroll = useCallback(() => {
    if (['/', '/play', '/swipe', '/profile'].includes(pathname)) {
      const mainScroll = mainRef.current?.scrollTop || 0;
      const windowScroll = window.scrollY || window.pageYOffset || 0;
      const scrollPos = mainScroll > 0 ? mainScroll : windowScroll;
      scrollPositions.current[pathname] = scrollPos;
    }
  }, [pathname]);

  // Restore scroll when navigating
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.classList.add('navigating');
    }
    
    const alwaysTopRoutes = [
      '/profile/',
      '/quiz/',
      '/practice/',
      '/play/classic',
      '/settings',
      '/about',
    ];
    
    const shouldStartAtTop = alwaysTopRoutes.some(route => pathname.startsWith(route));
    
    const restoreScroll = () => {
      if (shouldStartAtTop) {
        if (mainRef.current) {
          mainRef.current.scrollTop = 0;
        }
        window.scrollTo(0, 0);
      } else {
        const savedPos = scrollPositions.current[pathname] || 0;
        if (mainRef.current) {
          // Use smooth scroll restoration
          mainRef.current.scrollTo({
            top: savedPos,
            behavior: 'instant' // Use instant for restoration to avoid delay
          });
        }
      }
      
      setTimeout(() => {
        if (mainRef.current) {
          mainRef.current.classList.remove('navigating');
        }
      }, 50);
    };
    
    // Give DOM time to render before restoring scroll
    requestAnimationFrame(() => {
      requestAnimationFrame(restoreScroll);
    });
  }, [pathname]);

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
    /^\/play\/classic/,
  ];
  const hideNav = modalOpen || hideBottomNav || HIDE_ROUTES.some(r => r.test(pathname));

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  // Smooth scroll to top
  const scrollToTop = useCallback(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
      });
    }
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  }, []);

  const NavItem = ({ path, icon, label, emoji }) => {
    const active = isActive(path);
    const [bounce, setBounce] = useState(false);

    const handleClick = useCallback(() => {
      const now = Date.now();
      
      if (active) {
        const lastTap = lastTapRef.current[path] || 0;
        
        if (now - lastTap < 500) {
          scrollToTop();
          haptic('double');
          lastTapRef.current[path] = 0;
        } else {
          lastTapRef.current[path] = now;
        }
        return;
      }
      
      // Save current scroll position before navigation
      if (['/', '/play', '/swipe', '/profile'].includes(pathname)) {
        const mainScroll = mainRef.current?.scrollTop || 0;
        scrollPositions.current[pathname] = mainScroll;
      }
      
      const lastTap = lastTapRef.current[path] || 0;
      
      if (now - lastTap < 500) {
        scrollPositions.current[path] = 0;
        
        if (path === "/play") {
          setNavAnimating(true);
          haptic('double');
          setTimeout(() => {
            navigate(`/play?view=modes&reset=${Date.now()}`);
            setNavAnimating(false);
            setTimeout(scrollToTop, 100);
          }, 200);
        } else {
          haptic('double');
          navigate(path);
          setTimeout(scrollToTop, 100);
        }
        
        lastTapRef.current[path] = 0;
        return;
      }
      
      lastTapRef.current[path] = now;
      setBounce(true);
      setTimeout(() => setBounce(false), 600);

      const go = () => {
        if (path === "/play") {
          setNavAnimating(true);
          haptic('heavy');
          setTimeout(() => {
            navigate(`/play?view=modes&reset=${Date.now()}`);
            setNavAnimating(false);
          }, 200);
          return;
        }

        haptic('medium');
        navigate(path);
      };

      const inQuestion = localStorage.getItem("qp_in_question") === "true";
      if (inQuestion) {
        setLeaveConfirm({ open: true, go });
        return;
      }

      go();
    }, [active, path, pathname, navigate, scrollToTop, haptic]);

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
    <div className="min-h-screen bg-base-bg text-base-text">
 
      <style>{`
        .hide-bottom-nav nav[role="navigation"] {
          display: none !important;
        }
        
        main.navigating {
          opacity: 0;
          transition: opacity 0.15s ease-out;
        }
        
        /* Ensure modals are not affected by main container transforms */
        body > div[class*="fixed"] {
          position: fixed !important;
          transform: none !important;
        }
        
        main {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-y: contain;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        /* Rubber band effect styles */
        .rubber-band-top {
          animation: rubberBandTop 0.3s ease-out;
        }
        
        .rubber-band-bottom {
          animation: rubberBandBottom 0.3s ease-out;
        }
        
        @keyframes rubberBandTop {
          0% { transform: translateY(0); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0); }
        }
        
        @keyframes rubberBandBottom {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        
        /* Smooth scroll shadows */
        main.scrolling-down::after {
          content: '';
          position: fixed;
          bottom: calc(5.5rem + env(safe-area-inset-bottom));
          left: 0;
          right: 0;
          height: 20px;
          background: linear-gradient(to top, rgba(11, 15, 26, 0.8), transparent);
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.3s ease;
          z-index: 10;
        }
        
        main.scrolling-up::before {
          content: '';
          position: fixed;
          top: env(safe-area-inset-top);
          left: 0;
          right: 0;
          height: 20px;
          background: linear-gradient(to bottom, rgba(11, 15, 26, 0.8), transparent);
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.3s ease;
          z-index: 10;
        }
      `}</style>

      <main
        ref={mainRef}
        className={`mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 ${isScrolling ? 'scrolling' : ''}`}
        style={{
          height: hideNav || document.body.classList.contains('hide-bottom-nav')
            ? "100dvh"
            : "calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",
          paddingTop: "calc(env(safe-area-inset-top) + 12px)",
          paddingBottom: hideNav || document.body.classList.contains('hide-bottom-nav') ? 0 : undefined,
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
          overscrollBehavior: "contain",
          scrollBehavior: "smooth"
        }}
      >
        <Outlet />
      </main>

      {/* Leave Confirmation Modal */}
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
                  haptic('medium');
                  setLeaveConfirm({ open: false, go: null });
                }}
                className="flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400"
              >
                Keep Playing! 🎮
              </button>
              <button
                onClick={() => {
                  haptic('heavy');
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

      {/* Bottom Navigation */}
      {!hideNav && (
        <nav role="navigation" aria-label="Bottom navigation" className="fixed inset-x-0 bottom-0 z-50">
          <div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg"
            style={{ height: "calc(5.5rem + env(safe-area-inset-bottom))" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2">
            <div className="relative">
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