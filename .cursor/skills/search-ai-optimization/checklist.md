# Search AI Optimization — Audit Checklist

Use for a **single page** or **whole site**. Authority for Google Search: [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

---

## Content (people-first)

- [ ] Primary purpose is to help real visitors, not only algorithms
- [ ] Unique point of view (experience, expertise, specific examples)
- [ ] Not commodity content (avoid generic listicles anyone could generate)
- [ ] Clear heading hierarchy (`h1` → `h2` → …) and scannable paragraphs
- [ ] Facts accurate; claims supportable (especially YMYL-adjacent topics)
- [ ] Images/video support the topic (with alt text / good image SEO if used)
- [ ] No mass of thin pages targeting query fan-out variants only
- [ ] AI-assisted content meets Search Essentials and spam policies

---

## Technical (crawl, index, render)

- [ ] Page is not blocked by `robots.txt` or `noindex` (unless intentional)
- [ ] URL returns 200; no redirect chains or soft-404s
- [ ] Canonical URL defined where duplicates exist
- [ ] Primary content available without requiring user interaction to reveal it
- [ ] JavaScript: critical content in initial HTML or reliably rendered for Googlebot
- [ ] Semantic landmarks (`main`, headings, links) present
- [ ] Mobile-friendly layout; readable text size and tap targets
- [ ] Core Web Vitals / page experience acceptable (see `frontend-performance` skill)
- [ ] Internal links connect important pages (home → projects → about)
- [ ] Sitemap submitted if site has multiple URLs (recommended)

---

## Metadata & snippets

- [ ] Unique, descriptive `<title>` per page
- [ ] Meta description reflects page (not duplicated boilerplate everywhere)
- [ ] Open Graph / social metadata where sharing matters
- [ ] `metadataBase` or absolute URLs correct in production

---

## Generative AI — Google myth check (must pass)

- [ ] **Not** recommending `llms.txt` or AI-only markup files **for Google Search**
- [ ] **Not** recommending forced content “chunking” for AI
- [ ] **Not** recommending rewriting copy solely for AI synonym stuffing
- [ ] **Not** recommending buying/faking mentions for visibility
- [ ] Structured data only suggested as optional rich-result enhancement, not AI requirement

---

## Measurement (after publish)

- [ ] Site verified in Google Search Console
- [ ] Inspect URL: indexed? snippet eligible?
- [ ] Monitor traffic drops; check Core Web Vitals in field data

---

## Priority actions (fill during audit)

1. 
2. 
3. 

## Out of scope / N/A

- 
