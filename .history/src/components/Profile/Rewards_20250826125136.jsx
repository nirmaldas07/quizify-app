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
    { id: 2, type: 'life', value: 1, icon: '❤️', label: '1 Life', cost: 50 },
    { id: 3, type: 'coins', value: 200, icon: '🪙', label: '200 Coins', cost: 0 },
    { id: 4, type: 'wildcard', value: 1, icon: '🃏', label: 'Wild Card', cost: 100 },
    { id: 5, type: 'coins', value: 500, icon: '💰', label: '500 Coins', cost: 0, milestone: true },
    { id: 6, type: 'fifty-fifty', value: 1, icon: '➗', label: '50:50', cost: 150 },
    { id: 7, type: 'life', value: 2, icon: '❤️', label: '2 Lives', cost: 100 },
    { id: 8, type: 'vehicle', value: 'bike', icon: '🏍️', label: 'Motorcycle', cost: 300 },
    { id: 9, type: 'mystery', value: 1, icon: '🎁', label: 'Mystery Box', cost: 200 },
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
    { type: 'vehicle', icon: '🚴', count: 1, name: 'Bicycle' },
    { type: 'wildcard', icon: '🃏', count: 2, name: 'Wild Card' },
    { type: 'fifty-fifty', icon: '➗', count: 1, name: '50:50 Helper' }
  ]);
  const [claimedRewards, setClaimedRewards] = useState([0, 1, 2, 3]);
  const [showClaimEffect, setShowClaimEffect] = useState(false);
  const [showInsufficientCoinsModal, setShowInsufficientCoinsModal] = useState(false);
  const [showCardDetail, setShowCardDetail] = useState(null);
  const [selectedReward, setSelectedReward] = useState(null);
  const [isMoving, setIsMoving] = useState(false);
  const [flyingCard, setFlyingCard] = useState(null);
  
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
    
    // Show flying card animation for non-coin/life rewards
    if (reward.type !== 'coins' && reward.type !== 'life') {
      setFlyingCard({
        icon: reward.icon,
        startX: window.innerWidth / 2,
        startY: window.innerHeight / 2
      });
      
      setTimeout(() => {
        setFlyingCard(null);
        addCardToCollection(reward.icon, reward.type, reward.label);
      }, 800);
    }
    
    // Apply reward
    if (reward.type === 'coins') {
      setTotalCoins(prev => prev + reward.value);
    } else if (reward.type === 'life') {
      setTotalLives(prev => prev + reward.value);
    } else if (reward.type === 'vehicle') {
      setCurrentVehicle(reward.value);
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

  const addCardToCollection = (icon, type, name) => {
    setCollectedCards(prev => {
      const existing = prev.find(card => card.icon === icon);
      if (existing) {
        return prev.map(card => 
          card.icon === icon ? { ...card, count: card.count + 1 } : card
        );
      } else {
        return [...prev, { type, icon, count: 1, name }];
      }
    });
  };

  const getRewardPosition = (index) => {
    return 30 + (index * 100);
  };

  // Create S-curve path for avatar movement
  const getAvatarPosition = (progress) => {
    const y = getRewardPosition(progress);
    const amplitude = 35;
    const x = 50 + amplitude * Math.sin(progress * 0.5);
    return { x, y };
  };

  const avatarPos = getAvatarPosition(currentProgress);

  return (
    <div className="rewards-page">
      <style jsx>{`
        .rewards-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif;
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
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          color: white;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .sticky-section {
          position: sticky;
          top: 0;
          z-index: 50;
          background: linear-gradient(180deg, rgba(26, 26, 46, 0.98) 0%, rgba(22, 33, 62, 0.98) 100%);
          backdrop-filter: blur(30px);
          padding: 0 20px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .title {
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 6px;
          padding-top: 20px;
          letter-spacing: -0.5px;
        }

        .subtitle {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 24px;
          font-weight: 400;
        }

        .balance-section {
          padding: 18px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
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
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-weight: 600;
        }

        .balance-value {
          font-size: 32px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          letter-spacing: -0.5px;
        }

        .earn-more {
          text-align: right;
        }

        .play-quiz-btn {
          padding: 12px 28px;
          background: #5E5CE6;
          border: none;
          border-radius: 14px;
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.3px;
        }

        .play-quiz-btn:hover {
          background: #6E6CF6;
          transform: scale(1.02);
        }

        .play-quiz-btn:active {
          transform: scale(0.98);
        }

        .stats-row {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          justify-content: center;
        }

        .stat-card {
          flex: 1;
          max-width: 160px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 17px;
          font-weight: 600;
        }

        .rewards-inventory {
          padding: 16px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }

        .inventory-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 14px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-weight: 600;
        }

        .card-deck {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .card-stack {
          position: relative;
          width: 52px;
          height: 68px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .card-stack:hover {
          transform: scale(1.05);
        }

        .card-stack:active {
          transform: scale(0.95);
        }

        .reward-card {
          position: absolute;
          width: 52px;
          height: 68px;
          background: linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .card-count {
          position: absolute;
          top: -6px;
          right: -6px;
          background: #5E5CE6;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
        }

        .scrollable-journey {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 40px;
        }

        .journey-container {
          position: relative;
          padding: 40px 20px;
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
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 44;
          fill: none;
          stroke-linecap: round;
        }

        .road-surface {
          stroke: rgba(255, 255, 255, 0.04);
          stroke-width: 40;
          fill: none;
          stroke-linecap: round;
        }

        .road-centerline {
          stroke: rgba(255, 255, 255, 0.15);
          stroke-width: 2;
          stroke-dasharray: 12, 12;
          fill: none;
        }

        .road-progress {
          stroke: #5E5CE6;
          stroke-width: 3;
          fill: none;
          stroke-linecap: round;
          opacity: 0.8;
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
        }

        .checkpoint {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.12);
        }

        .checkpoint.current {
          background: #5E5CE6;
          border-color: #5E5CE6;
          animation: pulse 2s infinite;
          transform: scale(1.1);
          box-shadow: 0 0 24px rgba(94, 92, 230, 0.5);
        }

        .checkpoint.claimed {
          background: #34C759;
          border-color: #34C759;
        }

        .checkpoint.locked {
          opacity: 0.4;
          background: rgba(0, 0, 0, 0.2);
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(94, 92, 230, 0.6);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(94, 92, 230, 0);
          }
        }

        .checkpoint-icon {
          font-size: 26px;
        }

        .checkpoint-value {
          font-size: 11px;
          font-weight: 600;
          margin-top: 2px;
        }

        .reward-info {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          padding: 10px 14px;
          border-radius: 12px;
          margin-left: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .reward-info.left {
          margin-left: 0;
          margin-right: 12px;
        }

        .reward-name {
          font-size: 13px;
          color: white;
          font-weight: 500;
        }

        .step-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 2px;
        }

        .avatar-tracker {
          position: absolute;
          z-index: 10;
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          transform: translate(-50%, -50%);
        }

        .avatar-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          border: 3px solid #5E5CE6;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .tracker-vehicle {
          font-size: 22px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .lock-icon {
          position: absolute;
          top: -6px;
          right: -6px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
        }

        .milestone-badge {
          position: absolute;
          top: -8px;
          left: -8px;
          background: linear-gradient(135deg, #FFD60A, #FFB800);
          color: black;
          padding: 3px 8px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(255, 214, 10, 0.4);
        }

        .flying-card {
          position: fixed;
          font-size: 40px;
          z-index: 1000;
          pointer-events: none;
          animation: flyToCards 0.8s ease-out forwards;
        }

        @keyframes flyToCards {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(50vw - var(--startX)), calc(-50vh + 200px)) scale(0.5);
            opacity: 0;
          }
        }

        .claim-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }

        .modal {
          background: rgba(30, 30, 46, 0.98);
          backdrop-filter: blur(30px);
          padding: 32px;
          border-radius: 20px;
          text-align: center;
          animation: slideUp 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
          max-width: 360px;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .modal-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }

        .modal-subtitle {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 24px;
        }

        .modal-value {
          font-size: 32px;
          font-weight: 700;
          color: #34C759;
          letter-spacing: -0.5px;
        }

        .modal-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 24px;
        }

        .modal-btn {
          padding: 12px 24px;
          border-radius: 12px;
          border: none;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .modal-btn-primary {
          background: #5E5CE6;
          color: white;
        }

        .modal-btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }

        .modal-btn:hover {
          transform: scale(1.02);
        }

        .modal-btn:active {
          transform: scale(0.98);
        }

        .card-detail-name {
          font-size: 18px;
          font-weight: 600;
          margin-top: 12px;
          margin-bottom: 8px;
        }

        .card-detail-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
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
              <div key={index} className="card-stack" onClick={() => setShowCardDetail(card)}>
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
                    <stop offset="0%" stopColor="#5E5CE6" />
                    <stop offset="100%" stopColor="#5E5CE6" />
                  </linearGradient>
                </defs>
                
                {/* Create S-curve path */}
                <path 
                  className="road-base"
                  d={`M 50 30 ${rewards.map((_, i) => {
                    const y = getRewardPosition(i);
                    const x = 50 + 35 * Math.sin(i * 0.5);
                    return `L ${x} ${y}`;
                  }).join(' ')}`}
                />
                <path 
                  className="road-surface"
                  d={`M 50 30 ${rewards.map((_, i) => {
                    const y = getRewardPosition(i);
                    const x = 50 + 35 * Math.sin(i * 0.5);
                    return `L ${x} ${y}`;
                  }).join(' ')}`}
                />
                <path 
                  className="road-centerline"
                  d={`M 50 30 ${rewards.map((_, i) => {
                    const y = getRewardPosition(i);
                    const x = 50 + 35 * Math.sin(i * 0.5);
                    return `L ${x} ${y}`;
                  }).join(' ')}`}
                />
                <path
                  className="road-progress"
                  d={`M 50 30 ${rewards.map((_, i) => {
                    const y = getRewardPosition(i);
                    const x = 50 + 35 * Math.sin(i * 0.5);
                    return `L ${x} ${y}`;
                  }).join(' ')}`}
                  strokeDasharray="2000"
                  strokeDashoffset={2000 - (currentProgress / (rewards.length - 1)) * 2000}
                />
              </svg>
            </div>

            <div 
              className="avatar-tracker"
              style={{ 
                left: `${avatarPos.x}%`,
                top: `${avatarPos.y}px`
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
                const y = getRewardPosition(index);
                const x = 50 + 35 * Math.sin(index * 0.5);
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
                      left: isLeft ? `${x - 35}%` : `${x + 35}%`,
                      top: `${y}px`,
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

      {/* Flying card animation */}
      {flyingCard && (
        <div 
          className="flying-card"
          style={{
            left: `${flyingCard.startX}px`,
            top: `${flyingCard.startY}px`,
            '--startX': `${flyingCard.startX}px`
          }}
        >
          {flyingCard.icon}
        </div>
      )}

      {/* Card detail modal */}
      <AnimatePresence>
        {showCardDetail && (
          <div className="claim-overlay" onClick={() => setShowCardDetail(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-icon">{showCardDetail.icon}</div>
              <div className="card-detail-name">{showCardDetail.name}</div>
              <div className="card-detail-desc">
                You have {showCardDetail.count} of these cards
              </div>
              <div className="modal-buttons">
                <button 
                  className="modal-btn modal-btn-secondary"
                  onClick={() => setShowCardDetail(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Claim effect modal */}
      <AnimatePresence>
        {showClaimEffect && selectedReward && (
          <div className="claim-overlay">
            <div className="modal">
              <div className="modal-title">WELL DONE!</div>
              <div className="modal-subtitle">Here's a reward for you.</div>
              <div className="modal-icon">{selectedReward.icon}</div>
              <div className="modal-value">
                +{selectedReward.value} {selectedReward.type === 'coins' ? 'Coins' : 
                  selectedReward.type === 'life' ? 'Lives' : selectedReward.label}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Insufficient coins modal */}
      <AnimatePresence>
        {showInsufficientCoinsModal && selectedReward && (
          <div className="claim-overlay" onClick={() => setShowInsufficientCoinsModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-icon">🪙</div>
              <div className="modal-title">Need More Coins</div>
              <div className="modal-subtitle">
                {selectedReward.cost > 0 
                  ? `You need ${selectedReward.cost - totalCoins} more coins`
                  : 'Complete previous rewards first'}
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