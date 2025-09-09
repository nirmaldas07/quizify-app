import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import GameDataService from '../../services/GameDataService';

export default function SurpriseZone() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('box');
  const [boxOpened, setBoxOpened] = useState(false);
  const [reward, setReward] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState('🦸');
  const [accessories, setAccessories] = useState([]);
  const [currentFact, setCurrentFact] = useState(null);
  const [factIndex, setFactIndex] = useState(0);
  
  // Sound effects
  const [playSuccess] = useSound('/sounds/correct.mp3', { volume: 0.6 });
  const [playClick] = useSound('/sounds/click.mp3', { volume: 0.5 });
  const [playCoin] = useSound('/sounds/coin.mp3', { volume: 0.7 });

  const avatars = ['🦸', '🧙', '🦄', '🐻', '🦊', '🐸', '🦁', '🐵'];
  const avatarAccessories = ['👑', '🎩', '🧢', '👓', '🕶️', '🎀', '⭐', '💫'];
  
  const funFacts = [
    "🦋 Butterflies taste with their feet!",
    "🐙 Octopuses have three hearts!",
    "🦒 A giraffe's tongue is 20 inches long!",
    "🐧 Penguins propose with pebbles!",
    "🌈 You can't see all rainbow colors at night!",
    "🍯 Honey never goes bad!",
    "⚡ Lightning is 5 times hotter than the sun!",
    "🦴 Babies have more bones than adults!"
  ];

  const mysteryRewards = [
    { text: "10 Coins", coins: 10, emoji: "🪙" },
    { text: "5 Coins", coins: 5, emoji: "💰" },
    { text: "Super Star", coins: 15, emoji: "⭐" },
    { text: "Lucky Charm", coins: 8, emoji: "🍀" },
    { text: "Rainbow Gem", coins: 12, emoji: "💎" }
  ];

  const openMysteryBox = () => {
    if (boxOpened) return;
    
    playSuccess();
    const randomReward = mysteryRewards[Math.floor(Math.random() * mysteryRewards.length)];
    setReward(randomReward);
    setBoxOpened(true);
    
    // Add coins
    if (randomReward.coins) {
      GameDataService.addCoins(randomReward.coins, 'Mystery Box');
      playCoin();
    }
    
    // Reset after 3 seconds
    setTimeout(() => {
      setBoxOpened(false);
      setReward(null);
    }, 3000);
  };

  const selectAccessory = (acc) => {
    playClick();
    if (accessories.includes(acc)) {
      setAccessories(accessories.filter(a => a !== acc));
    } else {
      setAccessories([...accessories, acc]);
    }
  };

  const nextFact = () => {
    playClick();
    setFactIndex((prev) => (prev + 1) % funFacts.length);
    setCurrentFact(funFacts[(factIndex + 1) % funFacts.length]);
  };

  useEffect(() => {
    setCurrentFact(funFacts[0]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          ✨ Surprise Zone
        </h1>
        <div className="w-12" />
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-2 px-4 mb-6">
        {[
          { id: 'box', label: 'Mystery Box', emoji: '🎁' },
          { id: 'avatar', label: 'Avatar Room', emoji: '🎭' },
          { id: 'facts', label: 'Fun Facts', emoji: '💡' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 px-4 rounded-2xl font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <span className="text-xl mr-2">{tab.emoji}</span>
            <span className="text-sm">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="px-4 pb-20">
        {/* Mystery Box Tab */}
        {activeTab === 'box' && (
          <div className="flex flex-col items-center pt-8">
            <div className="relative">
              {/* Box Animation */}
              <div 
                onClick={openMysteryBox}
                className={`w-48 h-48 rounded-3xl flex items-center justify-center cursor-pointer transition-all ${
                  boxOpened 
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-400 scale-110 rotate-12' 
                    : 'bg-gradient-to-br from-purple-500 to-pink-500 hover:scale-105 animate-bounce'
                }`}
              >
                {!boxOpened ? (
                  <span className="text-8xl">📦</span>
                ) : (
                  <div className="text-center">
                    <span className="text-6xl">{reward?.emoji}</span>
                    <p className="text-white font-bold mt-2">{reward?.text}</p>
                  </div>
                )}
              </div>
              
              {/* Sparkles */}
              {boxOpened && (
                <>
                  <div className="absolute -top-4 -left-4 text-3xl animate-ping">✨</div>
                  <div className="absolute -top-4 -right-4 text-3xl animate-ping delay-100">⭐</div>
                  <div className="absolute -bottom-4 -left-4 text-3xl animate-ping delay-200">💫</div>
                  <div className="absolute -bottom-4 -right-4 text-3xl animate-ping delay-300">🌟</div>
                </>
              )}
            </div>
            
            <p className="mt-8 text-gray-400 text-center">
              {boxOpened ? "Awesome! You found treasure!" : "Tap the box to open your surprise!"}
            </p>
            
            {/* Daily limit indicator */}
            <div className="mt-4 px-4 py-2 rounded-full bg-white/10">
              <span className="text-xs text-gray-400">Free opens today: 3/3</span>
            </div>
          </div>
        )}

        {/* Avatar Room Tab */}
        {activeTab === 'avatar' && (
          <div className="flex flex-col items-center pt-8">
            {/* Avatar Display */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-7xl">{selectedAvatar}</span>
              </div>
              {/* Accessories on avatar */}
              {accessories.map((acc, i) => (
                <span 
                  key={i} 
                  className="absolute text-3xl"
                  style={{
                    top: i < 4 ? '-10px' : 'auto',
                    bottom: i >= 4 ? '-10px' : 'auto',
                    left: `${20 + (i % 4) * 25}px`
                  }}
                >
                  {acc}
                </span>
              ))}
            </div>

            {/* Avatar Selection */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 text-center mb-3">Choose Avatar</p>
              <div className="flex gap-2 flex-wrap justify-center">
                {avatars.map(avatar => (
                  <button
                    key={avatar}
                    onClick={() => {
                      setSelectedAvatar(avatar);
                      playClick();
                    }}
                    className={`text-4xl p-2 rounded-xl transition-all ${
                      selectedAvatar === avatar 
                        ? 'bg-white/20 scale-110' 
                        : 'hover:bg-white/10'
                    }`}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
            </div>

            {/* Accessories */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 text-center mb-3">Add Accessories</p>
              <div className="flex gap-2 flex-wrap justify-center">
                {avatarAccessories.map(acc => (
                  <button
                    key={acc}
                    onClick={() => selectAccessory(acc)}
                    className={`text-3xl p-2 rounded-xl transition-all ${
                      accessories.includes(acc)
                        ? 'bg-white/20 scale-110'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    {acc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Fun Facts Tab */}
        {activeTab === 'facts' && (
          <div className="flex flex-col items-center pt-8">
            <div 
              onClick={nextFact}
              className="w-full max-w-md p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 cursor-pointer hover:scale-[1.02] transition-all"
            >
              <p className="text-xl text-center leading-relaxed">
                {currentFact}
              </p>
            </div>
            
            <p className="mt-6 text-sm text-gray-400">
              Tap the card for another fact!
            </p>
            
            {/* Fact counter */}
            <div className="mt-4 flex gap-1">
              {funFacts.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === factIndex ? 'bg-purple-400 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}