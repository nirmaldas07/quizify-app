import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import Papa from "papaparse";
import CoinFly from "./CoinFly";

/* Categories Configuration */
const categories = [
  { name: "General Knowledge", slug: "general-knowledge", questions: 50, icon: "🧠", color: "#FF6B6B", gradient: "from-red-500 to-pink-500" },
  { name: "Science", slug: "science", questions: 45, icon: "🧪", color: "#4ECDC4", gradient: "from-cyan-500 to-teal-500" },
  { name: "Fun Facts", slug: "fun-facts", questions: 30, icon: "🎉", color: "#FFD93D", gradient: "from-yellow-400 to-orange-500" },
  { name: "History", slug: "history", questions: 42, icon: "🏺", color: "#A8E6CF", gradient: "from-green-400 to-emerald-500" },
  { name: "AI & Tech", slug: "ai-tech", questions: 28, icon: "🤖", color: "#C7B8FF", gradient: "from-purple-400 to-indigo-500" },
  { name: "More", slug: "more", questions: 0, icon: "✨", color: "#FF8CC3", gradient: "from-pink-400 to-rose-500" },
];

const moreCategories = [
  { name: "Geography", slug: "geography", questions: 38, icon: "🗺️", color: "#FACC15", gradient: "from-yellow-400 to-amber-500" },
  { name: "Sports", slug: "sports", questions: 35, icon: "⚽", color: "#3B82F6", gradient: "from-blue-400 to-blue-600" },
  { name: "Movies", slug: "movies", questions: 40, icon: "🎬", color: "#EC4899", gradient: "from-pink-500 to-rose-500" },
  { name: "Music", slug: "music", questions: 32, icon: "🎵", color: "#8B5CF6", gradient: "from-purple-500 to-violet-600" },
];

/* Storage Keys */
const STORAGE_KEYS = {
  COINS: "qp_coins",
  XP: "qp_xp", 
  LEVEL: "qp_level",
  STREAK: "dq_streak",
  DAILY_LOG: "dq_daily_log",
  LAST_ANSWERED: "dq_last_answered"
};

/* Helpers */
const toSlug = (s) => s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
const ymd = (d = new Date()) => d.toLocaleDateString("en-CA");
const threshold = (n) => 100 * n * (n - 1);
const readJSON = (k, fallback = null) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
};
const writeJSON = (k, v) => localStorage.setItem(k, JSON.stringify(v));

