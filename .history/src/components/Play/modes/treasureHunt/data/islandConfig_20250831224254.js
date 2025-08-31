// src/components/Play/modes/treasureHunt/data/islandConfig.js

export const ISLANDS = [
  {
    id: 1,
    name: "Sandy Beach",
    emoji: "🏖️",
    theme: {
      background: "from-yellow-300 via-orange-300 to-blue-400",
      accent: "from-yellow-400 to-orange-400",
      cardBg: "from-amber-500/20 to-yellow-500/20",
      unlockGradient: "from-yellow-400 to-amber-500"
    },
    difficulty: "EASY",
    difficultyRange: { min: 0, max: 9 },
    questionDifficulty: ["easy"],
    requiredCorrect: 2, // Need 2/3 correct to get treasure piece
    timeLimit: 300, // 5 minutes in seconds
    rewards: {
      perCorrectAnswer: 10,
      gemChance: 0.3,
      gemBonus: 5,
      speedBonus: 3, // If answered in < 5 seconds
      perfectBonus: 50, // All 3 correct
      treasurePiece: "🧩", // Visual representation
      completionCoins: 30
    },
    description: "Start your adventure on the sunny shores! Easy questions to warm up.",
    unlockRequirement: null, // First island is always unlocked
    visualElements: {
      bgEmojis: ["🌊", "🐚", "🦀", "⛱️", "🌺"],
      diggingEmoji: "⛏️",
      foundEmojis: ["💎", "🪙", "✨"]
    }
  },
  {
    id: 2,
    name: "Jungle Cave",
    emoji: "🌴",
    theme: {
      background: "from-green-400 via-emerald-500 to-teal-600",
      accent: "from-green-500 to-emerald-600",
      cardBg: "from-green-500/20 to-emerald-500/20",
      unlockGradient: "from-green-400 to-emerald-500"
    },
    difficulty: "EASY-MEDIUM",
    difficultyRange: { min: 10, max: 24 },
    questionDifficulty: ["easy", "medium"],
    requiredCorrect: 2,
    timeLimit: 300,
    rewards: {
      perCorrectAnswer: 15,
      gemChance: 0.35,
      gemBonus: 7,
      speedBonus: 5,
      perfectBonus: 75,
      treasurePiece: "🗝️",
      completionCoins: 50
    },
    description: "Explore the mysterious jungle caves! Watch out for tricky vines!",
    unlockRequirement: { island: 1, treasurePiece: true },
    visualElements: {
      bgEmojis: ["🌿", "🦜", "🐒", "🦋", "🌺"],
      diggingEmoji: "⛏️",
      foundEmojis: ["💎", "🪙", "🌟"]
    }
  },
  {
    id: 3,
    name: "Crystal Mountain",
    emoji: "⛰️",
    theme: {
      background: "from-purple-400 via-pink-400 to-indigo-500",
      accent: "from-purple-500 to-pink-500",
      cardBg: "from-purple-500/20 to-pink-500/20",
      unlockGradient: "from-purple-400 to-pink-500"
    },
    difficulty: "MEDIUM",
    difficultyRange: { min: 25, max: 49 },
    questionDifficulty: ["medium"],
    requiredCorrect: 2,
    timeLimit: 300,
    rewards: {
      perCorrectAnswer: 20,
      gemChance: 0.4,
      gemBonus: 10,
      speedBonus: 7,
      perfectBonus: 100,
      treasurePiece: "💎",
      completionCoins: 75
    },
    description: "Climb the sparkling crystal peaks! Medium challenges await!",
    unlockRequirement: { island: 2, treasurePiece: true },
    visualElements: {
      bgEmojis: ["✨", "🔮", "⭐", "🌟", "💫"],
      diggingEmoji: "⚒️",
      foundEmojis: ["💎", "🪙", "🌈"]
    }
  },
  {
    id: 4,
    name: "Pirate Ship",
    emoji: "🏴‍☠️",
    theme: {
      background: "from-slate-600 via-blue-600 to-cyan-500",
      accent: "from-slate-700 to-blue-700",
      cardBg: "from-slate-500/20 to-blue-500/20",
      unlockGradient: "from-slate-500 to-blue-600"
    },
    difficulty: "MEDIUM-HARD",
    difficultyRange: { min: 50, max: 99 },
    questionDifficulty: ["medium", "hard"],
    requiredCorrect: 2,
    timeLimit: 300,
    rewards: {
      perCorrectAnswer: 30,
      gemChance: 0.45,
      gemBonus: 15,
      speedBonus: 10,
      perfectBonus: 150,
      treasurePiece: "🗺️",
      completionCoins: 100
    },
    description: "Ahoy matey! Navigate the pirate ship's challenging puzzles!",
    unlockRequirement: { island: 3, treasurePiece: true },
    visualElements: {
      bgEmojis: ["⚓", "🦜", "💀", "🌊", "⛵"],
      diggingEmoji: "🗡️",
      foundEmojis: ["💎", "🪙", "👑"]
    }
  },
  {
    id: 5,
    name: "Volcano Peak",
    emoji: "🌋",
    theme: {
      background: "from-red-500 via-orange-500 to-yellow-500",
      accent: "from-red-600 to-orange-600",
      cardBg: "from-red-500/20 to-orange-500/20",
      unlockGradient: "from-red-500 to-orange-500"
    },
    difficulty: "HARD",
    difficultyRange: { min: 100, max: Infinity },
    questionDifficulty: ["hard"],
    requiredCorrect: 2,
    timeLimit: 300,
    rewards: {
      perCorrectAnswer: 50,
      gemChance: 0.5,
      gemBonus: 25,
      speedBonus: 15,
      perfectBonus: 200,
      treasurePiece: "👑",
      completionCoins: 150
    },
    description: "The ultimate challenge! Can you conquer the volcano?",
    unlockRequirement: { island: 4, treasurePiece: true },
    visualElements: {
      bgEmojis: ["🔥", "🌋", "💥", "⚡", "🔴"],
      diggingEmoji: "⛏️",
      foundEmojis: ["💎", "🪙", "🏆"]
    }
  }
];

