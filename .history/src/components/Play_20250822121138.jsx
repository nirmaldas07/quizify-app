// src/components/Play.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/* ------------------------------ Data ------------------------------ */
// Wheel categories (icons match Home.jsx emoji style)
const CATEGORIES = [
  { label: "General Knowledge", slug: "general-knowledge", color: "#7C3AED", icon: "🧠", available: true },
  { label: "Current Affairs",   slug: "current-affairs",   color: "#2563EB", icon: "📰", available: true },
  { label: "Fun Facts",         slug: "fun-facts",         color: "#EF4444", icon: "🎉", available: true },
  { label: "Science",           slug: "science",           color: "#10B981", icon: "🧪", available: true },
  { label: "History",           slug: "history",           color: "#F59E0B", icon: "🏺", available: true },
  { label: "Geography",         slug: "geography",         color: "#FACC15", icon: "🌍", available: true },
];
const LEGEND_PRIMARY_COUNT = 4;
const sliceAngle = 360 / CATEGORIES.length;

/* Characters: keep names, update the tag shown under name (for your picker screen) */
export const CHARACTERS = [
  { id: "TINA",   name: "TINA",   tag: "Fun Facts" },
  { id: "ALBERT", name: "ALBERT", tag: "Science"   }, // (kept Science; tweak if you add Sports later)
  { id: "BONZO",  name: "BONZO",  tag: "Sports"    }, // not a wheel category yet; only a label under the name
  { id: "POP",    name: "POP",    tag: "Entertainment" },
  { id: "TITO",   name: "TITO",   tag: "Geography" },
  { id: "HECTOR", name: "HECTOR", tag: "History"   },
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

/* ------------------------------ UI bits --------------------------- */

// Top chips (Coins & XP)
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
    <div className="flex items-center justify-center gap-3 mt-2 mb-3">
      <Chip icon="🪙" value={coins} label="Coins" />
      <Chip icon="⚡" value={xp} label="XP" />
    </div>
  );
}

// Progress arc (3 segments: orange → yellow → green)
function ProgressArc({ value /*0..3*/ }) {
  // simple SVG with 3 dashes along an arc
  const segments = [
    { color: "#F59E0B" }, // orange
    { color: "#FACC15" }, // yellow
    { color: "#10B981" }, // green
  ];
  return (
    <svg width="100%" viewBox="0 0 260 60" className="mx-auto mb-2 block">
      {/* background rail */}
      <path d="M20 40 A110 110 0 0 1 240 40" stroke="rgba(255,255,255,0.18)" strokeWidth="10" fill="none" strokeLinecap="round"/>
      {/* segments */}
      {segments.map((s, i) => {
        const start = 20 + i * 73; // approximate split of the arc
        const end   = start + 63;
        const d = `M${start} 40 A110 110 0 0 1 ${end} 40`;
        const filled = value > i;
        return (
          <path key={i}
            d={d}
            stroke={s.color}
            strokeWidth={filled ? 12 : 0}
            fill="none"
            strokeLinecap="round"
            className={filled ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all" : "transition-all"}
          />
        );
      })}
    </svg>
  );
}

// Fullscreen interstitial shown for ~2s with category tint & icon
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
    <div className="fixed inset-0 z-[140] grid place-items-center"
         style={{ background: category.color }}>
      <div className="absolute top-16 text-center text-white">
        <div className="text-3xl font-extrabold">{category.label}</div>
      </div>
      <div className="w-[260px] h-[260px] rounded-full bg-white grid place-items-center shadow-2xl">
        <div className="text-7xl">{category.icon}</div>
      </div>
    </div>
  );
}

