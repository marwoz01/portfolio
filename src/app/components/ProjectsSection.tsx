"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  year: string;
  overview: string;
  tags: string[];
  industry: string[];
  client: string;
  live: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Character Counter",
    year: "2024",
    overview:
      "A lightweight text analysis tool that counts characters, words and reading time in real time.",
    tags: ["React", "UI Design", "Web App"],
    industry: ["Productivity"],
    client: "Personal",
    live: "https://marwoz01.github.io/character-counter/",
    github: "https://github.com/marwoz01/character-counter",
  },
  {
    title: "Library App",
    year: "2024",
    overview:
      "A full-stack library management app with book collections, search and user-friendly UI.",
    tags: ["Next.js", "Full-stack", "UI/UX"],
    industry: ["Education"],
    client: "TFN",
    live: "https://tfn-library-app.vercel.app/",
    github:
      "https://github.com/marwoz01/TFN/tree/main/05-library-app/library-app",
  },
  {
    title: "Pokedex",
    year: "2023",
    overview:
      "A classic Pokedex interface exploring game data with a clean, responsive layout.",
    tags: ["JavaScript", "API", "Responsive"],
    industry: ["Entertainment"],
    client: "TFN",
    live: "https://marwoz01.github.io/TFN/01-GameDex/",
    github: "https://github.com/marwoz01/TFN/tree/main/01-GameDex",
  },
  {
    title: "Movie Watch List",
    year: "2023",
    overview:
      "A movie tracker that lets users search titles and curate a personal watch list.",
    tags: ["JavaScript", "OMDb API", "UI Design"],
    industry: ["Entertainment"],
    client: "Scrimba",
    live: "https://marwoz01.github.io/Scrimba/09%20-%20Watch%20List/",
    github:
      "https://github.com/marwoz01/Scrimba/tree/main/09%20-%20Watch%20List",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index ?? 0
            );
            setActiveIndex(idx);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = projects[activeIndex];

  return (
    <section className="relative bg-black min-h-screen py-24 px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="lg:sticky lg:top-24 lg:self-start lg:h-[calc(100vh-8rem)]">
          <div className="flex flex-col gap-10">
            <div className="aspect-video w-full bg-linear-to-br from-zinc-800 to-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-600 text-sm">
              {active.title} preview
            </div>

            <div className="text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-x-8 border-t border-zinc-800 py-6">
                <div className="text-zinc-500">Overview</div>
                <p className="text-zinc-300">{active.overview}</p>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-8 border-t border-zinc-800 py-6">
                <div className="text-zinc-500">Tags</div>
                <div className="space-y-1 text-zinc-300">
                  {active.tags.map((t) => (
                    <div key={t}>{t}</div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-8 border-t border-zinc-800 py-6">
                <div className="text-zinc-500">Industry</div>
                <div className="space-y-1 text-zinc-300">
                  {active.industry.map((t) => (
                    <div key={t}>{t}</div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-8 border-t border-zinc-800 py-6">
                <div className="text-zinc-500">Client</div>
                <div className="text-zinc-300">{active.client}</div>
              </div>
            </div>

            <div className="flex gap-6 text-sm border-t border-zinc-800 pt-6">
              <a
                href={active.live}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
              >
                Explore the case →
              </a>
              <a
                href={active.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 text-sm">
            {active.year}
          </div>

          <ul className="flex flex-col py-[40vh]">
            {projects.map((p, i) => (
              <li
                key={p.title}
                data-index={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={`text-5xl md:text-7xl font-light tracking-tight py-4 transition-colors duration-300 ${
                  i === activeIndex ? "text-white" : "text-zinc-700"
                }`}
              >
                {p.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
