import React, { useState, useEffect, useRef } from "react";
import { useGame } from '../../App';
import useSound from 'use-sound';
import CoinFly from '../CoinFly';

export default function Streaks() {
  const { player, addCoins, updateDailyStreak } = useGame();
  const currentStreak = player?.currentStreak || 0;
  const bestStreak = player?.bestStreak || 0;
  const totalDays = player?.totalDays || 0;
  const playerCoins = player?.coins || 0;

// Define today at the top
  const today = new Date();
  const todayIdx = today.getDay();

    // Get week start date for tracking
  const getWeekId = () => {
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    return weekStart.toISOString().split('T')[0];
  };
  
  const [showRewardModal, setShowRewardModal] = useState(null);
  const [giftBoxOpening, setGiftBoxOpening] = useState(false);
  const [coinFly, setCoinFly] = useState(null);
  const [lockedMessage, setLockedMessage] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  
  const coinPillRef = useRef(null);
  const giftBoxRef = useRef(null);
  
  // Sound effects
  const [playCoin] = useSound("/sounds/coin.mp3", { volume: 0.75 });
  const [playCorrect] = useSound("/sounds/correct.mp3", { volume: 0.6 });
  
  // Developer mode - clear claimed rewards on mount for testing
  const [claimedRewards, setClaimedRewards] = useState(() => {
    // For development/testing - always reset Day 0 claim
    const saved = localStorage.getItem('streaks_claimed') || '[]';
    const parsed = JSON.parse(saved);
    const weekId = getWeekId();
    // Remove Day 0 claim for current week to allow testing
    const filtered = parsed.filter(key => key !== `week_${weekId}_day_0`);
    localStorage.setItem('streaks_claimed', JSON.stringify(filtered));
    return filtered;
  });

  // Scroll to top on mount
useEffect(() => {
  // Use setTimeout to ensure DOM is ready
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
  
  // Also try scrollIntoView as backup
  document.body.scrollIntoView({ behavior: 'instant', block: 'start' });
}, []);

  useEffect(() => {
  // Always show for testing
  setShowCelebration(true);
  setTimeout(() => setShowCelebration(false), 3000);
}, []);

  
  // Week structure with proper day tracking
  const weekDays = [
    { label: "Mon", short: "M", dayIndex: 1 },
    { label: "Tue", short: "T", dayIndex: 2 },
    { label: "Wed", short: "W", dayIndex: 3 },
    { label: "Thu", short: "T", dayIndex: 4 },
    { label: "Fri", short: "F", dayIndex: 5 },
    { label: "Sat", short: "S", dayIndex: 6 },
    { label: "Sun", short: "S", dayIndex: 0 }
  ];


  // Weekly rewards structure - Day 0 to Day 7
  const weeklyRewards = [
    { day: 0, reward: "10", type: "coins", icon: "🎯", label: "Welcome Bonus" },
    { day: 1, reward: "50", type: "coins", icon: "🪙", label: "50 Coins" },
    { day: 2, reward: "100", type: "coins", icon: "🪙", label: "100 Coins" },
    { day: 3, reward: "2x", type: "xp", icon: "⭐", label: "2x XP Boost" },
    { day: 4, reward: "150", type: "coins", icon: "🪙", label: "150 Coins" },
    { day: 5, reward: "Full", type: "energy", icon: "⚡", label: "Energy Refill" },
    { day: 6, reward: "200", type: "coins", icon: "🪙", label: "200 Coins" },
    { day: 7, reward: "Mystery", type: "mystery", icon: "🎁", label: "Mystery Box" }
  ];

  // Check which rewards can be claimed
  const getRewardStatus = (day) => {
    const isClaimed = claimedRewards.includes(`week_${getWeekId()}_day_${day}`);
    
    // Day 0 is always unlocked
    if (day === 0) {
      return { 
        isCompleted: true, 
        isClaimed, 
        canClaim: !isClaimed, 
        isLocked: false 
      };
    }
    
    const isCompleted = currentStreak >= day;
    const canClaim = isCompleted && !isClaimed;
    const isLocked = currentStreak < day;
    
    return { isCompleted, isClaimed, canClaim, isLocked };
  };

  // Handle reward claiming with gift box animation
  const handleClaimReward = (reward, day, e) => {
    const status = getRewardStatus(day);
    
    if (status.isLocked) {
      setLockedMessage({ day, currentStreak });
      setTimeout(() => setLockedMessage(null), 2000);
      return;
    }
    
    if (status.isClaimed) {
      return;
    }
    
    if (!status.canClaim) {
      return;
    }

    // Store button rect for coin animation
    const buttonRect = e?.currentTarget?.getBoundingClientRect();

    // Show gift box modal
    setShowRewardModal({ ...reward, day });
    setGiftBoxOpening(false);

    // Start gift box opening animation
    setTimeout(() => {
      setGiftBoxOpening(true);
      playCorrect();
      
      // Process reward after box opens
      setTimeout(() => {
        if (reward.type === 'coins') {
          const amount = parseInt(reward.reward);
          
          // Use CoinFly component like in home.jsx
          if (buttonRect && coinPillRef.current) {
            playCoin();
            setCoinFly({ 
              startRect: buttonRect, 
              count: 10, 
              amount 
            });
          }
        }

        // Mark as claimed
        const claimKey = `week_${getWeekId()}_day_${day}`;
        const newClaimed = [...claimedRewards, claimKey];
        setClaimedRewards(newClaimed);
        localStorage.setItem('streaks_claimed', JSON.stringify(newClaimed));
      }, 500);
      
      // Hide modal after animation
      setTimeout(() => {
        setShowRewardModal(null);
        setGiftBoxOpening(false);
      }, 2500);
    }, 500);
  };

  // Get day status for visual display
  const getDayStatus = (dayIndex, weekIndex) => {
    const dayNum = weekIndex + 1;
    const isToday = weekDays[weekIndex].dayIndex === todayIdx;
    
    if (currentStreak >= dayNum) {
      return isToday ? 'today-completed' : 'completed';
    } else if (isToday) {
      return 'today-pending';
    } else if (dayNum <= currentStreak + 1) {
      return 'pending';
    } else {
      return 'future';
    }
  };

  const milestones = [
    { days: 3, emoji: "⚡", label: "Starter", achieved: currentStreak >= 3 },
    { days: 7, emoji: "🔥", label: "Week Warrior", achieved: currentStreak >= 7 },
    { days: 30, emoji: "💎", label: "Champion", achieved: currentStreak >= 30 },
    { days: 100, emoji: "👑", label: "Legend", achieved: currentStreak >= 100 },
  ];

  const nextMilestone = milestones.find(m => m.days > currentStreak) || milestones[milestones.length - 1];
  const progressToNext = Math.min(100, (currentStreak / nextMilestone.days) * 100);

  const handlePlayNow = () => {
    window.location.href = '/play';
  };

  const handleBack = () => {
    window.location.href = '/profile';
  };

  return (
    <div className="streaks-screen">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .streaks-screen {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          color: white;
          position: relative;
          overflow-x: hidden;
          max-width: 100vw;
        }

        .header {
          position: relative;
          z-index: 10;
          margin-bottom: 24px;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: white;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-2px);
        }

        .coin-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(255, 217, 61, 0.2), rgba(255, 165, 0, 0.2));
          border: 1px solid rgba(255, 217, 61, 0.3);
          border-radius: 20px;
          font-weight: 600;
          position: relative;
        }

        .coin-icon {
          font-size: 18px;
        }

        .coin-amount {
          font-size: 16px;
          color: #FFD93D;
        }

        .title-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .main-title {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 6px;
          background: linear-gradient(135deg, #FFD93D, #FF6B6B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .streak-hero {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 20px;
          text-align: center;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .fire-animation {
          font-size: 64px;
          margin-bottom: 12px;
          display: inline-block;
          animation: flame 2s ease-in-out infinite;
        }

        @keyframes flame {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            filter: brightness(1);
          }
          25% { 
            transform: scale(1.05) rotate(-3deg);
            filter: brightness(1.1);
          }
          50% { 
            transform: scale(1.1) rotate(3deg);
            filter: brightness(1.2);
          }
          75% { 
            transform: scale(1.05) rotate(-3deg);
            filter: brightness(1.1);
          }
        }

        .streak-number {
          font-size: 56px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 6px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .streak-label {
          font-size: 20px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 20px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 14px;
          padding: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #4ECDC4;
          margin-bottom: 2px;
        }

        .stat-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .weekly-progress-card {
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.15), rgba(255, 217, 61, 0.15));
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .weekly-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .weekly-title {
          font-size: 16px;
          font-weight: 700;
          color: white;
        }

        .weekly-counter {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }

        .weekly-counter-icon {
          font-size: 16px;
        }

        .weekly-counter-text {
          font-size: 14px;
          font-weight: 600;
        }

        .weekly-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 6px;
          margin-bottom: 20px;
        }

        .day-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .day-circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .day-circle.completed {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .day-circle.today-completed {
          background: linear-gradient(135deg, #34D399, #10B981);
          color: white;
          box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        .day-circle.today-pending {
          background: linear-gradient(135deg, #FBBF24, #F59E0B);
          color: white;
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        .day-circle.pending {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.5);
        }

        .day-circle.future {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.3);
        }

        .day-circle.completed::after,
        .day-circle.today-completed::after {
          content: '✓';
          position: absolute;
          font-size: 18px;
          color: white;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.3);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(52, 211, 153, 0.1);
          }
        }

        .day-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
        }

        .day-label.today {
          color: #34D399;
          font-weight: 600;
        }

        .rewards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
          gap: 8px;
        }

        .reward-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 10px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .reward-item.completed {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2));
          border-color: rgba(16, 185, 129, 0.3);
        }

        .reward-item.can-claim {
          background: linear-gradient(135deg, rgba(255, 217, 61, 0.2), rgba(255, 165, 0, 0.2));
          border-color: rgba(255, 217, 61, 0.5);
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 217, 61, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 217, 61, 0.5);
          }
        }

        .reward-item.locked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .reward-item.locked::before {
          content: '🔒';
          position: absolute;
          top: 5px;
          right: 5px;
          font-size: 12px;
        }

        .reward-day {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 4px;
        }

        .reward-icon {
          font-size: 24px;
          margin-bottom: 4px;
        }

        .reward-text {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
        }

        .reward-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1000;
        }

        .gift-box {
          width: 200px;
          height: 200px;
          position: relative;
          animation: float 2s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .gift-box-body {
          width: 100%;
          height: 150px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border-radius: 20px;
          position: absolute;
          bottom: 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .gift-box-lid {
          width: 110%;
          height: 60px;
          background: linear-gradient(135deg, #FF6B6B, #FF1493);
          border-radius: 15px;
          position: absolute;
          top: 40px;
          left: -5%;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transform-origin: bottom left;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .gift-box-lid.opening {
          transform: rotate(-45deg) translateY(-50px);
        }

        .gift-box-ribbon {
          position: absolute;
          width: 30px;
          height: 100%;
          background: linear-gradient(135deg, #9370DB, #4169E1);
          left: 50%;
          transform: translateX(-50%);
          border-radius: 5px;
        }

        .gift-box-ribbon-horizontal {
          position: absolute;
          width: 100%;
          height: 30px;
          background: linear-gradient(135deg, #9370DB, #4169E1);
          top: 50%;
          transform: translateY(-50%);
          border-radius: 5px;
        }

        .gift-box-bow {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 40px;
        }

        .gift-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .gift-content.show {
          opacity: 1;
        }

        .gift-content-icon {
          font-size: 64px;
          margin-bottom: 16px;
          animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .gift-content-title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 4px;
        color: #1a1a2e;  /* Dark color for contrast */
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .gift-content-desc {
        font-size: 14px;
        color: #16213e;  /* Dark color for contrast */
        font-weight: 600;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 999;
        }

        .locked-message {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 16px 24px;
          z-index: 1001;
          animation: messageFade 2s ease-out forwards;
        }

        @keyframes messageFade {
          0% {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          80% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
        }

        .locked-message-icon {
          font-size: 20px;
          margin-right: 8px;
          display: inline-block;
        }

        .locked-message-text {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          display: inline-block;
        }

        .milestone-section {
          margin-bottom: 20px;
        }

        .milestone-header {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .milestone-progress {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .milestone-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .milestone-current {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .milestone-emoji {
          font-size: 24px;
        }

        .milestone-text {
          font-size: 14px;
          font-weight: 600;
        }

        .milestone-target {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .progress-bar-container {
          width: 100%;
          height: 10px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #FFD93D, #FF6B6B);
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(255, 217, 61, 0.3);
        }

        .play-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .play-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        .motivational-text {
          text-align: center;
          margin: 16px 0;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          font-style: italic;
        }

        .celebration {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 120px;
          z-index: 1000;
          pointer-events: none;
          animation: celebrate 3s ease-out forwards;
        }

        @keyframes celebrate {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.8) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Coin Fly Animation using CoinFly component */}
      {coinFly && (
        <CoinFly
          startRect={coinFly.startRect}
          targetRef={coinPillRef}
          count={coinFly.count}
          onDone={() => {
            addCoins(coinFly.amount);
            setCoinFly(null);
          }}
        />
      )}

      <div className="header">
        <div className="header-top">
          <button className="back-button" onClick={handleBack}>
            ← Back
          </button>
          <div className="coin-pill" ref={coinPillRef} id="coin-pill">
            <span className="coin-icon">🪙</span>
            <span className="coin-amount">{playerCoins}</span>
          </div>
        </div>
        
        <div className="title-section">
          <h1 className="main-title">STREAKS</h1>
          <p className="subtitle">Keep the fire burning!</p>
        </div>
      </div>

      <div className="streak-hero">
        <div className="fire-animation">🔥</div>
        <div className="streak-number">{currentStreak}</div>
        <div className="streak-label">DAY STREAK</div>
        
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-value">{bestStreak}</div>
            <div className="stat-label">Best Streak</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{totalDays}</div>
            <div className="stat-label">Total Days</div>
          </div>
        </div>
      </div>

      <div className="weekly-progress-card">
        <div className="weekly-header">
          <div className="weekly-title">This Week's Progress</div>
          <div className="weekly-counter">
            <span className="weekly-counter-icon">🔥</span>
            <span className="weekly-counter-text">{Math.min(currentStreak, 7)}/7</span>
          </div>
        </div>

        <div className="weekly-days">
          {weekDays.map((day, index) => {
            const status = getDayStatus(day.dayIndex, index);
            const isToday = day.dayIndex === todayIdx;
            
            return (
              <div key={index} className="day-item">
                <div className={`day-circle ${status}`}>
                  {(status === 'completed' || status === 'today-completed') ? '' : day.short}
                </div>
                <div className={`day-label ${isToday ? 'today' : ''}`}>
                  {day.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="milestone-header">Daily Rewards</div>
        <div className="rewards-grid">
          {weeklyRewards.map((reward, index) => {
            const status = getRewardStatus(reward.day);
            
            return (
              <div 
                key={index} 
                className={`reward-item ${
                  status.isLocked ? 'locked' : 
                  status.canClaim ? 'can-claim' : 
                  status.isClaimed ? 'completed' : ''
                }`}
                onClick={(e) => handleClaimReward(reward, reward.day, e)}
              >
                <div className="reward-day">Day {reward.day}</div>
                <div className="reward-icon">{reward.icon}</div>
                <div className="reward-text">{reward.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="milestone-section">
        <div className="milestone-header">Next Milestone</div>
        <div className="milestone-progress">
          <div className="milestone-info">
            <div className="milestone-current">
              <span className="milestone-emoji">{nextMilestone.emoji}</span>
              <span className="milestone-text">{nextMilestone.label}</span>
            </div>
            <span className="milestone-target">{currentStreak}/{nextMilestone.days} days</span>
          </div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progressToNext}%` }}
            />
          </div>
        </div>
      </div>

      <div className="motivational-text">
        {currentStreak === 0 
          ? "Start your journey! Claim your Day 0 bonus and complete a quiz!"
          : `Day ${currentStreak} strong! Keep going to unlock more rewards!`
        }
      </div>

      <button className="play-button" onClick={handlePlayNow}>
        <span>Continue Streak</span>
        <span>→</span>
      </button>

      {/* Locked Message */}
      {lockedMessage && (
        <div className="locked-message">
          <span className="locked-message-icon">🔒</span>
          <span className="locked-message-text">
            {lockedMessage.day === 1 && lockedMessage.currentStreak === 0 
              ? "Complete your first quiz to unlock this reward!" 
              : `Reach Day ${lockedMessage.day} streak to unlock this reward!`}
          </span>
        </div>
      )}

      {/* Gift Box Reward Modal */}
      {showRewardModal && (
        <>
          <div className="modal-overlay" />
          <div className="reward-modal" ref={giftBoxRef}>
            <div className="gift-box">
              <div className="gift-box-body">
                <div className="gift-box-ribbon"></div>
                <div className="gift-box-ribbon-horizontal"></div>
              </div>
              <div className={`gift-box-lid ${giftBoxOpening ? 'opening' : ''}`}>
                <div className="gift-box-bow">🎀</div>
              </div>
              <div className={`gift-content ${giftBoxOpening ? 'show' : ''}`}>
                <div className="gift-content-icon">{showRewardModal.icon}</div>
                <div className="gift-content-title">Day {showRewardModal.day}</div>
                <div className="gift-content-desc">{showRewardModal.label}</div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Celebration Emoji */}
      {showCelebration && (
        <div className="celebration">🎉</div>
      )}
    </div>
  );
}