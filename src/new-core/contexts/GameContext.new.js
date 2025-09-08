// src/new-core/contexts/GameContext.new.js
// Uses GameDataService as single source of truth

import React, { createContext, useContext, useState, useEffect } from 'react';
import GameDataService from '../services/GameDataService.new';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // Initialize state from GameDataService
  const [xp, setXp] = useState(GameDataService.getXP());
  const [level, setLevel] = useState(GameDataService.getLevel());
  const [coins, setCoins] = useState(GameDataService.getCoins());
  const [energy, setEnergy] = useState(100);
  const [combo, setCombo] = useState(0);

  const nextThreshold = 100 * (level + 1) * level;

  // Sync with localStorage on mount
  useEffect(() => {
    // Read latest values from GameDataService on mount
    setCoins(GameDataService.getCoins());
    setXp(GameDataService.getXP());
    setLevel(GameDataService.getLevel());
  }, []);

  const addXP = (amount) => {
    const newXP = GameDataService.addXP(amount);
    setXp(newXP);
    // Also update level if changed
    setLevel(GameDataService.getLevel());
    // Update coins if level up gave bonus
    setCoins(GameDataService.getCoins());
  };

  const addCoins = (amount, source = 'game') => {
    console.log(`[GameContext] Adding ${amount} coins from ${source}`);
    const newTotal = GameDataService.addCoins(amount, source);
    setCoins(newTotal);
    return newTotal;
  };

  const useEnergy = (amount) => {
    setEnergy(prev => Math.max(0, prev - amount));
  };

  const updateCombo = (newCombo) => {
    setCombo(newCombo);
  };

  return (
    <GameContext.Provider value={{
      xp, level, coins, energy, combo, nextThreshold,
      addXP, addCoins, useEnergy, updateCombo
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};