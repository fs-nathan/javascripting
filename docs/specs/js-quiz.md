# Feature: JavaScript Multiple-Choice Quizzes (Easy / Medium / Hard)

## Objective
Cung cấp bộ bài tập trắc nghiệm JavaScript 3 cấp độ (dễ → vừa → khó) để học viên
vừa ôn luyện vừa được chấm điểm. Mỗi level là một file HTML độc lập gồm 50 câu
(1 đáp án đúng), bao phủ String, Array, vòng lặp, DOM và event handling; sau khi
trả lời hết và nộp bài sẽ hiện điểm, đánh dấu đúng/sai, đáp án đúng và giải thích ngắn.

## Target Users
Học viên JavaScript từ **Beginner → Intermediate** muốn:
- Ôn luyện các hàm/khái niệm cốt lõi trước khi làm project
- Tự kiểm tra trình độ theo level và xem giải thích ngay sau khi nộp

## Core Features

1. **3 file quiz theo level** — `quiz/easy.html`, `quiz/medium.html`, `quiz/hard.html`
   - *Acceptance*: mỗi file mở trực tiếp bằng trình duyệt (`file://`), không cần server/build.
   - *Acceptance*: mỗi file đúng **50 câu**, không trùng ID trong cùng file.

2. **Năm chủ đề bắt buộc** — String methods, Array methods, loops, DOM, event handling
   - *Acceptance*: phân bổ theo bảng dưới; mỗi câu gắn `topic` rõ ràng.
   - *Acceptance*: có câu dạng “output của đoạn code là gì?” (snippet JS ngắn).

   | Level | String | Array | Loop | DOM | Event | Tổng |
   |-------|--------|-------|------|-----|-------|------|
   | Dễ (`easy`) | 12 | 12 | 12 | 8 | 6 | 50 |
   | Vừa (`medium`) | 10 | 10 | 10 | 10 | 10 | 50 |
   | Khó (`hard`) | 8 | 10 | 8 | 12 | 12 | 50 |

3. **Trắc nghiệm 1 đáp án đúng (A–D)**
   - *Acceptance*: mỗi câu có đúng 4 lựa chọn; chỉ 1 `correctIndex` hợp lệ (0–3).
   - *Acceptance*: radio/option group theo từng câu; chọn lại được trước khi nộp.

4. **Bắt buộc trả lời hết mới nộp**
   - *Acceptance*: nút “Nộp bài” disabled hoặc chặn submit khi còn câu chưa chọn.
   - *Acceptance*: UI chỉ rõ số câu còn thiếu / cuộn tới câu chưa trả lời (tối thiểu: thông báo + số câu trống).

5. **Kết quả sau nộp (phương án B)**
   - *Acceptance*: hiện **điểm** (số đúng / 50) và **phần trăm**.
   - *Acceptance*: từng câu đánh dấu đúng/sai; câu sai hiện đáp án đúng.
   - *Acceptance*: mỗi câu có **giải thích ngắn** (1–3 câu) bằng tiếng Việt.
   - *Acceptance*: không cho đổi đáp án sau khi đã nộp (trừ khi làm lại — xem Ask First).

6. **Ngôn ngữ & trình bày**
   - *Acceptance*: UI tiếng Việt (tiêu đề, nút, thông báo, giải thích).
   - *Acceptance*: snippet code / tên method / keyword JS giữ tiếng Anh.

7. **Standalone vanilla**
   - *Acceptance*: CSS + JS inline hoặc cùng file; **không CDN**, không thư viện ngoài.
   - *Acceptance*: chạy được offline sau khi tải file.

## Out of Scope
- Backend, database, đăng nhập, lưu điểm lên server
- localStorage / timer / xáo trộn câu hỏi (có thể bổ sung sau — Ask First)
- Câu nhiều đáp án đúng, điền chỗ trống, viết code tự do
- Build tool, bundler, framework (React/Vue/…)
- Chủ đề ngoài 5 nhóm đã liệt kê (Promise, async/await, module, …)
- Ghi đè `SPEC.md` gốc (DOM exercises) hoặc thay đổi `exercises/todo-app.*`

## Difficulty Guidelines

### Easy
- String: `length`, `toUpperCase`/`toLowerCase`, `includes`, `indexOf`, `slice`, `trim`, `split` cơ bản
- Array: `push`/`pop`, `shift`/`unshift`, `length`, `includes`, `indexOf`, truy cập phần tử
- Loop: `for`, `while`, `for...of` đơn giản; đếm / cộng dồn
- DOM: `getElementById`, `querySelector`, `textContent`/`innerHTML` cơ bản, `createElement`
- Event: `addEventListener('click')`, `preventDefault` khái niệm đơn giản

