// src/components/Quiz.jsx
import { useState, useEffect, useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Papa from "papaparse";
import QuizSession from "./Quiz/QuizSession";
import QuizResults from "./Quiz/QuizResults";
import QuizReview from "./Quiz/QuizReview";
import { useGame } from "../App";

/* ---------------- LocalStorage Keys ---------------- */
const LS_RESUME = "qp_resume";
const LS_MISTAKES = "qp_mistakes";
const LS_STATS = "qp_stats";
const LS_LASTSET = "qp_lastset";
const LS_RECENT = "qp_recent";
const REVIEW_KEY = "qp_review_snapshot";
const RECENT_LIMIT = 50;

/* ---------------- Helper Functions ---------------- */
const fromSlug = (s = "") => 
  s.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

const toSlug = (s = "") =>
  s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

const pick = (arr, n) => 
  arr.slice().sort(() => Math.random() - 0.5).slice(0, n);

const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const safeReadJSON = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

/* ---------------- Load Questions ---------------- */
async function loadQuestions() {
  const url = "/data/quiz_questions_bank.csv";
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CSV not found at ${url}`);
  const csv = await res.text();
  
  const { data } = Papa.parse(csv, { 
    header: true, 
    skipEmptyLines: true, 
    transformHeader: h => String(h).trim().toLowerCase() 
  });

  const abc = { a: 0, b: 1, c: 2, d: 3 };
  
  return data.map((r, idx) => {
    const opts = [r.option1, r.option2, r.option3, r.option4]
      .map(v => (v ?? "").trim());
    
    if (opts.some(o => !o)) return null;

    let correctIndex = -1;
    const ans = String(r.answer ?? "").trim();
    
    if (abc[ans.toLowerCase()] !== undefined) {
      correctIndex = abc[ans.toLowerCase()];
    } else {
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

/* ---------------- Build Session ---------------- */
function buildSession(allQuestions, { categorySlug, difficulty, count }) {
  const wantMixed = categorySlug === "mixed";
  const catFilter = wantMixed 
    ? () => true 
    : (q) => toSlug(q.category) === categorySlug;
  const difFilter = difficulty 
    ? (q) => (q.difficulty || "medium") === difficulty 
    : () => true;

  const pool = allQuestions.filter(q => catFilter(q) && difFilter(q));
  const chosen = pick(pool, Math.min(count, pool.length));

  // Shuffle options per question
  const questions = chosen.map(q => {
    const order = shuffle([0, 1, 2, 3]);
    const newOpts = order.map(i => q.options[i]);
    const newAnswer = order.indexOf(q.answerIndex);
    return { ...q, options: newOpts, answerIndex: newAnswer };
  });

  return { questions, poolSize: pool.length };
}

/* ---------------- Main Quiz Component ---------------- */
export default function Quiz() {
  const navigate = useNavigate();
  const { category } = useParams();
  const location = useLocation();
  const { energy, useEnergy } = useGame();
  
  // Query params
  const qs = new URLSearchParams(location.search);
  const isReview = qs.get("review") === "1";
  const isRetakeQS = qs.get("retake") === "1";
  
  // Config from router state
  // IMPORTANT: Check if mode is explicitly set, otherwise determine from navigation source
  const mode = location.state?.mode || "quiz";
  const difficulty = String(location.state?.difficulty || "medium").toLowerCase();
  const count = clamp(Number(location.state?.count || 10), 1, 50);
  const timerConfig = location.state?.timer || { type: "per_q", seconds: 45 };
  const resumeFlag = Boolean(location.state?.resume);
  const isDaily = Boolean(location.state?.daily);
  const sourceTag = location.state?.source || null;
  const isRetake = isRetakeQS || Boolean(location.state?.retake);
  const fromHistory = Boolean(location.state?.fromHistory);
  
  // Determine if practice mode based on explicit mode or navigation source
  const isPractice = mode === "practice";
  
  // States
  const [allQuestions, setAllQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [session, setSession] = useState({ questions: [] });
  const [view, setView] = useState("quiz"); // "quiz" | "results" | "review"
  const [reviewSnapshot, setReviewSnapshot] = useState(null);
  const [startTs, setStartTs] = useState(null);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [energyDeducted, setEnergyDeducted] = useState(false); // Track energy deduction
  
  // Load questions on mount
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await loadQuestions();
        if (!alive) return;
        setAllQuestions(data);
      } catch (e) {
        console.error(e);
        setError("Failed to load questions. Check /public/data/quiz_questions_bank.csv");
      } finally {
        setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  // Handle external review
  useEffect(() => {
    if (!isReview) return;
    try {
      const raw = localStorage.getItem(REVIEW_KEY);
      if (!raw) return;
      const snap = JSON.parse(raw);
      setReviewSnapshot({
        questions: snap?.questions || [],
        answers: snap?.answers || [],
        skipped: snap?.skipped || []
      });
      setView("review");
    } catch (e) {
      console.error("Error loading review snapshot:", e);
    }
  }, [isReview]);

  // Initialize session
  useEffect(() => {
    if (isReview || loading || error) return;
    if (!allQuestions.length) return;

    // Check for resume
    if (resumeFlag) {
      const saved = safeReadJSON(LS_RESUME, null);
      if (saved?.slug === category && saved?.inProgress) {
        const sess = buildSession(allQuestions, {
          categorySlug: category,
          difficulty,
          count: saved.total || count,
        });
        setSession(sess);
        setStartTs(saved.startedAt || Date.now());
        setElapsedMs(0);
        return;
      }
    }

    // Check energy ONLY for quiz mode (adventure), NOT for practice mode
    if (!isPractice && !energyDeducted) {
      const energyCost = 10;
      if (energy < energyCost) {
        // If not enough energy for quiz mode, redirect to home
        navigate("/", { 
          state: { 
            message: "Not enough energy for Adventure mode. Try Practice mode instead!",
            openPractice: false // Don't automatically open practice
          } 
        });
        return;
      }
      // Deduct energy only when starting quiz mode
      useEnergy(energyCost);
      setEnergyDeducted(true);
    }

    // Build fresh session
    const sess = buildSession(allQuestions, {
      categorySlug: category,
      difficulty,
      count
    });
    setSession(sess);
    setStartTs(Date.now());
    setElapsedMs(0);
  }, [
    loading, 
    error, 
    allQuestions, 
    category, 
    difficulty, 
    count, 
    resumeFlag, 
    isReview,
    isPractice,
    energyDeducted,
    energy,
    useEnergy,
    navigate
  ]);

  // Track elapsed time
  useEffect(() => {
    if (view !== "quiz" || !startTs) return;
    
    const interval = setInterval(() => {
      setElapsedMs(Date.now() - startTs);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [view, startTs]);

  // Handlers with useCallback to prevent re-creation
  const handleQuizComplete = useCallback((results) => {
    console.log("Quiz completed with results:", results);
    console.log("Current mode:", mode, "isPractice:", isPractice);
    
    // Ensure results object is valid
    if (!results || !results.questions) {
      console.error("Invalid results object:", results);
      return;
    }

    // Save mistakes
    const wrongIds = results.questions
      .filter((q, i) => results.answers[i] !== null && results.answers[i] !== q.answerIndex)
      .map(q => q.id);
    
    try {
      const prev = safeReadJSON(LS_MISTAKES, []);
      const merged = Array.from(new Set([...wrongIds, ...prev]));
      localStorage.setItem(LS_MISTAKES, JSON.stringify(merged));
    } catch (e) {
      console.error("Error saving mistakes:", e);
    }

    // Save stats
    try {
      const stats = safeReadJSON(LS_STATS, { sessions: [] });
      stats.sessions.push({
        cat: fromSlug(category),
        mode: isPractice ? "practice" : "quiz",
        total: results.total,
        correct: results.correct,
        skipped: results.skipped.filter(Boolean).length,
        ms: elapsedMs,
        timestamp: Date.now()
      });
      localStorage.setItem(LS_STATS, JSON.stringify(stats));
    } catch (e) {
      console.error("Error saving stats:", e);
    }

    // Save snapshot for retake and review
    const snapshot = {
      ts: Date.now(),
      slug: category,
      categoryLabel: fromSlug(category),
      mode: isPractice ? "practice" : "quiz",
      difficulty,
      total: results.total,
      timer: timerConfig,
      ms: elapsedMs,
      attempted: results.answers.filter(a => a !== null).length,
      correct: results.correct,
      questions: results.questions,
      answers: results.answers,
      skipped: results.skipped
    };
    
    try {
      localStorage.setItem(LS_LASTSET, JSON.stringify(snapshot));
      
      // IMPORTANT: Also save to REVIEW_KEY for review functionality
      localStorage.setItem(REVIEW_KEY, JSON.stringify({
        questions: results.questions,
        answers: results.answers,
        skipped: results.skipped
      }));
      
      // Add to recent
      const prev = safeReadJSON(LS_RECENT, []);
      const entry = {
        id: snapshot.ts,
        ts: snapshot.ts,
        cat: snapshot.categoryLabel,
        slug: category,
        mode: isPractice ? "Practice" : "Quiz",
        total: results.total,
        correct: results.correct,
        ms: elapsedMs,
        snapshot
      };
      const recent = [entry, ...prev].slice(0, RECENT_LIMIT);
      localStorage.setItem(LS_RECENT, JSON.stringify(recent));
    } catch (e) {
      console.error("Error saving snapshot:", e);
    }

    // Clear resume
    localStorage.removeItem(LS_RESUME);

    // Update results and switch view
    setReviewSnapshot({
      ...results,
      category: fromSlug(category),
      mode: isPractice ? "practice" : "quiz",
      elapsedMs,
      isPractice // Explicitly pass this for results display
    });
    setView("results");
  }, [category, mode, timerConfig, elapsedMs, isPractice]);

  const handleQuit = useCallback(() => {
    if (fromHistory) {
      navigate("/profile/history", { replace: true, state: null });
    } else {
      navigate("/");
    }
  }, [fromHistory, navigate]);

  const handleRetake = useCallback(() => {
    const last = safeReadJSON(LS_LASTSET, null);
    if (!last || last.slug !== category) {
      // Fresh retake - reset energy deduction flag for quiz mode
      if (!isPractice) {
        setEnergyDeducted(false);
      }
      navigate(`/quiz/${category}?r=${Date.now()}`, {
        replace: true,
        state: { 
          mode: isPractice ? "practice" : "quiz", 
          difficulty, 
          count, 
          timer: timerConfig, 
          retake: true 
        }
      });
      return;
    }

    // Same set retake
    const reshuffled = last.questions.map(q => {
      const order = shuffle([0, 1, 2, 3]);
      return { 
        ...q, 
        options: order.map(i => q.options[i]), 
        answerIndex: order.indexOf(q.answerIndex) 
      };
    });

    // For quiz mode retake, check and deduct energy again
    if (!isPractice && energy < 10) {
      navigate("/", { 
        state: { 
          message: "Not enough energy for retake. Try Practice mode!",
          openPractice: false
        } 
      });
      return;
    }
    
    if (!isPractice) {
      useEnergy(10);
    }

    setSession({ questions: reshuffled, poolSize: reshuffled.length });
    setStartTs(Date.now());
    setElapsedMs(0);
    setView("quiz");
    window.scrollTo(0, 0);
  }, [category, mode, difficulty, count, timerConfig, navigate, isPractice, energy, useEnergy]);

  const handleReview = useCallback((snapshot = null) => {
    console.log("handleReview called with snapshot:", snapshot);
    console.log("Current reviewSnapshot:", reviewSnapshot);
    
    if (snapshot) {
      setReviewSnapshot(snapshot);
    } else if (!reviewSnapshot) {
      // Try to load from localStorage if no snapshot
      const saved = safeReadJSON(REVIEW_KEY, null);
      if (saved) {
        setReviewSnapshot({
          questions: saved.questions || [],
          answers: saved.answers || [],
          skipped: saved.skipped || []
        });
      }
    }
    setView("review");
  }, [reviewSnapshot]);

  const handleBackFromReview = useCallback(() => {
    if (fromHistory) {
      navigate("/profile/history", { replace: true });
    } else {
      setView("results");
    }
  }, [fromHistory, navigate]);

  // Loading/Error states
  if (loading) {
    return (
      <div className="fixed inset-0 bg-inherit text-white flex items-center justify-center">
        <div className="text-sm text-base-muted">Loading questions…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-inherit text-white flex items-center justify-center">
        <div className="text-sm text-red-400">{error}</div>
      </div>
    );
  }

  // Debug log
  console.log("Current view:", view, "Session questions:", session.questions.length, "Mode:", mode);

  // Render based on view
  return (
    <div className="fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]">
      <div className="h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]">
        
        {view === "quiz" && session.questions.length > 0 && (
          <QuizSession
            session={session}
            mode={mode}
            category={fromSlug(category)}
            difficulty={difficulty}
            timerConfig={timerConfig}
            onComplete={handleQuizComplete}
            onQuit={handleQuit}
          />
        )}

        {view === "results" && reviewSnapshot && (
          <QuizResults
            results={reviewSnapshot}
            onRetake={handleRetake}
            onReview={() => handleReview(reviewSnapshot)}
            isRetake={isRetake}
            isPractice={isPractice}
          />
        )}

        {view === "review" && reviewSnapshot && (
          <QuizReview
            questions={reviewSnapshot.questions || []}
            answers={reviewSnapshot.answers || []}
            skipped={reviewSnapshot.skipped || []}
            onBack={handleBackFromReview}
            onRetake={handleRetake}
            fromHistory={fromHistory}
          />
        )}
        
      </div>
    </div>
  );
}