import { NextResponse } from "next/server";
import { isLocale, localeCookieName } from "@/i18n/config";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    locale?: unknown;
  } | null;
  const locale = body?.locale;

  if (!isLocale(locale)) {
    return NextResponse.json({ message: "Invalid locale." }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(localeCookieName, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}
