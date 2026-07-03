---
name: calibrate
description: Discover the repo tech stack and calibrate AGENTS.md and .cursor config for brownfield projects
---

# /calibrate — Project Calibration

> Align Cursor agents with **this repository's actual stack** — not the generic `cursor-agents` template.

## Purpose

For **ongoing (brownfield)** projects where `npm install -D cursor-agents` copied defaults (Node/Express/Prisma/Next.js) that do not match reality.

**Invoke:** **Master Agent** + read **`project-calibration`** skill.

**Reference:** `.cursor/references/stack-detection-signals.md`  
**Governance:** `.cursor/rules/project-calibration.mdc`

---

## Prerequisites

- `cursor-agents` installed (`AGENTS.md` + `.cursor/` present)
- Read-only access to repo manifests and config (no secrets)

---

## Workflow

### Phase 1 — Discover

Scan codebase using the skill's ordered signal list. Output:

- `.cursor/calibration/stack-profile.json` (evidence-linked)

### Phase 2 — Report (default)

Generate manifest **without applying** unless user requests Apply:

- `.cursor/calibration/manifest.md`

Present manifest to user. Categories: **Add**, **Patch**, **Skip**, **Conflict**, **No change**.

**Name collisions:** see `.cursor/references/name-collision-playbook.md` — same-path files are **Skip**; duplicate `name:` in frontmatter is **Conflict** (manual).

### Phase 3 — Apply

After user confirms (or `--apply` flag):

- Write `.cursor/rules/project-stack.mdc` (English, `alwaysApply: true`)
- Patch files listed in manifest (typically `AGENTS.md`, agent defer notes)
- Do **not** replace `tech-stack.mdc`

---

## Flags

| Flag | Behavior |
|------|----------|
| *(default)* | Discover + Report (dry-run manifest) |
| `--apply` | Execute Apply phase after Report |
| `--force` | Overwrite previously generated calibration artifacts only |
| `--scope=<path>` | Calibrate from monorepo sub-package (e.g. `apps/admin`) |

---

## Examples

### Brownfield project

```
/calibrate
# Review manifest.md
/calibrate --apply
```

### Monorepo package

```
/calibrate --scope=apps/api
/calibrate --scope=apps/api --apply
```

### Re-calibrate after migration (e.g. Prisma → Drizzle)

```
/calibrate --apply --force
```

---

## Commit guidance

After successful Apply, commit:

```
.cursor/rules/project-stack.mdc
.cursor/calibration/stack-profile.json
.cursor/calibration/manifest.md   # optional audit trail
AGENTS.md                          # if Project Context patched
```

Tell the team: when `project-stack.mdc` exists, it **overrides** generic `tech-stack.mdc` for this repo.

---

## What calibration does not do

- Refactor application code
- Delete custom `.cursor/` rules
- Replace `tech-stack.mdc`
- Read `.env` or credentials

---

## Related

| Asset | Role |
|-------|------|
| **Master Agent** | Persona orchestrating calibration |
| **project-calibration** skill | Detailed Discover / Report / Apply playbooks |
| **Systems Architect** | Designs **new** systems; Master aligns config to **existing** systems |
