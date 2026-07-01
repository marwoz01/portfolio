# Marcel Woźniak - Portfolio

Personal portfolio for a frontend developer. The site presents selected projects, case study pages, a contact form and a PL/EN language switch.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- Resend

## Features

- Responsive landing page with project carousel
- Static case study pages under `/portfolio/[slug]`
- Contact page with a Resend-backed form
- Polish and English content without changing URLs

## Development

```bash
npm install
npm run dev
```

## Environment

Create `.env.local` when using the contact form:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
RESEND_FROM_EMAIL=
```

## Checks

```bash
npm run lint
npm run build
```
