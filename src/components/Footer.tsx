"use client";

import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionary";
import { navigateToTab } from "./portfolio-nav";

type FooterProps = {
  t: Dictionary["footer"];
};

export function Footer({ t }: FooterProps) {
  const footerLinks = [
    { href: "/#work", label: t.projects },
    { href: "/#about", label: t.about },
    { href: "/contact", label: t.contact },
  ];

  return (
    <footer className="border-t border-secondary py-10">
      <div className="shell flex flex-wrap items-center justify-between gap-6">
        <Link href="/#top" className="inline-flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-primary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.png" alt="marvo logo" width={34} height={34} />
          </span>
        </Link>
        <div className="flex flex-wrap gap-7 text-[13px] text-fg-muted">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              scroll={
                link.href === "/#about" || link.href === "/#work"
                  ? false
                  : undefined
              }
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0)
                  return;
                if (navigateToTab(link.href)) e.preventDefault();
              }}
              className="transition-colors duration-200 ease-out hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-fg-subtle">
          &copy; 2026 {t.copyright}
        </div>
      </div>
    </footer>
  );
}
