// src/services/GameDataService.js

import UserService from './UserService';

class GameDataService {
  constructor() {
    // Use same storage keys as your existing useGameData hook for compatibility
    this.STORAGE_KEYS = {
      COINS: "qp_coins",
      XP: "qp_xp", 
      LEVEL: "qp_level",
      OWNED_CHARACTERS: "owned_characters",
      SOUND: "play_sound_on",
      
      // New keys for additional features
      GAME_STATS: 'game_stats_',
      DAILY_PROGRESS: 'daily_progress_',
      QUEST_DATA: 'quest_data_',
      STREAK_DATA: 'streak_data_',
      GAME_HISTORY: 'game_history_',
      QUIZ_RESULTS: 'quiz_current_results'
    };
  }

  // ============= COMPATIBILITY LAYER =============
  // These methods work with your existing storage structure
  
  getCoins() {
    return this.safeGet(this.STORAGE_KEYS.COINS, 0);
  }

  setCoins(amount) {
    this.safeSet(this.STORAGE_KEYS.COINS, amount);
    return amount;
  }

  addCoins(amount, reason = '') {
    const current = this.getCoins();
    const newTotal = current + amount;
    this.setCoins(newTotal);
    
    // Also update user-specific data if user is logged in
    const user = UserService.getCurrentUser();
    if (user?.phone) {
      this.logCoinTransaction(user.phone, amount, reason);
      this.updateDailyCoins(user.phone, amount);
    }
    
    return newTotal;
  }

  spendCoins(amount, reason = '') {
    const current = this.getCoins();
    if (current < amount) return false;
    
    const newTotal = current - amount;
    this.setCoins(newTotal);
    
    const user = UserService.getCurrentUser();
    if (user?.phone) {
      this.logCoinTransaction(user.phone, -amount, reason);
    }
    
    return true;
  }

  getXP() {
    return this.safeGet(this.STORAGE_KEYS.XP, 0);
  }

  setXP(amount) {
    this.safeSet(this.STORAGE_KEYS.XP, amount);
    return amount;
  }

  addXP(amount) {
    const current = this.getXP();
    const newTotal = current + amount;
    this.setXP(newTotal);
    
    // Check for level up
    this.checkAndUpdateLevel(newTotal);
    
    // Update daily XP
    const user = UserService.getCurrentUser();
    if (user?.phone) {
      this.updateDailyXP(user.phone, amount);
    }
    
    return newTotal;
  }

  getLevel() {
    return this.safeGet(this.STORAGE_KEYS.LEVEL, 1);
  }

  setLevel(level) {
    this.safeSet(this.STORAGE_KEYS.LEVEL, level);
    return level;
  }

  checkAndUpdateLevel(currentXP = null) {
    const xp = currentXP || this.getXP();
    const currentLevel = this.getLevel();
    
    // Calculate what level should be based on XP
    let newLevel = 1;
    let totalXPNeeded = 0;
    
    while (totalXPNeeded <= xp) {
      newLevel++;
      totalXPNeeded = 100 * newLevel * (newLevel - 1);
    }
    newLevel--; // Go back one since we went over
    
    if (newLevel > currentLevel) {
      this.setLevel(newLevel);
      // Bonus coins for leveling up
      const bonusCoins = 50 * (newLevel - currentLevel);
      this.addCoins(bonusCoins, `Level up to ${newLevel}!`);
      return true;
    }
    
    return false;
  }

  // ============= NEW FEATURES (User-Specific) =============
  
  // Initialize user-specific game data
  initializeUserData(phone) {
    if (!phone) return;
    
    // Check if already initialized
    const existingStats = this.getUserStats(phone);
    if (existingStats) return existingStats;
    
    const defaultData = {
      stats: {
        totalQuizzes: 0,
        totalPractice: 0,
        totalCorrect: 0,
        totalWrong: 0,
        winStreak: 0,
        bestStreak: 0,
        highScore: 0,
        gamesPlayed: 0
      },
      quests: {
        daily: [
          { id: 'quiz_3', type: 'quiz', target: 3, current: 0, reward: 60, completed: false },
          { id: 'practice_15', type: 'practice', target: 15, current: 0, reward: 100, completed: false },
          { id: 'win_5', type: 'win_streak', target: 5, current: 0, reward: 150, completed: false },
          { id: 'speed_run', type: 'speed_run', target: 1, current: 0, reward: 80, completed: false }
        ]
      },
      streak: {
        current: 0,
        lastPlayedDate: null,
        longestStreak: 0
      }
    };
    
    this.safeSet(this.STORAGE_KEYS.GAME_STATS + phone, defaultData.stats);
    this.safeSet(this.STORAGE_KEYS.QUEST_DATA + phone, defaultData.quests);
    this.safeSet(this.STORAGE_KEYS.STREAK_DATA + phone, defaultData.streak);
    this.resetDailyProgress(phone);
    
    return defaultData;
  }

