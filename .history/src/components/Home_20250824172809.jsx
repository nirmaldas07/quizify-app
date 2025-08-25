import { useEffect, useMemo, useRef, useState, useLayoutEffect, useCallback } from "react";
import Papa from "papaparse";

/* ------------ Categories ------------ */
const primaryCats = [
  { 
    name: "General Knowledge", 
    questions: 50, 
    icon: "🧠", 
    gradient: "from-indigo-600 via-purple-600 to-pink-500",
    particles: ["💭", "🤔", "💡"],
    description: "Test your general awareness"
  },
  { 
    name: "Artificial Intelligence", 
    questions: 28, 
    icon: "🤖", 
    gradient: "from-cyan-500 via-teal-500 to-green-500",
    particles: ["⚡", "🔮", "💎"],
    description: "Dive into AI & Machine Learning"
  },
  { 
    name: "Fun Facts", 
    questions: 30, 
    icon: "🎉", 
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    particles: ["✨", "🎊", "🌟"],
    description: "Amazing facts from around the world"
  },
  { 
    name: "Science", 
    questions: 45, 
    icon: "🧪", 
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    particles: ["🔬", "⚗️", "🧬"],
    description: "Explore the wonders of science"
  },
  { 
    name: "History", 
    questions: 42, 
    icon: "🏺", 
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    particles: ["📜", "⚔️", "🏛️"],
    description: "Journey through time"
  },
];

const extraCats = [
  { name: "Geography", questions: 38, icon: "🗺️", gradient: "from-emerald-500 to-teal-600" },
  { name: "Computer", questions: 34, icon: "💻", gradient: "from-slate-600 to-gray-700" },
  { name: "Aptitude", questions: 36, icon: "📐", gradient: "from-violet-600 to-purple-700" },
  { name: "Sports", questions: 28, icon: "⚽", gradient: "from-green-600 to-emerald-700" },
];

/* ------------ Storage & Helpers ------------ */
const XP_KEY = "qp_xp";
const LVL_KEY = "qp_level";
const COIN_KEY = "qp_coins";
const LS_STREAK = "dq_streak";
const LS_BEST_STREAK = "dq_best_streak";
const LS_DAILY_LOG = "dq_daily_log";

const threshold = (n) => 100 * n * (n - 1);
const readJSON = (k, fallback=null) => { 
  try { 
    const v = localStorage.getItem(k); 
    return v ? JSON.parse(v) : fallback; 
  } catch { 
    return fallback; 
  } 
};

const playSound = (src, volume = 0.7) => {
  try {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
  } catch {}
};

/* ------------ Advanced Components ------------ */
function FloatingParticles({ particles, count = 6 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute text-sm opacity-30 animate-bounce"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        >
          {particles[i % particles.length]}
        </div>
      ))}
    </div>
  );
}

function GlowingWheel({ size = 80, spinning = false }) {
  return (
    <div style={{ width: size, height: size }} className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-md animate-pulse" />
      
      {/* Main wheel */}
      <svg 
        viewBox="0 0 100 100" 
        className={`relative z-10 drop-shadow-2xl transition-transform duration-1000 ${
          spinning ? 'animate-spin' : 'motion-safe:animate-[spin_15s_linear_infinite]'
        }`}
      >
        <defs>
          <linearGradient id="segment1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="segment2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#06D6A0" />
          </linearGradient>
          <linearGradient id="segment3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          <linearGradient id="segment4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#F87171" />
          </linearGradient>
          <linearGradient id="segment5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient id="segment6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
        </defs>
        
        <path d="M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z" fill="url(#segment1)" stroke="white" strokeWidth="1"/>
        <path d="M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z" fill="url(#segment2)" stroke="white" strokeWidth="1"/>
        <path d="M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z" fill="url(#segment3)" stroke="white" strokeWidth="1"/>
        <path d="M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z" fill="url(#segment4)" stroke="white" strokeWidth="1"/>
        <path d="M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z" fill="url(#segment5)" stroke="white" strokeWidth="1"/>
        <path d="M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z" fill="url(#segment6)" stroke="white" strokeWidth="1"/>
        
        <circle cx="50" cy="50" r="12" fill="white" stroke="#1f2937" strokeWidth="2"/>
        <circle cx="50" cy="50" r="6" fill="#1f2937"/>
      </svg>
    </div>
  );
}

