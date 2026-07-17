# Plan: JavaScript DOM Exercises — Local Interactive Page

## Context
- Nguồn tham chiếu: w3resource JavaScript DOM Exercises (13 bài chính).
- Deliverable: **1 file** `dom-exercises.html` (CSS/JS inline), chạy trực tiếp qua
  `file://` hoặc static server.
- Mỗi bài = 1 vertical slice: đề bài → HTML mẫu → demo chạy → lời giải ẩn/hiện.

## Vertical Slices (mỗi bài là 1 slice hoàn chỉnh)
Mỗi slice gồm markup + demo tương tác + code solution trong cùng một card.

## Phase 1: Foundation (khung trang)
- Cấu trúc HTML5, meta, tiêu đề trang.
- CSS: layout card, typography, code block, nút, responsive.
- Component "exercise card" tái sử dụng (đề, HTML mẫu, demo, toggle solution).
- Thanh điều khiển dịch (nút VI / EN) + widget Google Translate ẩn.

## Phase 2: 13 bài tập
1. Style Paragraph — đổi font/size/color khi bấm nút.
2. Get Form Values — lấy first/last name từ form.
3. Paragraph Background Color — set màu nền đoạn văn.
4. Get Link Attributes — đọc href/hreflang/rel/target/type.
5. Add Table Rows — chèn dòng vào bảng.
6. Update Table Cell — cập nhật ô theo row/col.
7. Create Table Dynamically — tạo bảng theo số hàng/cột.
8. Remove Dropdown Item — xoá option đang chọn.
9. Count Dropdown Items — đếm số option.
10. Sphere Volume Calculator — tính thể tích hình cầu.
11. Random Image Display — hiện ảnh ngẫu nhiên.
12. Highlight Bold on Hover — hover link → tô đậm từ in đậm.
13. Window Resize Dimensions — hiện width/height, cập nhật khi resize.

## Phase 3: Google Translate + Polish
- Nút "Dịch sang Tiếng Việt" và "English" trigger `.goog-te-combo`.
- Kiểm tra console, responsive, sửa lint.

## Checkpoint
- [ ] 13 card đầy đủ, demo chạy đúng.
- [ ] Toggle lời giải hoạt động.
- [ ] Nút dịch chuyển trang sang Tiếng Việt.
- [ ] Không lỗi console.

## Verification
- Mở file trên trình duyệt, thao tác từng demo.
- Bấm nút dịch, xác nhận nội dung đổi ngôn ngữ.
