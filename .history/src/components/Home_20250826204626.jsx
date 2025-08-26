import React, { useState, useEffect, useRef } from "react";

/* Categories Configuration */
const categories = [
  { name: "General Knowledge", slug: "general-knowledge", questions: 50, icon: "🧠", color: "#FF6B6B", gradient: "from-red-500 to-pink-500" },
  { name: "Science", slug: "science", questions: 45, icon: "🧪", color: "#4ECDC4", gradient: "from-cyan-500 to-teal-500" },
  { name: "Fun Facts", slug: "fun-facts", questions: 30, icon: "🎉", color: "#FFD93D", gradient: "from-yellow-400 to-orange-500" },
  { name: "History", slug: "history", questions: 42, icon: "🏺", color: "#A8E6CF", gradient: "from-green-400 to-emerald-500" },
  { name: "AI & Tech", slug: "artificial-intelligence", questions: 28, icon: "🤖", color: "#C7B8FF", gradient: "from-purple-400 to-indigo-500" },
  { name: "More", slug: "more", questions: 0, icon: "✨", color: "#FF8CC3", gradient: "from-pink-400 to-rose-500" },
];

const moreCategories = [
  { name: "Geography", slug: "geography", questions: 38, icon: "🗺️", color: "#FACC15", gradient: "from-yellow-400 to-amber-500" },
  { name: "Computer", slug: "computer", questions: 34, icon: "💻", color: "#3B82F6", gradient: "from-blue-400 to-blue-600" },
  { name: "Aptitude", slug: "aptitude", questions: 36, icon: "📐", color: "#EC4899", gradient: "from-pink-500 to-rose-500" },
  { name: "Iconic Figures", slug: "iconic-figures", questions: 26, icon: "🌟", color: "#8B5CF6", gradient: "from-purple-500 to-violet-600" },
];

const allCategories = [...categories.filter(c => c.slug !== "more"), ...moreCategories];

/* Fun Facts Pool */
const funFacts = [
  "🐙 Octopuses have three hearts and blue blood!",
  "🌍 A day on Venus is longer than its year!",
  "🧠 Your brain uses 20% of your body's energy!",
  "⚡ Lightning strikes Earth 100 times per second!",
  "🦒 Giraffes have the same number of neck bones as humans!",
  "🌊 The ocean contains 99% of Earth's living space!",
  "🦴 Babies have 300 bones, adults have 206!",
  "🌳 A single tree produces 260 pounds of oxygen per year!",
  "🐝 Bees can recognize human faces!",
  "💫 There are more stars than grains of sand on Earth!"
];

/* Question Bank - Simulated CSV data */
const questionBank = [
  {
    category: "Science",
    question: "Which planet is known as the Red Planet?",
    option1: "Earth", option2: "Mars", option3: "Jupiter", option4: "Venus",
    answer: "B"
  },
  {
    category: "History",
    question: "Who painted the Mona Lisa?",
    option1: "Michelangelo", option2: "Leonardo da Vinci", option3: "Raphael", option4: "Van Gogh",
    answer: "B"
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    option1: "Beijing", option2: "Seoul", option3: "Tokyo", option4: "Bangkok",
    answer: "C"
  },
  {
    category: "Science",
    question: "What is the speed of light?",
    option1: "299,792 km/s", option2: "150,000 km/s", option3: "500,000 km/s", option4: "100,000 km/s",
    answer: "A"
  },
  {
    category: "General Knowledge",
    question: "How many continents are there?",
    option1: "5", option2: "6", option3: "7", option4: "8",
    answer: "C"
  }
];

