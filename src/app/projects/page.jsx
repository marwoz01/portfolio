export default function ProjectsPage() {
  const projects = [
    {
      title: "Character Counter",
      live: "https://marwoz01.github.io/character-counter/",
      github: "https://github.com/marwoz01/character-counter",
    },
    {
      title: "Library App",
      live: "https://tfn-library-app.vercel.app/",
      github:
        "https://github.com/marwoz01/TFN/tree/main/05-library-app/library-app",
    },
    {
      title: "Pokedex",
      live: "https://marwoz01.github.io/TFN/01-GameDex/",
      github: "https://github.com/marwoz01/TFN/tree/main/01-GameDex",
    },
    {
      title: "Movie Watch List",
      live: "https://marwoz01.github.io/Scrimba/09%20-%20Watch%20List/",
      github:
        "https://github.com/marwoz01/Scrimba/tree/main/09%20-%20Watch%20List",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 p-6 text-white text-right w-100">
      <ul className="flex flex-col divide-y divide-gray-500">
        {projects.map((project, index) => (
          <li key={index} className="py-3">
            <h4 className="text-3xl font-medium">{project.title}</h4>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors block"
            >
              Live preview
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors block"
            >
              Github repo
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
