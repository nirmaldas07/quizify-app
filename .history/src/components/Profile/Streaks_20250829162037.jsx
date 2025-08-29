import React, { useState, useEffect } from "react";
import { useGame } from '../../App';  // Add this line

export default function Streaks() {
  const { player } = useGame();
  const currentStreak = player?.currentStreak || 0;
  const bestStreak = player?.bestStreak || 0;
  const totalDays = player?.totalDays || 0;
  const [showCelebration, setShowCelebration] = useState(false);
  
  const todayIdx = new Date().getDay();
  const week = ["S","M","T","W","T","F","S"].map((d,i) => ({ 
    label: d, 
    hit: i <= todayIdx && i !== 0,
    isToday: i === todayIdx 
  }));

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
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          color: white;
          position: relative;
          overflow: hidden;
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
          margin-bottom: 32px;
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
          margin-top: 10px;
          margin-bottom: 24px;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-2px);
        }

        .title-section {
          text-align: center;
          margin-bottom: 32px;
        }

        .main-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #FFD93D, #FF6B6B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
        }

        .streak-hero {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px;
          margin-bottom: 24px;
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
          font-size: 80px;
          margin-bottom: 16px;
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
          font-size: 72px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .streak-label {
          font-size: 24px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #4ECDC4;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .calendar-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 24px;
          margin-bottom: 24px;
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

        .calendar-header {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .week-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 0px; /* Reduced gap */
        max-width: 100%;
        padding: 0 4px; /* Add small padding */
        }

        .day-box {
          aspect-ratio: 1;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .day-box.inactive {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .day-box.active {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          animation: popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .day-box.today {
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          color: #1a1a1a;
          box-shadow: 0 6px 20px rgba(255, 217, 61, 0.4);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes popIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 6px 20px rgba(255, 217, 61, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(255, 217, 61, 0.5);
          }
        }

        .day-icon {
          font-size: 20px;
          margin-bottom: 4px;
        }

        .milestone-section {
          margin-bottom: 24px;
          animation: slideUp 0.5s ease-out 0.6s both;
        }

        .milestone-header {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .milestone-progress {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .milestone-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .milestone-current {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .milestone-emoji {
          font-size: 28px;
        }

        .milestone-text {
          font-size: 16px;
          font-weight: 600;
        }

        .milestone-target {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }

        .progress-bar-container {
          width: 100%;
          height: 12px;
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
          position: relative;
        }

        .progress-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4px;
          height: 100%;
          background: white;
          border-radius: 2px;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .milestones-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: 20px;
        }

        .milestone-badge {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 12px 8px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s;
        }

        .milestone-badge.achieved {
          background: linear-gradient(135deg, rgba(255, 217, 61, 0.15), rgba(255, 165, 0, 0.15));
          border-color: rgba(255, 217, 61, 0.3);
        }

        .milestone-badge-emoji {
          font-size: 24px;
          margin-bottom: 4px;
          filter: grayscale(100%) opacity(0.3);
        }

        .milestone-badge.achieved .milestone-badge-emoji {
          filter: none;
        }

        .milestone-badge-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
        }

        .milestone-badge.achieved .milestone-badge-label {
          color: rgba(255, 255, 255, 0.8);
        }

        .play-button {
          width: 100%;
          padding: 18px;
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          border: none;
          border-radius: 20px;
          font-size: 18px;
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
          margin: 20px 0;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          font-style: italic;
          animation: slideUp 0.5s ease-out 1s both;
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

      <div className="calendar-card">
        <div className="calendar-header">This Week</div>
        <div className="week-grid">
          {week.map((day, index) => (
            <div
              key={index}
              className={`day-box ${
                day.isToday ? 'today' : 
                day.hit ? 'active' : 
                'inactive'
              }`}
            >
              {day.isToday && <div className="day-icon">⚡</div>}
              {day.hit && !day.isToday && <div className="day-icon">✓</div>}
              <div>{day.label}</div>
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
        "Great job! You're {Math.max(1, nextMilestone.days - currentStreak)} days away from {nextMilestone.label}!"
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