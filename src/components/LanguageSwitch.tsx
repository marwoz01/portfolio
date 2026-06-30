"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";

type LanguageSwitchProps = {
  locale: Locale;
  label: string;
  labels: {
    pl: string;
    en: string;
  };
  className?: string;
};

const options: Locale[] = ["pl", "en"];

export function LanguageSwitch({
  locale,
  label,
  labels,
  className = "",
}: LanguageSwitchProps) {
  const router = useRouter();

  const setLocale = async (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    const response = await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: nextLocale }),
    });

    if (response.ok) router.refresh();
  };

  return (
    <div
      aria-label={label}
      className={`inline-flex h-9 items-center overflow-hidden rounded-lg border border-secondary bg-bg/55 p-1 text-xs font-semibold text-fg shadow-[0_12px_28px_rgba(0,0,0,0.14)] backdrop-blur-md ${className}`}
    >
      {options.map((option) => {
        const active = option === locale;

        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => {
              void setLocale(option);
            }}
            className={`h-7 rounded-md px-2.5 transition-colors duration-200 ease-out ${
              active
                ? "bg-primary text-primary-contrast"
                : "text-fg-muted hover:text-fg"
            }`}
          >
            {labels[option]}
          </button>
        );
      })}
    </div>
  );
}
