import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import GameDataService from '../../services/GameDataService';
import UserService from '../../services/UserService';
import CoinFly from '../Shared/CoinFly';
import { ChevronLeft, Sparkles, Lock, Gift, Timer, Shield } from 'lucide-react';

export default function SurpriseZone() {
  const navigate = useNavigate();
  
  // Hide bottom navigation on mount
  useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    return () => {
      document.body.classList.remove('hide-bottom-nav');
    };
  }, []);
  
  // Sound effects
  const [playSuccess] = useSound('/sounds/correct.mp3', { volume: 0.6 });
  const [playCoin] = useSound('/sounds/coin.mp3', { volume: 0.7 });
  const [playClick] = useSound('/sounds/click.mp3', { volume: 0.5 });
  const [playWrong] = useSound('/sounds/wrong.mp3', { volume: 0.5 });
  
  // Refs for coin animation
  const coinPillRef = useRef(null);
  const boxRefs = useRef({});
  
  // State
  const [displayCoins, setDisplayCoins] = useState(GameDataService.getCoins());
  const [coinFly, setCoinFly] = useState(null);
  const [boxes, setBoxes] = useState([
    { 
      id: 'bronze', 
      name: 'Bronze', 
      opened: false, 
      reward: null, 
      minCoins: 5, 
      maxCoins: 15, 
      color: 'from-amber-600 to-amber-700', 
      glow: 'shadow-amber-500/30',
      miniGame: 'tap', // tap 3 times
      tapsRequired: 3,
      tapsCount: 0
    },
    { 
      id: 'silver', 
      name: 'Silver', 
      opened: false, 
      reward: null, 
      minCoins: 20, 
      maxCoins: 40, 
      color: 'from-gray-400 to-gray-500', 
      glow: 'shadow-gray-400/30',
      miniGame: 'swipe', // swipe pattern
      swipePattern: null,
      swipeComplete: false
    },
    { 
      id: 'gold', 
      name: 'Gold', 
      opened: false, 
      reward: null, 
      minCoins: 50, 
      maxCoins: 100, 
      color: 'from-yellow-400 to-yellow-500', 
      glow: 'shadow-yellow-400/30',
      xpChance: 0.7,
      miniGame: 'hold', // hold for 2 seconds
      holdDuration: 2,
      holdProgress: 0,
      isHolding: false
    }
  ]);
  
  const [isOpening, setIsOpening] = useState(false);
  const [totalEarned, setTotalEarned] = useState(0);
  const [lastResetDate, setLastResetDate] = useState(null);
  const [timeUntilReset, setTimeUntilReset] = useState('');
  const [showReward, setShowReward] = useState(null);
  const [activeBox, setActiveBox] = useState(null);
  const [holdTimer, setHoldTimer] = useState(null);

  // Check and reset boxes daily
  useEffect(() => {
    checkDailyReset();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const checkDailyReset = () => {
    const today = new Date().toDateString();
    const savedData = GameDataService.safeGet('surprise_zone_data', null);
    
    if (!savedData || savedData.date !== today) {
      // Reset for new day
      const freshBoxes = boxes.map(box => ({ 
        ...box, 
        opened: false, 
        reward: null,
        tapsCount: 0,
        swipeComplete: false,
        holdProgress: 0,
        isHolding: false
      }));
      setBoxes(freshBoxes);
      setTotalEarned(0);
      setLastResetDate(today);
      
      GameDataService.safeSet('surprise_zone_data', {
        date: today,
        boxes: freshBoxes,
        totalEarned: 0
      });
    } else {
      // Load saved state
      setBoxes(savedData.boxes || boxes);
      setTotalEarned(savedData.totalEarned || 0);
      setLastResetDate(savedData.date);
    }
  };

  const updateCountdown = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    setTimeUntilReset(
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    );
  };

  // Update display coins when storage changes
  useEffect(() => {
    const checkCoins = setInterval(() => {
      const currentCoins = GameDataService.getCoins();
      if (currentCoins !== displayCoins) {
        setDisplayCoins(currentCoins);
      }
    }, 100);
    
    return () => clearInterval(checkCoins);
  }, [displayCoins]);

  const handleBoxInteraction = (boxId, action) => {
    if (isOpening) return;
    
    const boxIndex = boxes.findIndex(b => b.id === boxId);
    const box = boxes[boxIndex];
    
    if (box.opened) return;
    
    setActiveBox(boxId);
    
    // Handle different mini-games
    if (box.miniGame === 'tap' && action === 'tap') {
      handleTapGame(boxIndex);
    } else if (box.miniGame === 'swipe' && action === 'swipe') {
      handleSwipeGame(boxIndex);
    } else if (box.miniGame === 'hold') {
      if (action === 'holdStart') {
        handleHoldStart(boxIndex);
      } else if (action === 'holdEnd') {
        handleHoldEnd(boxIndex);
      }
    }
  };

  const handleTapGame = (boxIndex) => {
    const box = boxes[boxIndex];
    const newTapsCount = box.tapsCount + 1;
    
    playClick();
    
    const newBoxes = [...boxes];
    newBoxes[boxIndex] = { ...box, tapsCount: newTapsCount };
    setBoxes(newBoxes);
    
    if (newTapsCount >= box.tapsRequired) {
      setTimeout(() => openBox(box.id), 300);
    }
  };

  const handleSwipeGame = (boxIndex) => {
    const box = boxes[boxIndex];
    
    playClick();
    
    const newBoxes = [...boxes];
    newBoxes[boxIndex] = { ...box, swipeComplete: true };
    setBoxes(newBoxes);
    
    setTimeout(() => openBox(box.id), 300);
  };

  const handleHoldStart = (boxIndex) => {
    const box = boxes[boxIndex];
    
    const newBoxes = [...boxes];
    newBoxes[boxIndex] = { ...box, isHolding: true, holdProgress: 0 };
    setBoxes(newBoxes);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.05; // 20 updates per second
      
      const currentBoxes = [...boxes];
      const currentBox = currentBoxes[boxIndex];
      
      if (progress >= box.holdDuration) {
        clearInterval(interval);
        currentBoxes[boxIndex] = { ...currentBox, holdProgress: box.holdDuration, isHolding: false };
        setBoxes(currentBoxes);
        openBox(box.id);
      } else if (currentBox.isHolding) {
        currentBoxes[boxIndex] = { ...currentBox, holdProgress: progress };
        setBoxes(currentBoxes);
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    setHoldTimer(interval);
  };

  const handleHoldEnd = (boxIndex) => {
    if (holdTimer) {
      clearInterval(holdTimer);
      setHoldTimer(null);
    }
    
    const box = boxes[boxIndex];
    if (box.holdProgress < box.holdDuration) {
      playWrong();
      const newBoxes = [...boxes];
      newBoxes[boxIndex] = { ...box, isHolding: false, holdProgress: 0 };
      setBoxes(newBoxes);
    }
  };

  const openBox = async (boxId) => {
    if (isOpening) return;
    
    const boxIndex = boxes.findIndex(b => b.id === boxId);
    const box = boxes[boxIndex];
    
    if (box.opened) return;
    
    setIsOpening(true);
    
    // Calculate reward
    const coins = Math.floor(Math.random() * (box.maxCoins - box.minCoins + 1)) + box.minCoins;
    const hasXPBonus = box.xpChance && Math.random() < box.xpChance;
    const xpBonus = hasXPBonus ? Math.floor(Math.random() * 50) + 25 : 0;
    
    // Show opening animation
    setShowReward({ boxId, coins, xpBonus });
    
    // Play success sound
    playSuccess();
    
    // Wait for animation
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Start coin fly animation
    if (boxRefs.current[boxId] && coinPillRef.current) {
      const rect = boxRefs.current[boxId].getBoundingClientRect();
      playCoin();
      setCoinFly({ 
        startRect: rect, 
        count: Math.min(coins, 15), 
        amount: coins,
        xpBonus: xpBonus
      });
    }
    
    // Update state
    const newBoxes = [...boxes];
    newBoxes[boxIndex] = {
      ...box,
      opened: true,
      reward: { coins, xpBonus }
    };
    
    setBoxes(newBoxes);
    setTotalEarned(prev => prev + coins);
    
    // Save state
    GameDataService.safeSet('surprise_zone_data', {
      date: lastResetDate,
      boxes: newBoxes,
      totalEarned: totalEarned + coins
    });
    
    // Hide reward animation after 2 seconds
    setTimeout(() => {
      setShowReward(null);
      setActiveBox(null);
    }, 2000);
    
    setIsOpening(false);
  };

  const allOpened = boxes.every(box => box.opened);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/50 to-black pointer-events-none" />
      
      {/* Coin Fly Animation */}
      {coinFly && (
        <CoinFly
          startRect={coinFly.startRect}
          targetRef={coinPillRef}
          count={coinFly.count}
          onDone={() => {
            // Add rewards using GameDataService
            GameDataService.addCoins(coinFly.amount, 'Lucky Box');
            if (coinFly.xpBonus > 0) {
              GameDataService.addXP(coinFly.xpBonus);
            }
            
            // Update display
            setDisplayCoins(GameDataService.getCoins());
            setCoinFly(null);
          }}
        />
      )}
      
      {/* Floating reward animation */}
      {showReward && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="animate-bounce">
            <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <div className="text-center">
                <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <p className="text-3xl font-bold text-yellow-400">+{showReward.coins}</p>
                <p className="text-sm text-gray-400 mt-1">coins</p>
                {showReward.xpBonus > 0 && (
                  <p className="text-lg text-blue-400 mt-2">+{showReward.xpBonus} XP</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Header */}
      <div className="relative z-10 px-6 pt-14 pb-8">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-1">Daily Surprise</p>
            <h1 className="text-2xl font-semibold">Lucky Boxes</h1>
          </div>
          
          {/* Coins Pill */}
          <button
            ref={coinPillRef}
            onClick={() => navigate('/profile')}
            className="px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur-xl flex items-center gap-2 hover:bg-yellow-500/30 transition-all border border-yellow-500/30"
          >
            <span className="text-lg">🪙</span>
            <span className="font-bold text-yellow-400">{displayCoins}</span>
          </button>
        </div>

        {/* Timer Card */}
        <div className="mx-auto max-w-sm mb-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Next reset in</p>
                  <p className="text-lg font-mono font-semibold">{timeUntilReset || '00:00:00'}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Earned today</p>
                <p className="text-lg font-semibold text-yellow-400">{totalEarned} coins</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        {!allOpened && (
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500">Complete mini-games to unlock rewards!</p>
          </div>
        )}
      </div>

      {/* Boxes Container */}
      <div className="relative z-10 px-6 pb-8">
        <div className="max-w-sm mx-auto space-y-6">
          {boxes.map((box, index) => (
            <div
              key={box.id}
              ref={el => boxRefs.current[box.id] = el}
              className="relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 100}ms both`
              }}
            >
              <button
                onClick={() => handleBoxInteraction(box.id, 'tap')}
                onMouseDown={() => box.miniGame === 'hold' && handleBoxInteraction(box.id, 'holdStart')}
                onMouseUp={() => box.miniGame === 'hold' && handleBoxInteraction(box.id, 'holdEnd')}
                onMouseLeave={() => box.miniGame === 'hold' && handleBoxInteraction(box.id, 'holdEnd')}
                onTouchStart={() => box.miniGame === 'hold' && handleBoxInteraction(box.id, 'holdStart')}
                onTouchEnd={() => box.miniGame === 'hold' && handleBoxInteraction(box.id, 'holdEnd')}
                disabled={box.opened || isOpening}
                className={`
                  w-full relative overflow-hidden rounded-3xl p-8
                  transition-all duration-500 transform
                  ${box.opened 
                    ? 'bg-white/5 scale-95 opacity-60' 
                    : `bg-gradient-to-br ${box.color} hover:scale-[1.02] active:scale-[0.98] shadow-2xl ${box.glow}`
                  }
                  ${isOpening && !box.opened ? 'animate-pulse' : ''}
                  disabled:cursor-not-allowed
                `}
              >
                {/* Progress Overlay for Mini-games */}
                {!box.opened && activeBox === box.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {box.miniGame === 'tap' && (
                      <div className="absolute top-2 right-2 flex gap-1">
                        {[...Array(box.tapsRequired)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < box.tapsCount ? 'bg-white' : 'bg-white/30'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    
                    {box.miniGame === 'hold' && box.isHolding && (
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
                        <div 
                          className="h-full bg-white transition-all"
                          style={{ width: `${(box.holdProgress / box.holdDuration) * 100}%` }}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Background Pattern */}
                {!box.opened && (
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                       radial-gradient(circle at 80% 80%, white 1px, transparent 1px),
                                       radial-gradient(circle at 40% 80%, white 1px, transparent 1px)`,
                      backgroundSize: '50px 50px'
                    }} />
                  </div>
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="text-left">
                    <p className={`text-sm font-medium ${box.opened ? 'text-gray-400' : 'text-white/80'}`}>
                      {box.name} Box
                    </p>
                    <p className={`text-2xl font-bold mt-1 ${box.opened ? 'text-gray-300' : 'text-white'}`}>
                      {box.opened ? (
                        <span className="flex items-center gap-2">
                          <span className="text-yellow-400">+{box.reward?.coins}</span>
                          <span className="text-sm">coins</span>
                          {box.reward?.xpBonus > 0 && (
                            <span className="text-sm text-blue-400 ml-2">+{box.reward.xpBonus} XP</span>
                          )}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>{box.minCoins}-{box.maxCoins}</span>
                          <span className="text-sm">coins</span>
                        </span>
                      )}
                    </p>
                    {!box.opened && (
                      <p className="text-xs text-white/50 mt-1">
                        {box.miniGame === 'tap' && `Tap ${box.tapsRequired} times`}
                        {box.miniGame === 'swipe' && 'Swipe to open'}
                        {box.miniGame === 'hold' && `Hold for ${box.holdDuration} seconds`}
                      </p>
                    )}
                  </div>

                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center
                    ${box.opened ? 'bg-white/10' : 'bg-white/20 backdrop-blur-xl'}
                    transition-all duration-300
                  `}>
                    {box.opened ? (
                      <Sparkles className="w-8 h-8 text-yellow-400" />
                    ) : activeBox === box.id ? (
                      <Shield className="w-8 h-8 text-white animate-pulse" />
                    ) : (
                      <Gift className={`w-8 h-8 text-white ${!isOpening ? 'animate-pulse' : ''}`} />
                    )}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* All opened message */}
        {allOpened && (
          <div className="mt-12 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <Lock className="w-4 h-4 text-gray-400" />
              <p className="text-sm text-gray-400">All boxes opened! Come back tomorrow</p>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-400">🎉 {totalEarned} coins earned!</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}