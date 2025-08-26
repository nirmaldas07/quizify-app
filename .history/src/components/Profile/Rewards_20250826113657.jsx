import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const START_BALANCE = 1240;

const initialRewards = [
  { 
    id: 1, 
    title: "Amazon Gift Card", 
    subtitle: "₹100 instant code",   
    cost: 1000, 
    claimed: false,
    icon: "🎁",
    rarity: "legendary"
  },
  { 
    id: 2, 
    title: "Pro Theme Pack", 
    subtitle: "6 beautiful gradients",   
    cost: 400,  
    claimed: false,
    icon: "🎨",
    rarity: "epic"
  },
  { 
    id: 3, 
    title: "Extra Lives", 
    subtitle: "Retry 3 questions",    
    cost: 250,  
    claimed: false,
    icon: "💝",
    rarity: "rare"
  },
  { 
    id: 4, 
    title: "Avatar Frame", 
    subtitle: "Glow ring for profile",
    cost: 600,  
    claimed: false,
    icon: "⭐",
    rarity: "epic"
  },
  { 
    id: 5, 
    title: "Double Coins", 
    subtitle: "2x coins for 1 hour",
    cost: 300,  
    claimed: false,
    icon: "🪙",
    rarity: "rare"
  },
  { 
    id: 6, 
    title: "Pet Companion", 
    subtitle: "Cute quiz buddy",
    cost: 800,  
    claimed: false,
    icon: "🐕",
    rarity: "epic"
  },
];

export default function Rewards() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(START_BALANCE);
  const [items, setItems] = useState(initialRewards);
  const [selectedItem, setSelectedItem] = useState(null);

  const getRarityStyle = (rarity) => {
    switch (rarity) {
      case "legendary": return "from-yellow-500/20 to-orange-500/10 border-yellow-500/40";
      case "epic": return "from-purple-500/20 to-blue-500/10 border-purple-500/40";
      case "rare": return "from-blue-500/20 to-cyan-500/10 border-blue-500/40";
      default: return "from-gray-500/20 to-gray-600/10 border-gray-500/40";
    }
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "legendary": return "text-yellow-400";
      case "epic": return "text-purple-400";
      case "rare": return "text-blue-400";
      default: return "text-gray-400";
    }
  };

  const claim = (id) => {
    const item = items.find(r => r.id === id);
    if (!item || item.claimed || balance < item.cost) return;

    setItems((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, claimed: true } : r
      )
    );
    setBalance(prev => prev - item.cost);
    setSelectedItem(null);
    
    if (navigator.vibrate) navigator.vibrate([50, 30, 100]);
  };

  const openRewardModal = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12">
      {/* Header */}
      <div className="px-4 pt-4 pb-4">
        <div className="flex items-center justify-between mb-3">
          <button 
            onClick={() => navigate("/profile")}
            className="px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1"
          >
            ← Back
          </button>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-1">Rewards</h1>
        <p className="text-white/70 text-sm">Claim amazing prizes</p>
      </div>

      {/* Content */}
      <div className="px-4 pb-20">
        {/* Balance Card */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-white/60 mb-1">Your Balance</div>
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                {balance.toLocaleString()} <span className="text-lg">🪙</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-white/60 mb-1">Earn More</div>
              <button 
                onClick={() => navigate("/")}
                className="px-3 py-1.5 rounded-xl bg-white/10 text-white text-xs hover:bg-white/20 transition-colors"
              >
                Play Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Rewards Grid - Trivia Crack Style */}
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => {
            const affordable = balance >= item.cost;
            const canClaim = affordable && !item.claimed;
            
            return (
              <div
                key={item.id}
                onClick={() => openRewardModal(item)}
                className={`
                  relative p-4 rounded-2xl border cursor-pointer
                  bg-gradient-to-br ${getRarityStyle(item.rarity)}
                  ${item.claimed ? 'opacity-60' : ''}
                  ${canClaim ? 'ring-1 ring-white/20 shadow-lg' : ''}
                  transform transition-all duration-200 hover:scale-[1.02] active:scale-95
                `}
              >
                {/* Claimed Badge */}
                {item.claimed && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}

                {/* Lock Badge for unaffordable */}
                {!affordable && !item.claimed && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center">
                    <span className="text-white text-xs">🔒</span>
                  </div>
                )}

                {/* Content */}
                <div className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-white/60 mb-2">{item.subtitle}</p>
                  
                  {/* Price */}
                  <div className="text-sm font-bold text-white flex items-center justify-center gap-1">
                    {item.cost.toLocaleString()} <span className="text-xs">🪙</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How to Earn More */}
        <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-sm font-semibold text-white mb-2">💡 How to Earn More Coins</h3>
          <div className="space-y-1 text-xs text-white/60">
            <p>• Complete quizzes: +50 coins per quiz</p>
            <p>• Daily challenges: +100 coins bonus</p>
            <p>• Top 100 weekly leaderboard: Extra rewards</p>
            <p>• Perfect scores: +25 bonus coins</p>
          </div>
        </div>
      </div>

      {/* Reward Detail Modal - Trivia Crack Style */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div 
            className="fixed inset-0" 
            onClick={() => setSelectedItem(null)}
          />
          <div className="relative w-80 mx-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 border border-white/20 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>

            {/* Content */}
            <div className="text-center">
              {/* Large Icon */}
              <div className="text-6xl mb-4">{selectedItem.icon}</div>
              
              {/* Title */}
              <h2 className="text-xl font-bold text-white mb-2">{selectedItem.title}</h2>
              <p className="text-white/70 text-sm mb-4">{selectedItem.subtitle}</p>
              
              {/* Rarity Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getRarityColor(selectedItem.rarity)}`}>
                ⭐ {selectedItem.rarity.toUpperCase()}
              </div>
              
              {/* Price Display */}
              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                  {selectedItem.cost.toLocaleString()} <span>🪙</span>
                </div>
                <div className="text-xs text-white/60">
                  {balance >= selectedItem.cost 
                    ? `You have ${balance.toLocaleString()} coins` 
                    : `Need ${(selectedItem.cost - balance).toLocaleString()} more coins`
                  }
                </div>
              </div>
              
              {/* Action Button */}
              {selectedItem.claimed ? (
                <button className="w-full py-3 rounded-2xl bg-green-500/20 text-green-400 border border-green-500/40 font-medium">
                  ✓ Already Claimed
                </button>
              ) : balance >= selectedItem.cost ? (
                <div className="space-y-3">
                  <div className="text-lg font-bold text-white">WELL DONE!</div>
                  <div className="text-sm text-white/70">Here's a reward for you.</div>
                  <button
                    onClick={() => claim(selectedItem.id)}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all"
                  >
                    CLAIM!
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/")}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Play More to Earn
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}