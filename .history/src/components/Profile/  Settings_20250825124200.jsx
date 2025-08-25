// src/components/Profile/Settings.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockUser = { name: "Nirmal" };

export default function Settings() {
  const navigate = useNavigate();
  const [name, setName] = useState(mockUser.name);
  const [lang, setLang] = useState("English");
  const [publicRank, setPublicRank] = useState(true);

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
          <div className="text-base font-semibold leading-tight">Settings</div>
          <div className="text-xs text-white/60 leading-tight">Make it yours</div>
        </div>
        <div className="w-[68px]" />
      </div>

      {/* Settings Form */}
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
              publicRank ? "bg-white text-black border-white" : "bg-white/10 border-white/10 text-white"
            }`}
          >
            {publicRank ? "On" : "Off"}
          </button>
        </div>
        
        <button className="w-full mt-4 px-3 py-2 rounded-xl border border-white/10 bg-white/10 text-sm hover:bg-white/20 transition">
          Save
        </button>
      </div>
    </div>
  );
}