//src/components/Home/CoinsInfoModal.jsx
import React from 'react';
import GameDataService from '../../services/GameDataService';

export default function CoinsInfoModal({ show, onClose, coins, onNavigateToPlay }) {
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="magic-gradient h-full"></div>
        </div>
        
        <div className="relative">
          {/* Header with 3D coin animation */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="coin-3d text-5xl" style={{ animation: 'coinRotate 2s linear infinite, glow 2s ease-in-out infinite' }}>
                🪙
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Your Treasure
                </h3>
                <p className="text-3xl font-bold text-white mt-1">{GameDataService.getCoins()} Coins</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition"
            >
              ✕
            </button>
          </div>
          
          {/* Ways to Earn with animated cards */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-base-muted mb-3">Ways to Earn</h4>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      <span className="text-2xl">✅</span>
                      Complete Quizzes
                    </div>
                    <div className="text-xs text-base-muted mt-1">+5 coins per correct answer</div>
                  </div>
                  <div className="text-green-400 font-bold">+5</div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      <span className="text-2xl">🎯</span>
                      Daily Challenge
                    </div>
                    <div className="text-xs text-base-muted mt-1">Complete daily for bonus</div>
                  </div>
                  <div className="text-blue-400 font-bold">+5</div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      <span className="text-2xl">🎰</span>
                      Spin & Play
                    </div>
                    <div className="text-xs text-base-muted mt-1">Test your luck!</div>
                  </div>
                  <div className="text-purple-400 font-bold">+50</div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      <span className="text-2xl">🏆</span>
                      Achievements
                    </div>
                    <div className="text-xs text-base-muted mt-1">Unlock special rewards</div>
                  </div>
                  <div className="text-orange-400 font-bold">+???</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-base-muted mb-2">
              <span>Next reward</span>
              <span>{100 - (coins % 100)} coins to go</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all"
                style={{ width: `${(coins % 100)}%` }}
              />
            </div>
          </div>
          
          {/* Call to action */}
          <button
            onClick={onNavigateToPlay}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg"
            style={{ boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)' }}
          >
            Start Earning Now! 🚀
          </button>
        </div>
      </div>
    </div>
  );
}