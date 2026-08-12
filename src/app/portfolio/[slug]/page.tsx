import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RippleButton } from "@/components/RippleButton";
import { ScrollColorText } from "@/components/ScrollColorText";
import {
  getLocalizedProject,
  getProjectBySlug,
  projects,
} from "@/data/projects";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const locale = await getLocale();
  const t = getDictionary(locale);

  if (!project) {
    return {
      title: t.projectPage.fallbackTitle,
    };
  }

  const localizedProject = getLocalizedProject(project, locale);

  return {
    title: `${localizedProject.name} - Marcel Woźniak`,
    description: localizedProject.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const locale = await getLocale();
  const t = getDictionary(locale);

  if (!project) notFound();

  const localizedProject = getLocalizedProject(project, locale);

  return (
    <>
      <Header locale={locale} nav={t.nav} language={t.language} />
      <main className="invert-theme min-h-svh overflow-hidden pt-20 text-fg">
        <section className="relative isolate overflow-hidden">
          <Image
            src="/icon.png"
            alt=""
            aria-hidden
            width={760}
            height={760}
            className="pointer-events-none absolute left-0 top-1/2 -z-10 hidden w-[min(78vh,740px)] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.06] mix-blend-multiply lg:block"
          />
          <Image
            src="/icon.png"
            alt=""
            aria-hidden
            width={760}
            height={760}
            className="pointer-events-none absolute right-0 top-0 -z-10 hidden w-[min(68vh,720px)] max-w-none translate-x-1/4 -translate-y-[36%] scale-x-[2.1] scale-y-[0.68] opacity-[0.06] mix-blend-multiply lg:block"
          />

          <div className="shell flex flex-col items-center py-12 md:py-16">
            <h1 className="text-center font-display text-[clamp(42px,8vw,124px)] font-medium leading-[0.94] tracking-[-0.05em] text-fg">
              {localizedProject.name}
            </h1>

            <div className="relative mt-10 aspect-[1896/1033] w-full max-w-full overflow-hidden rounded-[28px] border border-secondary bg-[#ededeb] shadow-[0_28px_90px_rgba(0,0,0,0.22)] md:mt-12 md:max-w-[min(70vw,1120px)]">
              <Image
                src={localizedProject.previewImage}
                alt={`${t.projectPage.screenshotAlt}: ${localizedProject.name}`}
                fill
                priority
                sizes="(min-width: 980px) 70vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="shell">
            <ScrollColorText className="w-full text-left text-[clamp(20px,2.2vw,34px)] font-medium leading-[1.22] tracking-[-0.02em]">
              {localizedProject.shortDescription}
            </ScrollColorText>
          </div>
        </section>

        <section className="py-4 md:py-8">
          <div className="shell">
            <div className="rounded-[24px] border border-secondary bg-[#ededeb] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.08)] md:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(240px,0.36fr)_minmax(0,0.64fr)] lg:items-start">
                <h2 className="max-w-[420px] font-display text-[clamp(24px,3vw,40px)] font-medium uppercase leading-[1.02] tracking-[-0.03em] text-fg">
                  {t.projectPage.challengeTitle}
                </h2>
                <p className="max-w-[700px] text-sm leading-[1.65] text-fg-muted lg:ml-auto">
                  {localizedProject.challenge}
                </p>
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-4">
                {localizedProject.challengePoints.map((point, index) => {
                  const highlighted = index === 1;

                  return (
                    <div
                      key={point}
                      className={`min-h-[132px] rounded-xl border p-4 transition-colors duration-200 ${
                        highlighted
                          ? "border-[#111110] bg-[#111110] text-white"
                          : "border-secondary bg-bg-alt text-fg"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] font-medium uppercase tracking-[0.12em] ${
                          highlighted ? "text-white/55" : "text-fg-subtle"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-4 text-sm font-semibold leading-[1.35]">
                        {point}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden py-20 md:py-28">
          <Image
            src="/icon.png"
            alt=""
            aria-hidden
            width={720}
            height={720}
            className="pointer-events-none absolute left-0 top-24 -z-10 hidden w-[min(70vh,680px)] max-w-none -translate-x-1/2 opacity-[0.05] mix-blend-multiply lg:block"
          />

          <div className="shell">
            <div className="grid gap-4 md:grid-cols-2">
              {localizedProject.galleryImages.map((image) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden rounded-[24px] border border-secondary bg-[#ededeb] shadow-[0_26px_80px_rgba(0,0,0,0.18)] ${
                    image.orientation === "tall"
                      ? "aspect-[4/5]"
                      : "aspect-[1890/1030]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 980px) 66vw, 100vw"
                    className={`object-top ${
                      image.fit === "cover" ? "object-cover" : "object-contain"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {(localizedProject.live || localizedProject.github) && (
          <section className="pb-24 text-center md:pb-32">
            <div className="shell flex flex-col items-center gap-6">
              <p className="font-display text-[clamp(22px,3vw,36px)] font-medium tracking-[-0.02em] text-fg">
                {t.projectPage.linksTitle}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {localizedProject.live ? (
                  <RippleButton
                    href={localizedProject.live}
                    variant="black"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    arrow
                  >
                    {t.projectPage.live}
                  </RippleButton>
                ) : null}
                {localizedProject.github ? (
                  <RippleButton
                    href={localizedProject.github}
                    variant="white"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    arrow
                  >
                    {t.projectPage.code}
                  </RippleButton>
                ) : null}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer t={t.footer} />
    </>
  );
}
