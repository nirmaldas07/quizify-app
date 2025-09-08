// src/new-core/contexts/GameContext.new.js
import React, { createContext, useContext, useState, useRef, useCallback } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [coins, setCoins] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [combo, setCombo] = useState(0);
  
  // Add ref to prevent duplicate updates
  const updatingCoins = useRef(false);
  const updateQueue = useRef([]);

  const nextThreshold = 100 * (level + 1) * level;

  const addXP = (amount) => {
    setXp(prev => prev + amount);
  };

  // FIX: Prevent duplicate coin updates
  const addCoins = useCallback((amount, source = 'unknown') => {
    // Prevent duplicate updates from same source
    if (updatingCoins.current) {
      console.log(`[BLOCKED] Duplicate coin update from ${source}`);
      return;
    }
    
    updatingCoins.current = true;
    console.log(`[COINS] Adding ${amount} from ${source}`);
    
    setCoins(prev => {
      const newTotal = prev + amount;
      console.log(`[COINS] ${prev} -> ${newTotal}`);
      return newTotal;
    });
    
    // Reset flag after update
    setTimeout(() => {
      updatingCoins.current = false;
    }, 100);
  }, []);

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