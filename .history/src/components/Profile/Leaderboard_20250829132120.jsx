import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from '../../App';

const ACCENT = "bg-lime-400";
const ACCENT_TEXT = "text-lime-400";
const COIN = "🪙";

// Different datasets for different filters
const leaderboardData = {
  global: [
    { rank: 1, name: "Bryan Wolf", handle: "@bryan", score: 43, avatar: "/profile/rank1.png", trend: "+5", streak: 12, country: "🇺🇸" },
    { rank: 2, name: "Meghan Jess…", handle: "@meghan", score: 40, avatar: "/profile/rank2.png", trend: "+2", streak: 8, country: "🇨🇦" },
    { rank: 3, name: "Alex Turner", handle: "@alex", score: 38, avatar: "/profile/rank3.png", trend: "±0", streak: 15, country: "🇬🇧" },
    { rank: 4, name: "Marsha Fisher", handle: "@marsha", score: 36, trend: "-1", streak: 5, country: "🇦🇺" },
    { rank: 5, name: "Juanita Cormier", handle: "@juanita", score: 35, trend: "+1", streak: 3, country: "🇲🇽" },
    { rank: 1, name: "You", handle: "@you", score: 34, you: true, avatar: "/profile/avatar.png", trend: "+2", streak: 7, country: "🇮🇳" },
    { rank: 7, name: "Tamara Schmidt", handle: "@tamara", score: 33, trend: "-2", streak: 2, country: "🇩🇪" },
    { rank: 8, name: "Ricardo Veum", handle: "@ricardo", score: 32, trend: "+1", streak: 4, country: "🇧🇷" },
  ],
  friends: [
    { rank: 1, name: player?.name || "You", handle: "@you", score: player?.coins || 0, you: true, avatar: "/profile/avatar.png", trend: "+2", streak: player?.bestCombo || 0, country: "🇮🇳" },
    { rank: 2, name: "Sarah Chen", handle: "@sarah", score: 31, trend: "-1", streak: 4, country: "🇸🇬", friend: true },
    { rank: 3, name: "Mike Johnson", handle: "@mike", score: 29, trend: "+3", streak: 2, country: "🇺🇸", friend: true },
    { rank: 4, name: "Priya Sharma", handle: "@priya", score: 27, trend: "±0", streak: 5, country: "🇮🇳", friend: true },
    { rank: 5, name: "David Kim", handle: "@david", score: 25, trend: "+1", streak: 3, country: "🇰🇷", friend: true },
    { rank: 6, name: "Emma Wilson", handle: "@emma", score: 23, trend: "-2", streak: 1, country: "🇬🇧", friend: true },
  ],
  india: [
    { rank: 1, name: "Rohit Sharma", handle: "@rohit", score: 45, trend: "+4", streak: 10, country: "🇮🇳" },
    { rank: 2, name: "Priya Patel", handle: "@priya", score: 42, trend: "+1", streak: 8, country: "🇮🇳" },
    { rank: 3, name: "You", handle: "@you", score: 34, you: true, avatar: "/profile/avatar.png", trend: "+3", streak: 7, country: "🇮🇳" },
    { rank: 4, name: "Arjun Singh", handle: "@arjun", score: 32, trend: "-1", streak: 5, country: "🇮🇳" },
    { rank: 5, name: "Kavya Reddy", handle: "@kavya", score: 30, trend: "+2", streak: 3, country: "🇮🇳" },
    { rank: 6, name: "Vikram Gupta", handle: "@vikram", score: 28, trend: "±0", streak: 4, country: "🇮🇳" },
  ]
};

const leagues = [
  { name: "Diamond", min: 40, color: "from-cyan-400 to-blue-600", icon: "💎" },
  { name: "Gold", min: 30, color: "from-yellow-400 to-orange-500", icon: "🥇" },
  { name: "Silver", min: 20, color: "from-gray-300 to-gray-500", icon: "🥈" },
  { name: "Bronze", min: 10, color: "from-orange-600 to-red-600", icon: "🥉" },
];