function StatsCard({ icon, value, label, change, gradient }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-4 shadow-xl border border-white/20`}>
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
        <div className="text-4xl">{icon}</div>
      </div>
      
      <div className="relative z-10">
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-white/80 text-sm mb-1">{label}</div>
        {change && (
          <div className="flex items-center gap-1">
            <span className="text-xs text-green-300">↗</span>
            <span className="text-xs text-green-300">{change}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function PremiumCategoryCard({ category, onClick, onCustomize, featured = false }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className={`relative group ${featured ? 'col-span-2' : ''}`}>
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-full ${featured ? 'aspect-[2/1]' : 'aspect-square'} rounded-3xl 
                   bg-gradient-to-br ${category.gradient} p-6 text-left overflow-hidden
                   border border-white/30 shadow-2xl transition-all duration-500
                   hover:scale-105 hover:shadow-3xl hover:border-white/50
                   active:scale-95 transform-gpu`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
        <FloatingParticles particles={category.particles || ["✨"]} count={featured ? 8 : 4} />
        
        {/* Animated border gradient */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent
                        transition-transform duration-1000 ${isHovered ? 'animate-pulse' : ''}`} />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className={`${featured ? 'text-6xl' : 'text-4xl'} mb-3 filter drop-shadow-lg transform transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
              {category.icon}
            </div>
            {!featured && (
              <div className="text-xs bg-white/20 px-2 py-1 rounded-full text-white/80 backdrop-blur-sm">
                {category.questions}
              </div>
            )}
          </div>
          
          <div>
            <h3 className={`text-white font-bold ${featured ? 'text-2xl' : 'text-lg'} mb-2 leading-tight`}>
              {category.name}
            </h3>
            {category.description && (
              <p className={`text-white/80 ${featured ? 'text-base' : 'text-sm'} leading-relaxed`}>
                {category.description}
              </p>
            )}
            {!featured && (
              <div className="text-white/60 text-xs mt-1">
                {category.questions} questions available
              </div>
            )}
          </div>
        </div>
        
        {/* Shine effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        -skew-x-12 transition-transform duration-1000 ${
                          isHovered ? 'translate-x-full' : '-translate-x-full'
                        }`} />
      </button>
      
      {/* Customize button */}
      <button
        onClick={(e) => { e.stopPropagation(); onCustomize(); }}
        className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md 
                 flex items-center justify-center text-white/90 hover:text-white 
                 hover:bg-black/60 transition-all duration-200 z-20 shadow-lg
                 hover:scale-110 active:scale-95"
      >
        <span className="text-sm">⚙️</span>
      </button>
    </div>
  );
}

