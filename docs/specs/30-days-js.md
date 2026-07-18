# Feature: 30 Days of JavaScript — Interactive Exercises Page

## Objective
Cung cấp **một file HTML** chạy được qua localhost (hoặc mở trực tiếp), tổng hợp
**30 bài tập đại diện** theo lộ trình
[30 Days Of JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript/tree/master)
(Asabeneh Yetayeh) — mỗi ngày 1 bài, có demo chạy thật và lời giải ẩn/hiện,
kèm nút dịch sang Tiếng Việt bằng Google Translate (chỉ khi user bấm).

## Target Users
Người học JavaScript (beginner → intermediate) muốn luyện theo lộ trình 30 ngày
trong trình duyệt, không cần Node/build tool, và có thể đối chiếu lời giải ngay.

## Core Features

1. **30 bài / 30 ngày** — mỗi ngày một bài đại diện đúng chủ đề trong curriculum.
   - *Acceptance*: mục lục Day 01–30; mỗi card có số ngày + tiêu đề chủ đề.

2. **Format giống `dom-exercises.html`** — mỗi bài gồm: đề bài ngắn + khu vực
   demo chạy được + nút “Xem/Ẩn lời giải” hiển thị code.
   - *Acceptance*: thao tác demo cho kết quả đúng; không lỗi console; lời giải
     khớp hành vi demo.

3. **Một file HTML duy nhất** — CSS/JS inline, mở qua `http://localhost` hoặc
   `file://`.
   - *Acceptance*: không dependency ngoài Google Translate script; không build step.

4. **Google Translate on-demand** — nút “Dịch sang Tiếng Việt” và “English”.
   - *Acceptance*: chỉ dịch khi user bấm; tiêu đề thương hiệu có thể gắn
     `notranslate` nếu cần.

## Day → Exercise Mapping (1 bài / ngày)

| Day | Chủ đề (nguồn) | Bài đại diện (demo) |
|-----|----------------|---------------------|
| 01 | Introduction | In ra kết quả phép toán / `typeof` / biến lên output |
| 02 | Data Types | Kiểm tra kiểu và ép kiểu (String/Number/Boolean) |
| 03 | Booleans, Operators, Date | So sánh / toán tử + format ngày hiện tại |
| 04 | Conditionals | Phân loại điểm / if–else–switch theo input |
| 05 | Arrays | Thêm/xóa/slice phần tử mảng, hiện kết quả |
| 06 | Loops | Sinh dãy số / tổng bằng vòng lặp |
| 07 | Functions | Hàm tính BMI / diện tích / max từ input |
| 08 | Objects | Tạo/cập nhật object person, liệt kê keys |
| 09 | Higher Order Functions | `map`/`filter`/`reduce` trên mảng mẫu |
| 10 | Sets and Maps | Unique từ mảng (Set) + lookup Map |
| 11 | Destructuring & Spreading | Destructuring object/array + merge bằng spread |
| 12 | Regular Expressions | Validate email / pattern match trên chuỗi |
| 13 | Console Object Methods | Demo `console.table` / `group` (kèm output trên UI) |
| 14 | Error Handling | try/catch với input không hợp lệ |
| 15 | Classes | Class `Person` / `Student` — tạo instance & method |
| 16 | JSON | `JSON.parse` / `stringify` từ textarea |
| 17 | Web Storages | Lưu/đọc note bằng `localStorage` |
| 18 | Promises | Promise delay / async–await giả lập fetch |
| 19 | Closures | Counter factory bằng closure |
| 20 | Writing Clean Code | Refactor hàm “xấu” → “sạch” (so sánh 2 phiên bản) |
| 21 | DOM | Đổi text/style phần tử theo id |
| 22 | Manipulating DOM | Tạo/xóa phần tử động trong container |
| 23 | Event Listeners | Click / input / keydown cập nhật UI |
| 24 | Mini: Solar System | Chọn hành tinh → tính cân nặng trên đó |
| 25 | Mini: Countries Viz 1 | Top N quốc gia theo dân số (data mẫu nhỏ) |
| 26 | Mini: Countries Viz 2 | Lọc/tìm quốc gia theo chữ cái |
| 27 | Mini: Portfolio | Toggle section / highlight skill tags |
| 28 | Mini: Leaderboard | Thêm điểm người chơi, sắp xếp bảng |
| 29 | Mini: Animating Characters | Đổi màu / animate chữ khi bấm |
| 30 | Final Projects | Checklist / random project idea generator |

> Data cho Day 25–26: embed **dataset nhỏ** (≈10–20 nước) trong file HTML — không
> fetch file ngoài để giữ 1-file và chạy offline (trừ Google Translate / ảnh nếu có).

## Out of Scope
- Không clone nguyên văn README / chứng chỉ / setup Node của repo gốc.
- Không chấm điểm / lưu tiến độ học viên (localStorage chỉ dùng trong demo bài 17).
- Không playground editor đầy đủ (Monaco/CodeMirror).
- Không tách nhiều file HTML theo ngày.
- Không cover mọi exercise Level 1–3 trong từng ngày của Asabeneh (chỉ 1 bài
  đại diện / ngày).
- Không dịch offline.

## Technical Approach
- **Deliverable**: `30-days-exercises.html` (tên đề xuất) cạnh `dom-exercises.html`.
- **UI**: reuse visual language của `dom-exercises.html` (dark panel, sticky
  header, TOC, exercise cards, solution toggle).
- **Isolation**: mỗi bài dùng id prefix `d01-` … `d30-` để tránh xung đột DOM/JS.
- **Google Translate**: cùng pattern widget ẩn + set `.goog-te-combo` khi bấm nút.
- **Attribution**: link tới repo nguồn trong intro/footer; nội dung bài viết lại
  ngắn gọn (không copy dài).

## Code Style
- Theo `.cursor/rules/` (2 spaces, single quotes, semicolons, camelCase).
- Vanilla JS; tránh `eval` / `Function` với input người dùng.

## Testing Strategy
- Không test framework (trang tĩnh 1 file). Verify thủ công:
  - Serve qua `python -m http.server` (hoặc tương đương), mở trang.
  - Smoke-test mỗi demo Day 01–30.
  - Toggle lời giải; bấm dịch VI/EN.
  - Console sạch lỗi.

## Boundaries

### Always Do
- Giữ đúng 1 file HTML, chạy được local.
- Đủ 30 ngày, mỗi ngày 1 demo + lời giải.
- Credit nguồn Asabeneh / 30-Days-Of-JavaScript.

### Ask First
- Thêm thư viện UI / chart ngoài.
- Đổi sang nhiều file hoặc tách CSS/JS.
- Fetch dataset lớn từ CDN.

### Never Do
- Hardcode secrets.
- `eval()` / `new Function()` với input học viên.
- Copy nguyên văn dài có bản quyền từ repo gốc.

## Open Decisions (đã chốt Discovery)
| # | Quyết định |
|---|------------|
| 1A | Cả 30 ngày |
| 2A | 1 bài / ngày |
| 3A | Đề + demo + ẩn/hiện lời giải |
| 4A | Có nút Google Translate VI/EN |
| 5B | Spec tại `docs/specs/30-days-js.md` (giữ `SPEC.md` DOM) |

## Next Step
Sau khi approve spec → `/plan` → `/build` ra `30-days-exercises.html`.
