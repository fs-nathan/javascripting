# Stack Detection Signals

Evidence-based cheat sheet for the **Discover** phase of `/calibrate`.  
Every inference must cite at least one path from this reference.

> **Low confidence:** If signals conflict or no manifest exists, ask the user — do not guess.

> **Secrets:** Do not read `.env*`, `credentials.json`, `*.pem`, or `secrets/`. Record evidence as paths/field names only — never copy values into `stack-profile.json`.

---

## Package manifests

| File | Infers | Notes |
|------|--------|-------|
| `package.json` | Node/JS ecosystem | Check `dependencies`, `devDependencies`, `engines` |
| `package.json` → `next` | Next.js | Also check `app/` or `pages/` |
| `package.json` → `react`, `vite` | React SPA (Vite) | Admin/dashboard pattern |
| `package.json` → `vue`, `nuxt` | Vue / Nuxt | |
| `package.json` → `express`, `fastify`, `hono` | Node HTTP framework | |
| `package.json` → `@prisma/client` | Prisma ORM | Pair with `prisma/schema.prisma` |
| `package.json` → `drizzle-orm` | Drizzle ORM | |
| `package.json` → `vitest`, `jest`, `mocha` | Unit test runner | |
| `package.json` → `playwright`, `cypress` | E2E runner | |
| `package.json` → `workspaces` | npm/pnpm/yarn workspaces | Monorepo |
| `pyproject.toml` / `requirements.txt` | Python | |
| `pyproject.toml` → `django` | Django | Pair with `manage.py` |
| `pyproject.toml` → `fastapi`, `flask` | Python API | |
| `go.mod` | Go module | |
| `Gemfile` | Ruby | Rails if `rails` gem |
| `pom.xml` / `build.gradle` | JVM (Java/Kotlin) | |
| `Cargo.toml` | Rust | |

---

## Lockfiles

| File | Use |
|------|-----|
| `package-lock.json` | npm exact versions |
| `pnpm-lock.yaml` | pnpm |
| `yarn.lock` | Yarn |
| `poetry.lock` | Python Poetry |
| `go.sum` | Go checksums |

---

## Config files

| File | Infers |
|------|--------|
| `tsconfig.json` | TypeScript |
| `next.config.js`, `next.config.mjs`, `next.config.ts` | Next.js |
| `vite.config.ts`, `vite.config.js` | Vite |
| `nuxt.config.ts` | Nuxt |
| `prisma/schema.prisma` | Prisma + DB provider |
| `drizzle.config.ts` | Drizzle |
| `manage.py` + `*/settings.py` | Django |
| `docker-compose.yml` | Services (postgres, redis, etc.) |
| `Dockerfile` | Runtime base image, build steps |
| `.github/workflows/*.yml` | CI test/lint/deploy commands |

---

## Directory layout

| Pattern | Infers |
|---------|--------|
| `src/app/` (Next App Router) | Next.js 13+ |
| `pages/` | Next.js Pages Router |
| `src/controllers/`, `src/services/` | Layered Node backend |
| `apps/*`, `packages/*` | Monorepo packages |
| `internal/` | Common in Go services |
| `.cursor/rules/custom-*.mdc` | Host-owned rules — **Skip** on calibration |

---

## Monorepo tools

| Signal | Tool |
|--------|------|
| `package.json` → `"workspaces"` | npm/yarn workspaces |
| `pnpm-workspace.yaml` | pnpm workspaces |
| `nx.json` | Nx |
| `turbo.json` | Turborepo |
| `lerna.json` | Lerna |

Use `--scope=<package-path>` in `/calibrate` for sub-package calibration.

---

## Confidence levels

| Level | Criteria |
|-------|----------|
| **high** | Manifest + config + directory layout agree |
| **medium** | Manifest only, or partial layout |
| **low** | Ambiguous, polyglot, or missing manifests |

When **low**: list ambiguous signals in `stack-profile.json` and ask the user before Apply.

---

## Divergence from `cursor-agents` defaults

Package defaults assume: Node, Express, Prisma, PostgreSQL, Next.js, Vitest.

Record mismatches in `stack-profile.json` → `divergencesFromPackageDefaults` and generate `project-stack.mdc` so agents follow **this repo**, not the template.
