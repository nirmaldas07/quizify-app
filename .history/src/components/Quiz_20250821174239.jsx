// src/components/Quiz.jsx
import { useEffect, useRef, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Papa from "papaparse";
import useSound from "use-sound";

/* ---------------- LocalStorage Keys ---------------- */
const LS_RESUME    = "qp_resume";     // { inProgress, slug, mode, category, index, total, remainingSec, startedAt }
const LS_MISTAKES  = "qp_mistakes";   // [questionId,...]
const LS_STATS     = "qp_stats";      // { sessions: [{cat, mode, total, correct, skipped, ms}] }
const LS_LASTSET   = "qp_lastset";    // snapshot of the just-finished quiz for RETAKE
const LS_RECENT    = "qp_recent";     // last 5 finished quizzes (with snapshot)
const RECENT_LIMIT = 50; // keep up to 50; UI still shows 5 by default


/* ---------------- Helpers ---------------- */
const fromSlug = (s = "") => s.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
const toSlug = (s = "") =>
  s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

const pick = (arr, n) => arr.slice().sort(() => Math.random() - 0.5).slice(0, n);
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const mmss = (totalSeconds = 0) => {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};
const fmtMMSSfromMs = (ms = 0) => {
  const s = Math.floor(ms / 1000);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};
const fmtDate = (ts) => {
  try {
    const d = new Date(ts);
    const dd = String(d.getDate()).padStart(2, "0");
    const mmm = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()];
    const yy = String(d.getFullYear()).slice(-2);
    return `${dd}-${mmm}-${yy}`;
  } catch { return ""; }
};

