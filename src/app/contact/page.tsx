import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.contactPage.metadataTitle,
    description: t.contactPage.metadataDescription,
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <>
      <Header locale={locale} nav={t.nav} language={t.language} />
      <main className="min-h-svh bg-bg pt-28 text-fg">
        <section className="shell py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start">
            <div>
              <h1 className="max-w-[10ch] font-display text-[clamp(42px,6vw,88px)] font-medium leading-[0.98] tracking-[-0.04em] text-fg">
                {t.contactPage.title}
              </h1>
              <p className="mt-6 max-w-[520px] text-[17px] leading-[1.6] text-fg-muted">
                {t.contactPage.description}
              </p>
              <a
                href="mailto:marwozniak01@gmail.com"
                className="mt-8 inline-flex text-sm font-medium text-fg underline underline-offset-4"
              >
                marwozniak01@gmail.com
              </a>
            </div>

            <ContactForm locale={locale} t={t.contactForm} />
          </div>
        </section>
      </main>
      <Footer t={t.footer} />
    </>
  );
}
