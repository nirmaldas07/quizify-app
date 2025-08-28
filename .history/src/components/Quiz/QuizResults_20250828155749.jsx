import React, { useState, useEffect, useRef } from "react";

// Simple icon components (replacing lucide-react)
const ChevronRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Home = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const RefreshCw = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const BookOpen = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const TrendingUp = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const Zap = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

// Icon components for suggestions
const Brain = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Target = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
);

const Trophy = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

// Mock data and hooks (replace with your actual implementations)
const useGame = () => ({
  xp: 1250,
  coins: 450,
  level: 12,
  combo: 3,
  addXP: () => {},
  addCoins: () => {},
  updateCombo: () => {},
  nextThreshold: 1500,
  levelProgress: 0.83
});

const useNavigate = () => (path) => console.log("Navigate to:", path);

const QuizResults = ({ 
  results = {
    correct: 8,
    total: 10,
    category: "General Knowledge",
    mode: "quiz",
    elapsedMs: 125000,
    questions: []
  },
  onRetake = () => {},
  onReview = () => {},
  isRetake = false,
  isPractice = false 
}) => {
  const navigate = useNavigate();
  const { level, coins, combo } = useGame();
  const [showCelebration, setShowCelebration] = useState(false);
  const [animateScore, setAnimateScore] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  
  const { correct, total, category, mode, elapsedMs } = results;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;
  const isPerfect = accuracy === 100;
  const isGreat = accuracy >= 80;
  const timeInSeconds = Math.floor(elapsedMs / 1000);
  const avgTimePerQuestion = Math.floor(timeInSeconds / total);
  
  // Performance rating
  const getPerformanceRating = () => {
    if (isPerfect) return { emoji: "🏆", text: "Perfect!", color: "text-yellow-400" };
    if (accuracy >= 90) return { emoji: "🌟", text: "Excellent!", color: "text-purple-400" };
    if (accuracy >= 80) return { emoji: "✨", text: "Great job!", color: "text-blue-400" };
    if (accuracy >= 70) return { emoji: "👍", text: "Good effort!", color: "text-green-400" };
    if (accuracy >= 60) return { emoji: "💪", text: "Keep going!", color: "text-orange-400" };
    return { emoji: "📚", text: "Keep practicing!", color: "text-gray-400" };
  };
  
  const performance = getPerformanceRating();
  
  // Animate score on mount
  useEffect(() => {
    setAnimateScore(true);
    if (isPerfect || isGreat) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
    
    // Animate score counting
    let current = 0;
    const increment = correct / 20;
    const timer = setInterval(() => {
      current += increment;
      if (current >= correct) {
        setCurrentScore(correct);
        clearInterval(timer);
      } else {
        setCurrentScore(Math.floor(current));
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [correct, isPerfect, isGreat]);
  
  // Calculate earned rewards
  const earnedCoins = isPractice ? 0 : correct * 5 * (isPerfect ? 1.5 : isGreat ? 1.2 : 1);
  const earnedXP = earnedCoins * 2;
  
  // Mock recent performance data
  const recentPerformance = [
    { score: 7, total: 10 },
    { score: 6, total: 10 },
    { score: 8, total: 10 },
    { score: 9, total: 10 },
    { score: correct, total: total }
  ];
  
  // Suggested next actions
  const suggestions = [
    { 
      icon: <Brain />, 
      title: "Science", 
      desc: "Try a new category",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: <Target />, 
      title: "Speed Challenge", 
      desc: "Beat your time",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Trophy />, 
      title: "Perfect Score", 
      desc: "Aim for 10/10",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4">
      {/* Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="text-8xl animate-bounce">
            {isPerfect ? "🎉" : "⭐"}
          </div>
        </div>
      )}
      
      {/* Minimal Header */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => navigate("/")}
          className="p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all"
        >
          <Home />
        </button>
        
        <div className="flex gap-2">
          <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium">
            Level {level}
          </div>
          <div className="px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300">
            {coins} 🪙
          </div>
        </div>
      </div>

      {/* Main Result Card - Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse" />
        
        <div className="relative text-center">
          {/* Performance Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${performance.color}`}>
            <span className="text-2xl">{performance.emoji}</span>
            <span className="font-semibold">{performance.text}</span>
          </div>
          
          {/* Score Display */}
          <div className="mb-6">
            <div className="text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {currentScore}/{total}
            </div>
            <div className="text-sm text-white/60">{category}</div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">{accuracy}%</div>
              <div className="text-xs text-white/60">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{avgTimePerQuestion}s</div>
              <div className="text-xs text-white/60">Avg Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">
                {isPractice ? "—" : `+${Math.round(earnedCoins)}`}
              </div>
              <div className="text-xs text-white/60">Coins</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Insight */}
      <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp />
            <span className="text-sm font-medium">Your Progress</span>
          </div>
          {combo > 0 && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs">
              <Zap />
              {combo} streak
            </div>
          )}
        </div>
        
        {/* Mini chart */}
        <div className="flex items-end gap-1 h-12 mb-2">
          {recentPerformance.map((perf, idx) => (
            <div 
              key={idx}
              className={`flex-1 rounded-t transition-all ${
                idx === recentPerformance.length - 1 
                  ? 'bg-gradient-to-t from-purple-500 to-purple-400' 
                  : 'bg-white/20'
              }`}
              style={{ 
                height: `${(perf.score / perf.total) * 100}%`,
                minHeight: '4px'
              }}
            />
          ))}
        </div>
        <div className="text-xs text-white/40 text-center">Last 5 quizzes</div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          onClick={onReview}
          className="relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
          <div className="relative flex items-center justify-between">
            <div className="text-left">
              <div className="font-semibold">Review</div>
              <div className="text-xs opacity-80">Check answers</div>
            </div>
            <BookOpen />
          </div>
        </button>
        
        <button 
          onClick={onRetake}
          className="relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <div className="font-semibold">Try Again</div>
              <div className="text-xs opacity-60">New questions</div>
            </div>
            <RefreshCw />
          </div>
        </button>
      </div>

      {/* Smart Suggestions */}
      <div className="space-y-3">
        <div className="text-sm font-medium text-white/60 px-1">Suggested for you</div>
        {suggestions.map((suggestion, idx) => (
          <button
            key={idx}
            onClick={() => navigate(`/quiz/${suggestion.title.toLowerCase()}`)}
            className="w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${suggestion.color} opacity-20 group-hover:opacity-30 transition-opacity`}>
                  {suggestion.icon}
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">{suggestion.title}</div>
                  <div className="text-xs text-white/40">{suggestion.desc}</div>
                </div>
              </div>
              <ChevronRight />
            </div>
          </button>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <button 
          onClick={() => navigate("/profile/history")}
          className="w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors"
        >
          View all history →
        </button>
      </div>
    </div>
  );
};

export default QuizResults;