/* ---------------- Load CSV ---------------- */
async function loadQuestions() {
  const url = "/data/quiz_questions_bank.csv";
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CSV not found at ${url}`);
  const csv = await res.text();
  const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true, transformHeader: h => String(h).trim().toLowerCase() });

  const abc = { a:0, b:1, c:2, d:3 };
  return data.map((r, idx) => {
    const opts = [r.option1, r.option2, r.option3, r.option4].map(v => (v ?? "").trim());
    if (opts.some(o => !o)) return null;

    let correctIndex = -1;
    const ans = String(r.answer ?? "").trim();
    if (abc[ans.toLowerCase()] !== undefined) correctIndex = abc[ans.toLowerCase()];
    if (correctIndex < 0) {
      const i = opts.findIndex(o => o.toLowerCase() === ans.toLowerCase());
      correctIndex = i >= 0 ? i : 0;
    }

    const category = String((r.category ?? r.subject) ?? "General Knowledge").trim();
    const difficulty = String(r.difficulty ?? "medium").toLowerCase().trim();

    return {
      id: r.id?.trim() || `q_${idx}`,
      category,
      difficulty,
      prompt: String(r.question ?? "").trim(),
      options: opts,
      answerIndex: correctIndex,
      explanation: String(r.explanation ?? "").trim(),
    };
  }).filter(Boolean);
}

/* ---------------- Build a session ---------------- */
function buildSession(all, { categorySlug, difficulty, count }) {
  const wantMixed = categorySlug === "mixed";
  const catFilter = wantMixed ? () => true : (q) => toSlug(q.category) === categorySlug;
  const difFilter = difficulty ? (q) => (q.difficulty || "medium") === difficulty : () => true;

  const pool = all.filter(q => catFilter(q) && difFilter(q));
  const chosen = pick(pool, Math.min(count, pool.length));

  // shuffle options per question
  const qs = chosen.map(q => {
    const order = shuffle([0, 1, 2, 3]);
    const newOpts = order.map(i => q.options[i]);
    const newAnswer = order.indexOf(q.answerIndex);
    return { ...q, options: newOpts, answerIndex: newAnswer };
  });

  return { questions: qs, poolSize: pool.length };
}

/* ---------------- Toast ---------------- */
function Toast({ message, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 1500); return () => clearTimeout(t); }, [onClose]);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-base-border text-sm text-yellow-500">{message}</div>
    </div>
  );
}

/* ---------------- Main ---------------- */
export default function Quiz() {
  const navigate = useNavigate();
  const { category } = useParams();      // slug
  const location = useLocation();

  // Config from router state
  const mode        = (location.state?.mode || "quiz");  // "quiz" | "practice"
  const difficulty  = String(location.state?.difficulty || "medium").toLowerCase();
  const count       = clamp(Number(location.state?.count || 10), 1, 50);
  const timerConfig = location.state?.timer || { type: "per_q", seconds: 45 };
  const resumeFlag  = Boolean(location.state?.resume);

  const isPractice  = mode === "practice";
  const isDaily     = Boolean(location.state?.daily);
  const sourceTag   = location.state?.source || null; // e.g., "fun_facts"
  const modeLabel   = isDaily ? "Daily Challenge" : (sourceTag === "fun_facts" ? "Fun-Facts" : (isPractice ? "Practice" : "Quiz"));

  /* Sounds (from /public/sounds) */
  const [playCorrect] = useSound("/sounds/correct.mp3", { volume: 0.65, interrupt: true });
  const [playWrong]   = useSound("/sounds/wrong.mp3",   { volume: 0.65, interrupt: true });
  const [playTick,   tickControls] = useSound("/sounds/tick.mp3",   { volume: 0.8, interrupt: true });

  /* Practice sound toggle */
  const [practiceSoundsOn, setPracticeSoundsOn] = useState(true);

  /* Data */
  const [allQuestions, setAllQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  /* Session */
  const [session, setSession] = useState({ questions: [], pool: 0 });
  const total = session.questions.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);   // selected index | null
  const [skipped, setSkipped] = useState([]);   // boolean array
  const [startTs, setStartTs] = useState(null);
  const [elapsedMs, setElapsedMs] = useState(0);

  // Per-question timer
  const [remaining, setRemaining] = useState(timerConfig.seconds || 45);
  const [paused, setPaused] = useState(false);
  const tickInterval = useRef(null);

  // Lifelines
  const [used5050, setUsed5050] = useState(false);
  const [usedAudience, setUsedAudience] = useState(false);
  const [elimMap, setElimMap] = useState({});              // { [qIndex]: [j,k] }
  const [audienceMap, setAudienceMap] = useState({});      // { [qIndex]: [p0,p1,p2,p3] }
  const [infoMessage, setInfoMessage] = useState(null);


  // Practice locks: once you leave a question in practice, you can't change it
  const [lockedMap, setLockedMap] = useState([]);

  // UI
  const [showSubmit, setShowSubmit] = useState(false);
  const [showQuit, setShowQuit] = useState(false);
  const [timeUpFor, setTimeUpFor] = useState(null);        // index where time up modal is shown
  const [view, setView] = useState("quiz");                // "quiz" | "results" | "review"
  const [toast, setToast] = useState("");

  // Review (for external snapshots too)
  const [reviewSnapshot, setReviewSnapshot] = useState(null); // { questions, answers }

  // Auto-next timer (2s) for quiz mode
  const autoNextRef = useRef(null);

  /* -------- handy JSON util -------- */
  const safeReadJSON = (k, fb) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch { return fb; } };

  /* -------- Load CSV once -------- */
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await loadQuestions();
        if (!alive) return;
        setAllQuestions(data);
      } catch (e) {
        console.error(e);
        setErr("Failed to load questions. Check /public/data/quiz_questions_bank.csv");
      } finally {
        setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  /* -------- Start a session (or resume) -------- */
  useEffect(() => {
    if (loading || err) return;

    // Resume — rebuild a fresh session and jump to saved index
    if (resumeFlag) {
      const saved = safeReadJSON(LS_RESUME, null);
      if (saved?.slug === category && saved?.inProgress) {
        const sess = buildSession(allQuestions, {
          categorySlug: category,
          difficulty,
          count: saved.total || count,
        });
        setSession({ questions: sess.questions, pool: sess.poolSize });
        setIndex(clamp(saved.index, 0, sess.questions.length - 1));
        setAnswers(new Array(sess.questions.length).fill(null));
        setSkipped(new Array(sess.questions.length).fill(false));
        setLockedMap(new Array(sess.questions.length).fill(false));
        setStartTs(saved.startedAt || Date.now());
        setRemaining(timerConfig.seconds || 45);
        setElapsedMs(0);
        setUsed5050(false);
        setUsedAudience(false);
        setElimMap({});
        setAudienceMap({});
        setReviewSnapshot(null);
        return;
      }
    }

    // Fresh
    const sess = buildSession(allQuestions, { categorySlug: category, difficulty, count });
    setSession({ questions: sess.questions, pool: sess.poolSize });
    setAnswers(new Array(sess.questions.length).fill(null));
    setSkipped(new Array(sess.questions.length).fill(false));
    setLockedMap(new Array(sess.questions.length).fill(false));
    setIndex(0);
    setStartTs(Date.now());
    setRemaining(timerConfig.seconds || 45);
    setElapsedMs(0);
    setUsed5050(false);
    setUsedAudience(false);
    setElimMap({});
    setAudienceMap({});
    setReviewSnapshot(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, err, allQuestions, category]);

  const current = session.questions[index];
  const selected = answers[index];

  /* -------- Per-question ticking -------- */
  useEffect(() => {
    if (view !== "quiz") return;
    if (timerConfig.type === "off") return;

    clearInterval(tickInterval.current);
    if (paused) return;

    tickInterval.current = setInterval(() => {
      setRemaining((sec) => {
        const next = sec - 1;
        if (next === 10) {
          try { tickControls.stop(); } catch {}
          playTick();
        }
        if (next <= 0) {
          try { tickControls.stop(); } catch {}
          clearInterval(tickInterval.current);
          onTimeUp();
          return 0;
        }
        return next;
      });
      setElapsedMs(ms => ms + 1000);
      persistResume(true);
    }, 1000);

    return () => clearInterval(tickInterval.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, index, paused, timerConfig.type]);

  // Stop tick sound and pending auto-next when index/view changes
  useEffect(() => {
    try { tickControls.stop(); } catch {}
    if (autoNextRef.current) { clearTimeout(autoNextRef.current); autoNextRef.current = null; }
  }, [index, selected, view, paused]);

  /* -------- Resume helpers -------- */
  const persistResume = (inProgress = true) => {
    localStorage.setItem(LS_RESUME, JSON.stringify({
      inProgress,
      slug: category,
      mode, category: fromSlug(category),
      index, total,
      remainingSec: timerConfig.type === "per_q" ? remaining : 0,
      startedAt: startTs || Date.now(),
    }));
  };
  const clearResume = () => localStorage.removeItem(LS_RESUME);

  /* -------- Tiny confetti (from a rect) -------- */
  const confettiFromRect = (rect, count = 16) => {
    const layer = document.getElementById("quiz-confetti-layer") || (() => {
      const l = document.createElement("div");
      l.id = "quiz-confetti-layer";
      l.style.position = "fixed";
      l.style.inset = "0";
      l.style.pointerEvents = "none";
      l.style.zIndex = "120";
      document.body.appendChild(l);
      return l;
    })();

    const cx = rect.left + rect.width/2;
    const cy = rect.top + rect.height/2;
    const colors = ["#22c55e","#60a5fa","#f59e0b","#eab308","#a78bfa"];

    for (let i=0;i<count;i++) {
      const el = document.createElement("div");
      const size = 5 + Math.random()*4;
      el.style.position = "fixed";
      el.style.left = "0"; el.style.top = "0";
      el.style.width = `${size}px`; el.style.height = `${size}px`;
      el.style.borderRadius = "999px";
      el.style.background = colors[i % colors.length];
      el.style.transform = `translate(${cx}px,${cy}px) scale(1)`;
      el.style.opacity = "1";
      el.style.transition = "transform 650ms cubic-bezier(.2,.8,.2,1), opacity 650ms linear";
      layer.appendChild(el);

      const angle = Math.random()*2*Math.PI;
      const dist  = 60 + Math.random()*40;
      const x1 = cx + Math.cos(angle)*dist;
      const y1 = cy + Math.sin(angle)*dist - 20;
      requestAnimationFrame(() => {
        el.style.transform = `translate(${x1}px,${y1}px) scale(.9) rotate(${Math.random()*180}deg)`;
        el.style.opacity = "0";
      });
      setTimeout(() => el.remove(), 750);
    }
  };

  /* -------- Handlers -------- */
const onSelect = (optIdx, evt) => {
  if (!current) return;
  if (isPractice && lockedMap[index]) return; // read-only check

  try { navigator.vibrate?.(24); } catch {}

  const nextAnswers = answers.slice();
  if (answers[index] === optIdx) {
    nextAnswers[index] = null;
  } else {
    nextAnswers[index] = optIdx;
  }
  setAnswers(nextAnswers);

  // reset skipped
  if (nextAnswers[index] !== null && skipped[index]) {
    const nextSkipped = skipped.slice();
    nextSkipped[index] = false;
    setSkipped(nextSkipped);
  }

  // ✅ Immediately lock this question in practice mode
  if (isPractice && nextAnswers[index] !== null) {
    setLockedMap(prev => {
      if (prev[index]) return prev;
      const copy = prev.slice();
      copy[index] = true;
      return copy;
    });
  }

  // Feedback (sound + confetti)
  if (isPractice) {
    const isCorrect = nextAnswers[index] === current.answerIndex;
    if (practiceSoundsOn) {
      if (isCorrect) playCorrect();
      else if (nextAnswers[index] !== null) playWrong();
    }
    if (isCorrect && evt?.currentTarget) {
      const rect = evt.currentTarget.getBoundingClientRect();
      confettiFromRect(rect, 16);
    }
  }

  // QUIZ auto-next after 2s
  if (!isPractice && nextAnswers[index] !== null) {
    if (autoNextRef.current) clearTimeout(autoNextRef.current);
    autoNextRef.current = setTimeout(() => {
      if (index < total - 1) {
        goNext();
      } else {
        setShowSubmit(true);
        setPaused(true);
      }
    }, 2000);
  }
};


  const lockCurrentIfPractice = () => {
  if (!isPractice) return;
  // Only lock if this question has a selection
  if (answers[index] === null || answers[index] === undefined) return;

  setLockedMap(prev => {
    if (prev[index]) return prev;          // already locked
    const copy = prev.slice();
    copy[index] = true;                    // lock this question
    return copy;
  });
};


  const goPrev = () => {
    if (autoNextRef.current) { clearTimeout(autoNextRef.current); autoNextRef.current = null; }
    setPaused(true);
    setTimeUpFor(null);
    setShowSubmit(false);
    if (index > 0) setIndex(i => i - 1);
    setTimeout(() => setPaused(false), 50);
  };

  const goNext = () => {
    if (autoNextRef.current) { clearTimeout(autoNextRef.current); autoNextRef.current = null; }
    lockCurrentIfPractice();
    setPaused(true);
    setTimeUpFor(null);
    setShowSubmit(false);

    // Clicking Next with no selection counts as skipped
    if (answers[index] === null && !skipped[index]) {
      const next = skipped.slice();
      next[index] = true;
      setSkipped(next);
    }

    if (index < total - 1) {
      setIndex(i => i + 1);
      setRemaining(timerConfig.seconds || 45);
    } else {
      setShowSubmit(true);
    }
    setTimeout(() => setPaused(false), 50);
  };

  const onSkip = () => {
    lockCurrentIfPractice();
    if (answers[index] === null) {
      const next = skipped.slice();
      next[index] = true;
      setSkipped(next);
    }
    goNext();
  };

  const onTimeUp = () => {
    lockCurrentIfPractice();
    const next = skipped.slice();
    if (answers[index] === null) next[index] = true;
    setSkipped(next);
    setTimeUpFor(index);
    setPaused(true);
  };

    const onSubmitConfirmed = () => {
    // --- Mistakes ---
    const wrongIds = session.questions
        .filter((q, i) => answers[i] !== null && answers[i] !== q.answerIndex)
        .map(q => q.id);
    try {
        const prev = safeReadJSON(LS_MISTAKES, []);
        const merged = Array.from(new Set([...wrongIds, ...prev]));
        localStorage.setItem(LS_MISTAKES, JSON.stringify(merged));
    } catch {}

    // --- Score / Stats ---
    const correct = session.questions.reduce(
        (sum, q, i) => sum + (answers[i] === q.answerIndex ? 1 : 0),
        0
    );

    // ✅ NEW: trigger coin fly for correct answers
    if (correct > 0 && coinPillRef?.current) {
        const srcEl = document.querySelector(".card"); // or submit button if you prefer
        const rect = srcEl?.getBoundingClientRect();
        if (rect) {
        setCoinAnims(prev => [
            ...prev,
            {
            id: Date.now(),
            startRect: rect,
            amount: correct * 5, // 5 coins per correct
            },
        ]);
        }
    }

    try {
        const st = safeReadJSON(LS_STATS, { sessions: [] });
        const skippedCnt = skipped.filter(Boolean).length;
        st.sessions.push({
        cat: fromSlug(category),
        mode,
        total,
        correct,
        skipped: skippedCnt,
        ms: elapsedMs
        });
        localStorage.setItem(LS_STATS, JSON.stringify(st));
    } catch {}

    // --- Labels for snapshot / recent ---
    const modeLabel =
        isPractice
        ? "Practice"
        : (location.state?.daily
            ? "Daily Challenge"
            : (location.state?.source === "fun_facts" ? "Fun Facts" : "Quiz"));

    // --- Snapshot for RETAKE + Recent ---
    try {
        const snapshot = {
        ts: Date.now(),
        slug: category,
        categoryLabel: fromSlug(category),
        modeRaw: mode,
        modeLabel,
        difficulty,
        total,
        timer: timerConfig,
        ms: elapsedMs,
        attempted: answers.filter(a => a !== null).length,
        correct,
        questions: session.questions.map(q => ({
            id: q.id,
            prompt: q.prompt,
            options: q.options,
            answerIndex: q.answerIndex,
            explanation: q.explanation,
            category: q.category,
            difficulty: q.difficulty
        })),
        answers: answers.slice(),
        skipped: skipped.slice()
        };
        localStorage.setItem(LS_LASTSET, JSON.stringify(snapshot));

        const prev = safeReadJSON(LS_RECENT, []);
        const entry = {
        id: snapshot.ts,
        ts: snapshot.ts,
        cat: snapshot.categoryLabel,
        slug: category,
        mode: snapshot.modeLabel,
        total,
        correct,
        ms: elapsedMs,
        snapshot
        };
        const next = [entry, ...prev].slice(0, RECENT_LIMIT);
        localStorage.setItem(LS_RECENT, JSON.stringify(next));
    } catch {}

    // --- Show results ---
    setView("results");
    setPaused(true);
    clearInterval(tickInterval.current);
    persistResume(false);
    clearResume();
    };


  // Retake: same set, reshuffle options
  const retakeSameSet = () => {
    const last = safeReadJSON(LS_LASTSET, null);
    if (!last || last.slug !== category || !Array.isArray(last.questions)) {
      retakeFresh();
      return;
    }
    const retakeTimer = last.timer || timerConfig;
    const reshuffled = last.questions.map(q => {
      const order = shuffle([0,1,2,3]);
      return { ...q, options: order.map(i => q.options[i]), answerIndex: order.indexOf(q.answerIndex) };
    });

    setSession({ questions: reshuffled, pool: reshuffled.length });
    setAnswers(new Array(reshuffled.length).fill(null));
    setSkipped(new Array(reshuffled.length).fill(false));
    setLockedMap(new Array(reshuffled.length).fill(false));
    setIndex(0);
    setStartTs(Date.now());
    setRemaining(retakeTimer?.seconds || 45);
    setElapsedMs(0);
    setUsed5050(false);
    setUsedAudience(false);
    setElimMap({});
    setAudienceMap({});
    setShowSubmit(false);
    setView("quiz");
    setReviewSnapshot(null);
    window.scrollTo(0,0);
  };

  const retakeFresh = () => {
    navigate(`/quiz/${category}?r=${Date.now()}`, {
      replace: true,
      state: { mode, difficulty, count, timer: timerConfig }
    });
  };

  const goHome = () => navigate("/");

  /* -------- Lifelines -------- */
  const use5050 = () => {
    if (used5050) { setToast("One per quiz"); return; }
    if (!current) return;
    const wrong = [0,1,2,3].filter(i => i !== current.answerIndex);
    const out = pick(wrong, 2);
    setElimMap({ ...elimMap, [index]: out });
    setUsed5050(true);
  };

  const useAudience = () => {
    if (usedAudience) { setToast("One per quiz"); return; }
    if (!current) return;
    const base = 40 + Math.floor(Math.random()*26); // 40-65 to the correct
    let remain = 100 - base;
    const p = [0,0,0,0];
    p[current.answerIndex] = base;
    const others = [0,1,2,3].filter(i => i !== current.answerIndex);
    const a = Math.floor(Math.random() * (remain+1)); remain -= a;
    const b = Math.floor(Math.random() * (remain+1)); remain -= b;
    const c = remain;
    p[others[0]] += a; p[others[1]] += b; p[others[2]] += c;

    setAudienceMap({ ...audienceMap, [index]: p });
    setUsedAudience(true);
  };

  /* -------- Derived -------- */
  const attempted = answers.filter(a => a !== null).length;
  const correctCnt = session.questions.filter((q, i) => answers[i] === q.answerIndex).length;
  const accuracy   = total ? Math.round((correctCnt / total) * 100) : 0;

  /* -------- Render guards -------- */
  if (loading) return <ScreenWrap><div className="text-sm text-base-muted">Loading questions…</div></ScreenWrap>;
  if (err)     return <ScreenWrap><div className="text-sm text-red-400">{err}</div></ScreenWrap>;
  if (!current && view === "quiz") return <ScreenWrap><div className="text-sm text-base-muted">No questions found.</div></ScreenWrap>;

  const eliminated = elimMap[index] || [];
  const audienceP  = audienceMap[index] || null;
  const readOnly   = isPractice && lockedMap[index];

  return (
    <ScreenWrap>
      {view === "quiz" && (
        <>
          {/* Header */}
          <div className="mb-2 mt-6 mx-4 sm:mx-3 grid grid-cols-[auto,1fr,auto] items-center">
            <button
                onClick={() => setShowQuit(true)}
                className="px-3 py-1.5 rounded-xl border border-base-border bg-white/5 text-sm justify-self-start"
            >
                ← Back
            </button>

            {/* CENTERED title block */}
            <div className="text-center justify-self-center">
                <div className="text-base font-semibold max-w-[70vw] mx-auto whitespace-normal break-words">
                  {fromSlug(category)}
                </div>
                <div className="text-xs text-base-muted">
                  Mode: {isPractice ? "Practice" : "Quiz"} • Difficulty: {difficulty[0].toUpperCase()+difficulty.slice(1)}
                </div>
            </div>

            <div
                className={[
                "px-2 py-1 rounded-lg border text-xs justify-self-end",
                remaining <= 10 ? "border-red-500 text-red-400 bg-red-500/10" : "border-base-border bg-white/5",
                ].join(" ")}
            >
                ⏱ {mmss(remaining)}
            </div>
          </div>

          {/* Practice sound toggle */}
          {isPractice && (
            <div className="mb-2 mx-4 sm:mx-3 flex items-center justify-end text-xs text-base-muted">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <span>Sounds</span>
                <input
                  type="checkbox"
                  checked={practiceSoundsOn}
                  onChange={(e)=>setPracticeSoundsOn(e.target.checked)}
                />
              </label>
            </div>
          )}

          {/* Segmented Progress */}
          <div className="mb-2 px-4 sm:px-3 flex w-full gap-[2px]">
            {Array.from({ length: total }).map((_, i) => {
              const isCurrent = i === index;
              const status = skipped[i] ? "skipped" : (answers[i] !== null ? "attempted" : "idle");
              let color =
                status === "attempted" ? "bg-brand-blue" :
                status === "skipped"   ? "bg-amber-400" :
                isCurrent              ? "bg-white/30" : "bg-white/15";
              const h = isCurrent ? "h-1.5" : "h-1";
              const ring = isCurrent ? "ring-1 ring-white/40" : "";
              return <div key={i} className={`${h} flex-1 rounded ${color} ${ring}`} />;
            })}
          </div>

          <div className="mb-4 px-4 sm:px-3 text-xs text-base-muted flex items-center justify-between">
            <span>Q{index + 1} / {total}</span>
            <span>Attempted {attempted} • Skipped {skipped.filter(Boolean).length}</span>
          </div>

          {/* Question card */}
          <div className="card rounded-3xl p-5 mt-6 mx-4 sm:mx-3 max-h-[65vh] overflow-y-auto">

            <p className="text-base font-semibold mb-4">{current?.prompt}</p>

            {/* 4×1 options */}
            <div className="flex flex-col gap-3">
              {current?.options.map((opt, i) => {
                const isEliminated = eliminated.includes(i);
                const isSelected = selected === i;
                const isCorrectChoice = i === current.answerIndex;

                // Styling rules
                let cls = "w-full text-left px-3 py-3 rounded-xl border transition";
                if (isPractice && selected !== null) {
                  // practice feedback: green for correct, red for wrong selection; also highlight the correct option if user selected wrong
                  const pickedWrong = selected !== current.answerIndex;
                  if (isSelected && isCorrectChoice) cls += " bg-green-600/20 border-green-500/50 text-green-300";
                  else if (isSelected && !isCorrectChoice) cls += " bg-red-600/20 border-red-500/50 text-red-300";
                  else if (!isSelected && pickedWrong && isCorrectChoice) cls += " bg-green-600/10 border-green-500/40 text-green-300/90";
                  else cls += " bg-base-bg/50 border-base-border";
                } else {
                  // quiz/neutral
                  if (isSelected) cls += " bg-white/10 border-brand-blue";
                  else cls += " bg-base-bg/50 border-base-border hover:bg-white/5";
                }

                return (
                  <button
                    key={i}
                    disabled={isEliminated || readOnly}
                    onClick={(e) => onSelect(i, e)}
                    className={`${cls} ${isEliminated || readOnly ? "opacity-60 pointer-events-none" : ""}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{["A","B","C","D"][i]}.</span>
                      <span className="flex-1">{opt}</span>
                      {audienceP && <span className="text-xs text-base-muted">{audienceP[i]}%</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Practice explanations & status */}
            {isPractice && selected !== null && (
              <div className="mt-3 text-sm">
                {selected === current.answerIndex ? (
                  <div className="text-green-400 mb-1">✓ Correct.</div>
                ) : (
                  <div className="text-red-400 mb-1">✗ Incorrect.</div>
                )}
                {current.explanation && (
                  <div className="text-base-muted">Explanation: {current.explanation}</div>
                )}
              </div>
            )}

        {/* Lifelines */}
        <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center justify-center gap-6">
            {/* 50:50 */}
            <button
            onClick={() => {
                if (!used5050) {
                use5050();
                } else {
                setInfoMessage("One per quiz");
                setTimeout(() => setInfoMessage(null), 1000); // auto-hide
                }
            }}
            className={[
                "px-3 py-2 rounded-xl border border-base-border bg-white/5 transition",
                used5050 ? "opacity-50 cursor-not-allowed" : ""
            ].join(" ")}
            title="50:50 (eliminate two options)"
            >
            <span className="inline-flex items-center gap-2">
                <FiftyFiftyIcon />
                <span>50:50</span>
            </span>
            </button>

            {/* Audience */}
            <button
            onClick={() => {
                if (!usedAudience) {
                useAudience();
                } else {
                setInfoMessage("One per quiz");
                setTimeout(() => setInfoMessage(null), 2000); // auto-hide
                }
            }}
            className={[
                "px-3 py-2 rounded-xl border border-base-border bg-white/5 transition",
                usedAudience ? "opacity-50 cursor-not-allowed" : ""
            ].join(" ")}
            title="Ask the audience"
            >
            <span className="inline-flex items-center gap-2">
                <AudienceIcon />
                <span>Audience</span>
            </span>
            </button>
        </div>

        {/* Message */}
        {infoMessage && (
            <div className="mt-2 text-red-500 text-center text-sm">
            {infoMessage}
            </div>
        )}
        </div>

            {/* Actions */}
            <div className="mt-4 max-w-sm mx-auto grid grid-cols-3 gap-3">
              <button
                  onClick={goPrev}
                  disabled={index === 0}
                  className="w-full px-3 py-2 rounded-xl border border-base-border bg-white/5 disabled:opacity-50"
              >
                  Prev
              </button>
              <button
                  onClick={onSkip}
                  disabled={selected !== null}
                  className="w-full px-3 py-2 rounded-xl border border-base-border bg-white/5 disabled:opacity-50"
              >
                  Skip
              </button>
              <button
                  onClick={goNext}
                  className="w-full px-3 py-2 rounded-xl border border-base-border bg-white/5"
              >
                  Next
              </button>
            </div>
          </div>

          {/* Centered Submit CTA */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setShowSubmit(true)}
              className="px-5 py-2.5 rounded-2xl text-white bg-gradient-to-r from-brand-blue to-brand-purple"
            >
              Submit
            </button>
          </div>

          {/* Quit modal */}
          {showQuit && (
            <Modal onClose={() => setShowQuit(false)}>
              <div className="text-center">
                <div className="text-2xl mb-2">⚠️</div>
                <h2 className="text-lg font-bold mb-1">Quit quiz?</h2>
                <p className="text-sm text-base-muted mb-4">Your progress in this quiz will be lost.</p>
                <div className="flex justify-center gap-3">
                  <button className="px-3 py-2 rounded-xl border border-base-border bg-white/5" onClick={() => setShowQuit(false)}>No</button>
                  <button className="btn-primary px-3 py-2 rounded-xl" onClick={goHome}>Yes</button>
                </div>
              </div>
            </Modal>
          )}
            {/* Time up modal */}
            {timeUpFor === index && (
            <Modal>
                <div className="text-center">
                <div className="text-2xl mb-2">⏰</div>
                <h2 className="text-lg font-bold mb-1">Time's up</h2>
                <p className="text-sm text-base-muted mb-4">Let's move on.</p>

                <div className="flex justify-center">
                    <button
                    className="btn-primary px-3 py-2 rounded-xl"
                    onClick={() => { setTimeUpFor(null); goNext(); }}
                    >
                    {index < total - 1 ? "Next question" : "Submit"}
                    </button>
                </div>

                {/* ✅ proper bottom space */}
                <div className="mt-4" />
                </div>
            </Modal>
            )}


        {/* Submit modal */}
        {showSubmit && (
        <Modal onClose={() => setShowSubmit(false)}>
            <div className="text-center">
            <div className="text-2xl mb-2">🚀</div>
            <h2 className="text-lg font-bold mb-1">Submit quiz?</h2>
            <p className="text-sm text-base-muted mb-4">
                Attempted {attempted}/{total} • Skipped {skipped.filter(Boolean).length}
            </p>
            <div className="flex justify-center gap-3">
                <button
                className="px-3 py-2 rounded-xl border border-base-border bg-white/5"
                onClick={() => setShowSubmit(false)}
                >
                Back
                </button>
                <button
                className="btn-primary px-3 py-2 rounded-xl"
                disabled={false} // ✅ always enabled
                onClick={() => {
                    setShowSubmit(false);
                    onSubmitConfirmed();
                }}
                >
                Submit
                </button>
            </div>

            {/* 👇 Added bottom space */}
            <div className="mt-4" />
            </div>
        </Modal>
        )}

          {toast && <Toast message={toast} onClose={() => setToast("")} />}
        </>
      )}

      {view === "results" && (
        <>
          <div className="mt-2 md:mt-8 card rounded-3xl p-5 text-center">
            <h2 className="text-xl font-semibold mb-1">Results</h2>
            <div className="text-sm text-base-muted mb-4">
              {fromSlug(category)} • {isPractice ? "Practice" : "Quiz"}
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              <Metric label="Score" value={`${correctCnt}/${total}`} />
              <Metric label="Accuracy" value={`${accuracy}%`} />
              <Metric label="Time" value={fmtMMSSfromMs(elapsedMs)} />
            </div>

            <StatsPeek category={fromSlug(category)} />

            <div className="mt-5 flex flex-wrap gap-2 justify-center">
              <button className="btn-primary px-3 py-2 rounded-xl" onClick={() => { setReviewSnapshot({ questions: session.questions, answers }); setView("review"); }}>
                Review Answers
              </button>
              <button className="px-3 py-2 rounded-xl border border-base-border bg-white/5" onClick={retakeSameSet}>Retake</button>
              <button className="px-3 py-2 rounded-xl border border-base-border bg-white/5" onClick={goHome}>Home</button>
            </div>
          </div>

          {/* Recent Quizzes */}
          <RecentList onView={(snap) => { setReviewSnapshot(snap); setView("review"); }} />
        </>
      )}

      {view === "review" && (
        <div className="mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24">
          <div className="flex items-center justify-between mb-4">
            <button
                className="px-3 py-1.5 rounded-xl border border-base-border bg-white/5"
                onClick={() => setView("results")}
            >
                ← Back
            </button>
            <h2 className="text-lg font-semibold">Review</h2>
            <div className="w-16" />
          </div>

          {(() => {
            const qs = reviewSnapshot?.questions || session.questions;
            const ans = reviewSnapshot?.answers || answers;
            return (
              <>
                <ol className="space-y-4">
                  {qs.map((q, i) => {
                    const sel = ans[i];
                    return (
                      <li key={q.id} className="rounded-2xl border border-base-border bg-white/5 p-4 md:p-5">
                        <div className="text-sm md:text-base font-medium mb-3">
                          Q{i + 1}. {q.prompt}
                        </div>

                        {/* Options show correct=green; wrong pick=red */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {q.options.map((o, j) => {
                            const chosen  = sel === j;
                            const correct = j === q.answerIndex;

                            const cls = [
                              "w-full text-left px-3 py-2 rounded-xl border",
                              chosen && !correct ? "bg-red-600/20 border-red-500/50 text-red-300" : "",
                              correct ? "bg-green-600/20 border-green-500/50 text-green-300" : "",
                              !chosen && !correct ? "bg-base-bg/40 border-base-border" : ""
                            ].join(" ");

                            return (
                              <div key={j} className={cls}>
                                <span className="font-semibold mr-1">{["A", "B", "C", "D"][j]}.</span>
                                {o}
                              </div>
                            );
                          })}
                        </div>

                        <div className="text-xs mt-3">
                          {sel === null || sel === undefined ? (
                            <span className="text-base-muted">Skipped</span>
                          ) : sel === q.answerIndex ? (
                            <span className="text-green-400">Correct</span>
                          ) : (
                            <span className="text-red-400">Incorrect</span>
                          )}
                          {q.explanation && (
                            <div className="text-base-muted mt-1">Explanation: {q.explanation}</div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>

                <div className="mt-5 flex gap-2 justify-center">
                  <button
                      className="px-3 py-2 rounded-xl border border-base-border bg-white/5"
                      onClick={() => setView("results")}
                  >
                      Back
                  </button>
                  <button className="btn-primary px-3 py-2 rounded-xl" onClick={retakeSameSet}>
                      Retake
                  </button>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </ScreenWrap>
  );
}

function FiftyFiftyIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2.5" y="5" rx="4" ry="4" width="19" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="12" y="13.8" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor">50:50</text>
    </svg>
  );
}

function AudienceIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6.5" cy="9.5" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="9.5" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 18c0-2.2 2.2-3.7 4.8-4.2M19 18c0-2.2-2.2-3.7-4.8-4.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 18.5c0-2.8 2.7-4.5 4.5-4.5s4.5 1.7 4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------- Small UI bits ---------------- */
function ScreenWrap({ children }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]">
      <div className="h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),56px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]">
        {children}
      </div>
    </div>
  );
}
// popup screen
function Modal({ children, onClose }) {
  useEffect(() => {
    // 🚫 hide bottom nav
    document.body.classList.add("modal-open");
    return () => {
      // ✅ restore bottom nav
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[120]" // 👈 bumped up z-index
      onClick={onClose}
    >
      <div
        className="bg-base-card border border-base-border rounded-t-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}




function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-base-border bg-white/5 p-3 text-center">
      <div className="text-xs text-base-muted">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

/* ------ Trend bullets (avg over recent runs) ------ */
function StatsPeek({ category }) {
  let sessions = [];
  try {
    sessions = JSON.parse(localStorage.getItem(LS_STATS) || "{}").sessions || [];
  } catch {}
  const mine = sessions.filter((s) => s.cat === category);
  if (!mine.length) return null;

  const recent7 = mine.slice(-7);
  const avgAcc = Math.round(
    recent7.reduce((a, s) => a + Math.round((s.correct / s.total) * 100), 0) / recent7.length
  );
  const last = mine[mine.length - 1];

  return (
    <div className="rounded-xl border border-base-border bg-white/5 p-3 text-left">
      <ul className="list-disc list-inside text-xs text-base-muted space-y-1">
        <li>Avg. accuracy over {recent7.length} runs: <b>{avgAcc}%</b></li>
        <li>Last run: <b>{last.correct}/{last.total}</b></li>
        <li>Time: <b>{fmtMMSSfromMs(last.ms)}</b></li>
      </ul>
    </div>
  );
}

/* ------ Recent Quizzes (Last 5, horizontal scroll; compact rows) ------ */
function RecentList({ onView }) {
  let rows = [];
  try { rows = JSON.parse(localStorage.getItem(LS_RECENT) || "[]"); } catch {}
  if (!rows?.length) return null;

  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? rows : rows.slice(0, 5);

  const pctTone = (pct) =>
    pct >= 80 ? "text-green-300"
    : pct >= 50 ? "text-brand-blue"
    : "text-base-text";

  // One literal grid template so Tailwind emits CSS (header & rows share it)
  const GRID = "grid grid-cols-[120px_minmax(120px,240px)_90px_64px_120px_90px]";

  return (
    <div className="mt-4 card rounded-3xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold">Recent Quizzes</h3>
      </div>

      {/* Horizontal scroll only here; keep page’s vertical scroll intact */}
      <div className="overflow-x-auto touch-pan-x overscroll-x-contain">
        {/* Make the list itself scroll vertically if it gets tall, so 'View all/Show 5'
            is always reachable on phones */}
        <div className="max-h-[60vh] overflow-y-auto pr-1 pb-24">
          {/* Table */}
          <div className={`min-w-[640px] ${GRID} text-center`}>

            {/* Header */}
            <div className={`col-span-full ${GRID} items-center text-[11px] text-base-muted bg-white/5 rounded-lg px-2 py-1 mb-2`}>
              <div className="text-left pl-1">Date</div>
              <div className="text-left">Category</div>
              <div>Score</div>
              <div>Qn</div>
              <div>Mode</div>
              <div>View</div>
            </div>

            {/* Rows */}
            {shown.map((r) => {
              const pct = Math.round((r.correct / (r.total || 1)) * 100);
              return (
                <div
                  key={r.id}
                  role="row"
                  className={`col-span-full ${GRID} items-center text-center py-2 border-b border-white/10 last:border-0 hover:bg-white/[0.03] rounded-md`}
                >
                  <div className="text-left pl-1 text-xs font-mono tabular-nums">
                    {fmtDate(r.ts)}
                  </div>
                  <div className="text-left text-xs px-1 truncate">{r.cat}</div>
                  <div className={`text-xs font-mono tabular-nums ${pctTone(pct)}`}>{pct}%</div>
                  <div className="text-xs font-mono tabular-nums">{r.total}</div>
                  <div className="text-xs">{r.mode}</div>
                  <div className="flex justify-center">
                    <button
                      className="w-[60px] px-2 py-1 rounded-lg border border-base-border bg-base-card text-xs"
                      onClick={(e) => { e.stopPropagation(); onView(r.snapshot); }}
                      aria-label={`View ${r.cat} (${fmtDate(r.ts)})`}
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}

            {/* View-all / Show-5 control under the last column */}
            {rows.length > 5 && (
              <div className={`col-span-full ${GRID}`}>
                <div className="col-start-1 justify-self-start py-2">
                  <button
                    className="text-xs px-2 py-1 rounded-lg border border-base-border bg-white/5 inline-flex items-center gap-1"
                    onClick={() => setShowAll(v => !v)}
                  >
                    {showAll ? "Show 5" : <>View all <span aria-hidden="true">›</span></>}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
