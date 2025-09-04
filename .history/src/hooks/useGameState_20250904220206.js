//src/hooks/useGameState.js
import { useState, useEffect, useCallback } from 'react';
import { GAME_CONSTANTS, calculateLevel, calculateLevelProgress } from '../utils/gameConstants';

const defaultPlayerState = {
  name: (() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return currentUser.username ? currentUser.username.split(' ')[0] : 'Player';
  })(),

  avatar: 'wizard',
  level: 1,
  totalXP: 0,
//   coins: 0, // coins removed - managed by GameDataService
  energy: GAME_CONSTANTS.MAX_ENERGY,
  energyRegenAt: null,
  comboStreak: 0,
  bestCombo: 0,
  currentStreak: 0,  // ADD THIS - current day streak
  bestStreak: 0,     // ADD THIS - best day streak ever
  totalDays: 0,      // ADD THIS - total days played
  lastPlayedDate: null, // ADD THIS - for streak tracking
  totalQuizzes: 0,
  totalCorrect: 0,
  achievements: [],
  unlockedAvatars: ['wizard', 'knight'],
  createdAt: Date.now()
};

export function useGameState() {
  const [player, setPlayer] = useState(() => {
    const saved = localStorage.getItem(GAME_CONSTANTS.STORAGE_KEYS.PLAYER);
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (saved) {if (saved) {
    const savedPlayer = JSON.parse(saved);
    // Update name from currentUser if available
    if (currentUser.username) {
      savedPlayer.name = currentUser.username.split(' ')[0];
    }
    
    // Ensure unlockedAvatars exists
    if (!savedPlayer.unlockedAvatars) {
      savedPlayer.unlockedAvatars = ['wizard', 'knight'];
    }
    
    return savedPlayer;
  }
    return defaultPlayerState;
  });

  // Save to localStorage whenever player state changes
  useEffect(() => {
    localStorage.setItem(GAME_CONSTANTS.STORAGE_KEYS.PLAYER, JSON.stringify(player));
  }, [player]);

  // Energy regeneration check
  useEffect(() => {
    if (player.energy < GAME_CONSTANTS.MAX_ENERGY && player.energyRegenAt) {
      const checkRegen = setInterval(() => {
        const now = Date.now();
        if (now >= player.energyRegenAt) {
          setPlayer(prev => ({
            ...prev,
            energy: Math.min(prev.energy + 1, GAME_CONSTANTS.MAX_ENERGY),
            energyRegenAt: prev.energy + 1 < GAME_CONSTANTS.MAX_ENERGY 
              ? now + GAME_CONSTANTS.ENERGY_REGEN_TIME 
              : null
          }));
        }
      }, 60000); // Check every minute

      return () => clearInterval(checkRegen);
    }
  }, [player.energy, player.energyRegenAt]);

  const addXP = useCallback((amount) => {
    setPlayer(prev => {
      const newTotalXP = prev.totalXP + amount;
      const oldLevel = calculateLevel(prev.totalXP);
      const newLevel = calculateLevel(newTotalXP);
      
// Check for newly unlocked avatars
      let newUnlockedAvatars = [...prev.unlockedAvatars];
      if (newLevel > oldLevel) {
        GAME_CONSTANTS.AVATARS.forEach(avatar => {
          if (avatar.unlockLevel <= newLevel && !newUnlockedAvatars.includes(avatar.id)) {
            newUnlockedAvatars.push(avatar.id);
          }
        });
      }
      
      return {
        ...prev,
        totalXP: newTotalXP,
        level: newLevel,
        unlockedAvatars: newUnlockedAvatars
      };
    });
  }, []);

// Coins are now managed by GameDataService only
// This is just a placeholder that does nothing
const addCoins = useCallback((amount) => {
  console.log('[DEPRECATED] addCoins called with:', amount);
  // Do nothing - GameDataService handles this
}, []);

  const useEnergy = useCallback((amount = 1) => {
    if (player.energy < amount) return false;
    
    setPlayer(prev => ({
      ...prev,
      energy: prev.energy - amount,
      energyRegenAt: prev.energyRegenAt || Date.now() + GAME_CONSTANTS.ENERGY_REGEN_TIME
    }));
    return true;
  }, [player.energy]);

  const updateCombo = useCallback((correct) => {
    setPlayer(prev => {
      const newStreak = correct ? prev.comboStreak + 1 : 0;
      return {
        ...prev,
        comboStreak: newStreak,
        bestCombo: Math.max(prev.bestCombo, newStreak)
      };
    });
  }, []);

  const resetCombo = useCallback(() => {
    setPlayer(prev => ({
      ...prev,
      comboStreak: 0
    }));
  }, []);

  const changeAvatar = useCallback((avatarId) => {
    if (player.unlockedAvatars.includes(avatarId)) {
      setPlayer(prev => ({
        ...prev,
        avatar: avatarId
      }));
    }
  }, [player.unlockedAvatars]);

  const updateDailyStreak = useCallback(() => {
    const today = new Date().toDateString();
    
    setPlayer(prev => {
      // If already played today, don't update
      if (prev.lastPlayedDate === today) {
        return prev;
      }
      
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toDateString();
      
      let newCurrentStreak = prev.currentStreak;
      
      if (prev.lastPlayedDate === yesterdayString) {
        // Consecutive day - increment streak
        newCurrentStreak = prev.currentStreak + 1;
      } else if (prev.lastPlayedDate) {
        // Streak broken - reset to 1
        newCurrentStreak = 1;
      } else {
        // First time playing
        newCurrentStreak = 1;
      }
      
      return {
        ...prev,
        currentStreak: newCurrentStreak,
        bestStreak: Math.max(prev.bestStreak, newCurrentStreak),
        totalDays: prev.totalDays + 1,
        lastPlayedDate: today
      };
    });
  }, []);

  return {
    player,
    addXP,
    addCoins,
    useEnergy,
    updateCombo,
    resetCombo,
    changeAvatar,
    updateDailyStreak,
    levelProgress: calculateLevelProgress(player.totalXP)
  };
}