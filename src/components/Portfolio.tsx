"use client";

import {
  useEffect,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Download,
  Mail,
} from "lucide-react";
import {
  getLocalizedProject,
  getProjectUrl,
  projects,
} from "@/data/projects";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { RippleButton } from "./RippleButton";

type BrandIconProps = { size?: number } & SVGProps<SVGSVGElement>;

function GithubIcon({ size = 16, ...props }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.563C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, ...props }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type TabId = "about" | "work";

type AboutLink = {
  label: string;
  href: string;
  icon: ComponentType<
    SVGProps<SVGSVGElement> & {
      size?: number;
      strokeWidth?: number;
    }
  >;
  external?: boolean;
  download?: boolean;
};

const staticAboutLinks: AboutLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/marwoz01",
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcelwozniak01/",
    icon: LinkedinIcon,
    external: true,
  },
];

type PortfolioProps = {
  locale: Locale;
  t: Dictionary["portfolio"];
};

export function Portfolio({ locale, t }: PortfolioProps) {
  const [tab, setTab] = useState<TabId>("about");
  const [projectIndex, setProjectIndex] = useState(0);
  const [projectDirection, setProjectDirection] = useState<"next" | "prev">(
    "next",
  );
  const localizedProjects = projects.map((project) =>
    getLocalizedProject(project, locale),
  );
  const activeProject = localizedProjects[projectIndex];
  const ActiveLogoIcon =
    activeProject.fallbackIcon === "clapperboard" ? Clapperboard : null;
  const tabs: { id: TabId; label: string }[] = [
    { id: "about", label: t.tabs.about },
    { id: "work", label: t.tabs.work },
  ];
  const aboutLinks: AboutLink[] = [
    ...staticAboutLinks,
    { label: t.links.cv, href: "/cv.pdf", icon: Download, download: true },
    { label: t.links.email, href: "mailto:marwozniak01@gmail.com", icon: Mail },
  ];
  const showPreviousProject = () => {
    setProjectDirection("prev");
    setProjectIndex((i) => (i - 1 + localizedProjects.length) % localizedProjects.length);
  };
  const showNextProject = () => {
    setProjectDirection("next");
    setProjectIndex((i) => (i + 1) % localizedProjects.length);
  };
  const showProject = (index: number) => {
    if (index === projectIndex) return;
    setProjectDirection(index > projectIndex ? "next" : "prev");
    setProjectIndex(index);
  };

  useEffect(() => {
    // Scroll the portfolio tabs just under the fixed navbar, after the tab
    // content has rendered (so reflow doesn't throw off the position).
    const scrollToSection = (behavior: ScrollBehavior) => {
      requestAnimationFrame(() => {
        const el = document.getElementById("about");
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: Math.max(top, 0), behavior });
      });
    };

    const applyHash = (behavior: ScrollBehavior) => {
      const hash = window.location.hash.replace("#", "");
      if (hash !== "about" && hash !== "work") return;
      setTab(hash);
      scrollToSection(behavior);
    };

    applyHash("auto"); // direct load / cross-page landing

    // Navbar/footer clicks on the homepage dispatch this (see portfolio-nav.ts).
    const onSelectTab = (e: Event) => {
      const tab = (e as CustomEvent<TabId>).detail;
      if (tab !== "about" && tab !== "work") return;
      setTab(tab);
      scrollToSection("smooth");
    };
    // Browser back/forward and manual hash edits.
    const onPopHash = () => applyHash("smooth");

    window.addEventListener("portfoliotab", onSelectTab);
    window.addEventListener("hashchange", onPopHash);
    window.addEventListener("popstate", onPopHash);
    return () => {
      window.removeEventListener("portfoliotab", onSelectTab);
      window.removeEventListener("hashchange", onPopHash);
      window.removeEventListener("popstate", onPopHash);
    };
  }, []);

  return (
    <section
      id="work"
      className="invert-theme relative isolate overflow-hidden py-22 md:py-32"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icon.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 -z-10 hidden w-[min(82vh,760px)] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.07] mix-blend-multiply lg:block"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icon.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 -z-10 hidden w-[min(72vh,760px)] max-w-none translate-x-1/4 -translate-y-[34%] scale-x-[2.15] scale-y-[0.68] opacity-[0.065] mix-blend-multiply lg:block"
      />
      <div className="shell">
        <div
          className={`grid ${
            tab === "about"
              ? "gap-10 lg:grid-cols-[minmax(0,0.26fr)_minmax(0,0.74fr)] lg:gap-16"
              : "gap-16"
          }`}
        >
          {/* Lewy rail / pasek zakładek */}
          <div
            id="about"
            className={`scroll-mt-[100px] ${
              tab === "about" ? "lg:sticky lg:top-[100px] lg:self-start" : ""
            }`}
          >
            <div
              role="tablist"
              aria-label={t.tabsAria}
              className="flex w-fit gap-7 border-b border-secondary"
            >
              {tabs.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    id={`tab-${t.id}`}
                    aria-selected={active}
                    aria-controls={`panel-${t.id}`}
                    onClick={() => setTab(t.id)}
                    className={`relative -mb-px cursor-pointer pb-3 font-display text-[clamp(17px,1.7vw,22px)] font-medium tracking-[-0.02em] transition-colors duration-200 ease-out ${
                      active ? "text-fg" : "text-fg-subtle hover:text-fg-muted"
                    }`}
                  >
                    {t.label}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-fg transition-transform duration-300 ease-out ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {tab === "about" ? (
              <div className="mt-8 space-y-7">
                <div>
                  <h3 className="font-display text-[clamp(15px,1.5vw,19px)] font-medium leading-[1.05] tracking-[-0.02em] text-fg">
                    {t.name}
                  </h3>
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="font-mono text-[11px] font-medium text-fg-subtle">
                      {t.locationLabel}
                    </span>
                    <p className="mt-1.5 text-sm font-medium text-fg">
                      {t.location}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-medium text-fg-subtle">
                      {t.educationLabel}
                    </span>
                    <p className="mt-1.5 text-sm font-medium text-fg">
                      {t.education}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-medium text-fg-subtle">
                      {t.languagesLabel}
                    </span>
                    <p className="mt-1.5 text-sm font-medium text-fg">
                      {t.languages}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-medium text-fg-subtle">
                      {t.availabilityLabel}
                    </span>
                    <p className="mt-1.5 text-sm font-medium text-fg">
                      {t.availability}
                    </p>
                  </div>
                </div>
                <div className="flex w-44 flex-col gap-3">
                  {aboutLinks.map(
                    ({ label, href, icon: Icon, external, download }) => (
                      <RippleButton
                        key={label}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        download={download || undefined}
                        variant="white"
                        size="sm"
                        icon={<Icon aria-hidden size={15} strokeWidth={1.5} />}
                      >
                        {label}
                      </RippleButton>
                    ),
                  )}
                </div>
              </div>
            ) : null}
          </div>

          {/* Prawa kolumna */}
          <div key={tab} className="tab-enter min-w-0">
            {tab === "about" ? (
              <div
                id="panel-about"
                role="tabpanel"
                aria-labelledby="tab-about"
                className="flex h-full flex-col"
              >
                <div className="grid gap-6 md:grid-cols-[minmax(0,220px)_1fr] md:items-center md:gap-10">
                  <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-card border border-secondary bg-bg-alt">
                    <Image
                      src="/images/me.jpg"
                      alt="Marcel Woźniak"
                      fill
                      sizes="(min-width: 768px) 220px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[clamp(14px,1.1vw,16px)] leading-[1.6] text-fg">
                    {t.bio}
                  </p>
                </div>
                <div className="mt-10 flex flex-1 flex-col justify-between">
                  {t.skills.map((skill) => (
                    <div
                      key={skill.group}
                      className="grid gap-2 py-2.5 md:grid-cols-[160px_1fr] md:gap-6"
                    >
                      <span className="font-mono text-[11px] font-medium text-fg-subtle">
                        {skill.group}
                      </span>
                      <p className="text-[15px] leading-[1.5] text-fg-muted">
                        {skill.items.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                id="panel-work"
                role="tabpanel"
                aria-labelledby="tab-work"
                className="relative flex min-h-[clamp(420px,54vh,580px)] flex-col"
              >
                <div
                  key={projectIndex}
                  className={`project-slide-${projectDirection} grid flex-1 items-center gap-10 md:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] md:gap-12`}
                >
                  <div className="flex flex-col items-start">
                    <div className="flex h-10 items-center">
                      {activeProject.logo ? (
                        <Image
                          src={activeProject.logo.src}
                          alt={activeProject.logo.alt}
                          width={220}
                          height={96}
                          className={`w-auto object-contain ${
                            activeProject.logo.className ?? "h-10 max-w-[180px]"
                          }`}
                        />
                      ) : ActiveLogoIcon ? (
                        <ActiveLogoIcon
                          aria-hidden
                          size={34}
                          strokeWidth={1.5}
                          className="text-fg"
                      />
                    ) : (
                      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-fg">
                        {activeProject.fallbackLabel ?? t.projectFallback}
                      </span>
                    )}
                    </div>
                    <h3 className="mt-6 font-display text-[clamp(26px,2.8vw,38px)] font-medium tracking-[-0.02em] text-fg">
                      {activeProject.name}
                    </h3>
                    <p className="mt-3 max-w-[44ch] text-sm leading-[1.6] text-fg-muted">
                      {activeProject.shortDescription}
                    </p>
                    <div className="min-h-[148px]">
                      <div className="mt-5 flex flex-wrap items-center gap-1.5">
                        {activeProject.technologies.map((tag) => (
                          <span key={tag} className="tag-chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <RippleButton
                        href={getProjectUrl(activeProject.slug)}
                        variant="black"
                        className="mt-7"
                        arrowSwap
                      >
                        {t.details}
                      </RippleButton>
                      {activeProject.live && (
                        <div className="mt-4">
                          <a
                            href={activeProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="more text-fg-muted hover:text-fg"
                          >
                            {t.live}
                            <ArrowUpRight
                              aria-hidden
                              className="arrow"
                              size={15}
                              strokeWidth={1.5}
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.22)] ring-1 ring-black/5">
                    <Image
                      src={activeProject.previewImage}
                      alt={`${t.screenshotAlt}: ${activeProject.name}`}
                      fill
                      sizes="(max-width: 980px) 100vw, 60vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="mt-16 flex items-center justify-start gap-3 md:mt-20">
                  <button
                    type="button"
                    onClick={showPreviousProject}
                    aria-label={t.previousProject}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#111110] bg-[#111110] transition-colors duration-200 ease-out hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/30"
                  >
                    <ChevronLeft
                      aria-hidden
                      size={14}
                      strokeWidth={1.7}
                      className="text-white"
                    />
                  </button>
                  {localizedProjects.map((project, i) => (
                    <button
                      key={project.slug}
                      type="button"
                      onClick={() => showProject(i)}
                      aria-label={`${t.showProject}: ${project.name}`}
                      aria-current={i === projectIndex}
                      className={`h-2.5 w-2.5 rounded-full outline-none transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-fg/30 ${
                        i === projectIndex
                          ? "bg-bg-alt ring-1 ring-fg/40"
                          : "bg-fg hover:bg-fg/70"
                      }`}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={showNextProject}
                    aria-label={t.nextProject}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#111110] bg-[#111110] transition-colors duration-200 ease-out hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/30"
                  >
                    <ChevronRight
                      aria-hidden
                      size={14}
                      strokeWidth={1.7}
                      className="text-white"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
