//AvatarDisplay.jsx
import React from 'react';
import { GAME_CONSTANTS } from '../../utils/gameConstants';

export default function AvatarDisplay({ player, size = 'normal', showLevel = true, showName = true }) {
  const avatar = GAME_CONSTANTS.AVATARS.find(a => a.id === player.avatar) || GAME_CONSTANTS.AVATARS[0];
  
  const sizeClasses = {
    small: 'w-10 h-10 text-xl',
    normal: 'w-14 h-14 text-2xl',
    large: 'w-20 h-20 text-4xl'
  };
  
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${avatar.bgColor} flex items-center justify-center shadow-lg`}>
          <span>{avatar.emoji}</span>
        </div>
        {showLevel && (
          <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg">
            {player.level}
          </div>
        )}
      </div>
      {showName && (
        <div>
          <div className="font-bold text-sm">{player.name}</div>
          <div className="text-xs text-base-muted">{avatar.name}</div>
        </div>
      )}
    </div>
  );
}