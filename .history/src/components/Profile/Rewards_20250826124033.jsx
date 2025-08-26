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
    { id: 4, type: 'wildcard', value: 1, icon: '🃏', label: 'Wild Card', cost: 100 },
    { id: 5, type: 'coins', value: 500, icon: '💰', label: '500 Coins', cost: 0, milestone: true },
    { id: 6, type: 'fifty-fifty', value: 1, icon: '➗', label: '50:50', cost: 150 },
    { id: 7, type: 'life', value: 2, icon: '❤️', label: '2 Lives', cost: 100 },
    { id: 8, type: 'vehicle', value: 'bike', icon: '🏍️', label: 'Bike', cost: 300 },
    { id: 9, type: 'mystery', value: 1, icon: '🎁', label: 'Mystery', cost: 200 },
    { id: 10, type: 'coins', value: 750, icon: '💰', label: '750 Coins', cost: 0, milestone: true },
    { id: 11, type: 'life', value: 3, icon: '❤️', label: '3 Lives', cost: 150 },
    { id: 12, type: 'wildcard', value: 1, icon: '🃏', label: 'Wild Card', cost: 250 },
    { id: 13, type: 'vehicle', value: 'car', icon: '🚗', label: 'Car', cost: 500 },
    { id: 14, type: 'fifty-fifty', value: 1, icon: '➗', label: '50:50', cost: 300 },
    { id: 15, type: 'coins', value: 1000, icon: '💎', label: '1000 Coins', cost: 0, milestone: true },
  ];

  const vehicles = {
    cycle: { icon: '🚴', name: 'Bicycle' },
    bike: { icon: '🏍️', name: 'Motorcycle' },
    car: { icon: '🚗', name: 'Car' }
  };

  const [currentProgress, setCurrentProgress] = useState(4);
  const [totalCoins, setTotalCoins] = useState(1390);
  const [totalLives, setTotalLives] = useState(4);
  const [currentVehicle, setCurrentVehicle] = useState('cycle');
  const [collectedCards, setCollectedCards] = useState([
    { type: 'vehicle', icon: '🚴', count: 1 },
    { type: 'wildcard', icon: '🃏', count: 2 },
    { type: 'fifty-fifty', icon: '➗', count: 1 }
  ]);
  const [claimedRewards, setClaimedRewards] = useState([0, 1, 2, 3]);
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
    if (index > currentProgress) {
      setSelectedReward(reward);
      setShowInsufficientCoinsModal(true);
      return;
    }
    
    if (index === currentProgress) {
      claimReward(index, reward);
    }
  };

  const claimReward = (index, reward) => {
    if (claimedRewards.includes(index)) {
      return;
    }
    
    if (reward.cost > 0 && totalCoins < reward.cost) {
      setSelectedReward(reward);
      setShowInsufficientCoinsModal(true);
      return;
    }
    
    if (reward.cost > 0) {
      setTotalCoins(prev => prev - reward.cost);
    }
    
    playSound(rewardSound);
    setShowClaimEffect(true);
    setSelectedReward(reward);
    
    // Apply reward
    if (reward.type === 'coins') {
      setTotalCoins(prev => prev + reward.value);
    } else if (reward.type === 'life') {
      setTotalLives(prev => prev + reward.value);
    } else if (reward.type === 'vehicle') {
      setCurrentVehicle(reward.value);
      addCardToCollection(reward.icon, 'vehicle');
    } else if (reward.type === 'wildcard') {
      addCardToCollection(reward.icon, 'wildcard');
    } else if (reward.type === 'fifty-fifty') {
      addCardToCollection(reward.icon, 'fifty-fifty');
    } else if (reward.type === 'mystery') {
      addCardToCollection(reward.icon, 'mystery');
    }
    
    setClaimedRewards(prev => [...prev, index]);
    
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

  const addCardToCollection = (icon, type) => {
    setCollectedCards(prev => {
      const existing = prev.find(card => card.icon === icon);
      if (existing) {
        return prev.map(card => 
          card.icon === icon ? { ...card, count: card.count + 1 } : card
        );
      } else {
        return [...prev, { type, icon, count: 1 }];
      }
    });
  };

  const getRewardPosition = (index) => {
    const stepHeight = 100;
    return 30 + (index * stepHeight);
  };

  // Create S-curve path points for the road
  const createRoadPath = () => {
    const points = [];
    const amplitude = 35;
    const frequency = 0.5;
    
    for (let i = 0; i <= rewards.length - 1; i++) {
      const y = getRewardPosition(i);
      const x = 30 + amplitude * Math.sin(frequency * i);
      points.push({ x, y });
    }
    
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const controlY = (prev.y + curr.y) / 2;
      path += ` Q ${prev.x} ${controlY}, ${curr.x} ${curr.y}`;
    }
    
    return { path, points };
  };

  const { path: roadPath, points: roadPoints } = createRoadPath();
  const currentPoint = roadPoints[Math.min(currentProgress, roadPoints.length - 1)];

  return (
    <div className="rewards-page">
      <style jsx>{`
        .rewards-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: flex;
          flex-direction: column;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .non-sticky-header {
          padding: 20px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .sticky-section {
          position: sticky;
          top: 0;
          z-index: 50;
          background: linear-gradient(180deg, rgba(26, 26, 46, 0.95) 0%, rgba(45, 27, 105, 0.95) 100%);
          backdrop-filter: blur(20px);
          padding: 0 20px 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .title {
          font-size: 28px;
          font-weight: bold;
          margin: 0 0 8px;
          padding-top: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .subtitle {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
        }

        .balance-section {
          padding: 16px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .balance-left {
          flex: 1;
        }

        .balance-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .balance-value {
          font-size: 28px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 8px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .coin-icon {
          font-size: 24px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .earn-more {
          text-align: right;
        }

        .play-quiz-btn {
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 16px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .play-quiz-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
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
          padding: 12px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .rewards-inventory {
          padding: 12px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .inventory-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 12px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .card-deck {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
          padding: 0 8px;
        }

        .card-stack {
          position: relative;
          width: 48px;
          height: 64px;
        }

        .reward-card {
          position: absolute;
          width: 48px;
          height: 64px;
          background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #ff4757;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: bold;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .scrollable-journey {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 40px;
          background: rgba(0, 0, 0, 0.1);
        }

        .journey-container {
          position: relative;
          padding: 20px;
          min-height: ${rewards.length * 100 + 200}px;
        }

        .journey-track {
          position: relative;
          width: 100%;
          height: ${rewards.length * 100 + 100}px;
        }

        .road-container {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .road-svg {
          width: 100%;
          height: 100%;
        }

        .road-base {
          stroke: rgba(0, 0, 0, 0.3);
          stroke-width: 40;
          fill: none;
          stroke-linecap: round;
        }

        .road-surface {
          stroke: #404040;
          stroke-width: 36;
          fill: none;
          stroke-linecap: round;
        }

        .road-centerline {
          stroke: #ffd700;
          stroke-width: 2;
          stroke-dasharray: 10, 10;
          fill: none;
        }

        .road-progress {
          stroke: url(#roadGradient);
          stroke-width: 36;
          fill: none;
          stroke-linecap: round;
          opacity: 0.3;
          transition: stroke-dashoffset 1s ease;
        }

        .rewards-list {
          position: relative;
          z-index: 2;
        }

        .reward-row {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .checkpoint {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          background: #2d2d3d;
          border: 3px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .checkpoint.current {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-color: #667eea;
          animation: pulse 2s infinite;
          transform: scale(1.15);
          box-shadow: 0 0 30px rgba(102, 126, 234, 0.6);
        }

        .checkpoint.claimed {
          background: linear-gradient(135deg, #4CAF50, #8BC34A);
          border-color: #4CAF50;
        }

        .checkpoint.locked {
          opacity: 0.6;
          background: rgba(0, 0, 0, 0.4);
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
        }

        .checkpoint-value {
          font-size: 10px;
          font-weight: bold;
          margin-top: 2px;
        }

        .reward-info {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          padding: 8px 12px;
          border-radius: 12px;
          margin-left: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .reward-info.left {
          margin-left: 0;
          margin-right: 12px;
        }

        .reward-name {
          font-size: 12px;
          color: white;
          font-weight: 500;
        }

        .step-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.6);
        }

        .avatar-tracker {
          position: absolute;
          z-index: 10;
          transition: all 1s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          transform: translate(-50%, -50%);
        }

        .avatar-img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: white;
          border: 3px solid #4CAF50;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .tracker-vehicle {
          font-size: 20px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .lock-icon {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #ff4757;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .milestone-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #1a1a2e;
          padding: 2px 6px;
          border-radius: 8px;
          font-size: 9px;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(255, 215, 0, 0.5);
        }

        .claim-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          backdrop-filter: blur(5px);
        }

        .claim-modal {
          background: linear-gradient(135deg, #2d1b69, #1a1a2e);
          padding: 32px;
          border-radius: 24px;
          text-align: center;
          animation: slideUp 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
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
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 320px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
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
              {totalCoins.toLocaleString()} <span className="coin-icon">🪙</span>
            </div>
          </div>
          <div className="earn-more">
            <div className="balance-label">Earn More</div>
            <button className="play-quiz-btn" onClick={() => handleNavigation('/')}>
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
          <div className="card-deck">
            {collectedCards.map((card, index) => (
              <div key={index} className="card-stack">
                {[...Array(Math.min(card.count, 3))].map((_, i) => (
                  <div 
                    key={i} 
                    className="reward-card" 
                    style={{
                      left: `${i * 2}px`,
                      top: `${i * 2}px`,
                      zIndex: card.count - i
                    }}
                  >
                    {card.icon}
                  </div>
                ))}
                {card.count > 1 && (
                  <div className="card-count">{card.count}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scrollable-journey">
        <div className="journey-container" ref={journeyRef}>
          <div className="journey-track">
            <div className="road-container">
              <svg className="road-svg" viewBox="0 0 100 ${rewards.length * 100 + 100}">
                <defs>
                  <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4CAF50" />
                    <stop offset="100%" stopColor="#8BC34A" />
                  </linearGradient>
                </defs>
                
                <path className="road-base" d={roadPath} />
                <path className="road-surface" d={roadPath} />
                <path className="road-centerline" d={roadPath} />
                
                <path
                  className="road-progress"
                  d={roadPath}
                  strokeDasharray="2000"
                  strokeDashoffset={2000 - (currentProgress / (rewards.length - 1)) * 2000}
                />
              </svg>
            </div>

            <div 
              className="avatar-tracker"
              style={{ 
                left: `${currentPoint.x}%`,
                top: `${currentPoint.y}px`
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
                const point = roadPoints[index];
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
                      left: isLeft ? `${point.x - 25}%` : `${point.x + 25}%`,
                      top: `${point.y}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
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
                    <div className={`reward-info ${!isLeft ? 'left' : ''}`}>
                      <div className="reward-name">{reward.label}</div>
                      <div className="step-label">Step {index + 1}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

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

      <AnimatePresence>
        {showInsufficientCoinsModal && selectedReward && (
          <div className="claim-overlay" onClick={() => setShowInsufficientCoinsModal(false)}>
            <div className="insufficient-modal" onClick={(e) => e.stopPropagation()}>
              <div style={{fontSize: '48px', marginBottom: '16px'}}>🪙</div>
              <div style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '8px'}}>
                Get More Coins to Unlock!
              </div>
              <div style={{fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '20px'}}>
                {selectedReward.cost > 0 
                  ? `You need ${selectedReward.cost - totalCoins} more coins to claim this reward.`
                  : 'Complete previous rewards first to unlock this one.'}
              </div>
              <div className="modal-buttons">
                <button 
                  className="modal-btn modal-btn-primary"
                  onClick={() => handleNavigation('/')}
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