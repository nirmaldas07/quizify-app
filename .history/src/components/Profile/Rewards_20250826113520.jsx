<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reward Journey System</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-x: auto;
            padding: 20px;
        }

        .journey-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 40px;
            min-width: 320px;
            max-width: 1200px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
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
            min-height: 400px;
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
        }

        .road-progress {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: linear-gradient(90deg, #4CAF50, #8BC34A);
            width: 0;
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
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
            }
            50% {
                transform: scale(1.05);
                box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
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

        .coin-animation {
            position: fixed;
            font-size: 40px;
            animation: coinFloat 1.5s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        }

        @keyframes coinFloat {
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

        .floating-rewards {
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .reward-point:hover .floating-rewards {
            opacity: 1;
        }

        .floating-reward {
            background: rgba(255, 255, 255, 0.9);
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            color: #333;
            white-space: nowrap;
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
        }
    </style>
</head>
<body>
    <div class="journey-container">
        <div class="journey-header">
            <h1 class="journey-title">🎯 Your Reward Journey</h1>
            <p class="journey-subtitle">Claim rewards as you progress!</p>
        </div>

        <div class="journey-stats">
            <div class="stat-item">
                <span class="stat-icon">🪙</span>
                <span class="stat-value" id="totalCoins">1,240</span>
            </div>
            <div class="stat-item">
                <span class="stat-icon">❤️</span>
                <span class="stat-value" id="totalLives">3</span>
            </div>
            <div class="stat-item">
                <span class="stat-icon">⭐</span>
                <span class="stat-value" id="currentLevel">Level 5</span>
            </div>
        </div>

        <div class="road-container">
            <div class="road-wrapper">
                <div class="road-path">
                    <div class="road-progress" id="roadProgress"></div>
                </div>
                <div class="reward-points" id="rewardPoints"></div>
            </div>
        </div>

        <div class="progress-indicator">
            <p>Journey Progress: <span id="progressText">0</span>/25</p>
            <div class="progress-bar-container">
                <div class="progress-bar-fill" id="progressBarFill" style="width: 0%"></div>
            </div>
        </div>
    </div>

    <script>
        // Reward configuration
        const rewards = [
            { id: 1, type: 'coins', value: 100, icon: '🪙', label: '100 Coins' },
            { id: 2, type: 'life', value: 1, icon: '❤️', label: '+1 Life' },
            { id: 3, type: 'coins', value: 200, icon: '🪙', label: '200 Coins' },
            { id: 4, type: 'wildcard', value: 1, icon: '🃏', label: 'Wild Card' },
            { id: 5, type: 'coins', value: 500, icon: '💰', label: '500 Coins', milestone: true },
            { id: 6, type: 'fifty-fifty', value: 1, icon: '➗', label: '50:50' },
            { id: 7, type: 'life', value: 2, icon: '❤️', label: '+2 Lives' },
            { inconsistencyId: 8, type: 'coins', value: 300, icon: '🪙', label: '300 Coins' },
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

        let currentProgress = 0;
        let totalCoins = 1240;
        let totalLives = 3;
        let claimedRewards = [];

        // Sound management
        class SoundManager {
            constructor() {
                this.sounds = {
                    claim: new Audio('public/sounds/reward.mp3'),
                    progress: new Audio('public/sounds/reward_progress.mp3')
                };
                
                // Fallback for testing without actual sound files
                Object.keys(this.sounds).forEach(key => {
                    this.sounds[key].addEventListener('error', () => {
                        console.log(`Sound file ${key} not found, using silent mode`);
                    });
                });
            }

            play(soundName) {
                try {
                    const sound = this.sounds[soundName];
                    if (sound) {
                        sound.currentTime = 0;
                        sound.play().catch(e => console.log('Audio play failed:', e));
                    }
                } catch (e) {
                    console.log('Sound play error:', e);
                }
            }
        }

        const soundManager = new SoundManager();

        // Initialize the journey
        function initializeJourney() {
            const rewardPointsContainer = document.getElementById('rewardPoints');
            
            rewards.forEach((reward, index) => {
                const rewardPoint = createRewardPoint(reward, index);
                rewardPointsContainer.appendChild(rewardPoint);
            });

            updateCurrentReward();
        }

        function createRewardPoint(reward, index) {
            const point = document.createElement('div');
            point.className = 'reward-point';
            point.dataset.index = index;

            const checkpoint = document.createElement('div');
            checkpoint.className = 'reward-checkpoint';
            if (index > currentProgress) {
                checkpoint.classList.add('locked');
            } else if (index === currentProgress) {
                checkpoint.classList.add('current');
            }
            
            checkpoint.innerHTML = `
                <div class="checkpoint-icon">${reward.icon}</div>
                <div class="checkpoint-value">${reward.label.split(' ')[0]}</div>
                ${reward.milestone ? '<div class="milestone-badge">BONUS!</div>' : ''}
            `;

            const label = document.createElement('div');
            label.className = 'checkpoint-label';
            label.textContent = `Step ${index + 1}`;

            checkpoint.addEventListener('click', () => claimReward(index, reward));

            point.appendChild(checkpoint);
            point.appendChild(label);

            return point;
        }

        function claimReward(index, reward) {
            if (index !== currentProgress || claimedRewards.includes(index)) {
                return;
            }

            // Play claim sound
            soundManager.play('claim');

            // Add claimed state
            const checkpoint = document.querySelectorAll('.reward-checkpoint')[index];
            checkpoint.classList.remove('current');
            checkpoint.classList.add('claimed');

            // Create claim burst effect
            const burst = document.createElement('div');
            burst.className = 'claim-effect';
            checkpoint.appendChild(burst);
            setTimeout(() => burst.remove(), 600);

            // Animate the reward
            animateRewardClaim(checkpoint, reward);

            // Update game state
            applyReward(reward);
            claimedRewards.push(index);

            // Progress to next reward
            setTimeout(() => {
                currentProgress++;
                if (currentProgress < rewards.length) {
                    updateCurrentReward();
                    animateRoadProgress();
                } else {
                    showCompletionMessage();
                }
                updateProgressBar();
            }, 500);
        }

        function animateRewardClaim(element, reward) {
            const rect = element.getBoundingClientRect();
            const coin = document.createElement('div');
            coin.className = 'coin-animation';
            coin.innerHTML = reward.icon;
            coin.style.left = rect.left + rect.width / 2 - 20 + 'px';
            coin.style.top = rect.top + rect.height / 2 - 20 + 'px';
            
            document.body.appendChild(coin);
            
            setTimeout(() => coin.remove(), 1500);
        }

        function applyReward(reward) {
            switch(reward.type) {
                case 'coins':
                    totalCoins += reward.value;
                    document.getElementById('totalCoins').textContent = totalCoins.toLocaleString();
                    break;
                case 'life':
                    totalLives += reward.value;
                    document.getElementById('totalLives').textContent = totalLives;
                    break;
                // Add more reward types as needed
            }
        }

        function updateCurrentReward() {
            const checkpoints = document.querySelectorAll('.reward-checkpoint');
            checkpoints.forEach((checkpoint, index) => {
                checkpoint.classList.remove('current');
                if (index === currentProgress && !claimedRewards.includes(index)) {
                    checkpoint.classList.add('current');
                    checkpoint.classList.remove('locked');
                } else if (index > currentProgress) {
                    checkpoint.classList.add('locked');
                }
            });
        }

        function animateRoadProgress() {
            soundManager.play('progress');
            const progress = (currentProgress / (rewards.length - 1)) * 100;
            document.getElementById('roadProgress').style.width = progress + '%';
        }

        function updateProgressBar() {
            const progress = (currentProgress / (rewards.length - 1)) * 100;
            document.getElementById('progressBarFill').style.width = progress + '%';
            document.getElementById('progressText').textContent = currentProgress;
        }

        function showCompletionMessage() {
            setTimeout(() => {
                alert('🎉 Congratulations! You\'ve completed the entire journey! 🏆');
            }, 500);
        }

        // Auto-scroll to current reward
        function scrollToCurrentReward() {
            const current = document.querySelector('.reward-checkpoint.current');
            if (current) {
                current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            }
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            initializeJourney();
            setTimeout(scrollToCurrentReward, 500);
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            scrollToCurrentReward();
        });
    </script>
</body>
</html>