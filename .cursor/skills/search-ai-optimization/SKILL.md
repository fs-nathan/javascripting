---
name: search-ai-optimization
description: >-
  Audits and improves sites for Google generative AI search (AI Overviews, AI Mode) using
  official Google Search Central guidance—people-first content, technical SEO, crawlability.
  Use when the user mentions SEO, AEO, GEO, AI search, AI Overviews, Search visibility,
  llms.txt, generative AI optimization, or optimizing for Google AI features.
---

# Search AI Optimization (Google Generative AI Search)

Optimize for **Google Search generative AI features** (AI Overviews, AI Mode) using [Google’s official guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)—not third-party “AEO/GEO hack” blogs.

## Core principle

> **For Google Search, optimizing for generative AI search is still SEO.**

Focus on **unique, people-first content** and **sound technical foundations** (crawl, index, render, page experience). Generative features use **RAG** and **query fan-out** on top of the normal Search index and ranking systems.

---

## When to use this skill

- User asks about **SEO**, **AEO**, **GEO**, **AI Overviews**, **AI Mode**, or **visibility in AI search**
- User asks whether they need **`llms.txt`**, **chunking**, or **special AI markup**
- Auditing a **Next.js** or marketing site before/after launch
- Reviewing copy in `src/content/*` for a portfolio or product site

**Non-Google platforms** (ChatGPT-only, Perplexity-specific tactics): say guidance differs; do not apply Google myths as universal truth.

---

## Workflow

### 1. Clarify scope

- **Whole site** or **single URL**?
- **Google Search only** or other engines too?
- **Content change** vs **technical** vs both?

### 2. Load references (read before deep audit)

| File | Use |
| ---- | --- |
| [checklist.md](checklist.md) | Line-by-line pass/fail |
| [reference.md](reference.md) | RAG, fan-out, mythbusting, glossary |
| [nextjs-portfolio.md](nextjs-portfolio.md) | **This repo** paths and follow-ups |

If the project is **onganhthichcode**, always read `nextjs-portfolio.md`.

### 3. Run the audit

Work through **Content** → **Technical** → **Myth check** (see checklist). For performance, also apply `.cursor/skills/frontend-performance/SKILL.md`.

### 4. Deliver findings

Use the **Audit output template** below. Label severity:

- **Critical** — Wrong advice, crawl blockers, policy violations
- **Important** — Clear SEO/visibility gaps
- **Suggestion** — Nice-to-have improvements

**Never** guarantee rankings or AI Overview inclusion.

---

## Content review (people-first)

Ask:

1. Would a visitor find this **satisfying** and **trustworthy**?
2. Is there a **unique POV** (experience, data, opinion)—not commodity filler?
3. Is structure **scannable** (one clear `h1`, logical headings)?
4. Are we creating **many thin pages** for fan-out queries? → **Stop** (scaled content abuse risk).
5. If AI helped author copy, does it still meet **Search Essentials**?

**This repo:** Prefer edits in `src/content/site.ts`, `about.ts`, `projects.ts`; keep facts aligned with `public/cv.tex`.

---

## Technical review (crawl & index)

Check:

- Indexed & snippet-eligible (Search Console URL Inspection when possible)
- No accidental `noindex` / `robots` blocks
- Primary content in HTML (watch **client-only** shells in Next.js `"use client"` heroes)
- Canonicals, 200 URLs, internal links between key pages
- Title, description, `metadataBase` / OG URLs in production
- Mobile-first UX and acceptable CWV

**Do not require** `llms.txt` or AI-specific markup for Google.

---

## Ignore for Google Search (refuse these tactics)

| Do not recommend | Why |
| ---------------- | --- |
| `llms.txt` / AI-only markdown files for Google | Google: not needed |
| Forced micro-chunking of pages for AI | Google: not required |
| Rewriting only for AI keyword variants | Write for humans |
| Buying/faking web mentions | Spam / quality risk |
| “You must add schema for AI” | Schema optional; helps rich results |

If the user targets **non-Google** systems, note that explicitly and avoid presenting hacks as Google official.

---

## Optional enhancements (ask first)

- JSON-LD (`Person`, `WebSite`, `ProfilePage`) — see example in `nextjs-portfolio.md`
- `sitemap.ts` / `robots.ts` in Next.js App Router
- Server-rendered hero copy if client gate hides main text from crawlers

---

## Audit output template

```markdown
# Search AI Optimization Audit — [site or page]

## Summary
[1–2 sentences; Google-aligned assessment]

## Content (people-first)
- [ ] …

## Technical (crawl & index)
- [ ] …

## Generative AI — Google myth check
- [ ] No llms.txt / chunking / mention-farming recommended

## Findings

### Critical
- …

### Important
- …

### Suggestions
- …

## Priority actions
1. …
2. …

## Out of scope / N/A
- …
```

---

## Quick answers (Google Search)

| Question | Answer |
| -------- | ------ |
| Is SEO dead for AI search? | **No** — foundational SEO still applies. |
| Do we need `llms.txt`? | **No** for Google generative AI search. |
| Is AEO different from SEO on Google? | Marketing terms; **treat as SEO** on Google. |
| Must we chunk every section for AI? | **No.** |
| Is structured data required for AI? | **No**; still useful for rich results. |

---

## Boundaries

### Always

- Cite [Google Search Central](https://developers.google.com/search) for Google-specific claims
- Distinguish official guidance from blog “GEO” hacks
- Use real repo paths when auditing this project

### Ask first

- Adding JSON-LD, new routes, or removing branded UX (e.g. Terminal Boot) for SEO
- Large content rewrites that change CV facts

### Never

- Guarantee AI Overview or ranking placement
- Recommend spam or scaled thin content
- Copy Google’s full documentation into deliverables

---

## Additional resources

- [reference.md](reference.md) — condensed guide + glossary
- [checklist.md](checklist.md) — full checkbox audit
- [nextjs-portfolio.md](nextjs-portfolio.md) — this repository map
