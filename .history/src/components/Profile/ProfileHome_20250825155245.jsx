import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileHome() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");
  const [userStats, setUserStats] = useState({
    name: "Nirmal",
    level: 12,
    xp: 2840,
    nextLevelXp: 3000,
    coins: 1240,
    rank: 23,
    streak: 5,
    todayQuizzes: 3,
    weeklyXp: 450
  });

  // Dynamic greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 17) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  // Base tile class with enhanced effects
  const TILE = `
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `;

  const xpPercentage = (userStats.xp % 1000) / 10; // Assuming 1000 XP per level

  return (
    <div className="min-h-full bg-[#0B0C10] text-white pt-12">
      {/* Enhanced Header with User Info */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">{greeting} 👋</h1>
            <p className="text-white/60 text-sm">Ready for today's challenge?</p>
          </div>
          <button 
            onClick={() => navigate("/profile/settings")}
            className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition"
          >
            <span className="text-xl">⚙️</span>
          </button>
        </div>

        {/* User Stats Card */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold">
              {userStats.name[0]}
            </div>
            <div className="flex-1">
              <div className="text-lg font-semibold">{userStats.name}</div>
              <div className="text-white/60 text-sm">Level {userStats.level}</div>
            </div>
            <div className="text-right">
              <div className="text-yellow-400 font-bold text-lg">{userStats.coins} 🪙</div>
              <div className="text-white/60 text-sm">Rank #{userStats.rank}</div>
            </div>
          </div>
          
          {/* XP Progress */}
          <div className="mb-3">
            <div className="flex justify-between text-xs text-white/60 mb-1">
              <span>XP Progress</span>
              <span>{userStats.xp}/{userStats.nextLevelXp}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${xpPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-2 rounded-xl bg-white/5">
              <div className="text-orange-400 font-bold text-lg flex items-center gap-1">
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-orange-500">
                    <path fill="currentColor" d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13.07 3.13 12.25 3.47 11.52 4.05C10.07 5.04 9.07 6.53 8.84 8.24C8.6 10.24 9.38 12.21 10.89 13.65C11.92 14.65 12.45 16.13 12.09 17.47C11.64 19.25 9.87 20.16 8.16 19.65C8.17 19.77 8.19 19.89 8.22 20.01C8.48 21.36 9.24 22.47 10.38 23.05C11.53 23.63 12.92 23.54 14 22.85C15.3 22.01 15.9 20.22 15.54 18.51C15.24 17.13 14.39 15.54 14.8 14.15C15.12 13.15 15.96 12.19 17.66 11.2Z">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="scale"
                        values="1 1;1.1 0.9;1 1"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    </path>
                    <path fill="#FFD700" d="M13.5 0.67s0.74 2.65 0.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73c0-2.15 0.74-4.8 0.74-4.8S8.6 1.33 10 2.27C11.4 3.21 13.5 0.67 13.5 0.67Z">
                    <animate
                        attributeName="opacity"
                        values="0.7;1;0.7"
                        dur="0.8s"
                        repeatCount="indefinite"
                    />
                    </path>
                </svg>
                {userStats.streak}
                </div>
              <div className="text-white/60 text-xs">Day Streak</div>
            </div>
            <div className="text-center p-2 rounded-xl bg-white/5">
              <div className="text-green-400 font-bold text-lg">+{userStats.weeklyXp}</div>
              <div className="text-white/60 text-xs">This Week</div>
            </div>
          </div>
        </div>
      </div>

      {/* HERO → Leaderboard (Enhanced) */}
      <button
        onClick={() => navigate("/profile/leaderboard")}
        className={`${TILE} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`}
      >
        {/* Subtle animated background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"></div>
        
        <div className="relative flex items-start justify-between">
          <div>
            <div className="text-xs opacity-90 mb-1">🏆 Rank & Coins</div>
            <div className="text-3xl font-extrabold tracking-tight mb-2">LEADERBOARD</div>
            <div className="text-xs opacity-75 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Weekly reset · Ends in 2d 14h
            </div>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30">
            🏆
          </div>
        </div>
      </button>

      {/* Enhanced Grid with Better Spacing */}
      <div className="grid grid-cols-2 gap-4">
        {/* History - Enhanced */}
        <button
          onClick={() => navigate("/profile/history")}
          className={`${TILE} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`}
        >
          <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"></div>
          <div className="text-3xl mb-3">📊</div>
          <div className="text-sm font-bold mb-1">HISTORY</div>
          <div className="text-[11px] opacity-80">Quizzes & Practice</div>
          <div className="text-[10px] opacity-60 mt-1">+{userStats.todayQuizzes} today</div>
        </button>

        {/* Rewards - Enhanced */}
        <button
          onClick={() => navigate("/profile/rewards")}
          className={`${TILE} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`}
        >
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
          <div className="text-3xl mb-3">🎁</div>
          <div className="text-sm font-bold mb-1">REWARDS</div>
          <div className="text-[11px] opacity-80">Claim & Redeem</div>
          <div className="text-[10px] opacity-60 mt-1">2 available</div>
        </button>

        {/* Badges - Enhanced */}
        <button
          onClick={() => navigate("/profile/badges")}
          className={`${TILE} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`}
        >
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse">
            NEW
          </div>
          <div className="text-3xl mb-3">🏅</div>
          <div className="text-sm font-bold mb-1">BADGES</div>
          <div className="text-[11px] opacity-80">Collectables</div>
          <div className="text-[10px] opacity-60 mt-1">4/15 unlocked</div>
        </button>

        {/* Achievements - Enhanced */}
        <button
          onClick={() => navigate("/profile/achievements")}
          className={`${TILE} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`}
        >
          <div className="text-3xl mb-3">🎯</div>
          <div className="text-sm font-bold mb-1">ACHIEVEMENTS</div>
          <div className="text-[11px] opacity-80">Milestones</div>
          <div className="text-[10px] opacity-60 mt-1">67% complete</div>
        </button>
      </div>

      {/* Bottom Section - Improved Layout */}
      <div className="mt-4 space-y-3">
        {/* Quick Access Row */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate("/profile/streaks")}
            className={`${TILE} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">🔥</div>
              <div>
                <div className="text-sm font-bold">STREAK</div>
                <div className="text-[11px] opacity-80">{userStats.streak} days strong</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => navigate("/profile/quests")}
            className={`${TILE} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`}
          >
            <div className="flex items-center gap-3">
              <div className="text-2xl">⚡</div>
              <div>
                <div className="text-sm font-bold">QUESTS</div>
                <div className="text-[11px] opacity-80">2 active goals</div>
              </div>
            </div>
          </button>
        </div>

        {/* Settings - Full Width with Better Design */}
        <button
          onClick={() => navigate("/profile/settings")}
          className={`${TILE} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl">⚙️</div>
              <div>
                <div className="text-sm font-bold">SETTINGS</div>
                <div className="text-[11px] opacity-70">Customize your experience</div>
              </div>
            </div>
            <div className="text-white/40">→</div>
          </div>
        </button>
      </div>

      {/* Bottom Padding for Navigation */}
      <div className="h-6"></div>
    </div>
  );
}