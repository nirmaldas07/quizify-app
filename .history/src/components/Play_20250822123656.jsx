// src/components/Play.jsx
// Classic mode end-to-end INSIDE this file (no Quiz.jsx changes)
// Screens: Modes → Wheel → Result Interstitial (2s) → Question → Continue → Wheel (arc fill)
// Perfect 3/3 → Character Picker → Bonus Interstitial (2s) → Bonus Question → Modes

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ------------------------------ Data ------------------------------ */
const CATEGORIES = [
  { label: "Art",            slug: "art",            color: "#7C3AED", icon: "🎨" },
  { label: "Science",        slug: "science",        color: "#10B981", icon: "🔬" },
  { label: "Sports",         slug: "sports",         color: "#EF4444", icon: "⚽" },
  { label: "Entertainment",  slug: "entertainment",  color: "#F59E0B", icon: "🎬" },
  { label: "Geography",      slug: "geography",      color: "#FACC15", icon: "🌍" },
  { label: "History",        slug: "history",        color: "#2563EB", icon: "📚" },
];
const sliceAngle = 360 / CATEGORIES.length;

// Characters (names fixed; tags mapped as requested)
const CHARACTER_META = {
  art:           { id: "TINA",   name: "TINA",   tag: "Fun Facts",     emoji: "🧁" },
  science:       { id: "ALBERT", name: "ALBERT", tag: "Sports",        emoji: "🥇" }, // per your mapping note
  sports:        { id: "BONZO",  name: "BONZO",  tag: "Sports",        emoji: "🏈" },
  entertainment: { id: "POP",    name: "POP",    tag: "Entertainment", emoji: "🍿" },
  geography:     { id: "TITO",   name: "TITO",   tag: "Geography",     emoji: "🌎" },
  history:       { id: "HECTOR", name: "HECTOR", tag: "History",       emoji: "🏰" },
};

const MOTIVATORS = {
  correct: ["Boom! Nailed it.", "Sharp shot!", "Clean hit.", "Right on."],
  wrong:   ["Close one—next spin's yours.", "Toughie—bank it and roll again.", "Learning unlocks wins."],
};

/* ----------------------------- Motion ----------------------------- */
const FULL_TURNS = 42;
const DURATION_MAIN = 3000;
const OVERSHOOT_DEG = 10;
const DURATION_SETTLE = 260;
const EASE_MAIN = "cubic-bezier(.15,.7,.1,1)";
const EASE_SETTLE = "cubic-bezier(.2,.7,.2,1)";

/* --------------------------- LocalStorage ------------------------- */
const LS_SOUND = "play_sound_on";
const LS_COINS = "coins_total";
const LS_XP = "xp_total";
const LS_OWNED = "owned_characters";

/* --------------------------- Helpers ----------------------------- */
const mod360 = (deg) => ((deg % 360) + 360) % 360;
const normalizeDeg = (deg) => mod360(deg);
const rand = (n) => Math.floor(Math.random() * n);
const randomOf = (arr) => arr[Math.floor(Math.random() * arr.length)];

/* ------------------------------ Tiny sounds (optional) ----------- */
function useLoopAudio(src, { volume = 0.7 } = {}) {
  const ref = useRef(null);
  useEffect(() => { const a = new Audio(src); a.loop = true; a.volume = volume; ref.current = a; return () => { try { a.pause(); a.src = ""; } catch {} } }, [src, volume]);
  return {
    play: () => { try { ref.current?.currentTime = 0; ref.current?.play(); } catch {} },
    stop: () => { try { ref.current?.pause(); ref.current.currentTime = 0; } catch {} },
  };
}

/* ------------------------------ Top UI bits ---------------------- */
function TopChips({ coins, xp }) {
  const Chip = ({ icon, label, value }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10">
      <span className="text-lg">{icon}</span>
      <div className="leading-4">
        <div className="text-sm font-semibold">{value}</div>
        <div className="text-[11px] text-white/70">{label}</div>
      </div>
    </div>
  );
  return (
    <div className="flex items-center justify-center gap-3 mt-2 mb-1">
      <Chip icon="🪙" label="Coins" value={coins} />
      <Chip icon="⚡" label="XP" value={xp} />
    </div>
  );
}

