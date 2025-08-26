import React, { useState, useMemo, useEffect } from "react";

// LocalStorage keys (matching Quiz.jsx)
const LS_RECENT = "qp_recent";
const LS_STATS = "qp_stats";

// Mock data for testing when localStorage is empty
const MOCK_DATA = [
  {
    id: Date.now() - 86400000,
    type: "quiz",
    category: "General Knowledge",
    difficulty: "easy",
    score: 8,
    total: 10,
    accuracy: 80,
    time: "02:31",
    ms: 151000,
    date: "Yesterday",
    timestamp: Date.now() - 86400000,
    mode: "Quiz"
  },
  {
    id: Date.now() - 172800000,
    type: "practice",
    category: "Science",
    difficulty: "medium",
    score: 12,
    total: 15,
    accuracy: 80,
    time: "06:02",
    ms: 362000,
    date: "2 days ago",
    timestamp: Date.now() - 172800000,
    mode: "Practice"
  },
  {
    id: Date.now() - 259200000,
    type: "quiz",
    category: "Fun Facts",
    difficulty: "easy",
    score: 9,
    total: 10,
    accuracy: 90,
    time: "02:05",
    ms: 125000,
    date: "3 days ago",
    timestamp: Date.now() - 259200000,
    mode: "Quiz"
  }
];

