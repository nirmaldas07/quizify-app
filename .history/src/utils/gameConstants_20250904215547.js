//src/utils/gameConstants.js
export const GAME_CONSTANTS = {
  // XP & Levels
  XP_PER_CORRECT: 10,
  XP_PER_LEVEL: 100,
  MAX_LEVEL: 100,
  
  // Coins
  COINS_PER_CORRECT: 5,
  
  // Energy System
  MAX_ENERGY: 5,
  ENERGY_REGEN_TIME: 3600000, // 1 hour in ms
  ENERGY_COST: {
    quiz: 1,
    practice: 0,
    daily: 0
  },
  
  // Combo Multipliers
  COMBO_MULTIPLIERS: {
    2: { multiplier: 1.2, text: "Nice!" },
    3: { multiplier: 1.5, text: "Great!" },
    5: { multiplier: 2.0, text: "On Fire!" },
    10: { multiplier: 3.0, text: "Legendary!" }
  },
  
  // Avatars
AVATARS: [
  { 
    id: 'wizard', 
    emoji: '🧙', 
    name: 'Knowledge Wizard', 
    unlockLevel: 1,
    bgColor: 'from-purple-500 to-indigo-500'
  },
  { 
    id: 'knight', 
    emoji: '⚔️', 
    name: 'Quiz Knight', 
    unlockLevel: 1,
    bgColor: 'from-blue-500 to-cyan-500'
  },
  { 
    id: 'explorer', 
    emoji: '🗺️', 
    name: 'Fact Explorer', 
    unlockLevel: 5,
    bgColor: 'from-green-500 to-emerald-500'
  },
    { 
      id: 'scientist', 
      emoji: '🔬', 
      name: 'Science Master', 
      unlockLevel: 10,
      unlocked: false,
      bgColor: 'from-orange-500 to-red-500'
    },
    { 
      id: 'artist', 
      emoji: '🎨', 
      name: 'Creative Mind', 
      unlockLevel: 15,
      unlocked: false,
      bgColor: 'from-pink-500 to-rose-500'
    }
  ],
  
  // Storage Keys
  STORAGE_KEYS: {
    PLAYER: 'qp_player',
    GAME_STATE: 'qp_game_state',
    ENERGY: 'qp_energy',
    CURRENT_COMBO: 'qp_combo'
  }
};

export const getComboMultiplier = (streak) => {
  if (streak >= 10) return GAME_CONSTANTS.COMBO_MULTIPLIERS[10];
  if (streak >= 5) return GAME_CONSTANTS.COMBO_MULTIPLIERS[5];
  if (streak >= 3) return GAME_CONSTANTS.COMBO_MULTIPLIERS[3];
  if (streak >= 2) return GAME_CONSTANTS.COMBO_MULTIPLIERS[2];
  return { multiplier: 1, text: "" };
};

export const calculateLevel = (totalXP) => {
  return Math.floor(totalXP / GAME_CONSTANTS.XP_PER_LEVEL) + 1;
};

export const calculateLevelProgress = (totalXP) => {
  const currentLevelXP = totalXP % GAME_CONSTANTS.XP_PER_LEVEL;
  return {
    current: currentLevelXP,
    required: GAME_CONSTANTS.XP_PER_LEVEL,
    percentage: (currentLevelXP / GAME_CONSTANTS.XP_PER_LEVEL) * 100
  };
};