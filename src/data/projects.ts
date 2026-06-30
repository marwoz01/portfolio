import type { Locale } from "@/i18n/config";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  orientation: "wide" | "tall";
  fit?: "contain" | "cover";
};

export type ProjectLogo = {
  src: string;
  alt: string;
  className?: string;
};

type ProjectTranslation = {
  name?: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  challengePoints: string[];
  result: string;
  fallbackLabel?: string;
};

export type ProjectCase = {
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  challengePoints: string[];
  result: string;
  technologies: string[];
  logo?: ProjectLogo;
  fallbackIcon?: "clapperboard";
  fallbackLabel?: string;
  live?: string;
  github?: string;
  previewImage: string;
  tallImage: string;
  galleryImages: ProjectGalleryImage[];
  translations?: Partial<Record<Locale, ProjectTranslation>>;
};

export const projects: ProjectCase[] = [
  {
    slug: "oxfordmed",
    name: "Oxfordmed",
    shortDescription:
      "Oxfordmed to strona dla centrum medycznego, która porządkuje ofertę placówki i ułatwia szybkie przejście do kontaktu. Projekt stawia na spokojny język wizualny, jasną hierarchię informacji i poczucie zaufania.",
    overview:
      "Oxfordmed to projekt odświeżenia strony placówki medycznej. Najważniejsze było uporządkowanie treści, poprawa czytelności oraz stworzenie spokojnego interfejsu, który pomaga użytkownikowi szybko znaleźć potrzebne informacje.",
    challenge:
      "W projekcie trzeba było połączyć zaufanie, prostotę i funkcjonalność. Strona medyczna nie może być efekciarska kosztem czytelności, dlatego nacisk położyłem na strukturę, kontrast i jasne punkty kontaktu.",
    challengePoints: [
      "Uporządkowanie informacji o placówce i usługach",
      "Zaprojektowanie spokojnego, wiarygodnego języka wizualnego",
      "Skrócenie drogi do kontaktu i najważniejszych danych",
      "Dopilnowanie responsywności dla użytkowników mobilnych",
    ],
    result:
      "Powstała przejrzysta strona z wyraźną hierarchią treści, spokojną estetyką i prostszą ścieżką kontaktu. Interfejs wspiera szybkie skanowanie informacji i wzmacnia profesjonalny odbiór marki.",
    translations: {
      en: {
        shortDescription:
          "Oxfordmed is a website for a medical center that organizes the clinic’s offer and makes it easier to get in touch quickly. The project focuses on a calm visual language, clear information hierarchy and a sense of trust.",
        overview:
          "Oxfordmed is a redesign concept for a medical facility website. The key goal was to organize the content, improve readability and create a calm interface that helps users quickly find the information they need.",
        challenge:
          "The project had to combine trust, simplicity and functionality. A medical website cannot trade clarity for visual noise, so the focus was on structure, contrast and clear contact points.",
        challengePoints: [
          "Organizing information about the clinic and its services",
          "Designing a calm and trustworthy visual language",
          "Shortening the path to contact and key information",
          "Keeping the experience responsive for mobile users",
        ],
        result:
          "The result is a clear website with strong content hierarchy, calm aesthetics and a simpler contact path. The interface supports quick scanning and strengthens the professional perception of the brand.",
      },
    },
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Payload CMS",
      "Spline",
      "GSAP",
      "Framer Motion",
    ],
    logo: {
      src: "/images/projects/logos/oxfordmed.svg",
      alt: "Logo Oxfordmed",
      className: "h-10 max-w-[180px]",
    },
    previewImage: "/images/projects/oxfordmed.png",
    tallImage: "/images/projects/tall/oxfordmed.jpg",
    galleryImages: [
      {
        src: "/images/projects/oxfordmed.png",
        alt: "Widok strony Oxfordmed - hero",
        orientation: "wide",
      },
      {
        src: "/images/projects/oxfordmed (1).png",
        alt: "Widok strony Oxfordmed - proces",
        orientation: "wide",
      },
      {
        src: "/images/projects/oxfordmed (2).png",
        alt: "Widok strony Oxfordmed - oferta",
        orientation: "wide",
      },
      {
        src: "/images/projects/oxfordmed (3).png",
        alt: "Widok strony Oxfordmed - informacje",
        orientation: "wide",
      },
      {
        src: "/images/projects/oxfordmed (4).png",
        alt: "Widok strony Oxfordmed - kontakt",
        orientation: "wide",
      },
    ],
  },
  {
    slug: "pimento",
    name: "Pimento",
    shortDescription:
      "Pimento to firma technologiczna skupiona na agentach AI, lokalnej infrastrukturze AI i cyberbezpieczeństwie. Pomaga organizacjom wdrażać prywatne rozwiązania AI, które działają pod pełną kontrolą zespołu i bez uzależnienia od jednego dostawcy.",
    overview:
      "Pimento to projekt strony dla firmy technologicznej działającej w obszarze agentów AI, lokalnej infrastruktury AI i cyberbezpieczeństwa. Celem było stworzenie interfejsu, który jasno komunikuje specjalistyczną ofertę i od pierwszych sekund buduje poczucie jakości.",
    challenge:
      "Największym wyzwaniem było przełożenie technicznego, mocno specjalistycznego zakresu usług na czytelny i nowoczesny landing. Strona miała wyglądać dojrzale, ale nadal prowadzić użytkownika prostą ścieżką przez ofertę.",
    challengePoints: [
      "Ułożenie hierarchii informacji dla złożonej oferty technologicznej",
      "Zaprojektowanie mocnego pierwszego ekranu z jasnym komunikatem",
      "Połączenie ciemnej estetyki z dobrą czytelnością treści",
      "Dopracowanie motion i mikroanimacji bez przeciążania interfejsu",
    ],
    result:
      "Efektem jest ciemny, dopracowany landing z wyraźnym podziałem usług, mocną typografią i płynnymi animacjami. Strona lepiej opowiada o wartości produktu i sprawia, że trudny technologicznie temat jest łatwiejszy do zrozumienia.",
    translations: {
      en: {
        shortDescription:
          "Pimento is a technology company focused on AI agents, local AI infrastructure and cybersecurity. It helps organizations deploy private AI solutions that stay under the team’s full control and avoid vendor lock-in.",
        overview:
          "Pimento is a website project for a technology company operating in AI agents, local AI infrastructure and cybersecurity. The goal was to create an interface that communicates a specialized offer clearly and builds a sense of quality from the first seconds.",
        challenge:
          "The main challenge was translating a technical, highly specialized service offer into a clear and modern landing page. The site needed to feel mature while still guiding users through the offer in a simple way.",
        challengePoints: [
          "Structuring information for a complex technology offer",
          "Designing a strong first screen with a clear message",
          "Combining a dark aesthetic with strong content readability",
          "Refining motion and microinteractions without overloading the UI",
        ],
        result:
          "The result is a dark, polished landing page with clear service sections, strong typography and smooth animation. The website explains the product value better and makes a technically complex topic easier to understand.",
      },
    },
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Payload CMS",
      "Spline",
      "GSAP",
      "Framer Motion",
    ],
    logo: {
      src: "/images/projects/logos/pimento.png",
      alt: "Logo Pimento",
      className: "h-10 max-w-[180px]",
    },
    live: "https://pimento.cloud/pl",
    previewImage: "/images/projects/pimento1.png",
    tallImage: "/images/projects/tall/pimento.jpg",
    galleryImages: [
      {
        src: "/images/projects/pimento1.png",
        alt: "Widok strony Pimento - hero",
        orientation: "wide",
        fit: "cover",
      },
      {
        src: "/images/projects/pimento2.png",
        alt: "Widok strony Pimento - sekcja usług",
        orientation: "wide",
        fit: "cover",
      },
      {
        src: "/images/projects/pimento3.png",
        alt: "Widok strony Pimento - szczegóły oferty",
        orientation: "wide",
        fit: "cover",
      },
      {
        src: "/images/projects/pimento4.png",
        alt: "Widok strony Pimento - sekcja informacyjna",
        orientation: "wide",
        fit: "cover",
      },
      {
        src: "/images/projects/pimento5.png",
        alt: "Widok strony Pimento - końcowa sekcja",
        orientation: "wide",
        fit: "cover",
      },
    ],
  },
  {
    slug: "showle",
    name: "Showle",
    shortDescription:
      "Showle to aplikacja dla kinomaniaków z codzienną zagadką, kolekcjami i rekomendacjami filmowymi. Projekt korzysta z TMDB API oraz embeddingów, żeby lepiej dopasowywać filmy do kontekstu i preferencji użytkownika.",
    overview:
      "Showle to aplikacja dla osób, które lubią filmy i chcą wracać do nich w bardziej angażujący sposób. Projekt łączy codzienną zagadkę, kolekcje, dane z TMDB API oraz rekomendacje wspierane embeddingami.",
    challenge:
      "Najważniejsze było połączenie elementu zabawy z czytelnym produktem użytkowym oraz sensownym systemem rekomendacji. Aplikacja miała być lekka, intuicyjna i gotowa do regularnego używania, bez nadmiaru ekranów i rozpraszających elementów.",
    challengePoints: [
      "Zaprojektowanie prostego flow dla codziennej zagadki",
      "Ułożenie widoków kolekcji i rekomendacji filmowych",
      "Wykorzystanie embeddingów do dopasowywania podobnych filmów",
      "Połączenie danych z TMDB API z własną logiką aplikacji",
    ],
    result:
      "Efektem jest responsywny interfejs z jasnym flow, prostą prezentacją funkcji i rekomendacjami wspieranymi embeddingami. Showle pokazuje podejście do aplikacji, w której produktowość, dane filmowe i warstwa wizualna pracują razem.",
    translations: {
      en: {
        shortDescription:
          "Showle is an app for movie fans with a daily quiz, collections and film recommendations. The project uses the TMDB API and embeddings to better match movies to the user’s context and preferences.",
        overview:
          "Showle is an app for people who enjoy movies and want a more engaging way to return to them. The project combines a daily quiz, collections, TMDB API data and recommendations supported by embeddings.",
        challenge:
          "The key challenge was combining a playful element with a clear utility product and a meaningful recommendation system. The app needed to feel light, intuitive and suitable for regular use without unnecessary screens or distractions.",
        challengePoints: [
          "Designing a simple flow for the daily quiz",
          "Structuring collection and recommendation views",
          "Using embeddings to match similar movies",
          "Combining TMDB API data with custom app logic",
        ],
        result:
          "The result is a responsive interface with a clear flow, simple feature presentation and recommendations supported by embeddings. Showle shows an approach where product thinking, film data and visual design work together.",
      },
    },
    technologies: ["React", "Next.js", "TypeScript", "TMDB API", "Embeddings"],
    fallbackIcon: "clapperboard",
    live: "https://showle.vercel.app/",
    previewImage: "/images/projects/showle (1).png",
    tallImage: "/images/projects/tall/showle.jpg",
    galleryImages: [
      {
        src: "/images/projects/showle (1).png",
        alt: "Widok aplikacji Showle - ekran główny",
        orientation: "wide",
      },
      {
        src: "/images/projects/showle (2).png",
        alt: "Widok aplikacji Showle - zagadka",
        orientation: "wide",
      },
      {
        src: "/images/projects/showle (3).png",
        alt: "Widok aplikacji Showle - szczegóły",
        orientation: "wide",
      },
      {
        src: "/images/projects/showle (4).png",
        alt: "Widok aplikacji Showle - kolekcja",
        orientation: "wide",
      },
      {
        src: "/images/projects/showle (5).png",
        alt: "Widok aplikacji Showle - rekomendacje",
        orientation: "wide",
      },
      {
        src: "/images/projects/showle (6).png",
        alt: "Widok aplikacji Showle - lista",
        orientation: "wide",
      },
      {
        src: "/images/projects/showle (7).png",
        alt: "Widok aplikacji Showle - dodatkowy ekran",
        orientation: "wide",
      },
    ],
  },
  {
    slug: "llm-demo",
    name: "LLM Demo",
    shortDescription:
      "LLM Demo pokazuje dwa koncepty: interfejs generowany przez AI pod potrzeby użytkownika oraz wykorzystanie Gaussian Splattingu do prezentacji przestrzeni 3D. Zamiast przebijać się przez dziesiątki podstron, użytkownik opisuje cel, a strona buduje właściwy interfejs na jego oczach.",
    overview:
      "LLM Demo prezentuje dwa kierunki pracy z nowoczesnym interfejsem: AI, które generuje UI pod intencję użytkownika, oraz Gaussian Splatting wykorzystywany do atrakcyjnej prezentacji przestrzeni, na przykład mieszkań. Koncept zakłada, że użytkownik nie musi szukać właściwej podstrony, tylko opisuje potrzebę, a interfejs dopasowuje się do niej w czasie rzeczywistym.",
    challenge:
      "Wyzwanie polegało na pokazaniu dwóch abstrakcyjnych technologii w prosty, zrozumiały sposób. Pierwszy koncept dotyczył strony, która generuje się pod potrzeby użytkownika, na przykład osoby szukającej kredytu w banku. Drugi dotyczył wykorzystania Gaussian Splattingu do prezentacji przestrzeni 3D.",
    challengePoints: [
      "Pokazanie idei interfejsu generowanego przez AI",
      "Opisanie flow bez konieczności przechodzenia przez wiele podstron",
      "Wykorzystanie Gaussian Splattingu jako warstwy prezentacji 3D",
      "Zbudowanie płynnego, prezentacyjnego doświadczenia",
    ],
    result:
      "Powstał elegancki demo landing, który komunikuje potencjał AI i Gaussian Splattingu bez przeładowania treścią. Projekt pokazuje, jak można uprościć złożoną usługę przez interfejs budowany wokół intencji użytkownika.",
    translations: {
      en: {
        shortDescription:
          "LLM Demo presents two concepts: an AI-generated interface tailored to the user’s needs and Gaussian Splatting used to present 3D spaces. Instead of moving through dozens of pages, the user describes a goal and the page builds the right interface in front of them.",
        overview:
          "LLM Demo presents two directions for modern interfaces: AI that generates UI around user intent, and Gaussian Splatting used for immersive presentation of spaces, such as apartments. The concept assumes that the user does not need to search for the right subpage, but describes the need and the interface adapts in real time.",
        challenge:
          "The challenge was to explain two abstract technologies in a simple, understandable way. The first concept was a website that generates itself around the user’s need, for example someone looking for a bank loan. The second focused on using Gaussian Splatting to present 3D spaces.",
        challengePoints: [
          "Showing the idea of an AI-generated interface",
          "Describing a flow without forcing users through many subpages",
          "Using Gaussian Splatting as a 3D presentation layer",
          "Building a smooth, presentation-focused experience",
        ],
        result:
          "The result is an elegant demo landing page that communicates the potential of AI and Gaussian Splatting without overwhelming the content. The project shows how a complex service can be simplified through an interface built around user intent.",
      },
    },
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "AI",
      "Gaussian Splatting",
      "3D",
    ],
    fallbackLabel: "LLM",
    previewImage: "/images/projects/llm-demo (1).jpg",
    tallImage: "/images/projects/llm-demo (1).jpg",
    galleryImages: [
      {
        src: "/images/projects/llm-demo (1).jpg",
        alt: "Widok LLM Demo - hero",
        orientation: "wide",
      },
      {
        src: "/images/projects/llm-demo (2).jpg",
        alt: "Widok LLM Demo - interfejs",
        orientation: "wide",
      },
      {
        src: "/images/projects/llm-demo (3).jpg",
        alt: "Widok LLM Demo - eksploracja",
        orientation: "wide",
      },
      {
        src: "/images/projects/llm-demo (4).jpg",
        alt: "Widok LLM Demo - sekcja końcowa",
        orientation: "wide",
      },
    ],
  },
  {
    slug: "chef-claude",
    name: "Chef Claude",
    shortDescription:
      "Chef Claude to aplikacja, która przyjmuje listę składników i wyszukuje pasujący przepis z TheMealDB. Projekt pokazuje prosty flow formularza, stanów aplikacji i prezentacji wyniku z zewnętrznego API.",
    overview:
      "Aplikacja pozwala dodać składniki, wyszukać dopasowany przepis i wyświetlić go w czytelnej formie. To praktyczne ćwiczenie pracy z Reactem, Vite i publicznym API bez backendu.",
    challenge:
      "Najważniejsze było zbudowanie przejrzystego procesu: od wpisania składników, przez wyszukiwanie, po czytelny wynik. Interfejs musiał obsługiwać zmienne dane, puste stany i szybkie iterowanie listy składników.",
    challengePoints: [
      "Obsługa listy składników dodawanych przez użytkownika",
      "Pobieranie i mapowanie danych z TheMealDB API",
      "Prezentacja przepisu w czytelnej strukturze",
      "Zachowanie prostego, responsywnego interfejsu",
    ],
    result:
      "Powstała lekka aplikacja Reactowa, która zamienia listę składników w konkretny przepis. Projekt dobrze pokazuje pracę ze stanem, API oraz prostą architekturą frontendu.",
    translations: {
      en: {
        shortDescription:
          "Chef Claude is an app that takes a list of ingredients and finds a matching recipe from TheMealDB. The project shows a simple form flow, application states and result presentation based on an external API.",
        overview:
          "The app lets users add ingredients, search for a matching recipe and display it in a clear format. It is a practical exercise in React, Vite and a public API without a backend.",
        challenge:
          "The main task was to build a clear process: from entering ingredients, through fetching data, to presenting a readable result. The interface had to handle variable data, empty states and fast iteration on the ingredient list.",
        challengePoints: [
          "Handling a list of ingredients added by the user",
          "Fetching and mapping data from TheMealDB API",
          "Presenting the recipe in a clear structure",
          "Keeping the interface simple and responsive",
        ],
        result:
          "The result is a lightweight React app that turns an ingredient list into a concrete recipe. The project demonstrates working with state, API data and a simple frontend architecture.",
      },
    },
    technologies: ["React", "Vite", "CSS", "TheMealDB API"],
    fallbackLabel: "Chef",
    live: "https://marwoz01.github.io/chef-claude/",
    github: "https://github.com/marwoz01/chef-claude",
    previewImage: "/images/projects/chef-claude (3).png",
    tallImage: "/images/projects/chef-claude (1).png",
    galleryImages: [
      {
        src: "/images/projects/chef-claude (1).png",
        alt: "Widok aplikacji Chef Claude - formularz",
        orientation: "wide",
      },
      {
        src: "/images/projects/chef-claude (2).png",
        alt: "Widok aplikacji Chef Claude - składniki",
        orientation: "wide",
      },
      {
        src: "/images/projects/chef-claude (3).png",
        alt: "Widok aplikacji Chef Claude - przepis",
        orientation: "wide",
      },
    ],
  },
  {
    slug: "tenzies",
    name: "Tenzies",
    shortDescription:
      "Tenzies to prosta gra w kości zbudowana w React, której celem było przećwiczenie stanu, warunków zwycięstwa i obsługi interakcji. Użytkownik może zatrzymywać wybrane kości między rzutami, aż wszystkie pokażą tę samą wartość.",
    overview:
      "Tenzies jest małą, interaktywną grą frontendową stworzoną po to, żeby przećwiczyć Reacta w praktyce. Projekt skupia się na stanie aplikacji, warunkach zwycięstwa, reakcji UI na kliknięcia i przyjemnym feedbacku po zakończeniu rozgrywki.",
    challenge:
      "Wyzwanie polegało na czytelnym zarządzaniu stanem kości, blokowaniem wybranych wartości oraz wykrywaniem momentu wygranej. Projekt miał przede wszystkim utrwalić podstawowe mechanizmy Reacta w małej, kompletnej aplikacji.",
    challengePoints: [
      "Generowanie i aktualizowanie wartości dziesięciu kości",
      "Obsługa zatrzymywania wybranych kości między rzutami",
      "Wykrywanie warunku zwycięstwa",
      "Dodanie jasnego feedbacku po zakończeniu gry",
    ],
    result:
      "Powstała kompaktowa gra Reactowa z prostym mechanizmem, szybkim flow i czytelną obsługą interakcji. Projekt dobrze pokazuje pracę ze stanem oraz logiką warunkową w UI.",
    translations: {
      en: {
        shortDescription:
          "Tenzies is a simple dice game built in React to practice state, win conditions and interaction handling. The user can hold selected dice between rolls until all dice show the same value.",
        overview:
          "Tenzies is a small interactive frontend game created to practice React in a practical context. The project focuses on application state, win conditions, UI response to clicks and pleasant feedback after winning.",
        challenge:
          "The challenge was to manage dice state clearly, lock selected values and detect the winning moment. The project was mainly about reinforcing core React mechanisms in a small, complete app.",
        challengePoints: [
          "Generating and updating ten dice values",
          "Handling selected dice held between rolls",
          "Detecting the win condition",
          "Adding clear feedback after finishing the game",
        ],
        result:
          "The result is a compact React game with a simple mechanic, fast flow and clear interaction handling. The project demonstrates state management and conditional UI logic.",
      },
    },
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    fallbackLabel: "Dice",
    live: "https://tenzies-iota-plum.vercel.app/",
    github: "https://github.com/marwoz01/tenzies",
    previewImage: "/images/projects/tenzies (3).png",
    tallImage: "/images/projects/tenzies (1).png",
    galleryImages: [
      {
        src: "/images/projects/tenzies (1).png",
        alt: "Widok gry Tenzies - rozgrywka",
        orientation: "wide",
      },
      {
        src: "/images/projects/tenzies (2).png",
        alt: "Widok gry Tenzies - zatrzymane kości",
        orientation: "wide",
      },
      {
        src: "/images/projects/tenzies (3).png",
        alt: "Widok gry Tenzies - wygrana",
        orientation: "wide",
      },
    ],
  },
  {
    slug: "character-counter",
    name: "Character Counter",
    shortDescription:
      "Character Counter to narzędzie do analizy tekstu w czasie rzeczywistym stworzone po to, żeby przećwiczyć JavaScript. Liczy znaki, słowa i zdania, pozwala wykluczać spacje, ustawić limit znaków oraz sprawdzić przybliżony czas czytania.",
    overview:
      "Projekt powstał jako praktyczne ćwiczenie JavaScriptu i pracy z tekstem w interfejsie. Aplikacja analizuje wpisywaną treść na bieżąco i prezentuje najważniejsze metryki w prosty, czytelny sposób.",
    challenge:
      "Największym wyzwaniem było połączenie kilku liczników i ustawień w jednym interfejsie bez wrażenia chaosu. Projekt miał przećwiczyć czysty JavaScript, reakcję na input użytkownika oraz aktualizowanie UI bez frameworka.",
    challengePoints: [
      "Analiza znaków, słów i zdań w czasie rzeczywistym",
      "Obsługa limitu znaków oraz opcji wykluczania spacji",
      "Wyliczanie czasu czytania i gęstości liter",
      "Dopracowanie jasnego i ciemnego motywu",
    ],
    result:
      "Powstało responsywne narzędzie, które daje szybki feedback podczas pisania i pomaga kontrolować długość tekstu. Projekt pokazuje czysty JavaScript, pracę z DOM oraz dopracowane stany UI.",
    translations: {
      en: {
        shortDescription:
          "Character Counter is a real-time text analysis tool created to practice JavaScript. It counts characters, words and sentences, lets users exclude spaces, set a character limit and check estimated reading time.",
        overview:
          "The project was created as a practical exercise in JavaScript and working with text in the interface. The app analyzes typed content in real time and presents key metrics in a simple, readable way.",
        challenge:
          "The main challenge was combining several counters and settings in one interface without making it feel crowded. The project was meant to practice vanilla JavaScript, reacting to user input and updating the UI without a framework.",
        challengePoints: [
          "Analyzing characters, words and sentences in real time",
          "Handling a character limit and excluding spaces",
          "Calculating reading time and letter density",
          "Refining light and dark theme states",
        ],
        result:
          "The result is a responsive tool that gives quick feedback while writing and helps control text length. The project shows vanilla JavaScript, DOM work and polished UI states.",
      },
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    fallbackLabel: "Text",
    live: "https://marwoz01.github.io/character-counter/",
    github: "https://github.com/marwoz01/character-counter",
    previewImage: "/images/projects/character-counter (1).png",
    tallImage: "/images/projects/character-counter (1).png",
    galleryImages: [
      {
        src: "/images/projects/character-counter (1).png",
        alt: "Widok Character Counter - ekran główny",
        orientation: "wide",
      },
      {
        src: "/images/projects/character-counter (2).png",
        alt: "Widok Character Counter - analiza tekstu",
        orientation: "wide",
      },
      {
        src: "/images/projects/character-counter (3).png",
        alt: "Widok Character Counter - ustawienia",
        orientation: "wide",
      },
      {
        src: "/images/projects/character-counter (4).png",
        alt: "Widok Character Counter - motyw",
        orientation: "wide",
      },
    ],
  },
  {
    slug: "gta-vi-landing",
    name: "GTA 6 Landing",
    shortDescription:
      "GTA 6 Landing to kopia landing page'a GTA 6 przygotowana jako ćwiczenie z GSAP. Projekt skupia się na odtworzeniu klimatu, animacji i sekwencji interfejsu znanych z premierowej strony.",
    overview:
      "GTA 6 Landing to kopia landing page'a GTA 6, której głównym celem było przećwiczenie GSAP oraz pracy z animowanymi sekwencjami. Strona była ćwiczeniem z budowania efektownego doświadczenia frontendowego bez tracenia kontroli nad responsywnością.",
    challenge:
      "Głównym wyzwaniem było odtworzenie dynamicznego, medialnego doświadczenia z landing page'a GTA 6 w taki sposób, żeby animacje GSAP wspierały odbiór strony, a nie zasłaniały treść ani nie spowalniały interfejsu.",
    challengePoints: [
      "Zaprojektowanie sekwencji animacji w GSAP",
      "Utrzymanie płynności przejść i czytelności warstw",
      "Dopasowanie hero i układu do różnych szerokości ekranu",
      "Zachowanie lekkiej struktury mimo mocnego efektu wizualnego",
    ],
    result:
      "Rezultatem jest lekka, responsywna strona z płynną animacją UI i wyraźnym klimatem inspirowanym premierowym landingiem. Projekt pokazuje pracę z motion i kontrolą detali na poziomie interakcji.",
    translations: {
      en: {
        shortDescription:
          "GTA 6 Landing is a copy of the GTA 6 landing page created as a GSAP exercise. The project focuses on recreating the mood, animation and interface sequences known from the launch page.",
        overview:
          "GTA 6 Landing is a copy of the GTA 6 landing page, built mainly to practice GSAP and animated sequences. The page was an exercise in creating a strong frontend experience while keeping control over responsiveness.",
        challenge:
          "The main challenge was recreating a dynamic, media-heavy experience from the GTA 6 landing page in a way where GSAP animations support the page instead of hiding content or slowing the interface down.",
        challengePoints: [
          "Designing animation sequences in GSAP",
          "Keeping transitions smooth and layers readable",
          "Adapting the hero and layout to different screen widths",
          "Keeping the structure lightweight despite the strong visual effect",
        ],
        result:
          "The result is a lightweight, responsive page with smooth UI animation and a clear mood inspired by the launch landing page. The project shows motion work and attention to interaction details.",
      },
    },
    technologies: ["React", "Vite", "JavaScript", "GSAP"],
    logo: {
      src: "/images/projects/gta.svg",
      alt: "Logo Grand Theft Auto",
      className: "h-24 max-w-[150px]",
    },
    live: "https://gta-vi-landing-xi.vercel.app/",
    github: "https://github.com/marwoz01/gta-vi-landing",
    previewImage: "/images/projects/gta1.png",
    tallImage: "/images/projects/tall/gta6.jpg",
    galleryImages: [
      {
        src: "/images/projects/gta1.png",
        alt: "Widok GTA 6 Landing - hero",
        orientation: "wide",
      },
      {
        src: "/images/projects/gta2.png",
        alt: "Widok GTA 6 Landing - sekcja treści",
        orientation: "wide",
      },
      {
        src: "/images/projects/gta3.png",
        alt: "Widok GTA 6 Landing - galeria",
        orientation: "wide",
      },
      {
        src: "/images/projects/gta4.png",
        alt: "Widok GTA 6 Landing - końcowy ekran",
        orientation: "wide",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getLocalizedProject(
  project: ProjectCase,
  locale: Locale,
): ProjectCase {
  if (locale === "pl") return project;

  const translation = project.translations?.[locale];
  return translation
    ? {
        ...project,
        ...translation,
        name: translation.name ?? project.name,
        fallbackLabel: translation.fallbackLabel ?? project.fallbackLabel,
      }
    : project;
}

export function getProjectUrl(slug: string) {
  return `/portfolio/${slug}`;
}
