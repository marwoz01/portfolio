"use client";

import { useEffect, useRef } from "react";

type ScrollColorTextProps = {
  children: string;
  className?: string;
};

export function ScrollColorText({ children, className = "" }: ScrollColorTextProps) {
  const root = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = Math.min(
        1,
        Math.max(0, (viewport * 0.78 - rect.top) / (viewport * 0.42)),
      );
      const value = Math.round(128 - progress * 111);

      element.style.color = `rgb(${value}, ${value}, ${value})`;
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <p
      ref={root}
      className={className}
    >
      {children}
    </p>
  );
}
