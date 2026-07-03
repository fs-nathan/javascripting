# Plan: Việt hóa Javascripting

> Spec: [`docs/specs/vietnamese-localization.md`](../docs/specs/vietnamese-localization.md)  
> Quyết định đã xác nhận: `defaultLang: 'vi'`, thuật ngữ Việt (English) lần đầu, có `README.vi.md`

## Tổng quan

| Metric | Giá trị |
|---|---|
| Bài tập active | 20 (theo `menu.json`) |
| File mới | 44 (43 i18n + 1 README) |
| File sửa code | 1 (`index.js`) |
| Language code | `vi` |
| Verify tự động | `npm test` (không đổi logic JS) |

## Dependency graph

```
Task 1.1 (index.js defaultLang)
    ↓
Task 1.2 (vi.json scaffold: exercise keys)
    ↓
Task 1.3 (vi.json UI strings) ──┐
Task 1.4 (footer + troubleshooting) ──┤
    ↓                                   │
Checkpoint A: Menu tiếng Việt hoạt động
    ↓
Slice 2–5 (problem_vi + solution_vi theo nhóm bài)
    ↓
Task 6.1 (README.vi.md)
    ↓
Task 6.2 (Smoke test + npm test)
    ↓
Checkpoint B: Hoàn thành
```

## Quy ước dịch (áp dụng mọi task)

- **Giữ nguyên:** code blocks, tên biến, tên file, lệnh `javascripting verify`, API (`console.log`, `.filter()`, …)
- **Dịch:** đoạn giải thích, heading hướng dẫn, thông báo pass/fail
- **Thuật ngữ:** Việt kèm English lần đầu — ví dụ "Phạm vi (Scope)", "Mảng (Array)"
- **Tham chiếu:** `i18n/pt-br.json`, `problems/*/problem_pt-br.md`, `problems/*/problem_zh-cn.md`

---

## Phase 1: Foundation — Locale scaffold

Mục tiêu phase: Chạy `javascripting` local → menu + UI tiếng Việt ngay lần đầu, dù chưa dịch hết nội dung bài.

### Task 1.1: Set ngôn ngữ mặc định `vi`

**Objective:** Lần chạy đầu hiển thị tiếng Việt mà không cần chọn CHOOSE LANGUAGE.

**Files to modify:**
- `index.js`

**Changes:**
```js
const jsing = require('workshopper-adventure')({
  appDir: __dirname,
  languages,
  defaultLang: 'vi',
  header: require('workshopper-adventure/default/header'),
  footer: require('./lib/footer.js')
})
```

**Acceptance Criteria:**
- [ ] `defaultLang: 'vi'` được truyền vào workshopper options
- [ ] `vi` nằm trong mảng `languages` (sau khi Task 1.2 hoàn thành)
- [ ] User vẫn chuyển được sang English qua CHOOSE LANGUAGE

**Dependencies:** Không

**Verification:**
- [ ] `node -e "require('./index')"` không throw
- [ ] Manual: xóa storage (`~/.config/workshopper/lang`, `~/.config/javascripting/lang`) → `javascripting` → UI tiếng Việt

---

### Task 1.2: Tạo `i18n/vi.json` — tên bài trên menu

**Objective:** 20 mục menu hiển thị tiếng Việt.

**Files to create:**
- `i18n/vi.json`

**Content:** Block `exercise` với 20 key khớp `menu.json`:

| Key | Label |
|---|---|
| INTRODUCTION | Giới thiệu |
| VARIABLES | Biến |
| STRINGS | Chuỗi |
| STRING LENGTH | Độ dài chuỗi |
| REVISING STRINGS | Sửa đổi chuỗi |
| NUMBERS | Số |
| ROUNDING NUMBERS | Làm tròn số |
| NUMBER TO STRING | Chuyển số sang chuỗi |
| IF STATEMENT | Câu lệnh IF |
| FOR LOOP | Vòng lặp FOR |
| ARRAYS | Mảng (Array) |
| ARRAY FILTERING | Lọc mảng (Array Filtering) |
| ACCESSING ARRAY VALUES | Truy cập phần tử mảng |
| LOOPING THROUGH ARRAYS | Duyệt mảng |
| OBJECTS | Đối tượng (Object) |
| OBJECT PROPERTIES | Thuộc tính đối tượng |
| OBJECT KEYS | Khóa đối tượng (Object Keys) |
| FUNCTIONS | Hàm (Function) |
| FUNCTION ARGUMENTS | Tham số hàm |
| SCOPE | Phạm vi (Scope) |

**Acceptance Criteria:**
- [ ] JSON valid, format giống `i18n/pt-br.json`
- [ ] 100% key trong `menu.json` có bản dịch
- [ ] `index.js` auto-detect `vi` trong `languages`

**Dependencies:** Không

**Verification:**
- [ ] Manual: menu hiện tên bài tiếng Việt

---

### Task 1.3: Bổ sung UI strings vào `i18n/vi.json`

**Objective:** Subtitle, menu hệ thống, PASS/FAIL, progress — toàn bộ UI workshop tiếng Việt.

