import React, { useState, useEffect } from "react";
import { useGame } from '../../App';

export default function Streaks() {
  const { player } = useGame();
  const currentStreak = player?.currentStreak || 0;
  const bestStreak = player?.bestStreak || 0;
  const totalDays = player?.totalDays || 0;
  const [showCelebration, setShowCelebration] = useState(false);
  
  // Calculate which days of the current week have been completed
  const todayIdx = new Date().getDay();
  
  // For a proper streak system, we'd track actual dates
  // For now, we'll show progress based on current streak
  const daysCompleted = Math.min(currentStreak, 7);
  
  const weekDays = [
    { label: "Mon", short: "M", index: 1 },
    { label: "Tue", short: "T", index: 2 },
    { label: "Wed", short: "W", index: 3 },
    { label: "Thu", short: "T", index: 4 },
    { label: "Fri", short: "F", index: 5 },
    { label: "Sat", short: "S", index: 6 },
    { label: "Sun", short: "S", index: 0 }
  ];

  // Weekly rewards structure
  const weeklyRewards = [
    { day: 1, reward: "50 Coins", icon: "🪙", completed: daysCompleted >= 1 },
    { day: 2, reward: "100 Coins", icon: "🪙", completed: daysCompleted >= 2 },
    { day: 3, reward: "2x XP", icon: "⭐", completed: daysCompleted >= 3 },
    { day: 4, reward: "150 Coins", icon: "🪙", completed: daysCompleted >= 4 },
    { day: 5, reward: "Energy Refill", icon: "⚡", completed: daysCompleted >= 5 },
    { day: 6, reward: "200 Coins", icon: "🪙", completed: daysCompleted >= 6 },
    { day: 7, reward: "Mystery Box", icon: "🎁", completed: daysCompleted >= 7 }
  ];

  const milestones = [
    { days: 3, emoji: "⚡", label: "Starter", achieved: currentStreak >= 3 },
    { days: 7, emoji: "🔥", label: "Week Warrior", achieved: currentStreak >= 7 },
    { days: 30, emoji: "💎", label: "Champion", achieved: currentStreak >= 30 },
    { days: 100, emoji: "👑", label: "Legend", achieved: currentStreak >= 100 },
  ];

  const nextMilestone = milestones.find(m => m.days > currentStreak) || milestones[milestones.length - 1];
  const progressToNext = Math.min(100, (currentStreak / nextMilestone.days) * 100);

  useEffect(() => {
    if (currentStreak > 0 && currentStreak % 5 === 0) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
    }
  }, [currentStreak]);

  const handlePlayNow = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/play';
    }
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

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.05;
          background-image: 
            radial-gradient(circle at 20% 30%, #FFD93D 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #FF6B6B 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #4ECDC4 0%, transparent 70%);
        }

        .header {
          position: relative;
          z-index: 10;
          margin-bottom: 24px;
          animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
          margin-bottom: 20px;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-2px);
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
          animation: fadeInScale 0.6s ease-out 0.2s both;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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
          animation: slideUp 0.5s ease-out 0.4s both;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        .day-circle.pending {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.5);
        }

        .day-circle.completed::after {
          content: '✓';
          position: absolute;
          font-size: 18px;
          color: white;
        }

        .day-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
        }

        .rewards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 8px;
        }

        .reward-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 10px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
        }

        .reward-item.completed {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2));
          border-color: rgba(16, 185, 129, 0.3);
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

        .milestone-section {
          margin-bottom: 20px;
          animation: slideUp 0.5s ease-out 0.6s both;
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

        .milestones-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          margin-top: 16px;
        }

        .milestone-badge {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 10px 6px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s;
        }

        .milestone-badge.achieved {
          background: linear-gradient(135deg, rgba(255, 217, 61, 0.15), rgba(255, 165, 0, 0.15));
          border-color: rgba(255, 217, 61, 0.3);
        }

        .milestone-badge-emoji {
          font-size: 20px;
          margin-bottom: 4px;
          filter: grayscale(100%) opacity(0.3);
        }

        .milestone-badge.achieved .milestone-badge-emoji {
          filter: none;
        }

        .milestone-badge-label {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.5);
        }

        .milestone-badge.achieved .milestone-badge-label {
          color: rgba(255, 255, 255, 0.8);
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
          animation: slideUp 0.5s ease-out 0.8s both;
          margin-bottom: 20px;
        }

        .play-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        .play-button:active {
          transform: scale(0.98);
        }

        .celebration {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 120px;
          z-index: 1000;
          pointer-events: none;
          animation: celebrate 2s ease-out forwards;
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
      `}</style>

      <div className="animated-bg"></div>

      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          ← Back
        </button>
        
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
            <span className="weekly-counter-text">{daysCompleted}/7</span>
          </div>
        </div>

        <div className="weekly-days">
          {weekDays.map((day, index) => (
            <div key={index} className="day-item">
              <div className={`day-circle ${index < daysCompleted ? 'completed' : 'pending'}`}>
                {index < daysCompleted ? '' : day.short}
              </div>
              <div className="day-label">{day.label}</div>
            </div>
          ))}
        </div>

        <div className="milestone-header">Daily Rewards</div>
        <div className="rewards-grid">
          {weeklyRewards.map((reward, index) => (
            <div key={index} className={`reward-item ${reward.completed ? 'completed' : ''}`}>
              <div className="reward-day">Day {reward.day}</div>
              <div className="reward-icon">{reward.icon}</div>
              <div className="reward-text">{reward.reward}</div>
            </div>
          ))}
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

        <div className="milestones-grid">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`milestone-badge ${milestone.achieved ? 'achieved' : ''}`}
            >
              <div className="milestone-badge-emoji">{milestone.emoji}</div>
              <div className="milestone-badge-label">{milestone.days} days</div>
            </div>
          ))}
        </div>
      </div>

      <div className="motivational-text">
        {currentStreak === 0 
          ? "Start your streak today! Complete a quiz to begin."
          : `Great job! You're ${Math.max(1, nextMilestone.days - currentStreak)} days away from ${nextMilestone.label}!`
        }
      </div>

      <button className="play-button" onClick={handlePlayNow}>
        <span>Continue Streak</span>
        <span>→</span>
      </button>

      {showCelebration && (
        <div className="celebration">🎉</div>
      )}
    </div>
  );
}