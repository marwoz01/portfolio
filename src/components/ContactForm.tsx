"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { RippleButton } from "./RippleButton";

type FormStatus =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

type ContactFormProps = {
  locale: Locale;
  t: Dictionary["contactForm"];
};

export function ContactForm({ locale, t }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setPending(true);
    setStatus({ type: "idle", message: "" });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...Object.fromEntries(formData), locale }),
    });

    const result = (await response.json().catch(() => null)) as {
      message?: string;
    } | null;

    setPending(false);

    if (!response.ok) {
      setStatus({
        type: "error",
        message:
          result?.message ??
          t.error,
      });
      return;
    }

    form.reset();
    setStatus({
      type: "success",
      message: t.success,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-primary-contrast/10 bg-primary p-6 text-primary-contrast shadow-[0_24px_80px_rgba(0,0,0,0.36)] md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          {t.name}
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-2 h-12 w-full rounded-lg border border-primary-contrast/10 bg-primary-contrast/[0.04] px-4 text-sm outline-none transition-colors duration-200 placeholder:text-primary-contrast/35 focus:border-primary-contrast/30"
            placeholder={t.namePlaceholder}
          />
        </label>

        <label className="block text-sm font-medium">
          {t.email}
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 h-12 w-full rounded-lg border border-primary-contrast/10 bg-primary-contrast/[0.04] px-4 text-sm outline-none transition-colors duration-200 placeholder:text-primary-contrast/35 focus:border-primary-contrast/30"
            placeholder={t.emailPlaceholder}
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium">
        {t.subject}
        <input
          name="subject"
          className="mt-2 h-12 w-full rounded-lg border border-primary-contrast/10 bg-primary-contrast/[0.04] px-4 text-sm outline-none transition-colors duration-200 placeholder:text-primary-contrast/35 focus:border-primary-contrast/30"
          placeholder={t.subjectPlaceholder}
        />
      </label>

      <label className="mt-5 block text-sm font-medium">
        {t.message}
        <textarea
          name="message"
          required
          rows={7}
          className="mt-2 w-full resize-none rounded-lg border border-primary-contrast/10 bg-primary-contrast/[0.04] px-4 py-3 text-sm leading-[1.55] outline-none transition-colors duration-200 placeholder:text-primary-contrast/35 focus:border-primary-contrast/30"
          placeholder={t.messagePlaceholder}
        />
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          {t.company}
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <RippleButton
          type="submit"
          variant="black"
          size="lg"
          arrowSwap
          disabled={pending}
        >
          {pending ? t.pending : t.submit}
        </RippleButton>
        {status.message ? (
          <p
            className={`text-sm leading-[1.5] ${
              status.type === "error"
                ? "text-red-700"
                : "text-primary-contrast/65"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
