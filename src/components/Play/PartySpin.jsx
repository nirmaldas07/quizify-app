// src/components/PartySpin.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import Confetti from "react-confetti";
import useSound from "use-sound";

/* ----------------------------- Categories ----------------------------- */
const CATEGORIES = [
  { label: "General Knowledge", slug: "general-knowledge", color: "#7C3AED", soon: false },
  { label: "Current Affairs",   slug: "current-affairs",   color: "#2563EB", soon: false },
  { label: "Fun Facts",         slug: "fun-facts",         color: "#EF4444", soon: false },
  { label: "Science",           slug: "science",           color: "#10B981", soon: false },
  { label: "History",           slug: "history",           color: "#F59E0B", soon: true  },
  { label: "Geography",         slug: "geography",         color: "#FACC15", soon: true  },
  { label: "Cat 1",             slug: "cat-1",             color: "#06B6D4", soon: true  },
  { label: "Cat 2",             slug: "cat-2",             color: "#D946EF", soon: true  },
];
const sliceAngle = 360 / CATEGORIES.length;

/* ------------------------------ Motion -------------------------------- */
const FULL_TURNS = 42;
const DURATION_MAIN = 3000;
const OVERSHOOT_DEG = 10;
const DURATION_SETTLE = 260;
const EASE_MAIN = "cubic-bezier(.15,.7,.1,1)";
const EASE_SETTLE = "cubic-bezier(.2,.7,.2,1)";

/* --------------------------- Match Config ----------------------------- */
const ROUNDS = 5;
const COINS_PER_CORRECT = 5;

/* ------------------------------ Utils --------------------------------- */
const toSlug = (s = "") =>
  String(s).toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

function SoundIcon({ muted = false, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 9h4l5-4v14l-5-4H3z" fill="currentColor" />
      {!muted && (
        <>
          <path d="M16 8c1.5 1.5 1.5 6 0 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M19 6c3 3 3 10 0 13"  stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </>
      )}
      {muted && <line x1="3" y1="21" x2="21" y2="3" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />}
    </svg>
  );
}

/* --------------------------- Question Card ---------------------------- */
function QuestionCard({ q, locked, onPick, result }) {
  if (!q) return null;
  const options = [q.option1, q.option2, q.option3, q.option4];
  return (
    <div className="mt-5 rounded-3xl bg-white/5 border border-white/10 p-4">
      <div className="text-sm text-base-muted mb-1">Quick question</div>
      <div className="text-xl font-semibold mb-4">{q.question}</div>

      {options.map((opt, i) => {
        const isCorrect = result && opt === q.answer;
        const isWrong   = result && result.pick === opt && opt !== q.answer;
        return (
          <button
            key={i}
            disabled={locked || !!result}
            onClick={() => onPick(opt)}
            className={[
              "w-full text-left px-4 py-2 rounded-xl mb-2 border transition",
              !result && !locked ? "bg-white/5 hover:bg-white/10 border-white/10" : "bg-white/5 border-white/10",
              isCorrect ? "bg-green-600/20 border-green-400/60 text-green-200" : "",
              isWrong   ? "bg-red-600/20 border-red-400/60 text-red-200"     : "",
            ].join(" ")}
          >
            {opt}
          </button>
        );
      })}

      {result && (
        <div className="mt-3 text-sm">
          {result.correct ? (
            <span className="text-green-400 font-medium">✅ Correct!</span>
          ) : (
            <span className="text-red-400 font-medium">
              ❌ Not quite. Answer: <b>{q.answer}</b>
            </span>
          )}
          {q.explanation && (
            <div className="text-xs text-base-muted mt-1">Tip: {q.explanation}</div>
          )}
        </div>
      )}
    </div>
  );
}