/* Coin Fly Animation Component */
const CoinFlyAnimation = ({ startRect, targetRef, count, onDone }) => {
  useEffect(() => {
    const timer = setTimeout(onDone, 1500);
    return () => clearTimeout(timer);
  }, [onDone]);

  if (!startRect || !targetRef.current) return null;

  const targetRect = targetRef.current.getBoundingClientRect();

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute text-3xl"
          style={{
            left: startRect.left + startRect.width / 2,
            top: startRect.top + startRect.height / 2,
            '--target-x': `${targetRect.left + targetRect.width / 2 - startRect.left - startRect.width / 2}px`,
            '--target-y': `${targetRect.top + targetRect.height / 2 - startRect.top - startRect.height / 2}px`,
            animation: `coinFlyToTarget 1.5s ${i * 0.05}s cubic-bezier(0.5, 0, 0.5, 1) forwards`,
          }}
        >
          🪙
        </div>
      ))}
      <style>{`
        @keyframes coinFlyToTarget {
          0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translate(calc(var(--target-x) * 0.5), calc(var(--target-y) * 0.5 - 50px)) scale(1.2) rotate(180deg);
          }
          100% {
            transform: translate(var(--target-x), var(--target-y)) scale(0.3) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default function Home({ onNavigate = () => {} }) {
  // Core State
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(100);
  const [streak, setStreak] = useState(7);
  const coinPillRef = useRef(null);

  // UI State
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showQuizConfig, setShowQuizConfig] = useState(false);
  const [quizDifficulty, setQuizDifficulty] = useState("medium");
  const [quizCount, setQuizCount] = useState(10);
  const [quizTimer, setQuizTimer] = useState(45);
  const [showCoinsInfo, setShowCoinsInfo] = useState(false);

  // Daily Challenge Enhanced State
  const [dailyQuestions, setDailyQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('question');
  const [currentFunFact, setCurrentFunFact] = useState("");
  const [coinFly, setCoinFly] = useState(null);
  const [autoScrollTimer, setAutoScrollTimer] = useState(null);
  const DAILY_Q_XP = 10;
  const DAILY_Q_COINS = 5;

  // Practice Mode State
  const [showPracticeConfig, setShowPracticeConfig] = useState(false);
  const [practiceCategory, setPracticeCategory] = useState("general-knowledge");
  const [practiceDifficulty, setPracticeDifficulty] = useState("medium");
  const [practiceCount, setPracticeCount] = useState(10);

  // Get random fun fact
  const getRandomFunFact = () => {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  };

  // Initialize questions from bank
  useEffect(() => {
    // Shuffle and select questions for daily challenges
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    const formatted = shuffled.map(q => ({
      category: q.category,
      prompt: q.question,
      options: [q.option1, q.option2, q.option3, q.option4],
      answerIndex: ["A", "B", "C", "D"].indexOf(q.answer)
    }));
    setDailyQuestions(formatted);
    setCurrentFunFact(getRandomFunFact());
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (currentScreen === 'feedback') {
      const timer = setTimeout(() => {
        setCurrentScreen('funfact');
      }, 4000);
      setAutoScrollTimer(timer);
      return () => clearTimeout(timer);
    } else if (currentScreen === 'funfact') {
      const timer = setTimeout(() => {
        loadNextQuestion();
      }, 4000);
      setAutoScrollTimer(timer);
      return () => clearTimeout(timer);
    }
    return () => {
      if (autoScrollTimer) clearTimeout(autoScrollTimer);
    };
  }, [currentScreen]);

  const handleDailyAnswer = (idx, e) => {
    if (picked !== null || dailyQuestions.length === 0) return;
    setPicked(idx);

    const currentQ = dailyQuestions[currentQuestionIndex];
    const correct = idx === currentQ.answerIndex;

    // Clear any existing auto-scroll timer
    if (autoScrollTimer) clearTimeout(autoScrollTimer);

    // Start transition to feedback
    setTimeout(() => {
      setCurrentScreen('feedback');
      
      if (correct && e?.currentTarget && coinPillRef.current) {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoinFly({ startRect: rect, count: 5, amount: DAILY_Q_COINS });
        
        const newStreak = streak + 1;
        setStreak(newStreak);
      }
    }, 300);
  };

  const loadNextQuestion = () => {
    // Move to next question
    const nextIndex = (currentQuestionIndex + 1) % dailyQuestions.length;
    setCurrentQuestionIndex(nextIndex);
    
    // Reset states
    setPicked(null);
    setCurrentScreen('question');
    setCurrentFunFact(getRandomFunFact());
  };

  const awardCoins = (amount) => {
    setCoins(prev => prev + amount);
  };

  const awardXP = (amount) => {
    setXp(prev => prev + amount);
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
    // Navigate to quiz with selected settings
    onNavigate('quiz', {
      category: selectedCategory.slug,
      difficulty: quizDifficulty,
      count: quizCount,
      timer: quizTimer
    });
    setShowQuizConfig(false);
  };

  const startPractice = () => {
    // Navigate to practice mode
    onNavigate('practice', {
      category: practiceCategory,
      difficulty: practiceDifficulty,
      count: practiceCount
    });
    setShowPracticeConfig(false);
  };

  const quickActions = [
    { icon: "🎯", label: "Daily Quest", color: "bg-gradient-to-br from-orange-500 to-pink-500", action: () => onNavigate('profile', { tab: 'quests' }) },
    { icon: "🔥", label: `${streak} Streak`, color: "bg-gradient-to-br from-red-500 to-orange-500", action: () => onNavigate('profile', { tab: 'streaks' }) },
    { icon: "🏆", label: "Achievements", color: "bg-gradient-to-br from-blue-500 to-purple-500", action: () => onNavigate('profile', { tab: 'achievements' }) },
    { icon: "🎁", label: "Rewards", color: "bg-gradient-to-br from-green-500 to-teal-500", action: () => onNavigate('profile', { tab: 'rewards' }) },
  ];

  const currentQ = dailyQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-base-bg text-white">
      <div className="fixed inset-0 bg-[#0B0F1A]" style={{ 
        background: 'linear-gradient(to bottom, #0B0F1A, #111827)' 
      }} />
      
      <div className="relative z-10 px-4 pt-10 pb-24">
        <style>{`
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

          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(-100%); opacity: 0; }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.3); }
            50% { box-shadow: 0 0 40px rgba(255,215,0,0.6); }
          }

          @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
          }

          .slide-in {
            animation: slideIn 0.5s ease-out forwards;
          }

          .slide-out {
            animation: slideOut 0.5s ease-out forwards;
          }

          .coin-bounce {
            animation: bounce 0.6s ease-in-out infinite;
          }

          .glow-effect {
            animation: glow 2s ease-in-out infinite;
          }
        `}</style>

        {/* Coin Animation */}
        {coinFly && (
          <CoinFlyAnimation
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
            <p className="text-sm opacity-70">Ready for today's adventure?</p>
          </div>
          <div className="flex gap-3">
            <button
              ref={coinPillRef}
              onClick={() => setShowCoinsInfo(true)}
              className="px-4 py-2 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center gap-2 hover:scale-105 transition-transform glow-effect"
            >
              <span className="text-xl">🪙</span>
              <span className="font-bold text-yellow-400">{coins}</span>
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-white/10 transition"
            >
              👤
            </button>
          </div>
        </div>

        {/* Hero Card - Spin & Win */}
        <div 
          className="relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
            animation: 'pulse 3s infinite'
          }}
          onClick={() => onNavigate('play')}
        >
          <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10" 
               style={{ animation: 'float 4s ease-in-out infinite' }} />
          <div className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10" 
               style={{ animation: 'float 4s ease-in-out infinite reverse' }} />
          
          <h2 className="text-3xl font-bold mb-2">🎰 Spin & Win</h2>
          <p className="text-base opacity-90 mb-4">Test your luck, win amazing prizes!</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
               style={{
                 background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)',
                 backgroundSize: '200% auto',
                 animation: 'shimmer 2s linear infinite'
               }}>
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

        {/* Enhanced Daily Challenge with Auto-scroll */}
        <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden mb-6">
          <div className="relative h-[280px]">
            {/* Question Screen */}
            {currentScreen === 'question' && currentQ && (
              <div className="absolute inset-0 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">🎯 Today's Challenge</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                    +{DAILY_Q_COINS} coins
                  </span>
                </div>
                
                <p className="text-sm mb-4 opacity-70">{currentQ.prompt}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {currentQ.options.map((opt, idx) => {
                    const isCorrect = idx === currentQ.answerIndex;
                    const isPicked = picked === idx;
                    const showResult = picked !== null;
                    
                    return (
                      <button
                        key={idx}
                        onClick={(e) => handleDailyAnswer(idx, e)}
                        disabled={picked !== null}
                        className={`p-3 rounded-xl border-2 text-sm font-medium transition-all transform hover:scale-105 ${
                          showResult
                            ? (isCorrect ? 'border-green-500 bg-gradient-to-r from-green-500/30 to-emerald-500/30' : 
                               (isPicked ? 'border-red-500 bg-gradient-to-r from-red-500/30 to-pink-500/30' : 
                                'border-white/10 bg-white/5'))
                            : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                        } ${picked !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Feedback Screen */}
            {currentScreen === 'feedback' && currentQ && (
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-center slide-in">
                {picked === currentQ.answerIndex ? (
                  <div className="text-center">
                    <div className="text-6xl mb-4 coin-bounce">🎉</div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                      Correct!
                    </h3>
                    <p className="text-sm opacity-70">+{DAILY_Q_COINS} coins earned</p>
                    <div className="mt-4 flex gap-2 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className="text-2xl" 
                          style={{ 
                            animation: `bounce 0.5s ${i * 0.1}s ease-in-out, sparkle 1s ${i * 0.2}s ease-in-out` 
                          }}
                        >
                          ⭐
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">😔</div>
                    <h3 className="text-2xl font-bold text-red-400 mb-2">Not quite!</h3>
                    <p className="text-sm opacity-70 mb-2">The correct answer was:</p>
                    <p className="text-base font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      {currentQ.options[currentQ.answerIndex]}
                    </p>
                  </div>
                )}
                <div className="absolute bottom-4 text-xs opacity-50">Auto-advancing in 4s...</div>
              </div>
            )}

            {/* Fun Fact Screen */}
            {currentScreen === 'funfact' && (
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-center slide-in bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <div className="text-4xl mb-4" style={{ animation: 'float 2s ease-in-out infinite' }}>💡</div>
                <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Did you know?
                </h3>
                <p className="text-sm text-center px-4 leading-relaxed">{currentFunFact}</p>
                <div className="absolute bottom-4 text-xs opacity-50">Loading next question...</div>
              </div>
            )}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-4">Choose Your Adventure</h3>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleCategorySelect(cat)}
                className={`bg-gradient-to-br ${cat.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
                <div className="text-3xl drop-shadow-lg">{cat.icon}</div>
                <div className="text-xs font-bold text-white text-center drop-shadow">{cat.name}</div>
                {cat.questions > 0 && (
                  <div className="text-[10px] bg-white/30 backdrop-blur px-2 py-0.5 rounded-full">{cat.questions} Qs</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Mode */}
        <button
          onClick={() => setShowPracticeConfig(true)}
          className="w-full rounded-2xl bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 p-5 flex justify-between items-center hover:bg-gradient-to-r hover:from-green-500/20 hover:to-teal-500/20 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl group-hover:scale-110 transition-transform">
              📚
            </div>
            <div className="text-left">
              <div className="font-medium">Practice Mode</div>
              <div className="text-xs opacity-70">No timer • Learn at your pace</div>
            </div>
          </div>
          <div className="text-xl group-hover:translate-x-1 transition-transform">→</div>
        </button>

        {/* Quiz Configuration Modal */}
        {showQuizConfig && selectedCategory && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowQuizConfig(false)}
          >
            <div 
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 w-full max-w-md border border-white/10 relative transform transition-all scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQuizConfig(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition grid place-items-center text-white/70 hover:text-white"
              >
                ✕
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-3xl p-2 rounded-xl bg-gradient-to-br ${selectedCategory.gradient}`}>
                  {selectedCategory.icon}
                </div>
                <h3 className="text-xl font-bold">{selectedCategory.name} Quiz</h3>
              </div>
              
              <div className="mb-4">
                <label className="text-sm opacity-70 mb-2 block">Difficulty</label>
                <div className="grid grid-cols-3 gap-2">
                  {["easy", "medium", "hard"].map(d => (
                    <button
                      key={d}
                      onClick={() => setQuizDifficulty(d)}
                      className={`py-2 rounded-xl border transition-all ${
                        quizDifficulty === d 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent text-white' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {d.charAt(0).toUpperCase() + d.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm opacity-70 mb-2 block">Questions</label>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 10, 20, 30].map(n => (
                    <button
                      key={n}
                      onClick={() => setQuizCount(n)}
                      className={`py-2 rounded-xl border transition-all ${
                        quizCount === n 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent text-white' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm opacity-70 mb-2 block">Timer (seconds per question)</label>
                <input
                  type="number"
                  value={quizTimer}
                  onChange={(e) => setQuizTimer(Number(e.target.value) || 45)}
                  min={10}
                  max={120}
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowQuizConfig(false)}
                  className="flex-1 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={startQuiz}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg transition transform hover:scale-105"
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowPracticeConfig(false)}
          >
            <div 
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 w-full max-w-md border border-white/10 max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPracticeConfig(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition grid place-items-center text-white/70 hover:text-white"
              >
                ✕
              </button>
              
              <h3 className="text-xl font-bold mb-4">📚 Practice Mode</h3>
              
              <div className="mb-4">
                <label className="text-sm opacity-70 mb-2 block">Category</label>
                <div className="grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto">
                  {allCategories.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => setPracticeCategory(cat.slug)}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all transform hover:scale-105 ${
                        practiceCategory === cat.slug 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-500 border-transparent' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-xl">{cat.icon}</div>
                      <div className="text-[10px] text-center">{cat.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm opacity-70 mb-2 block">Difficulty</label>
                <div className="grid grid-cols-3 gap-2">
                  {["easy", "medium", "hard"].map(d => (
                    <button
                      key={d}
                      onClick={() => setPracticeDifficulty(d)}
                      className={`py-2 rounded-xl border transition-all ${
                        practiceDifficulty === d 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent text-white' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {d.charAt(0).toUpperCase() + d.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm opacity-70 mb-2 block">Questions</label>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 10, 20, 30].map(n => (
                    <button
                      key={n}
                      onClick={() => setPracticeCount(n)}
                      className={`py-2 rounded-xl border transition-all ${
                        practiceCount === n 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent text-white' 
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
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
                  className="flex-1 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={startPractice}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-green-400 to-teal-500 text-white font-medium hover:shadow-lg transition transform hover:scale-105"
                >
                  Start Practice
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced More Categories Modal */}
        {showMoreCategories && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowMoreCategories(false)}
          >
            <div 
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 w-full max-w-md border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  More Categories
                </h3>
                <button
                  onClick={() => setShowMoreCategories(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition grid place-items-center text-white/70 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {moreCategories.map(cat => (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setShowMoreCategories(false);
                      setSelectedCategory(cat);
                      setShowQuizConfig(true);
                    }}
                    className={`relative overflow-hidden bg-gradient-to-br ${cat.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 transform transition-all hover:scale-105 hover:shadow-2xl group`}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-3xl drop-shadow-lg relative z-10">{cat.icon}</div>
                    <div className="text-sm font-bold text-white relative z-10">{cat.name}</div>
                    <div className="text-xs bg-white/30 backdrop-blur px-2 py-0.5 rounded-full text-white relative z-10">
                      {cat.questions} Questions
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="text-center text-xs opacity-50">
                More categories coming soon! 🚀
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Coins Info Modal */}
        {showCoinsInfo && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setShowCoinsInfo(false)}
          >
            <div 
              className="bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-3xl p-6 w-full max-w-md border border-yellow-500/30 relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background decorations */}
              <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl" />
              
              <button
                onClick={() => setShowCoinsInfo(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur transition grid place-items-center text-white/70 hover:text-white z-10"
              >
                ✕
              </button>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl mb-4 shadow-2xl">
                    <div className="text-6xl drop-shadow-lg">🪙</div>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    Coin Treasury
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-4xl font-bold text-yellow-400">{coins}</div>
                    <div className="text-sm text-yellow-400/70">coins</div>
                  </div>
                  <div className="mt-2 px-4 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full inline-block">
                    <div className="text-xs text-yellow-400">Level {level} • {xp} XP</div>
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Ways to Earn
                </h4>
                <div className="space-y-2 mb-4">
                  {[
                    { icon: "✅", title: "Complete Quizzes", desc: "5 coins per correct answer", gradient: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30" },
                    { icon: "🎯", title: "Daily Challenge", desc: "5 coins daily + streak bonus", gradient: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30" },
                    { icon: "🎰", title: "Spin & Play", desc: "Win up to 50 coins", gradient: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/30" },
                    { icon: "🏆", title: "Achievements", desc: "Special milestone rewards", gradient: "from-orange-500/20 to-red-500/20", border: "border-orange-500/30" }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-2xl bg-gradient-to-r ${item.gradient} border ${item.border} backdrop-blur-sm transform transition-all hover:scale-105 hover:shadow-lg`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl drop-shadow">{item.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium text-white">{item.title}</div>
                          <div className="text-xs text-white/70">{item.desc}</div>
                        </div>
                        <div className="text-xl text-white/50">+</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs opacity-50">Daily</div>
                    <div className="font-bold text-yellow-400">+25</div>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs opacity-50">Weekly</div>
                    <div className="font-bold text-orange-400">+175</div>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs opacity-50">Monthly</div>
                    <div className="font-bold text-red-400">+750</div>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowCoinsInfo(false)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white font-bold transform transition hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Earning!</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}