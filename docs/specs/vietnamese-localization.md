# Feature: Việt hóa hoàn toàn Javascripting

## Objective

Thêm bản địa hóa tiếng Việt (`vi`) cho workshop **javascripting** để người học có thể chạy lệnh `javascripting` trên máy local, chọn ngôn ngữ Tiếng Việt, và nhận menu cùng nội dung bài tập hoàn toàn bằng tiếng Việt — không cần phụ thuộc vào upstream npm package.

## Target Users

- Người Việt mới học JavaScript, quen terminal nhưng chưa thoải mái với tài liệu tiếng Anh
- Giảng viên / mentor dạy JS offline hoặc trong lớp, cần workshop tiếng Việt chạy local
- Contributor muốn fork repo này làm tài liệu học tập nội bộ

## Core Features

### 1. Đăng ký locale `vi` trong workshop

**Acceptance criteria:**
- File `i18n/vi.json` tồn tại và được `index.js` tự phát hiện (logic hiện tại quét `i18n/*.json`)
- Trong menu chính, mục **CHOOSE LANGUAGE** hiển thị `Vietnamese (Tiếng Việt)`
- Chọn `vi` lưu preference qua `workshopper-adventure-storage` (hành vi mặc định của framework)

### 2. Việt hóa tên 20 bài tập trên menu

**Acceptance criteria:**
- `i18n/vi.json` chứa key `exercise.*` khớp 100% với `menu.json` (20 mục)
- Tên hiển thị trên menu là tiếng Việt, dễ hiểu, giữ thuật ngữ kỹ thuật phổ biến khi cần (ví dụ: `IF`, `FOR`, `array`, `object`)

| Key (menu.json) | Tên tiếng Việt đề xuất |
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
| ARRAYS | Mảng |
| ARRAY FILTERING | Lọc mảng |
| ACCESSING ARRAY VALUES | Truy cập phần tử mảng |
| LOOPING THROUGH ARRAYS | Duyệt mảng |
| OBJECTS | Đối tượng |
| OBJECT PROPERTIES | Thuộc tính đối tượng |
| OBJECT KEYS | Khóa đối tượng |
| FUNCTIONS | Hàm |
| FUNCTION ARGUMENTS | Tham số hàm |
| SCOPE | Phạm vi (Scope) |

### 3. Việt hóa nội dung bài tập (problem + solution)

**Acceptance criteria:**
- Mỗi thư mục trong `problems/` có bài active (20 thư mục khớp `menu.json`) có đủ:
  - `problem_vi.md` — mô tả bài, hướng dẫn, lệnh verify
  - `solution_vi.md` — thông báo khi pass bài
- Khi `lang() === 'vi'`, `lib/problem.js` load đúng file qua postfix `_vi` (logic sẵn có)
- **Không dịch** khối code mẫu, tên biến, tên file, lệnh shell — chỉ dịch văn bản hướng dẫn xung quanh
- Giữ nguyên placeholder `%solution%`, `%attempt%`, `%diff%`, `%filename%` trong troubleshooting (không có trong problem/solution)

**Phạm vi file (40 file markdown):**

```
problems/introduction/problem_vi.md + solution_vi.md
problems/variables/problem_vi.md + solution_vi.md
problems/strings/...
problems/string-length/...
problems/revising-strings/...
problems/numbers/...
problems/rounding-numbers/...
problems/number-to-string/...
problems/if-statement/...
problems/for-loop/...
problems/arrays/...
problems/array-filtering/...
problems/accessing-array-values/...
problems/looping-through-arrays/...
problems/objects/...
problems/object-properties/...
problems/object-keys/...
problems/functions/...
problems/function-arguments/...
problems/scope/...
```

### 4. Việt hóa footer và troubleshooting

**Acceptance criteria:**
- `i18n/footer/vi.md` — bản dịch của `i18n/footer/en.md`
- `i18n/troubleshooting_vi.md` — bản dịch của `i18n/troubleshooting.md`, giữ nguyên cấu trúc diff và placeholder