/* =============================== Party Spin =============================== */
export default function PartySpin() {
  const navigate = useNavigate();

  // ✅ Hooks belong inside the component
  const [playCorrect] = useSound("/sounds/correct.mp3", { volume: 0.7 });
  const [playWrong]   = useSound("/sounds/wrong.mp3",   { volume: 0.7 });

  /* players — scores start as null (not played), 0 = wrong, 5 = correct */
  const [players, setPlayers] = useState(() => [
    { name: "Player 1", color: "#60A5FA", scores: Array(ROUNDS).fill(null) },
    { name: "Player 2", color: "#F472B6", scores: Array(ROUNDS).fill(null) },
  ]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [round, setRound] = useState(1);         // 1..ROUNDS
  const pot = players.reduce(
    (acc, p) => acc + p.scores.reduce((a, b) => a + (b ?? 0), 0),
    0
  );

  /* sounds & haptics */
  const [soundOn, setSoundOn] = useState(true);
  const spinAudioRef = useRef(null);
  useEffect(() => {
    const a = new Audio("/sounds/spin.mp3");
    a.loop = true; a.volume = 0.7; spinAudioRef.current = a;
    return () => { try { a.pause(); a.src = ""; } catch {} };
  }, []);
  const startSpinSound = () => { if (soundOn && spinAudioRef.current) { try { spinAudioRef.current.currentTime = 0; spinAudioRef.current.play(); } catch {} } };
  const stopSpinSound  = () => { if (spinAudioRef.current) { try { spinAudioRef.current.pause(); spinAudioRef.current.currentTime = 0; } catch {} } };

  /* wheel */
  const [angle, setAngle] = useState(0);
  const [transition, setTransition] = useState("none");
  const [spinning, setSpinning] = useState(false);
  const [resultIdx, setResultIdx] = useState(null);
  const [glowColor, setGlowColor] = useState(null);
  const prefersReduced = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false),
    []
  );

  /* questions */
  const [bank, setBank] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const csv = await fetch("/data/quiz_questions_bank.csv").then(r => r.text());
        const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true, transformHeader: h => String(h).trim().toLowerCase() });

        const abc = { a:0, b:1, c:2, d:3 };
        const cleaned = data.map((r, idx) => {
          const q = (r.question ?? "").trim();
          if (!q) return null;
          const opts = [r.option1, r.option2, r.option3, r.option4].map(v => String(v ?? "").trim());
          if (opts.some(o => !o)) return null;

          // normalize answer as TEXT of the correct option
          let ansRaw = String(r.answer ?? "").trim();
          let ansIdx = abc[ansRaw.toLowerCase()];
          if (ansIdx === undefined) {
            const fi = opts.findIndex(o => o.toLowerCase() === ansRaw.toLowerCase());
            ansIdx = fi >= 0 ? fi : 0;
          }
          const answerText = opts[ansIdx];

          return {
            id: r.id?.trim() || `ps_${idx}`,
            question: q,
            option1: opts[0], option2: opts[1], option3: opts[2], option4: opts[3],
            answer: answerText,
            explanation: String(r.explanation ?? "").trim(),
            catSlug: toSlug(r.category ?? r.subject ?? "general knowledge"),
            difficulty: String(r.difficulty ?? "medium").toLowerCase().trim(),
          };
        }).filter(Boolean);

        setBank(cleaned);
      } catch {
        setBank([]);
      }
    })();
  }, []);

  const [question, setQuestion] = useState(null);
  const [answerResult, setAnswerResult] = useState(null); // { correct, pick }
  const [showConfetti, setShowConfetti] = useState(false);

  /* helpers */
  const mod360 = (deg) => ((deg % 360) + 360) % 360;
  const normalizeDeg = (deg) => mod360(deg);
  const wheelSizeClass = "w-[320px] h-[320px] md:w-[380px] md:h-[380px]";
  const matchOver = round > ROUNDS;

  function addPlayer() {
    if (players.length >= 4) return;
    const palette = ["#60A5FA", "#F472B6", "#F59E0B", "#34D399", "#F87171", "#A78BFA"];
    const color = palette[(players.length * 2 + 1) % palette.length];
    setPlayers((ps) => [...ps, { name: `Player ${ps.length + 1}`, color, scores: Array(ROUNDS).fill(null) }]);
  }
  function removePlayer() {
    if (players.length <= 2) return;
    setPlayers((ps) => ps.slice(0, -1));
    setCurrentIdx((i) => Math.min(i, players.length - 2));
  }
  function setScoreForCurrentPlayer(value) {
    setPlayers((ps) =>
      ps.map((p, i) =>
        i === currentIdx
          ? { ...p, scores: p.scores.map((s, idx) => (idx === round - 1 ? value : s)) }
          : p
      )
    );
  }

  /* spin logic — pointer/result alignment guaranteed */
  function spin() {
    if (spinning || matchOver) return;

    // reset round UI
    setResultIdx(null);
    setGlowColor(null);
    setQuestion(null);
    setAnswerResult(null);

    setSpinning(true);
    startSpinSound();

    // choose slice
    const index = Math.floor(Math.random() * CATEGORIES.length);
    const cat = CATEGORIES[index];

    // Jitter stays inside the slice (never crosses border)
    const jitterRange = sliceAngle * 0.28;
    const offset = (Math.random() * 2 - 1) * jitterRange;

    // account for current clockwise rotation so chosen (center+offset) lands under pointer (180°)
    const current = mod360(angle);
    const pointerAngle = 180;
    const centerOfSlice = index * sliceAngle + sliceAngle / 2;
    const targetWithinSlice = centerOfSlice + offset;
    let deltaBase = normalizeDeg(targetWithinSlice - current - pointerAngle);
    const delta = FULL_TURNS * 360 + deltaBase;

    // stage 1
    const overshootTarget = angle + delta + OVERSHOOT_DEG;
    setTransition(`transform ${prefersReduced ? 800 : DURATION_MAIN}ms ${EASE_MAIN}`);
    setAngle(overshootTarget);

    try { if (navigator.vibrate && !prefersReduced) navigator.vibrate([10, 40, 10]); } catch {}

    // stage 2 settle
    setTimeout(() => {
      setTransition(`transform ${prefersReduced ? 160 : DURATION_SETTLE}ms ${EASE_SETTLE}`);
      setAngle((prev) => prev - OVERSHOOT_DEG);
    }, prefersReduced ? 800 : DURATION_MAIN);

    // reveal
    setTimeout(() => {
      stopSpinSound();
      setSpinning(false);
      setResultIdx(index);
      setGlowColor(cat.color);

      if (cat.soon) return; // show re-spin card

      // pull a question for this category (match on slug), bias to easy
      const pool = bank.filter((q) => q.catSlug === cat.slug && q.difficulty === "easy");
      const list = pool.length ? pool : bank.filter((q) => q.catSlug === cat.slug);
      if (list.length) {
        const q = list[Math.floor(Math.random() * list.length)];
        setQuestion(q);
      } else {
        // no question available — show gentle fallback
        setQuestion({
          question: "No question found for this category yet. Try re-spinning!",
          option1: "Okay", option2: "Okay", option3: "Okay", option4: "Okay",
          answer: "Okay", explanation: "",
        });
      }
    }, (prefersReduced ? 800 : DURATION_MAIN) + (prefersReduced ? 160 : DURATION_SETTLE) + 40);
  }

  /* when a player picks an option */
  function handlePick(opt) {
    if (!question || answerResult) return;
    const correct = opt === question.answer;
    setAnswerResult({ correct, pick: opt });

    if (correct) {
      playCorrect();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 900);
      try { if (navigator.vibrate) navigator.vibrate([8, 16]); } catch {}
      setScoreForCurrentPlayer(COINS_PER_CORRECT);
    } else {
      playWrong();
      try { if (navigator.vibrate) navigator.vibrate([4]); } catch {}
      setScoreForCurrentPlayer(0);           // wrong = 0
    }
  }

  /* proceed to the next turn */
  function nextTurn() {
    const nextIdx = (currentIdx + 1) % players.length;
    const nextRound = nextIdx === 0 ? round + 1 : round;
    setCurrentIdx(nextIdx);
    setRound(nextRound);
    setResultIdx(null);
    setGlowColor(null);
    setQuestion(null);
    setAnswerResult(null);
  }

  /* end the match */
  function endMatch() {
    const totals = players.map((p) => p.scores.reduce((a, b) => a + (b ?? 0), 0));
    const max = Math.max(...totals);
    const winners = players.filter((_, i) => totals[i] === max).map((p) => p.name).join(", ");
    alert(`${winners} win${winners.includes(",") ? "" : "s"} the pot of ${pot} coins! 🎉`);
    navigate("/play");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {showConfetti && <Confetti numberOfPieces={120} recycle={false} />}

      <div className="mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        {/* Header */}
        <header className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate("/play")}
            className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Back"
          >
            ←
          </button>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Party Spin</h1>
            <p className="text-sm text-base-muted">Pass & play • Winner takes the pot</p>
          </div>
          <button
            onClick={() => setSoundOn((s) => !s)}
            className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label={soundOn ? "Mute sound" : "Unmute sound"}
            title={soundOn ? "Sound on" : "Sound off"}
          >
            <SoundIcon muted={!soundOn} />
          </button>
        </header>

        {/* Scoreboard */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-3 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm">
              Round <b>{Math.min(round, ROUNDS)}</b>/<b>{ROUNDS}</b>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={addPlayer} className="btn-ghost px-2 py-1 text-sm">+</button>
              <span className="text-sm text-base-muted">Player</span>
              <button onClick={removePlayer} className="btn-ghost px-2 py-1 text-sm">−</button>
            </div>
            <div className="text-sm">
              Pot: <b className="text-yellow-300">{pot}</b> 🪙
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-fixed text-sm tracking-tight tabular-nums">
              <colgroup>
                <col style={{ width: "42%" }} />
                <col style={{ width: "9%" }} />
                <col style={{ width: "9%" }} />
                <col style={{ width: "9%" }} />
                <col style={{ width: "9%" }} />
                <col style={{ width: "9%" }} />
                <col style={{ width: "13%" }} />
              </colgroup>

              <thead>
                <tr className="text-base-muted">
                  <th className="text-left font-medium py-1 pr-1">Player</th>
                  {Array.from({ length: ROUNDS }).map((_, i) => (
                    <th key={i} className="font-medium text-center">R{i + 1}</th>
                  ))}
                  <th className="font-medium text-right pr-1">Total</th>
                </tr>
              </thead>

              <tbody>
                {players.map((p, i) => {
                  const total = p.scores.reduce((a, b) => a + (b ?? 0), 0);
                  const isTurn = i === currentIdx;
                  return (
                    <tr key={i} className={isTurn ? "bg-white/6" : ""}>
                      <td className="py-1 pr-1">
                        <div className="flex items-center gap-2">
                          <span className="inline-block h-3 w-3 rounded-full shrink-0" style={{ background: p.color }} />
                          <input
                            className="bg-transparent outline-none font-semibold w-full"
                            value={p.name}
                            onChange={(e) =>
                              setPlayers((ps) =>
                                ps.map((pp, idx) => (idx === i ? { ...pp, name: e.target.value } : pp))
                              )
                            }
                          />
                        </div>
                      </td>

                      {p.scores.map((s, k) => (
                        <td key={k} className="text-center">
                          {s === null ? "–" : s}
                        </td>
                      ))}

                      <td className="text-right pr-1 font-semibold">{total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wheel stage */}
        <section className="flex flex-col items-center">
          <div className={`relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none`}>
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
                  const isWin = resultIdx === i;
                  return (
                    <g
                      key={cat.slug}
                      style={{
                        opacity: resultIdx == null ? 0.95 : isWin ? 1 : 0.78,
                        filter: resultIdx != null && !isWin ? "blur(0.6px)" : "none",
                      }}
                    >
                      <path
                        d={`M50,50 L${x1},${y1} A50,50 0 ${largeArc} 0 ${x2},${y2} Z`}
                        fill={cat.color}
                        stroke={isWin ? `${cat.color}AA` : "rgba(255,255,255,0.14)"}
                        strokeWidth={isWin ? "1.2" : "0.6"}
                      />
                      <text
                        x="50" y="50" fill="#ffffff" fontSize="4" fontWeight="700" dominantBaseline="middle"
                        transform={`rotate(${start + sliceAngle / 2} 50 50) translate(12 0)`}
                      >
                        <tspan>{cat.label}{cat.soon ? " (soon)" : ""}</tspan>
                      </text>
                    </g>
                  );
                })}
                <circle cx="50" cy="50" r="9" fill="rgba(0,0,0,0.55)" stroke="white" strokeOpacity="0.25" />
              </svg>
            </div>

            {/* Hub & pointer */}
            <button
              onClick={spin}
              disabled={spinning || matchOver}
              className={[
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "h-16 w-16 rounded-full grid place-items-center",
                "bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",
                (spinning || matchOver) ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-200",
              ].join(" ")}
              aria-label="Spin the wheel"
            >
              SPIN
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 z-20">
              <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 4 L20 20 L4 20 Z" fill="#ffffff" /></svg>
            </div>

            {/* Stop chip */}
            {resultIdx != null && !spinning && (
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
                <div className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle"
                    style={{ background: CATEGORIES[resultIdx].color }}
                  />
                  {CATEGORIES[resultIdx].label}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Below wheel: question / controls */}
        <section className="mt-4">
          {matchOver ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xl font-semibold mb-2">Match Over</div>
              <p className="text-sm text-base-muted mb-3">
                Top score takes the pot of <b className="text-yellow-300">{pot}</b> coins.
              </p>
              <button className="btn-primary w-full" onClick={endMatch}>End match</button>
            </div>
          ) : resultIdx != null && CATEGORIES[resultIdx].soon ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-lg font-semibold mb-1">{CATEGORIES[resultIdx].label}</div>
              <p className="text-sm text-base-muted mb-3">This category is arriving soon. Spin again!</p>
              <button className="btn-primary" onClick={spin} disabled={spinning}>Re-spin</button>
            </div>
          ) : (
            <>
              <div className="text-sm text-center text-base-muted mb-1">
                Turn: <span style={{ color: players[currentIdx].color }}>{players[currentIdx].name}</span>
                {" "}| Round {round}/{ROUNDS}
              </div>

              <QuestionCard
                q={question}
                locked={spinning || !question}
                onPick={handlePick}
                result={answerResult}
              />

              {answerResult && (
                <div className="mt-3 flex justify-center">
                  <button className="btn-primary" onClick={nextTurn}>Next turn</button>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]"
        style={{ height: "calc(5.25rem + env(safe-area-inset-bottom))" }}
        aria-hidden
      />
    </div>
  );
}
