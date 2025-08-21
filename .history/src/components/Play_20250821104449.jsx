// src/components/Play.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/* ------------------------------ Data ------------------------------ */
const CATEGORIES = [
  { label: "General Knowledge", slug: "general-knowledge", color: "#7C3AED", available: true },
  { label: "Current Affairs",   slug: "current-affairs",   color: "#2563EB", available: true },
  { label: "Fun Facts",         slug: "fun-facts",         color: "#EF4444", available: true },
  { label: "Science",           slug: "science",           color: "#10B981", available: true },
  { label: "History",           slug: "history",           color: "#F59E0B", available: false },
  { label: "Geography",         slug: "geography",         color: "#FACC15", available: false },
];
const LEGEND_PRIMARY_COUNT = 4;
const sliceAngle = 360 / CATEGORIES.length;

/* ----------------------------- Motion ----------------------------- */
const FULL_TURNS = 42;
const DURATION_MAIN = 3000;
const OVERSHOOT_DEG = 10;
const DURATION_SETTLE = 260;
const EASE_MAIN = "cubic-bezier(.15,.7,.1,1)";
const EASE_SETTLE = "cubic-bezier(.2,.7,.2,1)";

/* --------------------------- LocalStorage ------------------------- */
const LS_DIFF = "play_difficulty";
const LS_SOUND = "play_sound_on";

/* ------------------------------ UI bits --------------------------- */
/** Bottom sheet used by Play (result + “More”).
 * Minimal fixes:
 *  - Outside-dismiss moved to onMouseDown to avoid “blink” close.
 *  - Sheet has max-h + overflow so content scrolls and CTA is reachable.
 *  - Safe-area bottom space; high z-index over bottom nav.
 */
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
      // use mousedown so the click that OPENS the sheet doesn't immediately close it
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className="w-full max-w-md rounded-t-3xl bg-base-card border border-base-border p-5 pt-4
                   max-h-[85vh] overflow-y-auto
                   pb-[calc(16px+env(safe-area-inset-bottom))]"
        // stop the same mousedown from bubbling to the backdrop
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/15" />
        {children}
      </div>
    </div>
  );
}

