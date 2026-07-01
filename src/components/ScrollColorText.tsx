"use client";

import { useEffect, useMemo, useRef } from "react";

type ScrollColorTextProps = {
  children: string;
  className?: string;
};

type TextPiece =
  | { type: "space"; text: string }
  | { type: "word"; chars: { char: string; index: number }[] };

const inactive = [132, 132, 124];
const active = [17, 17, 16];

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function mix(from: number, to: number, progress: number) {
  return Math.round(from + (to - from) * progress);
}

export function ScrollColorText({ children, className = "" }: ScrollColorTextProps) {
  const root = useRef<HTMLParagraphElement>(null);
  const pieces = useMemo(() => {
    let index = 0;

    return children.split(/(\s+)/).map<TextPiece>((part) => {
      if (/^\s+$/.test(part)) return { type: "space", text: part };

      return {
        type: "word",
        chars: Array.from(part).map((char) => ({
          char,
          index: index++,
        })),
      };
    });
  }, [children]);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    const chars = Array.from(
      element.querySelectorAll<HTMLElement>("[data-scroll-char]"),
    );
    if (!chars.length) return;

    element.style.color = "";
    let frame = 0;
    const fadeLength = Math.max(8, Math.round(chars.length * 0.08));

    const setProgress = (progress: number) => {
      const filled = progress * (chars.length + fadeLength);

      chars.forEach((char, index) => {
        const localProgress = clamp((filled - index) / fadeLength);
        char.style.color = `rgb(${mix(
          inactive[0],
          active[0],
          localProgress,
        )}, ${mix(inactive[1], active[1], localProgress)}, ${mix(
          inactive[2],
          active[2],
          localProgress,
        )})`;
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const start = viewport * 0.84;
      const end = viewport * 0.38;
      const progress = clamp((start - rect.top) / (start - end));

      setProgress(progress);
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
  }, [children]);

  return (
    <p
      ref={root}
      aria-label={children}
      className={className}
    >
      <span aria-hidden="true">
        {pieces.map((piece, pieceIndex) => {
          if (piece.type === "space") {
            return <span key={`space-${pieceIndex}`}>{piece.text}</span>;
          }

          return (
            <span key={`word-${pieceIndex}`} className="inline-block">
              {piece.chars.map(({ char, index }) => (
                <span
                  key={index}
                  data-scroll-char
                  style={{ color: `rgb(${inactive.join(", ")})` }}
                >
                  {char}
                </span>
              ))}
            </span>
          );
        })}
      </span>
    </p>
  );
}
