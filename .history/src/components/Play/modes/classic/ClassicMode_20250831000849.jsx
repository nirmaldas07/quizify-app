//src/components/play/modes/classic/ClassicMode.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import Papa from "papaparse";
import Confetti from "react-confetti";
import { useGameData } from "../../shared/hooks/useGameData";

// Constants
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

const SPIN_CONFIG = {
  FULL_TURNS: 6,
  DURATION: 2800,
  OVERSHOOT: 12,
  SETTLE_DURATION: 350
};

// Utility functions
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

// Sub-components (these will be extracted to separate files later)
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
  showSparkle,
  pulseIdx,
  nextProgressIdx,
  pendingProgressIdx,
  coinBurstTick,
  lastAnswerWasCorrect
}) {
  const nextThreshold = 100 * level * (level - 1);
  const [armFill, setArmFill] = useState(false);
  const lastCoinTickRef = useRef(0);
  const coinTargetRef = useRef(null);
  const wheelRef = useRef(null);
  const [coinVector, setCoinVector] = useState({ dx: 110, dy: -260 });
  const [showCoinAnim, setShowCoinAnim] = useState(false);

  useEffect(() => {
    if (pendingProgressIdx == null) return;
    setArmFill(false);
    const id = setTimeout(() => setArmFill(true), 30);
    return () => clearTimeout(id);
  }, [pendingProgressIdx]);

  useEffect(() => {
    if (!coinBurstTick || !lastAnswerWasCorrect) return;
    if (coinBurstTick === lastCoinTickRef.current) return;
    lastCoinTickRef.current = coinBurstTick;
    
    try {
      const wheel = wheelRef?.current?.getBoundingClientRect?.();
      const pill = coinTargetRef?.current?.getBoundingClientRect?.();
      if (wheel && pill) {
        const originX = wheel.left + wheel.width / 2;
        const originY = wheel.top + wheel.height / 2;
        const targetX = pill.left + pill.width / 2;
        const targetY = pill.top + pill.height / 2;
        setCoinVector({ dx: targetX - originX, dy: targetY - originY });
      }
    } catch {}

    if (soundOn) playSound("/sounds/coin.mp3", 0.7);
    setShowCoinAnim(true);
    const t = setTimeout(() => setShowCoinAnim(false), 700);
    return () => clearTimeout(t);
  }, [coinBurstTick, soundOn, lastAnswerWasCorrect]);

  return (
    <div className="fixed inset-0 bg-base-bg text-base-text overflow-hidden">
      <div className="h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]">
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
            <button ref={coinTargetRef} className="px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]">🪙 {coins}</button>
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

        {/* Progress bar */}
        <div className="flex justify-center mt-12 sm:mt-16 mb-6">
          <div className="w-80 max-w-full">
            <style>{`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}</style>

            <div
              key={run.qIndex}
              className="relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15"
            >
              {[0,1,2].map((i) => {
                const colors = ["#FF9800", "#FFC107", "#cadd75ff"];
                const filled = !!run.progress[i];

                return (
                  <div key={i} className="relative h-full bg-white/10">
                    <div
                      className="absolute inset-y-0 left-0 rounded-[6px]"
                      style={{
                        width: filled
                          ? (i === pendingProgressIdx
                              ? (armFill ? "100%" : "0%")
                              : ((nextProgressIdx === i && pendingProgressIdx == null)
                                  ? "0%"
                                  : "100%"))
                          : "0%",
                        backgroundColor: colors[i],
                        transition: i === pendingProgressIdx ? "width 1200ms ease-out" : "none"
                      }}
                    />
                    {pulseIdx === i && (
                      <span className="absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none">
                        <span
                          className="absolute inset-y-0 left-0 w-1 rounded bg-white/80"
                          style={{ animation: "qp_sweep 1200ms ease-out forwards" }}
                        />
                      </span>
                    )}
                    {showSparkle === i && (
                      <span className="absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none">✨</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Wheel */}
        <section className="flex flex-col items-center mt-28 sm:mt-32 mb-10">
          <div ref={wheelRef} className="relative w-96 h-96 rounded-full select-none">
            {glowColor && (
              <div
                className="pointer-events-none absolute -inset-4 rounded-full"
                style={{ boxShadow: `0 0 0 8px ${glowColor}40, 0 0 40px 12px ${glowColor}60` }}
              />
            )}

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

            {showCoinAnim && (
              <>
                <style>{`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}</style>
                {[0,1,2].map((i) => (
                  <div
                    key={i}
                    className="pointer-events-none absolute z-30 top-1/2 left-1/2"
                    style={{
                      animation: `coinFly 600ms ease-out ${i * 80}ms forwards`,
                      ['--coin-dx']: `${coinVector.dx}px`,
                      ['--coin-dy']: `${coinVector.dy}px`
                    }}
                  >
                    <div className="w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold">
                      🪙
                    </div>
                  </div>
                ))}
              </>
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

// Main ClassicMode component
export default function ClassicMode({ onBack }) {
  const { 
    coins, 
    xp, 
    level, 
    ownedCharacters, 
    soundOn, 
    addCoins, 
    addXp, 
    unlockCharacter, 
    setSoundOn 
  } = useGameData();

  const [gameState, setGameState] = useState('wheel');
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
  const [coinBurstTick, setCoinBurstTick] = useState(0);
  const [pendingProgressIdx, setPendingProgressIdx] = useState(null);
  const [nextProgressIdx, setNextProgressIdx] = useState(null);
  const [lastAnswerWasCorrect, setLastAnswerWasCorrect] = useState(false);
  const [postWheelNext, setPostWheelNext] = useState(null);
  const [pulseIdx, setPulseIdx] = useState(-1);
  const [runResults, setRunResults] = useState([false, false, false]);
  const [pendingCoinBurst, setPendingCoinBurst] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);

  const timerRef = useRef(null);
  const spinAudioRef = useRef(null);
  const spinSoundTimerRef = useRef(null);

  const prefersReduced = useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false,
    []
  );

  // Load questions on mount
  useEffect(() => {
    loadQuestions();
    setupAudio();
    return () => cleanup();
  }, []);

  // Timer logic
  useEffect(() => {
    if (gameState === 'question' && timeLeft > 0 && !timerPaused) {
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
      setTimeUp(true);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [gameState, timeLeft, soundOn, timerPaused]);

  // Progress animation logic
  useEffect(() => {
    if (gameState !== "wheel" || pendingProgressIdx == null) return;

    setShowSparkle(pendingProgressIdx);
    if (soundOn) playSound("/sounds/progress.mp3", 0.6);
    setPulseIdx(pendingProgressIdx);

    const t0 = setTimeout(() => setPulseIdx(-1), 900);
    const t1 = setTimeout(() => setShowSparkle(-1), 900);
    const t2 = setTimeout(() => {
      if (postWheelNext) {
        if (postWheelNext === "streakFlash") {
          setGameState("streakFlash");
        } else if (postWheelNext === "characterPicker") {
          setGameState("characterPicker");
        } else {
          onBack();
          resetRun();
        }
        setPostWheelNext(null);
      }
      setPendingProgressIdx(null);
    }, 1800);

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, [gameState, pendingProgressIdx, postWheelNext, soundOn, onBack]);

  // Coin burst logic
  useEffect(() => {
    if (gameState !== 'wheel' || !pendingCoinBurst) return;
    setCoinBurstTick(t => t + 1);
    setPendingCoinBurst(false);
  }, [gameState, pendingCoinBurst]);

  // Trigger progress animation after returning to wheel
  useEffect(() => {
    if (gameState !== 'wheel' || nextProgressIdx == null) return;
    const delay = lastAnswerWasCorrect ? 1800 : 0;
    const t = setTimeout(() => {
      setPendingProgressIdx(nextProgressIdx);
      setNextProgressIdx(null);
    }, delay);
    return () => clearTimeout(t);
  }, [gameState, nextProgressIdx, lastAnswerWasCorrect]);

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
    if (timerRef.current) clearTimeout(timerRef.current);
    if (spinSoundTimerRef.current) {
      clearTimeout(spinSoundTimerRef.current);
      spinSoundTimerRef.current = null;
    }
    if (spinAudioRef.current) {
      try { spinAudioRef.current.pause(); } catch {}
      spinAudioRef.current = null;
    }
  };

  const resetRun = () => {
    setRun({
      qIndex: 0,
      progress: [false, false, false],
      lifelines: { fifty: false, audience: false }
    });
    setRunResults([false, false, false]);
    setCurrentQuestion(null);
    setCurrentCategory(null);
    setSelectedCharacter(null);
    setEliminatedOptions([]);
    setAudienceData(null);
    setTimeUp(false);
    setCoinBurstTick(0);
  };

  const startSpinSound = () => {
    if (soundOn && spinAudioRef.current) {
      try {
        spinAudioRef.current.currentTime = 0;
        spinAudioRef.current.play();
      } catch {}
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

  const handleAnswer = (correct, motivator, isContinue = false) => {
    if (!isContinue) {
      setTimerPaused(true);
      return;
    }

    const currentIdx = run.qIndex;
    const nextProgress = [...run.progress];
    nextProgress[currentIdx] = true;

    const updatedResults = [...runResults];
    updatedResults[currentIdx] = !!correct;
    setRunResults(updatedResults);

    setRun(prev => ({
      ...prev,
      progress: nextProgress,
      qIndex: prev.qIndex + 1
    }));

    if (correct) {
      addCoins(5);
      addXp(1);
      setPendingCoinBurst(true);
    }

    setNextProgressIdx(currentIdx);
    setLastAnswerWasCorrect(!!correct);

    if (currentIdx === 2) {
      const perfect = updatedResults.every(Boolean);
      setPostWheelNext(perfect ? "streakFlash" : "modes");
    } else {
      setPostWheelNext(null);
    }

    setGameState("wheel");
  };

  // For now, render only the wheel state
  // You'll add other game states here as you extract them
  if (gameState === 'wheel') {
    return (
      <WheelClassic 
        run={run}
        coins={coins}
        xp={xp}
        level={level}
        ownedCharacters={ownedCharacters}
        onSpin={spin}
        onBack={onBack}
        spinning={spinning}
        angle={angle}
        transition={transition}
        result={result}
        showCallout={showCallout}
        glowColor={glowColor}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
        showSparkle={showSparkle}
        pulseIdx={pulseIdx}
        coinBurstTick={coinBurstTick}
        pendingProgressIdx={pendingProgressIdx}
        lastAnswerWasCorrect={lastAnswerWasCorrect}
        nextProgressIdx={nextProgressIdx}
      />
    );
  }

  // Placeholder for other states
  return (
    <div className="min-h-screen bg-base-bg text-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-2xl mb-4">Game State: {gameState}</div>
        <button 
          onClick={() => setGameState('wheel')}
          className="px-6 py-3 bg-blue-600 rounded-lg"
        >
          Back to Wheel
        </button>
      </div>
    </div>
  );
}