export default function History() {
  const [tab, setTab] = useState("quizzes");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [historyData, setHistoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatTime = (ms) => {
    if (!ms) return "00:00";
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "Unknown";
    const date = new Date(timestamp);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  };

  useEffect(() => {
    // Load data from localStorage
    setIsLoading(true);
    try {
      const recent = localStorage.getItem(LS_RECENT);
      if (recent) {
        const parsed = JSON.parse(recent);
        const formattedData = parsed.map(item => ({
          id: item.id || item.ts,
          type: item.mode?.toLowerCase().includes("practice") ? "practice" : "quiz",
          category: item.cat || item.snapshot?.categoryLabel || "Unknown",
          difficulty: item.snapshot?.difficulty || "medium",
          score: item.correct || 0,
          total: item.total || 0,
          accuracy: item.total ? Math.round((item.correct / item.total) * 100) : 0,
          time: formatTime(item.ms),
          ms: item.ms || 0,
          date: formatDate(item.ts),
          timestamp: item.ts,
          snapshot: item.snapshot,
          mode: item.mode || "Quiz"
        }));
        setHistoryData(formattedData);
      } else {
        // Use mock data if no localStorage data
        console.log("No history data found, using mock data");
        setHistoryData(MOCK_DATA);
      }
    } catch (e) {
      console.error("Error loading history:", e);
      // Use mock data on error
      setHistoryData(MOCK_DATA);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Get unique categories for filter
  const categories = useMemo(() => {
    const cats = new Set(historyData.map(h => h.category));
    return Array.from(cats);
  }, [historyData]);

  // Filter and sort items
  const items = useMemo(() => {
    let filtered = historyData.filter(h => 
      tab === "quizzes" ? h.type === "quiz" : h.type === "practice"
    );
    
    if (filterCategory !== "all") {
      filtered = filtered.filter(h => h.category === filterCategory);
    }
    
    if (filterDifficulty !== "all") {
      filtered = filtered.filter(h => h.difficulty === filterDifficulty);
    }
    
    filtered.sort((a, b) => {
      if (sortBy === "date") return b.timestamp - a.timestamp;
      if (sortBy === "score") return b.accuracy - a.accuracy;
      if (sortBy === "time") return a.ms - b.ms;
      return 0;
    });
    
    return filtered;
  }, [historyData, tab, filterCategory, filterDifficulty, sortBy]);

  // Calculate stats
  const stats = useMemo(() => {
    if (items.length === 0) return null;
    
    const totalScore = items.reduce((sum, h) => sum + h.score, 0);
    const totalQuestions = items.reduce((sum, h) => sum + h.total, 0);
    const avgAccuracy = totalQuestions ? Math.round((totalScore / totalQuestions) * 100) : 0;
    const totalTime = items.reduce((sum, h) => sum + h.ms, 0);
    
    return {
      count: items.length,
      avgAccuracy,
      totalTime: formatTime(totalTime),
      bestScore: Math.max(...items.map(h => h.accuracy))
    };
  }, [items]);

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 80) return "text-green-400";
    if (accuracy >= 60) return "text-blue-400";
    if (accuracy >= 40) return "text-yellow-400";
    return "text-red-400";
  };

  if (isLoading) {
    return (
      <div className="min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center">
        <div className="text-white">Loading history...</div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12">
      {/* Header */}
       <div className="">
        <div className="px-4 pt-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <button 
              onClick={() => window.history.back()}
              className="px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1"
            >
              ← Back
            </button>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 rounded-xl border border-white/20 bg-white/10 text-white"
            >
              <FilterIcon />
            </button>
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-1">History</h1>
          <p className="text-white/70 text-sm">Track your progress</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-4 pb-20">
            {/* Tabs (sticky) */}
            <div
            className="
                sticky top-0 z-[60] isolate
                -mx-4 px-4              /* match the surrounding px-4 on the content wrapper */
                bg-[#0B0C10]            /* SOLID background = nothing shows through */
                shadow-[0_1px_0_rgba(255,255,255,0.06)]
            "
            >
            {/* fixed-height row */}
            <div className="h-14 flex items-center">  {/* h-16 ≈ 64px; use h-14 for 56px */}
                <div className="inline-flex p-1 rounded-2xl bg-white/10 border border-white/20">
                {[
                    { value: "quizzes", label: "Quizzes", icon: "🎯" },
                    { value: "practice", label: "Practice", icon: "📝" }
                ].map(option => (
                    <button
                    key={option.value}
                    onClick={() => setTab(option.value)}
                    className={`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${
                        tab === option.value
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-white/70 hover:text-white"
                    }`}
                    >
                    <span className="mr-1">{option.icon}</span>
                    {option.label}
                    </button>
                ))}
                </div>
            </div>
            </div>

        
        {/* Stats Summary */}
        {stats && (
          <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard label="Total" value={stats.count} />
              <StatCard label="Avg Score" value={`${stats.avgAccuracy}%`} color={getAccuracyColor(stats.avgAccuracy)} />
              <StatCard label="Best Score" value={`${stats.bestScore}%`} color="text-green-400" />
              <StatCard label="Total Time" value={stats.totalTime} />
            </div>
          </div>
        )}
        
        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-4 p-4 rounded-2xl bg-white/10 border border-white/20">
            <div className="space-y-3">
              <div>
                <label className="text-xs text-white/60 mb-1 block">Category</label>
                <select 
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm"
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-xs text-white/60 mb-1 block">Difficulty</label>
                  <select 
                    value={filterDifficulty}
                    onChange={(e) => setFilterDifficulty(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm"
                  >
                    <option value="all">All</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                
                <div className="flex-1">
                  <label className="text-xs text-white/60 mb-1 block">Sort By</label>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm"
                  >
                    <option value="date">Date</option>
                    <option value="score">Score</option>
                    <option value="time">Time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* List */}
        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">📚</div>
            <p className="text-white/60">No {tab} history yet</p>
            <p className="text-white/40 text-sm mt-1">Start playing to see your progress here!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item, index) => (
              <HistoryCard 
                key={item.id} 
                item={item} 
                index={index}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Detail Modal */}
      {selectedItem && (
        <DetailModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

function StatCard({ label, value, color = "text-white" }) {
  return (
    <div className="text-center">
      <div className="text-xs text-white/60 mb-1">{label}</div>
      <div className={`text-lg font-bold ${color}`}>{value}</div>
    </div>
  );
}

function HistoryCard({ item, index, onClick }) {
  const getAccuracyGradient = (accuracy) => {
    if (accuracy >= 80) return "from-green-500/20 to-green-600/10 border-green-500/30";
    if (accuracy >= 60) return "from-blue-500/20 to-blue-600/10 border-blue-500/30";
    if (accuracy >= 40) return "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30";
    return "from-red-500/20 to-red-600/10 border-red-500/30";
  };
  
  const getDifficultyBadge = (difficulty) => {
    const d = difficulty?.toLowerCase();
    if (d === "easy") return { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30" };
    if (d === "medium") return { bg: "bg-yellow-500/20", text: "text-yellow-400", border: "border-yellow-500/30" };
    if (d === "hard") return { bg: "bg-red-500/20", text: "text-red-400", border: "border-red-500/30" };
    return { bg: "bg-gray-500/20", text: "text-gray-400", border: "border-gray-500/30" };
  };
  
  const diffStyle = getDifficultyBadge(item.difficulty);
  
  return (
    <div 
      onClick={onClick}
      className={`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${getAccuracyGradient(item.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{item.type === "quiz" ? "🎯" : "📝"}</span>
            <h3 className="font-semibold text-white">{item.category}</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded-full text-xs ${diffStyle.bg} ${diffStyle.text} ${diffStyle.border} border`}>
              {item.difficulty}
            </span>
            <span className="text-xs text-white/50">{item.date}</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className={`text-2xl font-bold ${
            item.accuracy >= 80 ? 'text-green-400' : 
            item.accuracy >= 60 ? 'text-blue-400' : 
            item.accuracy >= 40 ? 'text-yellow-400' : 
            'text-red-400'
          }`}>
            {item.accuracy}%
          </div>
          <div className="text-xs text-white/60">{item.score}/{item.total}</div>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-3 text-white/60">
          <span>⏱ {item.time}</span>
          <span>{item.mode}</span>
        </div>
        <span className="text-white/40">Tap to review →</span>
      </div>
    </div>
  );
}

function DetailModal({ item, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Quiz Details</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60">Category</span>
              <span className="text-white font-medium">{item.category}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60">Difficulty</span>
              <span className={`${
                item.difficulty === 'easy' ? 'text-green-400' : 
                item.difficulty === 'medium' ? 'text-yellow-400' : 
                'text-red-400'
              } font-medium`}>
                {item.difficulty}
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60">Score</span>
              <span className="text-white font-medium">{item.score}/{item.total}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60">Accuracy</span>
              <span className={`${
                item.accuracy >= 80 ? 'text-green-400' : 
                item.accuracy >= 60 ? 'text-blue-400' : 
                'text-yellow-400'
              } font-medium`}>
                {item.accuracy}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60">Time</span>
              <span className="text-white font-medium">{item.time}</span>
            </div>
          </div>
          
          {item.snapshot && (
            <button 
              onClick={() => {
                console.log("Review quiz:", item.snapshot);
                // Implement navigation to quiz review
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Review Answers
            </button>
          )}
          
          <button 
            onClick={() => {
              console.log("Retake quiz");
              // Implement retake functionality
            }}
            className="w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18M7 12h10M10 18h4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}