function HeroSpinCard({ onClick }) {
  const [isGlowing, setIsGlowing] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsGlowing(true)}
      onMouseLeave={() => setIsGlowing(false)}
      className="relative w-full rounded-3xl overflow-hidden group transform transition-all duration-500 hover:scale-105 active:scale-95"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 opacity-90" />
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-pink-500/50 
                      transition-opacity duration-1000 ${isGlowing ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <FloatingParticles particles={["🎯", "⚡", "💫", "🌟", "✨", "🎪"]} count={12} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 p-8 flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">🎡</div>
            <h2 className="text-3xl font-black text-white">
              Spin & Play
            </h2>
          </div>
          <p className="text-white/90 text-lg mb-4 leading-relaxed">
            Quick questions • Earn XP & coins
          </p>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <span>⚡</span>
              <span>Quick rounds</span>
            </span>
            <span className="flex items-center gap-1">
              <span>🪙</span>
              <span>Earn coins</span>
            </span>
            <span className="flex items-center gap-1">
              <span>🏆</span>
              <span>Gain XP</span>
            </span>
          </div>
        </div>
        
        <div className="ml-6">
          <GlowingWheel size={100} spinning={isGlowing} />
        </div>
      </div>
      
      {/* Shine effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                      -skew-x-12 transition-transform duration-1000 ${
                        isGlowing ? 'translate-x-full' : '-translate-x-full'
                      }`} />
    </button>
  );
}

function TodaysQuestionCard({ dailyQ, picked, onAnswer }) {
  const [isRevealed, setIsRevealed] = useState(false);
  
  const handleAnswer = (optionIndex) => {
    if (picked !== null) return;
    onAnswer(optionIndex);
    setTimeout(() => setIsRevealed(true), 500);
  };

  if (!dailyQ) return null;

  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-6 shadow-2xl border border-white/30 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <FloatingParticles particles={["🎯", "💎", "⭐", "🔥"]} count={6} />
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Today's Challenge</h3>
          <p className="text-white/80 text-sm">Category: {dailyQ.category}</p>
        </div>
        <div className="text-4xl">🎯</div>
      </div>
      
      {/* Question */}
      <div className="relative z-10 mb-6">
        <p className="text-white font-semibold text-lg leading-relaxed">{dailyQ.prompt}</p>
      </div>
      
      {/* Options */}
      <div className="relative z-10 space-y-3">
        {dailyQ.options.map((opt, i) => {
          const isCorrect = i === dailyQ.answerIndex;
          const isPicked = picked === i;
          let buttonClass = "group relative flex items-center gap-4 px-5 py-4 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden ";
          
          if (picked !== null) {
            if (isPicked && isCorrect) {
              buttonClass += "bg-green-500/40 border-green-300 text-white transform scale-105";
            } else if (isPicked && !isCorrect) {
              buttonClass += "bg-red-500/40 border-red-300 text-white";
            } else if (isCorrect && isRevealed) {
              buttonClass += "bg-green-500/30 border-green-400 text-white";
            } else {
              buttonClass += "bg-white/10 border-white/30 text-white/70";
            }
          } else {
            buttonClass += "bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover:scale-105";
          }
          
          return (
            <button
              key={i}
              disabled={picked !== null}
              onClick={() => handleAnswer(i)}
              className={buttonClass}
            >
              {/* Background shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative z-10 flex items-center gap-4 w-full">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm backdrop-blur-sm">
                  {["A", "B", "C", "D"][i]}
                </div>
                <span className="flex-1 font-medium">{opt}</span>
                {isPicked && isCorrect && (
                  <div className="text-2xl">✅</div>
                )}
                {isPicked && !isCorrect && (
                  <div className="text-2xl">❌</div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
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
      
      const row = data[Math.floor(Math.random() * data.length)];
      const opts = [row.option1, row.option2, row.option3, row.option4];
      let ans = String(row.answer || "").trim();
      const abc = { A: 0, B: 1, C: 2, D: 3 };
      let correctIndex = abc[ans?.toUpperCase()] ?? 0;

      setDailyQ({
        category: row.category || "General Knowledge",
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
    if (picked !== null) return;
    
    setPicked(optionIndex);
    const correct = optionIndex === dailyQ.answerIndex;
    
    if (correct) {
      playSound("/sounds/correct.mp3", 0.8);
      setCoins(prev => prev + 5);
      setXp(prev => prev + 10);
    } else {
      playSound("/sounds/wrong.mp3", 0.8);
    }
    
    setTimeout(() => {
      setShowTodayCard(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Dynamic background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 pb-28 pt-[max(env(safe-area-inset-top))]">
        {/* Enhanced Header */}
        <header className="px-6 pt-12 mb-8">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 
                               backdrop-blur-sm border border-white/30 flex items-center justify-center 
                               text-2xl hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 
                               shadow-xl hover:shadow-2xl hover:scale-110">
                👤
              </button>
              <div>
                <p className="text-gray-300 text-sm">Good evening,</p>
                <h1 className="text-white text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                  Nirmal
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Level indicator */}
              <div className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-1">
                  <span>🏆</span>
                  <span>Lvl {level}</span>
                </div>
                <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000" 
                    style={{ width: `${Math.min(xp / nextThreshold, 1) * 100}%` }} 
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">{xp}/{nextThreshold}</div>
              </div>
              
              {/* Coins */}
              <div className="px-4 py-3 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 
                            backdrop-blur-md border border-yellow-500/30 text-white font-semibold shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🪙</span>
                  <span>{coins.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <StatsCard 
              icon="🔥" 
              value={streak} 
              label="Day Streak" 
              change={streak > 0 ? `+${streak > 1 ? '1' : '1'}` : null}
              gradient="from-orange-500 to-red-500"
            />
            <StatsCard 
              icon="🏆" 
              value={bestStreak} 
              label="Best Run" 
              gradient="from-yellow-500 to-orange-500"
            />
            <StatsCard 
              icon="⭐" 
              value={level} 
              label="Level" 
              gradient="from-purple-500 to-pink-500"
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="px-6 space-y-8">
          {/* Hero Spin & Play */}
          <HeroSpinCard onClick={() => console.log('Navigate to spin & play')} />
          
          {/* Today's Question */}
          {showTodayCard && dailyQ && (
            <TodaysQuestionCard 
              dailyQ={dailyQ}
              picked={picked}
              onAnswer={handleTodayAnswer}
            />
          )}

          {/* Categories Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Categories</h2>
              <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                Choose your challenge
              </span>
            </div>
            
            {/* Featured category */}
            <div className="mb-6">
              <PremiumCategoryCard
                category={primaryCats[0]}
                onClick={() => console.log(`Start ${primaryCats[0].name}`)}
                onCustomize={() => console.log(`Customize ${primaryCats[0].name}`)}
                featured={true}
              />
            </div>
            
            {/* Regular categories */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {primaryCats.slice(1).map((cat) => (
                <PremiumCategoryCard
                  key={cat.name}
                  category={cat}
                  onClick={() => console.log(`Start ${cat.name}`)}
                  onCustomize={() => console.log(`Customize ${cat.name}`)}
                />
              ))}
            </div>
            
            {/* More Categories */}
            <button className="w-full rounded-3xl bg-gradient-to-br from-slate-700 via-gray-700 to-slate-800 
                             p-6 text-left border border-white/20 hover:from-slate-600 hover:via-gray-600 hover:to-slate-700
                             transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="text-4xl mb-3">🎯</div>
                  <div className="text-white font-bold text-xl mb-2">Explore More</div>
                  <div className="text-white/80 text-sm">{extraCats.length} additional categories</div>
                </div>
                <div className="text-white/60 text-2xl group-hover:text-white transition-colors">→</div>
              </div>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Quick Start</h3>
            
            <div className="grid gap-4">
              {/* Daily Challenge */}
              <button className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 to-red-600 
                               p-6 text-left border border-white/30 shadow-2xl transition-all duration-500 
                               hover:scale-105 hover:shadow-3xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-4xl mb-3">🎪</div>
                    <h4 className="text-xl font-bold text-white mb-2">Daily Challenge</h4>
                    <p className="text-white/80 text-sm">Special themed questions • Bonus rewards</p>
                  </div>
                  <div className="text-white/60 text-2xl group-hover:text-white transition-colors">→</div>
                </div>
              </button>
              
              {/* Practice Mode */}
              <button className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 to-purple-600 
                               p-6 text-left border border-white/30 shadow-2xl transition-all duration-500 
                               hover:scale-105 hover:shadow-3xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-4xl mb-3">📚</div>
                    <h4 className="text-xl font-bold text-white mb-2">Practice Mode</h4>
                    <p className="text-white/80 text-sm">No timer • Learn at your pace</p>
                  </div>
                  <div className="text-white/60 text-2xl group-hover:text-white transition-colors">→</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}