### Medium
- String: `replace`/`replaceAll`, `substring` vs `slice`, `padStart`, template / chuỗi phức tạp hơn
- Array: `map`, `filter`, `find`, `some`/`every`, `concat`, `slice`/`splice` phân biệt
- Loop: lồng nhau mức nông, `break`/`continue`, `for...in` vs `for...of`
- DOM: `classList`, `setAttribute`, duyệt node list, thay đổi style
- Event: `event.target`, bubbling cơ bản, `change`/`input`/`keydown`

### Hard
- String: kết hợp nhiều method, edge case (`split` rỗng, unicode đơn giản), suy luận output dài hơn
- Array: `reduce`, chain `map`+`filter`, `sort` (hiểu hành vi mặc định / compare), shallow copy pitfalls
- Loop: logic phức tạp hơn, off-by-one, kết hợp array methods trong vòng lặp
- DOM: event delegation, `closest`, thao tác nhiều node, timing cơ bản (thứ tự listener)
- Event: capture vs bubble, `stopPropagation`, form submit flow, synthetic scenarios qua code

## Technical Approach

### Stack
- HTML5 + CSS3 + Vanilla JavaScript (ES6+)
- Không dependency, không build step
- Mỗi level **một file HTML** tự chứa (câu hỏi + logic chấm điểm + style)

### File layout
```
quiz/
├── easy.html      # Level dễ — 50 câu
├── medium.html    # Level vừa — 50 câu
└── hard.html      # Level khó — 50 câu
docs/specs/
└── js-quiz.md     # Spec này
```

### Data model (mỗi câu hỏi)
```js
{
  id: 1,                    // 1–50 trong file
  topic: 'string',          // 'string' | 'array' | 'loop' | 'dom' | 'event'
  question: '...',          // markdown-ish plain text; code trong <pre> khi render
  code: 'const x = ...',    // optional — snippet hiển thị nếu có
  choices: ['A...', 'B...', 'C...', 'D...'],
  correctIndex: 0,          // 0–3
  explanation: '...',       // tiếng Việt, ngắn
}
```

### UI flow
1. Học viên mở file → thấy tiêu đề level + progress (đã chọn / 50)
2. Trả lời lần lượt (radio A–D)
3. “Nộp bài” chỉ thành công khi `answeredCount === 50`
4. Sau nộp: khóa lựa chọn, scroll/hiện khu vực kết quả (điểm + %), tô màu đúng/sai, hiện đáp án + explanation

### Scoring
- Mỗi câu đúng = 1 điểm; tối đa 50
- Hiển thị: `Đúng: X/50` và `Y%`

### Integration points
- Không tích hợp backend
- Có thể link từ README / trang index học tập sau (Ask First)

## Code Style
- Follow rules in `.cursor/rules/` (2 spaces, single quotes, semicolons, camelCase)
- File HTML: kebab-case tên file đã chốt (`easy.html`, …)
- Comment chỉ giải thích WHY khi cần (ví dụ edge case đáp án)
- Không `eval()` / `Function()` trên input học viên — chấm điểm bằng so sánh index

## Testing Strategy
- Không bắt buộc test framework (trang tĩnh)
- **Thủ công / checklist:**
  - Mở từng file `file://` — 50 câu render đủ, đúng phân bổ topic
  - Nộp khi còn trống → bị chặn + thông báo
  - Trả lời hết (cố ý đúng một phần) → điểm khớp số câu đúng
  - Câu sai hiện đáp án đúng + explanation tiếng Việt
  - Console không lỗi
- **Smoke logic (tuỳ chọn khi `/build`):** script đếm `questions.length === 50`, mọi `correctIndex` ∈ [0,3], mọi `topic` hợp lệ, đủ số câu theo bảng phân bổ

## Boundaries

### Always Do
- Đúng 3 file, mỗi file 50 câu, 1 đáp án đúng
- Bắt buộc trả lời hết mới nộp
- Sau nộp: điểm + đúng/sai + đáp án đúng + giải thích ngắn (VI)
- Vanilla, offline, không CDN
- UI tiếng Việt; code/method names tiếng Anh

### Ask First
- Thêm timer, shuffle, localStorage, nút “Làm lại”
- Tách CSS/JS ra file riêng hoặc thêm trang index điều hướng
- Đổi phân bổ số câu theo topic
- Thêm level / chủ đề mới

### Never Do
- Hardcode secret / gọi API ngoài
- Dùng `eval` trên đáp án học viên
- Ghi đè `SPEC.md` (DOM exercises) hoặc phá `exercises/todo-app.*`
- Thêm framework / bundler cho MVP này

## Next Step
Sau khi spec được duyệt → chạy `/plan` để tách task triển khai (skeleton UI → ngân hàng câu hỏi từng level → scoring → polish).