export default function Home() {
  const navigate = useNavigate();
  const [playCorrect] = useSound("/sounds/correct.mp3", { volume: 0.6 });
  const [playWrong] = useSound("/sounds/wrong.mp3", { volume: 0.6 });
  const [playCoin] = useSound("/sounds/coin.mp3", { volume: 0.75 });

  // Core State
  const [level, setLevel] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.LEVEL) || "1", 10));
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.XP) || "0", 10));
  const [coins, setCoins] = useState(() => parseInt(localStorage.getItem(STORAGE_KEYS.COINS) || "0", 10));
  const [streak, setStreak] = useState(() => Number(localStorage.getItem(STORAGE_KEYS.STREAK) || 0));
  const coinPillRef = useRef(null);

  // UI State
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showQuizConfig, setShowQuizConfig] = useState(false);
  const [quizDifficulty, setQuizDifficulty] = useState("medium");
  const [quizCount, setQuizCount] = useState(10);
  const [quizTimer, setQuizTimer] = useState(45);

  // Daily Challenge
  const [dailyQ, setDailyQ] = useState(null);
  const [picked, setPicked] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [coinFly, setCoinFly] = useState(null);
  const DAILY_Q_XP = 10;
  const DAILY_Q_COINS = 5;

  // Practice Mode State
  const [showPracticeConfig, setShowPracticeConfig] = useState(false);
  const [practiceCategory, setPracticeCategory] = useState("General Knowledge");
  const [practiceDifficulty, setPracticeDifficulty] = useState("medium");
  const [practiceCount, setPracticeCount] = useState(10);

  // Load Daily Question
  useEffect(() => {
    const loadDailyQuestion = async () => {
      try {
        const csv = await fetch("/data/quiz_questions_bank.csv").then(r => r.text());
        const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
        if (!data.length) throw new Error("empty");
        
        const row = data[Math.floor(Math.random() * data.length)];
        const opts = [row.option1, row.option2, row.option3, row.option4].filter(Boolean);
        
        setDailyQ({
          category: row.category || "General",
          prompt: row.question,
          options: opts,
          answerIndex: ["A", "B", "C", "D"].indexOf(row.answer?.toUpperCase()) || 0
        });
      } catch {
        setDailyQ({
          category: "Science",
          prompt: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
          answerIndex: 1
        });
      }
    };
    loadDailyQuestion();
  }, []);

  const handleDailyAnswer = (idx, e) => {
    if (picked !== null) return;
    setPicked(idx);

    const correct = idx === dailyQ.answerIndex;
    if (correct) {
      playCorrect();
      if (e?.currentTarget && coinPillRef.current) {
        const rect = e.currentTarget.getBoundingClientRect();
        playCoin();
        setCoinFly({ startRect: rect, count: 10, amount: DAILY_Q_COINS });
      }
    } else {
      playWrong();
    }

    setTimeout(() => {
      setShowAnswer(true);
      if (correct) {
        const todayKey = ymd();
        writeJSON(STORAGE_KEYS.DAILY_LOG, { ...readJSON(STORAGE_KEYS.DAILY_LOG, {}), [todayKey]: true });
        localStorage.setItem(STORAGE_KEYS.LAST_ANSWERED, todayKey);
        
        const newStreak = streak + 1;
        setStreak(newStreak);
        localStorage.setItem(STORAGE_KEYS.STREAK, String(newStreak));
      }
    }, 600);
  };

  const awardCoins = (amount) => {
    const next = coins + amount;
    setCoins(next);
    localStorage.setItem(STORAGE_KEYS.COINS, String(next));
  };

  const awardXP = (amount) => {
    let newXP = xp + amount;
    let newLevel = level;
    while (newXP >= threshold(newLevel + 1)) newLevel++;
    setXp(newXP);
    setLevel(newLevel);
    localStorage.setItem(STORAGE_KEYS.XP, String(newXP));
    localStorage.setItem(STORAGE_KEYS.LEVEL, String(newLevel));
  };

  const handleCategorySelect = (category) => {
    if (category.slug === "more") {
      setShowMoreCategories(true);
      return;
    }
    setSelectedCategory(category);
    setShowQuizConfig(true);
  };

  const startQuiz = () => {
    navigate(`/quiz/${selectedCategory.slug}/start`, {
      state: { 
        mode: "quiz", 
        difficulty: quizDifficulty, 
        count: quizCount, 
        timer: { type: "per_q", seconds: quizTimer } 
      }
    });
  };

  const startPractice = () => {
    const categorySlug = toSlug(practiceCategory);
    navigate(`/quiz/${categorySlug}/start`, {
      state: { 
        mode: "practice", 
        difficulty: practiceDifficulty, 
        count: practiceCount, 
        timer: { type: "off", seconds: 0 } 
      }
    });
  };

  const quickActions = [
    { icon: "🎯", label: "Daily Quest", color: "bg-gradient-to-br from-orange-500 to-pink-500", action: () => navigate("/quests") },
    { icon: "🔥", label: `${streak} Streak`, color: "bg-gradient-to-br from-red-500 to-orange-500", action: () => navigate("/streaks") },
    { icon: "🏆", label: "Achievements", color: "bg-gradient-to-br from-blue-500 to-purple-500", action: () => navigate("/achievements") },
    { icon: "🎁", label: "Rewards", color: "bg-gradient-to-br from-green-500 to-teal-500", action: () => navigate("/rewards") },
  ];

  return (
    <div className="min-h-screen bg-base-bg text-base-text">
      {/* Match Play.jsx background */}
      <div className="fixed inset-0 bg-[#0B0F1A]" style={{ 
        background: 'linear-gradient(to bottom, #0B0F1A, #111827)' 
      }} />
      
      <div className="relative z-10 px-4 pt-6 pb-24">
        {/* Coin Animation */}
        {coinFly && (
          <CoinFly
            startRect={coinFly.startRect}
            targetRef={coinPillRef}
            count={coinFly.count}
            onDone={() => {
              awardXP(DAILY_Q_XP);
              awardCoins(coinFly.amount);
              setCoinFly(null);
            }}
          />
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-1">Hi, Nirmal! 👋</h1>
            <p className="text-sm text-base-muted">Ready for today's adventure?</p>
          </div>
          <div className="flex gap-3">
            <button
              ref={coinPillRef}
              onClick={() => navigate("/store")}
              className="px-4 py-2 rounded-2xl bg-white/5 border border-base-border flex items-center gap-2"
            >
              🪙 {coins}
            </button>
            <button
              onClick={() => navigate("/profile")}
              className="w-10 h-10 rounded-full bg-white/5 border border-base-border grid place-items-center"
            >
              👤
            </button>
          </div>
        </div>

        {/* Hero Card - Spin & Play */}
        <div 
          className="relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
          }}
          onClick={() => navigate("/play")}
        >
          <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10" />
          <h2 className="text-3xl font-bold mb-2">🎰 Spin & Win</h2>
          <p className="text-base opacity-90 mb-4">Test your luck, win amazing prizes!</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
            Play Now →
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {quickActions.map((action, idx) => (
            <button
              key={idx}
              onClick={action.action}
              className={`${action.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`}
            >
              <div className="text-2xl">{action.icon}</div>
              <div className="text-[10px] font-medium text-white">{action.label}</div>
            </button>
          ))}
        </div>

        {/* Daily Challenge */}
        {dailyQ && !showAnswer && (
          <div className="rounded-3xl bg-white/5 border border-base-border p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">🎯 Daily Challenge</h3>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                +{DAILY_Q_COINS} coins
              </span>
            </div>
            
            <p className="text-sm mb-4 text-base-muted">{dailyQ.prompt}</p>
            
            <div className="grid grid-cols-2 gap-3">
              {dailyQ.options.map((opt, idx) => {
                const isCorrect = idx === dailyQ.answerIndex;
                const isPicked = picked === idx;
                const showResult = picked !== null;
                
                return (
                  <button
                    key={idx}
                    onClick={(e) => handleDailyAnswer(idx, e)}
                    disabled={picked !== null}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                      showResult
                        ? (isCorrect ? 'border-green-500 bg-green-500/20' : (isPicked ? 'border-red-500 bg-red-500/20' : 'border-base-border bg-white/5'))
                        : 'border-base-border bg-white/5 hover:bg-white/10'
                    } ${picked !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Success Message */}
        {showAnswer && (
          <div className="rounded-3xl bg-green-500/10 border border-green-500/30 p-6 mb-6 text-center">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Amazing!</h3>
            <p className="text-sm text-base-muted">You've completed today's challenge! Come back tomorrow for more.</p>
          </div>
        )}

        {/* Categories Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Choose Your Adventure</h3>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => handleCategorySelect(cat)}
                className={`bg-gradient-to-br ${cat.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg`}
              >
                <div className="text-3xl">{cat.icon}</div>
                <div className="text-xs font-bold text-white text-center">{cat.name}</div>
                {cat.questions > 0 && (
                  <div className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">{cat.questions} Qs</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Mode */}
        <button
          onClick={() => setShowPracticeConfig(true)}
          className="w-full rounded-2xl bg-white/5 border border-base-border p-5 flex justify-between items-center hover:bg-white/10 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl">
              📚
            </div>
            <div className="text-left">
              <div className="font-medium">Practice Mode</div>
              <div className="text-xs text-base-muted">No timer • Learn at your pace</div>
            </div>
          </div>
          <div className="text-xl">→</div>
        </button>

        {/* Quiz Configuration Modal */}
        {showQuizConfig && selectedCategory && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border">
              <h3 className="text-xl font-bold mb-4">{selectedCategory.name} Quiz</h3>
              
              <div className="mb-4">
                <label className="text-sm text-base-muted mb-2 block">Difficulty</label>
                <div className="grid grid-cols-3 gap-2">
                  {["easy", "medium", "hard"].map(d => (
                    <button
                      key={d}
                      onClick={() => setQuizDifficulty(d)}
                      className={`py-2 rounded-xl border ${
                        quizDifficulty === d 
                          ? 'bg-brand-blue/30 border-brand-blue' 
                          : 'bg-white/5 border-base-border'
                      }`}
                    >
                      {d.charAt(0).toUpperCase() + d.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm text-base-muted mb-2 block">Questions</label>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 10, 20, 30].map(n => (
                    <button
                      key={n}
                      onClick={() => setQuizCount(n)}
                      className={`py-2 rounded-xl border ${
                        quizCount === n 
                          ? 'bg-brand-blue/30 border-brand-blue' 
                          : 'bg-white/5 border-base-border'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm text-base-muted mb-2 block">Timer (seconds per question)</label>
                <input
                  type="number"
                  value={quizTimer}
                  onChange={(e) => setQuizTimer(Number(e.target.value) || 45)}
                  min={10}
                  max={120}
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowQuizConfig(false)}
                  className="flex-1 py-3 rounded-xl border border-base-border bg-white/5"
                >
                  Cancel
                </button>
                <button
                  onClick={startQuiz}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium"
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Practice Configuration Modal */}
        {showPracticeConfig && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border">
              <h3 className="text-xl font-bold mb-4">Practice Mode</h3>
              
              <div className="mb-4">
                <label className="text-sm text-base-muted mb-2 block">Category</label>
                <select
                  value={practiceCategory}
                  onChange={(e) => setPracticeCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"
                >
                  {[...categories.filter(c => c.slug !== "more"), ...moreCategories].map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="text-sm text-base-muted mb-2 block">Difficulty</label>
                <div className="grid grid-cols-3 gap-2">
                  {["easy", "medium", "hard"].map(d => (
                    <button
                      key={d}
                      onClick={() => setPracticeDifficulty(d)}
                      className={`py-2 rounded-xl border ${
                        practiceDifficulty === d 
                          ? 'bg-brand-blue/30 border-brand-blue' 
                          : 'bg-white/5 border-base-border'
                      }`}
                    >
                      {d.charAt(0).toUpperCase() + d.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm text-base-muted mb-2 block">Questions</label>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 10, 20, 30].map(n => (
                    <button
                      key={n}
                      onClick={() => setPracticeCount(n)}
                      className={`py-2 rounded-xl border ${
                        practiceCount === n 
                          ? 'bg-brand-blue/30 border-brand-blue' 
                          : 'bg-white/5 border-base-border'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowPracticeConfig(false)}
                  className="flex-1 py-3 rounded-xl border border-base-border bg-white/5"
                >
                  Cancel
                </button>
                <button
                  onClick={startPractice}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium"
                >
                  Start Practice
                </button>
              </div>
            </div>
          </div>
        )}

        {/* More Categories Modal */}
        {showMoreCategories && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border">
              <h3 className="text-xl font-bold mb-4">More Categories</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {moreCategories.map(cat => (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setShowMoreCategories(false);
                      setSelectedCategory(cat);
                      setShowQuizConfig(true);
                    }}
                    className={`bg-gradient-to-br ${cat.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 transform transition-all hover:scale-105`}
                  >
                    <div className="text-2xl">{cat.icon}</div>
                    <div className="text-sm font-bold text-white">{cat.name}</div>
                    <div className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{cat.questions} Qs</div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setShowMoreCategories(false)}
                className="w-full py-3 rounded-xl border border-base-border bg-white/5"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}