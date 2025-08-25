import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ACCENT = "bg-lime-400";
const ACCENT_TEXT = "text-lime-400";
const COIN = "🪙";

// Enhanced data with more gaming elements
const rows = [
  { rank: 1, name: "Bryan Wolf", handle: "@bryan", score: 43, avatar: "/profile/rank1.png", trend: "+5", streak: 12, country: "🇺🇸" },
  { rank: 2, name: "Meghan Jess…", handle: "@meghan", score: 40, avatar: "/profile/rank2.png", trend: "+2", streak: 8, country: "🇨🇦" },
  { rank: 3, name: "Alex Turner", handle: "@alex", score: 38, avatar: "/profile/rank3.png", trend: "±0", streak: 15, country: "🇬🇧" },
  { rank: 4, name: "Marsha Fisher", handle: "@marsha", score: 36, trend: "-1", streak: 5, country: "🇦🇺" },
  { rank: 5, name: "Juanita Cormier", handle: "@juanita", score: 35, trend: "+1", streak: 3, country: "🇲🇽" },
  { rank: 6, name: "You", handle: "@you", score: 34, you: true, avatar: "/profile/avatar.png", trend: "+3", streak: 7, country: "🇮🇳" },
  { rank: 7, name: "Tamara Schmidt", handle: "@tamara", score: 33, trend: "-2", streak: 2, country: "🇩🇪" },
  { rank: 8, name: "Ricardo Veum", handle: "@ricardo", score: 32, trend: "+1", streak: 4, country: "🇧🇷" },
  { rank: 9, name: "Gary Sanford", handle: "@gary", score: 31, trend: "±0", streak: 1, country: "🇫🇷" },
  { rank: 10, name: "Becky Bartell", handle: "@becky", score: 30, trend: "-1", streak: 6, country: "🇯🇵" },
];

const leagues = [
  { name: "Diamond", min: 40, color: "from-cyan-400 to-blue-600", icon: "💎" },
  { name: "Gold", min: 30, color: "from-yellow-400 to-orange-500", icon: "🥇" },
  { name: "Silver", min: 20, color: "from-gray-300 to-gray-500", icon: "🥈" },
  { name: "Bronze", min: 10, color: "from-orange-600 to-red-600", icon: "🥉" },
];

