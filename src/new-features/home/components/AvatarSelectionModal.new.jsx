//src/components/Home/AvatarSelectionModal.jsx
import React from 'react';

export default function AvatarSelectionModal({ 
  show, 
  onClose, 
  player, 
  changeAvatar, 
  GAME_CONSTANTS 
}) {
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
        className="bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Choose Your Avatar</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition"
          >
            ✕
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {GAME_CONSTANTS.AVATARS.map(avatar => {
            const isLocked = !player.unlockedAvatars || !player.unlockedAvatars.includes(avatar.id);
            const isCurrent = player.avatar === avatar.id;
            
            return (
              <button
                key={avatar.id}
                onClick={() => {
                  if (!isLocked) {
                    changeAvatar(avatar.id);
                    onClose();
                  }
                }}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  isCurrent ? 'border-brand-blue bg-brand-blue/20' : 
                  isLocked ? 'border-gray-600 bg-gray-800/50 opacity-50' : 
                  'border-base-border bg-white/5 hover:bg-white/10'
                }`}
                disabled={isLocked}
              >
                <div className={`text-4xl mb-2 ${isLocked ? 'grayscale' : ''}`}>
                  {avatar.emoji}
                </div>
                <div className="text-sm font-medium">{avatar.name}</div>
                {isLocked && (
                  <div className="text-xs text-gray-400 mt-1">
                    Unlock at Level {avatar.unlockLevel}
                  </div>
                )}
                {isCurrent && (
                  <div className="text-xs text-brand-blue mt-1">Current</div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}