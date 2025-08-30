// src/components/Play/modes/classic/config.js

export const PRIMARY_CATS = [
  { name: "General Knowledge", questions: 50, icon: "🧠", color: "#7C3AED" },
  { name: "Artificial Intelligence", questions: 28, icon: "🤖", color: "#10B981" },
  { name: "Fun facts", questions: 30, icon: "🎉", color: "#EF4444" },
  { name: "Science", questions: 45, icon: "🧪", color: "#F59E0B" },
  { name: "History", questions: 42, icon: "🏺", color: "#2563EB" },
  { name: "Geography", questions: 38, icon: "🗺️", color: "#FACC15" }
];

export const WHEEL_CATEGORIES = PRIMARY_CATS.slice(0, 6);
export const sliceAngle = 360 / WHEEL_CATEGORIES.length;

export const CHARACTERS = {
  "general-knowledge": "TINA",
  "artificial-intelligence": "ALBERT", 
  "fun-facts": "BONZO",
  "science": "POP",
  "history": "TITO",
  "geography": "HECTOR"
};

export const SPIN_CONFIG = {
  FULL_TURNS: 6,
  DURATION: 2800,
  OVERSHOOT: 12,
  SETTLE_DURATION: 350
};

// Utility functions
export const toSlug = (name) => name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
export const mod360 = (deg) => ((deg % 360) + 360) % 360;

export const vibrate = (pattern) => {
  try {
    if (navigator.vibrate) navigator.vibrate(pattern);
  } catch {}
};

export const playSound = (src, volume = 0.7) => {
  try {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
  } catch {}
};