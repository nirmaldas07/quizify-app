// src/components/Profile.jsx  (only the ProfileHome export)
export default function ProfileHome() {
  const navigate = useNavigate();
  const user = mockUser;

  const TILE = "rounded-3xl p-5 text-left text-white shadow-[0_6px_24px_rgba(0,0,0,0.25)]";

  return (
    <div className="min-h-[100dvh] bg-[#0B0C10] text-white px-4 pt-6 pb-28">
      {/* Title row */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 grid place-items-center rounded-2xl bg-white/10 border border-white/10"
          aria-label="Back"
        >←</button>
        <h1 className="text-lg font-semibold">Your Space</h1>
      </div>

      {/* HERO CARD */}
      <button
        onClick={() => navigate("/profile/leaderboard")}
        className={`${TILE} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs/5 opacity-90">Rank & Coins</div>
            <div className="mt-1 text-4xl font-extrabold tracking-tight">LEADERBOARD</div>
            <div className="mt-2 text-xs/5 opacity-90">Weekly reset · Ends in 2d 14h</div>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white/20 grid place-items-center text-2xl">🏆</div>
        </div>
      </button>

      {/* 2×2 GRID */}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => navigate("/profile/history")}
          className={`${TILE} bg-gradient-to-br from-[#D19A00] to-[#C94B4B]`}>
          <div className="text-2xl mb-2">🗂️</div>
          <div className="text-sm font-semibold">HISTORY</div>
          <div className="text-[11px] opacity-80 mt-1">Quizzes & Practice</div>
        </button>

        <button onClick={() => navigate("/profile/rewards")}
          className={`${TILE} bg-gradient-to-br from-[#2EB872] to-[#1EA07A]`}>
          <div className="text-2xl mb-2">🎁</div>
          <div className="text-sm font-semibold">REWARDS</div>
          <div className="text-[11px] opacity-80 mt-1">Claim & Redeem</div>
        </button>

        <button onClick={() => navigate("/profile/badges")}
          className={`${TILE} bg-gradient-to-br from-[#E65C00] to-[#F9D423]`}>
          <div className="text-2xl mb-2">🔖</div>
          <div className="text-sm font-semibold">BADGES</div>
          <div className="text-[11px] opacity-80 mt-1">Collectables</div>
        </button>

        <button onClick={() => navigate("/profile/achievements")}
          className={`${TILE} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0]`}>
          <div className="text-2xl mb-2">📈</div>
          <div className="text-sm font-semibold">ACHIEVEMENTS</div>
          <div className="text-[11px] opacity-80 mt-1">Milestones</div>
        </button>
      </div>

      {/* Quick strip (optional) */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button onClick={() => navigate("/profile/streaks")}
          className="rounded-3xl p-4 text-left border border-white/10 bg-white/5">
          <div className="text-xs/5 opacity-80">Streak</div>
          <div className="text-xl font-bold mt-1">🔥 5 days</div>
        </button>
        <button onClick={() => navigate("/profile/quests")}
          className="rounded-3xl p-4 text-left border border-white/10 bg-white/5">
          <div className="text-xs/5 opacity-80">Quests</div>
          <div className="text-xl font-bold mt-1">2 active</div>
        </button>
      </div>
    </div>
  );
}
