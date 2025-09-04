// src/components/Quiz.jsx

import { useState, useEffect, useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Papa from "papaparse";
import QuizSession from "./QuizSession";
import QuizResults from "./QuizResults";
import QuizReview from "./QuizReview";
import { useGame } from "../../App";
import { allCategories } from '../../utils/categories';
import GameDataService from '../../services/GameDataService';
import UserService from '../../services/UserService';

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
  console.log("=== BUILD SESSION DEBUG ===");
  console.log("categorySlug:", categorySlug);
  console.log("difficulty:", difficulty);
  console.log("count:", count);
  console.log("Total questions available:", allQuestions.length);
  
  const wantMixed = categorySlug === "mixed";
  const catFilter = wantMixed 
    ? () => true 
    : (q) => {
        const matches = toSlug(q.category) === categorySlug;
        return matches;
      };
  
  const difFilter = difficulty 
    ? (q) => (q.difficulty || "medium") === difficulty 
    : () => true;

  const pool = allQuestions.filter(q => catFilter(q) && difFilter(q));
  
  console.log("Filtered pool size:", pool.length);
  console.log("Sample categories from all questions:", 
    [...new Set(allQuestions.slice(0, 10).map(q => `"${q.category}" -> "${toSlug(q.category)}"`))]
  );
  
  if (pool.length === 0) {
    console.error("No questions match the filter criteria!");
    console.log("Available categories:", [...new Set(allQuestions.map(q => toSlug(q.category)))]);
    return { questions: [], poolSize: 0 };
  }
  
  const chosen = pick(pool, Math.min(count, pool.length));

  // Shuffle options per question
  const questions = chosen.map(q => {
    const order = shuffle([0, 1, 2, 3]);
    const newOpts = order.map(i => q.options[i]);
    const newAnswer = order.indexOf(q.answerIndex);
    return { ...q, options: newOpts, answerIndex: newAnswer };
  });

  console.log("Final questions:", questions.length);
  return { questions, poolSize: pool.length };
}