### 5. Việt hóa giao diện workshop (UI framework)

**Acceptance criteria:**
- `i18n/vi.json` bổ sung các key UI từ `workshopper-adventure/i18n/en.json`:
  - `subtitle`, `menu.*`, `error.*`, `solution.*`, `ui.*`, `progress.*`
- Khi chọn `vi`, các chuỗi như "PASS/FAIL", "Exercise X of Y", "Type 'javascripting' to show the menu" hiển thị tiếng Việt
- Không sửa code trong `node_modules/workshopper-adventure`

### 6. Trải nghiệm local dev

**Acceptance criteria:**
- Từ root repo:
  ```bash
  npm install
  npm link          # hoặc: node bin/javascripting
  javascripting
  ```
- Menu hiện ra, chọn **CHOOSE LANGUAGE → Vietnamese (Tiếng Việt)**
- Mở bất kỳ bài nào → nội dung tiếng Việt
- `javascripting verify <file>.js` hoạt động bình thường (verify logic không đổi — so sánh output JS)

### 7. (Khuyến nghị) Tiếng Việt làm ngôn ngữ mặc định cho fork này

**Acceptance criteria:**
- Trong `index.js`, truyền `defaultLang: 'vi'` vào `workshopper-adventure` options
- Lần chạy đầu (chưa có storage) menu và UI mặc định là tiếng Việt
- Người dùng vẫn có thể chuyển sang English qua **CHOOSE LANGUAGE**

## Out of Scope

- Dịch `README.md`, `LOCALIZING.md`, `CONTRIBUTING.md`, `TROUBLESHOOTING.md` gốc (có thể làm phase 2)
- Dịch 2 thư mục problem không nằm trong menu active: `function-return-values`, `this`
- Thay đổi logic verify / solution JS trong `solutions/`
- Publish package lên npm registry
- Dịch nội dung `.cursor/` agent config
- Hỗ trợ Windows-only edge cases ngoài những gì bản gốc đã có (ví dụ lệnh `type NUL`)

## Technical Approach

### Kiến trúc i18n hiện có

```
index.js
  └── workshopper-adventure({ languages, defaultLang?, ... })
        └── lib/problem.js
              ├── problem[_vi].md    ← nội dung bài
              ├── solution[_vi].md   ← thông báo pass
              └── troubleshooting_vi.md
```

- Ngôn ngữ được đăng ký tự động: mọi `i18n/*.json` được thêm vào mảng `languages`
- Postfix file: `en` → không suffix; `vi` → `_vi`
- Menu label: key `exercise.{TÊN_MENU}` trong `i18n/vi.json`

### Quy ước dịch thuật

| Quy tắc | Ví dụ |
|---|---|
| Giữ nguyên code, tên biến, API | `console.log`, `let`, `const`, `.filter()` |
| Giữ nguyên lệnh terminal | `javascripting verify variables.js` |
| Giữ nguyên tên file gợi ý | `variables.js`, `introduction.js` |
| Dịch giải thích khái niệm | "A variable is a name..." → "Biến là tên..." |
| Thuật ngữ lần đầu: Việt (English) | "Phạm vi (Scope)" |
| Giọng văn: thân thiện, inclusive | Theo Contributor Covenant như `LOCALIZING.md` |

### Tham chiếu bản dịch

- **Cấu trúc file:** `i18n/pt-br.json`, `problems/*/problem_pt-br.md`
- **Độ đầy đủ menu:** `i18n/pt-br.json` (có đủ 20 key kể cả OBJECT KEYS)
- **Chất lượng dịch gần văn hóa:** tham khảo `zh-cn` cho cách diễn đạt hướng dẫn thực hành

### Thay đổi code tối thiểu (nếu cần)

```js
// index.js — khuyến nghị cho fork học tiếng Việt
const jsing = require('workshopper-adventure')({
  appDir: __dirname,
  languages,
  defaultLang: 'vi',  // ← thêm
  header: require('workshopper-adventure/default/header'),
  footer: require('./lib/footer.js')
})
```

