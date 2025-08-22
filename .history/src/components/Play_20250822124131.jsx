// src/components/Play.jsx
// Classic mode end-to-end inside this file (no Quiz.jsx changes needed)
// Components included below:
// - TopChips (Coins, XP)
// - CharacterShelf (owned)
// - ProgressArc (3 segments hugging wheel)
// - ResultInterstitial (2s category card)
// - WheelClassic (spin logic + pointer)
// - QuestionCardClassic (list options, timer, 50:50 + Audience, motivator)
// - CharacterPicker (TINA, ALBERT, BONZO, POP, TITO, HECTOR with custom tags)
// - BonusInterstitial + BonusQuestionCard
//
// Notes:
// - Icons on slices use the same emoji-style placeholders you used on Home.jsx. Replace with your icon components if needed.
// - Question fetching is implemented with a resilient CSV loader. Adjust `CSV_PATHS` to match your repo. If none found, a friendly fallback toast asks to re-spin.
// - Sounds: uses simple <audio> elements for spin, ticks, correct, wrong, chime; add files under /public/sounds/ as per your project.
// - Respect prefers-reduced-motion.

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";

/* ------------------------------ Data ------------------------------ */
const CATEGORIES = [
  { label: "General Knowledge", slug: "general-knowledge", color: "#7C3AED", icon: "🧠", available: true },
  { label: "Current Affairs",   slug: "current-affairs",   color: "#2563EB", icon: "📰", available: true },
  { label: "Fun Facts",         slug: "fun-facts",         color: "#EF4444", icon: "🎉", available: true },
  { label: "Science",           slug: "science",           color: "#10B981", icon: "🧪", available: true },
  { label: "History",           slug: "history",           color: "#F59E0B", icon: "🏺", available: true },
  { label: "Geography",         slug: "geography",         color: "#FACC15", icon: "🌍", available: true },
];
const sliceAngle = 360 / CATEGORIES.length;

// Characters (names fixed; tag labels per your request)
const CHARACTERS = [
  { id: "TINA",   name: "TINA",   tag: "Fun Facts",       emoji: "🧁" },
  { id: "ALBERT", name: "ALBERT", tag: "Sports",          emoji: "🥇" },
  { id: "BONZO",  name: "BONZO",  tag: "Sports",          emoji: "🏈" },
  { id: "POP",    name: "POP",    tag: "Entertainment",   emoji: "🍿" },
  { id: "TITO",   name: "TITO",   tag: "Geography",       emoji: "🌎" },
  { id: "HECTOR", name: "HECTOR", tag: "History",         emoji: "🏰" },
];

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
const LS_XP    = "xp_total";
const LS_OWNED = "owned_characters";

/* --------------------------- Utilities --------------------------- */
const randomOf = (arr) => arr[Math.floor(Math.random() * arr.length)];
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

/* ------------------------------ Audio ---------------------------- */
function useAudio(url, { loop=false, volume=1 }={}) {
  const ref = useRef(null);
  useEffect(() => {
    const a = new Audio(url);
    a.loop = loop; a.volume = volume; ref.current = a;
    return () => { try { a.pause(); a.src = ""; } catch {} };
  }, [url, loop, volume]);
  return {
    play: () => { try { ref.current && ref.current.play(); } catch {} },
    stop: () => { try { ref.current && (ref.current.pause(), ref.current.currentTime = 0); } catch {} },
    ref,
  };
}

/* ------------------------------ Top chips ------------------------ */
function TopChips({ coins, xp }) {
  const Chip = ({ icon, value, label }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur">
      <span className="text-lg">{icon}</span>
      <div className="text-sm leading-4">
        <div className="font-semibold">{value}</div>
        <div className="text-[11px] text-white/70">{label}</div>
      </div>
    </div>
  );
  return (
    <div className="flex items-center justify-center gap-3 mt-2 mb-1">
      <Chip icon="🪙" value={coins} label="Coins" />
      <Chip icon="⚡" value={xp} label="XP" />
    </div>
  );
}

