// src/components/CoinFly.jsx
import { useEffect } from "react";

/**
 * Props:
 * - startRect: DOMRect-like {left, top, width, height}
 * - targetRef: ref to the coin pill element (e.g., coinPillRef)
 * - count?: number of coins (default 12)
 * - onDone?: callback after all coins finish
 */
export default function CoinFly({ startRect, targetRef, count = 12, onDone }) {
  useEffect(() => {
    const endEl = targetRef?.current;
    if (!startRect || !endEl) {
      onDone?.();
      return;
    }

    const endRect = endEl.getBoundingClientRect();
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const ex = endRect.left + endRect.width / 2;
    const ey = endRect.top + endRect.height / 2;
    const sx = startRect.left + startRect.width / 2;
    const sy = startRect.top + startRect.height / 2;

    const duration = 900;
    let finished = 0;

    for (let i = 0; i < count; i++) {
      const coin = document.createElement("div");
      coin.textContent = "🪙";
      Object.assign(coin.style, {
        position: "fixed",
        left: "0px",
        top: "0px",
        zIndex: "10000",
        pointerEvents: "none",
        fontSize: "22px",
        opacity: "1",
        willChange: "transform, opacity",
        transform: "translate(0px, 0px)",
      });

      const x0 = sx;
      const y0 = sy;
      const x1 = ex;
      const y1 = ey;

      // 👉 Choose delay mode:
    //   const delay = 0;           // Burst mode (all at once, tight line)
      const delay = i * 50;    // Sequential mode (one after another)

      coin.style.transform = `translate(${x0}px, ${y0}px) scale(1)`;
      container.appendChild(coin);

      void coin.getBoundingClientRect(); // force layout for transition

      coin.style.transition = `transform ${duration}ms cubic-bezier(.2,.8,.2,1), opacity ${duration}ms linear`;
      coin.style.transitionDelay = `${delay}ms`;

      requestAnimationFrame(() => {
        coin.style.transform = `translate(${x1}px, ${y1}px) scale(.6)`;
        coin.style.opacity = "0.1";
      });

      const total = duration + delay + 50;
      setTimeout(() => {
        coin.remove();
        finished += 1;
        if (finished === count) {
          container.remove();
          onDone?.();
        }
      }, total);
    }

    return () => {
      try { container.remove(); } catch {}
    };
  }, [startRect, targetRef, count, onDone]);

  return null;
}
