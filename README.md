# Kartavya Soni — Portfolio

A premium, Sci-Fi-AI-lab portfolio for a Data Engineer / AI-ML practitioner.
Built with **Astro 6**, **React 19 islands**, **Tailwind 4**, **Three.js / R3F**,
**GSAP**, and **Resend** — deployed on **Vercel**.

> Transforming Raw Data into Production-Ready Intelligence.

## Tech stack

| Area        | Choice                                                        |
| ----------- | ------------------------------------------------------------- |
| Framework   | Astro 6 (static + on-demand API) + TypeScript                 |
| UI islands  | React 19 (Projects filter, Contact form)                      |
| Styling     | Tailwind CSS 4 (CSS-first `@theme`) + CSS-variable theming    |
| 3D / motion | Three.js · @react-three/fiber · postprocessing · GSAP · Motion|
| Content     | MDX + Astro Content Collections                               |
| Email       | Resend (via an Astro serverless endpoint)                     |
| Deploy      | Vercel (`@astrojs/vercel`)                                    |

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build
npm run preview    # preview the build
npx astro check    # type-check
```

## Environment variables

Copy `.env.example` to `.env` and fill in (all are server-only secrets,
configured the same way in the Vercel dashboard):

| Variable             | Purpose                                              |
| -------------------- | ---------------------------------------------------- |
| `RESEND_API_KEY`     | Resend API key — contact form returns 503 without it |
| `CONTACT_FROM_EMAIL` | Verified sender (sandbox: `onboarding@resend.dev`)   |
| `CONTACT_TO_EMAIL`   | Where contact submissions are delivered              |

> With the sandbox sender, Resend only delivers to the Resend account owner's
> address. Verify a domain to send freely.

## Editing content

- **Projects** — add an `.mdx` file in `src/content/projects/`. Frontmatter is
  validated by the schema in `src/content.config.ts`. Set `featured: true` to
  surface it on the home page; `order` controls sorting.
- **Identity / nav / socials** — `src/lib/site.ts`.
- **Home + About data** — `src/data/` (expertise, strengths, timeline, skills,
  certifications).
- **Theme tokens** — `src/styles/global.css` (`:root` = dark, `[data-theme=light]`).

## Project structure

```
src/
  components/   ui/ (primitives) · sections/ · three/ · react/ (islands)
  content/      projects/*.mdx
  data/         home + about content
  layouts/      Layout.astro (SEO, theme init)
  lib/          site config, project + accent helpers
  pages/        index, about, projects, projects/[slug], contact, 404, api/contact
  styles/       global.css (design system)
scripts/        puppeteer smoke/visual tests + OG image generator (dev only)
```

## Before launch

Search the repo for `TODO:` — placeholders to replace: production domain
(`astro.config.mjs`, `src/lib/site.ts`), LinkedIn URL, real project content, and
the certifications/experience data. Regenerate the OG image after rebranding:
`node scripts/gen-og.mjs`.
