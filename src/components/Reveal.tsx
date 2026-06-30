"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
  rootMargin?: string;
  delay?: number;
  style?: CSSProperties;
  [prop: string]: unknown;
};

export function Reveal({
  as: Tag = "div",
  className = "",
  children,
  rootMargin = "0px 0px -10% 0px",
  delay = 0,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  const classes = [
    "reveal",
    className,
    "transition-[opacity,transform] duration-700 ease-out",
    shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle =
    shown && delay > 0 ? { ...style, transitionDelay: `${delay}ms` } : style;

  return (
    <Tag ref={ref} className={classes} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}
