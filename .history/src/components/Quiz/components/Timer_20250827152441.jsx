// src/components/Quiz/components/Timer.jsx
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

const Timer = ({ 
  remaining, 
  setRemaining,
  paused, 
  onTimeUp, 
  timerConfig,
  className = "" 
}) => {
  const [isWarning, setIsWarning] = useState(false);
  const [isCritical, setIsCritical] = useState(false);
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [timerCharacter, setTimerCharacter] = useState("⏰");
  
  const [playTick, tickControls] = useSound("/sounds/tick.mp3", { 
    volume: 0.6, 
    interrupt: true 
  });
  const [playWarning] = useSound("/sounds/warning.mp3", { 
    volume: 0.8, 
    interrupt: true 
  });
  const [playEncouragement] = useSound("/sounds/cheer.mp3", { 
    volume: 0.7, 
    interrupt: true 
  });
  
  const tickInterval = useRef(null);
  const hasPlayedWarningSound = useRef(false);
  const hasPlayedCriticalSound = useRef(false);
  const encouragementShown = useRef(false);

  // Format time display with fun styling
  const formatTime = (totalSeconds = 0) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Character states based on time remaining
  const updateTimerCharacter = (timeLeft) => {
    if (timeLeft > 30) setTimerCharacter("⏰");
    else if (timeLeft > 15) setTimerCharacter("⏱️");
    else if (timeLeft > 5) setTimerCharacter("🕰️");
    else setTimerCharacter("⚡");
  };

  // Encouragement messages for different time thresholds
  const getEncouragementMessage = () => {
    if (remaining > 30) return "You're doing great! Take your time!";
    if (remaining > 15) return "Keep going! You've got this!";
    if (remaining > 5) return "Almost there! Stay focused!";
    return "Quick! You can do it!";
  };

  // Handle timer tick with enhanced feedback
  useEffect(() => {
    if (timerConfig?.type === "off") return;
    if (paused) {
      clearInterval(tickInterval.current);
      try { 
        tickControls.stop(); 
      } catch {}
      return;
    }

    clearInterval(tickInterval.current);
    
    tickInterval.current = setInterval(() => {
      setRemaining((current) => {
        const next = current - 1;
        
        updateTimerCharacter(next);
        
        // Show encouragement at halfway point
        if (timerConfig?.seconds && next === Math.floor(timerConfig.seconds / 2) && !encouragementShown.current) {
          setShowEncouragement(true);
          playEncouragement();
          encouragementShown.current = true;
          setTimeout(() => setShowEncouragement(false), 2000);
        }
        
        // Warning state at 15 seconds
        if (next === 15 && !hasPlayedWarningSound.current) {
          playWarning();
          hasPlayedWarningSound.current = true;
          setIsWarning(true);
        }
        
        // Critical state at 5 seconds
        if (next === 5 && !hasPlayedCriticalSound.current) {
          try { 
            tickControls.stop(); 
          } catch {}
          playTick();
          hasPlayedCriticalSound.current = true;
          setIsCritical(true);
        }
        
        // Tick sound for last 5 seconds
        if (next <= 5 && next > 0) {
          playTick();
        }
        
        // Time's up
        if (next <= 0) {
          clearInterval(tickInterval.current);
          try { 
            tickControls.stop(); 
          } catch {}
          if (onTimeUp) onTimeUp();
          return 0;
        }
        
        return next;
      });
    }, 1000);

    return () => {
      clearInterval(tickInterval.current);
      try { 
        tickControls.stop(); 
      } catch {}
    };
  }, [paused, timerConfig?.type, timerConfig?.seconds, setRemaining, onTimeUp, playTick, tickControls, playWarning, playEncouragement]);

  // Update warning states
  useEffect(() => {
    setIsWarning(remaining <= 15 && remaining > 5);
    setIsCritical(remaining <= 5 && remaining > 0);
  }, [remaining]);

  // Reset flags when timer resets
  useEffect(() => {
    if (remaining > 15) {
      hasPlayedWarningSound.current = false;
      hasPlayedCriticalSound.current = false;
      encouragementShown.current = false;
      setIsWarning(false);
      setIsCritical(false);
    }
  }, [remaining]);

  // Don't render if timer is off
  if (timerConfig?.type === "off") {
    return null;
  }

  // Determine timer display style with kid-friendly themes
  const getTimerClassName = () => {
    let baseClass = "relative px-4 py-2 rounded-2xl border-2 text-sm font-bold transition-all duration-300 ";
    
    if (isCritical) {
      baseClass += "border-red-400 text-red-100 bg-gradient-to-r from-red-500/40 to-pink-500/40 animate-pulse shadow-lg shadow-red-500/30";
    } else if (isWarning) {
      baseClass += "border-yellow-400 text-yellow-100 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 shadow-lg shadow-yellow-500/20";
    } else {
      baseClass += "border-blue-400/60 text-blue-100 bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg shadow-blue-500/10";
    }
    
    return baseClass + " " + className;
  };

  // Progress bar percentage
  const progressPercentage = timerConfig?.seconds 
    ? (remaining / timerConfig.seconds) * 100 
    : 0;

  // Get progress bar color
  const getProgressBarColor = () => {
    if (isCritical) return "from-red-400 to-red-600";
    if (isWarning) return "from-yellow-400 to-orange-500";
    return "from-blue-400 to-purple-500";
  };

  return (
    <div className="relative timer-container">
      {/* Encouragement bubble */}
      {showEncouragement && (
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {getEncouragementMessage()}
          </div>
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-400 mx-auto"></div>
        </div>
      )}

      {/* Main timer display with character */}
      <div className={getTimerClassName()}>
        <div className="flex items-center gap-2">
          <span className={`text-lg ${isCritical ? 'animate-spin' : isWarning ? 'animate-bounce' : ''}`}>
            {timerCharacter}
          </span>
          <span className="font-mono tabular-nums tracking-wider">
            {formatTime(remaining)}
          </span>
        </div>
        
        {/* Enhanced progress bar with segments */}
        {timerConfig?.seconds && (
          <div className="mt-2 relative">
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${getProgressBarColor()} transition-all duration-1000 rounded-full relative`}
                style={{ width: `${progressPercentage}%` }}
              >
                {/* Shimmering effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            {/* Time segments indicator */}
            <div className="absolute top-0 left-0 right-0 h-1.5 flex">
              {Array.from({ length: 4 }).map((_, i) => (
                <div 
                  key={i}
                  className="flex-1 border-r border-white/30 last:border-r-0"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating time indicators */}
      {isWarning && !isCritical && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-yellow-400 animate-pulse font-bold">
          Hurry up!
        </div>
      )}
      
      {isCritical && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-red-400 animate-bounce font-bold">
          Time's running out!
        </div>
      )}

      {/* Full-screen visual effects for critical moments */}
      {isCritical && (
        <div 
          className="fixed inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at center, 
              transparent 70%, 
              rgba(239, 68, 68, ${0.15 * (6 - remaining)}) 100%)`
          }}
        />
      )}
      
      {/* Pulsing border effect for warning */}
      {isWarning && (
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl animate-pulse -z-10"></div>
      )}

      {/* Fun animated elements around timer */}
      {remaining > 0 && !paused && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating sparkles for normal state */}
          {!isWarning && !isCritical && (
            <>
              <div className="absolute -top-2 -left-2 text-xs animate-pulse opacity-60">✨</div>
              <div className="absolute -bottom-2 -right-2 text-xs animate-pulse opacity-60" style={{animationDelay: '0.5s'}}>⭐</div>
            </>
          )}
          
          {/* Warning indicators */}
          {isWarning && !isCritical && (
            <>
              <div className="absolute -top-1 -left-1 text-xs animate-bounce text-yellow-400">⚠️</div>
              <div className="absolute -bottom-1 -right-1 text-xs animate-bounce text-yellow-400" style={{animationDelay: '0.3s'}}>⏰</div>
            </>
          )}
          
          {/* Critical indicators */}
          {isCritical && (
            <>
              <div className="absolute -top-1 -left-1 text-xs animate-spin text-red-400">🚨</div>
              <div className="absolute -bottom-1 -right-1 text-xs animate-spin text-red-400" style={{animationDelay: '0.2s'}}>⚡</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

// Kid-friendly simple timer for other use cases
export const SimpleTimer = ({ seconds, className = "", showCharacter = true }) => {
  const formatTime = (totalSeconds = 0) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const getCharacter = () => {
    if (seconds > 300) return "😊"; // > 5 min
    if (seconds > 60) return "🙂"; // > 1 min  
    if (seconds > 30) return "😐"; // > 30 sec
    if (seconds > 10) return "😟"; // > 10 sec
    return "😰"; // <= 10 sec
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-400/30 bg-gradient-to-r from-slate-600/20 to-slate-700/20 text-sm ${className}`}>
      {showCharacter && (
        <span className="text-base">{getCharacter()}</span>
      )}
      <span className="font-mono tabular-nums font-bold text-white">
        {formatTime(seconds)}
      </span>
    </div>
  );
};

export default Timer;