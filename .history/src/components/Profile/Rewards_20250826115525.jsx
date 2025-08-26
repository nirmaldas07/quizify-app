import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RewardsJourney = () => {
  // Handle navigation - works with both Next.js routing systems
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
  
  // Reward configuration with costs
  const rewards = [
    { id: 1, type: 'coins', value: 100, icon: '🪙', label: '100 Coins', cost: 0 },
    { id: 2, type: 'life', value: 1, icon: '❤️', label: '+1 Life', cost: 50 },
    { id: 3, type: 'coins', value: 200, icon: '🪙', label: '200 Coins', cost: 0 },
    { id: 4, type: 'wildcard', value: 1, icon: '🃏', label: 'Wild Card', cost: 100 },
    { id: 5, type: 'vehicle', value: 'bike', icon: '🏍️', label: 'Motorcycle', cost: 300, milestone: true },
    { id: 6, type: 'fifty-fifty', value: 1, icon: '➗', label: '50:50', cost: 150 },
    { id: 7, type: 'life', value: 2, icon: '❤️', label: '+2 Lives', cost: 100 },
    { id: 8, type: 'coins', value: 500, icon: '💰', label: '500 Coins', cost: 0 },
    { id: 9, type: 'mystery', value: 1, icon: '🎁', label: 'Mystery Box', cost: 200 },
    { id: 10, type: 'vehicle', value: 'car', icon: '🚗', label: 'Sports Car', cost: 500, milestone: true },
    { id: 11, type: 'life', value: 3, icon: '❤️', label: '+3 Lives', cost: 150 },
    { id: 12, type: 'wildcard', value: 2, icon: '🃏', label: '2x Wild Card', cost: 250 },
    { id: 13, type: 'coins', value: 750, icon: '🪙', label: '750 Coins', cost: 0 },
    { id: 14, type: 'fifty-fifty', value: 2, icon: '➗', label: '2x 50:50', cost: 300 },
    { id: 15, type: 'vehicle', value: 'supercar', icon: '🏎️', label: 'Super Car', cost: 1000, milestone: true },
    { id: 16, type: 'life', value: 5, icon: '❤️', label: '+5 Lives', cost: 250 },
    { id: 17, type: 'coins', value: 1000, icon: '💎', label: '1000 Coins', cost: 0 },
    { id: 18, type: 'mystery', value: 2, icon: '🎁', label: '2x Mystery', cost: 400 },
    { id: 19, type: 'wildcard', value: 3, icon: '🃏', label: '3x Wild Card', cost: 500 },
    { id: 20, type: 'vehicle', value: 'helicopter', icon: '🚁', label: 'Helicopter', cost: 2000, milestone: true },
    { id: 21, type: 'life', value: 10, icon: '❤️', label: '+10 Lives', cost: 500 },
    { id: 22, type: 'coins', value: 1500, icon: '👑', label: '1500 Coins', cost: 0 },
    { id: 23, type: 'fifty-fifty', value: 5, icon: '➗', label: '5x 50:50', cost: 600 },
    { id: 24, type: 'mystery', value: 5, icon: '🎁', label: '5x Mystery', cost: 800 },
    { id: 25, type: 'coins', value: 5000, icon: '🏆', label: '5000 Coins', cost: 0, milestone: true }
  ];

  const vehicles = {
    cycle: { icon: '🚴', name: 'Bicycle', speed: 1 },
    bike: { icon: '🏍️', name: 'Motorcycle', speed: 1.5 },
    car: { icon: '🚗', name: 'Sports Car', speed: 2 },
    supercar: { icon: '🏎️', name: 'Super Car', speed: 2.5 },
    helicopter: { icon: '🚁', name: 'Helicopter', speed: 3 }
  };

  const [currentProgress, setCurrentProgress] = useState(0);
  const [totalCoins, setTotalCoins] = useState(1240);
  const [totalLives, setTotalLives] = useState(3);
  const [currentVehicle, setCurrentVehicle] = useState('cycle');
  const [claimedRewards, setClaimedRewards] = useState([]);
  const [showClaimEffect, setShowClaimEffect] = useState(null);
  const [floatingRewards, setFloatingRewards] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const [showInsufficientCoinsModal, setShowInsufficientCoinsModal] = useState(false);
  const [requiredCoins, setRequiredCoins] = useState(0);
  
  const rewardSound = useRef(null);
  const progressSound = useRef(null);
  const coinSound = useRef(null);
  const lifeSound = useRef(null);
  const roadRef = useRef(null);

  useEffect(() => {
    // Initialize audio refs
    rewardSound.current = new Audio('/sounds/reward.mp3');
    progressSound.current = new Audio('/sounds/reward_progress.mp3');
    coinSound.current = new Audio('/sounds/coin.mp3');
    lifeSound.current = new Audio('/sounds/life.mp3');
    
    // Handle audio errors gracefully
    [rewardSound, progressSound, coinSound, lifeSound].forEach(ref => {
      ref.current?.addEventListener('error', () => {
        console.log('Sound file not found');
      });
    });
  }, []);

  useEffect(() => {
    // Auto-scroll to current reward
    if (roadRef.current && currentProgress < rewards.length) {
      const currentElement = roadRef.current.querySelector(`[data-index="${currentProgress}"]`);
      if (currentElement) {
        setTimeout(() => {
          currentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
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

    // Check if user has enough coins
    if (reward.cost > 0 && totalCoins < reward.cost) {
      setRequiredCoins(reward.cost - totalCoins);
      setShowInsufficientCoinsModal(true);
      return;
    }

    // Deduct cost if any
    if (reward.cost > 0) {
      setTotalCoins(prev => prev - reward.cost);
    }

    // Play claim sound
    playSound(rewardSound);

    // Show claim effect
    setShowClaimEffect(index);
    setTimeout(() => setShowClaimEffect(null), 600);

    // Add floating reward animation towards coin/life counter
    const newFloatingReward = {
      id: Date.now(),
      icon: reward.icon,
      type: reward.type,
      value: reward.value
    };
    setFloatingRewards(prev => [...prev, newFloatingReward]);
    
    // Play specific sound based on reward type
    if (reward.type === 'coins') {
      playSound(coinSound);
    } else if (reward.type === 'life') {
      playSound(lifeSound);
    }

    // Apply reward after animation
    setTimeout(() => {
      applyReward(reward);
      setFloatingRewards(prev => prev.filter(r => r.id !== newFloatingReward.id));
    }, 1000);

    setClaimedRewards(prev => [...prev, index]);

    // Progress to next reward with vehicle animation
    setTimeout(() => {
      if (currentProgress < rewards.length - 1) {
        setIsMoving(true);
        playSound(progressSound);
        
        // Duration based on vehicle speed
        const moveDuration = 2000 / vehicles[currentVehicle].speed;
        
        setTimeout(() => {
          setCurrentProgress(prev => prev + 1);
          setIsMoving(false);
        }, moveDuration);
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
      case 'vehicle':
        setCurrentVehicle(reward.value);
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

  // Calculate path position for avatar
  const getAvatarPosition = () => {
    if (currentProgress >= rewards.length) return { top: '100%', left: '50%' };
    
    const index = currentProgress;
    const isEven = Math.floor(index / 5) % 2 === 0;
    const posInRow = index % 5;
    const row = Math.floor(index / 5);
    
    const topPosition = (index / (rewards.length - 1)) * 100;
    let leftPosition = 50;
    
    if (row % 2 === 0) {
      leftPosition = 20 + (posInRow * 15);
    } else {
      leftPosition = 80 - (posInRow * 15);
    }
    
    return { 
      top: `${topPosition}%`, 
      left: `${leftPosition}%`,
      transform: isMoving ? 'scale(1.2)' : 'scale(1)'
    };
  };

  return (
    <>
      <div className="journey-page">
        <style jsx>{`
          .journey-page {
            background: linear-gradient(135deg, #1a1a2e 0%, #2d1b69 100%);
            min-height: 100vh;
            padding: 20px;
          }

          .back-button {
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            cursor: pointer;
            font-size: 16px;
            margin-bottom: 20px;
            transition: all 0.3s;
          }

          .back-button:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          .journey-container {
            max-width: 800px;
            margin: 0 auto;
          }

          .journey-header {
            text-align: center;
            margin-bottom: 30px;
          }

          .journey-title {
            font-size: 36px;
            font-weight: bold;
            color: white;
            margin-bottom: 10px;
          }

          .journey-subtitle {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.7);
          }

          .balance-card {
            background: linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(139, 195, 74, 0.2));
            border: 1px solid rgba(76, 175, 80, 0.3);
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .balance-info {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .balance-label {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
          }

          .balance-value {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 32px;
            font-weight: bold;
            color: white;
          }

          .earn-more-btn {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 12px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s;
          }

          .earn-more-btn:hover {
            background: rgba(255, 255, 255, 0.3);
          }

          .stats-row {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
            justify-content: center;
          }

          .stat-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px 25px;
            border-radius: 15px;
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

          .vehicle-selector {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 15px;
            margin-bottom: 30px;
            text-align: center;
          }

          .vehicle-label {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            margin-bottom: 10px;
          }

          .current-vehicle {
            font-size: 40px;
            margin-bottom: 5px;
          }

          .vehicle-name {
            color: white;
            font-weight: bold;
          }

          .road-container {
            position: relative;
            padding: 40px;
            overflow-y: auto;
            max-height: 600px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 20px;
          }

          .road-wrapper {
            position: relative;
            min-height: ${rewards.length * 80}px;
            width: 100%;
          }

          .curvy-road {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 100%;
            background: linear-gradient(180deg,
              transparent 0%,
              rgba(255, 255, 255, 0.1) 5%,
              rgba(255, 255, 255, 0.1) 95%,
              transparent 100%
            );
            clip-path: polygon(
              40% 0%, 60% 0%,
              70% 10%, 80% 20%,
              70% 30%, 60% 40%,
              40% 50%, 20% 60%,
              30% 70%, 40% 80%,
              50% 90%, 50% 100%
            );
          }

          .road-progress {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(180deg, #4CAF50, #8BC34A);
            transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0.5;
            clip-path: inherit;
          }

          .reward-points {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            gap: 60px;
          }

          .reward-row {
            display: flex;
            justify-content: space-around;
            position: relative;
          }

          .reward-row:nth-child(even) {
            flex-direction: row-reverse;
          }

          .reward-point {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .reward-checkpoint {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 3px solid rgba(255, 255, 255, 0.3);
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
            border-color: #4CAF50;
            box-shadow: 0 0 30px rgba(76, 175, 80, 0.5);
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.8);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 20px 10px rgba(76, 175, 80, 0);
            }
          }

          .reward-checkpoint:not(.claimed):not(.locked):hover {
            transform: scale(1.1);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          }

          .reward-checkpoint.locked {
            background: linear-gradient(135deg, #424242, #616161);
            cursor: not-allowed;
            opacity: 0.6;
          }

          .checkpoint-icon {
            font-size: 28px;
            margin-bottom: 2px;
          }

          .checkpoint-value {
            font-size: 12px;
            font-weight: bold;
            color: white;
          }

          .checkpoint-cost {
            position: absolute;
            bottom: -25px;
            background: rgba(255, 255, 255, 0.2);
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 11px;
            color: white;
            display: flex;
            align-items: center;
            gap: 3px;
          }

          .checkpoint-label {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.7);
            text-align: center;
            margin-top: 25px;
          }

          .milestone-badge {
            position: absolute;
            top: -10px;
            right: -10px;
            background: #FFD700;
            color: #333;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: bold;
            transform: rotate(15deg);
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
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

          .avatar-vehicle {
            position: absolute;
            z-index: 10;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            flex-direction: column;
            align-items: center;
            pointer-events: none;
          }

          .avatar-img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 2px solid white;
            margin-bottom: 5px;
          }

          .vehicle-icon {
            font-size: 24px;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
          }

          .floating-reward {
            position: fixed;
            font-size: 32px;
            z-index: 1000;
            pointer-events: none;
          }

          .floating-to-coins {
            animation: floatToCoins 1s ease-out forwards;
          }

          .floating-to-lives {
            animation: floatToLives 1s ease-out forwards;
          }

          @keyframes floatToCoins {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(calc(50vw - 100px), -200px) scale(0.5);
              opacity: 0;
            }
          }

          @keyframes floatToLives {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(calc(50vw - 200px), -200px) scale(0.5);
              opacity: 0;
            }
          }

          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .modal-content {
            background: linear-gradient(135deg, #2d1b69, #1a1a2e);
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            max-width: 400px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .modal-icon {
            font-size: 48px;
            margin-bottom: 20px;
          }

          .modal-title {
            color: white;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .modal-message {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 20px;
          }

          .modal-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
          }

          .modal-btn {
            padding: 12px 24px;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s;
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
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }

          @media (max-width: 768px) {
            .journey-title {
              font-size: 28px;
            }
            
            .balance-card {
              flex-direction: column;
              gap: 15px;
            }
            
            .stats-row {
              flex-wrap: wrap;
            }
            
            .reward-checkpoint {
              width: 70px;
              height: 70px;
            }
            
            .checkpoint-icon {
              font-size: 24px;
            }
          }
        `}</style>

        <div className="journey-container">
          <button className="back-button" onClick={handleBack}>
            ← Back
          </button>

          <div className="journey-header">
            <h1 className="journey-title">Rewards</h1>
            <p className="journey-subtitle">Claim amazing prizes</p>
          </div>

          <div className="balance-card">
            <div className="balance-info">
              <div>
                <div className="balance-label">Your Balance</div>
                <div className="balance-value">
                  <span>{totalCoins.toLocaleString()}</span>
                  <span>🪙</span>
                </div>
              </div>
            </div>
            <button className="earn-more-btn" onClick={() => handleNavigation('/quiz')}>
              Play Quiz
            </button>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-icon">❤️</span>
              <span className="stat-value">{totalLives}</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⭐</span>
              <span className="stat-value">Level 5</span>
            </div>
          </div>

          <div className="vehicle-selector">
            <div className="vehicle-label">Your Vehicle</div>
            <div className="current-vehicle">{vehicles[currentVehicle].icon}</div>
            <div className="vehicle-name">{vehicles[currentVehicle].name}</div>
          </div>

          <div className="road-container" ref={roadRef}>
            <div className="road-wrapper">
              <div className="curvy-road">
                <div 
                  className="road-progress" 
                  style={{ height: `${progressPercentage}%` }}
                />
              </div>
              
              <div className="avatar-vehicle" style={getAvatarPosition()}>
                <img 
                  src="/profile/avatar.png" 
                  alt="Avatar" 
                  className="avatar-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="vehicle-icon">
                  {vehicles[currentVehicle].icon}
                </div>
              </div>

              <div className="reward-points">
                {rewards.map((reward, index) => {
                  const row = Math.floor(index / 5);
                  const posInRow = index % 5;
                  const isEvenRow = row % 2 === 0;
                  
                  let leftPosition = '50%';
                  if (isEvenRow) {
                    leftPosition = `${20 + (posInRow * 15)}%`;
                  } else {
                    leftPosition = `${80 - (posInRow * 15)}%`;
                  }
                  
                  return (
                    <div 
                      key={reward.id} 
                      className="reward-point" 
                      data-index={index}
                      style={{
                        position: 'absolute',
                        top: `${(index / (rewards.length - 1)) * 100}%`,
                        left: leftPosition,
                        transform: 'translateX(-50%)'
                      }}
                    >
                      <div 
                        className={getCheckpointClass(index)}
                        onClick={() => claimReward(index, reward)}
                      >
                        <div className="checkpoint-icon">{reward.icon}</div>
                        <div className="checkpoint-value">{reward.label.split(' ')[0]}</div>
                        {reward.milestone && <div className="milestone-badge">BONUS!</div>}
                        {showClaimEffect === index && <div className="claim-effect" />}
                        {reward.cost > 0 && (
                          <div className="checkpoint-cost">
                            <span>🪙</span>
                            <span>{reward.cost}</span>
                          </div>
                        )}
                      </div>
                      <div className="checkpoint-label">Step {index + 1}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Floating rewards animations */}
        <AnimatePresence>
          {floatingRewards.map(reward => {
            const isCoins = reward.type === 'coins';
            const targetClass = isCoins ? 'floating-to-coins' : 'floating-to-lives';
            
            return (
              <div
                key={reward.id}
                className={`floating-reward ${targetClass}`}
                style={{
                  left: '50%',
                  top: '50%',
                }}
              >
                {reward.icon}
                {reward.value > 1 && <span style={{ fontSize: '16px' }}>+{reward.value}</span>}
              </div>
            );
          })}
        </AnimatePresence>

        {/* Insufficient coins modal */}
        {showInsufficientCoinsModal && (
          <div className="modal-overlay" onClick={() => setShowInsufficientCoinsModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-icon">🪙</div>
              <div className="modal-title">Not Enough Coins!</div>
              <div className="modal-message">
                You need {requiredCoins} more coins to claim this reward.
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
      </div>
    </>
  );
};

export default RewardsJourney;