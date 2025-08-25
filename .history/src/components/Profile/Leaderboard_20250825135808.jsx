// src/components/Profile/Leaderboard.jsx
import React from "react";
import Screen from "./Screen.jsx";

const ACCENT = "bg-lime-400";           // crown + highlight color
const ACCENT_TEXT = "text-lime-400";
const COIN = "🪙";                       // swap to your coin icon if you have one

// ---- Mock data (replace with API later)
const rows = Array.from({ length: 10 }).map((_, i) => ({
  rank: i + 1,
  name:
    i === 5
      ? "You"
      : ["Meghan", "Bryan", "Alex", "Marsha", "Juanita", "Tamara", "Ricardo", "Gary", "Becky"][i % 9],
  handle: i === 5 ? "@you" : `@user${i + 1}`,
  score: 40 - i, // pts/coins
  you: i === 5,  // highlight row #6 like the mock
  avatar: null,  // put image URL here if you have one
}));

export default function Leaderboard() {
  // split the top 3 and the rest
  const top3 = rows.slice(0, 3);
  const rest = rows.slice(3);

  return (
    <Screen title="Leaderboard" subtitle="Ends in 2d 14h">
      {/* Top 3 Podium */}
      <TopThree users={top3} />

      {/* List */}
      <div className="mt-3 rounded-3xl bg-white/5 border border-white/10 p-2">
        <ul className="space-y-2">
          {rest.map((u) => (
            <li
              key={u.rank}
              className={[
                "flex items-center justify-between px-3 py-3 rounded-2xl",
                u.you ? "bg-lime-500/90 text-black" : "bg-white/5 text-white",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <RankBadge n={u.rank} you={u.you} />
                <AvatarCircle src={u.avatar} fallback={u.name} ring={false} />
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold leading-tight">{u.name}</span>
                  <span className={`text-xs ${u.you ? "text-black/70" : "text-white/60"}`}>{u.handle}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm font-semibold">
                <span>{u.score}</span>
                <span className={u.you ? "opacity-90" : "opacity-80"}>{COIN}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Screen>
  );
}

/* ================= helpers ================= */

function TopThree({ users }) {
  // Expect users[0] rank 1, users[1] rank 2, users[2] rank 3
  const [u1, u2, u3] = users;

  return (
    <div className="mb-3">
      <div className="flex items-end justify-center gap-6">
        {/* #2 (left) */}
        {u2 && (
          <div className="flex flex-col items-center gap-1">
            <AvatarCircle src={u2.avatar} fallback={u2.name} size={64} ring />
            <div className="text-xs text-white/80">2</div>
            <div className="text-[13px] font-semibold">{trimName(u2.name)}</div>
            <div className={`text-xs ${ACCENT_TEXT}`}>+{u2.score} {COIN}</div>
          </div>
        )}

        {/* #1 (center, bigger, crown) */}
        {u1 && (
          <div className="flex flex-col items-center gap-1">
            <div className="relative">
              <AvatarCircle src={u1.avatar} fallback={u1.name} size={84} ring />
              <Crown />
            </div>
            <div className="text-xs text-white/80">1</div>
            <div className="text-[13px] font-semibold">{trimName(u1.name)}</div>
            <div className={`text-xs ${ACCENT_TEXT}`}>+{u1.score} {COIN}</div>
          </div>
        )}

        {/* #3 (right) */}
        {u3 && (
          <div className="flex flex-col items-center gap-1">
            <AvatarCircle src={u3.avatar} fallback={u3.name} size={64} ring />
            <div className="text-xs text-white/80">3</div>
            <div className="text-[13px] font-semibold">{trimName(u3.name)}</div>
            <div className={`text-xs ${ACCENT_TEXT}`}>+{u3.score} {COIN}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function AvatarCircle({ src, fallback, size = 56, ring = false }) {
  const initials = getInitials(fallback);
  return (
    <div
      className={[
        "grid place-items-center rounded-full bg-white/10 overflow-hidden",
        ring ? `ring-2 ring-offset-2 ring-offset-black ${ACCENT}` : "",
      ].join(" ")}
      style={{ width: size, height: size }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <span className="text-lg">{initials}</span>
      )}
    </div>
  );
}

function Crown() {
  return (
    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-5 ${ACCENT} rounded-b-[6px]`} aria-hidden>
      {/* simple crown points */}
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <path d="M0,40 L0,12 L22,32 L50,10 L78,32 L100,12 L100,40 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

function RankBadge({ n, you }) {
  return (
    <div
      className={[
        "w-7 h-7 grid place-items-center rounded-full text-[13px] font-semibold",
        you ? "bg-black/10 text-black" : "bg-white/10 text-white",
      ].join(" ")}
      aria-label={`Rank ${n}`}
    >
      {n}
    </div>
  );
}

function trimName(name, n = 10) {
  return name.length > n ? name.slice(0, n - 1) + "…" : name;
}

function getInitials(name = "") {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