/* --------------------------- Character shelf --------------------- */
function CharacterShelf({ owned }) {
  if (!owned?.length) return null;
  return (
    <div className="flex items-center justify-center gap-2 mb-2">
      {owned.map((id) => {
        const c = CHARACTERS.find((x) => x.id === id);
        return (
          <div key={id} className="px-2 py-1 rounded-xl bg-white/8 border border-white/10 text-sm flex items-center gap-1">
            <span>{c?.emoji || "⭐"}</span>
            <span className="text-xs font-semibold">{c?.name}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------------------- Progress arc ----------------------- */
function ProgressArc({ value /* 0..3 */, animateKey }) {
  const segments = ["#F59E0B", "#FACC15", "#10B981"]; // orange → yellow → green
  // Draw a 180°-ish arc that hugs the wheel; tuned for container width ~320–380
  return (
    <svg width="100%" viewBox="0 0 260 62" className="mx-auto mb-2 block" aria-hidden>
      <path d="M20 42 A110 110 0 0 1 240 42" stroke="rgba(255,255,255,0.18)" strokeWidth="10" fill="none" strokeLinecap="round"/>
      {segments.map((color, i) => {
        const start = 20 + i * 73; // split arc roughly into thirds
        const end   = start + 63;
        const d = `M${start} 42 A110 110 0 0 1 ${end} 42`;
        const filled = value > i;
        return (
          <path key={`${i}-${animateKey}`} d={d} stroke={color} strokeWidth={filled ? 12 : 0} fill="none" strokeLinecap="round"
                className={filled ? "transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.22)]" : "transition-all"} />
        );
      })}
    </svg>
  );
}

/* ------------------------- Result interstitial ------------------- */
function ResultInterstitial({ open, category, onDone }) {
  const [show, setShow] = useState(open);
  useEffect(() => setShow(open), [open]);
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => { setShow(false); onDone?.(); }, 2000);
    return () => clearTimeout(t);
  }, [open, onDone]);
  if (!show || !category) return null;
  return (
    <div className="fixed inset-0 z-[140] grid place-items-center" style={{ background: category.color }}>
      <div className="absolute top-16 text-center text-white">
        <div className="text-3xl font-extrabold drop-shadow">{category.label}</div>
      </div>
      <div className="w-[260px] h-[260px] rounded-full bg-white grid place-items-center shadow-2xl">
        <div className="text-7xl" aria-hidden>{category.icon}</div>
      </div>
    </div>
  );
}

/* --------------------------- Audience graph ---------------------- */
function AudienceOverlay({ open, distribution, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[150] bg-black/60 grid place-items-center" onClick={onClose}>
      <div className="w-[90%] max-w-sm rounded-2xl bg-base-card border border-base-border p-4" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-semibold mb-3">Audience vote</h3>
        <div className="space-y-2">
          {distribution.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-6 text-sm font-semibold">{String.fromCharCode(65 + i)}</div>
              <div className="flex-1 h-3 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full" style={{ width: `${p}%`, background: "linear-gradient(90deg,#60A5FA,#34D399)" }} />
              </div>
              <div className="w-10 text-right text-sm">{p}%</div>
            </div>
          ))}
        </div>
        <button className="btn-primary w-full mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

/* --------------------------- Question card ----------------------- */
function QuestionCardClassic({ category, onComplete, sounds, lifelines, setLifelines }) {
  // Question loading (CSV) --------------------------------------------------
  const [q, setQ] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const CSV_PATHS = [
    (slug) => `/data/${slug}.csv`,
    (slug) => `/questions/${slug}.csv`,
    (slug) => `/csv/${slug}.csv`,
  ];

  const normaliseRow = (row) => {
    // Try common schemas
    const keys = Object.keys(row);
    const lower = (k) => k?.toString().toLowerCase();
    const get = (names) => {
      for (const n of names) {
        const k = keys.find((kk) => lower(kk) === n);
        if (k) return row[k];
      }
      return undefined;
    };
    const text = get(["question", "questions", "q", "text"]);
    const opts = [
      get(["option1", "a", "opt1"]) ?? row["A"],
      get(["option2", "b", "opt2"]) ?? row["B"],
      get(["option3", "c", "opt3"]) ?? row["C"],
      get(["option4", "d", "opt4"]) ?? row["D"],
    ].filter(Boolean);
    let correctIdx = undefined;
    const ans = get(["answer", "correct", "correctanswer", "ans"]);
    if (ans !== undefined) {
      const av = ans?.toString().trim();
      const map = { A:0, B:1, C:2, D:3 };
      if (map[av?.toUpperCase?.()]) correctIdx = map[av?.toUpperCase?.()];
      else {
        const idx = opts.findIndex((o) => (o+"").trim() === av);
        if (idx >= 0) correctIdx = idx;
      }
    }
    if (!text || opts.length < 4 || typeof correctIdx !== "number") return null;
    return { text, options: opts.slice(0,4), correctIndex: correctIdx };
  };

  useEffect(() => {
    let cancelled = false;
    async function loadOne() {
      setLoading(true); setError(""); setQ(null);
      for (const builder of CSV_PATHS) {
        const url = builder(category.slug);
        try {
          const parsed = await new Promise((resolve, reject) => {
            Papa.parse(url, {
              download: true,
              header: true,
              complete: (res) => resolve(res.data.filter(Boolean)),
              error: reject,
            });
          });
          // Pick one at random and normalise
          const shuffled = parsed.filter(Boolean);
          while (shuffled.length) {
            const cand = randomOf(shuffled);
            const norm = normaliseRow(cand);
            if (norm) { if (!cancelled) setQ(norm); break; }
          }
          if (q) break;
        } catch (e) { /* try next path */ }
      }
      if (!cancelled) setLoading(false);
      if (!q && !cancelled) setError("No question found. Try re-spinning.");
    }
    loadOne();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category?.slug]);

  // Timer -------------------------------------------------------------------
  const [timeLeft, setTimeLeft] = useState(30);
  useEffect(() => setTimeLeft(30), [category?.slug]);
  useEffect(() => {
    if (loading || !q) return;
    if (timeLeft <= 0) return;
    const t = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    if (timeLeft <= 10) sounds.tick?.play?.();
    return () => clearTimeout(t);
  }, [timeLeft, loading, q, sounds.tick]);

  // Interaction --------------------------------------------------------------
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [showAudience, setShowAudience] = useState(false);
  const [audienceDist, setAudienceDist] = useState([25,25,25,25]);
  const [elim, setElim] = useState([]); // indices removed by 50:50

  const use5050 = () => {
    if (lifelines.fifty) return;
    const wrong = [0,1,2,3].filter(i => i !== q.correctIndex);
    const out = wrong.sort(() => Math.random() - 0.5).slice(0,2);
    setElim(out);
    setLifelines((s) => ({ ...s, fifty: true }));
  };
  const useAudience = () => {
    if (lifelines.audience) return;
    const base = 40 + Math.floor(Math.random()*26); // 40-65 to the correct
    let remain = 100 - base;
    const p = [0,0,0,0];
    p[q.correctIndex] = base;
    const others = [0,1,2,3].filter(i => i !== q.correctIndex);
    const a = Math.floor(Math.random() * (remain+1)); remain -= a;
    const b = Math.floor(Math.random() * (remain+1)); remain -= b;
    const c = remain;
    p[others[0]] += a; p[others[1]] += b; p[others[2]] += c;
    setAudienceDist(p); setShowAudience(true);
    setLifelines((s) => ({ ...s, audience: true }));
  };

  const confirmAnswer = (idx) => {
    if (locked) return;
    setSelected(idx); setLocked(true);
    const correct = idx === q.correctIndex;
    (correct ? sounds.correct : sounds.wrong)?.play?.();
  };

  const motivator = useMemo(() => {
    if (!locked || selected == null) return "";
    return selected === q.correctIndex
      ? randomOf(["Sharp shot!","Boom! Nailed it.","Right on.","Clean hit."])
      : randomOf(["Close one—roll again.","Toughie—bank it & spin.","Learning unlocks wins."]);
  }, [locked, selected, q]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[145] bg-black/70 grid place-items-center">
        <div className="text-center">
          <div className="animate-pulse text-lg">Loading question…</div>
        </div>
      </div>
    );
  }
  if (error || !q) {
    return (
      <div className="fixed inset-0 z-[145] bg-black/70 grid place-items-center">
        <div className="p-5 rounded-2xl bg-base-card border border-base-border max-w-sm text-center">
          <div className="font-semibold mb-2">{error || "No question available"}</div>
          <button className="btn-primary w-full" onClick={() => onComplete({ correct:false, error:true })}>Re-spin</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[145] bg-black/80 overflow-y-auto">
      <div className="mx-auto max-w-md p-4 pt-[calc(env(safe-area-inset-top)+1rem)]">
        <div className="mb-3 flex items-center justify-between">
          <button className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/10" onClick={() => onComplete({ correct:false, abandon:true })}>← Back</button>
          <div className="text-sm px-3 py-1.5 rounded-xl bg-white/10 border border-white/10">
            <span className={`font-semibold ${timeLeft<=10? "text-red-400": ""}`}>⏱ {timeLeft}s</span>
          </div>
        </div>

        <div className="rounded-2xl p-4 border border-white/10 bg-white/5">
          <div className="text-base md:text-lg font-semibold mb-3">{q.text}</div>

          <ol className="space-y-2">
            {q.options.map((opt, i) => {
              const eliminated = elim.includes(i);
              const isSel = selected === i;
              const isCorrect = locked && i === q.correctIndex;
              const wrongSel = locked && isSel && !isCorrect;
              return (
                <li key={i}>
                  <button
                    disabled={locked || eliminated}
                    onClick={() => confirmAnswer(i)}
                    className={[
                      "w-full text-left px-3 py-2 rounded-xl border transition",
                      eliminated ? "opacity-40 cursor-not-allowed" : "",
                      !locked && !eliminated ? "bg-white/5 border-white/10 hover:bg-white/10" : "",
                      isCorrect ? "bg-emerald-600/25 border-emerald-400/40" : "",
                      wrongSel ? "bg-rose-600/25 border-rose-400/40" : "",
                    ].join(" ")}
                  >
                    <span className="mr-2 font-semibold text-white/80">{String.fromCharCode(65+i)}.</span>
                    {opt}
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Lifelines */}
          <div className="mt-4 flex items-center gap-2">
            <button disabled={lifelines.fifty} onClick={use5050}
              className={`px-3 py-1.5 rounded-xl border ${lifelines.fifty? "opacity-40 cursor-not-allowed" : "bg-white/5 hover:bg-white/10"}`}>50:50</button>
            <button disabled={lifelines.audience} onClick={useAudience}
              className={`px-3 py-1.5 rounded-xl border ${lifelines.audience? "opacity-40 cursor-not-allowed" : "bg-white/5 hover:bg-white/10"}`}>Audience</button>
          </div>

          {/* Feedback + Continue */}
          {locked && (
            <div className="mt-4">
              <div className="text-sm mb-3 text-white/90">{motivator}</div>
              <button className="btn-primary w-full" onClick={() => onComplete({ correct: selected === q.correctIndex })}>Continue</button>
            </div>
          )}
        </div>
      </div>

      <AudienceOverlay open={showAudience} distribution={audienceDist} onClose={() => setShowAudience(false)} />
    </div>
  );
}

/* ----------------------------- Character picker ------------------ */
function CharacterPicker({ open, owned, onPick, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[150] bg-black/70 overflow-y-auto" onClick={onClose}>
      <div className="mx-auto max-w-md p-5" onClick={(e)=>e.stopPropagation()}>
        <div className="rounded-3xl p-5 border border-white/10 bg-white/5">
          <div className="text-center mb-4">
            <div className="text-2xl font-extrabold">Choose a character</div>
            <div className="text-sm text-white/70">If you answer right, it's yours!</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {CHARACTERS.map((c) => (
              <button key={c.id} onClick={() => onPick(c)}
                className="rounded-2xl border border-white/10 bg-black/30 hover:bg-black/20 p-4 text-center">
                <div className="text-4xl mb-2">{c.emoji}</div>
                <div className="font-semibold">{c.name}</div>
                <div className="text-xs text-white/70">{c.tag}</div>
                {owned.includes(c.id) && <div className="mt-1 text-[10px] text-emerald-400">Owned</div>}
              </button>
            ))}
          </div>
          <button className="btn-ghost w-full mt-4" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

function BonusInterstitial({ open, onDone }) {
  useEffect(() => {
    if (!open) return; const t = setTimeout(() => onDone?.(), 2000); return () => clearTimeout(t);
  }, [open, onDone]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[160] grid place-items-center bg-[#6D28D9]">
      <div className="absolute top-16 text-center text-white">
        <div className="text-3xl font-extrabold">Bonus question</div>
      </div>
      <div className="w-[260px] h-[260px] rounded-full bg-white grid place-items-center shadow-2xl">
        <div className="text-6xl">🎁</div>
      </div>
    </div>
  );
}

/* ------------------------------ Wheel ---------------------------- */
function WheelClassic({ onSpinResult, spinning, setSpinning, soundOn, startSpinSound, stopSpinSound }) {
  const [angle, setAngle] = useState(0);
  const [transition, setTransition] = useState("none");
  const [glowColor, setGlowColor] = useState(null);

  const prefersReduced = useMemo(() => (typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false), []);

  const mod360 = (deg) => ((deg % 360) + 360) % 360;
  const normalizeDeg = (deg) => mod360(deg);

  const spin = () => {
    if (spinning) return;
    setGlowColor(null);
    setSpinning(true);
    startSpinSound();

    const index = Math.floor(Math.random() * CATEGORIES.length);
    const cat = CATEGORIES[index];

    const current = mod360(angle);
    const pointerAngle = 180; // pointer at bottom
    const centerOfSlice = index * sliceAngle + sliceAngle / 2;

    let deltaBase = normalizeDeg(centerOfSlice - current - pointerAngle);
    const jitter = (Math.random() - 0.5) * (sliceAngle * 0.5);
    const delta = FULL_TURNS * 360 + deltaBase + jitter;

    const overshootTarget = angle + delta + OVERSHOOT_DEG;
    setTransition(`transform ${prefersReduced ? 800 : DURATION_MAIN}ms ${EASE_MAIN}`);
    setAngle(overshootTarget);

    try { if (navigator.vibrate && !prefersReduced) navigator.vibrate([10, 40, 10]); } catch {}

    setTimeout(() => {
      setTransition(`transform ${prefersReduced ? 160 : DURATION_SETTLE}ms ${EASE_SETTLE}`);
      setAngle((prev) => prev - OVERSHOOT_DEG);
    }, prefersReduced ? 800 : DURATION_MAIN);

    setTimeout(() => {
      stopSpinSound(); setSpinning(false); setGlowColor(cat.color); setTimeout(() => setGlowColor(null), 600);
      onSpinResult({ cat, index });
    }, (prefersReduced ? 800 : DURATION_MAIN) + (prefersReduced ? 160 : DURATION_SETTLE) + 40);
  };

  // Idle auto-rotate
  useEffect(() => {
    if (spinning || prefersReduced) return;
    const t = setInterval(() => setAngle((a) => a + 0.5), 40); // slow
    return () => clearInterval(t);
  }, [spinning, prefersReduced]);

  const wheelSizeClass = "w-[320px] h-[320px] md:w-[380px] md:h-[380px]";

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${wheelSizeClass} rounded-full select-none`}>
        {glowColor && (
          <div className="pointer-events-none absolute -inset-2 rounded-full" style={{ boxShadow: `0 0 0 6px ${glowColor}33, 0 0 30px 8px ${glowColor}44` }} />
        )}

        <div className="absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform" style={{ transform: `rotate(${angle}deg)`, transition }} aria-label="Category wheel" role="group">
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
              const mid = start + sliceAngle / 2;
              return (
                <g key={cat.slug} opacity={cat.available ? 0.98 : 0.55}>
                  <path d={`M50,50 L${x1},${y1} A50,50 0 ${largeArc} 0 ${x2},${y2} Z`} fill={cat.color} stroke="rgba(255,255,255,0.14)" strokeWidth="0.6" />
                  <text x="50" y="50" fill="#ffffff" fontSize="8" fontWeight="700" dominantBaseline="middle" textAnchor="middle" transform={`rotate(${mid} 50 50) translate(20 0) rotate(${-mid} 50 50)`}>{cat.icon}</text>
                </g>
              );
            })}
            <circle cx="50" cy="50" r="9" fill="rgba(0,0,0,0.55)" stroke="white" strokeOpacity="0.25" />
          </svg>

          <button onClick={spin} disabled={spinning} className={["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold","transition active:scale-[0.98]", spinning ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-200"].join(" ")} aria-label="Spin the wheel">SPIN</button>
        </div>

        {/* Pointer */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 z-20 drop-shadow">
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 3 L21 21 L3 21 Z" fill="#ffffff"/></svg>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Main ---------------------------- */
export default function Play() {
  const navigate = useNavigate();

  // sounds
  const [soundOn, setSoundOn] = useState(() => localStorage.getItem(LS_SOUND) !== "0");
  useEffect(() => localStorage.setItem(LS_SOUND, soundOn ? "1" : "0"), [soundOn]);

  const spinSfx = useAudio("/sounds/spin.mp3", { loop:true, volume:0.7 });
  const correctSfx = useAudio("/sounds/correct.mp3", { volume:0.8 });
  const wrongSfx   = useAudio("/sounds/wrong.mp3",   { volume:0.8 });
  const tickSfx    = useAudio("/sounds/tick.mp3",    { volume:0.25 });
  const chimeSfx   = useAudio("/sounds/chime.mp3",   { volume:0.6 });

  const sounds = { correct: correctSfx, wrong: wrongSfx, tick: tickSfx, chime: chimeSfx };

  const startSpinSound = () => { if (soundOn) spinSfx.play(); };
  const stopSpinSound  = () => { spinSfx.stop(); };

  // coins & XP
  const [coins, setCoins] = useState(() => parseInt(localStorage.getItem(LS_COINS) || "0", 10));
  const [xp, setXp]       = useState(() => parseInt(localStorage.getItem(LS_XP)    || "0", 10));
  const addCoins = (n) => setCoins((c) => { const next = c + n; localStorage.setItem(LS_COINS, String(next)); return next; });
  const addXp = (n) => setXp((v) => { const next = v + n; localStorage.setItem(LS_XP, String(next)); return next; });

  // owned characters
  const [owned, setOwned] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_OWNED) || "[]"); } catch { return []; }
  });
  const own = (id) => setOwned((o) => { const next = Array.from(new Set([...o, id])); localStorage.setItem(LS_OWNED, JSON.stringify(next)); return next; });

  // run state
  const [progress, setProgress] = useState(0); // 0..3
  const [correctCount, setCorrectCount] = useState(0);
  const [animateKey, setAnimateKey] = useState(0); // force arc re-anim
  const [lifelines, setLifelines] = useState({ fifty:false, audience:false });

  // screen state
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null); // { cat, index }
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);

  // bonus flow
  const [showPicker, setShowPicker] = useState(false);
  const [pickedChar, setPickedChar] = useState(null);
  const [showBonusInterstitial, setShowBonusInterstitial] = useState(false);
  const [showBonusQuestion, setShowBonusQuestion] = useState(false);

  const resetRun = useCallback(() => {
    setProgress(0); setCorrectCount(0); setLifelines({ fifty:false, audience:false }); setAnimateKey((k)=>k+1);
  }, []);

  // Spin result handler → interstitial → question
  const onSpinResult = ({ cat }) => {
    setResult({ cat });
    setShowInterstitial(true);
    setTimeout(() => { setShowInterstitial(false); setShowQuestion(true); }, 1); // interstitial handles 2s itself; here just flip
  };

  // When a question completes
  const handleQuestionComplete = ({ correct }) => {
    setShowQuestion(false);
    // Fill arc + award coins/xp on wheel (spec)
    setTimeout(() => {
      setProgress((p) => {
        const next = clamp(p + 1, 0, 3);
        setAnimateKey((k)=>k+1);
        sounds.chime?.play?.();
        if (correct) { addCoins(5); addXp(1); setCorrectCount((c)=>c+1); }
        if (next >= 3) {
          // Run done
          if (correctCount + (correct?1:0) === 3) {
            // perfect → character picker
            setTimeout(() => setShowPicker(true), 300);
          } else {
            // back to modes (fallback: reset run and keep on Play)
            resetRun();
            // TODO: wire to your Modes Grid route when ready
            // navigate("/play/modes");
          }
        }
        return next;
      });
    }, 180); // small delay so user sees the wheel return
  };

  // Character picker → bonus question
  const onPickCharacter = (c) => {
    setPickedChar(c); setShowPicker(false); setShowBonusInterstitial(true);
    setTimeout(() => { setShowBonusInterstitial(false); setShowBonusQuestion(true); }, 10);
  };

  const onBonusComplete = ({ correct }) => {
    setShowBonusQuestion(false);
    if (correct && pickedChar) own(pickedChar.id);
    // End of flow → back to modes (fallback to Play home)
    resetRun(); setPickedChar(null);
    // navigate("/play/modes");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        {/* Header */}
        <header className="flex items-center justify-between mb-2">
          <button onClick={() => navigate("/")} className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition" aria-label="Back">←</button>
          <div className="text-center"><h1 className="text-2xl font-bold">Play</h1></div>
          <div className="flex items-center gap-2">
            <button onClick={() => localStorage.setItem(LS_SOUND, soundOn?"0":"1") || setSoundOn(!soundOn)} className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition" title={soundOn?"Sound on":"Sound off"}>{soundOn?"🔊":"🔇"}</button>
            <button onClick={() => alert("Classic: Spin → 3 questions. +5 coins per correct. Perfect 3/3 unlocks a character with a bonus question.")} className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">❔</button>
          </div>
        </header>

        {/* Chips & character shelf */}
        <TopChips coins={coins} xp={xp} />
        <CharacterShelf owned={owned} />

        {/* Progress arc (hugging wheel) */}
        <ProgressArc value={progress} animateKey={animateKey} />

        {/* Wheel */}
        <WheelClassic onSpinResult={onSpinResult} spinning={spinning} setSpinning={setSpinning} soundOn={soundOn} startSpinSound={startSpinSound} stopSpinSound={stopSpinSound} />

        {/* Legend chips */}
        <section className="mt-6">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {CATEGORIES.slice(0, 4).map((c) => (
              <span key={c.slug} className="px-2.5 py-1 rounded-full text-xs border border-white/10 bg-white/10">
                <span className="inline-block h-2 w-2 rounded-full mr-2 align-middle" style={{ background: c.color }} />
                {c.label}
              </span>
            ))}
            {CATEGORIES.length > 4 && (
              <button className="px-2.5 py-1 rounded-full text-xs border border-white/10 bg-white/10 hover:bg-white/20 transition">+ More</button>
            )}
          </div>
        </section>

        {/* Party Spin CTA (secondary) */}
        <div className="mt-6 flex justify-center">
          <button onClick={() => navigate("/play/party")} className="btn-primary opacity-90">👥 Party Spin (pass & play)</button>
        </div>
      </div>

      {/* Interstitial (result) */}
      <ResultInterstitial open={showInterstitial && !!result} category={result?.cat} onDone={() => { /* handled inside; see onSpinResult */ }} />

      {/* Question overlay */}
      {showQuestion && (
        <QuestionCardClassic category={result?.cat} onComplete={handleQuestionComplete} sounds={sounds} lifelines={lifelines} setLifelines={setLifelines} />
      )}

      {/* Character picker & bonus flow */}
      <CharacterPicker open={showPicker} owned={owned} onPick={onPickCharacter} onClose={() => setShowPicker(false)} />
      <BonusInterstitial open={showBonusInterstitial} onDone={() => {}} />
      {showBonusQuestion && (
        <QuestionCardClassic category={{ slug: "bonus", label: "Bonus", color: "#6D28D9", icon: "🎁" }} onComplete={onBonusComplete} sounds={sounds} lifelines={{ fifty:false, audience:false }} setLifelines={() => {}} />
      )}

      {/* Solid plate under bottom nav */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]" style={{ height: "calc(5.25rem + env(safe-area-inset-bottom))" }} aria-hidden />
    </div>
  );
}
