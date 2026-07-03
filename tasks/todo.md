# TODO: Việt hóa Javascripting

> Plan: [`tasks/plan.md`](plan.md) · Spec: [`docs/specs/vietnamese-localization.md`](../docs/specs/vietnamese-localization.md)

## Phase 1: Foundation

- [x] **1.1** Thêm `defaultLang: 'vi'` vào `index.js`
- [x] **1.2** Tạo `i18n/vi.json` — 20 key `exercise.*` (tên menu)
- [x] **1.3** Bổ sung UI strings vào `i18n/vi.json` (subtitle, menu, pass/fail, progress, error)
- [x] **1.4** Tạo `i18n/footer/vi.md`
- [x] **1.4** Tạo `i18n/troubleshooting_vi.md`

### Checkpoint A: Foundation Complete
- [x] `javascripting` → UI mặc định tiếng Việt
- [x] Menu 20 bài hiển thị tên tiếng Việt
- [x] CHOOSE LANGUAGE en ↔ vi hoạt động
- [x] Footer tiếng Việt hiển thị

---

## Phase 2: Bài cơ bản (1–6)

- [x] **2.1** `problems/introduction/` — problem_vi.md + solution_vi.md
- [x] **2.2** `problems/variables/` — problem_vi.md + solution_vi.md
- [x] **2.3** `problems/strings/` — problem_vi.md + solution_vi.md
- [x] **2.4** `problems/string-length/` — problem_vi.md + solution_vi.md
- [x] **2.5** `problems/revising-strings/` — problem_vi.md + solution_vi.md
- [x] **2.6** `problems/numbers/` — problem_vi.md + solution_vi.md

### Checkpoint B: Bài 1–6 Complete
- [x] Verify pass: introduction, variables, strings, string-length, revising-strings, numbers

---

## Phase 3: Kiểu dữ liệu & điều kiện (7–10)

- [x] **3.1** `problems/rounding-numbers/` — problem_vi.md + solution_vi.md
- [x] **3.2** `problems/number-to-string/` — problem_vi.md + solution_vi.md
- [x] **3.3** `problems/if-statement/` — problem_vi.md + solution_vi.md
- [x] **3.4** `problems/for-loop/` — problem_vi.md + solution_vi.md

### Checkpoint C: Bài 7–10 Complete
- [x] Verify pass bài 7–10
- [x] `npm test` pass

---

## Phase 4: Mảng & đối tượng (11–15)

- [x] **4.1** `problems/arrays/` — problem_vi.md + solution_vi.md
- [x] **4.2** `problems/array-filtering/` — problem_vi.md + solution_vi.md
- [x] **4.3** `problems/accessing-array-values/` — problem_vi.md + solution_vi.md
- [x] **4.4** `problems/looping-through-arrays/` — problem_vi.md + solution_vi.md
- [x] **4.5** `problems/objects/` — problem_vi.md + solution_vi.md

### Checkpoint D: Bài 11–15 Complete
- [x] Verify pass bài 11–15

---

## Phase 5: Hàm & phạm vi (16–20)

- [x] **5.1** `problems/object-properties/` — problem_vi.md + solution_vi.md
- [x] **5.2** `problems/object-keys/` — problem_vi.md + solution_vi.md
- [x] **5.3** `problems/functions/` — problem_vi.md + solution_vi.md
- [x] **5.4** `problems/function-arguments/` — problem_vi.md + solution_vi.md
- [x] **5.5** `problems/scope/` — problem_vi.md + solution_vi.md ⚠️

### Checkpoint E: All 20 Challenges Complete
- [x] 40 file problem_vi + solution_vi hoàn thành
- [x] Verify pass 20/20 bài

---

## Phase 6: Documentation & QA

- [x] **6.1** Tạo `README.vi.md` (cài đặt local, npm link, hướng dẫn dùng)
- [x] **6.2** Smoke test: 20 bài + chuyển ngôn ngữ + verify fail
- [x] **6.2** `npm test` pass (37/37)

### Checkpoint F: Release Ready
- [x] 44 file mới + `index.js` updated
- [x] Spec checklist 100%

---

## Quick reference — files per task

| Phase | Files mới | File sửa |
|---|---|---|
| 1 | 3 (`vi.json`, footer, troubleshooting) | `index.js` |
| 2 | 12 | — |
| 3 | 8 | — |
| 4 | 10 | — |
| 5 | 10 | — |
| 6 | 1 (`README.vi.md`) | — |
| **Tổng** | **44** | **1** |
