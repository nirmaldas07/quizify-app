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
      // Navigate back to profile/rewards instead of general back
      window.location.href = '/profile';
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
    { id: 12, type: 'wildcard', value: 2, icon: '🃏', label: '2x Wild Card', cost: 250 },
    { id: 13, type: 'vehicle', value: 'car', icon: '🚗', label: 'Car', cost: 500 },
    { id: 14, type: 'fifty-fifty', value: 2, icon: '➗', label: '2x 50:50', cost: 300 },
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
  const [animatingCoins, setAnimatingCoins] = useState(false);
  const [animatingLives, setAnimatingLives] = useState(false);
  const [coinChange, setCoinChange] = useState(0);
  const [lifeChange, setLifeChange] = useState(0);
  const [currentVehicle, setCurrentVehicle] = useState('cycle');
  const [collectedCards, setCollectedCards] = useState([
    { type: 'vehicle', icon: '🚴', name: 'Bicycle', count: 1 },
    { type: 'wildcard', icon: '🃏', name: 'Wild Card', count: 2 },
    { type: 'fifty-fifty', icon: '➗', name: '50:50 Helper', count: 1 }
  ]);
  const [claimedRewards, setClaimedRewards] = useState([0, 1, 2, 3]);
  const [showClaimEffect, setShowClaimEffect] = useState(false);
  const [showInsufficientCoinsModal, setShowInsufficientCoinsModal] = useState(false);
  const [showCardDetail, setShowCardDetail] = useState(null);
  const [selectedReward, setSelectedReward] = useState(null);
  const [isMoving, setIsMoving] = useState(false);
  const [flyingCard, setFlyingCard] = useState(null);
  const [cardSectionAnimating, setCardSectionAnimating] = useState(false);
  
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
    
    setClaimedRewards(prev => [...prev, index]);
    
    // After showing claim modal, handle the reward animation
    setTimeout(() => {
      setShowClaimEffect(false);
      
      // Now show flying animation based on reward type
      if (reward.type === 'coins') {
        // Animate coins flying to balance
        setCoinChange(reward.value);
        setAnimatingCoins(true);
        setTimeout(() => {
          setTotalCoins(prev => prev + reward.value);
          setTimeout(() => {
            setAnimatingCoins(false);
            setCoinChange(0);
          }, 500);
        }, 300);
      } else if (reward.type === 'life') {
        // Animate lives flying to heart
        setLifeChange(reward.value);
        setAnimatingLives(true);
        setTimeout(() => {
          setTotalLives(prev => prev + reward.value);
          setTimeout(() => {
            setAnimatingLives(false);
            setLifeChange(0);
          }, 500);
        }, 300);
      } else {
        // For cards, show flying animation
        setFlyingCard({
          icon: reward.icon,
          startX: window.innerWidth / 2,
          startY: window.innerHeight / 2
        });
        
        setTimeout(() => {
          setFlyingCard(null);
          setCardSectionAnimating(true);
          addCardToCollection(reward);
          
          if (reward.type === 'vehicle') {
            setCurrentVehicle(reward.value);
          }
          
          setTimeout(() => {
            setCardSectionAnimating(false);
          }, 500);
        }, 800);
      }
      
      // After animations, move to next reward
      setTimeout(() => {
        if (currentProgress < rewards.length - 1) {
          setIsMoving(true);
          playSound(progressSound);
          
          setTimeout(() => {
            setCurrentProgress(prev => prev + 1);
            setIsMoving(false);
            
            // Auto-scroll after avatar has moved
            setTimeout(() => {
              // Get the scrollable container
              const scrollContainer = document.querySelector('.scrollable-journey');
              const nextReward = document.querySelector(`[data-index="${currentProgress + 1}"]`);
              
              if (scrollContainer && nextReward) {
                // Get positions relative to the container
                const containerRect = scrollContainer.getBoundingClientRect();
                const elementRect = nextReward.getBoundingClientRect();
                
                // Calculate how much to scroll
                const currentScroll = scrollContainer.scrollTop;
                const elementRelativeTop = elementRect.top - containerRect.top + currentScroll;
                const containerVisibleHeight = scrollContainer.clientHeight;
                
                // Center the element in the visible area
                const targetScroll = elementRelativeTop - (containerVisibleHeight / 2) + (elementRect.height / 2);
                
                scrollContainer.scrollTo({
                  top: targetScroll,
                  behavior: 'smooth'
                });
              }
            }, 300);
          }, 1000);
        }
      }, 1200);
    }, 1500);
  };

  const addCardToCollection = (reward) => {
    setCollectedCards(prev => {
      const existing = prev.find(card => card.icon === reward.icon);
      if (existing) {
        return prev.map(card => 
          card.icon === reward.icon 
            ? { ...card, count: card.count + 1 } 
            : card
        );
      } else {
        return [...prev, { 
          type: reward.type, 
          icon: reward.icon, 
          name: reward.label,
          count: 1 
        }];
      }
    });
  };

  const getRewardPosition = (index) => {
    const stepHeight = 100;
    return 30 + (index * stepHeight);
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
          background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
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
          padding: 0 16px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .title {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 4px;
          padding-top: 16px;
          letter-spacing: -0.5px;
        }

        .subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 16px;
          font-weight: 400;
        }

        .balance-section {
          padding: 14px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .balance-left {
          flex: 1;
          position: relative;
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
          font-size: 28px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: -0.5px;
          position: relative;
        }

        .balance-value.animating {
          animation: pulse 0.5s ease;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .value-change {
          position: absolute;
          top: -20px;
          right: 0;
          font-size: 18px;
          font-weight: 600;
          color: #34C759;
          animation: slideUp 1s ease forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .earn-more {
          text-align: right;
        }

        .play-quiz-btn {
          padding: 10px 24px;
          background: #5E5CE6;
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .play-quiz-btn:hover {
          background: #6E6CF6;
          transform: scale(1.02);
        }

        .stats-row {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
          justify-content: center;
        }

        .stat-card {
          flex: 1;
          max-width: 150px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          position: relative;
        }

        .stat-card.animating {
          animation: pulse 0.5s ease;
        }

        .rewards-inventory {
          padding: 14px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          transition: all 0.3s;
        }

        .rewards-inventory.animating {
          animation: highlight 0.5s ease;
        }

        @keyframes highlight {
          0%, 100% { 
            background: rgba(255, 255, 255, 0.06);
            transform: scale(1);
          }
          50% { 
            background: rgba(94, 92, 230, 0.15);
            transform: scale(1.02);
          }
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
          gap: -20px;
          justify-content: center;
          padding: 0 20px;
          overflow-x: auto;
          overflow-y: visible;
        }

        .card-wrapper {
          position: relative;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 1;
        }

        .card-wrapper:hover {
          transform: translateY(-10px) rotate(-5deg);
          z-index: 10;
        }

        .reward-card {
          width: 52px;
          height: 68px;
          background: linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.06);
          position: relative;
        }

        .card-count-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #5E5CE6;
          color: white;
          min-width: 22px;
          height: 22px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          padding: 0 6px;
        }

        .scrollable-journey {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 40px;
          height: calc(100vh - 350px);
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
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 4;
          fill: none;
        }

        .road-progress {
          stroke: #5E5CE6;
          stroke-width: 4;
          fill: none;
          opacity: 0.8;
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
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.12);
        }

        .checkpoint.current {
          background: #5E5CE6;
          border-color: #5E5CE6;
          animation: checkpointPulse 2s infinite;
          transform: scale(1.1);
        }

        .checkpoint.claimed {
          background: #34C759;
          border-color: #34C759;
        }

        .checkpoint.locked {
          opacity: 0.4;
          background: rgba(0, 0, 0, 0.2);
        }

        @keyframes checkpointPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(94, 92, 230, 0.6);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(94, 92, 230, 0);
          }
        }

        .checkpoint-icon {
          font-size: 24px;
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
          border: 1px solid rgba(255, 255, 255, 0.08);
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
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          transition: top 1s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
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
          animation: modalSlideUp 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
          max-width: 360px;
        }

        @keyframes modalSlideUp {
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
            <div className={`balance-value ${animatingCoins ? 'animating' : ''}`}>
              {totalCoins.toLocaleString()} 🪙
              {animatingCoins && (
                <span className="value-change">+{coinChange}</span>
              )}
            </div>
          </div>
          <div className="earn-more">
            <div className="balance-label">Earn More</div>
            <button className="play-quiz-btn" onClick={() => handleNavigation('/play')}>
              Play Quiz
            </button>
          </div>
        </div>

        <div className="stats-row">
          <div className={`stat-card ${animatingLives ? 'animating' : ''}`}>
            ❤️ {totalLives}
            {animatingLives && (
              <span className="value-change">+{lifeChange}</span>
            )}
          </div>
          <div className="stat-card">
            ⭐ Level 5
          </div>
        </div>

        <div className={`rewards-inventory ${cardSectionAnimating ? 'animating' : ''}`}>
          <div className="inventory-label">Your Cards</div>
          <div className="card-deck">
            {collectedCards.map((card, index) => (
              <div 
                key={index} 
                className="card-wrapper" 
                style={{ marginLeft: index > 0 ? '-20px' : '0' }}
                onClick={() => setShowCardDetail(card)}
              >
                <div className="reward-card">
                  {card.icon}
                  {card.count > 1 && (
                    <div className="card-count-badge">{card.count}</div>
                  )}
                </div>
              </div>
            ))}
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
                    <stop offset="0%" stopColor="#5E5CE6" />
                    <stop offset="100%" stopColor="#5E5CE6" />
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
                  onClick={() => handleNavigation('/play')}
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