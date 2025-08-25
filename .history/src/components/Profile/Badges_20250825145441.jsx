// src/components/Profile/Badges.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const badges = [
  // Unlocked badges
  { id: "b1", name: "First Steps", desc: "Complete your first quiz", icon: "🎯", unlocked: true, rarity: "common", unlockedDate: "Aug 20" },
  { id: "b2", name: "Streak Master", desc: "Maintain a 7-day streak", icon: "🔥", unlocked: true, rarity: "uncommon", unlockedDate: "Aug 22" },
  { id: "b3", name: "Quick Draw", desc: "Answer in under 5 seconds", icon: "⚡", unlocked: true, rarity: "rare", unlockedDate: "Aug 23" },
  { id: "b4", name: "Knowledge Seeker", desc: "Try 5 different categories", icon: "📚", unlocked: true, rarity: "common", unlockedDate: "Aug 21" },
  
  // Locked badges
  { id: "b5", name: "Perfectionist", desc: "Get 100% on 5 quizzes", icon: "💯", unlocked: false, rarity: "epic", progress: 60 },
  { id: "b6", name: "Speed Demon", desc: "Complete 10 quizzes in 1 day", icon: "🏃", unlocked: false, rarity: "rare", progress: 30 },
  { id: "b7", name: "Brain Surgeon", desc: "Master the Science category", icon: "🧠", unlocked: false, rarity: "legendary", progress: 45 },
  { id: "b8", name: "Social Butterfly", desc: "Beat 10 friends", icon: "🦋", unlocked: false, rarity: "uncommon", progress: 0 },
  { id: "b9", name: "Collector", desc: "Unlock 20 badges", icon: "🏆", unlocked: false, rarity: "epic", progress: 20 },
  { id: "b10", name: "Legend", desc: "Reach level 50", icon: "👑", unlocked: false, rarity: "mythic", progress: 14 },
];

const rarityColors = {
  common: { bg: 'bg-gray-500/20', border: 'border-gray-500/50', text: 'text-gray-300' },
  uncommon: { bg: 'bg-green-500/20', border: 'border-green-500/50', text: 'text-green-300' },
  rare: { bg: 'bg-blue-500/20', border: 'border-blue-500/50', text: 'text-blue-300' },
  epic: { bg: 'bg-purple-500/20', border: 'border-purple-500/50', text: 'text-purple-300' },
  legendary: { bg: 'bg-orange-500/20', border: 'border-orange-500/50', text: 'text-orange-300' },
  mythic: { bg: 'bg-pink-500/20', border: 'border-pink-500/50', text: 'text-pink-300' },
};

export default function Badges() {
  const navigate = useNavigate();
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredBadges = badges.filter(badge => {
    if (filter === 'unlocked') return badge.unlocked;
    if (filter === 'locked') return !badge.unlocked;
    return true;
  });

  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-6 pb-28">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm">
          ← Back
        </button>
        <div className="text-center">
          <div className="text-base font-semibold leading-tight">Badge Collection</div>
          <div className="text-xs text-white/60 leading-tight">{unlockedCount}/{badges.length} unlocked</div>
        </div>
        <div className="w-[68px]" />
      </div>

      {/* Progress Bar */}
      <div className="mb-4 p-4 rounded-2xl border border-white/10 bg-white/5">
        <div className="flex justify-between text-sm mb-2">
          <span>Collection Progress</span>
          <span className="text-yellow-400 font-semibold">{Math.round((unlockedCount / badges.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(unlockedCount / badges.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4">
        {[
          { key: 'all', label: 'All' },
          { key: 'unlocked', label: 'Unlocked' },
          { key: 'locked', label: 'Locked' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
              filter === tab.key 
                ? 'bg-white text-black' 
                : 'border border-white/10 bg-white/5 hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {filteredBadges.map((badge) => {
          const rarity = rarityColors[badge.rarity];
          return (
            <button
              key={badge.id}
              onClick={() => setSelectedBadge(badge)}
              className={`aspect-square rounded-2xl border-2 p-3 transition-all hover:scale-105 ${
                badge.unlocked 
                  ? `${rarity.bg} ${rarity.border} shadow-lg` 
                  : 'border-gray-700 bg-gray-800/50'
              }`}
            >
              {/* Badge Icon */}
              <div className={`text-3xl mb-2 ${badge.unlocked ? 'opacity-100' : 'opacity-30'}`}>
                {badge.unlocked ? badge.icon : '🔒'}
              </div>
              
              {/* Rarity Indicator */}
              <div className={`text-xs font-bold ${badge.unlocked ? rarity.text : 'text-gray-500'}`}>
                {badge.rarity.toUpperCase()}
              </div>
              
              {/* Progress for locked badges */}
              {!badge.unlocked && badge.progress > 0 && (
                <div className="mt-2 w-full bg-gray-700 rounded-full h-1">
                  <div 
                    className="bg-blue-500 h-1 rounded-full"
                    style={{ width: `${badge.progress}%` }}
                  ></div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Badge Detail Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center px-6 z-50">
          <div className={`w-full max-w-sm rounded-2xl border-2 p-6 text-center ${
            selectedBadge.unlocked 
              ? `${rarityColors[selectedBadge.rarity].bg} ${rarityColors[selectedBadge.rarity].border}` 
              : 'border-gray-700 bg-gray-900'
          }`}>
            {/* Badge Icon */}
            <div className="text-6xl mb-4">
              {selectedBadge.unlocked ? selectedBadge.icon : '🔒'}
            </div>
            
            {/* Badge Info */}
            <h3 className="text-xl font-bold mb-2">{selectedBadge.name}</h3>
            <p className="text-white/70 mb-4">{selectedBadge.desc}</p>
            
            {/* Rarity */}
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
              selectedBadge.unlocked ? rarityColors[selectedBadge.rarity].text : 'text-gray-500'
            }`}>
              {selectedBadge.rarity.toUpperCase()} BADGE
            </div>
            
            {/* Status */}
            {selectedBadge.unlocked ? (
              <div className="text-green-400 text-sm mb-4">
                ✓ Unlocked on {selectedBadge.unlockedDate}
              </div>
            ) : (
              <div className="mb-4">
                <div className="text-gray-400 text-sm mb-2">Progress: {selectedBadge.progress}%</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${selectedBadge.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedBadge(null)}
              className="w-full py-3 rounded-xl border border-white/10 bg-white/10 hover:bg-white/20 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}