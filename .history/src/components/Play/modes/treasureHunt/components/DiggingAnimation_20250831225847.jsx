// src/components/Play/modes/treasureHunt/components/DiggingAnimation.jsx

import { useEffect, useState } from "react";

export default function DiggingAnimation({ island, foundGem, onComplete }) {
  const [animationPhase, setAnimationPhase] = useState('digging'); // 'digging', 'revealing', 'complete'
  const [showTreasure, setShowTreasure] = useState(false);
  const [showGem, setShowGem] = useState(false);

  useEffect(() => {
    // Animation sequence
    const sequence = async () => {
      // Digging phase - 800ms
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Revealing phase
      setAnimationPhase('revealing');
      setShowTreasure(true);
      
      // Show gem if found - 400ms after treasure
      if (foundGem) {
        await new Promise(resolve => setTimeout(resolve, 400));
        setShowGem(true);
      }
      
      // Complete phase
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnimationPhase('complete');
      
      // Call onComplete after animation
      await new Promise(resolve => setTimeout(resolve, 300));
      onComplete();
    };
    
    sequence();
  }, [foundGem, onComplete]);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center">
      <style jsx>{`
        @keyframes dig {
          0%, 100% { 
            transform: rotate(-15deg) translateY(0); 
          }
          25% { 
            transform: rotate(15deg) translateY(-20px); 
          }
          50% { 
            transform: rotate(-15deg) translateY(10px); 
          }
          75% { 
            transform: rotate(15deg) translateY(-10px); 
          }
        }
        
        @keyframes dirtFly {
          0% { 
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translate(var(--fly-x), var(--fly-y)) scale(0.3);
            opacity: 0;
          }
        }
        
        @keyframes treasureReveal {
          0% { 
            transform: translateY(50px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-10px) scale(1.2);
            opacity: 1;
          }
          100% { 
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes treasureFloat {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
          }
          50% { 
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        @keyframes gemSparkle {
          0% { 
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.3) rotate(180deg);
            opacity: 1;
          }
          100% { 
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }
        
        @keyframes coinSpin {
          0% { 
            transform: rotateY(0deg) scale(1);
          }
          100% { 
            transform: rotateY(360deg) scale(1);
          }
        }
        
        @keyframes starBurst {
          0% { 
            transform: scale(0) rotate(0deg);
            opacity: 1;
          }
          100% { 
            transform: scale(2) rotate(180deg);
            opacity: 0;
          }
        }
        
        @keyframes radiateGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
          }
          50% { 
            box-shadow: 0 0 40px rgba(255, 215, 0, 0.9);
          }
        }
        
        .dig-animation {
          animation: dig 0.3s ease-in-out infinite;
        }
        
        .dirt-particle {
          position: absolute;
          animation: dirtFly 0.8s ease-out forwards;
        }
        
        .treasure-reveal {
          animation: treasureReveal 0.8s ease-out forwards;
        }
        
        .treasure-float {
          animation: treasureFloat 2s ease-in-out infinite;
        }
        
        .gem-sparkle {
          animation: gemSparkle 0.6s ease-out forwards;
        }
        
        .coin-spin {
          animation: coinSpin 2s linear infinite;
        }
        
        .star-burst {
          animation: starBurst 1s ease-out forwards;
        }
        
        .glow-effect {
          animation: radiateGlow 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Digging Animation */}
      {animationPhase === 'digging' && (
        <div className="relative">
          {/* Shovel */}
          <div className="text-8xl dig-animation">
            {island.visualElements.diggingEmoji}
          </div>
          
          {/* Dirt particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="dirt-particle text-4xl"
              style={{
                '--fly-x': `${(Math.random() - 0.5) * 200}px`,
                '--fly-y': `${-Math.random() * 150 - 50}px`,
                left: '50%',
                top: '60%',
                animationDelay: `${i * 0.1}s`
              }}
            >
              🟫
            </div>
          ))}
          
          {/* Ground shake effect */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <div className="text-6xl opacity-50">💨</div>
          </div>
        </div>
      )}

      {/* Treasure Reveal */}
      {animationPhase === 'revealing' && (
        <div className="relative">
          {/* Main treasure/coins */}
          {showTreasure && (
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect" />
              </div>
              
              {/* Coins */}
              <div className="relative flex items-center justify-center">
                <div className="text-7xl treasure-reveal treasure-float">
                  💰
                </div>
                
                {/* Spinning coins around */}
                <div className="absolute text-5xl coin-spin" style={{ left: '-30px' }}>
                  🪙
                </div>
                <div className="absolute text-5xl coin-spin" style={{ right: '-30px', animationDelay: '0.5s' }}>
                  🪙
                </div>
                <div className="absolute text-4xl coin-spin" style={{ top: '-30px', animationDelay: '1s' }}>
                  🪙
                </div>
              </div>
              
              {/* Star burst effects */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-3xl star-burst"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-40px)`,
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  ⭐
                </div>
              ))}
            </div>
          )}
          
          {/* Gem discovery */}
          {showGem && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="relative">
                {/* Gem with sparkle */}
                <div className="text-6xl gem-sparkle">
                  💎
                </div>
                
                {/* Sparkle effects */}
                <div className="absolute -top-2 -left-2 text-2xl animate-pulse">✨</div>
                <div className="absolute -top-2 -right-2 text-2xl animate-pulse" style={{ animationDelay: '0.3s' }}>✨</div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse" style={{ animationDelay: '0.6s' }}>✨</div>
              </div>
              
              {/* Bonus text */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-cyan-300 font-black text-lg drop-shadow-lg">
                  RARE GEM!
                </span>
              </div>
            </div>
          )}
          
          {/* Success message */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
            <div className="text-white font-black text-2xl drop-shadow-lg">
              {foundGem ? 'AMAZING FIND!' : 'TREASURE FOUND!'}
            </div>
          </div>
        </div>
      )}

      {/* Completion phase with fade out */}
      {animationPhase === 'complete' && (
        <div className="relative opacity-0 transition-opacity duration-300">
          <div className="text-7xl">✅</div>
        </div>
      )}
    </div>
  );
}