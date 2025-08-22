// src/components/Play.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/* ------------------------------ Data ------------------------------ */
const CATEGORIES = [
  { label: "Art", slug: "art", color: "#7C3AED", available: true, icon: "🎨" },
  { label: "Science", slug: "science", color: "#10B981", available: true, icon: "🔬" },
  { label: "Sports", slug: "sports", color: "#EF4444", available: true, icon: "⚽" },
  { label: "Entertainment", slug: "entertainment", color: "#F59E0B", available: true, icon: "🎬" },
  { label: "Geography", slug: "geography", color: "#FACC15", available: true, icon: "🌍" },
  { label: "History", slug: "history", color: "#2563EB", available: true, icon: "📚" },
];

const CHARACTERS = {
  art: "TINA",
  science: "ALBERT", 
  sports: "BONZO",
  entertainment: "POP",
  geography: "TITO",
  history: "HECTOR"
};

const MOTIVATORS = {
  correct: ["Boom! Nailed it.", "Sharp shot!", "Clean hit.", "Right on."],
  wrong: ["Close one—next spin's yours.", "Toughie—bank it and roll again.", "Learning unlocks wins."]
};

const sliceAngle = 360 / CATEGORIES.length;

/* ----------------------------- Motion ----------------------------- */
const FULL_TURNS = 42;
const DURATION_MAIN = 3000;
const OVERSHOOT_DEG = 10;
const DURATION_SETTLE = 260;
const EASE_MAIN = "cubic-bezier(.15,.7,.1,1)";
const EASE_SETTLE = "cubic-bezier(.2,.7,.2,1)";

/* --------------------------- LocalStorage ------------------------- */
const LS_SOUND = "play_sound_on";
const LS_OWNED_CHARS = "owned_characters";

/* ------------------------------ Components ------------------------------ */

/** Bottom sheet component */
function Sheet({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] bg-black/60 flex items-end justify-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className="w-full max-w-md rounded-t-3xl bg-base-card border border-base-border p-5 pt-4
                   max-h-[85vh] overflow-y-auto
                   pb-[calc(16px+env(safe-area-inset-bottom))]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/15" />
        {children}
      </div>
    </div>
  );
}

/** Modes Grid (ss1) */
function ModesGrid({ onModeSelect }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Play Modes</h1>
          <p className="text-base-muted">Choose your quiz adventure</p>
        </header>

        <div className="grid gap-4">
          <button
            onClick={() => onModeSelect('classic')}
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 border border-white/10 text-left hover:scale-[1.02] transition-transform active:scale-[0.98]"
          >
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="text-xl font-bold mb-1">Classic</h3>
            <p className="text-sm opacity-90">Spin the wheel • 3 questions • Unlock characters</p>
          </button>

          <button
            disabled
            className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left opacity-50"
          >
            <div className="text-2xl mb-2">👥</div>
            <h3 className="text-xl font-bold mb-1">Party</h3>
            <p className="text-sm opacity-90">Coming soon</p>
          </button>
        </div>
      </div>
    </div>
  );
}

/** Result Interstitial (ss3) */
function ResultInterstitial({ category, onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: category.color }}
    >
      <h2 className="text-4xl font-bold mb-8">{category.label}</h2>
      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4">
        <span className="text-4xl">{category.icon}</span>
      </div>
    </div>
  );
}