/* ------------------------------ Main ------------------------------ */
export default function Play() {
  const navigate = useNavigate();
  const location = useLocation();

  /* sound */
  const [soundOn, setSoundOn] = useState(() => localStorage.getItem(LS_SOUND) !== "0");
  useEffect(() => localStorage.setItem(LS_SOUND, soundOn ? "1" : "0"), [soundOn]);
  const spinAudioRef = useRef(null);
  useEffect(() => {
    const audio = new Audio("/sounds/spin.mp3");
    audio.loop = true;
    audio.volume = 0.7;
    spinAudioRef.current = audio;
    return () => { try { audio.pause(); audio.src = ""; } catch {} };
  }, []);
  const startSpinSound = () => { if (!soundOn) return; try { spinAudioRef.current.currentTime = 0; spinAudioRef.current.play(); } catch {} };
  const stopSpinSound  = () => { try { spinAudioRef.current.pause(); spinAudioRef.current.currentTime = 0; } catch {} };

  /* coins & XP (top chips) */
  const [coins, setCoins] = useState(() => parseInt(localStorage.getItem(LS_COINS) || "0", 10));
  const [xp, setXp]       = useState(() => parseInt(localStorage.getItem(LS_XP)    || "0", 10));
  const addCoins = (n) => {
    setCoins((c) => {
      const next = c + n;
      localStorage.setItem(LS_COINS, String(next));
      return next;
    });
  };
  const addXp = (n) => {
    setXp((v) => {
      const next = v + n;
      localStorage.setItem(LS_XP, String(next));
      return next;
    });
  };

  /* wheel state */
  const [angle, setAngle] = useState(0);
  const [transition, setTransition] = useState("none");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null); // { cat, index }
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [glowColor, setGlowColor] = useState(null);

  /* progress (3 segments) */
  const [progress, setProgress] = useState(0); // 0..3

  /* reduced motion */
  const prefersReduced = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false),
    []
  );

  /* Cleanup timers */
  const tRef = useRef({ a: 0, b: 0, c: 0 });
  useEffect(() => () => {
    stopSpinSound();
    Object.values(tRef.current).forEach((id) => id && clearTimeout(id));
  }, []);

  /* Award coming back from Quiz: expect state.playSegment = { correct: boolean } */
  useEffect(() => {
    const seg = location.state?.playSegment;
    if (!seg) return;
    // Fill next segment
    setProgress((p) => Math.min(3, p + 1));
    if (seg.correct) addCoins(5);
    // optional: small XP drip
    addXp(1);
    // clear the state so it doesn't repeat on refresh/back
    navigate(location.pathname, { replace: true, state: {} });
  }, [location.state, navigate, location.pathname]);

  /* Helpers */
  const mod360 = (deg) => ((deg % 360) + 360) % 360;
  const normalizeDeg = (deg) => mod360(deg); // [0,360)

  const spin = () => {
    if (spinning) return;
    setShowInterstitial(false);
    setResult(null);
    setGlowColor(null);
    setSpinning(true);
    startSpinSound();

    // choose slice
    const index = Math.floor(Math.random() * CATEGORIES.length);
    const cat = CATEGORIES[index];

    // current visual angle (clockwise rotation), pointer sits at bottom (180deg)
    const current = mod360(angle);
    const pointerAngle = 180;
    const centerOfSlice = index * sliceAngle + sliceAngle / 2;

    let deltaBase = normalizeDeg(centerOfSlice - current - pointerAngle);
    const jitter = (Math.random() - 0.5) * (sliceAngle * 0.5);
    const delta = FULL_TURNS * 360 + deltaBase + jitter;

    // stage 1: spin + overshoot
    const overshootTarget = angle + delta + OVERSHOOT_DEG;
    setTransition(`transform ${prefersReduced ? 800 : DURATION_MAIN}ms ${EASE_MAIN}`);
    setAngle(overshootTarget);

    try { if (navigator.vibrate && !prefersReduced) navigator.vibrate([10, 40, 10]); } catch {}

    // stage 2: settle back
    tRef.current.a = setTimeout(() => {
      setTransition(`transform ${prefersReduced ? 160 : DURATION_SETTLE}ms ${EASE_SETTLE}`);
      setAngle((prev) => prev - OVERSHOOT_DEG);
    }, prefersReduced ? 800 : DURATION_MAIN);

    // reveal result -> interstitial
    tRef.current.b = setTimeout(() => {
      stopSpinSound();
      setSpinning(false);
      setResult({ cat, index });
      setGlowColor(cat.color);
      // brief callout glow off
      tRef.current.c = setTimeout(() => setGlowColor(null), 600);
      // show 2s interstitial, then go to quiz
      setShowInterstitial(true);
    }, (prefersReduced ? 800 : DURATION_MAIN) + (prefersReduced ? 160 : DURATION_SETTLE) + 40);
  };

  // Navigate to Quiz after interstitial
  const goStart = () => {
    if (!result?.cat?.available) return;
    navigate(`/quiz/${result.cat.slug}`, {
      state: {
        from: "/play",
        fromWheel: true,
        singleQuestion: true,  // serve one question
        mode: "quiz",
        // Difficulty is mixed on Quiz side; no control here
      },
    });
  };

  const wheelSizeClass = "w-[320px] h-[320px] md:w-[380px] md:h-[380px]";

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        {/* Header */}
        <header className="flex items-center justify-between mb-2">
          <button
            onClick={() => navigate("/")}
            className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Back to home"
          >
            ←
          </button>

          <div className="text-center">
            <h1 className="text-2xl font-bold">Play</h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundOn((s) => !s)}
              className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label={soundOn ? "Mute sound" : "Unmute sound"}
              title={soundOn ? "Sound on" : "Sound off"}
            >
              {/* tiny sound glyph */}
              <span className="text-lg">{soundOn ? "🔊" : "🔇"}</span>
            </button>
            <button
              onClick={() => alert("Spin the wheel. Get 3 questions per run. Each correct = +5 coins.")}
              className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="How this works"
              title="How this works"
            >
              ❔
            </button>
          </div>
        </header>

        {/* Top chips (Coins, XP) */}
        <TopChips coins={coins} xp={xp} />

        {/* Progress arc above the wheel */}
        <ProgressArc value={progress} />

        {/* Wheel */}
        <section className="flex flex-col items-center">
          <div className={`relative ${wheelSizeClass} rounded-full select-none`}>
            {/* brief glow ring on result */}
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
                  const mid = start + sliceAngle / 2;
                  return (
                    <g key={cat.slug} opacity={cat.available ? 0.98 : 0.55}>
                      <path
                        d={`M50,50 L${x1},${y1} A50,50 0 ${largeArc} 0 ${x2},${y2} Z`}
                        fill={cat.color}
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="0.6"
                      />
                      {/* Icon only */}
                      <text
                        x="50"
                        y="50"
                        fill="#ffffff"
                        fontSize="8"
                        fontWeight="700"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        transform={`rotate(${mid} 50 50) translate(20 0) rotate(${-mid} 50 50)`}
                      >
                        {cat.icon}
                      </text>
                    </g>
                  );
                })}
                {/* hub */}
                <circle cx="50" cy="50" r="9" fill="rgba(0,0,0,0.55)" stroke="white" strokeOpacity="0.25" />
              </svg>

              {/* Center puck */}
              <button
                onClick={spin}
                disabled={spinning}
                className={[
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "h-16 w-16 rounded-full grid place-items-center",
                  "bg-white text-black font-extrabold",
                  "transition active:scale-[0.98]",
                  spinning ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-200",
                ].join(" ")}
                aria-label="Spin the wheel"
              >
                SPIN
              </button>
            </div>

            {/* Pointer at bottom */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 z-20">
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M12 4 L20 20 L4 20 Z" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </section>

        {/* Legend chips */}
        <section className="mt-6">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {CATEGORIES.slice(0, LEGEND_PRIMARY_COUNT).map((c) => (
              <span key={c.slug} className="px-2.5 py-1 rounded-full text-xs border border-white/10 bg-white/10">
                <span className="inline-block h-2 w-2 rounded-full mr-2 align-middle" style={{ background: c.color }} />
                {c.label}
              </span>
            ))}
            {CATEGORIES.length > LEGEND_PRIMARY_COUNT && (
              <button className="px-2.5 py-1 rounded-full text-xs border border-white/10 bg-white/10 hover:bg-white/20 transition">
                + More
              </button>
            )}
          </div>
        </section>

        {/* Party Spin CTA (unchanged; wire later) */}
        <div className="mt-6 flex justify-center">
          <button onClick={() => navigate("/play/party")} className="btn-primary">
            👥 Party Spin (pass & play)
          </button>
        </div>
      </div>

      {/* 2s interstitial; when it finishes, we go to Quiz */}
      <ResultInterstitial
        open={showInterstitial && !!result}
        category={result?.cat}
        onDone={goStart}
      />

      {/* Solid plate under bottom nav */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]"
        style={{ height: "calc(5.25rem + env(safe-area-inset-bottom))" }}
        aria-hidden
      />
    </div>
  );
}