**Files to modify:**
- `i18n/vi.json`

**Keys cần dịch** (tham chiếu `node_modules/workshopper-adventure/i18n/en.json`):

| Key | Bản dịch đề xuất |
|---|---|
| `subtitle` | Chọn bài tập và nhấn Enter để bắt đầu |
| `menu.credits` | GHI CÔNG |
| `menu.exit` | THOÁT |
| `menu.help` | TRỢ GIÚP |
| `menu.completed` | ĐÃ HOÀN THÀNH |
| `menu.language` | CHỌN NGÔN NGỮ |
| `menu.cancel` | HỦY |
| `menu.update` | KIỂM TRA CẬP NHẬT |
| `solution.pass.title` | ĐẠT |
| `solution.fail.title` | CHƯA ĐẠT |
| `solution.pass.message` | Bài {{{currentExercise.name}}} của bạn đã pass! |
| `solution.fail.message` | Bài {{{currentExercise.name}}} chưa pass. Thử lại nhé!\n |
| `progress.state` | Bài {{count}} / {{amount}} |
| `progress.finished` | Bạn đã hoàn thành tất cả bài tập! 🎉\n |
| `ui.return` | Gõ '{{appName}}' để mở menu.\n |
| `ui.usage` | Cách dùng: {{appName}} {{mode}} ten-file.js |
| `error.*` | Dịch đầy đủ các message lỗi |

**Acceptance Criteria:**
- [ ] Giữ nguyên placeholder `{{{...}}}`, `{{...}}`
- [ ] Giữ ANSI escape trong `subtitle` nếu có
- [ ] Không sửa `node_modules`

**Dependencies:** Task 1.2

**Verification:**
- [ ] Manual: subtitle, PASS/FAIL, progress hiển thị tiếng Việt

---

### Task 1.4: Footer và troubleshooting tiếng Việt

**Objective:** Footer help link và màn hình diff khi verify fail đều tiếng Việt.

**Files to create:**
- `i18n/footer/vi.md`
- `i18n/troubleshooting_vi.md`

**Acceptance Criteria:**
- [ ] `footer/vi.md` dịch từ `footer/en.md`
- [ ] `troubleshooting_vi.md` giữ placeholder `%solution%`, `%attempt%`, `%diff%`, `%filename%`
- [ ] Cấu trúc markdown giống bản gốc

**Dependencies:** Không (song song với 1.2–1.3)

**Verification:**
- [ ] Manual: submit sai solution → troubleshooting tiếng Việt + diff

---

### Checkpoint A: Foundation Complete

**Verify trước khi dịch nội dung bài:**

- [ ] `javascripting` khởi động, UI mặc định tiếng Việt
- [ ] Menu 20 bài hiển thị tên tiếng Việt
- [ ] CHOOSE LANGUAGE vẫn hoạt động (en ↔ vi)
- [ ] Footer tiếng Việt xuất hiện dưới mô tả bài
- [ ] Bài chưa dịch fallback: nếu thiếu `problem_vi.md` → lỗi load (expected cho đến Slice 2+)

---

## Phase 2: Vertical Slice — Bài cơ bản (1–6)

Mục tiêu: Người học hoàn thành 6 bài đầu hoàn toàn bằng tiếng Việt.

### Task 2.1: Giới thiệu (Introduction)

**Files to create:**
- `problems/introduction/problem_vi.md` (~43 dòng en)
- `problems/introduction/solution_vi.md`

**Source:** `problem.md`, `solution.md`

**Acceptance Criteria:**
- [ ] Hướng dẫn tạo folder, file, `console.log('hello')`
- [ ] Lệnh Windows `type NUL` được dịch/ghi chú
- [ ] Solution message khích lệ chuyển bài tiếp

**Dependencies:** Checkpoint A

**Verification:**
- [ ] `javascripting verify introduction.js` → PASS + message tiếng Việt

---

### Task 2.2: Biến (Variables)

**Files:** `problems/variables/problem_vi.md`, `solution_vi.md`

**Thuật ngữ lần đầu:** Biến (Variable), khai báo (declare), gán (define)

**Verification:** `javascripting verify variables.js` → PASS

---

### Task 2.3: Chuỗi (Strings)

**Files:** `problems/strings/problem_vi.md`, `solution_vi.md`

**Verification:** `javascripting verify strings.js` → PASS

---

### Task 2.4: Độ dài chuỗi (String Length)

**Files:** `problems/string-length/problem_vi.md`, `solution_vi.md`

**Verification:** `javascripting verify string-length.js` → PASS

---

### Task 2.5: Sửa đổi chuỗi (Revising Strings)

**Files:** `problems/revising-strings/problem_vi.md`, `solution_vi.md`

**Verification:** `javascripting verify revising-strings.js` → PASS

---

### Task 2.6: Số (Numbers)

**Files:** `problems/numbers/problem_vi.md`, `solution_vi.md`

**Verification:** `javascripting verify numbers.js` → PASS

---

### Checkpoint B: Slice 2 Complete

