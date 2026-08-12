"use client";

import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, type MouseEvent, useState } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { LanguageSwitch } from "./LanguageSwitch";
import { navigateToTab } from "./portfolio-nav";
import { RippleButton } from "./RippleButton";

type HeaderProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  language: Dictionary["language"];
};

export function Header({ locale, nav, language }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "/#top", label: nav.home },
    { href: "/#about", label: nav.about },
    { href: "/#work", label: nav.projects },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 720) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleMobileLinkClick = (
    href: string,
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0)
      return;

    setMenuOpen(false);
    if (navigateToTab(href)) event.preventDefault();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Pasek nawigacji jest górną krawędzią jasnej ramki, więc zawsze
          chodzi na odwróconej palecie. */}
      <div
        className={`invert-theme relative z-50 flex h-(--header-h) w-full items-center justify-between px-6 transition-[border-color,box-shadow] duration-400 ease-out md:px-8 ${
          scrolled
            ? "border-b border-secondary shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            : "border-b border-transparent"
        }`}
      >
        <Link href="/#top" className="inline-flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-primary">
            {/* Ikona ma białe tło bez alfy, więc na ciemnym kafelku odwracamy ją filtrem. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="marvo logo"
              width={34}
              height={34}
              className="invert"
            />
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={nav.mainAria}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
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
              className="inline-flex rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-fg transition-[background-color,border-color,backdrop-filter] duration-200 ease-out hover:border-primary/10 hover:bg-primary/10 hover:backdrop-blur-md"
            >
              {link.label}
            </Link>
          ))}
          <RippleButton
            href="/contact"
            variant="black"
            size="sm"
            icon={<Mail aria-hidden size={16} strokeWidth={1.8} />}
            iconPosition="left"
            className="ml-2"
          >
            {nav.contact}
          </RippleButton>
          <LanguageSwitch
            locale={locale}
            label={language.label}
            labels={language}
            className="ml-2"
          />
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-primary/15 bg-primary/10 text-fg transition-[background-color,border-color,transform] duration-200 ease-out hover:bg-primary/15 active:scale-95 md:hidden"
        >
          {menuOpen ? (
            <X aria-hidden size={22} strokeWidth={1.8} />
          ) : (
            <Menu aria-hidden size={22} strokeWidth={1.8} />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 flex min-h-svh flex-col bg-[#080808] px-6 pb-8 pt-28 text-[#f4f4ef] transition-[opacity,transform,visibility] duration-500 ease-[var(--ease-out)] md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0"
        }`}
      >
        <nav
          aria-label={nav.mobileAria}
          className="flex flex-1 flex-col gap-3 pt-12"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={
                link.href === "/#about" || link.href === "/#work"
                  ? false
                  : undefined
              }
              onClick={(event) => handleMobileLinkClick(link.href, event)}
              className="flex border-b border-white/10 py-5 font-display text-[clamp(30px,11vw,56px)] font-medium leading-none tracking-[-0.04em] text-[#f4f4ef]"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="grid gap-3">
          <LanguageSwitch
            locale={locale}
            label={language.label}
            labels={language}
            className="mx-auto"
          />
          <RippleButton
            href="/contact"
            variant="white"
            size="lg"
            icon={<Mail aria-hidden size={18} strokeWidth={1.8} />}
            iconPosition="left"
            className="w-full"
          >
            {nav.contact}
          </RippleButton>
        </div>
      </div>
    </header>
  );
}
