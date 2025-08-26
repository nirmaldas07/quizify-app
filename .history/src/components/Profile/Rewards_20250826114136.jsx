import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RewardsJourney = () => {
  // Reward configuration
  const rewards = [
    { id: 1, type: 'coins', value: 100, icon: '🪙', label: '100 Coins' },
    { id: 2, type: 'life', value: 1, icon: '❤️', label: '+1 Life' },
    { id: 3, type: 'coins', value: 200, icon: '🪙', label: '200 Coins' },
    { id: 4, type: 'wildcard', value: 1, icon: '🃏', label: 'Wild Card' },
    { id: 5, type: 'coins', value: 500, icon: '💰', label: '500 Coins', milestone: true },
    { id: 6, type: 'fifty-fifty', value: 1, icon: '➗', label: '50:50' },
    { id: 7, type: 'life', value: 2, icon: '❤️', label: '+2 Lives' },
    { id: 8, type: 'coins', value: 300, icon: '🪙', label: '300 Coins' },
    { id: 9, type: 'mystery', value: 1, icon: '🎁', label: 'Mystery Box' },
    { id: 10, type: 'coins', value: 750, icon: '💰', label: '750 Coins', milestone: true },
    { id: 11, type: 'life', value: 1, icon: '❤️', label: '+1 Life' },
    { id: 12, type: 'wildcard', value: 2, icon: '🃏', label: '2x Wild Card' },
    { id: 13, type: 'coins', value: 400, icon: '🪙', label: '400 Coins' },
    { id: 14, type: 'fifty-fifty', value: 2, icon: '➗', label: '2x 50:50' },
    { id: 15, type: 'coins', value: 1000, icon: '💎', label: '1000 Coins', milestone: true },
    { id: 16, type: 'life', value: 3, icon: '❤️', label: '+3 Lives' },
    { id: 17, type: 'coins', value: 600, icon: '🪙', label: '600 Coins' },
    { id: 18, type: 'mystery', value: 2, icon: '🎁', label: '2x Mystery' },
    { id: 19, type: 'wildcard', value: 3, icon: '🃏', label: '3x Wild Card' },
    { id: 20, type: 'coins', value: 1500, icon: '👑', label: '1500 Coins', milestone: true },
    { id: 21, type: 'life', value: 5, icon: '❤️', label: '+5 Lives' },
    { id: 22, type: 'coins', value: 800, icon: '🪙', label: '800 Coins' },
    { id: 23, type: 'fifty-fifty', value: 3, icon: '➗', label: '3x 50:50' },
    { id: 24, type: 'mystery', value: 3, icon: '🎁', label: '3x Mystery' },
    { id: 25, type: 'coins', value: 2500, icon: '🏆', label: '2500 Coins', milestone: true }
  ];

  const [currentProgress, setCurrentProgress] = useState(0);
  const [totalCoins, setTotalCoins] = useState(1240);
  const [totalLives, setTotalLives] = useState(3);
  const [claimedRewards, setClaimedRewards] = useState([]);
  const [showClaimEffect, setShowClaimEffect] = useState(null);
  const [floatingRewards, setFloatingRewards] = useState([]);
  
  const rewardSound = useRef(null);
  const progressSound = useRef(null);
  const roadRef = useRef(null);

  useEffect(() => {
    // Initialize audio refs
    rewardSound.current = new Audio('/sounds/reward.mp3');
    progressSound.current = new Audio('/sounds/reward_progress.mp3');
    
    // Handle audio errors gracefully
    rewardSound.current.addEventListener('error', () => {
      console.log('Reward sound not found');
    });
    progressSound.current.addEventListener('error', () => {
      console.log('Progress sound not found');
    });
  }, []);

  useEffect(() => {
    // Auto-scroll to current reward
    if (roadRef.current && currentProgress < rewards.length) {
      const currentElement = roadRef.current.querySelector(`[data-index="${currentProgress}"]`);
      if (currentElement) {
        currentElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }
    }
  }, [currentProgress]);

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

  const claimReward = (index, reward) => {
    if (index !== currentProgress || claimedRewards.includes(index)) {
      return;
    }

    // Play claim sound
    playSound(rewardSound);

    // Show claim effect
    setShowClaimEffect(index);
    setTimeout(() => setShowClaimEffect(null), 600);

    // Add floating reward animation
    const newFloatingReward = {
      id: Date.now(),
      icon: reward.icon,
      x: 0,
      y: 0
    };
    setFloatingRewards(prev => [...prev, newFloatingReward]);
    setTimeout(() => {
      setFloatingRewards(prev => prev.filter(r => r.id !== newFloatingReward.id));
    }, 1500);

    // Update game state
    applyReward(reward);
    setClaimedRewards(prev => [...prev, index]);

    // Progress to next reward
    setTimeout(() => {
      if (currentProgress < rewards.length - 1) {
        setCurrentProgress(prev => prev + 1);
        playSound(progressSound);
      } else {
        // Journey complete
        alert('🎉 Congratulations! You\'ve completed the entire journey! 🏆');
      }
    }, 500);
  };

  const applyReward = (reward) => {
    switch(reward.type) {
      case 'coins':
        setTotalCoins(prev => prev + reward.value);
        break;
      case 'life':
        setTotalLives(prev => prev + reward.value);
        break;
      // Add more reward types as needed
    }
  };

  const getCheckpointClass = (index) => {
    let classes = 'reward-checkpoint';
    if (claimedRewards.includes(index)) {
      classes += ' claimed';
    } else if (index === currentProgress) {
      classes += ' current';
    } else if (index > currentProgress) {
      classes += ' locked';
    }
    return classes;
  };

  const progressPercentage = (currentProgress / (rewards.length - 1)) * 100;

  return (
    <div className="journey-container">
      <style jsx>{`
        .journey-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          padding: 40px;
          min-width: 320px;
          max-width: 1200px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          margin: 0 auto;
        }

        .journey-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .journey-title {
          font-size: 32px;
          font-weight: bold;
          color: white;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .journey-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
        }

        .journey-stats {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.2);
          padding: 10px 20px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .stat-icon {
          font-size: 24px;
        }

        .stat-value {
          color: white;
          font-size: 20px;
          font-weight: bold;
        }

        .road-container {
          position: relative;
          padding: 60px 0;
          overflow-x: auto;
          overflow-y: hidden;
        }

        .road-wrapper {
          position: relative;
          min-height: 200px;
          width: max-content;
          margin: 0 auto;
        }

        .road-path {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.1) 10%, 
            rgba(255, 255, 255, 0.1) 90%, 
            transparent 100%);
          transform: translateY(-50%);
          z-index: 1;
          width: ${rewards.length * 140 - 20}px;
        }

        .road-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, #4CAF50, #8BC34A);
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 40px;
          box-shadow: 0 0 20px rgba(76, 175, 80, 0.5);
        }

        .reward-points {
          display: flex;
          position: relative;
          z-index: 2;
          padding: 0 50px;
          gap: 120px;
        }

        .reward-point {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .reward-checkpoint {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 4px solid white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .reward-checkpoint.claimed {
          background: linear-gradient(135deg, #4CAF50, #8BC34A);
          transform: scale(0.9);
          cursor: not-allowed;
        }

        .reward-checkpoint.current {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
          }
        }

        .reward-checkpoint:not(.claimed):not(.locked):hover {
          transform: scale(1.1);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .reward-checkpoint.locked {
          background: linear-gradient(135deg, #9e9e9e, #757575);
          cursor: not-allowed;
          opacity: 0.7;
        }

        .checkpoint-icon {
          font-size: 32px;
          margin-bottom: 5px;
        }

        .checkpoint-value {
          font-size: 16px;
          font-weight: bold;
          color: white;
        }

        .checkpoint-label {
          font-size: 14px;
          color: white;
          font-weight: 600;
          text-align: center;
          margin-top: 5px;
        }

        .claim-effect {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent);
          animation: claimBurst 0.6s ease-out;
          pointer-events: none;
        }

        @keyframes claimBurst {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        .floating-reward {
          position: fixed;
          font-size: 40px;
          animation: floatUp 1.5s ease-out forwards;
          pointer-events: none;
          z-index: 1000;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
          }
          100% {
            transform: translateY(-80px) scale(0.8);
            opacity: 0;
          }
        }

        .progress-indicator {
          text-align: center;
          margin-top: 30px;
          color: white;
        }

        .progress-bar-container {
          background: rgba(255, 255, 255, 0.2);
          height: 10px;
          border-radius: 10px;
          overflow: hidden;
          margin-top: 10px;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #4CAF50, #8BC34A);
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 10px;
        }

        .milestone-badge {
          position: absolute;
          top: -15px;
          right: -15px;
          background: #FFD700;
          color: #333;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 11px;
          font-weight: bold;
          transform: rotate(15deg);
          box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
        }

        @media (max-width: 768px) {
          .journey-container {
            padding: 20px;
          }
          
          .reward-points {
            gap: 80px;
            padding: 0 30px;
          }
          
          .reward-checkpoint {
            width: 80px;
            height: 80px;
          }
          
          .checkpoint-icon {
            font-size: 24px;
          }

          .checkpoint-value {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="journey-header">
        <h1 className="journey-title">🎯 Your Reward Journey</h1>
        <p className="journey-subtitle">Claim rewards as you progress!</p>
      </div>

      <div className="journey-stats">
        <div className="stat-item">
          <span className="stat-icon">🪙</span>
          <span className="stat-value">{totalCoins.toLocaleString()}</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">❤️</span>
          <span className="stat-value">{totalLives}</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">⭐</span>
          <span className="stat-value">Level 5</span>
        </div>
      </div>

      <div className="road-container" ref={roadRef}>
        <div className="road-wrapper">
          <div className="road-path">
            <div 
              className="road-progress" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="reward-points">
            {rewards.map((reward, index) => (
              <div 
                key={reward.id} 
                className="reward-point" 
                data-index={index}
              >
                <div 
                  className={getCheckpointClass(index)}
                  onClick={() => claimReward(index, reward)}
                >
                  <div className="checkpoint-icon">{reward.icon}</div>
                  <div className="checkpoint-value">{reward.label.split(' ')[0]}</div>
                  {reward.milestone && <div className="milestone-badge">BONUS!</div>}
                  {showClaimEffect === index && <div className="claim-effect" />}
                </div>
                <div className="checkpoint-label">Step {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="progress-indicator">
        <p>Journey Progress: {currentProgress}/{rewards.length - 1}</p>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Floating rewards animations */}
      <AnimatePresence>
        {floatingRewards.map(reward => (
          <motion.div
            key={reward.id}
            className="floating-reward"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -100 }}
            style={{
              position: 'fixed',
              left: '50%',
              top: '50%',
            }}
          >
            {reward.icon}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RewardsJourney;