/* ---------------- Main Quiz Component ---------------- */
export default function Quiz() {
  const navigate = useNavigate();
  const { category } = useParams();
  const location = useLocation();
  const { energy, useEnergy, player, addCoins, addXP, updateDailyStreak } = useGame();
//   const [routeKey, setRouteKey] = useState('');

  
  // Query params
  const qs = new URLSearchParams(location.search);
  const isReview = qs.get("review") === "1";
  const isRetakeQS = qs.get("retake") === "1";
  
  // Config from router state
  const routerState = location.state || {};
  const mode = routerState.mode || "quiz";
  const difficulty = String(routerState.difficulty || "medium").toLowerCase();
  const returnPath = routerState.returnPath || null;
  const fromQuest = routerState.fromQuest || false;
  const count = clamp(Number(routerState.count || 10), 1, 50);
  const timerConfig = routerState.timer || { type: "per_q", seconds: 45 };
  const resumeFlag = Boolean(routerState.resume);
  const isDaily = Boolean(routerState.daily);
  const sourceTag = routerState.source || null;
  const isRetake = isRetakeQS || Boolean(routerState.retake);
  const fromHistory = Boolean(routerState.fromHistory);
  
  const isPractice = mode === "practice";
  
  // Debug logging
  console.log("Quiz Component - Mode Detection:", {
    routerState,
    mode,
    isPractice,
    location: location.pathname,
    state: location.state
  });
  
  // States
  const [allQuestions, setAllQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [session, setSession] = useState({ questions: [] });
  const [view, setView] = useState("quiz");
  const [reviewSnapshot, setReviewSnapshot] = useState(null);
  const [startTs, setStartTs] = useState(null);
  const [elapsedMs, setElapsedMs] = useState(0);
    
    // useEffect(() => {
    //     // Create unique key for this route instance
    //     const key = `${category}-${location.search}-${JSON.stringify(location.state)}`;
    //     if (key !== routeKey) {
    //     setRouteKey(key);
    //     // Reset everything for new quiz
    //     setAllQuestions([]);
    //     setLoading(true);
    //     setError("");
    //     setSession({ questions: [] });
    //     setView("quiz");
    //     setReviewSnapshot(null);
    //     setStartTs(null);
    //     setElapsedMs(0);
    //     }
    // }, [category, location.search, location.state]);


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

  // Initialize session when questions are loaded or route changes
  useEffect(() => {
    // Skip if still loading, has error, or is review mode
    if (loading || error || isReview) return;
    
    // Skip if no questions loaded yet
    if (allQuestions.length === 0) return;
    
    console.log("=== SESSION INIT ===");
    console.log("Category:", category);
    console.log("Mode:", mode);
    console.log("Difficulty:", difficulty);
    console.log("Count:", count);
    
    // Build the session
    const sess = buildSession(allQuestions, {
      categorySlug: category,
      difficulty,
      count
    });
    
    if (sess.questions.length === 0) {
      console.error("No questions found!");
      console.log("Looking for category:", category);
      console.log("Available categories (first 10):", [...new Set(allQuestions.map(q => toSlug(q.category)))].slice(0, 10));
      setError(`No questions found for "${fromSlug(category)}" with difficulty "${difficulty}"`);
      return;
    }
    
    console.log("Session built with", sess.questions.length, "questions");
    
    // Set the session and start
    setSession(sess);
    setStartTs(Date.now());
    setElapsedMs(0);
    setView("quiz");
    
  }, [allQuestions, category, mode, difficulty, count, location.state, location.search]);




// // Add this NEW useEffect right after your existing load questions useEffect
// useEffect(() => {
//   // Force re-initialization when navigating to a new quiz
//   if (!loading && allQuestions.length > 0 && !isReview) {
//     console.log("Navigation detected, reinitializing session");
    
//     // Build new session immediately
//     const sess = buildSession(allQuestions, {
//       categorySlug: category,
//       difficulty,
//       count
//     });
    
//     if (sess.questions.length > 0) {
//       setSession(sess);
//       setStartTs(Date.now());
//       setElapsedMs(0);
//       setView("quiz");
//     }
//   }
// }, [category, location.state?.mode, location.state?.difficulty, location.state?.count]); // Trigger on navigation changes



//   // Handle external review
//   useEffect(() => {
//     if (!isReview) return;
//     try {
//       const raw = localStorage.getItem(REVIEW_KEY);
//       if (!raw) return;
//       const snap = JSON.parse(raw);
//       setReviewSnapshot({
//         questions: snap?.questions || [],
//         answers: snap?.answers || [],
//         skipped: snap?.skipped || []
//       });
//       setView("review");
//     } catch (e) {
//       console.error("Error loading review snapshot:", e);
//     }
//   }, [isReview]);

//   // In Quiz.jsx, modify the session initialization useEffect
// useEffect(() => {
//   console.log("=== SESSION INIT DEBUG ===");
//   console.log("isReview:", isReview);
//   console.log("loading:", loading);
//   console.log("error:", error);
//   console.log("allQuestions.length:", allQuestions.length);
//   console.log("category:", category);
//   console.log("mode:", mode);
//   console.log("isPractice:", isPractice);
  
//   if (isReview || loading || error) {
//     console.log("Exiting early - isReview/loading/error");
//     return;
//   }
  
//   // THIS IS THE KEY FIX: Wait for questions to actually load
//   if (!allQuestions || allQuestions.length === 0) {
//     console.log("Exiting early - no questions loaded yet");
//     return;
//   }

//   // Add a small delay to ensure state is settled
//   const timer = setTimeout(() => {
//     // Check for resume
//     if (resumeFlag) {
//       console.log("Checking for resume...");
//       const saved = safeReadJSON(LS_RESUME, null);
//       if (saved?.slug === category && saved?.inProgress) {
//         console.log("Resuming saved session");
//         const sess = buildSession(allQuestions, {
//           categorySlug: category,
//           difficulty,
//           count: saved.total || count,
//         });
//         setSession(sess);
//         setStartTs(saved.startedAt || Date.now());
//         setElapsedMs(0);
//         return;
//       }
//     }

//     // Build fresh session
//     console.log("Building fresh session with params:", {
//       categorySlug: category,
//       difficulty,
//       count
//     });
    
//     const sess = buildSession(allQuestions, {
//       categorySlug: category,
//       difficulty,
//       count
//     });
    
//     console.log("Built session result:", {
//       questionsCount: sess.questions.length,
//       poolSize: sess.poolSize,
//       firstQuestion: sess.questions[0]?.prompt
//     });
    
//     if (sess.questions.length === 0) {
//       console.error("No questions found for category:", category, "difficulty:", difficulty);
//       setError(`No questions found for category "${fromSlug(category)}" with difficulty "${difficulty}"`);
//       return;
//     }
    
//     setSession(sess);
//     setStartTs(Date.now());
//     setElapsedMs(0);
//     setLoading(false); // Set loading to false here
//   }, 100); // Small delay to ensure everything is ready

//   return () => clearTimeout(timer);
// }, [
//   loading, 
//   error, 
//   allQuestions, 
//   category, 
//   difficulty, 
//   count, 
//   resumeFlag, 
//   isReview,
//   mode,
//   location.search, // Add this to trigger re-init on navigation
//   location.state   // Add this too
// ]);

  // Track elapsed time
  useEffect(() => {
    if (view !== "quiz" || !startTs) return;
    
    const interval = setInterval(() => {
      setElapsedMs(Date.now() - startTs);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [view, startTs]);
  

  // Handlers
  const handleQuizComplete = useCallback((results) => {
  console.log("Quiz completed - Mode:", mode, "isPractice:", isPractice, "Results:", results);
  console.log("handleQuizComplete called at:", new Date().toISOString());
  
  // Add guard against duplicate calls
  if (window._quizCompleting) {
    console.warn("Quiz completion already in progress, ignoring duplicate call");
    return;
  }
  window._quizCompleting = true;
  setTimeout(() => { window._quizCompleting = false; }, 1000);
    
    if (!results || !results.questions) {
      console.error("Invalid results object:", results);
      return;
    }

    // Save mistakes (for both modes - helps with learning)
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

    // Save stats with proper mode differentiation
    try {
      const stats = safeReadJSON(LS_STATS, { sessions: [] });
      stats.sessions.push({
        cat: fromSlug(category),
        mode: isPractice ? "practice" : "quiz",
        total: results.total,
        correct: results.correct,
        skipped: results.skipped.filter(Boolean).length,
        ms: elapsedMs,
        timestamp: Date.now(),
        earnedXP: isPractice ? 0 : results.correct * 10,
        earnedCoins: isPractice ? 0 : results.correct * 5
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
      timer: isPractice ? null : timerConfig,
      ms: elapsedMs,
      attempted: results.answers.filter(a => a !== null).length,
      correct: results.correct,
      questions: results.questions,
      answers: results.answers,
      skipped: results.skipped,
      isPractice
    };
    
    try {
      localStorage.setItem(LS_LASTSET, JSON.stringify(snapshot));
      
      localStorage.setItem(REVIEW_KEY, JSON.stringify({
        questions: results.questions,
        answers: results.answers,
        skipped: results.skipped
      }));
      
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

// Record the session properly through GameDataService
const currentUser = UserService.getCurrentUser();
if (currentUser?.phone) {
  if (isPractice) {
    // For practice: 2 coins per question completed
    const practiceResult = GameDataService.recordPracticeSession(currentUser.phone, {
      questionsCompleted: results.total,
      correctAnswers: results.correct,
      category: category
    });
    results.earnedCoins = practiceResult.coinsEarned;
  } else {
    // For quiz: 5 coins per correct answer
    const quizResult = GameDataService.recordQuizSession(currentUser.phone, {
      score: results.correct,
      totalQuestions: results.total,
      category: category,
      difficulty: difficulty,
      mode: 'quiz'
    });
    results.earnedCoins = quizResult.coinsEarned;
  }
} else {
  // If no user logged in, don't add coins at all
  results.earnedCoins = 0;
}

  // Update daily streak
  updateDailyStreak();

// Add debug logging
console.log('Setting review snapshot with:', {
  returnPath: returnPath || '/',
  fromQuest: fromQuest || false
});

setReviewSnapshot({
  ...results,
  category: fromSlug(category),
  categorySlug: category,  
  difficulty: difficulty,   
  mode: isPractice ? "practice" : "quiz",
  elapsedMs,
  isPractice,
  hasTimer: !isPractice,
  earnedXP: isPractice ? 0 : results.correct * 10,
  earnedCoins: isPractice ? (results.earnedCoins || 0) : results.correct * 5,
  returnPath: returnPath || '/',    // Use the variable from line 168
  fromQuest: fromQuest || false      // Use the variable from line 169
});
    setView("results");
  }, [category, mode, timerConfig, elapsedMs, isPractice, returnPath, fromQuest]);

   // Helper function for date key
  const getTodayKey = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  };

  // Add this function to handle practice progress updates
  const updatePracticeProgress = useCallback((questionsAttempted) => {
    if (isPractice && fromQuest) {
      // Get current progress from localStorage
      const progress = JSON.parse(localStorage.getItem('questProgress') || '{}');
      const currentProgress = progress.practiceQuestions || 0;
      
      // Update with new attempted questions
      const newProgress = Math.min(currentProgress + questionsAttempted, 15);
      progress.practiceQuestions = newProgress;
      progress.date = getTodayKey();
      localStorage.setItem('questProgress', JSON.stringify(progress));
      
      console.log('Practice progress updated:', newProgress);
    }
  }, [isPractice, fromQuest]);

  const handleQuit = useCallback(() => {
    // Use the returnPath that was extracted at component level
    if (returnPath) {
      navigate(returnPath, { replace: true });
    } else if (fromHistory) {
      navigate("/profile/history", { replace: true, state: null });
    } else {
      navigate("/");
    }
  }, [fromHistory, navigate, returnPath]);  // Use returnPath from component level

  const handleRetake = useCallback(() => {
    console.log("Retake requested - Mode:", mode, "isPractice:", isPractice);
    
    const last = safeReadJSON(LS_LASTSET, null);
    if (!last || last.slug !== category) {
      navigate(`/quiz/${category}?r=${Date.now()}`, {
        replace: true,
        state: { 
          mode: isPractice ? "practice" : "quiz", 
          difficulty, 
          count, 
          timer: isPractice ? null : timerConfig,
          retake: true 
        }
      });
      return;
    }

    // Reshuffle same questions
    const reshuffled = last.questions.map(q => {
      const order = shuffle([0, 1, 2, 3]);
      return { 
        ...q, 
        options: order.map(i => q.options[i]), 
        answerIndex: order.indexOf(q.answerIndex) 
      };
    });

    setSession({ questions: reshuffled, poolSize: reshuffled.length });
    setStartTs(Date.now());
    setElapsedMs(0);
    setView("quiz");
    window.scrollTo(0, 0);
  }, [category, mode, difficulty, count, timerConfig, navigate, isPractice]);

  const handleReview = useCallback((snapshot = null) => {
    if (snapshot) {
      setReviewSnapshot(snapshot);
    } else if (!reviewSnapshot) {
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

  console.log("Render - Current view:", view, "Session questions:", session.questions.length, "Mode:", mode, "isPractice:", isPractice);

  // Render based on view
  return (
    <div className="fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]">
      <div className="h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]">
        
        {view === "quiz" && session.questions.length > 0 && (
          <QuizSession
            session={session}
            mode={isPractice ? "practice" : "quiz"}
            category={fromSlug(category)}
            difficulty={difficulty}
            timerConfig={isPractice ? null : timerConfig}
            onComplete={handleQuizComplete}
            onQuit={handleQuit}
            isPractice={isPractice}
          />
        )}

        {view === "results" && reviewSnapshot && (
          <QuizResults
            results={reviewSnapshot}
            onRetake={handleRetake}
            onReview={() => handleReview(reviewSnapshot)}
            isRetake={isRetake}
            isPractice={isPractice}
            player={player}
            categories={allCategories}
            addCoins={() => {}}  // Empty function since coins are already added via GameDataService
            onNavigate={(path, options) => {
              console.log('onNavigate called with:', path, options);
              if (options?.state) {
                navigate(path, { state: options.state, replace: options.replace || false });
              } else {
                navigate(path);
              }
            }}
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
            isPractice={isPractice}
          />
        )}
        
      </div>
    </div>
  );
}