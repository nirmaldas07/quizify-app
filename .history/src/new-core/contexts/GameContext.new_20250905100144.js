import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [coins, setCoins] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [combo, setCombo] = useState(0);

  const nextThreshold = 100 * (level + 1) * level;

  const addXP = (amount) => {
    setXp(prev => prev + amount);
  };

  const addCoins = (amount) => {
    setCoins(prev => prev + amount);
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