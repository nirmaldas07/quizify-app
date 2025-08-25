// src/components/Profile/History.jsx
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

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

const mockHistory = [
  { id: 1, type: "quiz", category: "General Knowledge", difficulty: "Easy", score: 8, total: 10, time: "02:31", date: "Aug 22" },
  { id: 2, type: "practice", category: "Science", difficulty: "Medium", score: 12, total: 15, time: "06:02", date: "Aug 22" },
  { id: 3, type: "quiz", category: "Fun Facts", difficulty: "Easy", score: 9, total: 10, time: "02:05", date: "Aug 21" },
];

export default function History() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("quizzes");
  
  const items = useMemo(
    () => mockHistory.filter((h) => (tab === "quizzes" ? h.type === "quiz" : h.type === "practice")),
    [tab]
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-6 pb-28">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm"
        >
          ← Back
        </button>
        <div className="text-center">
          <div className="text-base font-semibold leading-tight">History</div>
          <div className="text-xs text-white/60 leading-tight">Your attempts & practice</div>
        </div>
        <div className="w-[68px]" />
      </div>

      {/* Tab Selector */}
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

      {/* History List */}
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
    </div>
  );
}