// Game constants
export const GAME_CONSTANTS = {
  SHOVELS_PER_ISLAND: 3,
  QUESTIONS_PER_ISLAND: 3,
  SPEED_BONUS_THRESHOLD: 5, // seconds
  MIN_CORRECT_FOR_TREASURE: 2,
  FINAL_TREASURE_REWARD: 200,
  FINAL_TREASURE_TITLE: "Treasure Master",
  
  // Animation timings (in ms)
  DIGGING_ANIMATION_DURATION: 1500,
  REWARD_DISPLAY_DURATION: 2000,
  TRANSITION_DURATION: 500,
  
  // Storage keys
  STORAGE_KEYS: {
    PROGRESS: 'treasureHunt_progress',
    STATS: 'treasureHunt_stats',
    UNLOCKED_ISLANDS: 'treasureHunt_unlocked',
    COMPLETED_ISLANDS: 'treasureHunt_completed',
    TREASURE_PIECES: 'treasureHunt_pieces'
  },
  
  // Sound paths
  SOUNDS: {
    DIG: '/sounds/dig.mp3',
    TREASURE_FOUND: '/sounds/treasure.mp3',
    GEM_FOUND: '/sounds/gem.mp3',
    WRONG: '/sounds/wrong.mp3',
    ISLAND_COMPLETE: '/sounds/islandcomplete.mp3',
    ISLAND_UNLOCK: '/sounds/unlock.mp3',
    FINAL_TREASURE: '/sounds/victory.mp3',
    TICK: '/sounds/tick.mp3',
    SHOVEL_BREAK: '/sounds/break.mp3'
  }
};

// Helper functions
export const getIslandById = (id) => ISLANDS.find(island => island.id === id);

export const isIslandUnlocked = (islandId, progress) => {
  const island = getIslandById(islandId);
  if (!island.unlockRequirement) return true;
  
  const requiredIsland = progress[island.unlockRequirement.island];
  return requiredIsland && requiredIsland.treasurePiece;
};

export const calculateReward = (island, correctAnswers, timePerQuestion, gemsFound) => {
  let totalCoins = 0;
  
  // Base rewards for correct answers
  totalCoins += correctAnswers * island.rewards.perCorrectAnswer;
  
  // Gem bonuses
  totalCoins += gemsFound * island.rewards.gemBonus;
  
  // Speed bonuses (count questions answered under threshold)
  const fastAnswers = timePerQuestion.filter(time => time < GAME_CONSTANTS.SPEED_BONUS_THRESHOLD).length;
  totalCoins += fastAnswers * island.rewards.speedBonus;
  
  // Perfect score bonus
  if (correctAnswers === GAME_CONSTANTS.QUESTIONS_PER_ISLAND) {
    totalCoins += island.rewards.perfectBonus;
  }
  
  // Completion bonus (if got treasure piece)
  if (correctAnswers >= island.requiredCorrect) {
    totalCoins += island.rewards.completionCoins;
  }
  
  return totalCoins;
};

export const getMotivationalMessage = (correctAnswers, islandId) => {
  const messages = {
    0: ["Keep trying! You'll get it! 💪", "Don't give up! Adventure awaits! 🌟", "Practice makes perfect! 🎯"],
    1: ["Good effort! Almost there! 🌈", "Nice try! Keep going! ⭐", "You're learning fast! 🚀"],
    2: ["Awesome! You found treasure! 🏆", "Great job, explorer! 🎉", "You're amazing! ✨"],
    3: ["PERFECT! You're a champion! 👑", "INCREDIBLE! Master explorer! 🌟", "LEGENDARY performance! 🏆"]
  };
  
  const messageSet = messages[correctAnswers] || messages[0];
  return messageSet[Math.floor(Math.random() * messageSet.length)];
};

export const getDifficultyColor = (difficulty) => {
  const colors = {
    'EASY': 'text-green-400',
    'EASY-MEDIUM': 'text-yellow-400',
    'MEDIUM': 'text-orange-400',
    'MEDIUM-HARD': 'text-red-400',
    'HARD': 'text-purple-400'
  };
  return colors[difficulty] || 'text-white';
};

export const getAllTreasurePieces = (progress) => {
  return ISLANDS.map(island => ({
    id: island.id,
    piece: island.rewards.treasurePiece,
    collected: progress[island.id]?.treasurePiece || false
  }));
};