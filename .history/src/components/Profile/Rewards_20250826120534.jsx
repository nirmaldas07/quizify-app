import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RewardsJourney = () => {
  // Navigation handlers
  const handleNavigation = (path) => {
    if (typeof window !== 'undefined') {
      window.location.href = path;
    }
  };
  
  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };
  
  // Journey rewards configuration
  const rewards = [
    { id: 1, type: 'coins', value: 100, icon: '🪙', label: '100', cost: 0 },
    { id: 2, type: 'life', value: 1, icon: '❤️', label: '+1', cost: 0 },
    { id: 3, type: 'coins', value: 200, icon: '🪙', label: '200', cost: 0 },
    { id: 4, type: 'wildcard', value: 1, icon: '🃏', label: '1x', cost: 0 },
    { id: 5, type: 'coins', value: 500, icon: '💰', label: '500', cost: 0, milestone: true },
    { id: 6, type: 'fifty-fifty', value: 1, icon: '➗', label: '1x', cost: 0 },
    { id: 7, type: 'life', value: 2, icon: '❤️', label: '+2', cost: 0 },
    { id: 8, type: 'vehicle', value: 'bike', icon: '🏍️', label: 'Bike', cost: 0 },
    { id: 9, type: 'mystery', value: 1, icon: '🎁', label: '1x', cost: 0 },
    { id: 10, type: 'coins', value: 750, icon: '💰', label: '750', cost: 0, milestone: true },
    { id: 11, type: 'life', value: 3, icon: '❤️', label: '+3', cost: 0 },
    { id: 12, type: 'wildcard', value: 2, icon: '🃏', label: '2x', cost: 0 },
    { id: 13, type: 'vehicle', value: 'car', icon: '🚗', label: 'Car', cost: 0 },
    { id: 14, type: 'fifty-fifty', value: 2, icon: '➗', label: '2x', cost: 0 },
    { id: 15, type: 'coins', value: 1000, icon: '💎', label: '1000', cost: 0, milestone: true },
    { id: 16, type: 'life', value: 5, icon: '❤️', label: '+5', cost: 0 },
    { id: 17, type: 'coins', value: 1500, icon: '👑', label: '1500', cost: 0 },
    { id: 18, type: 'mystery', value: 3, icon: '🎁', label: '3x', cost: 0 },
    { id: 19, type: 'wildcard', value: 3, icon: '🃏', label: '3x', cost: 0 },
    { id: 20, type: 'coins', value: 2500, icon: '🏆', label: '2500', cost: 0, milestone: true },
  ];

  const vehicles = {
    cycle: { icon: '🚴', name: 'Bicycle' },
    bike: { icon: '🏍️', name: 'Motorcycle' },
    car: { icon: '🚗', name: 'Car' }
  };

  const [currentProgress, setCurrentProgress] = useState(0);
  const [totalCoins, setTotalCoins] = useState(1240);
  const [totalLives, setTotalLives] = useState(3);
  const [currentVehicle, setCurrentVehicle] = useState('cycle');
  const [claimedRewards, setClaimedRewards] = useState([]);
  const [showClaimEffect, setShowClaimEffect] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  
  const rewardSound = useRef(null);
  const progressSound = useRef(null);

  useEffect(() => {
    rewardSound.current = new Audio('/sounds/reward.mp3');
    progressSound.current = new Audio('/sounds/reward_progress.mp3');
    
    [rewardSound, progressSound].forEach(ref => {
      ref.current?.addEventListener('error', () => {
        console.log('Sound file not found');
      });
    });
  }, []);

  const playSound = (soundRef) => {
    try {
      if (soundRef.current) {
        soundRef.current.currentTime = 0;
        soundRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
    } catch (e) {
      console.log('Sound play error:', e);
    }
  };

  const claimReward = (index) => {
    if (index !== currentProgress || claimedRewards.includes(index)) {
      return;
    }

    const reward = rewards[index];
    
    // Play claim sound and show effect
    playSound(rewardSound);
    setShowClaimEffect(true);
    
    // Apply reward
    if (reward.type === 'coins') {
      setTotalCoins(prev => prev + reward.value);
    } else if (reward.type === 'life') {
      setTotalLives(prev => prev + reward.value);
    } else if (reward.type === 'vehicle') {
      setCurrentVehicle(reward.value);
    }
    
    setClaimedRewards(prev => [...prev, index]);
    
    // Hide effect and move to next after delay
    setTimeout(() => {
      setShowClaimEffect(false);
      if (currentProgress < rewards.length - 1) {
        setIsMoving(true);
        playSound(progressSound);
        setTimeout(() => {
          setCurrentProgress(prev => prev + 1);
          setIsMoving(false);
        }, 1000);
      }
    }, 1500);
  };

  const progressPercentage = (currentProgress / (rewards.length - 1)) * 100;

  return (
    <div className="rewards-page">
      <style jsx>{`
        .rewards-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #1a1a2e 0%, #2d1b69 50%, #1a1a2e 100%);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .header {
          padding: 20px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .title {
          font-size: 32px;
          font-weight: bold;
          margin: 20px 0 8px;
        }

        .subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
        }

        .balance-section {
          margin: 0 20px 20px;
          padding: 20px;
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(76, 175, 80, 0.05));
          border: 1px solid rgba(76, 175, 80, 0.3);
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .balance-left {
          flex: 1;
        }

        .balance-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 4px;
        }

        .balance-value {
          font-size: 28px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .earn-more {
          text-align: right;
        }

        .play-quiz-btn {
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.15);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .play-quiz-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .stats-row {
          display: flex;
          gap: 12px;
          margin: 0 20px 20px;
          justify-content: center;
        }

        .stat-card {
          flex: 1;
          max-width: 150px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .vehicle-card {
          margin: 0 20px 30px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          text-align: center;
        }

        .vehicle-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 8px;
        }

        .vehicle-icon {
          font-size: 32px;
          margin-bottom: 4px;
        }

        .vehicle-name {
          font-size: 14px;
          font-weight: 500;
        }

        .journey-container {
          position: relative;
          padding: 0 20px 40px;
          min-height: 600px;
        }

        .journey-track {
          position: relative;
          width: 100%;
          padding: 20px 0;
        }

        .progress-line {
          position: absolute;
          left: 50%;
          top: 40px;
          bottom: 40px;
          width: 4px;
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(-50%);
          z-index: 1;
        }

        .progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(180deg, #4CAF50, #8BC34A);
          transition: height 1s ease;
          border-radius: 2px;
        }

        .rewards-list {
          position: relative;
          z-index: 2;
        }

        .reward-row {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          position: relative;
        }

        .reward-row:nth-child(even) {
          flex-direction: row-reverse;
        }

        .reward-row:nth-child(odd) .reward-item {
          margin-right: auto;
          margin-left: 20%;
        }

        .reward-row:nth-child(even) .reward-item {
          margin-left: auto;
          margin-right: 20%;
        }

        .reward-item {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
        }

        .checkpoint {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          background: #2d2d3d;
          border: 3px solid rgba(255, 255, 255, 0.2);
        }

        .checkpoint.current {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-color: #667eea;
          animation: pulse 2s infinite;
          transform: scale(1.1);
        }

        .checkpoint.claimed {
          background: linear-gradient(135deg, #4CAF50, #8BC34A);
          border-color: #4CAF50;
        }

        .checkpoint.locked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.8);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(102, 126, 234, 0);
          }
        }

        .checkpoint-icon {
          font-size: 24px;
          margin-bottom: 2px;
        }

        .checkpoint-value {
          font-size: 11px;
          font-weight: bold;
        }

        .reward-info {
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 12px;
          border-radius: 8px;
        }

        .reward-name {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.9);
        }

        .step-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
        }

        .avatar-tracker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          transition: top 1s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .avatar-img {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          border: 2px solid #4CAF50;
        }

        .tracker-vehicle {
          font-size: 20px;
        }

        .claim-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }

        .claim-modal {
          background: linear-gradient(135deg, #2d1b69, #1a1a2e);
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          animation: slideUp 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .claim-title {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 12px;
        }

        .claim-subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 24px;
        }

        .claim-icon {
          font-size: 64px;
          margin-bottom: 20px;
          animation: bounce 0.5s ease;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .claim-value {
          font-size: 32px;
          font-weight: bold;
          color: #4CAF50;
        }

        .milestone-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #FFD700;
          color: #1a1a2e;
          padding: 2px 6px;
          border-radius: 6px;
          font-size: 9px;
          font-weight: bold;
        }
      `}</style>

      <div className="header">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
        <h1 className="title">Rewards</h1>
        <p className="subtitle">Claim amazing prizes</p>
      </div>

      <div className="balance-section">
        <div className="balance-left">
          <div className="balance-label">Your Balance</div>
          <div className="balance-value">
            {totalCoins.toLocaleString()} 🪙
          </div>
        </div>
        <div className="earn-more">
          <div className="balance-label">Earn More</div>
          <button className="play-quiz-btn" onClick={() => handleNavigation('/quiz')}>
            Play Quiz
          </button>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          ❤️ {totalLives}
        </div>
        <div className="stat-card">
          ⭐ Level 5
        </div>
      </div>

      <div className="vehicle-card">
        <div className="vehicle-label">Your Vehicle</div>
        <div className="vehicle-icon">{vehicles[currentVehicle].icon}</div>
        <div className="vehicle-name">{vehicles[currentVehicle].name}</div>
      </div>

      <div className="journey-container">
        <div className="journey-track">
          <div className="progress-line">
            <div 
              className="progress-fill" 
              style={{ height: `${progressPercentage}%` }}
            />
          </div>

          <div 
            className="avatar-tracker"
            style={{ 
              top: `${40 + (currentProgress * ((100 - 8) / (rewards.length - 1)))}px`,
              opacity: isMoving ? 0.7 : 1
            }}
          >
            <img 
              className="avatar-img"
              src="/profile/avatar.png"
              alt="You"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="tracker-vehicle">{vehicles[currentVehicle].icon}</div>
          </div>

          <div className="rewards-list">
            {rewards.map((reward, index) => (
              <div key={reward.id} className="reward-row">
                <div className="reward-item">
                  <div 
                    className={`checkpoint ${
                      index === currentProgress ? 'current' : 
                      claimedRewards.includes(index) ? 'claimed' : 
                      index > currentProgress ? 'locked' : ''
                    }`}
                    onClick={() => claimReward(index)}
                  >
                    <div className="checkpoint-icon">{reward.icon}</div>
                    <div className="checkpoint-value">{reward.label}</div>
                    {reward.milestone && <div className="milestone-badge">BONUS</div>}
                  </div>
                  <div className="reward-info">
                    <div className="reward-name">
                      {reward.type === 'coins' ? `${reward.value} Coins` :
                       reward.type === 'life' ? `${reward.value} Lives` :
                       reward.type === 'vehicle' ? reward.label :
                       reward.label}
                    </div>
                    <div className="step-label">Step {index + 1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Claim Effect Overlay */}
      <AnimatePresence>
        {showClaimEffect && currentProgress < rewards.length && (
          <div className="claim-overlay">
            <div className="claim-modal">
              <div className="claim-title">WELL DONE!</div>
              <div className="claim-subtitle">Here's a reward for you.</div>
              <div className="claim-icon">{rewards[currentProgress].icon}</div>
              <div className="claim-value">
                +{rewards[currentProgress].value} {rewards[currentProgress].type === 'coins' ? 'Coins' : 
                  rewards[currentProgress].type === 'life' ? 'Lives' : ''}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RewardsJourney;