"use client";

import { useEffect, useState } from "react";

// Loader renderuje się już w HTML z serwera, więc treść nie mignie przed nim.
const MIN_VISIBLE_MS = 700;
const MAX_VISIBLE_MS = 4000;
const FADE_MS = 550;

export function PageLoader() {
  const [leaving, setLeaving] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    let exited = false;
    let fadeTimer = 0;
    let removeTimer = 0;

    const exit = () => {
      if (exited) return;
      exited = true;
      setLeaving(true);
      removeTimer = window.setTimeout(() => setRemoved(true), FADE_MS);
    };

    const onReady = () => {
      const wait = Math.max(
        0,
        MIN_VISIBLE_MS - (performance.now() - startedAt),
      );
      fadeTimer = window.setTimeout(exit, wait);
    };

    // Gdyby "load" nie przyszedł (wolne zasoby), loader i tak schodzi.
    const hardStop = window.setTimeout(exit, MAX_VISIBLE_MS);

    if (document.readyState === "complete") onReady();
    else window.addEventListener("load", onReady, { once: true });

    return () => {
      window.removeEventListener("load", onReady);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(hardStop);
    };
  }, []);

  useEffect(() => {
    if (removed) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [removed]);

  if (removed) return null;

  return (
    <div
      id="page-loader"
      aria-hidden
      className={`page-loader${leaving ? " is-leaving" : ""}`}
    >
      <span className="page-loader-mark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon.png" alt="" width={46} height={46} />
      </span>
      <span className="page-loader-track">
        <span className="page-loader-bar" />
      </span>
    </div>
  );
}
