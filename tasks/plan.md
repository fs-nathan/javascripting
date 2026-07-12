# Plan: 50 bài tập JavaScript + progress tracking

> Spec: [`docs/specs/fifty-js-exercises.md`](../docs/specs/fifty-js-exercises.md)  
> Nguồn: `JavaScript_50_Bai_Tap_Thuan_Tu_De_Den_Kho.xlsx`  
> Quyết định: append menu · verify hàm · chỉ VI · full solution · đủ 50 bài

## Tổng quan

| Metric | Giá trị |
|--------|---------|
| Bài cũ giữ nguyên | 20 (stdout compare) |
| Bài mới | 50 (function tests) |
| Menu tổng | 70 |
| File code mới (ước lượng) | `lib/function-problem.js`, `lib/run-function-tests.js`, helpers test |
| File nội dung mới | ~50 × (`problem_vi.md` + `solution_vi.md` + `tests.js`) + 50 × `solutions/*/index.js` |
| File sửa | `menu.json`, `index.js`, `i18n/vi.json` |

## Phân tích codebase (điểm neo)

| Thành phần | Vai trò hiện tại | Thay đổi |
|------------|------------------|----------|
| `menu.json` | Danh sách tên bài | Append 50 keys |
| `index.js` | `addAll` → luôn `problem(dir)` | Branch: có `tests.js` → `functionProblem` |
| `lib/problem.js` | Load md + compare stdout | Không đổi |
| `lib/compare-solution.js` + `run-solution.js` | So stdout | Không dùng cho 50 bài mới |
| `i18n/vi.json` `exercise.*` | Label menu | +50 keys |
| Storage workshopper | Checkmark tiến độ | Tái sử dụng — không thêm persistence |

## Dependency graph

```
1.1 run-function-tests (harness)
  └─► 1.2 function-problem factory
        └─► 1.3 index.js auto-detect + wire
              └─► 1.4 Scaffold BT01 end-to-end (risk-first vertical slice)
                    └─► Checkpoint A
                          ├─► 2.x Batch bài thuần (01–40 trừ HOF)
                          └─► 3.x HOF harness + bài 41,46,47,50 (+ deep*)
                                └─► Checkpoint B
                                      └─► 4.x Menu/i18n đủ 50 + regression + docs
                                            └─► Checkpoint C
```

## Quy ước scaffold mỗi bài

```
problems/<slug>/
  problem_vi.md      # đề tiếng Việt từ Excel
  solution_vi.md     # thông báo / ghi chú khi xem solution
  tests.js           # { functionName, cases } hoặc custom runner

solutions/<slug>/
  index.js           # module.exports = fn  (full lời giải)
```

**Export học viên:** `module.exports = <functionName>`  
**menu key:** UPPERCASE words khớp kebab folder  
**vi label:** `NN. <Tên bài Excel>`

---

## Phase 1: Foundation — Function verify harness

Mục tiêu: một bài mới verify được bằng test cases và hiện trên menu với checkmark.

### Task 1.1: `lib/run-function-tests.js`

**Objective**: Chạy test cases chống lại hàm đã export; trả về pass hoặc chi tiết fail.

**Files to modify / create**:
- `lib/run-function-tests.js` (new)
- `tests/unit/run-function-tests.test.js` (new — nếu runner test hiện tại cho phép; nếu không, script node tự kiểm)

**Acceptance Criteria**:
- [ ] Load file qua `require`; lỗi rõ nếu không export function
- [ ] Hỗ trợ `cases: [{ input: args[], expected }]`
- [ ] Deep equal cho object/array
- [ ] Trả về danh sách case fail (index, input, expected, actual)

**Dependencies**: None

**Verification**:
- [ ] Unit/smoke: pass khi expected khớp; fail khi lệch
- [ ] Không dùng `eval`

---

### Task 1.2: `lib/function-problem.js`

**Objective**: Factory bài tập tương thích workshopper (init / verify / solution paths) dùng harness.

**Files**:
- `lib/function-problem.js` (new)

**Acceptance Criteria**:
- [ ] `init` load `problem_vi.md` / `solution_vi.md` theo lang (ưu tiên `_vi`, fallback nếu cần)
- [ ] `verify(args, cb)` require attempt → chạy `tests.js` → `cb(null, true|false)`
- [ ] Fail message tiếng Việt kèm case lỗi
- [ ] `solutionPath` trỏ `solutions/<slug>/index.js`

**Dependencies**: 1.1

**Verification**:
- [ ] Gọi factory với dir giả lập / BT01 sau Task 1.4

---

### Task 1.3: Wire `index.js` auto-detect

**Objective**: Bài có `tests.js` dùng function-problem; bài cũ giữ stdout.

**Files**:
- `index.js`

**Acceptance Criteria**:
- [ ] `fs.existsSync(path.join(dir, 'tests.js'))` → `functionProblem(dir)` else `problem(dir)`
- [ ] 20 bài cũ không đổi hành vi

**Dependencies**: 1.2

**Verification**:
- [ ] `npm test` (workshopper-adventure-test) vẫn pass cho bài cũ

---

### Task 1.4: Vertical slice BT01 — Chuyển đổi nhiệt độ

**Objective**: End-to-end một bài mới trên menu + verify + progress.

**Files**:
- `menu.json` (append `CELSIUS TO FAHRENHEIT`)
- `i18n/vi.json` (`01. Chuyển đổi nhiệt độ`)
- `problems/celsius-to-fahrenheit/{problem_vi.md,solution_vi.md,tests.js}`
- `solutions/celsius-to-fahrenheit/index.js`

