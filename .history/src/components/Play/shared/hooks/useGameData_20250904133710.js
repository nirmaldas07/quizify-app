// src/components/Play/shared/hooks/useGameData.js
import { useState, useEffect, useCallback } from 'react';
import GameDataService from '../../../../services/GameDataService';
import UserService from '../../../../services/UserService';

const STORAGE_KEYS = {
  OWNED_CHARACTERS: "owned_characters",
  SOUND: "play_sound_on"
};

const safeStorage = {
  get: (key, fallback = null) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }
};

export function useGameData() {
  // Use GameDataService for coins, XP, and level
  const [coins, setCoins] = useState(() => GameDataService.getCoins());
  const [xp, setXp] = useState(() => GameDataService.getXP());
  const [level, setLevel] = useState(() => GameDataService.getLevel());
  
  // Keep these local for now
  const [ownedCharacters, setOwnedCharacters] = useState(() => 
    safeStorage.get(STORAGE_KEYS.OWNED_CHARACTERS, [])
  );
  const [soundOn, setSoundOn] = useState(() => 
    safeStorage.get(STORAGE_KEYS.SOUND, true)
  );

  // Initialize user data if logged in
  useEffect(() => {
    const currentUser = UserService.getCurrentUser();
    if (currentUser?.phone) {
      GameDataService.initializeUserData(currentUser.phone);
    }
  }, []);

  // Sync with GameDataService when values change
  const addCoins = useCallback((amount) => {
    const newTotal = GameDataService.addCoins(amount, 'Game reward');
    setCoins(newTotal);
    return newTotal;
  }, []);

  const addXp = useCallback((amount) => {
    const newTotal = GameDataService.addXP(amount);
    setXp(newTotal);
    
    // Check if leveled up
    const newLevel = GameDataService.getLevel();
    if (newLevel > level) {
      setLevel(newLevel);
    }
    
    return newTotal;
  }, [level]);

  const spendCoins = useCallback((amount, reason = 'Purchase') => {
    if (GameDataService.spendCoins(amount, reason)) {
      const newTotal = GameDataService.getCoins();
      setCoins(newTotal);
      return true;
    }
    return false;
  }, []);
  
  const unlockCharacter = useCallback((characterSlug) => {
    setOwnedCharacters(prev => {
      const newList = [...new Set([...prev, characterSlug])];
      safeStorage.set(STORAGE_KEYS.OWNED_CHARACTERS, newList);
      return newList;
    });
  }, []);

  const checkLevelUp = useCallback(() => {
    return GameDataService.checkAndUpdateLevel();
  }, []);

  // Save sound preference
  useEffect(() => {
    safeStorage.set(STORAGE_KEYS.SOUND, soundOn);
  }, [soundOn]);

  // Record game sessions using GameDataService
  const recordQuizComplete = useCallback((score, totalQuestions, category, difficulty, mode) => {
    const currentUser = UserService.getCurrentUser();
    const result = GameDataService.recordQuizSession(
      currentUser?.phone,
      { score, totalQuestions, category, difficulty, mode }
    );
    
    // Update local state
    setCoins(result.newTotal);
    setXp(result.newXP);
    setLevel(result.newLevel);
    
    return result;
  }, []);

  const recordPracticeComplete = useCallback((questionsCompleted, correctAnswers, category) => {
    const currentUser = UserService.getCurrentUser();
    const result = GameDataService.recordPracticeSession(
      currentUser?.phone,
      { questionsCompleted, correctAnswers, category }
    );
    
    // Update local state
    setCoins(result.newTotal);
    setXp(result.newXP);
    
    return result;
  }, []);

  // Get user stats
  const getUserStats = useCallback(() => {
    const currentUser = UserService.getCurrentUser();
    if (currentUser?.phone) {
      return GameDataService.getUserStats(currentUser.phone);
    }
    return null;
  }, []);

  // Get quest data
  const getQuestData = useCallback(() => {
    const currentUser = UserService.getCurrentUser();
    if (currentUser?.phone) {
      return GameDataService.getQuestData(currentUser.phone);
    }
    return null;
  }, []);

  // Get today's summary
  const getTodaySummary = useCallback(() => {
    const currentUser = UserService.getCurrentUser();
    return GameDataService.getTodaySummary(currentUser?.phone);
  }, []);

  return {
    // State (same interface as before)
    coins,
    xp,
    level,
    ownedCharacters,
    soundOn,
    
    // Actions (same interface as before)
    addCoins,
    addXp,
    spendCoins,
    unlockCharacter,
    setSoundOn,
    checkLevelUp,
    
    // New methods for recording sessions
    recordQuizComplete,
    recordPracticeComplete,
    
    // New methods for getting data
    getUserStats,
    getQuestData,
    getTodaySummary,
    
    // Computed (same as before)
    nextLevelThreshold: 100 * level * (level - 1),
    xpProgress: xp / Math.max(1, 100 * level * (level - 1))
  };
}