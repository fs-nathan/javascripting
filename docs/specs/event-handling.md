# Feature: JavaScript Event Handling Exercises — Local Interactive Page

## Objective
Cung cấp **một file HTML** chạy được ở local/localhost, tổng hợp **21 bài tập
Event Handling** dựa theo
[w3resource — JavaScript Event Handling](https://www.w3resource.com/javascript-exercises/event/),
mỗi bài có đề ngắn, demo chạy thật và lời giải ẩn/hiện, kèm nút dịch sang
Tiếng Việt bằng Google Translate (chỉ khi user bấm).

## Target Users
Người học JavaScript (beginner → intermediate) muốn luyện DOM events và Browser
API trong trình duyệt, không cần Node/build tool.

## Core Features

1. **21 bài chính** — đủ danh sách nguồn (15 Event Handling + 6 Browser API).
   - *Acceptance*: mục lục 01–21; mỗi card có số thứ tự + tiêu đề.

2. **Format giống `dom-exercises.html`** — đề bài + demo tương tác + nút
   “Xem/Ẩn lời giải”.
   - *Acceptance*: demo phản hồi đúng đề; console không lỗi; lời giải khớp hành vi.

3. **Một file HTML duy nhất** — `event-exercises.html`, CSS/JS inline.
   - *Acceptance*: không dependency ngoài Google Translate; không build step.

4. **Google Translate on-demand** — nút “Dịch sang Tiếng Việt” và “English”.
   - *Acceptance*: chỉ dịch khi user bấm.

## Exercise Mapping (21 main)

### Event Handling (1–15)
| # | Bài | Demo đại diện |
|---|-----|---------------|
| 01 | Button Click Event | Nút bấm → log / hiện message |
| 02 | Dropdown Menu Toggle | Click để show/hide menu |
| 03 | Mouse Enter Background Change | `mouseenter` đổi màu nền |
| 04 | Form Validation with Error Message | Submit form trống → hiện lỗi |
| 05 | Image Slideshow Navigation | Prev/Next đổi ảnh (URL mẫu) |
| 06 | Drag-and-Drop List Reordering | Kéo thả sắp xếp lại list |
| 07 | Toggle Switch Implementation | Click switch đổi on/off |
| 08 | Progress Bar Update | Nút tăng % width progress |
| 09 | Enter Key Detection in Input | `keydown` Enter → hiện thông báo |
| 10 | Double-Click Event Action | `dblclick` đổi text/style |
| 11 | Event Delegation on List Items | Click item động qua parent listener |
| 12 | Prevent Default Behavior | `preventDefault` trên submit + hiện values |
| 13 | Stop Propagation Example | Bubbling + `stopPropagation` |
| 14 | Event Capturing Example | Capture phase parent → child |
| 15 | Debounce Input Event | Debounce input (delay rồi mới “API call” giả) |

### Browser API (16–21)
| # | Bài | Demo đại diện |
|---|-----|---------------|
| 16 | LocalStorage Counter | Counter persist qua reload |
| 17 | SessionStorage Cart | Thêm item vào cart (session) |
| 18 | Fetch API with Error Handling | Fetch JSONPlaceholder / mock + bắt lỗi |
| 19 | Geolocation API Example | Hiện lat/lng (cần permission user) |
| 20 | Clipboard API for Copy | Copy text box → clipboard |
| 21 | Web Notifications API | Xin quyền + gửi notification |

## Out of Scope
- Không cover 4 “related problems” mỗi bài (105 tổng trên nguồn).
- Không editor code online / chấm điểm.
- Không gộp vào `dom-exercises.html`.
- Không dịch offline.
- Không giả lập Geolocation/Notification nếu trình duyệt từ chối permission
  (demo hiện thông báo thân thiện).

## Technical Approach
- **Deliverable**: `event-exercises.html` (cạnh `dom-exercises.html`).
- **UI**: reuse visual language của `dom-exercises.html` / `30-days-exercises.html`
  (dark panel, sticky header, TOC, cards, solution toggle).
- **Isolation**: id prefix `ev01-` … `ev21-`.
- **Network**: bài 05 (ảnh), 18 (fetch) cần mạng; còn lại chạy offline.
- **Attribution**: link nguồn w3resource trong intro/footer; viết lại đề ngắn,
  không copy nguyên văn dài.

## Code Style
- Theo `.cursor/rules/` (2 spaces, single quotes, semicolons, camelCase).
- Vanilla JS; không `eval` / `Function` với input người dùng.

## Testing Strategy
- Không test framework. Verify thủ công:
  - Serve qua `python -m http.server`, mở `/event-exercises.html`.
  - Smoke-test từng demo 01–21 (Geolocation/Notification: kiểm tra nhánh
    granted + denied).
  - Toggle lời giải; bấm dịch VI/EN.
  - Console sạch lỗi.

## Boundaries

### Always Do
- Giữ 1 file HTML, chạy được local.
- Đủ 21 bài, mỗi bài demo + lời giải.
- Credit nguồn w3resource.

### Ask First
- Thêm thư viện ngoài (SortableJS, v.v.).
- Đổi sang nhiều file / gộp vào trang DOM hiện có.

### Never Do
- Hardcode secrets.
- `eval()` với input học viên.
- Copy nguyên văn dài có bản quyền từ nguồn.

## Open Decisions (đã chốt Discovery)
| # | Quyết định |
|---|------------|
| 1A | Cả 21 bài chính |
| 2A | Đề + demo + ẩn/hiện lời giải |
| 3A | Có nút Google Translate VI/EN |
| 4A | 1 file `event-exercises.html` |
| 5A | Spec tại `docs/specs/event-handling.md` |

## Next Step
Sau khi approve spec → `/plan` → `/build` ra `event-exercises.html`.
