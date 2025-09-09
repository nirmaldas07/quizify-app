// src/utils/gameHelpers.js

export const playSound = (src, volume = 0.7) => {
  try {
    const audio = new Audio(src);
    audio.volume = volume;
    return audio.play().catch(() => {});
  } catch {}
};

export const vibrate = (pattern) => {
  if (navigator.vibrate) navigator.vibrate(pattern);
};

export const toSlug = (name) => 
  name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

export const mod360 = (deg) => ((deg % 360) + 360) % 360;