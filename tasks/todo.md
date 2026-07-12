# TODO: 50 bài tập JavaScript + progress

> Plan: [`tasks/plan.md`](plan.md) · Spec: [`docs/specs/fifty-js-exercises.md`](../docs/specs/fifty-js-exercises.md)  
> Nguồn: `JavaScript_50_Bai_Tap_Thuan_Tu_De_Den_Kho.xlsx`  
> Quyết định: **1A append · 2A function tests · 3A VI only · 4A full solution · 5A đủ 50**

## Phase 1: Foundation

- [x] **1.1** Tạo `lib/run-function-tests.js` (+ smoke/unit)
- [x] **1.2** Tạo `lib/function-problem.js` (init/verify/solution)
- [x] **1.3** Wire `index.js` — auto-detect `tests.js` → function-problem
- [x] **1.4** Vertical slice **BT01** `CELSIUS TO FAHRENHEIT` (menu + vi + problem + tests + solution)

### Checkpoint A: Harness + BT01
- [x] `npm test` không regress 20 bài cũ
- [x] BT01 verify pass/fail + checkmark OK
- [x] Quy ước `module.exports = fn` chốt

---

## Phase 2: Batch bài thuần (02–40)

- [x] **2.1** Bài **02–10** (isLeapYear … factorial)
- [x] **2.2** Bài **11–20** (capitalizeWords … findIntersection)
- [x] **2.3** Bài **21–30** (findGCD … customFilter)
- [x] **2.4** Bài **31–40** (twoSum … bubbleSort)

### Checkpoint B: 40 bài thuần
- [x] Official solutions 01–40 pass harness
- [x] Spot-check via workshopper-adventure-test

---

## Phase 3: HOF & bài khó (41–50)

- [x] **3.1** Mở rộng harness (`run(fn)` custom + Promise/async timers) — không thêm dep
- [x] **3.2** Bài **41–50** (memoize … curry)

### Checkpoint C: Đủ 50 bài
- [x] Menu có đủ 50 bài mới (tổng 70)
- [x] Harness 50/50 pass trên official solutions

---

## Phase 4: Polish & QA

- [x] **4.1** Audit `menu.json` ↔ folders ↔ `i18n/vi.json` (01–50)
- [x] **4.2** Cập nhật `README.vi.md` + `npm test` + bulk harness

### Checkpoint D: Release ready
- [x] Spec features 1–4 đạt
- [x] Không phá bài stdout cũ (`npm test` 87 passing)

---

## Next

`/review` nếu cần review chất lượng trước khi merge.