- [ ] 6 bài (1–6) có đủ problem_vi + solution_vi
- [ ] Verify pass cho cả 5 bài
- [ ] Code blocks trong bản dịch khớp bản en

---

## Phase 3: Vertical Slice — Kiểu dữ liệu & điều kiện (7–10)

### Task 3.1: Làm tròn số (Rounding Numbers)
### Task 3.2: Chuyển số sang chuỗi (Number to String)
### Task 3.3: Câu lệnh IF (If Statement)
### Task 3.4: Vòng lặp FOR (For Loop)

Mỗi task: `problem_vi.md` + `solution_vi.md` trong thư mục tương ứng.

**Thuật ngữ:** Làm tròn (Rounding), ép kiểu (Type coercion), điều kiện (Conditional), vòng lặp (Loop)

**Dependencies:** Checkpoint B

**Verification:** verify pass từng bài

---

### Checkpoint C: Slice 3 Complete

- [ ] Bài 7–10 dịch xong (10/20 total)
- [ ] `npm test` pass

---

## Phase 4: Vertical Slice — Mảng (11–15)

### Task 4.1: Mảng (Arrays)
### Task 4.2: Lọc mảng (Array Filtering)
### Task 4.3: Truy cập phần tử mảng (Accessing Array Values)
### Task 4.4: Duyệt mảng (Looping Through Arrays)
### Task 4.5: Đối tượng (Objects)

**Lưu ý:** Bài Array Filtering và Looping Through Arrays dài (~56 dòng) — cần giữ cấu trúc code example.

**Dependencies:** Checkpoint C

---

### Checkpoint D: Slice 4 Complete

- [ ] Bài 11–15 dịch xong (15/20 total)

---

## Phase 5: Vertical Slice — OOP & Functions (16–20)

### Task 5.1: Thuộc tính đối tượng (Object Properties)
### Task 5.2: Khóa đối tượng (Object Keys)
### Task 5.3: Hàm (Functions)
### Task 5.4: Tham số hàm (Function Arguments)
### Task 5.5: Phạm vi (Scope) ⚠️ phức tạp nhất (~83 dòng)

**Risk-first note:** Scope có nested functions, IIFE — dịch comment trong code example cẩn thận, không đổi code logic.

**Dependencies:** Checkpoint D

---

### Checkpoint E: All Challenges Translated

- [ ] 20/20 bài có problem_vi + solution_vi
- [ ] Verify pass cho tất cả 20 bài

---

## Phase 6: Documentation & Final QA

### Task 6.1: Tạo `README.vi.md`

**Objective:** Hướng dẫn cài đặt và chạy workshop tiếng Việt.

**Files to create:**
- `README.vi.md`

**Nội dung tối thiểu:**
- Mô tả workshop (học JS qua terminal)
- Yêu cầu Node.js
- Cài từ source local:
  ```bash
  git clone ...
  cd javascripting
  npm install
  npm link
  javascripting
  ```
- Cách dùng menu (↑↓, Enter)
- Cách verify: `javascripting verify ten-file.js`
- Link hình ảnh `screenshot.png`, `javascripting.gif` (giữ nguyên)
- Ghi chú ngôn ngữ mặc định tiếng Việt, cách chuyển English
- Phần trợ giúp / license

**Optional:** Thêm link `README.vi.md` vào đầu `README.md` gốc (1 dòng)

**Dependencies:** Checkpoint E

---

### Task 6.2: Smoke test toàn bộ + CI

**Objective:** Xác nhận không regress.

**Steps:**
1. `npm test` — standard lint + workshopper-adventure-test
2. Manual matrix 20 bài: mở bài → đọc tiếng Việt → verify solution → PASS message tiếng Việt
3. Test chuyển ngôn ngữ en → vi → en
4. Test verify fail → troubleshooting tiếng Việt

**Acceptance Criteria:**
- [ ] `npm test` exit 0
- [ ] 20/20 verify pass
- [ ] Không file `solutions/*.js` bị sửa

**Dependencies:** Task 6.1

---

### Checkpoint F: Release Ready

- [ ] 44 file mới + 1 file sửa (`index.js`)
- [ ] `README.vi.md` hoàn chỉnh
- [ ] Spec checklist 100%

---

## Risk register

| Risk | Mitigation |
|---|---|
| User đã có storage lang=en cũ | Document trong README.vi: CHOOSE LANGUAGE → vi, hoặc xóa `~/.config/javascripting/` |
| Thiếu `problem_vi.md` → crash load | Hoàn thành từng slice trước khi demo |
| Dịch nhầm code trong fence | Review: so sánh code blocks en vs vi bằng diff |
| Scope quá dài, dễ lỗi | Task 5.5 riêng, review kỹ comment trong example |

## Thứ tự ưu tiên khi /build

1. Phase 1 (1.2 → 1.3 → 1.4 → 1.1) — có thể 1.1 cùng lúc 1.2
2. Phase 2 (2.1 → 2.6) — deliver value sớm
3. Phase 3 → 4 → 5 — tuần tự
4. Phase 6 — cuối cùng

## Next Step

Chạy `/build` theo `tasks/todo.md`, bắt đầu Phase 1.