  // User Stats Management
  getUserStats(phone) {
    if (!phone) return null;
    return this.safeGet(this.STORAGE_KEYS.GAME_STATS + phone, null);
  }

  updateUserStats(phone, updates) {
    if (!phone) return null;
    const stats = this.getUserStats(phone) || {};
    const updatedStats = { ...stats, ...updates };
    this.safeSet(this.STORAGE_KEYS.GAME_STATS + phone, updatedStats);
    return updatedStats;
  }

  // Daily Progress Management  
  getDailyProgress(phone) {
    if (!phone) return null;
    
    const data = this.safeGet(this.STORAGE_KEYS.DAILY_PROGRESS + phone, null);
    const today = new Date().toDateString();
    
    // Reset if it's a new day or no data
    if (!data || data.date !== today) {
      return this.resetDailyProgress(phone);
    }
    
    return data;
  }

  resetDailyProgress(phone) {
    if (!phone) return null;
    
    const newDaily = {
      date: new Date().toDateString(),
      quizzesPlayed: 0,
      practiceCompleted: 0,
      coinsEarned: 0,
      xpEarned: 0,
      questsCompleted: []
    };
    
    this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS + phone, newDaily);
    
    // Also reset daily quests
    this.resetDailyQuests(phone);
    
    return newDaily;
  }

  updateDailyCoins(phone, amount) {
    if (!phone) return;
    const daily = this.getDailyProgress(phone);
    if (daily) {
      daily.coinsEarned += amount;
      this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS + phone, daily);
    }
  }

  updateDailyXP(phone, amount) {
    if (!phone) return;
    const daily = this.getDailyProgress(phone);
    if (daily) {
      daily.xpEarned += amount;
      this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS + phone, daily);
    }
  }

  // Quest Management
  getQuestData(phone) {
    if (!phone) return null;
    return this.safeGet(this.STORAGE_KEYS.QUEST_DATA + phone, null);
  }

  resetDailyQuests(phone) {
    if (!phone) return null;
    
    const quests = {
      daily: [
        { id: 'quiz_3', type: 'quiz', target: 3, current: 0, reward: 60, completed: false },
        { id: 'practice_15', type: 'practice', target: 15, current: 0, reward: 100, completed: false },
        { id: 'win_5', type: 'win_streak', target: 5, current: 0, reward: 150, completed: false },
        { id: 'speed_run', type: 'speed_run', target: 1, current: 0, reward: 80, completed: false }
      ]
    };
    
    this.safeSet(this.STORAGE_KEYS.QUEST_DATA + phone, quests);
    return quests;
  }

  updateQuestProgress(phone, questType, increment = 1) {
    if (!phone) return null;
    
    const quests = this.getQuestData(phone);
    if (!quests?.daily) return null;
    
    let coinsEarned = 0;
    const updatedQuests = {
      ...quests,
      daily: quests.daily.map(quest => {
        if (quest.type === questType && !quest.completed) {
          const newCurrent = Math.min(quest.current + increment, quest.target);
          const completed = newCurrent >= quest.target;
          
          if (completed && !quest.completed) {
            coinsEarned += quest.reward;
            this.addCoins(quest.reward, `Quest completed: ${quest.id}`);
          }
          
          return { ...quest, current: newCurrent, completed };
        }
        return quest;
      })
    };
    
    this.safeSet(this.STORAGE_KEYS.QUEST_DATA + phone, updatedQuests);
    return { updatedQuests, coinsEarned };
  }

  // Streak Management
  getStreakData(phone) {
    if (!phone) return null;
    return this.safeGet(this.STORAGE_KEYS.STREAK_DATA + phone, {
      current: 0,
      lastPlayedDate: null,
      longestStreak: 0
    });
  }

  updateStreak(phone) {
    if (!phone) return null;
    
    const streak = this.getStreakData(phone);
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (streak.lastPlayedDate === today) {
      return streak; // Already played today
    }
    
    if (streak.lastPlayedDate === yesterday) {
      streak.current++; // Continue streak
    } else {
      streak.current = 1; // Reset streak
    }
    
    streak.lastPlayedDate = today;
    streak.longestStreak = Math.max(streak.current, streak.longestStreak);
    
    this.safeSet(this.STORAGE_KEYS.STREAK_DATA + phone, streak);
    
    // Streak bonus
    if (streak.current % 7 === 0) {
      this.addCoins(100, `7-day streak bonus!`);
    }
    
    return streak;
  }

  // Game Session Recording
  recordQuizSession(phone, quizData) {
    const { score, totalQuestions, category, difficulty = 'medium', mode = 'classic' } = quizData;
    
    // Update global coins and XP (works with existing system)
    const baseCoins = score * 5;
    const bonusCoins = score === totalQuestions ? 20 : 0;
    const totalCoinsEarned = baseCoins + bonusCoins;
    const xpEarned = score * 10;
    
    this.addCoins(totalCoinsEarned, `Quiz: ${score}/${totalQuestions}`);
    this.addXP(xpEarned);
    
    // Update user-specific stats if logged in
    if (phone) {
      const stats = this.getUserStats(phone) || this.initializeUserData(phone).stats;
      
      stats.totalQuizzes++;
      stats.totalCorrect += score;
      stats.totalWrong += (totalQuestions - score);
      stats.gamesPlayed++;
      
      if (score >= totalQuestions * 0.7) {
        stats.winStreak++;
        stats.bestStreak = Math.max(stats.winStreak, stats.bestStreak);
      } else {
        stats.winStreak = 0;
      }
      
      stats.highScore = Math.max(stats.highScore, score);
      this.updateUserStats(phone, stats);
      
      // Update daily progress
      const daily = this.getDailyProgress(phone);
      daily.quizzesPlayed++;
      this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS + phone, daily);
      
      // Update quests
      this.updateQuestProgress(phone, 'quiz', 1);
      if (stats.winStreak >= 5) {
        this.updateQuestProgress(phone, 'win_streak', stats.winStreak);
      }
      
      // Update streak
      this.updateStreak(phone);
      
      // Save to history
      this.addToHistory(phone, {
        type: 'quiz',
        mode,
        category,
        score,
        totalQuestions,
        difficulty,
        coinsEarned: totalCoinsEarned,
        xpEarned,
        timestamp: new Date().toISOString()
      });
    }
    
    return {
      coinsEarned: totalCoinsEarned,
      xpEarned,
      newTotal: this.getCoins(),
      newXP: this.getXP(),
      newLevel: this.getLevel()
    };
  }

  recordPracticeSession(phone, practiceData) {
    const { questionsCompleted, correctAnswers, category = 'general' } = practiceData;
    
    // Update global coins and XP
    const coinsEarned = questionsCompleted * 2;
    const xpEarned = questionsCompleted * 5;
    
    this.addCoins(coinsEarned, `Practice: ${questionsCompleted} questions`);
    this.addXP(xpEarned);
    
    // Update user-specific stats if logged in
    if (phone) {
      const stats = this.getUserStats(phone) || this.initializeUserData(phone).stats;
      
      stats.totalPractice += questionsCompleted;
      stats.totalCorrect += correctAnswers;
      stats.totalWrong += (questionsCompleted - correctAnswers);
      
      this.updateUserStats(phone, stats);
      
      // Update daily progress
      const daily = this.getDailyProgress(phone);
      daily.practiceCompleted += questionsCompleted;
      this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS + phone, daily);
      
      // Update quests
      this.updateQuestProgress(phone, 'practice', questionsCompleted);
      
      // Update streak
      this.updateStreak(phone);
      
      // Save to history
      this.addToHistory(phone, {
        type: 'practice',
        category,
        questionsCompleted,
        correctAnswers,
        coinsEarned,
        xpEarned,
        timestamp: new Date().toISOString()
      });
    }
    
    return {
      coinsEarned,
      xpEarned,
      newTotal: this.getCoins(),
      newXP: this.getXP()
    };
  }

  // History Management
  getGameHistory(phone) {
    if (!phone) return [];
    return this.safeGet(this.STORAGE_KEYS.GAME_HISTORY + phone, []);
  }

  addToHistory(phone, entry) {
    if (!phone) return;
    
    const history = this.getGameHistory(phone);
    history.unshift(entry);
    
    // Keep only last 50 entries
    if (history.length > 50) {
      history.pop();
    }
    
    this.safeSet(this.STORAGE_KEYS.GAME_HISTORY + phone, history);
  }

  // Get today's summary for home screen
  getTodaySummary(phone) {
    const currentUser = phone || UserService.getCurrentUser()?.phone;
    
    const summary = {
      totalCoins: this.getCoins(),
      totalXP: this.getXP(),
      level: this.getLevel(),
      xpProgress: this.getXP() % 100,
      xpNeeded: 100,
      todayCoins: 0,
      todayXP: 0,
      streak: 0,
      questProgress: 0,
      activeQuests: 0
    };
    
    if (currentUser) {
      const daily = this.getDailyProgress(currentUser);
      const streak = this.getStreakData(currentUser);
      const quests = this.getQuestData(currentUser);
      const stats = this.getUserStats(currentUser);
      
      if (daily) {
        summary.todayCoins = daily.coinsEarned;
        summary.todayXP = daily.xpEarned;
      }
      
      if (streak) {
        summary.streak = streak.current;
      }
      
      if (quests?.daily) {
        const completed = quests.daily.filter(q => q.completed).length;
        summary.questProgress = Math.round((completed / quests.daily.length) * 100);
        summary.activeQuests = quests.daily.filter(q => !q.completed).length;
      }
      
      if (stats) {
        summary.rank = 23; // You can calculate this based on total XP/score
        summary.winStreak = stats.winStreak;
      }
    }
    
    return summary;
  }

  // Transaction logging
  logCoinTransaction(phone, amount, reason) {
    if (!phone) return;
    
    const key = 'coin_transactions_' + phone;
    const transactions = this.safeGet(key, []);
    
    transactions.push({
      amount,
      reason,
      timestamp: new Date().toISOString(),
      balance: this.getCoins()
    });
    
    // Keep only last 100 transactions
    if (transactions.length > 100) {
      transactions.shift();
    }
    
    this.safeSet(key, transactions);
  }

  // Results Management
  storeCurrentResults(results) {
    this.safeSet(this.STORAGE_KEYS.QUIZ_RESULTS, {
      ...results,
      timestamp: Date.now(),
      expiresAt: Date.now() + (30 * 60 * 1000) // Expire after 30 minutes
    });
    return true;
  }

  getCurrentResults() {
    const stored = this.safeGet(this.STORAGE_KEYS.QUIZ_RESULTS, null);
    
    if (!stored) return null;
    
    // Check if expired
    if (stored.expiresAt && stored.expiresAt < Date.now()) {
      this.clearCurrentResults();
      return null;
    }
    
    return stored;
  }

  clearCurrentResults() {
    localStorage.removeItem(this.STORAGE_KEYS.QUIZ_RESULTS);
  }

  // Utility methods
  safeGet(key, fallback = null) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  }

  safeSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  // Clear all game data (useful for testing)
  clearAllData() {
    Object.values(this.STORAGE_KEYS).forEach(key => {
      if (typeof key === 'string' && !key.includes('_')) {
        localStorage.removeItem(key);
      }
    });
  }

  // Clear user-specific data
  clearUserData(phone) {
    if (!phone) return;
    
    const userKeys = [
      this.STORAGE_KEYS.GAME_STATS + phone,
      this.STORAGE_KEYS.DAILY_PROGRESS + phone,
      this.STORAGE_KEYS.QUEST_DATA + phone,
      this.STORAGE_KEYS.STREAK_DATA + phone,
      this.STORAGE_KEYS.GAME_HISTORY + phone,
      'coin_transactions_' + phone
    ];
    
    userKeys.forEach(key => localStorage.removeItem(key));
  }
}

export default new GameDataService();