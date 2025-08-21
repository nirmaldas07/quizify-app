// src/components/Home.jsx
import { useEffect, useMemo, useRef, useState, useLayoutEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import Papa from "papaparse";
import ConfirmStartSheet from "./ConfirmStartSheet";

/* ------------ Categories (5 + More) ------------ */
const primaryCats = [
  { name: "General Knowledge", questions: 50, icon: "🧠" },
  { name: "Artificial Intelligence", questions: 28, icon: "🤖" },
  { name: "Fun facts",         questions: 30, icon: "🎉" },
  { name: "Science",           questions: 45, icon: "🧪" },
  { name: "History",           questions: 42, icon: "🏺" },
];
const extraCats = [
  { name: "Geography",               questions: 38, icon: "🗺️" },
  { name: "Computer",                questions: 34, icon: "💻" },
  { name: "Aptitude",                questions: 36, icon: "📐" },
  { name: "Iconic Figures",          questions: 26, icon: "🌟" },
];
const categories = [...primaryCats, { name: "More", questions: extraCats.length, icon: "➕" }];
const ALL_CATEGORIES = [...primaryCats, ...extraCats].map(c => c.name);

/* ------------ Storage keys ------------ */
const LS_LAST_ANSWERED = "dq_last_answered"; // y-m-d string
const LS_STREAK        = "dq_streak";
const LS_BEST_STREAK   = "dq_best_streak";
const LS_WEEKLY_COUNT  = "dq_weekly_count";
const LS_DAILY_LOG     = "dq_daily_log";     // paint weekly row

const LS_RESUME        = "qp_resume";
const LS_LAST_QUIZ_MAP = "qp_last_quiz_map";
const LS_LAST_PRACT    = "qp_last_practice";
const LS_LAST_DAILY    = "qp_last_daily";
const LS_MISTAKES      = "qp_mistakes";

/* ------------ XP & Coins ------------ */
const XP_KEY = "qp_xp";
const LVL_KEY = "qp_level";
const COIN_KEY = "qp_coins";
const DAILY_Q_XP = 10;
const DAILY_Q_COINS = 5;
const COIN_TO_XP = 2;
const threshold = (n) => 100 * n * (n - 1);

/* ------------ Helpers ------------ */
const toSlug = (s) =>
  s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
const cap = (s="") => s.slice(0,1).toUpperCase() + s.slice(1);

const ymd = (d = new Date()) =>
  d.toLocaleDateString("en-CA", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });

const startOfWeekMon = (date = new Date()) => {
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7; // Mon=0
  d.setHours(0,0,0,0);
  d.setDate(d.getDate() - day);
  return d;
};