function CharacterShelf({ owned }) {
  if (!owned?.length) return null;
  return (
    <div className="flex items-center justify-center gap-2 mb-2">
      {owned.map((slug) => {
        const meta = CHARACTER_META[slug];
        return (
          <div key={slug} className="px-2 py-1 rounded-xl bg-white/8 border border-white/10 text-sm flex items-center gap-1">
            <span>{meta?.emoji || "⭐"}</span>
            <span className="text-xs font-semibold">{meta?.name}</span>
          </div>
        );
      })}
    </div>
  );
}

function ProgressArc({ value /*0..3*/, animateKey }) {
  const colors = ["#F59E0B", "#FACC15", "#10B981"]; // orange → yellow → green
  return (
    <svg width="100%" viewBox="0 0 260 62" className="mx-auto mb-2 block" aria-hidden>
      <path d="M20 42 A110 110 0 0 1 240 42" stroke="rgba(255,255,255,0.18)" strokeWidth="10" fill="none" strokeLinecap="round"/>
      {colors.map((c, i) => {
        const start = 20 + i * 73; const end = start + 63; const d = `M${start} 42 A110 110 0 0 1 ${end} 42`;
        const filled = value > i;
        return <path key={`${i}-${animateKey}`} d={d} stroke={c} strokeWidth={filled ? 12 : 0} fill="none" strokeLinecap="round" className={filled?"drop-shadow-[0_0_10px_rgba(255,255,255,0.22)] transition-all":"transition-all"}/>;
      })}
    </svg>
  );
}

/* ------------------------------ Modes (ss1) ---------------------- */
function ModesGrid({ onClassic }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Choose a game mode</h1>
        </header>
        <div className="grid gap-4">
          <button onClick={onClassic} className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 border border-white/10 text-left hover:scale-[1.02] transition-transform active:scale-[0.98]">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="text-xl font-bold mb-1">Classic</h3>
            <p className="text-sm opacity-90">Spin the wheel • 3 questions • Unlock characters</p>
          </button>
          <button disabled className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left opacity-50">
            <div className="text-2xl mb-2">👥</div>
            <h3 className="text-xl font-bold mb-1">Party</h3>
            <p className="text-sm opacity-90">Coming soon</p>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Interstitial (ss3) --------------- */
function ResultInterstitial({ category, onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2000); return () => clearTimeout(t); }, [onDone]);
  return (
    <div className="fixed inset-0 grid place-items-center text-white z-[140]" style={{ background: category.color }}>
      <div className="absolute top-16 text-center">
        <div className="text-4xl font-extrabold drop-shadow">{category.label}</div>
      </div>
      <div className="w-28 h-28 rounded-full bg-white/20 grid place-items-center">
        <span className="text-4xl">{category.icon}</span>
      </div>
    </div>
  );
}

