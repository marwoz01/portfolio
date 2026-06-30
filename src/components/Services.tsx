import { Reveal } from "./Reveal";

const services = [
  {
    num: "01",
    title: "Pierwszy ekran",
    desc: "Projektuje hero tak, zeby od razu komunikowalo jakosc, klarownosc i kierunek marki.",
  },
  {
    num: "02",
    title: "UI/UX design",
    desc: "Ukladam strukture informacji, hierarchie i flow tak, zeby interfejs byl latwy do zrozumienia.",
  },
  {
    num: "03",
    title: "Frontend",
    desc: "Buduje responsywne interfejsy w React i Next.js, z naciskiem na czytelny kod i wydajnosc.",
  },
  {
    num: "04",
    title: "Motion",
    desc: "Dodaje animacje GSAP tam, gdzie pomagaja prowadzic uwage uzytkownika.",
  },
  {
    num: "05",
    title: "Performance",
    desc: "Dbam o szybkie ladowanie, semantyke, dostepnosc i techniczne podstawy pod SEO.",
  },
  {
    num: "06",
    title: "Wdrozenie",
    desc: "Dowoze projekt od koncepcji po publikacje, z finalnym polish i wsparciem po starcie.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-22 md:py-32">
      <div className="shell">
        <Reveal className="mb-12 max-w-[760px]">
          <span className="eyebrow">Uslugi</span>
          <h2 className="section-title mt-4">Jak pracuje nad projektem.</h2>
          <p className="mt-6 text-[17px] leading-[1.55] text-fg-muted">
            Od pierwszego wrazenia po wdrozenie - kazdy etap ma sluzyc temu,
            zeby strona byla jasna, szybka i zapamietywalna.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.num}
              className="feature-card"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-fg-muted">
                {service.num}
              </span>
              <h3 className="feature-title">{service.title}</h3>
              <p className="feature-desc">{service.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
