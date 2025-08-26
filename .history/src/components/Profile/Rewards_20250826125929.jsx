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
    { id: 1, type: 'coins', value: 100, icon: '🪙', label: '100 Coins', cost: 0 },
    { id: 2, type: 'life', value: 1, icon: '❤️', label: '1 Lives', cost: 50 },
    { id: 3, type: 'coins', value: 200, icon: '🪙', label: '200 Coins', cost: 0 },
    { id: 4, type: 'wildcard', value: 1, icon: '🃏', label: '1x', cost: 100 },
    { id: 5, type: 'coins', value: 500, icon: '💰', label: '500 Coins', cost: 0, milestone: true },
    { id: 6, type: 'fifty-fifty', value: 1, icon: '➗', label: '1x', cost: 150 },
    { id: 7, type: 'life', value: 2, icon: '❤️', label: '2 Lives', cost: 100 },
    { id: 8, type: 'vehicle', value: 'bike', icon: '🏍️', label: 'Bike', cost: 300 },
    { id: 9, type: 'mystery', value: 1, icon: '🎁', label: '1x', cost: 200 },
    { id: 10, type: 'coins', value: 750, icon: '💰', label: '750 Coins', cost: 0, milestone: true },
    { id: 11, type: 'life', value: 3, icon: '❤️', label: '3 Lives', cost: 150 },
    { id: 12, type: 'wildcard', value: 2, icon: '🃏', label: '2x', cost: 250 },
    { id: 13, type: 'vehicle', value: 'car', icon: '🚗', label: 'Car', cost: 500 },
    { id: 14, type: 'fifty-fifty', value: 2, icon: '➗', label: '2x', cost: 300 },
    { id: 15, type: 'coins', value: 1000, icon: '💎', label: '1000 Coins', cost: 0, milestone: true },
  ];

  const vehicles = {
    cycle: { icon: '🚴', name: 'Bicycle' },
    bike: { icon: '🏍️', name: 'Motorcycle' },
    car: { icon: '🚗', name: 'Car' }
  };

  const [currentProgress, setCurrentProgress] = useState(4); // Start at step 5 for testing
  const [totalCoins, setTotalCoins] = useState(1390);
  const [totalLives, setTotalLives] = useState(4);
  const [currentVehicle, setCurrentVehicle] = useState('cycle');
  const [collectedRewards, setCollectedRewards] = useState({
    vehicles: ['cycle'],
    wildcards: 0,
    fiftyFifty: 0,
    mystery: 0
  });
  const [claimedRewards, setClaimedRewards] = useState([0, 1, 2, 3]); // First 4 already claimed
  const [showClaimEffect, setShowClaimEffect] = useState(false);
  const [showInsufficientCoinsModal, setShowInsufficientCoinsModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [isMoving, setIsMoving] = useState(false);
  
  const rewardSound = useRef(null);
  const progressSound = useRef(null);
  const journeyRef = useRef(null);

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

  const handleRewardClick = (index, reward) => {
    // Check if it's a locked reward (future rewards)
    if (index > currentProgress) {
      setSelectedReward(reward);
      setShowInsufficientCoinsModal(true);
      return;
    }
    
    // Check if it's the current reward that can be claimed
    if (index === currentProgress) {
      claimReward(index, reward);
    }
  };

  const claimReward = (index, reward) => {
    // Check if already claimed
    if (claimedRewards.includes(index)) {
      return;
    }
    
    // Check if user has enough coins
    if (reward.cost > 0 && totalCoins < reward.cost) {
      setSelectedReward(reward);
      setShowInsufficientCoinsModal(true);
      return;
    }
    
    // Deduct cost and apply reward
    if (reward.cost > 0) {
      setTotalCoins(prev => prev - reward.cost);
    }
    
    // Play claim sound and show effect
    playSound(rewardSound);
    setShowClaimEffect(true);
    setSelectedReward(reward);
    
    // Apply reward based on type
    if (reward.type === 'coins') {
      setTotalCoins(prev => prev + reward.value);
    } else if (reward.type === 'life') {
      setTotalLives(prev => prev + reward.value);
    } else if (reward.type === 'vehicle') {
      setCurrentVehicle(reward.value);
      setCollectedRewards(prev => ({
        ...prev,
        vehicles: [...prev.vehicles, reward.value]
      }));
    } else if (reward.type === 'wildcard') {
      setCollectedRewards(prev => ({
        ...prev,
        wildcards: prev.wildcards + reward.value
      }));
    } else if (reward.type === 'fifty-fifty') {
      setCollectedRewards(prev => ({
        ...prev,
        fiftyFifty: prev.fiftyFifty + reward.value
      }));
    } else if (reward.type === 'mystery') {
      setCollectedRewards(prev => ({
        ...prev,
        mystery: prev.mystery + reward.value
      }));
    }
    
    setClaimedRewards(prev => [...prev, index]);
    
    // Hide effect and move to next
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

  const getRewardPosition = (index) => {
    const stepHeight = 100; // pixels between each reward
    return index * stepHeight;
  };

  const getAvatarPosition = () => {
    const basePosition = 30;
    const stepHeight = 100;
    return basePosition + (currentProgress * stepHeight);
  };

  return (
    <div className="rewards-page">
      <style jsx>{`
        .rewards-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #1a1a2e 0%, #2d1b69 50%, #1a1a2e 100%);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: flex;
          flex-direction: column;
        }

        .non-sticky-header {
          padding: 20px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .sticky-section {
          position: sticky;
          top: 0;
          z-index: 50;
          background: linear-gradient(180deg, #1a1a2e 0%, #2d1b69 100%);
          padding: 0 20px 20px;
        }

        .title {
          font-size: 28px;
          font-weight: bold;
          margin: 0 0 8px;
          padding-top: 20px;
        }

        .subtitle {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
        }

        .balance-section {
          padding: 16px;
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(76, 175, 80, 0.05));
          border: 1px solid rgba(76, 175, 80, 0.3);
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .balance-left {
          flex: 1;
        }

        .balance-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 4px;
        }

        .balance-value {
          font-size: 24px;
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
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .play-quiz-btn:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .stats-row {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          justify-content: center;
        }

        .stat-card {
          flex: 1;
          max-width: 150px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 500;
        }

        .rewards-inventory {
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }

        .inventory-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 8px;
          text-align: center;
        }

        .inventory-items {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .inventory-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 10px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
        }

        .scrollable-journey {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 40px;
        }

        .journey-container {
          position: relative;
          padding: 20px 20px 60px;
          min-height: ${rewards.length * 100 + 100}px;
        }

        .journey-track {
          position: relative;
          width: 100%;
          height: ${rewards.length * 100}px;
        }

        .curvy-road {
          position: absolute;
          left: 50%;
          top: 30px;
          width: 60px;
          height: calc(100% - 60px);
          transform: translateX(-50%);
        }

        .road-svg {
          width: 100%;
          height: 100%;
        }

        .road-path {
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 4;
          fill: none;
        }

        .road-progress {
          stroke: url(#roadGradient);
          stroke-width: 4;
          fill: none;
          transition: stroke-dashoffset 1s ease;
        }

        .rewards-list {
          position: relative;
          z-index: 2;
        }

        .reward-row {
          position: absolute;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .reward-item {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
        }

        .reward-item.left {
          flex-direction: row-reverse;
          transform: translateX(-60%);
        }

        .reward-item.right {
          transform: translateX(60%);
        }

        .checkpoint {
          width: 60px;
          height: 60px;
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
          cursor: pointer;
        }

        .checkpoint.claimed {
          background: linear-gradient(135deg, #4CAF50, #8BC34A);
          border-color: #4CAF50;
        }

        .checkpoint.locked {
          opacity: 0.5;
          cursor: pointer;
          background: #1a1a2e;
        }

        .lock-icon {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #333;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.8);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(102, 126, 234, 0);
          }
        }

        .checkpoint-icon {
          font-size: 22px;
          margin-bottom: 2px;
        }

        .checkpoint-value {
          font-size: 10px;
          font-weight: bold;
        }

        .reward-info {
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 12px;
          border-radius: 8px;
          min-width: 100px;
        }

        .reward-name {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
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
          gap: 2px;
        }

        .avatar-img {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          border: 2px solid #4CAF50;
        }

        .tracker-vehicle {
          font-size: 18px;
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
          padding: 32px;
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
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .claim-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
        }

        .claim-icon {
          font-size: 56px;
          margin-bottom: 16px;
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
          font-size: 28px;
          font-weight: bold;
          color: #4CAF50;
        }

        .insufficient-modal {
          background: linear-gradient(135deg, #2d1b69, #1a1a2e);
          padding: 32px;
          border-radius: 24px;
          text-align: center;
          animation: slideUp 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-width: 320px;
        }

        .insufficient-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .insufficient-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .insufficient-message {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
        }

        .modal-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .modal-btn {
          padding: 10px 20px;
          border-radius: 12px;
          border: none;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-btn-primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .modal-btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .modal-btn:hover {
          transform: translateY(-1px);
        }

        .milestone-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #FFD700;
          color: #1a1a2e;
          padding: 2px 5px;
          border-radius: 6px;
          font-size: 8px;
          font-weight: bold;
        }
      `}</style>

      <div className="non-sticky-header">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
      </div>

      <div className="sticky-section">
        <h1 className="title">Rewards</h1>
        <p className="subtitle">Claim amazing prizes</p>

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

        <div className="rewards-inventory">
          <div className="inventory-label">Your Rewards</div>
          <div className="inventory-items">
            {collectedRewards.vehicles.map(v => (
              <div key={v} className="inventory-item">
                {vehicles[v].icon} {vehicles[v].name}
              </div>
            ))}
            {collectedRewards.wildcards > 0 && (
              <div className="inventory-item">
                🃏 {collectedRewards.wildcards}x
              </div>
            )}
            {collectedRewards.fiftyFifty > 0 && (
              <div className="inventory-item">
                ➗ {collectedRewards.fiftyFifty}x
              </div>
            )}
            {collectedRewards.mystery > 0 && (
              <div className="inventory-item">
                🎁 {collectedRewards.mystery}x
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="scrollable-journey">
        <div className="journey-container" ref={journeyRef}>
          <div className="journey-track">
            <div className="curvy-road">
              <svg className="road-svg" viewBox="0 0 60 1500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4CAF50" />
                    <stop offset="100%" stopColor="#8BC34A" />
                  </linearGradient>
                </defs>
                <path
                  className="road-path"
                  d="M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"
                />
                <path
                  className="road-progress"
                  d="M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"
                  strokeDasharray="1500"
                  strokeDashoffset={1500 - (currentProgress / (rewards.length - 1)) * 1500}
                />
              </svg>
            </div>

            <div 
              className="avatar-tracker"
              style={{ 
                top: `${getAvatarPosition()}px`
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
              {rewards.map((reward, index) => {
                const isLeft = index % 2 === 0;
                const isLocked = index > currentProgress;
                const isClaimed = claimedRewards.includes(index);
                const isCurrent = index === currentProgress;
                
                return (
                  <div 
                    key={reward.id} 
                    className="reward-row"
                    data-index={index}
                    style={{
                      top: `${getRewardPosition(index)}px`
                    }}
                  >
                    <div className={`reward-item ${isLeft ? 'left' : 'right'}`}>
                      <div 
                        className={`checkpoint ${
                          isCurrent ? 'current' : 
                          isClaimed ? 'claimed' : 
                          isLocked ? 'locked' : ''
                        }`}
                        onClick={() => handleRewardClick(index, reward)}
                      >
                        <div className="checkpoint-icon">{reward.icon}</div>
                        <div className="checkpoint-value">{reward.label.split(' ')[0]}</div>
                        {reward.milestone && <div className="milestone-badge">BONUS</div>}
                        {isLocked && <div className="lock-icon">🔒</div>}
                      </div>
                      <div className="reward-info">
                        <div className="reward-name">{reward.label}</div>
                        <div className="step-label">Step {index + 1}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Claim Effect Overlay */}
      <AnimatePresence>
        {showClaimEffect && selectedReward && (
          <div className="claim-overlay">
            <div className="claim-modal">
              <div className="claim-title">WELL DONE!</div>
              <div className="claim-subtitle">Here's a reward for you.</div>
              <div className="claim-icon">{selectedReward.icon}</div>
              <div className="claim-value">
                +{selectedReward.value} {selectedReward.type === 'coins' ? 'Coins' : 
                  selectedReward.type === 'life' ? 'Lives' : selectedReward.label}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Insufficient Coins Modal */}
      <AnimatePresence>
        {showInsufficientCoinsModal && selectedReward && (
          <div className="claim-overlay" onClick={() => setShowInsufficientCoinsModal(false)}>
            <div className="insufficient-modal" onClick={(e) => e.stopPropagation()}>
              <div className="insufficient-icon">🪙</div>
              <div className="insufficient-title">Get More Coins to Unlock!</div>
              <div className="insufficient-message">
                {selectedReward.cost > 0 
                  ? `You need ${selectedReward.cost - totalCoins} more coins to claim this reward.`
                  : 'Complete previous rewards first to unlock this one.'}
              </div>
              <div className="modal-buttons">
                <button 
                  className="modal-btn modal-btn-primary"
                  onClick={() => handleNavigation('/quiz')}
                >
                  Play Quiz
                </button>
                <button 
                  className="modal-btn modal-btn-secondary"
                  onClick={() => setShowInsufficientCoinsModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RewardsJourney;