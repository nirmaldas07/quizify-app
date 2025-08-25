import { useEffect, useMemo, useRef, useState, useLayoutEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Papa from "papaparse";

/* ------------ Categories (5 + More) ------------ */
const primaryCats = [
  { name: "General Knowledge", questions: 50, icon: "🧠", gradient: "from-purple-500 to-blue-600" },
  { name: "Artificial Intelligence", questions: 28, icon: "🤖", gradient: "from-green-500 to-teal-600" },
  { name: "Fun facts", questions: 30, icon: "🎉", gradient: "from-pink-500 to-red-600" },
  { name: "Science", questions: 45, icon: "🧪", gradient: "from-orange-500 to-yellow-600" },
  { name: "History", questions: 42, icon: "🏺", gradient: "from-blue-500 to-purple-600" },
];
const extraCats = [
  { name: "Geography", questions: 38, icon: "🗺️", gradient: "from-emerald-500 to-cyan-600" },
  { name: "Computer", questions: 34, icon: "💻", gradient: "from-slate-500 to-gray-700" },
  { name: "Aptitude", questions: 36, icon: "📐", gradient: "from-indigo-500 to-purple-600" },
  { name: "Iconic Figures", questions: 26, icon: "🌟", gradient: "from-amber-500 to-orange-600" },
];

/* ------------ Storage keys ------------ */
const LS_LAST_ANSWERED = "dq_last_answered";
const LS_STREAK = "dq_streak";
const LS_BEST_STREAK = "dq_best_streak";
const LS_DAILY_LOG = "dq_daily_log";

const XP_KEY = "qp_xp";
const LVL_KEY = "qp_level";
const COIN_KEY = "qp_coins";
const DAILY_Q_XP = 10;
const DAILY_Q_COINS = 5;
const threshold = (n) => 100 * n * (n - 1);

/* ------------ Helpers ------------ */
const toSlug = (s) =>
  s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
const cap = (s="") => s.slice(0,1).toUpperCase() + s.slice(1);

const ymd = (d = new Date()) =>
  d.toLocaleDateString("en-CA", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });

const readJSON = (k, fallback=null) => { 
  try { 
    const v = localStorage.getItem(k); 
    return v ? JSON.parse(v) : fallback; 
  } catch { 
    return fallback; 
  } 
};

const writeJSON = (k, v) => localStorage.setItem(k, JSON.stringify(v));

const playSound = (src, volume = 0.7) => {
  try {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
  } catch {}
};

/* ------------ UI Components ------------ */
function WheelIcon({ size = 70 }) {
  return (
    <div style={{ width: size, height: size }} className="grid place-items-center">
      <svg viewBox="0 0 100 100" className="motion-safe:animate-[spin_12s_linear_infinite] drop-shadow-lg">
        <path d="M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z" fill="#8B5CF6" />
        <path d="M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z" fill="#10B981" />
        <path d="M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z" fill="#F59E0B" />
        <path d="M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z" fill="#EF4444" />
        <path d="M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z" fill="#3B82F6" />
        <path d="M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z" fill="#6366F1" />
        <circle cx="50" cy="50" r="9" fill="white" stroke="#1f2937" strokeWidth="2"/>
      </svg>
    </div>
  );
}

function StatCard({ icon, value, label, trend }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
      <div className="flex items-center gap-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-sm text-gray-400">{label}</div>
          {trend && <div className="text-xs text-green-400">↗ {trend}</div>}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ category, onClick, showCustomize = false, onCustomize }) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`w-full aspect-square rounded-3xl bg-gradient-to-br ${category.gradient} p-6 text-left 
                   shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95
                   border border-white/20 relative overflow-hidden`}
      >
        {/* Background decorative elements */}
        <div className="absolute top-3 right-3 text-2xl opacity-30 rotate-12">✨</div>
        <div className="absolute bottom-3 left-3 text-lg opacity-20">💫</div>
        
        {/* Main content */}
        <div className="relative z-10">
          <div className="text-4xl mb-3 filter drop-shadow-sm">{category.icon}</div>
          <div className="text-white font-bold text-sm leading-tight mb-2">
            {category.name}
          </div>
          <div className="text-white/80 text-xs">
            {category.questions} questions
          </div>
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                       -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </button>
      
      {showCustomize && (
        <button
          onClick={(e) => { e.stopPropagation(); onCustomize(); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm 
                   flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 
                   transition-all duration-200 z-20"
        >
          ⚙️
        </button>
      )}
    </div>
  );
}

