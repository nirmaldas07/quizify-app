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
  const [playTick, tickControls] = useSound("/sounds/tick.mp3", { 
    volume: 0.8, 
    interrupt: true 
  });
  const tickInterval = useRef(null);
  const hasPlayedWarningSound = useRef(false);

  // Format time display
  const formatTime = (totalSeconds = 0) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Handle timer tick
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
        
        // Warning state at 10 seconds
        if (next === 10 && !hasPlayedWarningSound.current) {
          try { 
            tickControls.stop(); 
          } catch {}
          playTick();
          hasPlayedWarningSound.current = true;
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
  }, [paused, timerConfig?.type, setRemaining, onTimeUp, playTick, tickControls]);

  // Update warning state
  useEffect(() => {
    setIsWarning(remaining <= 10 && remaining > 0);
  }, [remaining]);

  // Reset warning sound flag when timer resets
  useEffect(() => {
    if (remaining > 10) {
      hasPlayedWarningSound.current = false;
    }
  }, [remaining]);

  // Don't render if timer is off
  if (timerConfig?.type === "off") {
    return null;
  }

  // Determine timer display style
  const getTimerClassName = () => {
    let baseClass = "px-2 py-1 rounded-lg border text-xs transition-all duration-300 ";
    
    if (isWarning) {
      baseClass += "border-red-500 text-red-400 bg-red-500/10 animate-pulse";
    } else if (remaining <= 30) {
      baseClass += "border-amber-500 text-amber-400 bg-amber-500/10";
    } else {
      baseClass += "border-base-border bg-white/5";
    }
    
    return baseClass + " " + className;
  };

  // Progress bar percentage
  const progressPercentage = timerConfig?.seconds 
    ? (remaining / timerConfig.seconds) * 100 
    : 0;

  return (
    <div className="timer-container">
      {/* Main timer display */}
      <div className={getTimerClassName()}>
        <div className="flex items-center gap-1">
          <span className="timer-icon">⏱</span>
          <span className="font-mono tabular-nums">
            {formatTime(remaining)}
          </span>
        </div>
        
        {/* Mini progress bar under timer */}
        {timerConfig?.seconds && (
          <div className="mt-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ${
                isWarning ? "bg-red-500" : 
                remaining <= 30 ? "bg-amber-500" : 
                "bg-brand-blue"
              }`}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        )}
      </div>

      {/* Warning message */}
      {isWarning && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 
                        text-[10px] text-red-400 whitespace-nowrap animate-fadeIn">
          Hurry up!
        </div>
      )}

      {/* Visual warning overlay for last 5 seconds */}
      {remaining <= 5 && remaining > 0 && (
        <div 
          className="fixed inset-0 pointer-events-none z-50"
          style={{
            background: `radial-gradient(circle at center, transparent 60%, rgba(239, 68, 68, ${0.1 * (6 - remaining)}) 100%)`
          }}
        />
      )}
    </div>
  );
};

// Standalone timer display for other use cases
export const SimpleTimer = ({ seconds, className = "" }) => {
  const formatTime = (totalSeconds = 0) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className={`px-2 py-1 rounded-lg border border-base-border bg-white/5 text-xs ${className}`}>
      <span className="font-mono tabular-nums">{formatTime(seconds)}</span>
    </div>
  );
};

export default Timer;