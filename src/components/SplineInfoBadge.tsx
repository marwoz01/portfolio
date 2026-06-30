"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type SplineInfoBadgeProps = {
  badges: readonly {
    label: string;
    title: string;
  }[];
};

export function SplineInfoBadge({ badges }: SplineInfoBadgeProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;

    gsap.set(root.current, { autoAlpha: 1 });

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(
          ".badge-card",
          root.current,
        );

        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 12, scale: 0.98 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: 0.45,
            stagger: 0.12,
          },
        );
      }, root);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={root}
      className="absolute inset-0 z-10 flex items-center justify-center text-fg"
    >
      <div className="flex w-full max-w-[18rem] flex-col gap-7 px-4">
        {badges.map((badge, index) => (
          <div
            key={badge.label}
            className={
              index === 1
                ? "translate-x-4 md:translate-x-5"
                : "-translate-x-4 md:-translate-x-5"
            }
          >
            <div className="badge-card flex w-full items-center gap-3 rounded-lg border border-secondary bg-bg/80 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.42)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] font-medium leading-none text-fg-muted">
                  {badge.label}
                </span>
                <span className="mt-1 block text-sm font-medium leading-tight text-fg">
                  {badge.title}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
