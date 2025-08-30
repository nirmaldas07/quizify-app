import React from 'react';

export default function HeroCard({ onClick }) {
  return (
    <div 
      className="relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)',
        animation: 'pulse 3s infinite'
      }}
      onClick={onClick}
    >
      <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10" 
           style={{ animation: 'float 4s ease-in-out infinite' }} />
      <div className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10" 
           style={{ animation: 'float 4s ease-in-out infinite reverse' }} />
      
      <h2 className="text-3xl font-bold mb-2">🎰 Spin & Win</h2>
      <p className="text-base opacity-90 mb-4">Test your luck, win amazing prizes!</p>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
           style={{
             background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)',
             backgroundSize: '200% auto',
             animation: 'shimmer 2s linear infinite'
           }}>
        Play Now →
      </div>
    </div>
  );
}