/** Question Card */
function QuestionCard({ question, category, onAnswer, run, onContinue }) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [usedLifeline, setUsedLifeline] = useState(null);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [showAudience, setShowAudience] = useState(false);
  const timerRef = useRef(null);

  // Mock question data
  const mockQuestion = {
    text: `What is a key concept in ${category.label}?`,
    options: [
      "First option",
      "Second option", 
      "Third option",
      "Fourth option"
    ],
    correctIndex: 0
  };

  const currentQ = question || mockQuestion;

  useEffect(() => {
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowResult(false);
    setUsedLifeline(null);
    setHiddenOptions([]);
    setShowAudience(false);

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAnswer(null); // Time's up
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [question]);

  const handleAnswer = (optionIndex) => {
    if (showResult) return;
    
    clearInterval(timerRef.current);
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    
    const correct = optionIndex === currentQ.correctIndex;
    setTimeout(() => onAnswer(correct), 1500);
  };

  const use5050 = () => {
    if (run.lifelines.fifty || usedLifeline) return;
    
    const wrongIndices = currentQ.options
      .map((_, i) => i)
      .filter(i => i !== currentQ.correctIndex);
    
    const toHide = wrongIndices.slice(0, 2);
    setHiddenOptions(toHide);
    setUsedLifeline('fifty');
  };

  const useAudience = () => {
    if (run.lifelines.audience || usedLifeline) return;
    setShowAudience(true);
    setUsedLifeline('audience');
  };

  const isCorrect = selectedAnswer === currentQ.correctIndex;
  const motivator = showResult 
    ? MOTIVATORS[isCorrect ? 'correct' : 'wrong'][Math.floor(Math.random() * MOTIVATORS[isCorrect ? 'correct' : 'wrong'].length)]
    : null;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        {/* Header with timer */}
        <header className="text-center mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-base-muted">Question {run.qIndex + 1}/3</div>
            <div className={`text-lg font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>
              {timeLeft}s
            </div>
          </div>
          
          <div className="w-full bg-white/10 rounded-full h-1 mb-4">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${timeLeft <= 10 ? 'bg-red-400' : 'bg-blue-400'}`}
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            />
          </div>
        </header>

        {/* Question */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
              style={{ backgroundColor: category.color }}
            >
              {category.icon}
            </span>
            <span className="text-sm text-base-muted">{category.label}</span>
          </div>
          
          <h2 className="text-xl font-semibold leading-relaxed">{currentQ.text}</h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQ.options.map((option, index) => {
            if (hiddenOptions.includes(index)) return null;
            
            const selected = selectedAnswer === index;
            const correct = index === currentQ.correctIndex;
            
            let bgClass = "bg-white/5 border-white/10";
            if (showResult && selected) {
              bgClass = correct ? "bg-green-500/20 border-green-400" : "bg-red-500/20 border-red-400";
            } else if (showResult && correct) {
              bgClass = "bg-green-500/20 border-green-400";
            } else if (selected) {
              bgClass = "bg-white/15 border-white/30";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-xl border text-left transition-all ${bgClass} ${!showResult ? 'hover:bg-white/10' : ''}`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInUp 0.3s ease-out both'
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Lifelines */}
        {!showResult && (
          <div className="flex gap-3 mb-6">
            <button
              onClick={use5050}
              disabled={run.lifelines.fifty || usedLifeline}
              className={`flex-1 p-3 rounded-xl border text-sm font-medium transition ${
                run.lifelines.fifty || usedLifeline 
                  ? 'bg-white/5 border-white/10 text-white/40' 
                  : 'bg-white/10 border-white/20 hover:bg-white/15'
              }`}
            >
              50:50
            </button>
            <button
              onClick={useAudience}
              disabled={run.lifelines.audience || usedLifeline}
              className={`flex-1 p-3 rounded-xl border text-sm font-medium transition ${
                run.lifelines.audience || usedLifeline 
                  ? 'bg-white/5 border-white/10 text-white/40' 
                  : 'bg-white/10 border-white/20 hover:bg-white/15'
              }`}
            >
              👥 Ask
            </button>
          </div>
        )}

        {/* Audience Poll Overlay */}
        {showAudience && (
          <div className="mb-6 p-4 bg-white/10 rounded-xl border border-white/20">
            <h4 className="text-sm font-semibold mb-3">Audience says:</h4>
            <div className="space-y-2">
              {currentQ.options.map((option, index) => {
                if (hiddenOptions.includes(index)) return null;
                const percentage = index === currentQ.correctIndex ? 45 + Math.random() * 20 : Math.random() * 25;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-xs w-4">{String.fromCharCode(65 + index)}</span>
                    <div className="flex-1 bg-white/10 rounded h-2">
                      <div 
                        className="h-full bg-blue-400 rounded transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-xs w-8">{Math.round(percentage)}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Result & Continue */}
        {showResult && (
          <div className="text-center">
            <div className={`text-2xl mb-2 ${isCorrect ? '🎉' : '💭'}`}>
              {isCorrect ? '🎉' : '💭'}
            </div>
            <p className="text-lg font-semibold mb-4">{motivator}</p>
            <button
              onClick={onContinue}
              className="btn-primary w-full"
            >
              Continue
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

/** Character Picker */
function CharacterPicker({ onSelect }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        <header className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Perfect Round!</h1>
          <p className="text-base-muted">Choose a character to unlock</p>
        </header>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries(CHARACTERS).map(([category, name]) => {
            const cat = CATEGORIES.find(c => c.slug === category);
            return (
              <button
                key={category}
                onClick={() => onSelect(category)}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="font-bold">{name}</div>
                <div className="text-xs text-base-muted capitalize">{cat.label}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Bonus Interstitial */
function BonusInterstitial({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex flex-col items-center justify-center text-white">
      <h2 className="text-4xl font-bold mb-8">Bonus Question</h2>
      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
        <span className="text-4xl">⭐</span>
      </div>
    </div>
  );
}

/** Wheel Screen (ss2) */
function WheelClassic({ 
  run, 
  ownedCharacters, 
  onSpin, 
  onBack,
  spinning,
  angle,
  transition,
  result,
  showCallout,
  glowColor,
  soundOn,
  setSoundOn 
}) {
  const wheelSizeClass = "w-[320px] h-[320px] md:w-[380px] md:h-[380px]";

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Back to modes"
          >
            ←
          </button>

          <div className="text-center">
            <h1 className="text-2xl font-bold">Classic</h1>
            <p className="text-sm text-base-muted">Spin • Answer • Progress</p>
          </div>

          <button
            onClick={() => setSoundOn(!soundOn)}
            className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label={soundOn ? "Mute sound" : "Unmute sound"}
          >
            {soundOn ? "🔊" : "🔇"}
          </button>
        </header>

        {/* Character Shelf */}
        {ownedCharacters.length > 0 && (
          <div className="flex justify-center mb-4">
            <div className="flex gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
              {ownedCharacters.map(char => {
                const cat = CATEGORIES.find(c => c.slug === char);
                return (
                  <div key={char} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                    {cat?.icon}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Progress Arc */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-2">
            {[0, 1, 2].map(i => {
              let bgClass = "bg-white/10";
              if (run.progress[i] === true) {
                bgClass = i === 0 ? "bg-orange-400" : i === 1 ? "bg-yellow-400" : "bg-green-400";
              }
              
              return (
                <div 
                  key={i}
                  className={`w-16 h-2 rounded-full transition-all duration-500 ${bgClass}`}
                  style={{
                    boxShadow: run.progress[i] ? `0 0 8px ${i === 0 ? '#fb923c' : i === 1 ? '#facc15' : '#4ade80'}` : 'none'
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Wheel */}
        <section className="flex flex-col items-center">
          <div className={`relative ${wheelSizeClass} rounded-full select-none`}>
            {/* Glow effect */}
            {glowColor && (
              <div
                className="pointer-events-none absolute -inset-2 rounded-full"
                style={{ boxShadow: `0 0 0 6px ${glowColor}33, 0 0 30px 8px ${glowColor}44` }}
              />
            )}

            <div
              className="absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform"
              style={{ transform: `rotate(${angle}deg)`, transition }}
              aria-label="Category wheel"
              role="group"
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="block">
                {CATEGORIES.map((cat, i) => {
                  const start = i * sliceAngle;
                  const end = start + sliceAngle;
                  const largeArc = sliceAngle > 180 ? 1 : 0;
                  const sr = (Math.PI * start) / 180;
                  const er = (Math.PI * end) / 180;
                  const x1 = 50 + 50 * Math.cos(sr);
                  const y1 = 50 - 50 * Math.sin(sr);
                  const x2 = 50 + 50 * Math.cos(er);
                  const y2 = 50 - 50 * Math.sin(er);
                  
                  // Icon position
                  const iconAngle = start + sliceAngle / 2;
                  const iconRadius = 30;
                  const iconX = 50 + iconRadius * Math.cos((iconAngle * Math.PI) / 180);
                  const iconY = 50 - iconRadius * Math.sin((iconAngle * Math.PI) / 180);
                  
                  return (
                    <g key={cat.slug}>
                      <path
                        d={`M50,50 L${x1},${y1} A50,50 0 ${largeArc} 0 ${x2},${y2} Z`}
                        fill={cat.color}
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="0.6"
                      />
                      <text
                        x={iconX}
                        y={iconY}
                        fill="#ffffff"
                        fontSize="6"
                        dominantBaseline="middle"
                        textAnchor="middle"
                      >
                        {cat.icon}
                      </text>
                    </g>
                  );
                })}
                {/* hub */}
                <circle cx="50" cy="50" r="9" fill="rgba(0,0,0,0.55)" stroke="white" strokeOpacity="0.25" />
              </svg>

              {/* Center SPIN button */}
              <button
                onClick={onSpin}
                disabled={spinning}
                className={[
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "h-16 w-16 rounded-full grid place-items-center",
                  "bg-white text-black font-extrabold text-sm",
                  "transition active:scale-[0.98]",
                  spinning ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-200",
                ].join(" ")}
                aria-label="Spin the wheel"
              >
                SPIN
              </button>
            </div>

            {/* Pointer */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 z-20">
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M12 4 L20 20 L4 20 Z" fill="#ffffff" />
              </svg>
            </div>

            {/* Result callout */}
            {showCallout && result && (
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur">
                  <span className="mr-2">{result.cat.icon}</span>
                  {result.cat.label}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Stats */}
        <div className="mt-8 text-center">
          <div className="text-sm text-base-muted">
            Questions: {run.progress.filter(Boolean).length}/3 • 
            Coins this run: +{run.coinsEarned}
          </div>
        </div>
      </div>
    </div>
  );
}

function SoundIcon({ muted = false, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 9h4l5-4v14l-5-4H3z" fill="currentColor" />
      {!muted && (
        <>
          <path d="M16 8c1.5 1.5 1.5 6 0 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M19 6c3 3 3 10 0 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </>
      )}
      {muted && <line x1="3" y1="21" x2="21" y2="3" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />}
    </svg>
  );
}

/* ------------------------------ Main Play Component ------------------------------ */
export default function Play() {
  const navigate = useNavigate();
  const location = useLocation();

  // Game state
  const [gameState, setGameState] = useState('modes'); // modes, wheel, interstitial, question, characterPicker, bonusInterstitial, bonusQuestion
  const [run, setRun] = useState({
    id: Date.now(),
    qIndex: 0,
    progress: [false, false, false],
    lifelines: { fifty: false, audience: false },
    coinsEarned: 0
  });
  const [lastResult, setLastResult] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [ownedCharacters, setOwnedCharacters] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(LS_OWNED_CHARS) || '[]');
    } catch {
      return [];
    }
  });

  // Wheel state
  const [angle, setAngle] = useState(0);
  const [transition, setTransition] = useState("none");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showCallout, setShowCallout] = useState(false);
  const [glowColor, setGlowColor] = useState(null);

  // Sound
  const [soundOn, setSoundOn] = useState(() => localStorage.getItem(LS_SOUND) !== "0");
  const spinAudioRef = useRef(null);

  useEffect(() => localStorage.setItem(LS_SOUND, soundOn ? "1" : "0"), [soundOn]);
  useEffect(() => {
    try {
      localStorage.setItem(LS_OWNED_CHARS, JSON.stringify(ownedCharacters));
    } catch {}
  }, [ownedCharacters]);

  useEffect(() => {
    const audio = new Audio("/sounds/spin.mp3");
    audio.loop = true;
    audio.volume = 0.7;
    spinAudioRef.current = audio;
    return () => {
      try {
        audio.pause();
        audio.src = "";
      } catch {}
    };
  }, []);

  const prefersReduced = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false),
    []
  );

  const tRef = useRef({ a: 0, b: 0, c: 0 });
  useEffect(() => {
    return () => {
      try {
        spinAudioRef.current?.pause();
      } catch {}
      Object.values(tRef.current).forEach((id) => id && clearTimeout(id));
    };
  }, []);

  // Wheel helpers
  const mod360 = (deg) => ((deg % 360) + 360) % 360;
  const normalizeDeg = (deg) => mod360(deg);

  const startSpinSound = () => {
    if (!soundOn) return;
    try {
      spinAudioRef.current.currentTime = 0;
      spinAudioRef.current.play();
    } catch {}
  };

  const stopSpinSound = () => {
    try {
      spinAudioRef.current?.pause();
      spinAudioRef.current.currentTime = 0;
    } catch {}
  };

  const spin = () => {
    if (spinning) return;
    setResult(null);
    setShowCallout(false);
    setGlowColor(null);
    setSpinning(true);
    startSpinSound();

    // Choose slice
    const index = Math.floor(Math.random() * CATEGORIES.length);
    const cat = CATEGORIES[index];

    // Calculate rotation
    const current = mod360(angle);
    const pointerAngle = 180;
    const centerOfSlice = index * sliceAngle + sliceAngle / 2;
    let deltaBase = normalizeDeg(centerOfSlice - current - pointerAngle);
    const jitter = (Math.random() - 0.5) * (sliceAngle * 0.5);
    const delta = FULL_TURNS * 360 + deltaBase + jitter;

    // Stage 1: main spin with overshoot
    const overshootTarget = angle + delta + OVERSHOOT_DEG;
    setTransition(`transform ${prefersReduced ? 800 : DURATION_MAIN}ms ${EASE_MAIN}`);
    setAngle(overshootTarget);

    try {
      if (navigator.vibrate && !prefersReduced) navigator.vibrate([10, 40, 10]);
    } catch {}

    // Stage 2: settle back
    tRef.current.a = setTimeout(() => {
      setTransition(`transform ${prefersReduced ? 160 : DURATION_SETTLE}ms ${EASE_SETTLE}`);
      setAngle((prev) => prev - OVERSHOOT_DEG);
    }, prefersReduced ? 800 : DURATION_MAIN);

    // Stage 3: reveal result
    tRef.current.b = setTimeout(() => {
      stopSpinSound();
      setSpinning(false);
      setResult({ cat, index });
      setLastResult({ categorySlug: cat.slug, color: cat.color, icon: cat.icon });
      setGlowColor(cat.color);
      setShowCallout(true);
      
      // Auto-advance to interstitial
      setTimeout(() => {
        setShowCallout(false);
        setGameState('interstitial');
      }, 1000);
      
      tRef.current.c = setTimeout(() => setGlowColor(null), 700);
    }, (prefersReduced ? 800 : DURATION_MAIN) + (prefersReduced ? 160 : DURATION_SETTLE) + 40);
  };

  const handleAnswer = (correct) => {
    // Update run progress
    const newProgress = [...run.progress];
    newProgress[run.qIndex] = correct;
    
    const newRun = {
      ...run,
      progress: newProgress,
      coinsEarned: run.coinsEarned + (correct ? 5 : 0)
    };

    setRun(newRun);

    // Check if run is complete
    if (run.qIndex >= 2) {
      // Run complete
      const perfectRun = newProgress.every(Boolean);
      if (perfectRun) {
        setGameState('characterPicker');
      } else {
        // Return to modes
        setTimeout(() => setGameState('modes'), 1500);
      }
    } else {
      // Continue to next question
      setRun(prev => ({ ...prev, qIndex: prev.qIndex + 1 }));
      setTimeout(() => setGameState('wheel'), 1500);
    }
  };

  const handleCharacterSelect = (category) => {
    setSelectedCharacter(category);
    setGameState('bonusInterstitial');
  };

  const handleBonusAnswer = (correct) => {
    if (correct && selectedCharacter) {
      // Unlock character
      setOwnedCharacters(prev => [...new Set([...prev, selectedCharacter])]);
    }
    
    // Return to modes after delay
    setTimeout(() => {
      setGameState('modes');
      resetRun();
    }, 2000);
  };

  const resetRun = () => {
    setRun({
      id: Date.now(),
      qIndex: 0,
      progress: [false, false, false],
      lifelines: { fifty: false, audience: false },
      coinsEarned: 0
    });
    setSelectedCharacter(null);
    setLastResult(null);
  };

  const handleModeSelect = (mode) => {
    if (mode === 'classic') {
      resetRun();
      setGameState('wheel');
    }
  };

  const handleBack = () => {
    setGameState('modes');
    resetRun();
  };

  const continueFromQuestion = () => {
    setGameState('wheel');
  };

  // Render current screen
  switch (gameState) {
    case 'modes':
      return <ModesGrid onModeSelect={handleModeSelect} />;
      
    case 'wheel':
      return (
        <WheelClassic 
          run={run}
          ownedCharacters={ownedCharacters}
          onSpin={spin}
          onBack={handleBack}
          spinning={spinning}
          angle={angle}
          transition={transition}
          result={result}
          showCallout={showCallout}
          glowColor={glowColor}
          soundOn={soundOn}
          setSoundOn={setSoundOn}
        />
      );
      
    case 'interstitial':
      return (
        <ResultInterstitial 
          category={lastResult ? CATEGORIES.find(c => c.slug === lastResult.categorySlug) : CATEGORIES[0]}
          onComplete={() => setGameState('question')}
        />
      );
      
    case 'question':
      return (
        <QuestionCard
          question={null} // Will use mock data
          category={lastResult ? CATEGORIES.find(c => c.slug === lastResult.categorySlug) : CATEGORIES[0]}
          onAnswer={handleAnswer}
          run={run}
          onContinue={continueFromQuestion}
        />
      );
      
    case 'characterPicker':
      return <CharacterPicker onSelect={handleCharacterSelect} />;
      
    case 'bonusInterstitial':
      return <BonusInterstitial onComplete={() => setGameState('bonusQuestion')} />;
      
    case 'bonusQuestion':
      return (
        <QuestionCard
          question={null} // Will use mock data
          category={CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]} // Random category for bonus
          onAnswer={handleBonusAnswer}
          run={{ ...run, qIndex: 0, lifelines: { fifty: true, audience: true } }} // No lifelines for bonus
          onContinue={() => {
            setTimeout(() => {
              setGameState('modes');
              resetRun();
            }, 1000);
          }}
        />
      );
      
    default:
      return <ModesGrid onModeSelect={handleModeSelect} />;
  }
}