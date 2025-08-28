import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, Home, RefreshCw, BookOpen, Trophy, Target, Zap, TrendingUp, Clock, Award, Sparkles, Brain, Medal, Star } from "lucide-react";

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
      icon: <Brain className="w-5 h-5" />, 
      title: "Science", 
      desc: "Try a new category",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: <Target className="w-5 h-5" />, 
      title: "Speed Challenge", 
      desc: "Beat your time",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Trophy className="w-5 h-5" />, 
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
          <Home className="w-5 h-5" />
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
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Your Progress</span>
          </div>
          {combo > 0 && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs">
              <Zap className="w-3 h-3" />
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
            <BookOpen className="w-5 h-5" />
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
            <RefreshCw className="w-5 h-5" />
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
              <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
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