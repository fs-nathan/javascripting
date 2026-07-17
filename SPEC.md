# Feature: JavaScript DOM Exercises — Local Interactive Page

## Objective
Cung cấp một trang HTML chạy được ở local, tổng hợp 13 bài tập DOM (dựa theo
[w3resource JavaScript DOM Exercises](https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php)),
mỗi bài có đề bài, HTML mẫu, demo chạy trực tiếp và code lời giải. Người dùng có
thể bấm một nút để dịch toàn trang sang Tiếng Việt bằng Google Translate.

## Target Users
Người học JavaScript (beginner → intermediate) muốn luyện thao tác DOM và xem
ngay kết quả trong trình duyệt mà không cần backend hay build tool.

## Core Features
1. **13 bài tập DOM** — Style Paragraph, Get Form Values, Paragraph Background
   Color, Get Link Attributes, Add Table Rows, Update Table Cell, Create Table
   Dynamically, Remove Dropdown Item, Count Dropdown Items, Sphere Volume
   Calculator, Random Image Display, Highlight Bold on Hover, Window Resize
   Dimensions.
   - *Acceptance*: đủ 13 card, mỗi card có tiêu đề + số thứ tự.
2. **Demo tương tác** — mỗi bài có khu vực demo hoạt động thật (button/form/table
   phản hồi đúng như đề).
   - *Acceptance*: thao tác trên demo cho kết quả đúng, không lỗi console.
3. **Lời giải ẩn/hiện** — mỗi bài có nút "Xem lời giải" hiển thị code JS.
   - *Acceptance*: bấm toggle được, code khớp với hành vi demo.
4. **Dịch Tiếng Việt theo nút bấm** — nút "Dịch sang Tiếng Việt" và nút quay lại
   "English" dùng Google Translate widget (chỉ dịch khi user bấm).
   - *Acceptance*: bấm nút → nội dung trang chuyển sang Tiếng Việt.

## Out of Scope
- Không chấm điểm / kiểm tra bài làm của người dùng.
- Không có editor code online (chỉ hiển thị lời giải).
- Không dịch offline (Google Translate cần mạng).
- Không tách nhiều trang; chỉ một file.

## Technical Approach
- **Một file HTML duy nhất** (`dom-exercises.html`) với CSS và JS inline.
- Mỗi bài là một `<section class="exercise">` độc lập, ID/selector cục bộ để tránh
  xung đột.
- Google Translate: nhúng `translate_a/element.js`, khởi tạo widget ẩn, nút bấm
  set `.goog-te-combo` = `vi`/`en` rồi dispatch `change`.
- Vanilla JS, không dependency, không build step.

## Code Style
- Theo `.cursor/rules/` (2 spaces, single quotes, semicolons, camelCase).
- Comment chỉ giải thích WHY khi cần.

## Testing Strategy
- Không có test framework (trang tĩnh 1 file). Verify thủ công:
  - Mở bằng trình duyệt, thao tác từng demo.
  - Kiểm tra console sạch lỗi.
  - Bấm nút dịch → trang sang Tiếng Việt.

## Boundaries
### Always Do
- Giữ nguyên 1 file, chạy được khi mở trực tiếp (`file://`).
- Demo phản hồi đúng đề bài.

### Ask First
- Thêm thư viện ngoài (ngoài Google Translate).
- Đổi sang nhiều file / thêm build tool.

### Never Do
- Dùng `eval()`/`Function()` với input người dùng.
- Nhúng nội dung có bản quyền nguyên văn.
