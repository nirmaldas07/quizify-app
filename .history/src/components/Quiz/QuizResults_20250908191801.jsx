//src/components/quiz/QuizResult.jsx

import React, { useState, useEffect, useRef, useMemo } from "react";
import CoinFly from "../Shared/CoinFly";
import useSound from "use-sound";
import GameDataService from '../../services/GameDataService';

// Categories Configuration
const categories = [
  { name: "GK", slug: "general-knowledge", questions: 50, icon: "🧠", color: "#FF6B6B", gradient: "from-red-500 to-pink-500" },
  { name: "Science", slug: "science", questions: 45, icon: "🧪", color: "#4ECDC4", gradient: "from-cyan-500 to-teal-500" },
  { name: "Fun Facts", slug: "fun-facts", questions: 30, icon: "🎉", color: "#FFD93D", gradient: "from-yellow-400 to-orange-500" },
  { name: "History", slug: "history", questions: 42, icon: "🏺", color: "#A8E6CF", gradient: "from-green-400 to-emerald-500" },
  { name: "AI & Tech", slug: "artificial-intelligence", questions: 28, icon: "🤖", color: "#C7B8FF", gradient: "from-purple-400 to-indigo-500" },
  { name: "Geography", slug: "geography", questions: 38, icon: "🗺️", color: "#FACC15", gradient: "from-yellow-400 to-amber-500" },
  { name: "Computer", slug: "computer", questions: 34, icon: "💻", color: "#3B82F6", gradient: "from-blue-400 to-blue-600" },
  { name: "Aptitude", slug: "aptitude", questions: 36, icon: "📐", color: "#EC4899", gradient: "from-pink-500 to-rose-500" },
  { name: "Iconic Figures", slug: "iconic-figures", questions: 26, icon: "🌟", color: "#8B5CF6", gradient: "from-purple-500 to-violet-600" },
];

// SVG Icons
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

