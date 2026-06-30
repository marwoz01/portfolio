import type { Metadata } from "next";
import { Archivo_Black, Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { getDictionary } from "@/i18n/dictionary";
import { getLocale } from "@/i18n/get-locale";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  display: "swap",
});

const drukWide = localFont({
  src: "./fonts/druk-wide/DrukWide-Medium.ttf",
  weight: "500",
  style: "normal",
  variable: "--font-druk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.metadata.title,
    description: t.metadata.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${drukWide.variable} ${inter.variable} ${archivoBlack.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
