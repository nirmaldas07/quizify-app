//src/components/home.jsx

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import Papa from "papaparse";
import CoinFly from "../Shared/CoinFly";
import { useGame } from '../../App';
import AvatarDisplay from '../GameSystem/AvatarDisplay';
import XPBar from '../GameSystem/XPBar';
import EnergyMeter from '../GameSystem/EnergyMeter';
import { GAME_CONSTANTS } from '../../utils/gameConstants';
import { categories, moreCategories, allCategories } from '../../utils/categories';
import HeroCard from './HeroCard';
import QuickActions from './QuickActions';
import CategoryGrid from './CategoryGrid';
import PracticeModeButton from './PracticeModeButton';
import DailyChallenge from './DailyChallenge';
import AvatarSelectionModal from './AvatarSelectionModal';
import MoreCategoriesModal from './MoreCategoriesModal';
import CoinsInfoModal from './CoinsInfoModal';

// /* Categories Configuration */
// const categories = [
//   { name: "GK", slug: "general-knowledge", questions: 50, icon: "🧠", color: "#FF6B6B", gradient: "from-red-500 to-pink-500" },
//   { name: "Science", slug: "science", questions: 45, icon: "🧪", color: "#4ECDC4", gradient: "from-cyan-500 to-teal-500" },
//   { name: "Fun Facts", slug: "fun-facts", questions: 30, icon: "🎉", color: "#FFD93D", gradient: "from-yellow-400 to-orange-500" },
//   { name: "History", slug: "history", questions: 42, icon: "🏺", color: "#A8E6CF", gradient: "from-green-400 to-emerald-500" },
//   { name: "AI & Tech", slug: "artificial-intelligence", questions: 28, icon: "🤖", color: "#C7B8FF", gradient: "from-purple-400 to-indigo-500" },
//   { name: "More", slug: "more", questions: 0, icon: "✨", color: "#FF8CC3", gradient: "from-pink-400 to-rose-500" },
// ];

// const moreCategories = [
//   { name: "Geography", slug: "geography", questions: 38, icon: "🗺️", color: "#FACC15", gradient: "from-yellow-400 to-amber-500" },
//   { name: "Computer", slug: "computer", questions: 34, icon: "💻", color: "#3B82F6", gradient: "from-blue-400 to-blue-600" },
//   { name: "Aptitude", slug: "aptitude", questions: 36, icon: "📐", color: "#EC4899", gradient: "from-pink-500 to-rose-500" },
//   { name: "Iconic Figures", slug: "iconic-figures", questions: 26, icon: "🌟", color: "#8B5CF6", gradient: "from-purple-500 to-violet-600" },
// ];

// const allCategories = [...categories.filter(c => c.slug !== "more"), ...moreCategories];

/* Helpers */
const ymd = (d = new Date()) => d.toLocaleDateString("en-CA");
const readJSON = (k, fallback = null) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
};
const writeJSON = (k, v) => localStorage.setItem(k, JSON.stringify(v));

