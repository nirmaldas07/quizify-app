// src/components/Profile.jsx
// Clean, Apple‑ish Profile tab with simple cards/rows.
// Mirrors Play.jsx vibe: rounded cards, emoji icons, soft shadows, tight copy.
// Routes to add (example):
//   <Route path="/profile" element={<ProfileHome />} />
//   <Route path="/profile/leaderboard" element={<Leaderboard />} />
//   <Route path="/profile/history" element={<History />} />
//   <Route path="/profile/rewards" element={<Rewards />} />
//   <Route path="/profile/badges" element={<Badges />} />
//   <Route path="/profile/achievements" element={<Achievements />} />
//   <Route path="/profile/settings" element={<Settings />} />
//   {/* Optional extras if you enable them */}
//   <Route path="/profile/streaks" element={<Streaks />} />
//   <Route path="/profile/quests" element={<Quests />} />
//   <Route path="/profile/wallet" element={<Wallet />} />
//   <Route path="/profile/friends" element={<Friends />} />

import React, { useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/* -------------------------------------------------- */
/* Utilities                                          */
/* -------------------------------------------------- */
const clamp = (n, min = 0, max = 100) => Math.max(min, Math.min(max, n));

function XPBar({ level = 3, xp = 120, next = 200 }) {
  const pct = clamp(Math.round((xp / next) * 100));
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-white/70 mb-1">
        <span>Level {level}</span>
        <span>
          {xp}/{next}
        </span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-white/80 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function StatPill({ icon, label, value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left hover:bg-white/10 active:scale-[0.99] transition"
    >
      <div className="text-sm text-white/70">{label}</div>
      <div className="mt-0.5 flex items-center gap-2 text-base font-semibold">
        <span className="text-lg leading-none">{icon}</span>
        <span>{value}</span>
      </div>
    </button>
  );
}

function RowItem({ to, title, subtitle, right, icon, onClick }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={onClick ?? (() => to && navigate(to))}
      className="w-full flex items-center gap-3 py-3.5 px-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 active:scale-[0.99] transition"
    >
      <div className="text-xl">{icon}</div>
      <div className="flex-1 text-left">
        <div className="text-[15px] font-semibold leading-tight">{title}</div>
        {subtitle && (
          <div className="text-xs text-white/60 leading-tight mt-0.5">{subtitle}</div>
        )}
      </div>
      <div className="text-sm text-white/70">{right ?? "›"}</div>
    </button>
  );
}

function Segmented({ value, onChange, options }) {
  return (
    <div className="inline-flex p-1 rounded-xl bg-white/10 border border-white/10">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          className={`px-3 py-1.5 text-sm rounded-lg transition ${
            value === o.value ? "bg-white text-black" : "text-white/80 hover:text-white"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function FilterPills({ value, onChange, options }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          className={`px-3 py-1.5 text-sm rounded-full border transition ${
            value === o.value
              ? "border-white bg-white text-black"
              : "border-white/10 bg-white/0 text-white/80 hover:bg-white/10"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* -------------------------------------------------- */
/* Mock Data (replace with real state later)          */
/* -------------------------------------------------- */
const mockUser = {
  name: "Nirmal",
  handle: "@nirmal",
  level: 7,
  xp: 420,
  next: 800,
  coins: 1240,
  rank: 23,
  city: "Bengaluru",
};

const mockLeaderboard = Array.from({ length: 20 }).map((_, i) => ({
  rank: i + 1,
  name: i === 9 ? "You" : ["Aarav", "Neha", "Kabir", "Ishita", "Vikram", "Zara"][i % 6],
  coins: 5000 - i * 117,
  handle: "@user" + (i + 1),
  you: i === 9,
}));

const mockHistory = [
  { id: 1, type: "quiz", category: "General Knowledge", difficulty: "Easy", score: 8, total: 10, time: "02:31", date: "Aug 22" },
  { id: 2, type: "practice", category: "Science", difficulty: "Medium", score: 12, total: 15, time: "06:02", date: "Aug 22" },
  { id: 3, type: "quiz", category: "Fun Facts", difficulty: "Easy", score: 9, total: 10, time: "02:05", date: "Aug 21" },
];

const mockRewards = {
  claimable: [ { id: "r1", title: "Spin Ticket", cost: 200 }, { id: "r2", title: "Badge Chest", cost: 500 } ],
  catalog: [ { id: "r3", title: "Theme Pack", cost: 800 }, { id: "r4", title: "Name Flair", cost: 1200 } ],
};

const mockBadges = [
  { id: "b1", name: "Starter", unlocked: true },
  { id: "b2", name: "7‑Day Streak", unlocked: true },
  { id: "b3", name: "Speedster", unlocked: false },
  { id: "b4", name: "Brainiac", unlocked: false },
  { id: "b5", name: "Collector", unlocked: false },
];

const mockAchievements = [
  { id: "a1", name: "100 Correct Answers", value: 72, goal: 100 },
  { id: "a2", name: "10 Categories Tried", value: 6, goal: 10 },
  { id: "a3", name: "Longest Streak", value: 5, goal: 30 },
];

/* -------------------------------------------------- */
/* Profile Home                                       */
/* -------------------------------------------------- */
export default function ProfileHome() {
  const navigate = useNavigate();
  const user = mockUser; // swap with your user state

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-6 pb-28">{/* pb for bottom nav */}
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl">🧑🏻‍💻</div>
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
        <XPBar level={user.level} xp={user.xp} next={user.next} />
        <div className="mt-3 grid grid-cols-2 gap-3">
          <StatPill icon="🪙" label="Coins" value={user.coins} onClick={() => navigate("/profile/wallet")} />
          <StatPill icon="🏆" label="Your rank" value={`#${user.rank}`} onClick={() => navigate("/profile/leaderboard")} />
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
          <div className="text-xs text-white/60 mt-1">Don’t break the chain</div>
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

      {/* Sections */}
      <div className="space-y-2">
        <RowItem icon="🏅" title="Leaderboard" subtitle="Compete this week" to="/profile/leaderboard" />
        <RowItem icon="🗂️" title="History" subtitle="Your quizzes & practice" to="/profile/history" />
        <RowItem icon="🎁" title="Rewards" subtitle="Redeem your wins" to="/profile/rewards" />
        <RowItem icon="🔖" title="Badges" subtitle="Collect and show off" to="/profile/badges" />
        <RowItem icon="📈" title="Achievements" subtitle="Milestones you’ve hit" to="/profile/achievements" />
        <RowItem icon="👥" title="Friends" subtitle="Compare and challenge" to="/profile/friends" />
        <RowItem icon="👛" title="Wallet" subtitle="Every coin accounted" to="/profile/wallet" />
        <RowItem icon="⚙️" title="Settings" subtitle="Make it yours" to="/profile/settings" />
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/* Leaderboard                                        */
/* -------------------------------------------------- */
export function Leaderboard() {
  const [period, setPeriod] = useState("weekly");
  const [scope, setScope] = useState("global");
  const data = mockLeaderboard;

  return (
    <Screen title="Leaderboard" subtitle="Ends in 2d : 14h">
      <div className="flex items-center justify-between mb-3">
        <Segmented
          value={period}
          onChange={setPeriod}
          options={[
            { value: "weekly", label: "Weekly" },
            { value: "monthly", label: "Monthly" },
            { value: "all", label: "All‑time" },
          ]}
        />
        <FilterPills
          value={scope}
          onChange={setScope}
          options={[
            { value: "global", label: "Global" },
            { value: "friends", label: "Friends" },
            { value: "city", label: "City" },
          ]}
        />
      </div>

      {/* Your rank pinned */}
      <div className="rounded-2xl border border-white/10 bg-white/10 p-3 mb-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <span className="text-base">🏆</span>
            <span className="font-semibold">You</span>
          </div>
          <div className="font-semibold">#{mockUser.rank} • {mockUser.coins}🪙</div>
        </div>
      </div>

      <ul className="space-y-2">
        {data.map((u) => (
          <li key={u.rank} className={`rounded-2xl border border-white/10 p-3 flex items-center justify-between ${u.you ? "bg-white/10" : "bg-white/5"}`}>
            <div className="flex items-center gap-3">
              <div className="w-8 text-center font-semibold">{u.rank}</div>
              <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center">{u.you ? "🧑🏻‍💻" : "🙂"}</div>
              <div>
                <div className="text-sm font-semibold leading-tight">{u.you ? "You" : u.name}</div>
                <div className="text-xs text-white/60">{u.handle}</div>
              </div>
            </div>
            <div className="text-sm font-semibold">{u.coins} 🪙</div>
          </li>
        ))}
      </ul>
    </Screen>
  );
}

/* -------------------------------------------------- */
/* History                                            */
/* -------------------------------------------------- */
export function History() {
  const [tab, setTab] = useState("quizzes");
  const items = useMemo(
    () =>
      mockHistory.filter((h) => (tab === "quizzes" ? h.type === "quiz" : h.type === "practice")),
    [tab]
  );

  return (
    <Screen title="History" subtitle="Your attempts & practice">
      <div className="mb-3">
        <Segmented
          value={tab}
          onChange={setTab}
          options={[
            { value: "quizzes", label: "Quizzes" },
            { value: "practice", label: "Practice" },
          ]}
        />
      </div>

      <ul className="space-y-2">
        {items.map((h) => (
          <li key={h.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="text-base">{h.type === "quiz" ? "🧩" : "📝"}</span>
                <span className="font-semibold">{h.category}</span>
                <span className="text-white/60">• {h.difficulty}</span>
              </div>
              <div className="text-white/60">{h.date}</div>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <div className="text-white/80">Score: {h.score}/{h.total}</div>
              <div className="text-white/60">⏱ {h.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </Screen>
  );
}

/* -------------------------------------------------- */
/* Rewards                                            */
/* -------------------------------------------------- */
export function Rewards() {
  const [coins, setCoins] = useState(mockUser.coins);
  const claim = (cost) => setCoins((c) => Math.max(0, c - cost));

  return (
    <Screen title="Rewards" subtitle="Claim & redeem">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mb-3">
        <div className="text-sm text-white/70">Your balance</div>
        <div className="text-2xl font-semibold mt-1">{coins} 🪙</div>
      </div>

      <h3 className="text-sm font-semibold text-white/80 mb-2">Unclaimed</h3>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {mockRewards.claimable.map((r) => (
          <button key={r.id} onClick={() => claim(r.cost)} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left hover:bg-white/10">
            <div className="text-sm font-semibold">{r.title}</div>
            <div className="text-xs text-white/60 mt-1">Cost: {r.cost} 🪙</div>
          </button>
        ))}
      </div>

      <h3 className="text-sm font-semibold text-white/80 mb-2">Catalog</h3>
      <div className="grid grid-cols-2 gap-2">
        {mockRewards.catalog.map((r) => (
          <div key={r.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="text-sm font-semibold">{r.title}</div>
            <div className="text-xs text-white/60 mt-1">{r.cost} 🪙</div>
            <button className="mt-2 w-full px-3 py-1.5 rounded-xl border border-white/10 bg-white/10 text-sm">Redeem</button>
          </div>
        ))}
      </div>
    </Screen>
  );
}

/* -------------------------------------------------- */
/* Badges                                             */
/* -------------------------------------------------- */
export function Badges() {
  return (
    <Screen title="Badges" subtitle="Collect and show off">
      <div className="grid grid-cols-4 gap-2">
        {mockBadges.map((b) => (
          <div key={b.id} className={`aspect-square rounded-2xl grid place-items-center border ${b.unlocked ? "bg-white/5 border-white/10" : "bg-transparent border-white/10"}`}>
            <div className={`text-2xl ${b.unlocked ? "opacity-100" : "opacity-30"}`}>{b.unlocked ? "🏅" : "🔒"}</div>
            <div className="sr-only">{b.name}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-white/60">Tap a badge to see how to unlock.</div>
    </Screen>
  );
}

/* -------------------------------------------------- */
/* Achievements                                       */
/* -------------------------------------------------- */
export function Achievements() {
  return (
    <Screen title="Achievements" subtitle="Milestones you’ve hit">
      <ul className="space-y-2">
        {mockAchievements.map((a) => {
          const pct = clamp(Math.round((a.value / a.goal) * 100));
          return (
            <li key={a.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between text-sm mb-2">
                <div className="font-semibold">{a.name}</div>
                <div className="text-white/60">{a.value}/{a.goal}</div>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-white/80" style={{ width: `${pct}%` }} />
              </div>
            </li>
          );
        })}
      </ul>
    </Screen>
  );
}

/* -------------------------------------------------- */
/* Friends (optional)                                 */
/* -------------------------------------------------- */
export function Friends() {
  return (
    <Screen title="Friends" subtitle="Invite and compete">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm text-white/80 mb-2">Invite a friend</div>
        <div className="flex gap-2">
          <input className="flex-1 rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none" placeholder="Friend’s phone or ID" />
          <button className="px-3 py-2 rounded-xl border border-white/10 bg-white/10 text-sm">Send</button>
        </div>
      </div>
      <div className="mt-4 text-sm text-white/60">Friend leaderboard shows here once you add friends.</div>
    </Screen>
  );
}

/* -------------------------------------------------- */
/* Wallet (optional)                                  */
/* -------------------------------------------------- */
export function Wallet() {
  const tx = [
    { id: 1, t: "Earned: Quiz win", v: +120 },
    { id: 2, t: "Redeemed: Spin Ticket", v: -200 },
    { id: 3, t: "Earned: Daily quest", v: +50 },
  ];
  return (
    <Screen title="Wallet" subtitle="Every coin accounted">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mb-3">
        <div className="text-sm text-white/70">Balance</div>
        <div className="text-2xl font-semibold mt-1">{mockUser.coins} 🪙</div>
      </div>
      <ul className="space-y-2">
        {tx.map((r) => (
          <li key={r.id} className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between text-sm">
            <span>{r.t}</span>
            <span className={r.v > 0 ? "text-emerald-300" : "text-red-300"}>{r.v > 0 ? "+" : ""}{r.v}</span>
          </li>
        ))}
      </ul>
    </Screen>
  );
}

/* -------------------------------------------------- */
/* Streaks (optional)                                 */
/* -------------------------------------------------- */
export function Streaks() {
  const days = ["S","M","T","W","T","F","S"];
  const today = 2; // mock
  return (
    <Screen title="Streaks" subtitle="Don’t break the chain">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm text-white/70 mb-2">This week</div>
        <div className="grid grid-cols-7 gap-2">
          {days.map((d, i) => (
            <div key={i} className={`aspect-square rounded-xl grid place-items-center text-sm border ${
              i <= today ? "bg-white/80 text-black border-transparent" : "border-white/10"
            }`}>{d}</div>
          ))}
        </div>
      </div>
    </Screen>
  );
}

/* -------------------------------------------------- */
/* Quests (optional)                                  */
/* -------------------------------------------------- */
export function Quests() {
  const quests = [
    { id: 1, t: "Finish a quiz", v: 50, done: true },
    { id: 2, t: "Practice 10 questions", v: 30, done: false },
  ];
  return (
    <Screen title="Quests" subtitle="Small goals. Big gains.">
      <ul className="space-y-2">
        {quests.map((q) => (
          <li key={q.id} className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">{q.t}</div>
              <div className="text-xs text-white/60">Reward: {q.v} 🪙</div>
            </div>
            <button className={`px-3 py-1.5 text-sm rounded-xl border ${
              q.done ? "border-white/10 bg-white/20" : "border-white/10 bg-white/10"}`}
            >{q.done ? "Claim" : "Start"}</button>
          </li>
        ))}
      </ul>
    </Screen>
  );
}

/* -------------------------------------------------- */
/* Settings                                           */
/* -------------------------------------------------- */
export function Settings() {
  const [name, setName] = useState(mockUser.name);
  const [lang, setLang] = useState("English");
  const [publicRank, setPublicRank] = useState(true);

  return (
    <Screen title="Settings" subtitle="Make it yours">
      <div className="space-y-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <label className="text-xs text-white/60">Name</label>
          <input
            className="mt-1 w-full bg-transparent outline-none text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <label className="text-xs text-white/60">Language</label>
          <select
            className="mt-1 w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-sm"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Show rank on leaderboards</div>
            <div className="text-xs text-white/60">Hide to stay private</div>
          </div>
          <button
            onClick={() => setPublicRank((v) => !v)}
            className={`px-3 py-1.5 rounded-xl text-sm border ${
              publicRank ? "bg-white text-black" : "bg-white/10 border-white/10"}`}
          >{publicRank ? "On" : "Off"}</button>
        </div>
        <button className="w-full mt-1 px-3 py-2 rounded-xl border border-white/10 bg-white/10 text-sm">Save</button>
      </div>
    </Screen>
  );
}

/* -------------------------------------------------- */
/* Screen Shell                                       */
/* -------------------------------------------------- */
function Screen({ title, subtitle, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="min-h-screen bg-black text-white px-4 pt-6 pb-28">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm">← Back</button>
        <div className="text-center">
          <div className="text-base font-semibold leading-tight">{title}</div>
          {subtitle && <div className="text-xs text-white/60 leading-tight">{subtitle}</div>}
        </div>
        <div className="w-[68px]" />
      </div>
      {children}
    </div>
  );
}
