// src/components/Profile/Settings.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockUser = { name: "Nirmal" };

export default function Settings() {
  const navigate = useNavigate();
  const [name, setName] = useState(mockUser.name);
  const [lang, setLang] = useState("English");
  const [publicRank, setPublicRank] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);

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
        {/* Profile Section */}
        <h3 className="text-sm font-semibold text-white/80 mt-4 mb-2">Profile</h3>
        
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <label className="text-xs text-white/60">Name</label>
          <input
            className="mt-1 w-full bg-transparent outline-none text-sm text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <label className="text-xs text-white/60">Language</label>
          <select
            className="mt-1 w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-sm text-white"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>

        {/* Privacy Section */}
        <h3 className="text-sm font-semibold text-white/80 mt-6 mb-2">Privacy</h3>
        
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Show rank on leaderboards</div>
            <div className="text-xs text-white/60">Hide to stay private</div>
          </div>
          <button
            onClick={() => setPublicRank((v) => !v)}
            className={`px-3 py-1.5 rounded-xl text-sm border transition ${
              publicRank ? "bg-white text-black border-white" : "bg-white/10 border-white/10 text-white"
            }`}
          >
            {publicRank ? "On" : "Off"}
          </button>
        </div>

        {/* Preferences Section */}
        <h3 className="text-sm font-semibold text-white/80 mt-6 mb-2">Preferences</h3>
        
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Push Notifications</div>
            <div className="text-xs text-white/60">Daily reminders & updates</div>
          </div>
          <button
            onClick={() => setNotifications((v) => !v)}
            className={`px-3 py-1.5 rounded-xl text-sm border transition ${
              notifications ? "bg-white text-black border-white" : "bg-white/10 border-white/10 text-white"
            }`}
          >
            {notifications ? "On" : "Off"}
          </button>
        </div>
        
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Sound Effects</div>
            <div className="text-xs text-white/60">In-game sounds</div>
          </div>
          <button
            onClick={() => setSoundEffects((v) => !v)}
            className={`px-3 py-1.5 rounded-xl text-sm border transition ${
              soundEffects ? "bg-white text-black border-white" : "bg-white/10 border-white/10 text-white"
            }`}
          >
            {soundEffects ? "On" : "Off"}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2">
          <button 
            onClick={() => {
              // Save logic here
              alert('Settings saved!');
            }}
            className="w-full px-3 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition"
          >
            Save Changes
          </button>
          
          <button 
            onClick={() => {
              if (confirm('Are you sure you want to reset all settings to default?')) {
                setName(mockUser.name);
                setLang("English");
                setPublicRank(true);
                setNotifications(true);
                setSoundEffects(true);
              }
            }}
            className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition"
          >
            Reset to Default
          </button>
        </div>

        {/* About Section */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <div className="text-center text-xs text-white/40">
            <div>Quizify v1.0.0</div>
            <div className="mt-1">Made with ❤️ in Bengaluru</div>
          </div>
        </div>
      </div>
    </div>
  );
}