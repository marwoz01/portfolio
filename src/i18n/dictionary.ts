import type { Locale } from "./config";

export const dictionary = {
  pl: {
    metadata: {
      title: "Marcel Woźniak - Frontend Developer",
      description:
        "Portfolio Marcela Woźniaka, frontend developera tworzącego dopracowane interfejsy webowe.",
    },
    nav: {
      home: "Strona główna",
      about: "O mnie",
      projects: "Projekty",
      contact: "Kontakt",
      mainAria: "Główna nawigacja",
      mobileAria: "Nawigacja mobilna",
      openMenu: "Otwórz menu",
      closeMenu: "Zamknij menu",
    },
    language: {
      label: "Zmień język",
      pl: "PL",
      en: "EN",
    },
    hero: {
      name: "Marcel Woźniak",
      role: "Frontend Developer",
      description:
        "Buduję responsywne interfejsy w React, Next.js i TypeScript, dbając o czysty kod, dostępność, wydajność oraz dopracowane detale UI.",
      primaryCta: "Zobacz projekty",
      secondaryCta: "Porozmawiajmy",
      scrollAria: "Przewiń do projektów",
      badges: [
        {
          label: "Front-end",
          title: "React + Next.js + TypeScript",
        },
        {
          label: "UX-first",
          title: "Dostępne, responsywne UI",
        },
        {
          label: "Quality",
          title: "Czyste komponenty + performance",
        },
      ],
    },
    portfolio: {
      tabs: {
        about: "O mnie",
        work: "Projekty",
      },
      tabsAria: "Sekcje portfolio",
      name: "Marcel Woźniak",
      locationLabel: "Lokalizacja",
      location: "Gdańsk, Polska",
      educationLabel: "Edukacja",
      education: "Student ostatniego roku Informatyki na PJATK w Gdańsku",
      languagesLabel: "Języki",
      languages: "Polski (ojczysty), angielski B2",
      availabilityLabel: "Dostępność",
      availability: "Otwarty na współpracę",
      bio: "Tworzę rozwiązania frontendowe, które łączą solidną warstwę techniczną z dobrym zrozumieniem docelowego użytkownika. Lubię wiedzieć, jaki problem rozwiązuję, dla kogo tworzę projekt i w jaki sposób mogę uprościć użytkownikowi drogę do celu. Nie ograniczam się do samej implementacji, wychodzę ze swoimi inicjatywami, proponuję rozwiązania i dbam o detale, które wpływają na jakość produktu. Dodatkowo wykorzystuję AI jako narzędzie do przyspieszenia mojej pracy.",
      skills: [
        {
          group: "Front-end",
          items: ["JavaScript", "TypeScript", "React", "Next.js"],
        },
        {
          group: "UI / styling",
          items: ["HTML", "CSS", "Tailwind CSS", "Figma"],
        },
        {
          group: "Back-end / CMS",
          items: ["Node.js", "Express", "Payload CMS"],
        },
        { group: "Motion", items: ["GSAP", "Framer Motion"] },
        { group: "Workflow", items: ["Git", "Claude Code", "Codex"] },
      ],
      links: {
        cv: "CV",
        email: "Email",
      },
      details: "Poznaj szczegóły",
      live: "Zobacz live",
      previousProject: "Poprzedni projekt",
      nextProject: "Następny projekt",
      showProject: "Pokaż projekt",
      projectFallback: "Projekt",
      screenshotAlt: "Screenshot projektu",
    },
    contactCta: {
      title: "Zbudujmy coś razem",
      description:
        "Jeśli widzisz przestrzeń do współpracy, szukasz frontend developera albo chcesz porozmawiać o projekcie, odezwij się. Chętnie sprawdzę, gdzie mogę wnieść najwięcej wartości.",
      button: "Napisz do mnie",
    },
    contactPage: {
      metadataTitle: "Kontakt - Marcel Woźniak",
      metadataDescription:
        "Kontakt w sprawie ról frontendowych, współpracy i projektów.",
      title: "Napisz do mnie",
      description:
        "Odezwij się w sprawie roli frontendowej, współpracy albo projektu do omówienia. Napisz kilka konkretów, a odpiszę na adres podany w formularzu.",
    },
    contactForm: {
      name: "Imię",
      namePlaceholder: "Jan",
      email: "Email",
      emailPlaceholder: "mail@example.com",
      subject: "Temat",
      subjectPlaceholder: "Rola frontendowa / współpraca / pytanie",
      message: "Wiadomość",
      messagePlaceholder:
        "Napisz kilka zdań o kontekście, roli, projekcie albo temacie rozmowy.",
      company: "Firma",
      submit: "Wyślij wiadomość",
      pending: "Wysyłanie...",
      success: "Wiadomość wysłana. Odezwę się najszybciej jak mogę.",
      error:
        "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.",
    },
    footer: {
      projects: "Projekty",
      about: "O mnie",
      contact: "Kontakt",
      copyright: "Marcel Wozniak",
    },
    projectPage: {
      fallbackTitle: "Projekt - Marcel Woźniak",
      challengeTitle: "Główne zadanie & wyzwania",
      linksTitle: "Linki projektu",
      live: "Otwórz stronę live",
      code: "Zobacz kod",
      screenshotAlt: "Screenshot projektu",
    },
  },
  en: {
    metadata: {
      title: "Marcel Woźniak - Frontend Developer",
      description:
        "Portfolio of Marcel Woźniak, a frontend developer building polished web interfaces.",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      mainAria: "Main navigation",
      mobileAria: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    language: {
      label: "Change language",
      pl: "PL",
      en: "EN",
    },
    hero: {
      name: "Marcel Woźniak",
      role: "Frontend Developer",
      description:
        "I build responsive interfaces in React, Next.js and TypeScript, with care for clean code, accessibility, performance and polished UI details.",
      primaryCta: "See projects",
      secondaryCta: "Let’s talk",
      scrollAria: "Scroll to projects",
      badges: [
        {
          label: "Front-end",
          title: "React + Next.js + TypeScript",
        },
        {
          label: "UX-first",
          title: "Accessible, responsive UI",
        },
        {
          label: "Quality",
          title: "Clean components + performance",
        },
      ],
    },
    portfolio: {
      tabs: {
        about: "About",
        work: "Projects",
      },
      tabsAria: "Portfolio sections",
      name: "Marcel Woźniak",
      locationLabel: "Location",
      location: "Gdańsk, Poland",
      educationLabel: "Education",
      education: "Final-year Computer Science student at PJATK in Gdańsk",
      languagesLabel: "Languages",
      languages: "Polish (native), English B2",
      availabilityLabel: "Availability",
      availability: "Open to opportunities",
      bio: "I build frontend solutions that combine a solid technical layer with a strong understanding of the end user. I like to know what problem I am solving, who the project is for and how I can simplify the path to the goal. I do not limit myself to implementation only: I bring ideas, suggest solutions and care about details that affect product quality. I also use AI as a tool to speed up my workflow.",
      skills: [
        {
          group: "Front-end",
          items: ["JavaScript", "TypeScript", "React", "Next.js"],
        },
        {
          group: "UI / styling",
          items: ["HTML", "CSS", "Tailwind CSS", "Figma"],
        },
        {
          group: "Back-end / CMS",
          items: ["Node.js", "Express", "Payload CMS"],
        },
        { group: "Motion", items: ["GSAP", "Framer Motion"] },
        { group: "Workflow", items: ["Git", "Claude Code", "Codex"] },
      ],
      links: {
        cv: "CV",
        email: "Email",
      },
      details: "View details",
      live: "View live",
      previousProject: "Previous project",
      nextProject: "Next project",
      showProject: "Show project",
      projectFallback: "Project",
      screenshotAlt: "Project screenshot",
    },
    contactCta: {
      title: "Let’s build something together",
      description:
        "If you see room for collaboration, are looking for a frontend developer or want to discuss a project, reach out. I will gladly check where I can bring the most value.",
      button: "Contact me",
    },
    contactPage: {
      metadataTitle: "Contact - Marcel Woźniak",
      metadataDescription:
        "Contact about frontend roles, collaboration and projects.",
      title: "Contact me",
      description:
        "Reach out about a frontend role, collaboration or a project worth discussing. Share a few details and I will reply to the email address from the form.",
    },
    contactForm: {
      name: "Name",
      namePlaceholder: "John",
      email: "Email",
      emailPlaceholder: "mail@example.com",
      subject: "Subject",
      subjectPlaceholder: "Frontend role / collaboration / question",
      message: "Message",
      messagePlaceholder:
        "Write a few sentences about the context, role, project or topic.",
      company: "Company",
      submit: "Send message",
      pending: "Sending...",
      success: "Message sent. I will get back to you as soon as I can.",
      error: "Could not send the message. Please try again in a moment.",
    },
    footer: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
      copyright: "Marcel Wozniak",
    },
    projectPage: {
      fallbackTitle: "Project - Marcel Woźniak",
      challengeTitle: "Main task & challenges",
      linksTitle: "Project links",
      live: "Open live site",
      code: "View code",
      screenshotAlt: "Project screenshot",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale];
}
