import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isLocale, type Locale } from "@/i18n/config";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown;
  locale?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messages: Record<
  Locale,
  {
    invalidPayload: string;
    required: string;
    invalidEmail: string;
    tooLong: string;
    messageTooLong: string;
    missingApiKey: string;
    resendError: string;
    sent: string;
    emailHeading: string;
    name: string;
    subject: string;
    defaultSubject: (name: string) => string;
  }
> = {
  pl: {
    invalidPayload: "Nieprawidłowe dane formularza.",
    required: "Uzupełnij imię, email i wiadomość.",
    invalidEmail: "Podaj poprawny adres email.",
    tooLong: "Skróć imię, email lub temat.",
    messageTooLong: "Wiadomość jest za długa.",
    missingApiKey: "Brakuje RESEND_API_KEY w konfiguracji serwera.",
    resendError: "Resend nie wysłał wiadomości.",
    sent: "Wiadomość wysłana.",
    emailHeading: "Nowa wiadomość z portfolio",
    name: "Imię",
    subject: "Temat",
    defaultSubject: (name) => `Portfolio: wiadomość od ${name}`,
  },
  en: {
    invalidPayload: "Invalid form data.",
    required: "Fill in your name, email and message.",
    invalidEmail: "Enter a valid email address.",
    tooLong: "Shorten the name, email or subject.",
    messageTooLong: "The message is too long.",
    missingApiKey: "Missing RESEND_API_KEY in server configuration.",
    resendError: "Resend did not send the message.",
    sent: "Message sent.",
    emailHeading: "New message from portfolio",
    name: "Name",
    subject: "Subject",
    defaultSubject: (name) => `Portfolio: message from ${name}`,
  },
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return NextResponse.json(
      { message: messages.pl.invalidPayload },
      { status: 400 },
    );
  }

  const locale = isLocale(body.locale) ? body.locale : "pl";
  const copy = messages[locale];
  const name = asString(body.name);
  const email = asString(body.email);
  const subject = asString(body.subject);
  const message = asString(body.message);
  const company = asString(body.company);

  if (company) {
    return NextResponse.json({ message: "OK" });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: copy.required },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: copy.invalidEmail },
      { status: 400 },
    );
  }

  if (name.length > 120 || email.length > 180 || subject.length > 160) {
    return NextResponse.json(
      { message: copy.tooLong },
      { status: 400 },
    );
  }

  if (message.length > 4000) {
    return NextResponse.json(
      { message: copy.messageTooLong },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "marwozniak01@gmail.com";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { message: copy.missingApiKey },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const emailSubject = subject
    ? `Portfolio: ${subject}`
    : copy.defaultSubject(name);
  const text = [
    `${copy.name}: ${name}`,
    `Email: ${email}`,
    subject ? `${copy.subject}: ${subject}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: emailSubject,
    text,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>${copy.emailHeading}</h2>
        <p><strong>${copy.name}:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${
          subject
            ? `<p><strong>${copy.subject}:</strong> ${escapeHtml(subject)}</p>`
            : ""
        }
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json(
      { message: copy.resendError, error },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: copy.sent });
}