const QuizResults = ({ 
  results = {
    correct: 8,
    total: 10,
    category: "general-knowledge",
    mode: "quiz",
    elapsedMs: 125000,
    questions: [],
    returnPath: null,    // Add this
    fromQuest: false     // Add this
  },
  onRetake = () => {},
  onReview = () => {},
  onNavigate = (path, state) => {},
  isRetake = false,
  isPractice = false,
  player = { level: 1, coins: 0, combo: 0, energy: 5 },
  categories: categoriesProp = []
// Remove addCoins parameter - we'll use GameDataService directly
}) => {

  const [displayCoins, setDisplayCoins] = useState(GameDataService.getCoins());
  const coinPillRef = useRef(null);
  const [coinFly, setCoinFly] = useState(null);
  const [playCoin] = useSound("/sounds/coin.mp3", { volume: 0.75 });
  const [hasAddedCoins, setHasAddedCoins] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [showCoinsInfo, setShowCoinsInfo] = useState(false);
  const [coinsAdded, setCoinsAdded] = useState(false);
  const handleBack = () => {
  console.log('QuizResults handleBack:', {
    fromQuest: results.fromQuest,
    returnPath: results.returnPath,
    isPractice: results.isPractice || isPractice
  });

    // Check if we came from a quest
    if (results.fromQuest) {
        // Determine quest type based on mode
        const questType = (results.isPractice || isPractice) ? 'practiceQuestions' : 'dailyQuizzes';
        
        // For practice mode, questions are already tracked individually
        // For quiz mode, we need to increment the counter
        if (results.isPractice || isPractice) {
        // Just navigate back - progress already saved
        onNavigate('/profile/quests');
        } else {
        // Navigate back with completion data for quiz mode
        onNavigate('/profile/quests', {
            state: {
            questCompleted: true,
            questType: questType,
            increment: 1
            }
        });
        }
    } else {
        // Use the return path or default to home
        const returnPath = results.returnPath || '/';
        onNavigate(returnPath);
    }
    };
  const { correct, total, category, categorySlug, difficulty: resultDifficulty, mode, elapsedMs } = results;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;
  const isPerfect = accuracy === 100;
  const isGreat = accuracy >= 80;
  const timeInSeconds = Math.floor(elapsedMs / 1000);
  const avgTimePerQuestion = total > 0 ? Math.floor(timeInSeconds / total) : 0;
  // Calculate earned rewards - check if practice mode has earned coins from results
  const earnedCoins = isPractice 
  ? (results.earnedCoins || 0)  // Use coins from practice session
  : Math.round(correct * 5 * (isPerfect ? 1.5 : isGreat ? 1.2 : 1));

  // Find category info
  const categoryInfo = categories.find(c => c.slug === category) || categories[0];
  
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

// Update display coins to show actual total from storage
useEffect(() => {
  // Always show the real total from storage
  const actualTotal = GameDataService.getCoins();
  setDisplayCoins(actualTotal);
}, []); // Run once on mount

// Add coins ONLY if this is the first time viewing results (not from review)
useEffect(() => {
  // Check if results object has a flag indicating coins were already processed
  if (results.coinsProcessed) {
    return; // Skip if coins were already processed
  }
  
if (earnedCoins > 0 && coinPillRef.current) {
  setTimeout(() => {
    const rect = coinPillRef.current.getBoundingClientRect();
    
    // Always try to play sound directly for reliability
    const audio = new Audio('/sounds/coin.mp3');
    audio.volume = 0.75;
    audio.play().catch(e => {
      console.error('Audio play failed:', e);
      // Try the hook as fallback
      if (playCoin) {
        try {
          playCoin();
        } catch (err) {
          console.error('Hook play failed:', err);
        }
      }
    });
        
      setCoinFly({ 
        startRect: { 
          left: window.innerWidth / 2 - 50, 
          top: window.innerHeight / 2,
          width: 100,
          height: 100
        }, 
        count: Math.min(earnedCoins, 10), 
        amount: earnedCoins 
      });
      setHasAddedCoins(true);
      
      // Mark results as processed
      results.coinsProcessed = true;
    }, 500);
  }
}, []); // Empty array - only run once on mount


    // Animate score on mount
    useEffect(() => {
    // Scroll to top when component mounts
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
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
  const earnedXP = earnedCoins * 2;
  
  // Mock recent performance data
  const recentPerformance = [
    { score: 7, total: 10 },
    { score: 6, total: 10 },
    { score: 8, total: 10 },
    { score: 9, total: 10 },
    { score: correct, total: total }
  ];
  
  // Get recent quiz history from localStorage
  const getRecentCategories = () => {
    try {
      const recent = localStorage.getItem('qp_recent');
      if (recent) {
        const data = JSON.parse(recent);
        // Get last 10 played categories, excluding current
        return data
          .slice(0, 10)
          .map(item => item.slug || item.cat)
          .filter(slug => slug && slug !== results.categorySlug);
      }
    } catch (e) {
      console.error('Error reading recent categories:', e);
    }
    return [];
  };

  // Smart suggestions based on performance
  const getSuggestions = () => {
  const currentCategorySlug = categorySlug || category;
  const currentDifficulty = resultDifficulty || "medium";
    const recentlyCategoriesSlugs = getRecentCategories();
    
    // Get available categories (exclude current and recent)
    const availableCategories = (categoriesProp || categories || []).filter(cat => 
      cat.slug !== currentCategorySlug && 
      !recentlyCategoriesSlugs.slice(0, 3).includes(cat.slug) // Avoid last 3 played
    );
    
    // Get a random new category
    const getRandomCategory = () => {
        if (availableCategories.length === 0) {
        // If all categories were recently played, pick from all except current
        const fallback = (categoriesProp || categories || []).filter(c => c.slug !== currentCategorySlug);
        return fallback[Math.floor(Math.random() * fallback.length)] || (categoriesProp || categories)[0];
        }
      return availableCategories[Math.floor(Math.random() * availableCategories.length)];
    };
    
    const randomCategory = getRandomCategory();
    
    // Performance < 60%: Struggling - Focus on learning
    if (accuracy < 60) {
      // If already in practice mode, suggest even easier approach
      if (isPractice) {
        return [
          { 
            icon: "🎯", 
            title: "Try Fewer Questions", 
            desc: "Start with just 5",
            color: "from-blue-500 to-cyan-500",
            action: () => onNavigate(`/quiz/${currentCategorySlug}`, {
            state: {
                mode: "practice", 
                difficulty: "easy", 
                count: 5, 
                timer: { type: "off", seconds: 0 }
            }
            })
          },
          { 
            icon: randomCategory.icon, 
            title: randomCategory.name, 
            desc: "Fresh start with new topic",
            color: randomCategory.gradient,
            action: () => onNavigate(`/quiz/${randomCategory.slug}`, {
            state: {
                mode: "practice", 
                difficulty: "easy", 
                count: 10, 
                timer: { type: "off", seconds: 0 }
            }
            })
          },
          { 
            icon: "📖", 
            title: "Review Mistakes", 
            desc: "Learn from errors",
            color: "from-purple-500 to-pink-500",
            action: () => onReview()
          }
        ];
      }
      
      // If in quiz mode, suggest practice
      return [
        { 
          icon: "📚", 
          title: "Practice Mode", 
          desc: "No timer, learn at your pace",
          color: "from-green-500 to-teal-500",
          action: () => onNavigate(`/quiz/${currentCategorySlug}`, {
            state: {
                mode: "practice", 
                difficulty: "easy", 
                count: 10, 
                timer: { type: "off", seconds: 0 }
            }
            })
        },
        { 
          icon: currentDifficulty !== "easy" ? "🎯" : "🔄", 
          title: currentDifficulty !== "easy" ? "Easy Mode" : "Try Again", 
          desc: currentDifficulty !== "easy" ? "Build confidence" : "You can do this!",
          color: "from-blue-500 to-cyan-500",
          action: () => currentDifficulty !== "easy" 
            ? onNavigate(`/quiz/${currentCategorySlug}`, {
                state: {
                mode: "quiz", 
                difficulty: "easy", 
                count: 5, 
                timer: { type: "per_q", seconds: 60 }
                }
            })
            : onRetake()
        },
        { 
          icon: randomCategory.icon, 
          title: randomCategory.name, 
          desc: "Try something different",
          color: randomCategory.gradient,
        action: () => onNavigate(`/quiz/${randomCategory.slug}`, {
        state: {
            mode: "practice", 
            difficulty: "easy", 
            count: 10, 
            timer: { type: "off", seconds: 0 }
        }
        })
        }
      ];
    } 
    
    // Performance >= 80%: Excellent - Challenge them
    else if (accuracy >= 80) {
      // If already in hard mode with great score, suggest new challenges
      if (currentDifficulty === "hard" && accuracy >= 90) {
        return [
            { 
            icon: "⚡", 
            title: "Lightning Round", 
            desc: "20 questions, 10s each",
            color: "from-yellow-500 to-red-500",
            action: () => onNavigate(`/quiz/${currentCategorySlug}`, {
            state: {
                mode: "quiz", 
                difficulty: "hard", 
                count: 20, 
                timer: { type: "per_q", seconds: 10 }
            }
            })
            },
            { 
            icon: randomCategory.icon, 
            title: `${randomCategory.name} Challenge`, 
            desc: "Hard mode, new topic",
            color: randomCategory.gradient,
            action: () => onNavigate(`/quiz/${randomCategory.slug}`, {
            state: {
                mode: "quiz", 
                difficulty: "hard", 
                count: 15, 
                timer: { type: "per_q", seconds: 30 }
            }
            })
            },
          { 
            icon: "🎲", 
            title: "Mixed Categories", 
            desc: "Test all your knowledge",
            color: "from-purple-500 to-indigo-500",
            action: () => onNavigate(`/quiz/mixed`, {
                state: {
                    mode: "quiz", 
                    difficulty: "hard", 
                    count: 20, 
                    timer: { type: "per_q", seconds: 30 }
                }
                })
          }
        ];
      }
      
      // Standard high performance suggestions
      return [
        { 
          icon: currentDifficulty === "hard" ? "🔥" : "🎯", 
          title: currentDifficulty === "hard" ? "Perfect Score Challenge" : "Hard Mode", 
          desc: currentDifficulty === "hard" ? "Can you get 100%?" : "Level up your skills",
          color: "from-red-500 to-orange-500",
            action: () => onNavigate(`/quiz/${currentCategorySlug}`, {
            state: {
                mode: "quiz", 
                difficulty: "hard", 
                count: currentDifficulty === "hard" ? 10 : 20, 
                timer: { type: "per_q", seconds: 30 }
            }
            })
        },
        { 
          icon: randomCategory.icon, 
          title: randomCategory.name, 
          desc: "Master new topics",
          color: randomCategory.gradient,
          action: () => onNavigate(`/quiz/${randomCategory.slug}`, {
        state: {
            mode: "practice", 
            difficulty: "easy", 
            count: 10, 
            timer: { type: "off", seconds: 0 }
        }
        })
        },
        { 
        icon: "⚡", 
        title: "Speed Challenge", 
        desc: "10 questions, 15s each",
        color: "from-purple-500 to-pink-500",
        action: () => onNavigate(`/quiz/${currentCategorySlug}`, {
            state: {
                mode: "quiz", 
                difficulty: "medium", 
                count: 10, 
                timer: { type: "per_q", seconds: 15 }
            }
        })
        }
      ];
    } 
    
    // Performance 60-79%: Good - Balanced suggestions
    else {
      const needsMorePractice = accuracy < 70;
      
      return [
        { 
          icon: needsMorePractice ? "📚" : "🎯", 
          title: needsMorePractice ? "Practice More" : "Try Again", 
          desc: needsMorePractice ? "Improve accuracy" : "Beat your score",
          color: needsMorePractice ? "from-green-500 to-teal-500" : "from-blue-500 to-purple-500",
          action: needsMorePractice 
            ? () => onNavigate(`/quiz/${currentCategorySlug}`, {
                state: {
                    mode: "practice", 
                    difficulty: currentDifficulty, 
                    count: 10, 
                    timer: { type: "off", seconds: 0 }
                }
                })
            : () => onRetake()
        },
        { 
          icon: randomCategory.icon, 
          title: randomCategory.name, 
          desc: "Explore new topics",
          color: randomCategory.gradient,
          action: () => onNavigate(`/quiz/${randomCategory.slug}`, {
            state: {
                mode: "practice", 
                difficulty: "easy", 
                count: 10, 
                timer: { type: "off", seconds: 0 }
            }
            })
        },
        { 
          icon: currentDifficulty === "easy" ? "⬆️" : "💪", 
          title: currentDifficulty === "easy" ? "Medium Difficulty" : "More Questions", 
          desc: currentDifficulty === "easy" ? "Ready for more?" : "Test endurance",
          color: "from-indigo-500 to-purple-500",
          action: () => onNavigate(`/quiz/${currentCategorySlug}`, {
            state: {
                mode: "quiz", 
                difficulty: currentDifficulty === "easy" ? "medium" : currentDifficulty, 
                count: currentDifficulty === "easy" ? 10 : 20, 
                timer: { type: "per_q", seconds: 45 }
            }
            })
        }
      ];
    }
  };
  
  const suggestions = React.useMemo(() => getSuggestions(), [accuracy, isPractice, results.categorySlug, results.difficulty]);

  return (
  <div className="h-screen overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
    <div className="min-h-full p-4 pt-10">

        {/* Coin Animation */}
        {coinFly && (
        <CoinFly
            startRect={coinFly.startRect}
            targetRef={coinPillRef}
            count={coinFly.count}
            onDone={() => {
            // Add coins only once
            if (coinFly.amount > 0 && !coinsAdded) {
                console.log('[QuizResults] Updating display with current total');
                setCoinsAdded(true);
                // Get the latest total from storage
                const currentTotal = GameDataService.getCoins();
                setDisplayCoins(currentTotal);
            }
            setCoinFly(null);
            }}
        />
        )}
      <style>{`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
      
      {/* Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="text-8xl animate-bounce">
            {isPerfect ? "🎉" : "⭐"}
          </div>
        </div>
      )}
      
      {/* Header */}
      {/* Header */}
      <div className="flex justify-between items-center mb-6 mt-4">
        <button 
          onClick={handleBack}
          className="p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2"
        >
          {/* Back arrow icon */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>
        
        <div className="flex gap-2">
          <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium">
            Level {player.level}
          </div>
            <button
            ref={coinPillRef}
            onClick={() => setShowCoinsInfo(true)}
            className="px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer"
            >
            {displayCoins} 🪙
            </button>
        </div>
      </div>

      {/* Main Result Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse" />
        
        <div className="relative text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${performance.color}`}>
            <span className="text-2xl">{performance.emoji}</span>
            <span className="font-semibold">{performance.text}</span>
          </div>
          
          <div className="mb-6">
            <div className="text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {currentScore}/{total}
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-white/60">
              <span className="text-xl">{categoryInfo.icon}</span>
              <span>{categoryInfo.name}</span>
            </div>
          </div>
          
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
                {earnedCoins > 0 ? `+${earnedCoins}` : "0"}
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
          {player.combo > 0 && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs">
              <Zap />
              {player.combo} streak
            </div>
          )}
        </div>
        
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
        <div className="text-sm font-medium text-white/60 px-1">Recommended for you</div>
        {suggestions.map((suggestion, idx) => (
          <button
            key={idx}
            onClick={suggestion.action}
            className="w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${suggestion.color} opacity-20 group-hover:opacity-30 transition-opacity`}>
                  <span className="text-xl">{suggestion.icon}</span>
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

      {/* View History Link */}
      <div className="mt-6 pt-6 border-t border-white/10">
    <button 
    onClick={() => onNavigate("/profile/history", {
        state: { 
        from: 'results',
        returnToResults: true
        }
    })}
    className="w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors"
    >
    View all history →
    </button>
      </div>

      {/* Coins Info Modal */}
      {showCoinsInfo && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowCoinsInfo(false);
            }
          }}
        >
          <div 
            className="bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="h-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-5xl" style={{ animation: 'coinRotate 2s linear infinite' }}>
                    🪙
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      Your Treasure
                    </h3>
                    <p className="text-3xl font-bold text-white mt-1">{displayCoins} Coins</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCoinsInfo(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Ways to Earn</h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          <span className="text-2xl">✅</span>
                          Complete Quizzes
                        </div>
                        <div className="text-xs text-gray-400 mt-1">+5 coins per correct answer</div>
                      </div>
                      <div className="text-green-400 font-bold">+5</div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          <span className="text-2xl">🎯</span>
                          Daily Challenge
                        </div>
                        <div className="text-xs text-gray-400 mt-1">Complete daily for bonus</div>
                      </div>
                      <div className="text-blue-400 font-bold">+5</div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          <span className="text-2xl">🎰</span>
                          Spin & Play
                        </div>
                        <div className="text-xs text-gray-400 mt-1">Test your luck!</div>
                      </div>
                      <div className="text-purple-400 font-bold">+50</div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          <span className="text-2xl">🏆</span>
                          Achievements
                        </div>
                        <div className="text-xs text-gray-400 mt-1">Unlock special rewards</div>
                      </div>
                      <div className="text-orange-400 font-bold">+???</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Next reward</span>
                  <span>{100 - (player.coins % 100)} coins to go</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all"
                    style={{ width: `${(player.coins % 100)}%` }}
                  />
                </div>
              </div>
              
              <button
                onClick={() => {
                  setShowCoinsInfo(false);
                  onNavigate('/play');
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg"
              >
                Start Earning Now! 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
</div>
  );
};

export default QuizResults;