/* ------------------------------ Question card -------------------- */
function QuestionCard({ category, onContinue, run, disableLifelines=false }) {
  // Mock data — replace with your real fetch later
  const q = React.useMemo(() => ({
    text: `What is a key concept in ${category.label}?`,
    options: ["First option", "Second option", "Third option", "Fourth option"],
    correctIndex: 0,
  }), [category]);

  const [timeLeft, setTimeLeft] = useState(30);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [hidden, setHidden] = useState([]);
  const [usedLL, setUsedLL] = useState({ fifty:false, audience:false });

  useEffect(() => { setTimeLeft(30); setSelected(null); setLocked(false); setHidden([]); setUsedLL({fifty:false, audience:false}); }, [category]);
  useEffect(() => {
    if (locked) return;
    const t = setInterval(() => setTimeLeft((s) => { if (s<=1) { setLocked(true); return 0;} return s-1; }), 1000);
    return () => clearInterval(t);
  }, [locked]);

  const answerIdx = selected; const isCorrect = locked && answerIdx === q.correctIndex;
  const motivator = locked ? randomOf(isCorrect ? MOTIVATORS.correct : MOTIVATORS.wrong) : "";

  const pick = (i) => { if (locked) return; setSelected(i); setLocked(true); };
  const use5050 = () => {
    if (disableLifelines || usedLL.fifty) return;
    const wrong = [0,1,2,3].filter(i=>i!==q.correctIndex).sort(()=>Math.random()-0.5).slice(0,2);
    setHidden(wrong); setUsedLL((s)=>({ ...s, fifty:true }));
  };
  const useAudience = () => { if (disableLifelines || usedLL.audience) return; setUsedLL((s)=>({ ...s, audience:true })); };

  return (
    <div className="fixed inset-0 z-[145] bg-black text-white overflow-y-auto">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        {/* Header with timer */}
        <header className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-base-muted">Question {run.qIndex + 1}/3</div>
            <div className={`text-lg font-bold ${timeLeft<=10?"text-red-400":"text-white"}`}>{timeLeft}s</div>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1">
            <div className={`h-full rounded-full transition-all duration-1000 ${timeLeft<=10?"bg-red-400":"bg-blue-400"}`} style={{ width: `${(timeLeft/30)*100}%` }}/>
          </div>
        </header>

        {/* Q body */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-full grid place-items-center text-lg" style={{ background: category.color }}>{category.icon}</span>
            <span className="text-sm text-white/70">{category.label}</span>
          </div>
          <h2 className="text-xl font-semibold leading-relaxed">{q.text}</h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-5">
          {q.options.map((opt, i) => {
            if (hidden.includes(i)) return null;
            const sel = selected===i; const corr = i===q.correctIndex;
            let cls = "bg-white/5 border-white/10";
            if (locked && sel) cls = corr?"bg-green-500/20 border-green-400":"bg-red-500/20 border-red-400";
            else if (locked && corr) cls = "bg-green-500/20 border-green-400";
            else if (sel) cls = "bg-white/15 border-white/30";
            return (
              <button key={i} disabled={locked} onClick={()=>pick(i)} className={`w-full p-4 rounded-xl border text-left transition ${cls} ${!locked?"hover:bg-white/10":""}`} style={{ animationDelay: `${i*90}ms`, animation: 'slideInUp 0.28s ease-out both' }}>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/10 grid place-items-center text-xs font-semibold">{String.fromCharCode(65+i)}</span>
                  <span>{opt}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Lifelines */}
        {!locked && !disableLifelines && (
          <div className="flex gap-3 mb-6">
            <button onClick={use5050} disabled={usedLL.fifty} className={`flex-1 p-3 rounded-xl border text-sm ${usedLL.fifty?"bg-white/5 border-white/10 text-white/40":"bg-white/10 border-white/20 hover:bg-white/15"}`}>50:50</button>
            <button onClick={useAudience} disabled={usedLL.audience} className={`flex-1 p-3 rounded-xl border text-sm ${usedLL.audience?"bg-white/5 border-white/10 text-white/40":"bg-white/10 border-white/20 hover:bg-white/15"}`}>👥 Ask</button>
          </div>
        )}

        {/* Result + Continue */}
        {locked && (
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">{motivator}</p>
            <button className="btn-primary w-full" onClick={() => onContinue({ correct: answerIdx === q.correctIndex })}>Continue</button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

/* ------------------------------ Character Picker ----------------- */
function CharacterPicker({ owned, onSelect, onClose }) {
  const items = Object.entries(CHARACTER_META);
  return (
    <div className="fixed inset-0 z-[150] bg-black/70 overflow-y-auto" onClick={onClose}>
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]" onClick={(e)=>e.stopPropagation()}>
        <div className="text-center mb-5">
          <h2 className="text-2xl font-extrabold">Choose a character</h2>
          <p className="text-sm text-white/70">If you answer right, it's yours!</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {items.map(([slug, meta]) => (
            <button key={slug} onClick={() => onSelect(slug)} className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-center">
              <div className="text-4xl mb-2">{meta.emoji}</div>
              <div className="font-semibold">{meta.name}</div>
              <div className="text-xs text-white/70">{meta.tag}</div>
              {owned.includes(slug) && <div className="mt-1 text-[10px] text-emerald-400">Owned</div>}
            </button>
          ))}
        </div>
        <button className="btn-ghost w-full mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function BonusInterstitial({ onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2000); return () => clearTimeout(t); }, [onDone]);
  return (
    <div className="fixed inset-0 z-[160] grid place-items-center text-white" style={{ background: "#6D28D9" }}>
      <div className="absolute top-16 text-center"><div className="text-3xl font-extrabold">Bonus question</div></div>
      <div className="w-28 h-28 rounded-full bg-white/20 grid place-items-center"><span className="text-4xl">🎁</span></div>
    </div>
  );
}

/* ------------------------------ Wheel (ss2) ---------------------- */
function WheelClassic({
  angle, transition, spinning, onSpin, glowColor, run, coins, xp, owned, onBack,
}) {
  const wheelSizeClass = "w-[320px] h-[320px] md:w-[380px] md:h-[380px]";
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        {/* Header */}
        <header className="flex items-center justify-between mb-2">
          <button onClick={onBack} className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">←</button>
          <div className="text-center"><h1 className="text-2xl font-bold">Classic</h1></div>
          <div className="h-10 w-10" />
        </header>

        {/* Chips + Shelf */}
        <TopChips coins={coins} xp={xp} />
        <CharacterShelf owned={owned} />

        {/* Progress arc (hug wheel) */}
        <ProgressArc value={run.progress.filter(Boolean).length} animateKey={run.id} />

        {/* Wheel */}
        <section className="flex flex-col items-center">
          <div className={`relative ${wheelSizeClass} rounded-full select-none`}>
            {glowColor && (<div className="pointer-events-none absolute -inset-2 rounded-full" style={{ boxShadow: `0 0 0 6px ${glowColor}33, 0 0 30px 8px ${glowColor}44` }} />)}

            <div className="absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform" style={{ transform: `rotate(${angle}deg)`, transition }} aria-label="Category wheel" role="group">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="block">
                {CATEGORIES.map((cat, i) => {
                  const start = i * sliceAngle; const end = start + sliceAngle; const largeArc = sliceAngle > 180 ? 1 : 0;
                  const sr = (Math.PI * start) / 180; const er = (Math.PI * end) / 180;
                  const x1 = 50 + 50 * Math.cos(sr); const y1 = 50 - 50 * Math.sin(sr);
                  const x2 = 50 + 50 * Math.cos(er); const y2 = 50 - 50 * Math.sin(er);
                  const mid = start + sliceAngle/2;
                  return (
                    <g key={cat.slug} opacity={0.98}>
                      <path d={`M50,50 L${x1},${y1} A50,50 0 ${largeArc} 0 ${x2},${y2} Z`} fill={cat.color} stroke="rgba(255,255,255,0.14)" strokeWidth="0.6" />
                      <text x="50" y="50" fill="#fff" fontSize="8" fontWeight="700" dominantBaseline="middle" textAnchor="middle" transform={`rotate(${mid} 50 50) translate(20 0) rotate(${-mid} 50 50)`}>{cat.icon}</text>
                    </g>
                  );
                })}
                <circle cx="50" cy="50" r="9" fill="rgba(0,0,0,0.55)" stroke="white" strokeOpacity="0.25" />
              </svg>

              <button onClick={onSpin} disabled={spinning} className={["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold text-sm","transition active:scale-[0.98]", spinning?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" ")}>SPIN</button>
            </div>

            {/* Pointer */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 z-20 drop-shadow">
              <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 4 L20 20 L4 20 Z" fill="#ffffff" /></svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ------------------------------ Main Play ------------------------ */
export default function Play() {
  const navigate = useNavigate();

  // totals (coins, xp)
  const [coins, setCoins] = useState(() => parseInt(localStorage.getItem(LS_COINS) || "0", 10));
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem(LS_XP) || "0", 10));
  const addCoins = (n) => setCoins((c)=>{ const next = c+n; localStorage.setItem(LS_COINS, String(next)); return next; });
  const addXp = (n) => setXp((v)=>{ const next = v+n; localStorage.setItem(LS_XP, String(next)); return next; });

  // owned characters
  const [owned, setOwned] = useState(() => { try { return JSON.parse(localStorage.getItem(LS_OWNED) || "[]"); } catch { return []; } });
  const own = (slug) => setOwned((o)=>{ const next = Array.from(new Set([...o, slug])); localStorage.setItem(LS_OWNED, JSON.stringify(next)); return next; });

  // wheel + run state
  const [game, setGame] = useState('modes');
  const [run, setRun] = useState({ id: Date.now(), qIndex: 0, progress: [false,false,false] });

  const [angle, setAngle] = useState(0);
  const [transition, setTransition] = useState("none");
  const [spinning, setSpinning] = useState(false);
  const [glowColor, setGlowColor] = useState(null);

  const [lastCategory, setLastCategory] = useState(CATEGORIES[0]);

  const prefersReduced = useMemo(() => (typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false), []);

  // sounds
  const loop = useLoopAudio("/sounds/spin.mp3", { volume: 0.7 });
  const startSpinSound = () => loop.play();
  const stopSpinSound = () => loop.stop();

  const startClassic = () => { setRun({ id: Date.now(), qIndex: 0, progress: [false,false,false] }); setGame('wheel'); };

  const backToModes = () => { setGame('modes'); };

  // Spin logic → interstitial → question
  const onSpin = () => {
    if (spinning) return;
    setSpinning(true); setGlowColor(null); startSpinSound();

    const index = rand(CATEGORIES.length); const cat = CATEGORIES[index];
    const current = mod360(angle); const pointerAngle = 180; const centerOfSlice = index * sliceAngle + sliceAngle/2;
    const deltaBase = normalizeDeg(centerOfSlice - current - pointerAngle);
    const jitter = (Math.random()-0.5) * (sliceAngle*0.5);
    const delta = FULL_TURNS*360 + deltaBase + jitter;

    const overshootTarget = angle + delta + OVERSHOOT_DEG;
    setTransition(`transform ${prefersReduced?800:DURATION_MAIN}ms ${EASE_MAIN}`);
    setAngle(overshootTarget);

    try { if (navigator.vibrate && !prefersReduced) navigator.vibrate([10,40,10]); } catch {}

    setTimeout(()=>{ setTransition(`transform ${prefersReduced?160:DURATION_SETTLE}ms ${EASE_SETTLE}`); setAngle((a)=>a-OVERSHOOT_DEG); }, prefersReduced?800:DURATION_MAIN);
    setTimeout(()=>{
      stopSpinSound(); setSpinning(false); setGlowColor(cat.color); setTimeout(()=>setGlowColor(null), 600);
      setLastCategory(cat); setGame('interstitial');
    }, (prefersReduced?800:DURATION_MAIN) + (prefersReduced?160:DURATION_SETTLE) + 40);
  };

  // Continue from a question → update run, coins/xp, return to wheel (arc fill moment)
  const onQuestionContinue = ({ correct }) => {
    const p = [...run.progress]; p[run.qIndex] = correct;
    const nextIndex = run.qIndex + 1;
    setRun((r)=>({ ...r, progress: p, qIndex: nextIndex }));

    // Award on arc fill (wheel screen)
    if (correct) { addCoins(5); addXp(1); }

    // If finished 3/3 → character flow or back to modes
    if (nextIndex >= 3) {
      const perfect = p.every(Boolean);
      if (perfect) { setGame('picker'); }
      else { setGame('modes'); }
      return;
    }
    setGame('wheel');
  };

  const onPickCharacter = (slug) => { setGame('bonus_inter'); setLastCategory({ label: 'Bonus', slug: 'bonus', color: '#6D28D9', icon: '🎁' }); setPicked(slug); };
  const [picked, setPicked] = useState(null);

  const onBonusContinue = ({ correct }) => {
    if (correct && picked) own(picked);
    // End of flow → modes
    setGame('modes'); setPicked(null); setRun({ id: Date.now(), qIndex: 0, progress: [false,false,false] });
  };

  // Render by state
  if (game === 'modes') return <ModesGrid onClassic={startClassic} />;
  if (game === 'interstitial') return <ResultInterstitial category={lastCategory} onDone={()=>setGame('question')} />;
  if (game === 'question') return <QuestionCard category={lastCategory} onContinue={onQuestionContinue} run={run} />;
  if (game === 'picker') return <CharacterPicker owned={owned} onSelect={onPickCharacter} onClose={()=>setGame('wheel')} />;
  if (game === 'bonus_inter') return <BonusInterstitial onDone={()=>setGame('bonus_q')} />;
  if (game === 'bonus_q') return <QuestionCard category={{ label: 'Bonus', color: '#6D28D9', icon: '🎁' }} onContinue={onBonusContinue} run={{ qIndex: 0 }} disableLifelines />;

  // Wheel as default
  return (
    <WheelClassic angle={angle} transition={transition} spinning={spinning} onSpin={onSpin} glowColor={glowColor} run={run} coins={coins} xp={xp} owned={owned} onBack={backToModes} />
  );
}
