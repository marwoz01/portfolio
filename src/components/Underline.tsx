import type { CSSProperties, ReactNode } from "react";

const THICKNESS = 9;
const COLOR = "var(--color-fg-muted)";
const PATH = "M1 9.6 C 30 7.4, 70 7.4, 99 9.6";
const LINECAP: "round" | "butt" | "square" = "round";
const VERTICAL = "-0.12em";
const HEIGHT = "0.3em";
const DURATION = 0.7;
const DELAY = 0.6;

export function Underline({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const svgStyle = {
    bottom: VERTICAL,
    height: HEIGHT,
    color: COLOR,
    "--draw-dur": `${DURATION}s`,
    "--draw-delay": `${DELAY}s`,
  } as CSSProperties;

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        aria-hidden
        className="underline-draw pointer-events-none absolute left-0 w-full overflow-visible"
        style={svgStyle}
        viewBox="0 0 100 10"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d={PATH}
          stroke="currentColor"
          strokeWidth={THICKNESS}
          strokeLinecap={LINECAP}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
