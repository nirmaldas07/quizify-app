import React, { useState, useMemo, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// LocalStorage keys (matching Quiz.jsx)
const LS_RECENT = "qp_recent";
const LS_STATS = "qp_stats";

export default function History() {
  const [tab, setTab] = useState("quizzes");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("date"); // date, score, time
  
  // Load real data from localStorage
  const [historyData, setHistoryData] = useState([]);
  
  useEffect(() => {
    // Hide bottom nav when entering history
    document.body.classList.add("modal-open");
    
    // Load data from localStorage
    try {
      const recent = JSON.parse(localStorage.getItem(LS_RECENT) || "[]");
      const formattedData = recent.map(item => ({
        id: item.id || item.ts,
        type: item.mode?.toLowerCase().includes("practice") ? "practice" : "quiz",
        category: item.cat || item.snapshot?.categoryLabel || "Unknown",
        difficulty: item.snapshot?.difficulty || "medium",
        score: item.correct,
        total: item.total,
        accuracy: Math.round((item.correct / (item.total || 1)) * 100),
        time: formatTime(item.ms),
        ms: item.ms,
        date: formatDate(item.ts),
        timestamp: item.ts,
        snapshot: item.snapshot,
        mode: item.mode
      }));
      setHistoryData(formattedData);
    } catch (e) {
      console.error("Error loading history:", e);
    }
    
    return () => {
      // Restore bottom nav when leaving
      document.body.classList.remove("modal-open");
    };
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
    
    // Apply category filter
    if (filterCategory !== "all") {
      filtered = filtered.filter(h => h.category === filterCategory);
    }
    
    // Apply difficulty filter
    if (filterDifficulty !== "all") {
      filtered = filtered.filter(h => h.difficulty === filterDifficulty);
    }
    
    // Sort
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
    const relevant = items;
    if (relevant.length === 0) return null;
    
    const totalScore = relevant.reduce((sum, h) => sum + h.score, 0);
    const totalQuestions = relevant.reduce((sum, h) => sum + h.total, 0);
    const avgAccuracy = Math.round((totalScore / totalQuestions) * 100);
    const totalTime = relevant.reduce((sum, h) => sum + h.ms, 0);
    
    return {
      count: relevant.length,
      avgAccuracy,
      totalTime: formatTime(totalTime),
      bestScore: Math.max(...relevant.map(h => h.accuracy))
    };
  }, [items]);
  
  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };
  
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  };
  
  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 80) return "text-green-400";
    if (accuracy >= 60) return "text-blue-400";
    if (accuracy >= 40) return "text-yellow-400";
    return "text-red-400";
  };
  
  const getDifficultyColor = (difficulty) => {
    const d = difficulty?.toLowerCase();
    if (d === "easy") return "text-green-400";
    if (d === "medium") return "text-yellow-400";
    if (d === "hard") return "text-red-400";
    return "text-gray-400";
  };

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-b from-white/10 to-transparent">
          <div className="px-4 pt-[calc(env(safe-area-inset-top)+1rem)] pb-4">
            <div className="flex items-center justify-between mb-3">
              <button 
                onClick={() => window.history.back()}
                className="px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-sm flex items-center gap-1 backdrop-blur-sm"
              >
                ← Back
              </button>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
              >
                <FilterIcon />
              </button>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-1">History</h1>
            <p className="text-white/60 text-sm">Track your progress</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-hidden px-4">
          {/* Tabs */}
          <div className="mb-4">
            <div className="inline-flex p-1 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              {[
                { value: "quizzes", label: "Quizzes", icon: "🎯" },
                { value: "practice", label: "Practice", icon: "📝" }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setTab(option.value)}
                  className={`
                    px-4 py-2 text-sm rounded-xl transition-all duration-200
                    ${tab === option.value 
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                      : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  <span className="mr-1">{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Stats Summary */}
          {stats && (
            <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
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
            <div className="mb-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-white/60 mb-1 block">Category</label>
                  <select 
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm"
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
                      className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm"
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
                      className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm"
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
          <div className="flex-1 overflow-y-auto pb-20">
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
        </div>
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
  const getAccuracyColor = (accuracy) => {
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
        bg-gradient-to-br ${getAccuracyColor(item.accuracy)}
        border backdrop-blur-sm
        transform transition-all duration-300 hover:scale-[1.02]
        animate-fadeInUp
      `}
      style={{ animationDelay: `${index * 50}ms` }}
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
          <div className={`text-2xl font-bold ${item.accuracy >= 80 ? 'text-green-400' : item.accuracy >= 60 ? 'text-blue-400' : item.accuracy >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
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
  
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/10 transform animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Quiz Details</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
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
              <span className={`${item.difficulty === 'easy' ? 'text-green-400' : item.difficulty === 'medium' ? 'text-yellow-400' : 'text-red-400'} font-medium`}>
                {item.difficulty}
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60">Score</span>
              <span className="text-white font-medium">{item.score}/{item.total}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60">Accuracy</span>
              <span className={`${item.accuracy >= 80 ? 'text-green-400' : item.accuracy >= 60 ? 'text-blue-400' : 'text-yellow-400'} font-medium`}>
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
                // Navigate to review with the snapshot data
                console.log("Review quiz:", item.snapshot);
                // You can implement navigation to quiz review here
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Review Answers
            </button>
          )}
          
          <button 
            onClick={() => {
              // Implement retake functionality
              console.log("Retake quiz");
            }}
            className="w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function FilterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18M7 12h10M10 18h4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
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
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.5s ease-out forwards;
  }
  
  .animate-scaleIn {
    animation: scaleIn 0.3s ease-out;
  }
`;
document.head.appendChild(style);