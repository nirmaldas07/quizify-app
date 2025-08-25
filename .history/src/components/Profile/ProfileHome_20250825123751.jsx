// src/components/Profile/ProfileHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileHome() {
  const navigate = useNavigate();
  
  // Mock user data
  const user = {
    name: "Nirmal",
    handle: "@nirmal",
    level: 7,
    xp: 420,
    next: 800,
    coins: 1240,
    rank: 23,
  };

  const getXPPercentage = () => {
    const currentLevelXP = user.xp % 1000; // Assuming 1000 XP per level
    return (currentLevelXP / 1000) * 100;
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-6 pb-28">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl">
            🧑🏻‍💻
          </div>
          <div>
            <div className="text-base font-semibold">{user.name}</div>
            <div className="text-xs text-white/60">{user.handle}</div>
          </div>
        </div>
        <button
          onClick={() => navigate("/profile/settings")}
          className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
        >
          Edit
        </button>
      </div>

      {/* Level + XP */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 mb-4">
        <div className="w-full">
          <div className="flex items-center justify-between text-xs text-white/70 mb-1">
            <span>Level {user.level}</span>
            <span>{user.xp}/{user.next}</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/80 rounded-full transition-all"
              style={{ width: `${getXPPercentage()}%` }}
            />
          </div>
        </div>
        
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate("/profile/wallet")}
            className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10 active:scale-[0.99] transition"
          >
            <div className="text-sm text-white/70">Coins</div>
            <div className="mt-0.5 flex items-center gap-2 text-base font-semibold">
              <span className="text-lg leading-none">🪙</span>
              <span>{user.coins}</span>
            </div>
          </button>
          
          <button
            onClick={() => navigate("/profile/leaderboard")}
            className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10 active:scale-[0.99] transition"
          >
            <div className="text-sm text-white/70">Your rank</div>
            <div className="mt-0.5 flex items-center gap-2 text-base font-semibold">
              <span className="text-lg leading-none">🏆</span>
              <span>#{user.rank}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Quick cards */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button
          onClick={() => navigate("/profile/streaks")}
          className="rounded-3xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10"
        >
          <div className="text-sm text-white/70">Streak</div>
          <div className="mt-1 text-2xl font-semibold">🔥 5 days</div>
          <div className="text-xs text-white/60 mt-1">Don't break the chain</div>
        </button>
        <button
          onClick={() => navigate("/profile/quests")}
          className="rounded-3xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10"
        >
          <div className="text-sm text-white/70">Quests</div>
          <div className="mt-1 text-2xl font-semibold">2 active</div>
          <div className="text-xs text-white/60 mt-1">Small goals. Big gains.</div>
        </button>
      </div>

      {/* Navigation Sections */}
      <div className="space-y-2">
        <button
          onClick={() => navigate("/profile/leaderboard")}
          className="w-full flex items-center gap-3 py-3.5 px-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 active:scale-[0.99] transition"
        >
          <div className="text-xl">🏅</div>
          <div className="flex-1 text-left">
            <div className="text-[15px] font-semibold leading-tight">Leaderboard</div>
            <div className="text-xs text-white/60 leading-tight mt-0.5">Compete this week</div>
          </div>
          <div className="text-sm text-white/70">›</div>
        </button>
        
        <button
          onClick={() => navigate("/profile/history")}
          className="w-full flex items-center gap-3 py-3.5 px-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 active:scale-[0.99] transition"
        >
          <div className="text-xl">🗂️</div>
          <div className="flex-1 text-left">
            <div className="text-[15px] font-semibold leading-tight">History</div>
            <div className="text-xs text-white/60 leading-tight mt-0.5">Your quizzes & practice</div>
          </div>
          <div className="text-sm text-white/70">›</div>
        </button>
        
        <button
          onClick={() => alert("Coming Soon!")}
          className="w-full flex items-center gap-3 py-3.5 px-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 active:scale-[0.99] transition"
        >
          <div className="text-xl">🎁</div>
          <div className="flex-1 text-left">
            <div className="text-[15px] font-semibold leading-tight">Rewards</div>
            <div className="text-xs text-white/60 leading-tight mt-0.5">Redeem your wins</div>
          </div>
          <div className="text-sm text-white/70">›</div>
        </button>
        
        <button
          onClick={() => alert("Coming Soon!")}
          className="w-full flex items-center gap-3 py-3.5 px-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 active:scale-[0.99] transition"
        >
          <div className="text-xl">🔖</div>
          <div className="flex-1 text-left">
            <div className="text-[15px] font-semibold leading-tight">Badges</div>
            <div className="text-xs text-white/60 leading-tight mt-0.5">Collect and show off</div>
          </div>
          <div className="text-sm text-white/70">›</div>
        </button>
        
        <button
          onClick={() => alert("Coming Soon!")}
          className="w-full flex items-center gap-3 py-3.5 px-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 active:scale-[0.99] transition"
        >
          <div className="text-xl">📈</div>
          <div className="flex-1 text-left">
            <div className="text-[15px] font-semibold leading-tight">Achievements</div>
            <div className="text-xs text-white/60 leading-tight mt-0.5">Milestones you've hit</div>
          </div>
          <div className="text-sm text-white/70">›</div>
        </button>
        
        <button
          onClick={() => navigate("/profile/settings")}
          className="w-full flex items-center gap-3 py-3.5 px-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 active:scale-[0.99] transition"
        >
          <div className="text-xl">⚙️</div>
          <div className="flex-1 text-left">
            <div className="text-[15px] font-semibold leading-tight">Settings</div>
            <div className="text-xs text-white/60 leading-tight mt-0.5">Make it yours</div>
          </div>
          <div className="text-sm text-white/70">›</div>
        </button>
      </div>
    </div>
  );
}