import React, { useState, useEffect } from "react";

const init = [
  { id: 1, title: "Quiz Master", subtitle: "Play 10 quizzes", current: 7, target: 10, reward: 150, claimed: false, icon: "🎯", color: "#FF6B6B" },
  { id: 2, title: "Coin Collector", subtitle: "Earn 2,000 coins", current: 1240, target: 2000, reward: 200, claimed: false, icon: "💰", color: "#4ECDC4" },
  { id: 3, title: "Winning Streak", subtitle: "Win 3 in a row", current: 3, target: 3, reward: 100, claimed: true, icon: "🔥", color: "#FFD93D" },
  { id: 4, title: "Speed Demon", subtitle: "Complete 5 under 2min", current: 2, target: 5, reward: 300, claimed: false, icon: "⚡", color: "#A8E6CF" },
  { id: 5, title: "Perfect Score", subtitle: "Get 100% accuracy", current: 0, target: 1, reward: 250, claimed: false, icon: "⭐", color: "#C7B8FF" },
];

export default function Achievements() {
  const [items, setItems] = useState(init);
  const [claimingId, setClaimingId] = useState(null);
  const [totalCoins, setTotalCoins] = useState(1890);
  const [showCelebration, setShowCelebration] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  const totalAchievements = items.length;
  const completedAchievements = items.filter(a => a.current >= a.target).length;
  const overallProgress = Math.round((completedAchievements / totalAchievements) * 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => {
        const newSparkle = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10
        };
        return [...prev.slice(-4), newSparkle];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const claim = (id, reward) => {
    setClaimingId(id);
    if (navigator.vibrate) navigator.vibrate([20, 10, 20]);
    
    setTimeout(() => {
      setItems(prev => prev.map(a => a.id === id ? { ...a, claimed: true } : a));
      setTotalCoins(prev => prev + reward);
      setClaimingId(null);
      setShowCelebration(true);
      
      setTimeout(() => setShowCelebration(false), 2000);
    }, 600);
  };

  return (
    <div className="achievements-screen">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
            scroll-behavior: smooth;
            }

        .achievements-screen {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          color: white;
          position: relative;
          overflow-x: hidden;
          scroll-behavior: smooth;  /* Add this line */
          -webkit-overflow-scrolling: touch;  /* Add this line for iOS */


        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .sparkle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
        //   animation: twinkle 3s ease-out forwards;
        }

        @keyframes twinkle {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          opacity: 0.05;
          animation: float 20s infinite ease-in-out;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          top: -150px;
          right: -100px;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #FFD93D, #A8E6CF);
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          bottom: -100px;
          left: -50px;
          animation-delay: 5s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
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
          margin-top: 15px;  /* Add this line */
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
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #FFD93D, #FF6B6B, #4ECDC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(255, 217, 61, 0.3);
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }

        .subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
        }

        .coins-display {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          padding: 10px 18px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 20px;
          color: #1a1a1a;
          box-shadow: 0 4px 15px rgba(255, 217, 61, 0.4);
          animation: float-coin 3s ease-in-out infinite;
        }

        @keyframes float-coin {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .progress-overview {
          background: linear-gradient(135deg, rgba(78, 205, 196, 0.15), rgba(255, 107, 107, 0.15));
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 24px;
          margin-bottom: 28px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          animation: fadeInScale 0.6s ease-out 0.2s both;
          position: relative;
          overflow: hidden;
        }

        .progress-overview::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #FFD93D, #FF6B6B, #4ECDC4, #FFD93D);
          border-radius: 24px;
          opacity: 0.5;
          z-index: -1;
          animation: rotate-border 3s linear infinite;
        }

        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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

        .overview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .overview-label {
          font-size: 16px;
          color: white;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .overview-stats {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .trophy-icon {
          font-size: 32px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          animation: bounce-trophy 2s ease-in-out infinite;
        }

        @keyframes bounce-trophy {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(-5deg); }
          75% { transform: translateY(-3px) rotate(5deg); }
        }

        .overview-value {
          font-size: 28px;
          font-weight: 800;
          color: #FFD93D;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .progress-bar-main {
          width: 100%;
          height: 16px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100px;
          overflow: hidden;
          position: relative;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .progress-fill-main {
          height: 100%;
          background: linear-gradient(90deg, #FFD93D, #FF6B6B, #4ECDC4);
          border-radius: 100px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(255, 217, 61, 0.4);
        }

        .progress-fill-main::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          z-index: 10;
        }

        .achievement-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        //   backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 20px;
          position: relative;
          overflow: hidden;
          animation: slideUp 0.5s ease-out both;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid rgba(255, 255, 255, 0.1);
          will-change: transform;        /* ADD THIS LINE */
          transform: translateZ(0);       /* ADD THIS LINE */

        }

        .achievement-card:nth-child(1) { animation-delay: 0.1s; }
        .achievement-card:nth-child(2) { animation-delay: 0.2s; }
        .achievement-card:nth-child(3) { animation-delay: 0.3s; }
        .achievement-card:nth-child(4) { animation-delay: 0.4s; }
        .achievement-card:nth-child(5) { animation-delay: 0.5s; }

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

        .achievement-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
          border-color: var(--card-color);
        }

        .achievement-card.completed {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
          border-color: rgba(255, 217, 61, 0.3);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--card-color) 0%, transparent 70%);
          opacity: 0.1;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }

        .card-content {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
        }

        .achievement-icon {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, var(--card-color), var(--card-color-dark));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          flex-shrink: 0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          position: relative;
          animation: icon-float 3s ease-in-out infinite;
        }

        @keyframes icon-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }

        .achievement-icon::after {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, var(--card-color), transparent, var(--card-color));
          border-radius: 20px;
          opacity: 0.5;
          z-index: -1;
          animation: rotate-border 2s linear infinite;
        }

        .achievement-details {
          flex: 1;
          min-width: 0;
        }

        .achievement-title {
          font-size: 18px;
          font-weight: 800;
          color: white;
          margin-bottom: 4px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .achievement-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 12px;
        }

        .progress-container {
          position: relative;
        }

        .progress-bar {
          width: 100%;
          height: 12px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100px;
          overflow: hidden;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--card-color), var(--card-color-dark));
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px var(--card-color);
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          animation: shimmer 2s infinite;
        }

        .progress-text {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .reward-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          color: #1a1a1a;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(255, 217, 61, 0.3);
          animation: pulse-reward 2s ease-in-out infinite;
        }

        @keyframes pulse-reward {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .claim-button {
          padding: 12px 24px;
          border-radius: 16px;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-width: 110px;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .claim-button.can-claim {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
          animation: pulse-button 2s ease-in-out infinite;
        }

        @keyframes pulse-button {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
          }
        }

        .claim-button.can-claim:hover {
          transform: scale(1.08) rotate(-2deg);
          box-shadow: 0 8px 30px rgba(16, 185, 129, 0.5);
        }

        .claim-button.can-claim::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .claim-button.claimed {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
          cursor: not-allowed;
        }

        .claim-button.in-progress {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.4);
          cursor: not-allowed;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .claim-button.claiming {
          animation: bounceScale 0.6s ease;
        }

        @keyframes bounceScale {
          0%, 100% { transform: scale(1); }
          30% { transform: scale(0.9); }
          60% { transform: scale(1.15); }
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

        .completed-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #1a1a1a;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(255, 217, 61, 0.4);
          animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes pop-in {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
      `}</style>

      <div className="animated-background">
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="sparkle"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
            }}
          />
        ))}
      </div>

      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          ← Back
        </button>

        <div className="coins-display">
          🪙 {totalCoins.toLocaleString()}
        </div>
        
        <div className="title-section">
          <h1 className="main-title">ACHIEVEMENTS</h1>
          <p className="subtitle">Complete challenges and earn awesome rewards!</p>
        </div>
      </div>

      <div className="progress-overview">
        <div className="card-glow" style={{'--card-color': '#FFD93D'}} />
        <div className="overview-header">
          <span className="overview-label">🎮 Progress Tracker</span>
          <div className="overview-stats">
            <span className="trophy-icon">🏆</span>
            <span className="overview-value">{completedAchievements}/{totalAchievements}</span>
          </div>
        </div>
        <div className="progress-bar-main">
          <div 
            className="progress-fill-main" 
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      <div className="achievements-list">
        {items.map((achievement) => {
          const progress = Math.min(100, Math.round((achievement.current / achievement.target) * 100));
          const isComplete = progress === 100;
          const colorDark = achievement.color + 'CC';
          
          return (
            <div 
              key={achievement.id} 
              className={`achievement-card ${isComplete ? 'completed' : ''}`}
              style={{ 
                '--card-color': achievement.color,
                '--card-color-dark': colorDark
              }}
            >
              <div className="card-glow" />
              {isComplete && achievement.claimed && (
                <div className="completed-badge">✓</div>
              )}
              
              <div className="card-content">
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                
                <div className="achievement-details">
                  <div className="achievement-title">{achievement.title}</div>
                  <div className="achievement-subtitle">{achievement.subtitle}</div>
                  
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="progress-text">
                      <span>{achievement.current}/{achievement.target}</span>
                      <span className="reward-badge">
                        🪙 {achievement.reward}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => claim(achievement.id, achievement.reward)}
                  disabled={!isComplete || achievement.claimed}
                  className={`claim-button ${
                    achievement.claimed ? 'claimed' : 
                    isComplete ? 'can-claim' : 
                    'in-progress'
                  } ${claimingId === achievement.id ? 'claiming' : ''}`}
                >
                  {achievement.claimed ? '✓' : 
                   isComplete ? 'CLAIM!' : 
                   `${progress}%`}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {showCelebration && (
        <div className="celebration">🎉</div>
      )}
    </div>
  );
}