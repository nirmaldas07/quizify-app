//play/shared/hooks/useGameData.js
import { useState, useEffect } from 'react';

const STORAGE_KEYS = {
  COINS: "qp_coins",
  XP: "qp_xp",
  LEVEL: "qp_level",
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
  const [coins, setCoins] = useState(() => safeStorage.get(STORAGE_KEYS.COINS, 0));
  const [xp, setXp] = useState(() => safeStorage.get(STORAGE_KEYS.XP, 0));
  const [level, setLevel] = useState(() => safeStorage.get(STORAGE_KEYS.LEVEL, 1));
  const [ownedCharacters, setOwnedCharacters] = useState(() => 
    safeStorage.get(STORAGE_KEYS.OWNED_CHARACTERS, [])
  );
  const [soundOn, setSoundOn] = useState(() => safeStorage.get(STORAGE_KEYS.SOUND, true));

  // Auto-save to localStorage
  useEffect(() => safeStorage.set(STORAGE_KEYS.COINS, coins), [coins]);
  useEffect(() => safeStorage.set(STORAGE_KEYS.XP, xp), [xp]);
  useEffect(() => safeStorage.set(STORAGE_KEYS.LEVEL, level), [level]);
  useEffect(() => safeStorage.set(STORAGE_KEYS.OWNED_CHARACTERS, ownedCharacters), [ownedCharacters]);
  useEffect(() => safeStorage.set(STORAGE_KEYS.SOUND, soundOn), [soundOn]);

  const addCoins = (amount) => setCoins(prev => prev + amount);
  const addXp = (amount) => setXp(prev => prev + amount);
  
  const unlockCharacter = (characterSlug) => {
    setOwnedCharacters(prev => [...new Set([...prev, characterSlug])]);
  };

  const checkLevelUp = () => {
    const nextThreshold = 100 * level * (level - 1);
    if (xp >= nextThreshold) {
      setLevel(prev => prev + 1);
      return true;
    }
    return false;
  };

  return {
    // State
    coins,
    xp,
    level,
    ownedCharacters,
    soundOn,
    
    // Actions
    addCoins,
    addXp,
    unlockCharacter,
    setSoundOn,
    checkLevelUp,
    
    // Computed
    nextLevelThreshold: 100 * level * (level - 1),
    xpProgress: xp / (100 * level * (level - 1))
  };
}