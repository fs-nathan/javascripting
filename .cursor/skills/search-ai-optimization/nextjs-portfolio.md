# Next.js Portfolio — This Repository

Maps Google generative AI / SEO guidance to **onganhthichcode** (Nathan Nguyen portfolio).

---

## Routes & content

| URL | App file | Content source |
| --- | -------- | -------------- |
| `/` | `src/app/page.tsx` → `HomePage` | `src/components/biography/*`, `src/content/site.ts` |
| `/projects` | `src/app/projects/page.tsx` | `src/content/projects.ts` |
| `/about` | `src/app/about/page.tsx` | `src/content/about.ts` |

**Rule:** Edit copy in `src/content/*`, not scattered in components.

---

## Metadata

| File | Role |
| ---- | ---- |
| `src/lib/metadata.ts` | `createPageMetadata()`, `metadataBase`, Open Graph image |
| `src/app/layout.tsx` | Root metadata + icons |
| Per-route `export const metadata` | `/projects`, `/about` |

**Production:** Set `NEXT_PUBLIC_SITE_URL` so `metadataBase` resolves correct absolute OG URLs.

---

## Crawl & rendering notes

| Topic | Status in this repo |
| ----- | ------------------- |
| Static generation | Routes prerender as static (`○` in `next build`) — good for crawlers |
| `<h1>` on home | Present in DOM (`sr-only` during terminal, visible after boot) |
| Hero copy gating | `BiographyHero` is client component; tagline/CTAs appear after Terminal Boot — consider static fallback in HTML for crawlers if audits flag it |
| Portrait LCP | `/onganhthichcode.webp` with `priority` on hero image — good |
| `sitemap.xml` | **Not yet** — recommended follow-up (`src/app/sitemap.ts`) |
| `robots.txt` | **Not yet** — recommended follow-up (`src/app/robots.ts`) |

---

## Content strengths (align with Google)

- First-hand career narrative from CV (`public/cv.tex` → `about.ts`)
- Concrete projects with outbound links (`projects.ts`)
- English, recruiter-focused; factual employers/dates
- Proof metrics tied to real experience (not fake social proof)

---

## Optional: JSON-LD (rich results — not required for AI)

Structured data is **optional** for generative AI on Google but can help rich results. Example for `layout.tsx` or a small component:

```tsx
// Illustrative — validate with Rich Results Test before shipping
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nathan Nguyen",
  jobTitle: "Senior Full Stack Web Developer",
  url: "https://YOUR_PRODUCTION_DOMAIN",
  sameAs: ["https://github.com/fs-nathan"],
  email: "mailto:nathan.makeitpro@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hanoi",
    addressCountry: "VN",
  },
};
```

Ask before adding to production layout.

---

## Related project docs & skills

- Portfolio spec: `docs/specs/developer-portfolio-revamp.md`
- Performance: `.cursor/skills/frontend-performance/SKILL.md`
- Mobile UI: `.cursor/rules/mobile-first-tailwind.mdc`

---

## Recommended site follow-ups (separate tasks)

1. `src/app/sitemap.ts` — list `/`, `/projects`, `/about`
2. `src/app/robots.ts` — allow crawl, point to sitemap
3. `NEXT_PUBLIC_SITE_URL` in deploy environment
4. Optional JSON-LD `Person` + `WebSite`
5. Optional static hero excerpt in server HTML (if crawl audit needs more above-fold text)