Không cần sửa `index.js` `languages` array thủ công — chỉ cần tạo `vi.json`.

### Cài đặt local

```bash
git clone <repo>
cd javascripting
npm install
npm link                    # cài global từ source
javascripting               # chạy workshop
javascripting verify foo.js # verify bài đang active
```

## Code Style

- Markdown: giữ format gốc (heading, code fence, list)
- JSON: 2-space indent, trailing comma theo convention repo hiện tại (`pt-br.json`)
- Không thêm dependency mới
- Tuân thủ `LOCALIZING.md` của upstream

## Testing Strategy

### Kiểm tra thủ công (bắt buộc)

| # | Scenario | Expected |
|---|---|---|
| 1 | `javascripting` → CHOOSE LANGUAGE → vi | Menu hiện tên bài tiếng Việt |
| 2 | Mở bài Giới thiệu | `problem_vi.md` render đúng |
| 3 | Submit đúng solution | `solution_vi.md` + PASS tiếng Việt |
| 4 | Submit sai solution | `troubleshooting_vi.md` + diff |
| 5 | Footer dưới bài tập | Link help tiếng Việt |
| 6 | Chuyển lại en | Nội dung quay về English |

### Kiểm tra tự động

```bash
npm test   # standard + workshopper-adventure-test
```

- `standard` — lint JS không regress
- `workshopper-adventure-test` — verify solution reference vẫn pass (logic JS không đổi)

### Checklist hoàn thành bản dịch

- [ ] `i18n/vi.json` — 20 exercise keys + UI keys
- [ ] `i18n/footer/vi.md`
- [ ] `i18n/troubleshooting_vi.md`
- [ ] 20 × `problem_vi.md`
- [ ] 20 × `solution_vi.md`
- [ ] (Optional) `defaultLang: 'vi'` trong `index.js`
- [ ] Smoke test toàn bộ 20 bài

## Boundaries

### Always Do

- Dịch đầy đủ 20 bài active trong `menu.json`
- Giữ nguyên code blocks và lệnh verify
- Giữ placeholder troubleshooting (`%solution%`, `%attempt%`, `%diff%`, `%filename%`)
- Test local trước khi merge
- Dùng language code `vi` (không dùng `vi-vn` — framework dùng `vi`)

### Ask First

- Có set `defaultLang: 'vi'` mặc định cho mọi user fork không? (Khuyến nghị: **có** cho mục tiêu "học local tiếng Việt")
- Có cần README tiếng Việt (`README.vi.md`) riêng không?
- Thuật ngữ: giữ tiếng Anh thuần (`Scope`) hay Việt hóa hoàn toàn (`Phạm vi`)? (Khuyến nghị: **Việt kèm English lần đầu**)
- Có publish npm package `@scope/javascripting-vi` không?

### Never Do

- Dịch / sửa file solution JS trong `solutions/` (ảnh hưởng verify)
- Sửa `menu.json` key names (break i18n lookup)
- Patch `node_modules/workshopper-adventure`
- Commit secrets hoặc `.env`

## Ước lượng khối lượng

| Hạng mục | Số file | ~Dòng (tham chiếu en) |
|---|---|---|
| Menu + UI JSON | 1 | ~85 dòng |
| Footer | 1 | ~2 dòng |
| Troubleshooting | 1 | ~27 dòng |
| Problem markdown | 20 | ~800 dòng |
| Solution markdown | 20 | ~170 dòng |
| **Tổng** | **43 file** | **~1.100 dòng** |

## Next Step

Sau khi spec được duyệt → chạy `/plan` để chia vertical slices:

1. **Slice 1:** Scaffold `vi.json` + footer + troubleshooting + `defaultLang`
2. **Slice 2:** Bài 1–5 (Introduction → Numbers)
3. **Slice 3:** Bài 6–10 (Rounding → For Loop)
4. **Slice 4:** Bài 11–15 (Arrays → Object Properties)
5. **Slice 5:** Bài 16–20 (Object Keys → Scope) + smoke test full
