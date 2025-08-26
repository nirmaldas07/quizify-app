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
];

export default function Rewards() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(START_BALANCE);
  const [items, setItems] = useState(initialRewards);

  const getRarityStyle = (rarity) => {
    switch (rarity) {
      case "legendary": return "from-yellow-500/20 to-orange-500/10 border-yellow-500/40";
      case "epic": return "from-purple-500/20 to-blue-500/10 border-purple-500/40";
      case "rare": return "from-blue-500/20 to-cyan-500/10 border-blue-500/40";
      default: return "from-gray-500/20 to-gray-600/10 border-gray-500/40";
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
    
    if (navigator.vibrate) navigator.vibrate([50, 30, 100]);
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

        {/* Rewards Grid */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-white mb-3">Available Rewards</h2>
          
          {items.map((item) => {
            const affordable = balance >= item.cost;
            const canClaim = affordable && !item.claimed;
            
            return (
              <div
                key={item.id}
                className={`
                  relative rounded-2xl p-4 border
                  bg-gradient-to-br ${getRarityStyle(item.rarity)}
                  ${item.claimed ? 'opacity-60' : ''}
                  ${canClaim ? 'ring-1 ring-white/20 shadow-lg' : ''}
                  transform transition-all duration-200 hover:scale-[1.02]
                `}
              >
                {/* Claimed Badge */}
                {item.claimed && (
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-medium">
                    ✓ Claimed
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div className="text-2xl">{item.icon}</div>
                    
                    {/* Info */}
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-xs text-white/60">{item.subtitle}</p>
                      
                      {/* Rarity Badge */}
                      <div className={`
                        inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium
                        ${item.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40' : ''}
                        ${item.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40' : ''}
                        ${item.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40' : ''}
                      `}>
                        {item.rarity}
                      </div>
                    </div>
                  </div>

                  {/* Price & Button */}
                  <div className="text-right">
                    <div className="text-lg font-bold text-white mb-2 flex items-center gap-1">
                      {item.cost.toLocaleString()} <span className="text-sm">🪙</span>
                    </div>
                    
                    <button
                      onClick={() => claim(item.id)}
                      disabled={!canClaim}
                      className={`
                        px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                        ${item.claimed 
                          ? 'bg-gray-500/20 text-gray-400 border border-gray-500/40 cursor-not-allowed'
                          : canClaim 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-green-500/25 hover:scale-105'
                            : 'bg-red-500/20 text-red-400 border border-red-500/40 cursor-not-allowed'
                        }
                      `}
                    >
                      {item.claimed ? 'Claimed' : canClaim ? 'Claim' : 'Need More'}
                    </button>
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
    </div>
  );
}