function ActionCard({ title, subtitle, icon, gradient, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative overflow-hidden rounded-3xl p-6 text-left transition-all duration-300 
                 ${disabled 
                   ? 'opacity-60 cursor-not-allowed' 
                   : 'hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl'
                 }
                 bg-gradient-to-br ${gradient} border border-white/20`}
    >
      {/* Background decoration */}
      <div className="absolute top-4 right-4 text-3xl opacity-40">{icon}</div>
      <div className="absolute bottom-4 left-4 text-lg opacity-30">✨</div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm">{subtitle}</p>
      </div>
      
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                       -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      )}
    </button>
  );
}

export default function Home() {
  /* State */
  const [level, setLevel] = useState(() => parseInt(localStorage.getItem(LVL_KEY) || "1", 10));
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem(XP_KEY) || "0", 10));
  const [coins, setCoins] = useState(() => parseInt(localStorage.getItem(COIN_KEY) || "0", 10));
  const [streak, setStreak] = useState(() => Number(localStorage.getItem(LS_STREAK) || 0));
  const [bestStreak, setBest] = useState(() => Number(localStorage.getItem(LS_BEST_STREAK) || 0));
  
  const [dailyQ, setDailyQ] = useState(null);
  const [picked, setPicked] = useState(null);
  const [showTodayCard, setShowTodayCard] = useState(true);
  
  const nextThreshold = threshold(level + 1);

  /* Load daily question */
  const loadRandomFromCSV = async () => {
    try {
      const response = await fetch("/data/quiz_questions_bank.csv");
      const csvText = await response.text();
      const { data } = Papa.parse(csvText, { header: true, skipEmptyLines: true });
      
      if (!Array.isArray(data) || data.length === 0) throw new Error("empty");
      
      const row = data[Math.floor(Math.random() * data.length)];
      const opts = [row.option1, row.option2, row.option3, row.option4];
      let ans = String(row.answer || "").trim();
      const abc = { A: 0, B: 1, C: 2, D: 3 };
      let correctIndex = abc[ans?.toUpperCase()];
      
      if (correctIndex === undefined) {
        correctIndex = opts.findIndex(o => (o || "").trim().toLowerCase() === ans.toLowerCase());
      }
      if (correctIndex === -1 || correctIndex === undefined) correctIndex = 0;

      setDailyQ({
        category: row.category || row.subject || "General Knowledge",
        prompt: row.question,
        options: opts,
        answerIndex: correctIndex,
      });
    } catch {
      setDailyQ({
        category: "General Knowledge",
        prompt: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answerIndex: 1,
      });
    }
  };

  useEffect(() => {
    loadRandomFromCSV();
  }, []);

  const handleTodayAnswer = (optionIndex) => {
    if (!dailyQ || picked !== null) return;
    
    setPicked(optionIndex);
    const correct = optionIndex === dailyQ.answerIndex;
    
    if (correct) {
      playSound("/sounds/correct.mp3", 0.7);
      setCoins(prev => prev + DAILY_Q_COINS);
      setXp(prev => prev + DAILY_Q_XP);
    } else {
      playSound("/sounds/wrong.mp3", 0.7);
    }
    
    setTimeout(() => {
      const todayKey = ymd();
      const dailyLog = readJSON(LS_DAILY_LOG, {});
      dailyLog[todayKey] = true;
      writeJSON(LS_DAILY_LOG, dailyLog);
      
      setShowTodayCard(false);
    }, 2000);
  };

  const navigateToPlay = () => {
    // Replace with your navigation logic
    console.log('Navigate to /play');
  };

  const startCategoryQuiz = (categoryName) => {
    console.log(`Start quiz for ${categoryName}`);
    // Your quiz navigation logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 pb-24 pt-[max(env(safe-area-inset-top))]">
        {/* Header */}
        <header className="px-6 pt-12 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 
                               flex items-center justify-center text-xl hover:bg-white/20 transition-all">
                👤
              </button>
              <div>
                <p className="text-gray-400 text-sm">Hi, Nirmal</p>
                <h1 className="text-white text-2xl font-bold">Let's play</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-xs text-gray-400">Lvl {level} • {xp}/{nextThreshold}</div>
                <div className="mt-1 h-1 w-16 bg-white/20 rounded-full">
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" 
                       style={{ width: `${Math.min(xp / nextThreshold, 1) * 100}%` }} />
                </div>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                🪙 {coins}
              </div>
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <StatCard icon="🔥" value={streak} label="Day Streak" trend={streak > 0 ? "+1" : null} />
            <StatCard icon="🏆" value={bestStreak} label="Best Streak" />
            <StatCard icon="⭐" value={level} label="Level" />
          </div>
        </header>

        {/* Main Content */}
        <div className="px-6">
          {/* Spin & Play Hero */}
          <ActionCard
            title="Spin & Play"
            subtitle="Quick questions • Earn XP & coins"
            icon="🎯"
            gradient="from-blue-600 to-purple-600"
            onClick={navigateToPlay}
          />
          
          {/* Today's Question */}
          {showTodayCard && dailyQ && (
            <div className="mt-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 p-6 border border-white/20 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Today's Question</h3>
                <div className="text-2xl">🎯</div>
              </div>
              
              <div className="text-sm text-white/80 mb-2">Category: {dailyQ.category}</div>
              <p className="text-white font-semibold mb-4 leading-relaxed">{dailyQ.prompt}</p>
              
              <div className="grid grid-cols-1 gap-3">
                {dailyQ.options.map((opt, i) => {
                  const isCorrect = i === dailyQ.answerIndex;
                  const isPicked = picked === i;
                  let buttonClass = "flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all text-left ";
                  
                  if (picked !== null) {
                    if (isPicked && isCorrect) {
                      buttonClass += "bg-green-500/30 border-green-400 text-white";
                    } else if (isPicked && !isCorrect) {
                      buttonClass += "bg-red-500/30 border-red-400 text-white";
                    } else if (isCorrect) {
                      buttonClass += "bg-green-500/30 border-green-400 text-white";
                    } else {
                      buttonClass += "bg-white/10 border-white/30 text-white/60";
                    }
                  } else {
                    buttonClass += "bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50";
                  }
                  
                  return (
                    <button
                      key={i}
                      disabled={picked !== null}
                      onClick={() => handleTodayAnswer(i)}
                      className={buttonClass}
                    >
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                        {["A", "B", "C", "D"][i]}
                      </span>
                      <span className="flex-1">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Categories Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Categories</h2>
              <span className="text-sm text-gray-400">Choose your challenge</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {primaryCats.map((cat) => (
                <CategoryCard
                  key={cat.name}
                  category={cat}
                  onClick={() => startCategoryQuiz(cat.name)}
                  showCustomize={true}
                  onCustomize={() => console.log(`Customize ${cat.name}`)}
                />
              ))}
            </div>
            
            {/* More Categories Button */}
            <button className="w-full rounded-3xl bg-gradient-to-br from-gray-600 to-slate-700 p-6 text-left 
                             border border-white/20 hover:from-gray-500 hover:to-slate-600 
                             transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl mb-2">➕</div>
                  <div className="text-white font-bold text-lg">More Categories</div>
                  <div className="text-white/80 text-sm">{extraCats.length} additional topics</div>
                </div>
                <div className="text-white/40">→</div>
              </div>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid gap-4">
            <ActionCard
              title="Daily Challenge"
              subtitle="Special themed questions • Bonus rewards"
              icon="🎪"
              gradient="from-orange-600 to-red-600"
              onClick={() => console.log('Start daily challenge')}
            />
            
            <ActionCard
              title="Practice Mode"
              subtitle="No timer • Learn at your pace"
              icon="📚"
              gradient="from-violet-600 to-purple-600"
              onClick={() => console.log('Start practice')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}