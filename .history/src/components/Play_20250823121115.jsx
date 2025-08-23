import { useEffect, useMemo, useRef, useState } from "react";
import Papa from "papaparse";
import Confetti from "react-confetti";
import { useLocation, useNavigate } from "react-router-dom";


const PRIMARY_CATS = [
  { name: "General Knowledge", questions: 50, icon: "🧠", color: "#7C3AED" },
  { name: "Artificial Intelligence", questions: 28, icon: "🤖", color: "#10B981" },
  { name: "Fun facts", questions: 30, icon: "🎉", color: "#EF4444" },
  { name: "Science", questions: 45, icon: "🧪", color: "#F59E0B" },
  { name: "History", questions: 42, icon: "🏺", color: "#2563EB" },
  { name: "Geography", questions: 38, icon: "🗺️", color: "#FACC15" }
];

const WHEEL_CATEGORIES = PRIMARY_CATS.slice(0, 6);
const sliceAngle = 360 / WHEEL_CATEGORIES.length;

const CHARACTERS = {
  "general-knowledge": "TINA",
  "artificial-intelligence": "ALBERT", 
  "fun-facts": "BONZO",
  "science": "POP",
  "history": "TITO",
  "geography": "HECTOR"
};

const STORAGE_KEYS = {
  COINS: "qp_coins",
  XP: "qp_xp",
  LEVEL: "qp_level",
  OWNED_CHARACTERS: "owned_characters",
  SOUND: "play_sound_on"
};

const SPIN_CONFIG = {
  FULL_TURNS: 6,
  DURATION: 2800,
  OVERSHOOT: 12,
  SETTLE_DURATION: 350
};

const MOTIVATORS = {
  correct: ["Boom! Nailed it.", "Sharp shot!", "Clean hit.", "Right on.", "Brilliant!", "Amazing!"],
  wrong: ["Close one—next spin's yours.", "Toughie—bank it and roll again.", "Learning unlocks wins.", "Almost there!", "Good try!"]
};

const safeStorage = {
  get: (key, fallback = null) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }
};

const toSlug = (name) => name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
const mod360 = (deg) => ((deg % 360) + 360) % 360;
const vibrate = (pattern) => {
  try {
    if (navigator.vibrate) navigator.vibrate(pattern);
  } catch {}
};

const playSound = (src, volume = 0.7) => {
  try {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
  } catch {}
};

