import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";

export default async function Home() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <>
      <Header locale={locale} nav={t.nav} language={t.language} />
      <main>
        <Hero t={t.hero} />
        <Portfolio locale={locale} t={t.portfolio} />
        <ContactCta t={t.contactCta} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