**Acceptance Criteria**:
- [ ] Hiện trên menu sau SCOPE
- [ ] Solution chính thức pass `tests.js`
- [ ] Attempt sai fail; attempt đúng → checkmark
- [ ] Expected type khớp đề (`.toFixed(1)` → string nếu đề yêu cầu)

**Dependencies**: 1.3

**Verification**:
- [ ] Manual: `javascripting` → chọn bài → `verify` pass/fail
- [ ] Official solution tự pass harness

---

## Checkpoint A: Harness + BT01 sống

**Verify before proceeding**:
- [ ] `npm test` không regress bài cũ
- [ ] BT01 pass/fail/progress đúng
- [ ] Quy ước folder/export đã chốt (không đổi giữa chừng)

---

## Phase 2: Batch bài thuần (test cases đơn giản)

Mỗi task = một nhóm vertical: menu keys + vi labels + problems + solutions + tests — học viên làm được và track progress.

### Task 2.1: Bài 02–10 (điều kiện, vòng lặp, mảng/chuỗi cơ bản)

**Bài**: isLeapYear, sumOfOdds, classifyGrade, findMin, countSpaces, calculateAverage, multiplicationTable, checkExtension, factorial

**Files**: `menu.json`, `i18n/vi.json`, `problems/*`, `solutions/*` (9 bài)

**Acceptance Criteria**:
- [ ] 9 bài trên menu; mỗi official solution pass tests
- [ ] Ít nhất 1 case biên / case Excel sample mỗi bài

**Dependencies**: Checkpoint A

---

### Task 2.2: Bài 11–20

**Bài**: capitalizeWords → findIntersection (10 bài)

**Dependencies**: 2.1

---

### Task 2.3: Bài 21–30

**Bài**: findGCD → customFilter (10 bài)

**Dependencies**: 2.2

---

### Task 2.4: Bài 31–40 (trừ HOF)

**Bài**: twoSum → bubbleSort (10 bài; chưa gồm memoize)

**Dependencies**: 2.3

**Verification (Phase 2)**:
- [ ] Script/`node` chạy tất cả `solutions/*/index.js` qua harness → 40/40 (01–40) pass
- [ ] Spot-check 3 bài manual verify

---

## Checkpoint B: 40 bài thuần hoàn tất

**Verify before proceeding**:
- [ ] 40 bài mới (01–40) trên menu + checkmark hoạt động
- [ ] Không regress 20 bài cũ

---

## Phase 3: HOF & so sánh sâu (risk)

### Task 3.1: Mở rộng harness cho HOF / async timing

**Objective**: Hỗ trợ memoize, debounce, throttle, curry (và deepEqual/deepClone nếu cần custom).

**Files**:
- `lib/run-function-tests.js` (extend)
- Optional: `lib/hof-test-helpers.js`

**Acceptance Criteria**:
- [ ] `tests.js` có thể export `run(fn)` custom thay vì chỉ `cases`
- [ ] Debounce/throttle: fake timers (tự viết hoặc hỏi trước nếu thêm dep)
- [ ] Memoize: đếm số lần gọi hàm gốc
- [ ] Curry: gọi từng phần `(1)(2)(3)`

**Dependencies**: Checkpoint B (có thể song song sau A nếu muốn risk-first sớm — mặc định sau B)

**Ask First** nếu cần package `sinon` / `@sinonjs/fake-timers`.

---

### Task 3.2: Bài 41–50

**Bài**: memoize, rotateArray, lengthOfLongestSubstring, deepEqual, quickSort, debounce, throttle, deepClone, romanToInt, curry

**Acceptance Criteria**:
- [ ] 10 bài đủ nội dung VI + solution + tests
- [ ] Official solutions pass harness (kể cả HOF)

**Dependencies**: 3.1

---

## Checkpoint C: Đủ 50 bài

**Verify before proceeding**:
- [ ] Menu 70 mục; 50 bài mới verify được
- [ ] Progress đếm đúng khi hoàn thành mẫu
- [ ] `npm test` + harness bulk pass

---

## Phase 4: Polish & QA

### Task 4.1: Đồng bộ menu / i18n / slug audit

**Objective**: Không thiếu key, không lệch slug, số thứ tự 01–50 đúng.

**Files**: `menu.json`, `i18n/vi.json`, checklist script tùy chọn `scripts/audit-fifty-exercises.js`

**Acceptance Criteria**:
- [ ] 20 + 50 keys khớp folder tồn tại
- [ ] Mọi `exercise.*` có trong `vi.json`

**Dependencies**: 3.2

---

### Task 4.2: Regression + README ghi chú

**Objective**: Tài liệu ngắn cho học viên về kiểu bài hàm mới.

**Files**:
- `README.vi.md` (mục mới: 50 bài luyện hàm)
- Không bắt buộc đổi README EN nếu out of scope i18n

**Acceptance Criteria**:
- [ ] `npm test` pass
- [ ] Bulk harness 50/50
- [ ] README.vi mô tả `module.exports = fn` và `javascripting verify`

**Dependencies**: 4.1

---

## Checkpoint D: Release ready

- [ ] Spec core features 1–4 đạt
- [ ] 50 bài + progress + không phá bài cũ

---

## Thứ tự ưu tiên (tóm tắt)

1. Foundation harness + BT01 (giảm rủi ro format sớm)
2. Batch 02–40 theo nhóm 10
3. HOF harness + 41–50
4. Audit + docs + regression

## Next step

Sau khi plan được approve → `/build` bắt đầu Task 1.1 (TDD).