export default function Leaderboard() {
  const navigate = useNavigate();
  const { player } = useGame();
// Create dynamic leaderboard data with actual player info
const dynamicLeaderboardData = React.useMemo(() => ({
  global: leaderboardData.global.map(entry => 
    entry.you ? { ...entry, name: player?.name || "You", score: player?.coins || 0, streak: player?.bestCombo || 0 } : entry
  ),
  friends: leaderboardData.friends.map(entry => 
    entry.you ? { ...entry, name: player?.name || "You", score: player?.coins || 0, streak: player?.bestCombo || 0 } : entry
  ),
  india: leaderboardData.india.map(entry => 
    entry.you ? { ...entry, name: player?.name || "You", score: player?.coins || 0, streak: player?.bestCombo || 0 } : entry
  )
}), [player]);
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 17 });
  const [filter, setFilter] = useState("global");
  
  // Get current data based on filter
  const currentData = dynamicLeaderboardData[filter] || dynamicLeaderboardData.global;
  const currentUser = currentData.find(u => u.you);
  const top3 = currentData.slice(0, 3);
  const rest = currentData.slice(3);

  // Android back button fix
  useEffect(() => {
    const handleBackButton = (e) => {
      e.preventDefault();
      navigate(-1);
    };

    window.addEventListener('popstate', handleBackButton);
    
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);

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

  // League logic - changes based on user's score and competition level
  const getUserLeague = (score) => {
    // Dynamic league calculation based on current leaderboard
    const topScore = Math.max(...currentData.map(u => u.score));
    const userPercentile = (score / topScore) * 100;
    
    if (userPercentile >= 90) return leagues[0]; // Diamond (top 10%)
    if (userPercentile >= 70) return leagues[1]; // Gold (top 30%)
    if (userPercentile >= 40) return leagues[2]; // Silver (top 60%)
    return leagues[3]; // Bronze (bottom 40%)
  };

  return (
    <div className="min-h-screen bg-black text-white pt-12">
      {/* Enhanced Header - More Compact */}
      <div className="flex items-center justify-between mb-5">
        <button onClick={() => navigate('/profile')} className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition">

          ← Back
        </button>
        <div className="text-center">
          <div className="text-lg font-bold">🏆 Leaderboard</div>
          <div className="text-xs text-white/60">
            Ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
          </div>
        </div>
        <button className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition">
          📊
        </button>
      </div>

      {/* League Banner - Dynamic Updates */}
      <div className={`mb-5 rounded-2xl bg-gradient-to-r ${getUserLeague(currentUser?.score).color} p-4 text-center relative overflow-hidden`}>
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
        
        <div className="relative z-10">
          <div className="text-2xl mb-1">{getUserLeague(currentUser?.score).icon}</div>
          <div className="text-sm font-bold text-white">{getUserLeague(currentUser?.score).name} League</div>
          <div className="text-xs text-white/80">
            {filter === 'friends' ? 'Competing with friends!' : 'You\'re competing with the best!'}
          </div>
        </div>
      </div>

      {/* Filter Tabs - More Compact */}
      <div className="flex gap-2 mb-5">
        {[
          { key: "global", label: "🌍 Global", count: "10M+" },
          { key: "friends", label: "👥 Friends", count: leaderboardData.friends.length },
          { key: "india", label: "🇮🇳 India", count: "2.5M" }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
              filter === tab.key 
                ? 'bg-lime-500 text-black shadow-lg scale-105' 
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

      {/* Your Position Card - Compact */}
      <div className="mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg">
              🧑‍💻
            </div>
            <div>
              <div className="font-bold text-lime-400 text-sm">Your Position</div>
              <div className="text-xs text-white/70 flex items-center gap-2">
                <span>Rank #{currentUser?.rank}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
                  currentUser?.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' :
                  currentUser?.trend.startsWith('-') ? 'bg-red-500/20 text-red-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {currentUser?.trend}
                </span>
                <span className="text-white/50 text-[10px]">
                  in {filter === 'global' ? 'Global' : filter === 'friends' ? 'Friends' : 'India'}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-lime-400">{currentUser?.score} {COIN}</div>
            <div className="text-xs text-white/60">🔥 {currentUser?.streak} streak</div>
          </div>
        </div>
      </div>

      {/* Hall of Fame - With Background, Wider Gap & Animations */}
      <div className="mb-6">
        <h3 className="text-center text-sm font-semibold text-white/80 mb-4">👑 Hall of Fame</h3>
        
        {/* Background for Hall of Fame with animations */}
        <div className="bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-4 left-6 text-2xl opacity-40 animate-pulse">🏆</div>
          <div className="absolute top-8 right-8 text-lg opacity-40 animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
          <div className="absolute bottom-6 left-12 text-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>🥇</div>
          <div className="absolute bottom-4 right-6 text-lg opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }}>⭐</div>
          
          <div className="flex items-end justify-center gap-8 relative z-10">
            {/* #2 (Silver) */}
            {top3[1] && (
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <AvatarCircle src={top3[1].avatar} fallback={top3[1].name} size={56} />
                  {/* Number positioned lower */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg">
                    2
                  </div>
                </div>
                <div className="text-sm font-semibold mb-1 mt-1">{trimName(top3[1].name, 8)}</div>
                <div className="text-xs text-lime-400 font-bold">{top3[1].score} {COIN}</div>
              </div>
            )}

            {/* #1 (Gold) - Elevated */}
            {top3[0] && (
              <div className="flex flex-col items-center -mb-3">
                <div className="relative mb-2">
                  <AvatarCircle src={top3[0].avatar} fallback={top3[0].name} size={72} />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Crown />
                  </div>
                  {/* Number positioned lower */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse">
                    1
                  </div>
                </div>
                <div className="text-sm font-bold mb-1 mt-1">{trimName(top3[0].name, 8)}</div>
                <div className="text-sm text-lime-400 font-bold mb-1">{top3[0].score} {COIN}</div>
                <div className="px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold">
                  CHAMPION
                </div>
              </div>
            )}

            {/* #3 (Bronze) */}
            {top3[2] && (
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <AvatarCircle src={top3[2].avatar} fallback={top3[2].name} size={56} />
                  {/* Number positioned lower */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg">
                    3
                  </div>
                </div>
                <div className="text-sm font-semibold mb-1 mt-1">{trimName(top3[2].name, 8)}</div>
                <div className="text-xs text-lime-400 font-bold">{top3[2].score} {COIN}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Rankings - Reduced Row Height */}
      {rest.length > 0 && (
        <div className="rounded-3xl bg-white/5 border border-white/10 p-2 mb-4">
          <div className="flex justify-between items-center mb-2 px-2">
            <h3 className="text-sm font-semibold">Rankings</h3>
            <div className="text-xs text-white/60">Live updates</div>
          </div>
          
          <ul className="space-y-1.5">
            {rest.map((u, index) => (
              <li
                key={`${filter}-${u.rank}`}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${
                  u.you 
                    ? "bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]" 
                    : "bg-white/5 hover:bg-white/10"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards"
                }}
              >
                <div className="flex items-center gap-2.5">
                  <RankBadge n={u.rank} you={u.you} />
                  <AvatarCircle src={u.avatar} fallback={u.name} size={36} />
                  
                  <div className="flex flex-col leading-tight">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{trimName(u.name, 12)}</span>
                      <span className="text-xs">{u.country}</span>
                      {u.friend && <span className="text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full">Friend</span>}
                    </div>
                    <div className={`text-xs flex items-center gap-1.5 ${
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
                  <div className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
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
      )}

      {/* Dynamic Call to Action - More Compact */}
      {currentUser && currentUser.rank > 1 && (
        <div className="mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center">
          <div className="text-sm font-semibold mb-2">🚀 Climb Higher!</div>
          <div className="text-xs text-white/70 mb-3">
            {filter === 'friends' && currentUser.rank === 1 
              ? "🎉 You're #1 among friends!" 
              : `You need ${Math.max(0, (currentData[currentUser.rank - 2]?.score || 0) - currentUser.score + 1)} more coins to reach rank #${currentUser.rank - 1}`
            }
          </div>
          {!(filter === 'friends' && currentUser.rank === 1) && (
            <button 
              onClick={() => navigate("/play")}
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform"
            >
              Play Now 🎮
            </button>
          )}
        </div>
      )}

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

/* ================= Helper Components ================= */

function AvatarCircle({ src, fallback, size = 56 }) {
  const initials = getInitials(fallback);
  return (
    <div
      className="grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20"
      style={{ width: size, height: size }}
    >
      {src ? (
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <span className="text-sm font-semibold">{initials}</span>
      )}
    </div>
  );
}

function Crown() {
  return (
    <div className="w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative">
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <path d="M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z" fill="url(#crownGradient)" />
        <defs>
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
    </div>
  );
}

function RankBadge({ n, you }) {
  return (
    <div
      className={`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${
        you 
          ? "bg-black/10 text-black" 
          : "bg-white/10 text-white"
      }`}
    >
      {n}
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