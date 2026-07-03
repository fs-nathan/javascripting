# Name Collision Playbook

How `cursor-agents` interacts with **existing** `.cursor/` assets when names or paths overlap.

---

## Two layers

| Layer | Trigger | Rule |
|-------|---------|------|
| **Install** | `npm install`, `postinstall`, `npx cursor-agents init` | **Path-based skip** — existing file at same path is never overwritten (unless `--force`) |
| **Calibrate** | `/calibrate` | **Manifest-driven** — host files under **Skip** or **Conflict**; no auto-merge |

---

## Install: same path (most common)

| Host already has | On `npm install -D cursor-agents` |
|------------------|----------------------------------|
| `.cursor/commands/build.md` | **Skipped** — host file kept |
| `.cursor/skills/tdd/SKILL.md` | **Skipped** |
| `.cursor/agents/master-agent.md` | **Skipped** |
| File missing | **Added** from package template |

Force overwrite everything in template:

```bash
npx cursor-agents init --force
```

Preview without writing:

```bash
npx cursor-agents init --dry-run --verbose
```

---

## Install: same `name`, different path

Cursor identifies commands and skills by **`name` in YAML frontmatter**, not only file path.

| Host | Package | Result |
|------|---------|--------|
| `.cursor/skills/my-tdd/SKILL.md` → `name: tdd` | `.cursor/skills/tdd/SKILL.md` → `name: tdd` | **Both files exist** — Cursor may see two registrations with the same name |

**Package does not auto-detect or resolve this.** Resolve manually:

1. Rename `name:` in one file (e.g. host → `name: tdd-custom`)
2. Merge content into one skill and delete the other
3. Keep host version and remove/rename the package copy (if install added it to a different path)

---

## Calibrate: manifest categories

During **Discover**, scan `.cursor/commands/*.md`, `.cursor/skills/**/SKILL.md`, `.cursor/agents/*.md` and compare:

1. **Path collision** — host file exists where package would ship the same relative path → **Skip (preserve host)**
2. **Name collision** — same frontmatter `name:` in two+ files → **Conflict (manual resolution)**
3. **Package default + host custom** — host file not in package template → **Skip (preserve host)**

### Manifest sections

```markdown
## Skip (preserve host)
- `.cursor/commands/build.md` — host-owned; install already skipped overwrite

## Conflict (manual resolution)
- `name: calibrate` in both `.cursor/commands/calibrate.md` (host) and package default — pick one or rename host `name:` to `calibrate-custom`

## No change
- `.cursor/commands/spec.md` — matches package; no calibration edit needed
```

**Never auto-resolve Conflict during Apply.** Ask the user which file or `name:` to keep.

---

## Decision guide

| Goal | Action |
|------|--------|
| Keep all custom commands/skills | Default install — nothing to do |
| Adopt package version of one file | Backup host file → delete or rename → `npx cursor-agents init` (or copy from `node_modules/cursor-agents/template/`) |
| Align stack only; don't touch commands | `/calibrate` — expect mostly **Add** `project-stack.mdc` + **Skip** for existing `.cursor/` |
| See what install would change | `npx cursor-agents init --dry-run --verbose` |
| See calibration impact | `/calibrate` (dry-run manifest) |

---

## `cursor-agents` shipped names (reference)

Collision checks should compare against these common names:

**Commands:** `spec`, `plan`, `build`, `test`, `review`, `deploy`, `debug`, `simplify`, `fix-issue`, `calibrate`

**Skills:** `tdd`, `code-review`, `incremental-implementation`, `deploy`, `security-review`, `frontend-performance`, `frontend-mastery`, `search-ai-optimization`, `project-calibration`

**Agents (file names):** `master-agent`, `frontend`, `backend`, `systems-architect`, `code-reviewer`, `test-engineer`, `security-auditor`, `qa`, `project-manager`, `ui-ux-designer`, `copywriter-seo`

Host files with the same path or `name:` should appear in the calibration manifest before any Apply.