export default function Leaderboard() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 23 });
  const [filter, setFilter] = useState("global"); // global, friends, country
  const [showStats, setShowStats] = useState(false);
  
  const top3 = rows.slice(0, 3);
  const rest = rows.slice(3);
  const currentUser = rows.find(u => u.you);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        return prev;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const getUserLeague = (score) => {
    return leagues.find(league => score >= league.min) || leagues[leagues.length - 1];
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-6 pb-28">
      {/* Enhanced Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate(-1)} className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition">
          ← Back
        </button>
        <div className="text-center">
          <div className="text-lg font-bold">🏆 Leaderboard</div>
          <div className="text-xs text-white/60">
            Ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
          </div>
        </div>
        <button 
          onClick={() => setShowStats(!showStats)}
          className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition"
        >
          📊
        </button>
      </div>

      {/* League Banner */}
      <div className={`mb-6 rounded-2xl bg-gradient-to-r ${getUserLeague(currentUser?.score).color} p-4 text-center`}>
        <div className="text-2xl mb-1">{getUserLeague(currentUser?.score).icon}</div>
        <div className="text-sm font-bold text-white">{getUserLeague(currentUser?.score).name} League</div>
        <div className="text-xs text-white/80">You're competing with the best!</div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: "global", label: "🌍 Global", count: "10M+" },
          { key: "friends", label: "👥 Friends", count: "12" },
          { key: "country", label: "🇮🇳 India", count: "2.5M" }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`flex-1 px-3 py-2 rounded-xl text-xs font-semibold transition ${
              filter === tab.key 
                ? 'bg-lime-500 text-black' 
                : 'border border-white/10 bg-white/5 hover:bg-white/10'
            }`}
          >
            <div>{tab.label}</div>
            <div className={`text-[10px] ${filter === tab.key ? 'text-black/70' : 'text-white/60'}`}>
              {tab.count}
            </div>
          </button>
        ))}
      </div>

      {/* Your Position Card - Pinned */}
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-lime-500/20 grid place-items-center text-xl">
              🧑‍💻
            </div>
            <div>
              <div className="font-bold text-lime-400">Your Position</div>
              <div className="text-xs text-white/70 flex items-center gap-2">
                <span>Rank #{currentUser?.rank}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  currentUser?.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' :
                  currentUser?.trend.startsWith('-') ? 'bg-red-500/20 text-red-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {currentUser?.trend}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-lime-400">{currentUser?.score} {COIN}</div>
            <div className="text-xs text-white/60">🔥 {currentUser?.streak} streak</div>
          </div>
        </div>
      </div>

      {/* Enhanced Top 3 Podium */}
      <div className="mb-8">
        <h3 className="text-center text-sm font-semibold text-white/80 mb-4">👑 Hall of Fame</h3>
        <div className="relative">
          {/* Podium Base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-lg"></div>
          
          <div className="flex items-end justify-center gap-4 relative z-10">
            {/* #2 (left) */}
            {top3[1] && (
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <AvatarCircle src={top3[1].avatar} fallback={top3[1].name} size={70} ring="ring-gray-400" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 rounded-full grid place-items-center text-xs font-bold text-black">
                    2
                  </div>
                </div>
                <div className="text-xs font-semibold">{trimName(top3[1].name)}</div>
                <div className="text-xs text-lime-400 font-bold">+{top3[1].score} {COIN}</div>
                <div className="flex items-center gap-1 text-[10px] text-white/60">
                  <span>{top3[1].country}</span>
                  <span>🔥{top3[1].streak}</span>
                </div>
              </div>
            )}

            {/* #1 (center, elevated) */}
            {top3[0] && (
              <div className="flex flex-col items-center gap-2 -mb-4">
                <div className="relative">
                  <AvatarCircle src={top3[0].avatar} fallback={top3[0].name} size={90} ring="ring-yellow-400" />
                  <Crown />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full grid place-items-center text-sm font-bold text-black animate-pulse">
                    1
                  </div>
                </div>
                <div className="text-sm font-bold">{trimName(top3[0].name)}</div>
                <div className="text-sm text-lime-400 font-bold">+{top3[0].score} {COIN}</div>
                <div className="flex items-center gap-2 text-[10px] text-white/60">
                  <span>{top3[0].country}</span>
                  <span>🔥{top3[0].streak}</span>
                  <span className="px-2 py-1 bg-yellow-400/20 rounded-full text-yellow-400 font-bold">
                    CHAMPION
                  </span>
                </div>
              </div>
            )}

            {/* #3 (right) */}
            {top3[2] && (
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <AvatarCircle src={top3[2].avatar} fallback={top3[2].name} size={70} ring="ring-orange-400" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full grid place-items-center text-xs font-bold text-black">
                    3
                  </div>
                </div>
                <div className="text-xs font-semibold">{trimName(top3[2].name)}</div>
                <div className="text-xs text-lime-400 font-bold">+{top3[2].score} {COIN}</div>
                <div className="flex items-center gap-1 text-[10px] text-white/60">
                  <span>{top3[2].country}</span>
                  <span>🔥{top3[2].streak}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced List */}
      <div className="rounded-3xl bg-white/5 border border-white/10 p-3">
        <div className="flex justify-between items-center mb-3 px-2">
          <h3 className="text-sm font-semibold">Leaderboard</h3>
          <div className="text-xs text-white/60">Live rankings</div>
        </div>
        
        <ul className="space-y-2">
          {rest.map((u, index) => (
            <li
              key={u.rank}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                u.you 
                  ? "bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]" 
                  : "bg-white/5 hover:bg-white/10"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards"
              }}
            >
              <div className="flex items-center gap-3">
                <RankBadge n={u.rank} you={u.you} trend={u.trend} />
                <AvatarCircle src={u.avatar} fallback={u.name} size={44} />
                
                <div className="flex flex-col leading-tight">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{u.name}</span>
                    <span className="text-xs">{u.country}</span>
                  </div>
                  <div className={`text-xs flex items-center gap-2 ${
                    u.you ? "text-black/70" : "text-white/60"
                  }`}>
                    <span>{u.handle}</span>
                    <span>🔥{u.streak}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-sm font-bold">
                  <span>{u.score}</span>
                  <span className={u.you ? "opacity-90" : "opacity-80"}>{COIN}</span>
                </div>
                <div className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  u.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' :
                  u.trend.startsWith('-') ? 'bg-red-500/20 text-red-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {u.trend}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center">
        <div className="text-sm font-semibold mb-2">🚀 Climb Higher!</div>
        <div className="text-xs text-white/70 mb-3">
          You need {Math.max(0, rest[Math.max(0, currentUser?.rank - 4)]?.score - currentUser?.score + 1)} more coins to reach rank #{currentUser?.rank - 1}
        </div>
        <button 
          onClick={() => navigate("/play")}
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform"
        >
          Play Now 🎮
        </button>
      </div>

      <style jsx>{`
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

/* ================= Enhanced Helpers ================= */

function AvatarCircle({ src, fallback, size = 56, ring = "" }) {
  const initials = getInitials(fallback);
  return (
    <div
      className={`grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20 ${ring ? `ring-2 ring-offset-2 ring-offset-black ${ring}` : ""}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <span className="text-lg font-semibold">{initials}</span>
      )}
    </div>
  );
}

function Crown() {
  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-6 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg">
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <path d="M10,35 L10,15 L30,30 L50,8 L70,30 L90,15 L90,35 Z" fill="url(#crownGradient)" />
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
      {/* Crown gems */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
    </div>
  );
}

function RankBadge({ n, you, trend }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-8 h-8 grid place-items-center rounded-full text-xs font-bold border-2 ${
          you 
            ? "bg-black/10 text-black border-black/20" 
            : n <= 3
            ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-black border-yellow-300"
            : "bg-white/10 text-white border-white/20"
        }`}
      >
        {n}
      </div>
    </div>
  );
}

function trimName(name, n = 12) {
  return name?.length > n ? name.slice(0, n - 1) + "…" : name;
}

function getInitials(name = "") {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + (parts[1]?.[0] || "")).toUpperCase();
}