function ModesGrid({ onModeSelect, onNavigateHome }) {
  return (
    <div className="min-h-screen bg-base-bg text-base-text">
      <div className="mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-8">
        <header className="flex items-center mb-8">
          <button 
            onClick={onNavigateHome}
            className="h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition"
          >
            ←
          </button>
          <h1 className="flex-1 text-center text-xl font-bold mb-12">Choose a quiz mode</h1>
        </header>

        <div className="space-y-8">
          <button
            onClick={() => onModeSelect('classic')}
            className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                {WHEEL_CATEGORIES.map((cat, i) => {
                  const start = i * sliceAngle;
                  const end = start + sliceAngle;
                  const largeArc = sliceAngle > 180 ? 1 : 0;
                  const sr = (Math.PI * start) / 180;
                  const er = (Math.PI * end) / 180;
                  const x1 = 50 + 40 * Math.cos(sr);
                  const y1 = 50 - 40 * Math.sin(sr);
                  const x2 = 50 + 40 * Math.cos(er);
                  const y2 = 50 - 40 * Math.sin(er);
                  return (
                    <path
                      key={i}
                      d={`M50,50 L${x1},${y1} A40,40 0 ${largeArc} 0 ${x2},${y2} Z`}
                      fill={cat.color}
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  );
                })}
                <circle cx="50" cy="50" r="8" fill="white"/>
              </svg>
            </div>
            
            <div className="absolute top-4 left-8 text-3xl opacity-60">🏆</div>
            <div className="absolute top-12 right-16 text-xl opacity-40">⭐</div>
            <div className="absolute bottom-6 left-6 text-2xl opacity-50">🎲</div>
            <div className="absolute bottom-4 right-12 text-3xl opacity-60">🍪</div>
            <div className="absolute top-1/2 left-4 text-lg opacity-40">🥨</div>
            
            <h2 className="text-5xl font-black text-white mb-10 relative z-10 "style={{transform: 'translateX(-20px)'}}>CLASSIC</h2>
          </button>

          <div className="grid grid-cols-2 gap-4">
            <button
              disabled
              className="aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left opacity-60"
            >
              <div className="text-2xl mb-2">💀</div>
              <h4 className="text-lg font-black text-white">SURVIVAL</h4>
            </button>

            <button
              disabled
              className="aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60"
            >
              <div className="text-2xl mb-2">💰</div>
              <h4 className="text-lg font-black text-white">TREASURE MINE</h4>
            </button>

            <button
              disabled
              className="aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60"
            >
              <div className="text-2xl mb-2">⚔️</div>
              <h4 className="text-lg font-black text-white">SURVIVAL ARENA</h4>
            </button>

            <button
              disabled
              className="aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60"
            >
              <div className="text-2xl mb-2">📱</div>
              <h4 className="text-lg font-black text-white">TRIVIA VIDEO</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WheelClassic({ 
  run, 
  coins, 
  xp, 
  level,
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
  setSoundOn,
  showSparkle
}) {
  const nextThreshold = 100 * level * (level - 1);

  return (
    <div className="min-h-screen bg-base-bg text-base-text">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        <header className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]"
          >
            ←
          </button>

          <div className="flex items-center gap-3">
            <button className="px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]">
              <div className="text-[11px]">Lvl {level} • {xp}/{nextThreshold}</div>
              <div className="mt-1 h-1 w-full bg-white/10 rounded">
                <div className="h-1 bg-brand-blue rounded" style={{ width: `${Math.min(xp / nextThreshold, 1) * 100}%` }} />
              </div>
            </button>
            <button className="px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]">🪙 {coins}</button>
          </div>

          <button
            onClick={() => setSoundOn(!soundOn)}
            className="h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]"
          >
            <span className="text-lg">{soundOn ? "🔊" : "🔇"}</span>
          </button>
        </header>

        {ownedCharacters.length > 0 && (
          <div className="flex justify-center mb-6">
            <div className="flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border">
              {ownedCharacters.map(charSlug => {
                const cat = WHEEL_CATEGORIES.find(c => toSlug(c.name) === charSlug);
                const charName = CHARACTERS[charSlug];
                return (
                  <div key={charSlug} className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                      <span className="text-sm">{cat?.icon}</span>
                    </div>
                    <span className="text-[10px] text-base-muted mt-1">{charName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

{/* Run progress — straight, 3 segments */}
<div className="flex justify-center mb-6">
  <div className="w-80 max-w-full">
    <div className="relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15">
      {[0,1,2].map((i) => {
        const filledColors = ["#FF9800", "#FFC107", "#4CAF50"]; // same palette as before
        const filled = run.progress[i];
        const isCurrent = i === run.qIndex; // highlight the step you're on
        return (
          <div
            key={i}
            className={`relative h-full transition-all`}
            style={{
              backgroundColor: filled ? filledColors[i] : "rgba(255,255,255,0.15)",
              opacity: filled ? 1 : 0.6,
              boxShadow: isCurrent ? "0 0 0 1px rgba(255,255,255,0.35) inset" : "none",
            }}
          >
            {showSparkle === i && (
              <span className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white animate-ping" />
            )}
          </div>
        );
      })}
    </div>

    <div className="mt-2 flex justify-between text-[11px] text-base-muted">
      <span>Q1</span><span>Q2</span><span>Q3</span>
    </div>
  </div>
</div>

        <section className="flex flex-col items-center mt-20 mb-8">
          <div className="relative w-96 h-96 rounded-full select-none">
            {glowColor && (
              <div
                className="pointer-events-none absolute -inset-4 rounded-full"
                style={{ boxShadow: `0 0 0 8px ${glowColor}40, 0 0 40px 12px ${glowColor}60` }}
              />
            )}

        {/* Rotating wheel layer — NO BUTTON INSIDE */}
        <div
          className="absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card"
          style={{ transform: `rotate(${angle}deg)`, transition }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="block">
            {WHEEL_CATEGORIES.map((cat, i) => {
              const start = i * sliceAngle;
              const end = start + sliceAngle;
              const largeArc = sliceAngle > 180 ? 1 : 0;
              const sr = (Math.PI * start) / 180;
              const er = (Math.PI * end) / 180;
              const x1 = 50 + 45 * Math.cos(sr);
              const y1 = 50 - 45 * Math.sin(sr);
              const x2 = 50 + 45 * Math.cos(er);
              const y2 = 50 - 45 * Math.sin(er);

              const iconAngle = start + sliceAngle / 2;
              const iconRadius = 28;
              const iconX = 50 + iconRadius * Math.cos((iconAngle * Math.PI) / 180);
              const iconY = 50 - iconRadius * Math.sin((iconAngle * Math.PI) / 180);

              return (
                <g key={i}>
                  <path
                    d={`M50,50 L${x1},${y1} A45,45 0 ${largeArc} 0 ${x2},${y2} Z`}
                    fill={cat.color}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="0.5"
                  />
                  <text
                    x={iconX}
                    y={iconY}
                    fill="white"
                    fontSize="8"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="font-bold"
                  >
                    {cat.icon}
                  </text>
                </g>
              );
            })}
            <circle cx="50" cy="50" r="12" fill="white" stroke="#ddd" strokeWidth="1" />
          </svg>
        </div>

        {/* Center SPIN button — sibling so it DOES NOT rotate */}
        <button
          onClick={onSpin}
          disabled={spinning}
          className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${
                        spinning ? "opacity-60 cursor-not-allowed scale-95" : "hover:scale-105 active:scale-95"
                      }`}
        >
          SPIN
        </button>


            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20">
              <div className="w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1">
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"/>
              </div>
            </div>

            {showCallout && result && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-16 z-30">
                <div className="px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold">
                  <span className="mr-2">{result.cat.icon}</span>
                  {result.cat.name}
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="text-center">
          <button 
            disabled
            className="text-base-muted underline opacity-60 cursor-not-allowed text-sm"
          >
            Party Spin (pass & play)
          </button>
        </div>
      </div>
    </div>
  );
}

function ResultInterstitial({ category, onComplete, isBonus = false }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    vibrate([50]);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (isBonus) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white">
        <h2 className="text-5xl font-black mb-8">Bonus Question</h2>
        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-6xl">⭐</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-bg text-white flex items-center justify-center">
      {/* Circle same size as the wheel */}
      <div
        className="relative w-96 h-96 rounded-full flex items-center justify-center"
        style={{ backgroundColor: category.color }}
      >
        {/* subtle bubbles (optional) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full" />
          <div className="absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full" />
        </div>

        <div className="relative z-10 text-center">
          <div className="text-4xl font-black mb-2">{category.name}</div>
          <div className="w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto">
            <span className="text-4xl">{category.icon}</span>
          </div>
        </div>
      </div>
    </div>
  );

}

function QuestionCard({ 
  question, 
  category, 
  onAnswer, 
  run, 
  timeLeft, 
  usedLifelines, 
  onUseLifeline,
  eliminatedOptions,
  audienceData,
  onBack
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [confirmQuit, setConfirmQuit] = useState(false);
  const handleAnswer = (optionIndex) => {
    if (showResult) return;
    
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    
    const correct = optionIndex === question.correctIndex;
    
    vibrate(correct ? [50, 30, 50] : [200]);
    if (correct) {
      playSound("/sounds/correct.mp3", 0.7);
    } else {
      playSound("/sounds/wrong.mp3", 0.7);
    }
    
    setTimeout(() => {
      onAnswer(correct, null);
    }, 1500);
  };

  const isCorrect = selectedAnswer === question.correctIndex;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="relative px-5 pt-16 pb-8">
        <div className="mb-4">
          <button
            onClick={() => setConfirmQuit(true)}
            className="h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition"
          >
            ←
          </button>
        </div>

        <div className="text-center mb-6">
          <div className={`text-4xl font-black mb-2 ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
            {timeLeft}
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                timeLeft <= 10 ? 'bg-red-400' : 'bg-blue-400'
              }`}
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
            style={{ backgroundColor: category.color }}
          >
            {category.icon}
          </div>
          <div>
            <div className="text-lg font-bold">{category.name}</div>
            <div className="text-sm text-gray-400">Question {run.qIndex + 1}/3</div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6 leading-relaxed">
          {question.prompt}
        </h2>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            const isEliminated = eliminatedOptions.includes(index);
            const selected = selectedAnswer === index;
            const correct = index === question.correctIndex;
            
            let bgClass = "bg-white/10 border-white/20";
            let opacity = "opacity-100";
            
            if (isEliminated) {
              opacity = "opacity-30";
            } else if (showResult && selected) {
              bgClass = correct 
                ? "bg-green-500/30 border-green-400" 
                : "bg-red-500/30 border-red-400";
            } else if (showResult && correct) {
              bgClass = "bg-green-500/30 border-green-400";
            } else if (selected) {
              bgClass = "bg-white/20 border-white/40";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult || isEliminated}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${bgClass} ${opacity} ${
                  !showResult && !isEliminated ? 'hover:bg-white/15 active:scale-98' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="font-medium flex-1">{option}</span>
                  {audienceData && (
                    <span className="text-xs text-base-muted">{Math.round(audienceData[index])}%</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {!showResult && (
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => onUseLifeline('fifty')}
              disabled={usedLifelines.fifty}
              className={`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${
                usedLifelines.fifty 
                  ? 'bg-gray-700 border-gray-600 text-gray-400' 
                  : 'bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95'
              }`}
            >
              50:50
            </button>
            <button
              onClick={() => onUseLifeline('audience')}
              disabled={usedLifelines.audience}
              className={`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${
                usedLifelines.audience 
                  ? 'bg-gray-700 border-gray-600 text-gray-400' 
                  : 'bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95'
              }`}
            >
              👥 Ask
            </button>
          </div>
        )}

    {showResult && (
      <div className="relative text-center">
        {/* Confetti behind, only on correct */}
        {isCorrect && (
          <div className="absolute inset-0 pointer-events-none">
        <Confetti
          recycle={false}
          numberOfPieces={160}
          gravity={0.9}
          tweenDuration={5200}
          confettiSource={{
            x: 0,
            y: 5, // px from the top of the viewport — increase to move the burst lower
            w: (typeof window !== "undefined" ? window.innerWidth : 320),
            h: 16
          }}
        />
          </div>
        )}

        {/* Message ABOVE the confetti */}
        <p className="relative z-10 text-2xl font-bold mb-6">
          {isCorrect ? 'Correct! +5 coins & +1 XP' : 'Better luck next time!'}
        </p>

        {/* Keep the continue CTA above confetti as well */}
        <button
          onClick={() => onAnswer(isCorrect, null, true)}
          className="relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95"
        >
          Continue
        </button>
      </div>
    )}

    {/* ✅ Paste the confirm modal here */}
        {confirmQuit && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6">
            <div className="w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center">
              <div className="text-lg font-bold mb-2">Want to quit?</div>
              <p className="text-base-muted mb-5">You’ll lose this question’s progress.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirmQuit(false)}
                  className="flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition"
                >
                  No
                </button>
                <button
                  onClick={onBack}
                  className="flex-1 py-3 rounded-xl bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
          </div>
        </div>
      );
    }

function CharacterPicker({ onSelect }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <div className="mx-auto max-w-md px-5 pt-16 pb-8">
        <header className="text-center mb-12">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-4xl font-black mb-4">Perfect Round!</h1>
          <p className="text-xl opacity-90">Choose a character to unlock</p>
        </header>

        <div className="grid grid-cols-2 gap-6">
          {WHEEL_CATEGORIES.map((cat) => {
            const charName = CHARACTERS[toSlug(cat.name)];
            return (
              <button
                key={toSlug(cat.name)}
                onClick={() => onSelect(toSlug(cat.name))}
                className="p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-black text-lg mb-1">{charName}</div>
                <div className="text-sm opacity-75">{cat.name}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Play() {
  const [gameState, setGameState] = useState('modes');
  const navigate = useNavigate();
  const location = useLocation();
  const [coins, setCoins] = useState(() => safeStorage.get(STORAGE_KEYS.COINS, 0));
  const [xp, setXp] = useState(() => safeStorage.get(STORAGE_KEYS.XP, 0));
  const [level, setLevel] = useState(() => safeStorage.get(STORAGE_KEYS.LEVEL, 1));
  const [ownedCharacters, setOwnedCharacters] = useState(() => safeStorage.get(STORAGE_KEYS.OWNED_CHARACTERS, []));
  const [soundOn, setSoundOn] = useState(() => safeStorage.get(STORAGE_KEYS.SOUND, true));

  const [run, setRun] = useState({
    qIndex: 0,
    progress: [false, false, false],
    lifelines: { fifty: false, audience: false }
  });

  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [audienceData, setAudienceData] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [timeUp, setTimeUp] = useState(false);

  const [angle, setAngle] = useState(0);
  const [transition, setTransition] = useState("none");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showCallout, setShowCallout] = useState(false);
  const [glowColor, setGlowColor] = useState(null);
  const [showSparkle, setShowSparkle] = useState(-1);

  const timerRef = useRef(null);
  const spinAudioRef = useRef(null);
  const spinSoundTimerRef = useRef(null); // NEW

  const prefersReduced = useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false,
    []
  );

  useEffect(() => {
    loadQuestions();
    setupAudio();
    return () => cleanup();
  }, []);

  useEffect(() => safeStorage.set(STORAGE_KEYS.COINS, coins), [coins]);
  useEffect(() => safeStorage.set(STORAGE_KEYS.XP, xp), [xp]);
  useEffect(() => safeStorage.set(STORAGE_KEYS.LEVEL, level), [level]);
  useEffect(() => safeStorage.set(STORAGE_KEYS.OWNED_CHARACTERS, ownedCharacters), [ownedCharacters]);
  useEffect(() => safeStorage.set(STORAGE_KEYS.SOUND, soundOn), [soundOn]);

  useEffect(() => {
    if (gameState === 'question' && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => {
          const next = prev - 1;
          if (next === 10 && soundOn) {
            playSound("/sounds/tick.mp3", 0.8);
          }
          return next;
        });
      }, 1000);
    } else if (gameState === 'question' && timeLeft === 0) {
      setTimeUp(true); // show modal instead of auto-handling answer
    }


    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [gameState, timeLeft, soundOn]);

  const loadQuestions = async () => {
    try {
      const response = await fetch("/data/quiz_questions_bank.csv");
      const csvText = await response.text();
      const { data } = Papa.parse(csvText, { 
        header: true, 
        skipEmptyLines: true,
        transformHeader: h => h.trim().toLowerCase()
      });

      const processedQuestions = data.map((row, index) => {
        const options = [row.option1, row.option2, row.option3, row.option4].map(opt => 
          (opt || "").trim()
        ).filter(Boolean);

        if (options.length < 4) return null;

        const answerMap = { a: 0, b: 1, c: 2, d: 3 };
        let correctIndex = answerMap[row.answer?.toLowerCase()];
        
        if (correctIndex === undefined) {
          correctIndex = options.findIndex(opt => 
            opt.toLowerCase() === (row.answer || "").toLowerCase()
          );
        }
        
        if (correctIndex === -1) correctIndex = 0;

        return {
          id: row.id || `q_${index}`,
          prompt: (row.question || "").trim(),
          options,
          correctIndex,
          category: (row.category || row.subject || "general knowledge").trim(),
          difficulty: (row.difficulty || "medium").toLowerCase(),
          explanation: (row.explanation || "").trim()
        };
      }).filter(Boolean);

      setAllQuestions(processedQuestions);
    } catch (error) {
      console.error("Failed to load questions:", error);
      setAllQuestions([]);
    }
  };

  const setupAudio = () => {
    const audio = new Audio("/sounds/spin.mp3");
    audio.loop = true;
    audio.volume = 0.6;
    spinAudioRef.current = audio;
  };

  const cleanup = () => {
  // question countdown
  if (timerRef.current) clearTimeout(timerRef.current);

  // 🔊 stop the 2s spin-sound timer too
  if (spinSoundTimerRef.current) {
    clearTimeout(spinSoundTimerRef.current);
    spinSoundTimerRef.current = null;
  }

  // audio element
  if (spinAudioRef.current) {
    try { spinAudioRef.current.pause(); } catch {}
    spinAudioRef.current = null;
  }
};


const startSpinSound = () => {
  if (soundOn && spinAudioRef.current) {
    try {
      spinAudioRef.current.currentTime = 0;
      spinAudioRef.current.play();
    } catch {}
    // stop the sound after 2s, no matter what
    if (spinSoundTimerRef.current) clearTimeout(spinSoundTimerRef.current);
    spinSoundTimerRef.current = setTimeout(() => {
      stopSpinSound();
    }, 2000);
  }
};

const stopSpinSound = () => {
  if (spinSoundTimerRef.current) {
    clearTimeout(spinSoundTimerRef.current);
    spinSoundTimerRef.current = null;
  }
  if (spinAudioRef.current) {
    try {
      spinAudioRef.current.pause();
      spinAudioRef.current.currentTime = 0;
    } catch {}
  }
};


  const resetRun = () => {
    setRun({
      qIndex: 0,
      progress: [false, false, false],
      lifelines: { fifty: false, audience: false }
    });
    setCurrentQuestion(null);
    setCurrentCategory(null);
    setSelectedCharacter(null);
    setEliminatedOptions([]);
    setAudienceData(null);
    setTimeUp(false);

  };

  const spin = () => {
    if (spinning) return;

    setResult(null);
    setShowCallout(false);
    setGlowColor(null);
    setSpinning(true);
    startSpinSound();

    const categoryIndex = Math.floor(Math.random() * WHEEL_CATEGORIES.length);
    const selectedCategory = WHEEL_CATEGORIES[categoryIndex];

    const currentAngle = mod360(angle);
    const targetSliceCenter = categoryIndex * sliceAngle + sliceAngle / 2;
    const jitter = (Math.random() - 0.5) * (sliceAngle * 0.3);
    const targetAngle = 360 - targetSliceCenter + jitter;
    let deltaBase = mod360(targetAngle - currentAngle);
    const totalRotation = SPIN_CONFIG.FULL_TURNS * 360 + deltaBase;

    const overshootTarget = angle + totalRotation + SPIN_CONFIG.OVERSHOOT;
    setTransition(`transform ${prefersReduced ? 1000 : SPIN_CONFIG.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`);
    setAngle(overshootTarget);

    vibrate([20, 50, 20]);

    setTimeout(() => {
      setTransition(`transform ${prefersReduced ? 200 : SPIN_CONFIG.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`);
      setAngle(prev => prev - SPIN_CONFIG.OVERSHOOT);
    }, prefersReduced ? 1000 : SPIN_CONFIG.DURATION);

    setTimeout(() => {
      stopSpinSound();
      setSpinning(false);
      setResult({ cat: selectedCategory, index: categoryIndex });
      setCurrentCategory(selectedCategory);
      setGlowColor(selectedCategory.color);
      setShowCallout(true);

      setTimeout(() => {
        setShowCallout(false);
        setGameState('interstitial');
      }, 1500);

      setTimeout(() => setGlowColor(null), 1000);
    }, (prefersReduced ? 1000 : SPIN_CONFIG.DURATION) + (prefersReduced ? 200 : SPIN_CONFIG.SETTLE_DURATION) + 100);
  };

  const startQuestion = () => {
    const categoryQuestions = allQuestions.filter(q => {
      const qCat = q.category.toLowerCase();
      const targetCat = currentCategory.name.toLowerCase();
      return qCat.includes(targetCat) || targetCat.includes(qCat);
    });

    let question;
    if (categoryQuestions.length > 0) {
      question = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    } else {
      question = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    }

    if (question) {
      setCurrentQuestion(question);
      setTimeLeft(30);
      setEliminatedOptions([]);
      setAudienceData(null);
      setTimeUp(false);
      setGameState('question');
    } else {
      setGameState('wheel');
    }
  };

  const handleAnswer = (correct, motivator, isContinue = false) => {
    if (isContinue) {
      const newProgress = [...run.progress];
      newProgress[run.qIndex] = correct;
      
      setRun(prev => ({
        ...prev,
        progress: newProgress,
        qIndex: prev.qIndex + 1
      }));

      if (correct) {
        setCoins(prev => prev + 5);
        setXp(prev => prev + 1);
        if (soundOn) playSound("/sounds/coin.mp3", 0.8);
      }

      setShowSparkle(run.qIndex);
      if (soundOn) playSound("/sounds/correct.mp3", 0.5);
      setTimeout(() => setShowSparkle(-1), 1000);

      if (run.qIndex >= 2) {
        const perfectRun = newProgress.every(Boolean);
        if (perfectRun) {
          setTimeout(() => setGameState('characterPicker'), 1000);
        } else {
          setTimeout(() => {
            setGameState('modes');
            resetRun();
          }, 1500);
        }
      } else {
        setTimeout(() => setGameState('wheel'), 1000);
      }
    } else {
      if (soundOn) {
        playSound(correct ? "/sounds/correct.mp3" : "/sounds/wrong.mp3", 0.7);
      }
    }
  };

  const handleTimeUp = () => {
    handleAnswer(false, "Time's up!");
  };

  const handleUseLifeline = (type) => {
    if (run.lifelines[type] || !currentQuestion) return;

    setRun(prev => ({
      ...prev,
      lifelines: { ...prev.lifelines, [type]: true }
    }));

    if (type === 'fifty') {
      const wrongOptions = currentQuestion.options
        .map((_, index) => index)
        .filter(index => index !== currentQuestion.correctIndex);
      
      const toEliminate = wrongOptions.slice(0, 2);
      setEliminatedOptions(toEliminate);
    } else if (type === 'audience') {
      const base = 40 + Math.random() * 25;
      let remaining = 100 - base;
      const poll = [0, 0, 0, 0];
      poll[currentQuestion.correctIndex] = Math.round(base);
      
      const others = [0, 1, 2, 3].filter(i => i !== currentQuestion.correctIndex);
      others.forEach((index, i) => {
        if (i === others.length - 1) {
          poll[index] = remaining;
        } else {
          const amount = Math.floor(Math.random() * remaining);
          poll[index] = amount;
          remaining -= amount;
        }
      });
      
      setAudienceData(poll);
    }
  };

  const handleCharacterSelect = (characterSlug) => {
    setSelectedCharacter(characterSlug);
    setGameState('bonusInterstitial');
  };

  const handleBonusAnswer = (correct) => {
    if (correct && selectedCharacter) {
      setOwnedCharacters(prev => [...new Set([...prev, selectedCharacter])]);
      if (soundOn) playSound("/sounds/coin.mp3", 1.0);
    }
    
    setTimeout(() => {
      setGameState('modes');
      resetRun();
    }, 3000);
  };

  const handleModeSelect = (mode) => {
    if (mode === 'classic') {
      resetRun();
      setGameState('wheel');
    }
  };

  const handleNavigateHome = () => {
    // Replace this with your actual navigation logic
    window.location.href = '/'; // or use your router navigation
    console.log('Navigate to home');
  };

  const handleBack = () => {
    setGameState('modes');
    resetRun();
  };

  const handleBackToWheel = () => {
    setGameState('wheel');
  };
  // Jump back to Play home (modes) when URL has ?view=modes (from bottom nav)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("view") === "modes" || params.get("view") === "home") {
      resetRun();
      setGameState("modes");
      // clean the URL so the query doesn't linger
      navigate("/play", { replace: true });
    }
  }, [location.search]);



  switch (gameState) {
    case 'modes':
      return (
        <ModesGrid 
          onModeSelect={handleModeSelect}
          onNavigateHome={handleNavigateHome}
        />
      );
      
    case 'wheel':
      return (
        <WheelClassic 
          run={run}
          coins={coins}
          xp={xp}
          level={level}
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
          showSparkle={showSparkle}
        />
      );
      
    case 'interstitial':
      return (
        <ResultInterstitial 
          category={currentCategory}
          onComplete={startQuestion}
        />
      );
      
    case 'question':
      return (
        <QuestionCard
          question={currentQuestion}
          category={currentCategory}
          onAnswer={handleAnswer}
          run={run}
          timeLeft={timeLeft}
          usedLifelines={run.lifelines}
          onUseLifeline={handleUseLifeline}
          eliminatedOptions={eliminatedOptions}
          audienceData={audienceData}
          onBack={handleBackToWheel}
          timeUp={timeUp}
          onTimeUpBackToWheel={() => { setTimeUp(false); setGameState('wheel'); }}
        />
      );
      
    case 'characterPicker':
      return (
        <CharacterPicker onSelect={handleCharacterSelect} />
      );
      
    case 'bonusInterstitial':
      return (
        <ResultInterstitial 
          category={WHEEL_CATEGORIES.find(c => toSlug(c.name) === selectedCharacter)}
          onComplete={() => setGameState('bonusQuestion')}
          isBonus={true}
        />
      );
      
    case 'bonusQuestion':
      if (!currentQuestion) {
        const bonusCategory = WHEEL_CATEGORIES.find(c => toSlug(c.name) === selectedCharacter);
        if (bonusCategory && allQuestions.length > 0) {
          const categoryQuestions = allQuestions.filter(q => {
            const qCat = q.category.toLowerCase();
            const targetCat = bonusCategory.name.toLowerCase();
            return qCat.includes(targetCat) || targetCat.includes(qCat);
          });
          
          const question = categoryQuestions.length > 0 
            ? categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]
            : allQuestions[Math.floor(Math.random() * allQuestions.length)];
            
          setCurrentQuestion(question);
          setTimeLeft(30);
        }
        return (
          <div className="min-h-screen bg-base-bg text-base-text flex items-center justify-center">
            <div className="text-lg">Loading bonus question...</div>
          </div>
        );
      }
      
      return (
        <QuestionCard
          question={currentQuestion}
          category={WHEEL_CATEGORIES.find(c => toSlug(c.name) === selectedCharacter) || WHEEL_CATEGORIES[0]}
          onAnswer={handleBonusAnswer}
          run={{ ...run, lifelines: { fifty: true, audience: true } }}
          timeLeft={timeLeft}
          usedLifelines={{ fifty: true, audience: true }}
          onUseLifeline={() => {}}
          eliminatedOptions={[]}
          audienceData={null}
          onBack={() => setGameState('modes')}
        />
      );
      
    default:
      return (
        <ModesGrid 
          onModeSelect={handleModeSelect}
          onNavigateHome={handleNavigateHome}
        />
      );
  }
}