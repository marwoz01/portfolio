"use client";

import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { useRef, type MouseEvent, type ReactNode } from "react";

type RippleButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "white" | "black";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  rippleClassName?: string;
  arrow?: boolean;
  arrowSwap?: boolean;
  ariaLabel?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const COVER = 150;

const variantClasses = {
  white: {
    button:
      "border border-[#d9d9d2] bg-[#f4f4ef] text-[#111110] hover:text-[#111110] focus-visible:ring-white/35",
    ripple: "bg-[#e8e8df]",
  },
  black: {
    button:
      "border border-[#111110] bg-[#111110] text-white hover:text-white focus-visible:ring-[#111110]/35",
    ripple: "bg-[#262622]",
  },
};

const sizeClasses = {
  sm: "h-9 gap-1.5 px-3.5 text-sm shadow-[0_14px_28px_rgba(0,0,0,0.10)]",
  md: "h-11 gap-1.5 px-4 text-sm shadow-[0_18px_36px_rgba(0,0,0,0.12)]",
  lg: "h-14 gap-2 px-5 text-sm shadow-[0_22px_48px_rgba(0,0,0,0.14)]",
};

export function RippleButton({
  href,
  children,
  variant = "white",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  rippleClassName,
  arrow = false,
  arrowSwap = false,
  ariaLabel,
  download = false,
  target,
  rel,
  type = "button",
  disabled = false,
}: RippleButtonProps) {
  const root = useRef<HTMLElement | null>(null);
  const ripple = useRef<HTMLSpanElement>(null);
  const styles = variantClasses[variant];

  const pointAt = (e: MouseEvent) => {
    const rect = root.current!.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
  };

  const reduced = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleEnter = (e: MouseEvent) => {
    const { x, y } = pointAt(e);
    if (disabled) return;
    gsap.killTweensOf(ripple.current);
    gsap.fromTo(
      ripple.current,
      { clipPath: `circle(0% at ${x}% ${y}%)` },
      {
        clipPath: `circle(${COVER}% at ${x}% ${y}%)`,
        duration: reduced() ? 0 : 0.5,
        ease: "power2.out",
      },
    );
  };

  const handleLeave = (e: MouseEvent) => {
    const { x, y } = pointAt(e);
    if (disabled) return;
    gsap.killTweensOf(ripple.current);
    gsap.to(ripple.current, {
      clipPath: `circle(0% at ${x}% ${y}%)`,
      duration: reduced() ? 0 : 0.45,
      ease: "power2.out",
    });
  };

  const setRoot = (node: HTMLElement | null) => {
    root.current = node;
  };

  const classNames = `group relative inline-flex cursor-pointer select-none items-center justify-center overflow-hidden whitespace-nowrap rounded-lg font-semibold leading-none outline-none transition-all duration-150 ease-out active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0 ${styles.button} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      <span
        ref={ripple}
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${
          rippleClassName ?? styles.ripple
        }`}
        style={{ clipPath: "circle(0% at 50% 50%)" }}
      />
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {icon && iconPosition === "left" ? icon : null}
        {children}
        {icon && iconPosition === "right" ? icon : null}
        {arrowSwap ? (
          <span
            aria-hidden
            className="relative inline-block h-4 w-4 overflow-hidden"
          >
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-x-full"
            />
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"
            />
          </span>
        ) : arrow ? (
          <ArrowRight aria-hidden className="arrow" size={16} strokeWidth={1.5} />
        ) : null}
      </span>
    </>
  );

  if (!href) {
    return (
      <button
        ref={setRoot}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={classNames}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      ref={setRoot}
      href={href}
      aria-label={ariaLabel}
      download={download || undefined}
      target={target}
      rel={rel}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={classNames}
    >
      {content}
    </a>
  );
}
