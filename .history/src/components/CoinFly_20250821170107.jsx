// src/components/CoinFly.jsx
import { useEffect } from "react";

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

    function launch(i) {
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

      coin.style.transform = `translate(${x0}px, ${y0}px) scale(1)`;
      container.appendChild(coin);

      void coin.getBoundingClientRect(); // force layout

      coin.style.transition = `transform ${duration}ms cubic-bezier(.2,.8,.2,1), opacity ${duration}ms linear`;

      requestAnimationFrame(() => {
        coin.style.transform = `translate(${x1}px, ${y1}px) scale(.6)`;
        coin.style.opacity = "0.1";
      });

      setTimeout(() => {
        coin.remove();
        finished += 1;
        if (finished === count) {
          container.remove();
          onDone?.();
        }
      }, duration + 50);
    }

    // Launch coins sequentially
    for (let i = 0; i < count; i++) {
      setTimeout(() => launch(i), i * 60); // ← adjust 60ms for tighter/faster burst
    }

    return () => {
      try { container.remove(); } catch {}
    };
  }, [startRect, targetRef, count, onDone]);

  return null;
}