export default function Home() {
  const navigate = useNavigate();
  const { player, addXP, addCoins, levelProgress, useEnergy, changeAvatar } = useGame();
  
  const [playCorrect] = useSound("/sounds/correct.mp3", { volume: 0.6 });
  const [playWrong] = useSound("/sounds/wrong.mp3", { volume: 0.6 });
  const [playCoin] = useSound("/sounds/coin.mp3", { volume: 0.75 });
  const [playLevelUp] = useSound("/sounds/levelup.mp3", { volume: 0.8 });

  // Track previous level for level-up detection
  const prevLevelRef = useRef(player.level);
  const coinPillRef = useRef(null);

  
  // Force update when navigating back to home
useEffect(() => {
  // This will run every time Home component mounts
  // ensuring we always show the latest coin count
  const handleFocus = () => {
    // Force a re-render by updating a dummy state if needed
    // The player prop should already be updated via context
  };
  
  window.addEventListener('focus', handleFocus);
  return () => window.removeEventListener('focus', handleFocus);
}, []);

  // Check for level up
  useEffect(() => {
    if (player.level > prevLevelRef.current) {
      playLevelUp?.();
      prevLevelRef.current = player.level;
    }
  }, [player.level, playLevelUp]);

  // UI State
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showQuizConfig, setShowQuizConfig] = useState(false);
  const [quizDifficulty, setQuizDifficulty] = useState("medium");
  const [quizCount, setQuizCount] = useState(10);
  const [quizTimer, setQuizTimer] = useState(45);
  const [showCoinsInfo, setShowCoinsInfo] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  // Daily Challenge
  const [dailyQ, setDailyQ] = useState(null);
  const [picked, setPicked] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [coinFly, setCoinFly] = useState(null);
  const DAILY_Q_XP = 10;
  const DAILY_Q_COINS = 5;

  // Practice Mode State
  const [dailyCoinsAdded, setDailyCoinsAdded] = useState(false);
  const [showPracticeConfig, setShowPracticeConfig] = useState(false);
  const [practiceCategory, setPracticeCategory] = useState("general-knowledge");
  const [practiceDifficulty, setPracticeDifficulty] = useState("medium");
  const [practiceCount, setPracticeCount] = useState(10);

  // Check if daily challenge was already completed today
  const [dailyCompleted, setDailyCompleted] = useState(() => {
    const dailyLog = readJSON('dq_daily_log', {});
    return dailyLog[ymd()] === true;
  });

  // Scroll restoration
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('homeScrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }

    const handleScroll = () => {
      sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load Daily Question
  useEffect(() => {
    if (dailyCompleted) return;
    
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
  }, [dailyCompleted]);

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
      setIsFlipped(true);
      setShowAnswer(true);
      if (correct) {
        const todayKey = ymd();
        writeJSON('dq_daily_log', { ...readJSON('dq_daily_log', {}), [todayKey]: true });
        setDailyCompleted(true);
        
        // Update streak
        const currentStreak = Number(localStorage.getItem('dq_streak') || 0);
        localStorage.setItem('dq_streak', String(currentStreak + 1));
      }
    }, 600);
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
  console.log("Starting quiz with energy:", player.energy);
  console.log("Category:", selectedCategory.slug);
  
  navigate(`/quiz/${selectedCategory.slug}`, {
    state: { 
      mode: "quiz",
      difficulty: quizDifficulty, 
      count: quizCount, 
      timer: { type: "per_q", seconds: quizTimer },
      source: "adventure"
    }
  });
  setShowQuizConfig(false);
};

  const startPractice = () => {
    console.log("Starting practice, category:", practiceCategory);
    // Practice mode doesn't use energy
    navigate(`/quiz/${practiceCategory}`, {
      state: { 
        mode: "practice", 
        difficulty: practiceDifficulty, 
        count: practiceCount, 
        timer: { type: "off", seconds: 0 } 
      }
    });
    setShowPracticeConfig(false);
  };

  const quickActions = [
    { icon: "🎯", label: "Quests", color: "bg-gradient-to-br from-orange-500 to-pink-500", action: () => navigate("/profile/quests") },
    { icon: "🔥", label: `${player.bestCombo} Best`, color: "bg-gradient-to-br from-red-500 to-orange-500", action: () => navigate("/profile/streaks") },
    { icon: "🏆", label: "Achieve", color: "bg-gradient-to-br from-blue-500 to-purple-500", action: () => navigate("/profile/achievements") },
    { icon: "🎁", label: "Rewards", color: "bg-gradient-to-br from-green-500 to-teal-500", action: () => navigate("/profile/rewards") },
  ];

  return (
    <div className="min-h-screen bg-base-bg text-base-text">
      <div className="fixed inset-0 -z-10 pointer-events-none"  
        style={{ background: 'linear-gradient(to bottom, #0B0F1A, #111827)' }}
        />     
      <div className="relative z-10 px-4 pt-10 pb-24">
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-5px) rotate(-2deg); }
            50% { transform: translateY(0) rotate(0deg); }
            75% { transform: translateY(-3px) rotate(2deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes coinRotate {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
            50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.8); }
          }
          
          .flip-card {
            perspective: 1000px;
          }
          
          .flip-card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          
          .flip-card-inner.flipped {
            transform: rotateY(180deg);
          }
          
          .flip-card-front, .flip-card-back {
            backface-visibility: hidden;
          }
          
          .flip-card-back {
            transform: rotateY(180deg);
          }
          
          .coin-3d {
            animation: coinRotate 2s linear infinite;
            transform-style: preserve-3d;
          }
          
          .magic-gradient {
            background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B, #FF1493, #9370DB, #4169E1, #00CED1, #FFD700);
            background-size: 400% 400%;
            animation: gradientShift 8s ease infinite;
          }
          
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>

        {/* Coin Animation */}
        {coinFly && (
          <CoinFly
            startRect={coinFly.startRect}
            targetRef={coinPillRef}
            count={coinFly.count}
            onDone={() => {
            if (!dailyCoinsAdded) {
                addXP(DAILY_Q_XP);
                addCoins(coinFly.amount);
                setDailyCoinsAdded(true);
            }
            setCoinFly(null);
            }}
          />
        )}

        {/* Enhanced Header with Avatar & Game Stats */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div 
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setShowAvatarModal(true)}
            >
              <AvatarDisplay player={player} size="normal" showLevel={true} showName={true} />
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <button
                  ref={coinPillRef}
                  onClick={() => setShowCoinsInfo(true)}
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition"
                >
                  <span className="text-lg">🪙</span>
                  <span className="font-bold">{player.coins}</span>
                </button>
                <button
                  onClick={() => navigate("/profile")}
                  className="w-10 h-10 rounded-full bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition"
                >
                  ⚙️
                </button>
              </div>
              <EnergyMeter current={player.energy} regenAt={player.energyRegenAt} />
            </div>
          </div>
          
          {/* XP Progress Bar */}
          <XPBar 
            current={levelProgress.current} 
            required={levelProgress.required} 
            level={player.level}
            animate={true}
          />
        </div>


  {/* Hero Card - Spin & Win */}
  <HeroCard onClick={() => navigate("/play")} />

  {/* Quick Actions */}
  <QuickActions actions={quickActions} />


  {/* Daily Challenge */}
  <DailyChallenge 
    dailyQ={dailyQ}
    isFlipped={isFlipped}
    picked={picked}
    onAnswer={handleDailyAnswer}
    dailyCompleted={dailyCompleted}
    DAILY_Q_COINS={DAILY_Q_COINS}
    DAILY_Q_XP={DAILY_Q_XP}
  />

    {/* Categories Section */}
    <CategoryGrid categories={categories} onCategorySelect={handleCategorySelect} />

    {/* Practice Mode - Always available (no energy cost) */}
    <PracticeModeButton 
      onClick={() => setShowPracticeConfig(true)}
      isPulsing={player.energy < 10}
    />

    {/* Avatar Selection Modal */}
    <AvatarSelectionModal 
      show={showAvatarModal}
      onClose={() => setShowAvatarModal(false)}
      player={player}
      changeAvatar={changeAvatar}
      GAME_CONSTANTS={GAME_CONSTANTS}
    />

        {/* Quiz Configuration Modal */}
        {showQuizConfig && selectedCategory && (
          <div 
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowQuizConfig(false);
              }
            }}
          >
            <div 
              className="bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Quiz Mode</h3>
                <button
                  onClick={() => setShowQuizConfig(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition"
                >
                  ✕
                </button>
              </div>

              {/* Show selected category info */}
                <div className="mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div className="flex items-center gap-3">
                    <div className="text-2xl">{selectedCategory.icon}</div>
                    <div>
                    <div className="font-medium">Category: {selectedCategory.name}</div>
                    <div className="text-xs text-base-muted">{selectedCategory.questions} questions available</div>
                    </div>
                </div>
                </div>
 
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
          <div 
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowPracticeConfig(false);
              }
            }}
          >
            <div 
              className="bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Practice Mode</h3>
                <button
                  onClick={() => setShowPracticeConfig(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-4">
                <label className="text-sm text-base-muted mb-2 block">Category</label>
                <div className="grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto">
                  {allCategories.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => setPracticeCategory(cat.slug)}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-1 ${
                        practiceCategory === cat.slug 
                          ? 'bg-brand-blue/30 border-brand-blue' 
                          : 'bg-white/5 border-base-border'
                      }`}
                    >
                      <div className="text-xl">{cat.icon}</div>
                      <div className="text-[10px] text-center">{cat.name}</div>
                    </button>
                  ))}
                </div>
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
    <MoreCategoriesModal
      show={showMoreCategories}
      onClose={() => setShowMoreCategories(false)}
      categories={moreCategories}
      onCategorySelect={handleCategorySelect}
    />

    {/* Enhanced Coins Info Modal */}
    <CoinsInfoModal
      show={showCoinsInfo}
      onClose={() => setShowCoinsInfo(false)}
      coins={player.coins}
      onNavigateToPlay={() => {
        setShowCoinsInfo(false);
        navigate('/play');
      }}
    />
      </div>
    </div>
  );
}