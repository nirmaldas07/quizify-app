// src/components/Home.jsx
import { useEffect, useMemo, useRef, useState, useLayoutEffect, useCallback } from "react";
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
    const onKey=(e)=>e.key==="Escape"&&onClose();
    document.addEventListener("keydown", onKey);
    const prev=document.body.style.overflow; document.body.style.overflow="hidden";
    return ()=>{ document.removeEventListener("keydown", onKey); document.body.style.overflow=prev; };
  }, [open,onClose]);
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-black/50" onClick={onClose}>
      <div
        className="absolute inset-x-0 bottom-0 w-full max-w-md mx-auto rounded-t-3xl bg-base-card border border-base-border p-5
                   pb-[calc(1rem+env(safe-area-inset-bottom))]"
        onClick={(e)=>e.stopPropagation()}
      >
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/15" />
        {children}
      </div>
    </div>
  );
}

/* ------------ Home ------------ */
export default function Home() {
  const navigate = useNavigate();
  const userName = 'Nirmal';

  return (
    <div className="min-h-screen bg-black text-white p-6 pb-24 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Hi, {userName}</h1>
          <p className="text-gray-400">Let’s make this day productive</p>
        </div>
        <img src="/avatar.png" alt="avatar" className="w-12 h-12 rounded-full border border-white" />
      </div>

      {/* Ranking and Points */}
      <div className="bg-gray-800 rounded-xl px-4 py-3 flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          🏆 <span>Ranking</span>
          <span className="text-yellow-400 font-bold ml-1">348</span>
        </div>
        <div className="flex items-center gap-2">
          💰 <span>Points</span>
          <span className="text-yellow-400 font-bold ml-1">1209</span>
        </div>
      </div>

      {/* Category Grid */}
      <h2 className="text-xl font-semibold mb-4">Let's play</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => navigate(`/quiz/${cat.name.toLowerCase().replace(/\s+/g, '-')}`, {
              state: { difficulty: 'easy' },
            })}
            className="bg-[#1f2937] p-4 rounded-lg shadow hover:bg-[#374151] transition text-left"
          >
            <div className="text-3xl mb-2">{cat.icon}</div>
            <div className="font-semibold text-white">{cat.name}</div>
            <div className="text-gray-400 text-sm">{cat.questions} questions</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
