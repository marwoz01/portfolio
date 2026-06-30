"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";
import { useEffect, useRef } from "react";

const SCENE = "https://prod.spline.design/lGFiuCAPyTjxpRPd/scene.splinecode";

export function HeroScene() {
  const root = useRef<HTMLDivElement>(null);
  const app = useRef<Application | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const spline = app.current;
        if (!spline) return;
        if (entry.isIntersecting) {
          if (spline.isStopped) spline.play();
        } else if (!spline.isStopped) {
          spline.stop();
        }
      },
      { threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} className="absolute inset-0 grayscale">
      <Spline
        scene={SCENE}
        onLoad={(spline) => {
          app.current = spline;
        }}
      />
      <div className="absolute bottom-0 right-0 h-72 w-[28rem] bg-bg [mask-image:radial-gradient(ellipse_at_bottom_right,black_0%,black_24%,rgba(0,0,0,0.72)_38%,transparent_72%)] md:h-96 md:w-[36rem]" />
      <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-bg [mask-image:linear-gradient(to_right,black,transparent_70%)] md:block" />
    </div>
  );
}
