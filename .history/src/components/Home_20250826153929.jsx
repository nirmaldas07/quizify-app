import { useEffect, useMemo, useRef, useState, useLayoutEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import Papa from "papaparse";
import ConfirmStartSheet from "./ConfirmStartSheet";
import CoinFly from "./CoinFly";

/* ------------ Categories ------------ */
const categories = [
  { name: "General Knowledge", questions: 50, icon: "🧠", color: "#FF6B6B", gradient: "from-red-500 to-pink-500" },
  { name: "Science", questions: 45, icon: "🧪", color: "#4ECDC4", gradient: "from-cyan-500 to-teal-500" },
  { name: "Fun Facts", questions: 30, icon: "🎉", color: "#FFD93D", gradient: "from-yellow-400 to-orange-500" },
  { name: "History", questions: 42, icon: "🏺", color: "#A8E6CF", gradient: "from-green-400 to-emerald-500" },
  { name: "AI & Tech", questions: 28, icon: "🤖", color: "#C7B8FF", gradient: "from-purple-400 to-indigo-500" },
  { name: "More", questions: 0, icon: "✨", color: "#FF8CC3", gradient: "from-pink-400 to-rose-500" },
];

/* ------------ Storage & Constants ------------ */
const LS_LAST_ANSWERED = "dq_last_answered";
const LS_STREAK = "dq_streak";
const LS_BEST_STREAK = "dq_best_streak";
const LS_DAILY_LOG = "dq_daily_log";
const XP_KEY = "qp_xp";
const LVL_KEY = "qp_level";
const COIN_KEY = "qp_coins";
const DAILY_Q_XP = 10;
const DAILY_Q_COINS = 5;

/* ------------ Helpers ------------ */
const toSlug = (s) => s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
const cap = (s = "") => s.slice(0, 1).toUpperCase() + s.slice(1);
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
  const [level, setLevel] = useState(() => parseInt(localStorage.getItem(LVL_KEY) || "1", 10));
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem(XP_KEY) || "0", 10));
  const [coins, setCoins] = useState(() => parseInt(localStorage.getItem(COIN_KEY) || "0", 10));
  const [streak, setStreak] = useState(() => Number(localStorage.getItem(LS_STREAK) || 0));
  const coinPillRef = useRef(null);

  // Daily Challenge State
  const [dailyQ, setDailyQ] = useState(null);
  const [picked, setPicked] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [coinFly, setCoinFly] = useState(null);

  // UI State
  const [selectedCategory, setSelectedCategory] = useState(null);

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
        writeJSON(LS_DAILY_LOG, { ...readJSON(LS_DAILY_LOG, {}), [todayKey]: true });
        localStorage.setItem(LS_LAST_ANSWERED, todayKey);
        
        const newStreak = streak + 1;
        setStreak(newStreak);
        localStorage.setItem(LS_STREAK, String(newStreak));
      }
    }, 600);
  };

  const awardCoins = (amount) => {
    const next = coins + amount;
    setCoins(next);
    localStorage.setItem(COIN_KEY, String(next));
  };

  const awardXP = (amount) => {
    let newXP = xp + amount;
    let newLevel = level;
    while (newXP >= threshold(newLevel + 1)) newLevel++;
    setXp(newXP);
    setLevel(newLevel);
    localStorage.setItem(XP_KEY, String(newXP));
    localStorage.setItem(LVL_KEY, String(newLevel));
  };

  const startQuiz = (category) => {
    if (category === "More") {
      navigate("/categories");
      return;
    }
    navigate(`/quiz/${toSlug(category)}/start`, {
      state: { mode: "quiz", difficulty: "medium", count: 10, timer: { type: "per_q", seconds: 45 } }
    });
  };

  const quickActions = [
    { icon: "🎯", label: "Daily Quest", color: "bg-gradient-to-br from-orange-500 to-pink-500", action: () => navigate("/quests") },
    { icon: "🔥", label: `${streak} Streak`, color: "bg-gradient-to-br from-red-500 to-orange-500", action: () => navigate("/streaks") },
    { icon: "🏆", label: "Leaderboard", color: "bg-gradient-to-br from-blue-500 to-purple-500", action: () => navigate("/leaderboard") },
    { icon: "🎁", label: "Rewards", color: "bg-gradient-to-br from-green-500 to-teal-500", action: () => navigate("/rewards") },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      color: 'white',
      paddingTop: 'calc(20px + env(safe-area-inset-top))',
      paddingBottom: '100px'
    }}>
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
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
        animation: 'slideDown 0.5s ease-out'
      }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '4px' }}>
            Hi, Nirmal! 👋
          </h1>
          <p style={{ fontSize: '16px', opacity: 0.7 }}>Ready for today's adventure?</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            ref={coinPillRef}
            onClick={() => navigate("/store")}
            style={{
              background: 'linear-gradient(135deg, #FFD93D, #FFA500)',
              padding: '10px 18px',
              borderRadius: '20px',
              border: 'none',
              fontSize: '16px',
              fontWeight: '700',
              color: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(255, 217, 61, 0.3)'
            }}
          >
            🪙 {coins}
          </button>
          <button
            onClick={() => navigate("/profile")}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'grid',
              placeItems: 'center',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            👤
          </button>
        </div>
      </div>

      {/* Hero Card - Play Now */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '24px',
        padding: '32px',
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)'
      }}
      onClick={() => navigate("/play")}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }} />
        
        <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '8px' }}>
          🎰 Spin & Win
        </h2>
        <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '16px' }}>
          Test your luck, win amazing prizes!
        </p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '8px 16px',
          borderRadius: '100px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          Play Now →
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginBottom: '32px'
      }}>
        {quickActions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.action}
            className={action.color}
            style={{
              aspectRatio: '1',
              borderRadius: '20px',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              animation: `fadeInUp 0.5s ease-out ${0.1 * idx}s both`
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ fontSize: '28px' }}>{action.icon}</div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'white' }}>{action.label}</div>
          </button>
        ))}
      </div>

      {/* Daily Challenge */}
      {dailyQ && !showAnswer && (
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '24px',
          marginBottom: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700' }}>🎯 Daily Challenge</h3>
            <span style={{
              background: 'linear-gradient(135deg, #10B981, #059669)',
              padding: '4px 12px',
              borderRadius: '100px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              +{DAILY_Q_COINS} coins
            </span>
          </div>
          
          <p style={{
            fontSize: '16px',
            marginBottom: '20px',
            lineHeight: '1.5'
          }}>
            {dailyQ.prompt}
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>
            {dailyQ.options.map((opt, idx) => {
              const isCorrect = idx === dailyQ.answerIndex;
              const isPicked = picked === idx;
              const showResult = picked !== null;
              
              return (
                <button
                  key={idx}
                  onClick={(e) => handleDailyAnswer(idx, e)}
                  disabled={picked !== null}
                  style={{
                    padding: '16px',
                    borderRadius: '16px',
                    border: '2px solid',
                    borderColor: showResult
                      ? (isCorrect ? '#10B981' : (isPicked ? '#EF4444' : 'rgba(255, 255, 255, 0.1)'))
                      : 'rgba(255, 255, 255, 0.1)',
                    background: showResult
                      ? (isCorrect ? 'rgba(16, 185, 129, 0.1)' : (isPicked ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.05)'))
                      : 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: picked !== null ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s',
                    opacity: picked !== null && !isCorrect && !isPicked ? 0.5 : 1
                  }}
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
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15))',
          borderRadius: '24px',
          padding: '24px',
          marginBottom: '24px',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎉</div>
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#10B981', marginBottom: '8px' }}>
            Amazing!
          </h3>
          <p style={{ fontSize: '14px', opacity: 0.8 }}>
            You've completed today's challenge! Come back tomorrow for more.
          </p>
        </div>
      )}

      {/* Categories Section */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '700',
          marginBottom: '16px'
        }}>
          Choose Your Adventure
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px'
        }}>
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => startQuiz(cat.name)}
              className={`bg-gradient-to-br ${cat.gradient}`}
              style={{
                aspectRatio: '1',
                borderRadius: '20px',
                border: 'none',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: `fadeInUp 0.5s ease-out ${0.1 * idx}s both`,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={{ fontSize: '36px' }}>{cat.icon}</div>
              <div style={{
                fontSize: '12px',
                fontWeight: '700',
                color: 'white',
                textAlign: 'center',
                lineHeight: '1.2'
              }}>
                {cat.name}
              </div>
              {cat.questions > 0 && (
                <div style={{
                  fontSize: '10px',
                  opacity: 0.9,
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '2px 8px',
                  borderRadius: '100px'
                }}>
                  {cat.questions} Qs
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Practice Mode */}
      <button
        onClick={() => navigate("/practice")}
        style={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #A8E6CF, #7FD8BE)',
            borderRadius: '16px',
            display: 'grid',
            placeItems: 'center',
            fontSize: '24px'
          }}>
            📚
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Practice Mode</div>
            <div style={{ fontSize: '12px', opacity: 0.7 }}>No timer • Learn at your pace</div>
          </div>
        </div>
        <div style={{ fontSize: '20px' }}>→</div>
      </button>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}