const fmtHMS = (ms) => {
  if (ms < 0) ms = 0;
  const s = Math.floor(ms / 1000);
  return `${String(Math.floor(s/3600)).padStart(2,"0")}:${String(Math.floor((s%3600)/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
};

const defaultQuiz     = { difficulty: "medium", count: 10, seconds: 45 };
const defaultPractice = { difficulty: "medium", count: 10, seconds: 0 };
const defaultDaily    = { category: "All", difficulty: "medium", count: 10, seconds: 45 };

const readJSON  = (k, fallback=null) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch { return fallback; } };
const writeJSON = (k, v) => localStorage.setItem(k, JSON.stringify(v));

const getQuizCfgFor = (categoryName, fallback = defaultQuiz) => {
  const slug = toSlug(categoryName);
  try {
    const map = JSON.parse(localStorage.getItem(LS_LAST_QUIZ_MAP) || "{}");
    if (map && map[slug]) return { ...fallback, ...map[slug] };
  } catch {}
  return fallback;
};
const saveQuizCfgFor = (categoryName, cfg) => {
  const slug = toSlug(categoryName);
  let map = {};
  try { map = JSON.parse(localStorage.getItem(LS_LAST_QUIZ_MAP) || "{}"); } catch {}
  map[slug] = { difficulty: cfg.difficulty, count: cfg.count, seconds: cfg.seconds };
  localStorage.setItem(LS_LAST_QUIZ_MAP, JSON.stringify(map));
};

/* ------------ Small UI bits ------------ */
function XPill({ level, xp, next, onClick }) {
  const pct = Math.min(xp / next, 1);
  return (
    <button onClick={onClick} className="px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left">
      <div className="text-[11px]">Lvl {level} • {xp}/{next}</div>
      <div className="mt-1 h-1 w-full bg-white/10 rounded">
        <div className="h-1 bg-brand-blue rounded" style={{ width: `${pct * 100}%` }} />
      </div>
    </button>
  );
}
function CoinPill({ total, onClick, pillRef }) {
  return <button ref={pillRef} onClick={onClick} className="pill">🪙 {total}</button>;
}
function WheelIcon({ size = 70 }) {
  return (
    <div style={{ width: size, height: size }} className="grid place-items-center">
      <svg viewBox="0 0 100 100" className="motion-safe:animate-[spin_9s_linear_infinite] active:motion-safe:animate-[spin_1.2s_linear_infinite]">
        <path d="M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z" fill="#6366F1" />
        <path d="M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z" fill="#22C55E" />
        <path d="M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z" fill="#F59E0B" />
        <path d="M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z" fill="#EF4444" />
        <path d="M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z" fill="#3B82F6" />
        <path d="M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z" fill="#8B5CF6" />
        <circle cx="50" cy="50" r="9" fill="#111827" stroke="white" strokeWidth="2"/>
      </svg>
    </div>
  );
}
function ProgressRing({ size=64, value=0, done=false, stroke=6, showCheck=false }) {
  const r=(size-stroke)/2, c=2*Math.PI*r, o=c*(1-Math.min(Math.max(value,0),1));
  const color = done ? "rgb(34 197 94)" : "rgb(59,130,246)";
  return (
    <div className="relative" style={{ width:size, height:size }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} stroke="rgba(255,255,255,.15)" strokeWidth={stroke} fill="none"/>
        <circle cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth={stroke} fill="none"
                strokeLinecap="round" strokeDasharray={c} strokeDashoffset={o}
                style={{ transition:"stroke-dashoffset .4s ease, stroke .2s ease" }}/>
      </svg>
      {showCheck && <div className="absolute inset-0 grid place-items-center text-xl">✅</div>}
    </div>
  );
}
function WeeklyRow({ log }) {
  const labels = ["M","T","W","T","F","S","S"];
  const monday = startOfWeekMon(new Date());
  const todayY = ymd();
  const items = Array.from({ length: 7 }).map((_, idx) => {
    const d = new Date(monday); d.setDate(monday.getDate()+idx);
    const key = ymd(d);
    let color = "bg-white/12"; // future
    if (key < todayY) color = log[key] ? "bg-green-500" : "bg-red-500/80";
    if (key === todayY) color = log[key] ? "bg-green-500" : "bg-white/12";
    return { label: labels[idx], color };
  });
  return (
    <div className="w-full">
      <div className="flex justify-between text-[11px] text-base-muted/80 px-1 mb-1">
        {items.map((it, i) => <span key={i} className="w-6 text-center">{it.label}</span>)}
      </div>
      <div className="flex justify-between px-1">
        {items.map((it, i) => <span key={i} className={`h-1.5 w-6 rounded-full ${it.color}`} />)}
      </div>
    </div>
  );
}

function Sheet({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      document.body.classList.remove("modal-open");
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[120] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="relative w-[calc(100%-2rem)] max-w-md mx-auto rounded-2xl
                   bg-base-card border border-base-border shadow-2xl
                   p-5 pb-[calc(1rem+env(safe-area-inset-bottom))]
                   max-h-[90vh] overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}



/* ------------ Home ------------ */
export default function Home() {
  const navigate = useNavigate();

  // ✅ hooks only inside components + use public paths for sounds
  const [playCorrect] = useSound("/sounds/correct.mp3", { volume: 0.6 });
  const [playWrong]   = useSound("/sounds/wrong.mp3",   { volume: 0.6 });
  const [playCoin]    = useSound("/sounds/coin.mp3",    { volume: 0.75 });

  /* XP/Coins */
  const [level, setLevel] = useState(() => parseInt(localStorage.getItem(LVL_KEY)  || "1", 10));
  const [xp, setXp]       = useState(() => parseInt(localStorage.getItem(XP_KEY)   || "0", 10));
  const [coins, setCoins] = useState(() => parseInt(localStorage.getItem(COIN_KEY) || "0", 10));
  const nextThreshold = threshold(level + 1);
  const xpToNext = Math.max(0, nextThreshold - xp);
  const coinsNeeded = Math.ceil(xpToNext / COIN_TO_XP);

  /* Streaks (unchanged layout) */
  const [streak, setStreak]   = useState(() => Number(localStorage.getItem(LS_STREAK) || 0));
  const [bestStreak, setBest] = useState(() => Number(localStorage.getItem(LS_BEST_STREAK) || 0));

  /* Weekly row (visual only) */
  const [weeklyCount, setWeekly] = useState(0);
  useEffect(() => {
    const dd = new Date();
    const day = (dd.getDay() + 6) % 7;
    const monday = new Date(dd); monday.setDate(dd.getDate() - day);
    const yearStart = new Date(dd.getFullYear(), 0, 1);
    const pastDays = Math.floor((monday - yearStart) / (24 * 3600 * 1000));
    const week = Math.floor(pastDays / 7) + 1;
    const wkKey = `${dd.getFullYear()}-W${String(week).padStart(2, "0")}`;
    let obj={}; try{obj=JSON.parse(localStorage.getItem(LS_WEEKLY_COUNT)||"{}");}catch{}
    setWeekly(Number(obj[wkKey]||0));
  }, []);

  /* Countdown to midnight */
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t=setInterval(()=>setNow(Date.now()),1000); return ()=>clearInterval(t); },[]);
  const msToMidnight = useMemo(() => {
    const n=new Date(); const next=new Date(n); next.setHours(24,0,0,0); return next-n;
  },[now]);

  /* Daily log helpers */
  const readDailyLog = () => { try { return JSON.parse(localStorage.getItem(LS_DAILY_LOG)||"{}"); } catch { return {}; } };
  const writeDailyLog = (d) => {
    const obj = readDailyLog(); obj[d]=true; localStorage.setItem(LS_DAILY_LOG, JSON.stringify(obj));
  };

  /* ===== Today’s Question ===== */
  const [dailyQ, setDailyQ] = useState(null);
  const [picked, setPicked] = useState(null);
  const [flipped, setFlipped] = useState(false); // false = question side, true = congrats side

  // Streak ring shows ✅ after first answer today
  const [ringFilled, setRingFilled] = useState(() => readDailyLog()[ymd()] === true);
  const ringValue = ringFilled ? 1 : 0;

  // Avoid React 18 StrictMode double-run
  const didInitialLoad = useRef(false);

  const loadRandomFromCSV = async () => {
    try {
      const csv = await fetch("/data/quiz_questions_bank.csv").then(r => r.text());
      const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
      if (!Array.isArray(data) || data.length === 0) throw new Error("empty");
      const row = data[Math.floor(Math.random()*data.length)];
      const opts = [row.option1, row.option2, row.option3, row.option4];
      let ans = String(row.answer || "").trim();
      const abc = { A:0, B:1, C:2, D:3 };
      let correctIndex = abc[ans?.toUpperCase()];
      if (correctIndex === undefined) {
        correctIndex = opts.findIndex(o => (o||"").trim().toLowerCase() === ans.toLowerCase());
      }
      if (correctIndex === -1 || correctIndex === undefined) correctIndex = 0;

      setDailyQ({
        category: row.category || row.subject || "General Knowledge",
        prompt: row.question,
        options: opts,
        answerIndex: correctIndex,
      });
    } catch {
      // fallback
      setDailyQ({
        category: "General Knowledge",
        prompt: "Which planet is known as the Red Planet?",
        options: ["Earth","Mars","Jupiter","Venus"],
        answerIndex: 1,
      });
    }
  };

  const refreshDailyQuestion = async () => {
    setPicked(null);
    setFlipped(false);
    await loadRandomFromCSV();
  };

  // Initial load (once)
  useEffect(() => {
    if (didInitialLoad.current) return;
    didInitialLoad.current = true;
    refreshDailyQuestion();
  }, []);

  // External triggers
  useEffect(() => {
    const onRefresh = () => { refreshDailyQuestion(); };
    const onScrollTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };
    window.addEventListener("home:refresh", onRefresh);
    window.addEventListener("home:focus", onRefresh);
    window.addEventListener("home:scrollTop", onScrollTop);
    return () => {
      window.removeEventListener("home:refresh", onRefresh);
      window.removeEventListener("home:focus", onRefresh);
      window.removeEventListener("home:scrollTop", onScrollTop);
    };
  }, []);

  /* Refs */
  const categoriesRef = useRef(null);
  const coinPillRef = useRef(null);

  /* Resume banner detection */
  const [resume, setResume] = useState(() => readJSON(LS_RESUME, null));
  useEffect(() => {
    const i = setInterval(()=> setResume(readJSON(LS_RESUME, null)), 1500);
    return ()=> clearInterval(i);
  }, []);

  /* Coins flight animation */
  const flyCoinsFromRect = (startRect, count=12, onEnd) => {
    const endRect = coinPillRef.current?.getBoundingClientRect();
    if (!endRect) return;
    const layer = document.getElementById("coin-layer");
    if (!layer) return;
    const ex = endRect.left + endRect.width/2;
    const ey = endRect.top  + endRect.height/2;
    const sx = startRect.left + startRect.width/2;
    const sy = startRect.top  + startRect.height/2;
    const duration = 900;

    let finished = 0;
    for (let i=0;i<count;i++){
      const coin = document.createElement("div");
      coin.textContent = "🪙";
      coin.style.position = "fixed";
      coin.style.left = "0px"; coin.style.top = "0px";
      coin.style.zIndex = "100";
      coin.style.pointerEvents = "none";
      coin.style.fontSize = "22px";
      coin.style.opacity = "1";
      coin.style.willChange = "transform, opacity";
      const jitterX = (Math.random()*90 - 45);
      const jitterY = (Math.random()*40 - 10);
      const x0 = sx + jitterX, y0 = sy + jitterY;
      const x1 = ex + (Math.random()*18 - 9), y1 = ey + (Math.random()*12 - 6);
      const delay = i * 60;
      coin.style.transform = `translate(${x0}px, ${y0}px) scale(1)`;
      layer.appendChild(coin);
      void coin.getBoundingClientRect();
      coin.style.transition = `transform ${duration}ms cubic-bezier(.2,.8,.2,1), opacity ${duration}ms linear`;
      coin.style.transitionDelay = `${delay}ms`;
      requestAnimationFrame(() => {
        coin.style.transform = `translate(${x1}px, ${y1}px) scale(.6)`;
        coin.style.opacity = "0.1";
      });
      const total = duration + delay + 50;
      setTimeout(() => {
        coin.remove();
        finished += 1;
        if (finished === count && typeof onEnd === "function") onEnd();
      }, total);
    }
  };

  const awardXP = (amount) => {
    let newXP = xp + amount;
    let newLevel = level;
    while (newXP >= threshold(newLevel+1)) newLevel += 1;
    setXp(newXP); setLevel(newLevel);
    localStorage.setItem(XP_KEY,String(newXP));
    localStorage.setItem(LVL_KEY,String(newLevel));
  };
  const awardCoins = (amount) => {
    const next = coins + amount;
    setCoins(next);
    localStorage.setItem(COIN_KEY,String(next));
  };

  /* Handle Today’s pick */
  const handlePick = (i, e) => {
    if (!dailyQ || picked !== null) return;
    setPicked(i);

    const correct = i===dailyQ.answerIndex;
    const todayKey = ymd();
    const last = localStorage.getItem(LS_LAST_ANSWERED) || "";

    if (correct) {
      playCorrect();
      if (e?.currentTarget) {
        const rect = e.currentTarget.getBoundingClientRect();
        playCoin();
        flyCoinsFromRect(rect, 14, () => {
          awardXP(DAILY_Q_XP);
          awardCoins(DAILY_Q_COINS);
        });
      }
    } else {
      playWrong();
    }

    setTimeout(() => {
      writeDailyLog(todayKey);

      if (last !== todayKey) {
        localStorage.setItem(LS_LAST_ANSWERED, todayKey);
        let newStreak = 1;
        if (last) {
          const diff = Math.round((new Date(todayKey) - new Date(last))/(24*3600*1000));
          newStreak = diff===1 ? streak+1 : diff>1 ? 1 : streak;
        }
        setStreak(newStreak);
        localStorage.setItem(LS_STREAK,String(newStreak));
        const newBest = Math.max(bestStreak, newStreak);
        setBest(newBest); localStorage.setItem(LS_BEST_STREAK,String(newBest));
      }

      setRingFilled(true);
      setFlipped(true);
    }, 600);
  };

  /* ===== Flip-card auto height ===== */
  const frontRef = useRef(null);
  const backRef  = useRef(null);
  const spacerRef = useRef(null);

  const measureFlipHeight = useCallback(() => {
    const el = (flipped ? backRef.current : frontRef.current);
    if (!el || !spacerRef.current) return;
    const h = el.scrollHeight;
    spacerRef.current.style.height = `${h}px`;
  }, [flipped]);

  useLayoutEffect(() => { measureFlipHeight(); }, [measureFlipHeight, dailyQ, picked]);
  useEffect(() => {
    const onResize = () => measureFlipHeight();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureFlipHeight]);

  /* ===== Sheets & state ===== */
  const [showLevels, setShowLevels] = useState(false);
  const [showCoins,  setShowCoins]  = useState(false);
  const [showMoreCats, setShowMoreCats] = useState(false);

  const [showQuizConfig, setShowQuizConfig] = useState(false);
  const [quizCategory, setQuizCategory]     = useState(null);
  const [quizDifficulty, setQuizDifficulty] = useState(getQuizCfgFor("default").difficulty);
  const [quizCount, setQuizCount]           = useState(getQuizCfgFor("default").count);
  const [quizSeconds, setQuizSeconds]       = useState(getQuizCfgFor("default").seconds);

  const [showPracticeConfig, setShowPracticeConfig] = useState(false);
  const [practiceCategory, setPracticeCategory]     = useState(null);
  const [practiceDifficulty, setPracticeDifficulty] = useState(readJSON(LS_LAST_PRACT, defaultPractice)?.difficulty || "medium");
  const [practiceCount, setPracticeCount]           = useState(readJSON(LS_LAST_PRACT, defaultPractice)?.count || 10);

  const [showDailyConfig, setShowDailyConfig] = useState(false);
  const [dailyCategory, setDailyCategory]     = useState(readJSON(LS_LAST_DAILY, defaultDaily)?.category || "All");
  const [dailyDifficulty, setDailyDifficulty] = useState(readJSON(LS_LAST_DAILY, defaultDaily)?.difficulty || "medium");
  const [dailyCount, setDailyCount]           = useState(readJSON(LS_LAST_DAILY, defaultDaily)?.count || 10);
  const [dailySeconds, setDailySeconds]       = useState(readJSON(LS_LAST_DAILY, defaultDaily)?.seconds || 45);

  /* Confirm-start popup */
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmCat, setConfirmCat]   = useState(null);

  const openQuizConfig = (catName) => {
  const cfg = getQuizCfgFor(catName);
  setQuizCategory(catName);
  setQuizDifficulty(cfg.difficulty);
  setQuizCount(cfg.count);
  setQuizSeconds(cfg.seconds);
  setShowQuizConfig(true);
};
  
  const startQuizWithCfg = (catName) => {
    const cfg = getQuizCfgFor(catName);
    saveQuizCfgFor(catName, cfg);
    navigate(`/quiz/${toSlug(catName)}/start`, {
      state: {
        mode: "quiz",
        difficulty: cfg.difficulty,
        count: cfg.count,
        timer: { type: "per_q", seconds: cfg.seconds },
      }
    });
  };

  const startPracticeQuick = (catName) => {
    const last = readJSON(LS_LAST_PRACT, defaultPractice);
    const cfg = { difficulty: last?.difficulty || "medium", count: last?.count || 10 };
    writeJSON(LS_LAST_PRACT, { ...cfg });
    navigate(`/quiz/${toSlug(catName)}/start`, {
      state: { mode: "practice", difficulty: cfg.difficulty, count: cfg.count, timer: { type: "off", seconds: 0 } }
    });
  };
  const startDailyQuick = () => {
    const last = readJSON(LS_LAST_DAILY, defaultDaily);
    writeJSON(LS_LAST_DAILY, last || defaultDaily);
    navigate(`/quiz/${last?.category === "All" ? "mixed" : toSlug(last?.category || "mixed")}/start`, {
      state: { mode: "quiz", difficulty: last?.difficulty || "medium", count: last?.count || 10, timer: { type: "per_q", seconds: last?.seconds ?? 45 }, daily: true }
    });
  };
  const goResume = () => {
    const r = readJSON(LS_RESUME, null);
    if (!r?.slug) return;
    navigate(`/quiz/${r.slug}/start`, { state: { resume: true } });
  };

  /* Confirm sheet content */
  const confirmSummary = confirmCat
    ? `Category: ${confirmCat}\nDifficulty: ${cap(getQuizCfgFor(confirmCat).difficulty)}\nQuestion count: ${getQuizCfgFor(confirmCat).count}`
    : "";
  const confirmHasResume = (() => {
    try {
      const r = JSON.parse(localStorage.getItem(LS_RESUME) || "null");
      return r?.inProgress && r?.slug === toSlug(confirmCat || "");
    } catch { return false; }
  })();
  const confirmResumeInfo = (() => {
    try {
      const r = JSON.parse(localStorage.getItem(LS_RESUME) || "null");
      if (!r || r.slug !== toSlug(confirmCat || "")) return null;
      return { index: r.index ?? 0, total: r.total ?? 0, remainingSec: r.remainingSec };
    } catch { return null; }
  })();
  const handleConfirmStart  = () => { if (!confirmCat) return; setConfirmOpen(false); startQuizWithCfg(confirmCat); };
  const handleConfirmResume = () => { if (!confirmCat) return; setConfirmOpen(false); navigate(`/quiz/${toSlug(confirmCat)}`, { state: { resume: true } }); };
  const handleConfirmChange = () => { if (!confirmCat) return; setConfirmOpen(false); openQuizConfig(confirmCat); };

  return (
    <div className="relative pb-24">
      {/* coin overlay layer */}
      <div id="coin-layer" className="fixed inset-0 pointer-events-none z-[100]" />

      {/* Header */}
      <header className="flex items-center justify-between mb-6 pt-12">
        <div className="flex items-center gap-3">
          <button
            className="h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5"
            onClick={() => navigate("/profile")}
            aria-label="Open profile"
          >
            👤
          </button>
          <div>
            <p className="text-sm text-base-muted">Hi, Nirmal</p>
            <h1 className="text-xl font-semibold">Let’s play</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <XPill level={level} xp={xp} next={threshold(level+1)} onClick={() => setShowLevels(true)} />
          <CoinPill pillRef={coinPillRef} total={coins} onClick={() => setShowCoins(true)} />
        </div>
      </header>

      {/* Resume banner */}
      {resume?.inProgress && (
        <div className="rounded-2xl border border-base-border bg-white/5 p-3 mb-4 flex items-center justify-between">
          <div className="text-sm">
            <div className="font-medium">Resume {resume.mode === "practice" ? "Practice" : "Quiz"}</div>
            <div className="text-base-muted text-xs">
              {resume.category} • Q{resume.index+1}/{resume.total}
              {resume.remainingSec ? <> • ⏱ {resume.remainingSec}s left</> : null}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-xl border border-base-border bg-white/5" onClick={() => { localStorage.removeItem(LS_RESUME); setResume(null); }}>
              Discard
            </button>
            <button className="btn-primary px-3 py-1.5 rounded-xl" onClick={goResume}>Resume</button>
          </div>
        </div>
      )}

      {/* Spin & Play */}
      <button
        onClick={() => navigate("/play")}
        className="group w-full rounded-3xl p-5 mb-6 text-left bg-gradient-to-br from-brand-blue/30 to-brand-purple/20 border border-base-border"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold mb-1">Spin & Play</div>
            <div className="text-sm text-base-muted">1 quick question • Earn XP & coins</div>
          </div>
          <WheelIcon size={76} />
        </div>
      </button>

      {/* Streak Center */}
      <section className="card mb-6">
        <div className="flex items-center gap-4">
          <ProgressRing value={ringFilled ? 1 : 0} done={ringFilled} showCheck={ringFilled} />
          <div className="flex-1">
            <div className="font-semibold">Streak Center</div>
            <div className="text-sm text-base-muted">
              🔥 {streak} days
              <span className="mx-1 text-base-muted/60">|</span>
              Best {bestStreak}
              <span className="mx-1 text-base-muted/60">|</span>
              Keep coming!
            </div>
            <div className="mt-2">
              <WeeklyRow log={(() => { try { return JSON.parse(localStorage.getItem(LS_DAILY_LOG) || "{}"); } catch { return {}; } })()} />
            </div>
          </div>
        </div>
      </section>

      {/* Today’s */}
      {dailyQ && (
        <section className="card mb-8">
          <div className="relative" style={{ perspective: "1200px" }}>
            <div ref={spacerRef} style={{ height: 0, transition: "height 320ms ease" }} />
            <div className="absolute inset-0">
              <div
                className="relative transition-transform duration-700 [transform-style:preserve-3d]"
                style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                {/* Front */}
                <div ref={frontRef} className="absolute inset-0 [backface-visibility:hidden] p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Today’s Question</h3>
                    <span className="text-xs text-base-muted">
                      Next in <span className="font-mono text-base-text">{fmtHMS(msToMidnight)}</span>
                    </span>
                  </div>
                  <div className="text-xs text-base-muted mb-1">Category: {dailyQ.category}</div>
                  <p className="text-base font-semibold mb-4">{dailyQ.prompt}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {dailyQ.options.map((opt,i)=>{
                      const isCorrect=i===dailyQ.answerIndex, isPicked=picked===i;
                      const base="flex items-center gap-2 px-3 py-3 rounded-xl border transition disabled:opacity-60";
                      const idle="bg-white/5 border-base-border text-base-text hover:bg-white/10";
                      const correct="bg-green-600/20 border-green-500/50 text-green-300";
                      const wrong="bg-red-600/20 border-red-500/50 text-red-300";
                      return (
                        <button
                          key={i}
                          disabled={picked!==null}
                          onClick={(e)=>handlePick(i,e)}
                          className={[base, picked!==null ? (isPicked && (isCorrect?correct:wrong)) : idle].join(" ")}
                        >
                          <span className="font-bold">{["A.","B.","C.","D."][i]}</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Back */}
                <div ref={backRef} className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-5">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🎉</div>
                    <div>
                      <div className="text-lg font-semibold text-green-400">Congrats!</div>
                      <div className="text-sm text-base-muted">
                        Today’s question <span className="inline-block">✅</span>
                        <span className="mx-1 text-base-muted/60">•</span>
                        Next in <span className="font-mono text-base-text">{fmtHMS(msToMidnight)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Play header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Play</h2>
        <span className="text-xs text-base-muted">Tap = Start • ⚙️ = Change</span>
      </div>

      {/* Quiz tiles */}
      <div ref={categoriesRef} className="grid grid-cols-3 gap-4 mb-4">
        {categories.map((cat) => (
          <div key={cat.name} className="relative">
            {cat.name !== "More" && (
              <button
                type="button"
                onClick={() => { setConfirmCat(cat.name); setConfirmOpen(true); }}
                className="w-full rounded-2xl p-3 text-left bg-white/5 border border-base-border hover:bg-white/10 transition"
                aria-label={`Start ${cat.name} quiz`}
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <div className="text-[13px] font-medium leading-tight">{cat.name}</div>
                <div className="text-[10px] text-base-muted mt-1">{cat.questions} questions</div>
              </button>
            )}
            {cat.name === "More" && (
              <button
                onClick={() => setShowMoreCats(true)}
                className="w-full rounded-2xl p-3 text-left bg-white/5 border border-base-border hover:bg-white/10 transition"
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <div className="text-[13px] font-medium leading-tight">More</div>
                <div className="text-[10px] text-base-muted mt-1">See all</div>
              </button>
            )}
            {cat.name !== "More" && (
              <button
                className="absolute right-2 top-2 text-xs px-2 py-1 rounded-lg bg-white/5 border border-base-border"
                onClick={(e)=>{ e.stopPropagation(); openQuizConfig(cat.name); }}
                aria-label="Customize"
                title="Customize"
              >
                ⚙️
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Daily Challenge */}
      <div className="rounded-3xl border border-base-border p-4 mb-8 bg-gradient-to-br from-brand-blue/25 to-brand-purple/20">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-base-muted">Daily Challenge</div>
            <div className="text-sm mt-1">
              <div><span className="text-base-muted">Category:</span> {dailyCategory}</div>
              <div><span className="text-base-muted">Difficulty:</span> {cap(dailyDifficulty)}</div>
              <div><span className="text-base-muted">Question count:</span> {dailyCount}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-xl border border-base-border bg-white/5" onClick={()=>setShowDailyConfig(true)}>Customize</button>
            <button className="btn-primary px-3 py-1.5 rounded-xl" onClick={startDailyQuick}>Start</button>
          </div>
        </div>
      </div>

      {/* Learn header */}
      <h2 className="text-lg font-semibold mb-2">Learn</h2>

      {/* Practice Questions */}
      <div className="rounded-3xl border border-base-border p-4 mb-4 bg-gradient-to-br from-brand-purple/20 to-brand-blue/15">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-base-muted">Practice Questions</div>
            <div className="text-sm mt-1">
              <div><span className="text-base-muted">Category:</span> {practiceCategory || "General Knowledge"}</div>
              <div><span className="text-base-muted">Difficulty:</span> {cap(practiceDifficulty)}</div>
              <div><span className="text-base-muted">Question count:</span> {practiceCount}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-xl border border-base-border bg-white/5" onClick={()=>setShowPracticeConfig(true)}>Customize</button>
            <button
              className="btn-primary px-3 py-1.5 rounded-xl"
              onClick={()=>{
                const cat = practiceCategory || "General Knowledge";
                writeJSON(LS_LAST_PRACT, { difficulty: practiceDifficulty, count: practiceCount });
                navigate(`/quiz/${toSlug(cat)}/start`, {
                  state: { mode: "practice", difficulty: practiceDifficulty, count: practiceCount, timer: { type: "off", seconds: 0 } }
                });
              }}
            >
              Start
            </button>
          </div>
        </div>
        <div className="text-xs text-base-muted mt-1">Timer off • Explanations on</div>
      </div>

      {/* Fun Facts */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">Fun Facts</h3>
        <span className="text-xs text-base-muted">Curiosity</span>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar snap-x mb-8">
        {[
          { id: "isro-moon", emoji: "🌕", text: "Chandrayaan-3 landed near the Moon’s south pole." },
          { id: "zero",      emoji: "0️⃣", text: "‘Zero’ was formalised in India ~1500 years ago." },
          { id: "bose",      emoji: "🧪", text: "S. N. Bose’s work led to the term ‘boson’." },
          { id: "pi",        emoji: "🥧", text: "Ancient Indian texts estimated π early on." },
        ].map((c) => (
          <div key={c.id} className="min-w-[240px] snap-start rounded-2xl bg-white/5 border border-base-border p-4">
            <div className="text-2xl mb-2">{c.emoji}</div>
            <div className="text-sm mb-3">{c.text}</div>
            <div className="flex items-center gap-2">
              <button className="px-2.5 py-1 rounded-lg border border-base-border bg-white/5 text-xs">❤️ Save</button>
              <button
                className="px-2.5 py-1 rounded-lg border border-base-border bg-white/5 text-xs"
                onClick={() => navigate(`/quiz/${toSlug("fun-facts")}/start`, { state: { mode:"quiz", count:3, difficulty:"easy", timer:{ type:"per_q", seconds:20 }, source:"fun_facts" } })}
              >
                ➡️ Mini-Quiz (3)
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Popups & Sheets ===== */}
      <ConfirmStartSheet
        open={confirmOpen}
        categoryLabel={confirmCat || ""}
        summary={confirmSummary}
        hasResume={confirmHasResume}
        resumeInfo={confirmResumeInfo}
        onStart={handleConfirmStart}
        onResume={handleConfirmResume}
        onChange={handleConfirmChange}
        onClose={() => setConfirmOpen(false)}
      />

      {/* Levels */}
      <Sheet open={showLevels} onClose={()=>setShowLevels(false)}>
        <div className="relative">
          <button
            className="absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border"
            onClick={()=>setShowLevels(false)}
          >✕</button>
        </div>
        <h3 className="text-lg font-semibold mb-1">Levels & Progress</h3>
        <p className="text-sm text-base-muted mb-4">Lvl {level}: {xp}/{threshold(level+1)} XP</p>
        <div className="space-y-2 mb-4">
          {[1,2,3,4,5].map((i)=>{
            const L = level + i;
            const need = Math.max(0, threshold(L) - xp);
            return (
              <div key={L} className="flex items-center justify-between rounded-xl border border-base-border bg-white/5 px-3 py-2">
                <div className="text-sm">Level {L}</div>
                <div className="text-xs text-base-muted">needs {need} XP</div>
              </div>
            );
          })}
        </div>
        <div className="rounded-xl bg-white/5 border border-base-border p-3 mb-4">
          <div className="text-sm mb-1">Next level in <b>{xpToNext}</b> XP</div>
          <div className="text-xs text-base-muted">At {COIN_TO_XP} XP/coin, you’d need ~<b>{coinsNeeded}</b> coins.</div>
        </div>
        <button className="btn-primary w-full" onClick={()=>setShowLevels(false)}>Got it</button>
      </Sheet>

      {/* Coins */}
      <Sheet open={showCoins} onClose={()=>setShowCoins(false)}>
        <div className="relative">
          <button
            className="absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border"
            onClick={()=>setShowCoins(false)}
          >✕</button>
        </div>
        <h3 className="text-lg font-semibold mb-3">Earn coins</h3>
        <div className="space-y-2">
          <button
            className="w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left"
            onClick={() => { setShowCoins(false); categoriesRef.current?.scrollIntoView({ behavior:"smooth" }); }}
          >
            <div className="font-medium">Attempt a quiz</div>
            <div className="text-xs text-base-muted">50 coins / quiz</div>
          </button>
          <button
            className="w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left"
            onClick={() => { setShowCoins(false); navigate("/play"); }}
          >
            <div className="font-medium">Spin & Play</div>
            <div className="text-xs text-base-muted">5 coins / spin</div>
          </button>
          <button
            className="w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left"
            onClick={() => alert("Video screen will come soon")}
          >
            <div className="font-medium">Watch a video</div>
            <div className="text-xs text-base-muted">20 coins / video</div>
          </button>
          <button
            className="w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left"
            onClick={() => {
              const msg = encodeURIComponent("Try Quizify! Learn fast, earn coins, and challenge friends.");
              window.open(`https://wa.me/?text=${msg}`, "_blank");
            }}
          >
            <div className="font-medium">Invite a friend</div>
            <div className="text-xs text-base-muted">50 coins / invite</div>
          </button>
        </div>
        <button className="btn-primary w-full mt-4" onClick={()=>setShowCoins(false)}>Close</button>
      </Sheet>

      {/* More Categories */}
      <Sheet open={showMoreCats} onClose={()=>setShowMoreCats(false)}>
        <div className="relative">
          <button
            className="absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border"
            onClick={()=>setShowMoreCats(false)}
          >✕</button>
        </div>
        <h3 className="text-lg font-semibold mb-3">More categories</h3>
        <div className="grid grid-cols-2 gap-3">
          {extraCats.map((c)=>(
            <button
              key={c.name}
              className="rounded-2xl p-3 text-left bg-white/5 border border-base-border hover:bg-white/10 transition"
              onClick={()=>{ setShowMoreCats(false); setConfirmCat(c.name); setConfirmOpen(true); }}
            >
              <div className="text-2xl mb-1">{c.icon}</div>
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-[10px] text-base-muted mt-1">{c.questions} questions</div>
            </button>
          ))}
        </div>
      </Sheet>

      {/* Quiz Config */}
      <Sheet open={showQuizConfig} onClose={()=>setShowQuizConfig(false)} centered>
        <div className="relative">
          <button
            className="absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border"
            onClick={()=>setShowQuizConfig(false)}
          >✕</button>
        </div>
        <h3 className="text-lg font-semibold mb-2">{quizCategory} — Quiz</h3>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {["easy","medium","hard"].map(d=>(
            <button key={d}
              onClick={()=>setQuizDifficulty(d)}
              className={`px-3 py-2 rounded-xl border ${quizDifficulty===d ? "bg-brand-blue/30 border-brand-blue" : "bg-white/5 border-base-border"}`}>
              {cap(d)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[5,10,20,30].map(n=>(
            <button key={n}
              onClick={()=>setQuizCount(n)}
              className={`px-3 py-2 rounded-xl border text-sm ${quizCount===n ? "bg-brand-blue/30 border-brand-blue" : "bg-white/5 border-base-border"}`}>
              {n}
            </button>
          ))}
        </div>
        <div className="rounded-xl border border-base-border bg-white/5 p-3 mb-4">
          <div className="text-sm font-medium mb-1">Timer</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-base-muted">⏱ Per-Q</span>
            <input
              type="number"
              min={10}
              max={120}
              value={quizSeconds}
              onChange={(e)=>setQuizSeconds(Number(e.target.value)||45)}
              className="w-20 px-2 py-1 rounded-lg bg-base-bg border border-base-border text-sm"
            />
            <span className="text-sm text-base-muted">sec</span>
          </div>
          <div className="text-[11px] text-base-muted mt-1">Default 45s per question (discover via ⚙️).</div>
        </div>
        <button
          className="btn-primary w-full"
          onClick={()=>{
            const cfg = { difficulty: quizDifficulty, count: quizCount, seconds: quizSeconds };
            saveQuizCfgFor(quizCategory, cfg);
            setShowQuizConfig(false);
            startQuizWithCfg(quizCategory);
          }}
        >
          Save & Start
        </button>
      </Sheet>

      {/* Practice Config */}
      <Sheet open={showPracticeConfig} onClose={()=>setShowPracticeConfig(false)} centered>
        <div className="relative">
          <button
            className="absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border"
            onClick={()=>setShowPracticeConfig(false)}
          >✕</button>
        </div>
        <h3 className="text-lg font-semibold mb-2">Customize Practice</h3>

        <div className="mb-2 text-xs text-base-muted">Category</div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {ALL_CATEGORIES.map((c)=>(
            <button key={c} onClick={()=>setPracticeCategory(c)}
              className={`px-3 py-2 rounded-xl border text-left ${practiceCategory===c ? "bg-white/10" : "bg-white/5"} border-base-border`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mb-2 text-xs text-base-muted">Difficulty</div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {["easy","medium","hard"].map(d=>(
            <button key={d}
              onClick={()=>setPracticeDifficulty(d)}
              className={`px-3 py-2 rounded-xl border ${practiceDifficulty===d ? "bg-brand-blue/30 border-brand-blue" : "bg-white/5 border-base-border"}`}>
              {cap(d)}
            </button>
          ))}
        </div>

        <div className="mb-2 text-xs text-base-muted">Question count</div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[5,10,20,30].map(n=>(
            <button key={n}
              onClick={()=>setPracticeCount(n)}
              className={`px-3 py-2 rounded-xl border text-sm ${practiceCount===n ? "bg-brand-blue/30 border-brand-blue" : "bg-white/5 border-base-border"}`}>
              {n}
            </button>
          ))}
        </div>

        <button
          className="btn-primary w-full"
          onClick={()=>{
            const cat = practiceCategory || "General Knowledge";
            writeJSON(LS_LAST_PRACT, { difficulty: practiceDifficulty, count: practiceCount });
            setShowPracticeConfig(false);
            navigate(`/quiz/${toSlug(cat)}/start`, {
              state: { mode: "practice", difficulty: practiceDifficulty, count: practiceCount, timer: { type: "off", seconds: 0 } }
            });
          }}
        >
          Save & Start
        </button>
      </Sheet>

      {/* Daily Config */}
      <Sheet open={showDailyConfig} onClose={()=>setShowDailyConfig(false)} centered>
        <div className="relative">
          <button
            className="absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border"
            onClick={()=>setShowDailyConfig(false)}
          >✕</button>
        </div>
        <h3 className="text-lg font-semibold mb-2">Customize Today</h3>

        <div className="mb-2 text-xs text-base-muted">Category</div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <button
            onClick={()=>setDailyCategory("All")}
            className={`px-3 py-2 rounded-xl border ${dailyCategory==="All" ? "bg-brand-blue/30 border-brand-blue" : "bg-white/5 border-base-border"}`}>
            All
          </button>
          {ALL_CATEGORIES.map((c)=>(
            <button key={c}
              onClick={()=>setDailyCategory(c)}
              className={`px-3 py-2 rounded-xl border ${dailyCategory===c ? "bg-brand-blue/30 border-brand-blue" : "bg-white/5 border-base-border"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mb-2 text-xs text-base-muted">Difficulty</div>
        <div className="grid grid-cols-3 gap-2 mb-2">
          {["easy","medium","hard"].map(d=>(
            <button key={d}
              onClick={()=>setDailyDifficulty(d)}
              className={`px-3 py-2 rounded-xl border ${dailyDifficulty===d ? "bg-brand-blue/30 border-brand-blue" : "bg-white/5 border-base-border"}`}>
              {cap(d)}
            </button>
          ))}
        </div>

        <div className="mb-2 text-xs text-base-muted">Question count</div>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[5,10,20,30].map(n=>(
            <button key={n}
              onClick={()=>setDailyCount(n)}
              className={`px-3 py-2 rounded-xl border text-sm ${dailyCount===n ? "bg-brand-blue/30 border-brand-blue" : "bg-white/5 border-base-border"}`}>
              {n}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-base-border bg-white/5 p-3 mb-4">
          <div className="text-sm font-medium mb-1">Timer</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-base-muted">⏱ Per-Q</span>
            <input
              type="number"
              min={10}
              max={120}
              value={dailySeconds}
              onChange={(e)=>setDailySeconds(Number(e.target.value)||45)}
              className="w-20 px-2 py-1 rounded-lg bg-base-bg border border-base-border text-sm"
            />
            <span className="text-sm text-base-muted">sec</span>
          </div>
          <div className="text-[11px] text-base-muted mt-1">Timer configurable here only.</div>
        </div>

        <button
          className="btn-primary w-full"
          onClick={()=>{
            const cfg = { category: dailyCategory, difficulty: dailyDifficulty, count: dailyCount, seconds: dailySeconds };
            writeJSON(LS_LAST_DAILY, cfg);
            setShowDailyConfig(false);
            navigate(`/quiz/${dailyCategory === "All" ? "mixed" : toSlug(dailyCategory)}/start`, {
              state: { mode: "quiz", difficulty: dailyDifficulty, count: dailyCount, timer: { type: "per_q", seconds: dailySeconds }, daily: true }
            });
          }}
        >
          Save & Start
        </button>
      </Sheet>
    </div>
  );
}
