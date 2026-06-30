export const locales = ["pl", "en"] as const;
export const defaultLocale = "pl";
export const localeCookieName = "site-locale";

export type Locale = (typeof locales)[number];

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}
