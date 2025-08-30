// src/components/Play/modes/classic/ResultScreen.jsx

import { useEffect } from "react";
import { WHEEL_CATEGORIES, CHARACTERS, toSlug, vibrate, playSound } from "./config.js";


export function ResultInterstitial({ category, onComplete, isBonus = false, soundOn = true }) {
  useEffect(() => {
    if (soundOn) playSound("/sounds/flush.mp3", 0.8);
    const timer = setTimeout(onComplete, 1000);
    vibrate([50]);
    return () => clearTimeout(timer);
  }, [onComplete, soundOn]);

    useEffect(() => {
    document.body.classList.add('hide-bottom-nav');
    return () => {
        document.body.classList.remove('hide-bottom-nav');
    };
    }, []);

  if (isBonus) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white">
        <h2 className="text-5xl font-black mb-8">Bonus Question</h2>
        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-6xl">⭐</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-bg text-white flex items-center justify-center">
      <div
        className="relative w-96 h-96 rounded-full flex items-center justify-center"
        style={{ backgroundColor: category.color }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full" />
          <div className="absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full" />
        </div>

        <div className="relative z-10 text-center">
          <div className="text-4xl font-black mb-2">{category.name}</div>
          <div className="w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto">
            <span className="text-4xl">{category.icon}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ThreeStreakFlash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-600 text-white">
      <h2 className="text-2xl font-black">Whohoo!! 3 correct in a row 🎉</h2>
    </div>
  );
}

export function CharacterPicker({ onSelect }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <div className="mx-auto max-w-md px-5 pt-16 pb-8">
        <header className="text-center mb-12">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-4xl font-black mb-4">Perfect Round!</h1>
          <p className="text-xl opacity-90">Choose a character to unlock</p>
        </header>

        <div className="grid grid-cols-2 gap-6">
          {WHEEL_CATEGORIES.map((cat) => {
            const charName = CHARACTERS[toSlug(cat.name)];
            return (
              <button
                key={toSlug(cat.name)}
                onClick={() => onSelect(toSlug(cat.name))}
                className="p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-black text-lg mb-1">{charName}</div>
                <div className="text-sm opacity-75">{cat.name}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}