function Segmented({ value, onChange }) {
  const items = ["easy", "medium", "hard"];
  return (
    <div
      className="mx-auto mt-8 w-[280px] h-10 grid grid-cols-3 rounded-xl bg-white/10 border border-white/10 overflow-hidden"
      role="tablist"
      aria-label="Select difficulty"
    >
      {items.map((d) => {
        const active = value === d;
        return (
          <button
            key={d}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(d)}
            className={[
              "text-sm capitalize transition",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
              active ? "bg-white/15 text-white font-semibold" : "text-base-muted hover:text-white hover:bg-white/10",
            ].join(" ")}
          >
            {d}
          </button>
        );
      })}
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
    return () => {
      try {
        audio.pause();
        audio.src = "";
      } catch {}
    };
  }, []);
  const startSpinSound = () => {
    if (!soundOn) return;
    const a = spinAudioRef.current;
    try {
      a.currentTime = 0;
      a.play();
    } catch {}
  };
  const stopSpinSound = () => {
    const a = spinAudioRef.current;
    try {
      a.pause();
      a.currentTime = 0;
    } catch {}
  };

  /* difficulty */
  const [difficulty, setDifficulty] = useState(() => localStorage.getItem(LS_DIFF) || "easy");
  useEffect(() => localStorage.setItem(LS_DIFF, difficulty), [difficulty]);

  /* wheel state */
  const [angle, setAngle] = useState(0);
  const [transition, setTransition] = useState("none");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null); // { cat, index }
  const [showCallout, setShowCallout] = useState(false);
  const [glowColor, setGlowColor] = useState(null);

  const prefersReduced = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false),
    []
  );

  /* legend more */
  const [showMore, setShowMore] = useState(false);

  /* cleanup timers */
  const tRef = useRef({ a: 0, b: 0, c: 0 });
  useEffect(() => {
    return () => {
      stopSpinSound();
      Object.values(tRef.current).forEach((id) => id && clearTimeout(id));
    };
  }, []);

  /* auto-respin on return */
  useEffect(() => {
    if (location.state?.autoReturn) spin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  /* helpers */
  const mod360 = (deg) => ((deg % 360) + 360) % 360;
  const normalizeDeg = (deg) => mod360(deg); // [0,360)

  const spin = () => {
    if (spinning) return;
    setResult(null);
    setShowCallout(false);
    setGlowColor(null);
    setSpinning(true);
    startSpinSound();

    // choose slice
    const index = Math.floor(Math.random() * CATEGORIES.length);
    const cat = CATEGORIES[index];

    // account for current visual angle (clockwise rotation)
    const current = mod360(angle);
    const pointerAngle = 180; // pointer sits at bottom
    const centerOfSlice = index * sliceAngle + sliceAngle / 2;

    let deltaBase = normalizeDeg(centerOfSlice - current - pointerAngle);
    const jitter = (Math.random() - 0.5) * (sliceAngle * 0.5);
    const delta = FULL_TURNS * 360 + deltaBase + jitter;

    // stage 1: main spin to slight overshoot
    const overshootTarget = angle + delta + OVERSHOOT_DEG;
    setTransition(`transform ${prefersReduced ? 800 : DURATION_MAIN}ms ${EASE_MAIN}`);
    setAngle(overshootTarget);

    try {
      if (navigator.vibrate && !prefersReduced) navigator.vibrate([10, 40, 10]);
    } catch {}

    // stage 2: settle back to exact target
    tRef.current.a = setTimeout(() => {
      setTransition(`transform ${prefersReduced ? 160 : DURATION_SETTLE}ms ${EASE_SETTLE}`);
      setAngle((prev) => prev - OVERSHOOT_DEG);
    }, prefersReduced ? 800 : DURATION_MAIN);

    // reveal result + quick highlight
    tRef.current.b = setTimeout(() => {
      stopSpinSound();
      setSpinning(false);
      setResult({ cat, index });
      setGlowColor(cat.color);
      setShowCallout(true);
      tRef.current.c = setTimeout(() => setShowCallout(false), 900);
      setTimeout(() => setGlowColor(null), 700);
    }, (prefersReduced ? 800 : DURATION_MAIN) + (prefersReduced ? 160 : DURATION_SETTLE) + 40);
  };

  const goStart = () => {
    if (!result?.cat?.available) return;
    navigate(`/quiz/${result.cat.slug}`, {
      state: {
        from: "/play",
        fromWheel: true,
        singleQuestion: true,
        category: result.cat.slug,
        difficulty,
        mode: "quiz",
      },
    });
  };

  const wheelSizeClass = "w-[320px] h-[320px] md:w-[380px] md:h-[380px]";

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/")}
            className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Back to home"
          >
            ←
          </button>

          <div className="text-center">
            <h1 className="text-2xl font-bold">Play</h1>
            <p className="text-sm text-base-muted">Spin for 1 quick question • Earn 5 coins</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundOn((s) => !s)}
              className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label={soundOn ? "Mute sound" : "Unmute sound"}
              title={soundOn ? "Sound on" : "Sound off"}
            >
              <SoundIcon muted={!soundOn} />
            </button>
            <button
              onClick={() =>
                alert("Spin to get a random category.\nPick difficulty.\nAnswer 1 quick question to earn coins.")
              }
              className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="How this works"
              title="How this works"
            >
              ❔
            </button>
          </div>
        </header>

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
                  return (
                    <g key={cat.slug} opacity={cat.available ? 0.95 : 0.55}>
                      <path
                        d={`M50,50 L${x1},${y1} A50,50 0 ${largeArc} 0 ${x2},${y2} Z`}
                        fill={cat.color}
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="0.6"
                      />
                      <text
                        x="50"
                        y="50"
                        fill="#ffffff"
                        fontSize="4"
                        fontWeight="700"
                        dominantBaseline="middle"
                        transform={`rotate(${start + sliceAngle / 2} 50 50) translate(12 0)`}
                      >
                        <tspan>{cat.label}</tspan>
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

            {/* Pointer */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 z-20">
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M12 4 L20 20 L4 20 Z" fill="#ffffff" />
              </svg>
            </div>

            {/* Result callout chip (brief) */}
            {showCallout && result && (
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle"
                    style={{ background: result.cat.color }}
                  />
                  {result.cat.label}
                </div>
              </div>
            )}
          </div>

          {/* Difficulty selector (moved down for pointer space) */}
          <Segmented value={difficulty} onChange={setDifficulty} />
        </section>

        {/* Legend chips */}
        <section className="mt-7">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {CATEGORIES.slice(0, LEGEND_PRIMARY_COUNT).map((c) => (
              <span
                key={c.slug}
                className="px-2.5 py-1 rounded-full text-xs border border-white/10 bg-white/10"
                title={c.available ? "" : "Coming soon"}
              >
                <span
                  className="inline-block h-2 w-2 rounded-full mr-2 align-middle"
                  style={{ background: c.color, opacity: c.available ? 1 : 0.5 }}
                />
                {c.label}
                {!c.available && " (soon)"}
              </span>
            ))}
            {CATEGORIES.length > LEGEND_PRIMARY_COUNT && (
              <button
                onClick={() => setShowMore(true)}
                className="px-2.5 py-1 rounded-full text-xs border border-white/10 bg-white/10 hover:bg-white/20 transition"
              >
                + More
              </button>
            )}
          </div>
        </section>

        {/* Party Spin CTA */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/play/party")}
            className="btn-primary"
          >
            👥 Party Spin (pass & play)
          </button>
        </div>
      </div>

      {/* Result sheet */}
      <Sheet open={!!result} onClose={() => setResult(null)}>
        {result && (
          <>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="inline-block h-5 w-5 rounded-full"
                style={{ background: result.cat.color, opacity: result.cat.available ? 1 : 0.6 }}
              />
              <h3 className="text-lg font-semibold">{result.cat.label}</h3>
            </div>

            {!result.cat.available ? (
              <p className="text-sm text-base-muted mb-4">This category is arriving soon. Try another spin!</p>
            ) : (
              <p className="text-sm text-base-muted mb-4">Answer 1 quick question • +5 coins</p>
            )}

            <div className="flex items-center gap-3">
              {result.cat.available ? (
                <>
                  <button className="btn-primary flex-1" onClick={goStart}>
                    Start
                  </button>
                  <button className="btn-ghost flex-1" onClick={spin}>
                    Re-spin
                  </button>
                </>
              ) : (
                <button className="btn-primary w-full" onClick={spin}>
                  Spin again
                </button>
              )}
            </div>
          </>
        )}
      </Sheet>

      {/* Legend “More” sheet */}
      <Sheet open={showMore} onClose={() => setShowMore(false)}>
        <h3 className="text-lg font-semibold mb-3">All categories</h3>
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.slice(LEGEND_PRIMARY_COUNT).map((c) => (
            <div
              key={c.slug}
              className="rounded-xl border border-base-border bg-white/5 p-3 text-sm"
              title={c.available ? "" : "Coming soon"}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ background: c.color, opacity: c.available ? 1 : 0.5 }}
                />
                <span>
                  {c.label}
                  {!c.available && " (soon)"}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-primary w-full mt-4" onClick={() => setShowMore(false)}>
          Close
        </button>
      </Sheet>

      {/* Solid plate under bottom nav so content never shows behind it */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]"
        style={{ height: "calc(5.25rem + env(safe-area-inset-bottom))" }}
        aria-hidden
      />
    </div>
  );
}
