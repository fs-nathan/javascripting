# 12. Loại bỏ phần tử trùng lặp

Sàng lọc và loại bỏ dữ liệu trùng lặp để dữ liệu đồng nhất.

## Yêu cầu

Viết hàm `removeDuplicates(arr)`.

- Nhận vào một mảng chứa số hoặc chuỗi.
- Trả về mảng mới chứa các phần tử duy nhất theo thứ tự xuất hiện gốc.
- Không sử dụng đối tượng `Set`.

## Ví dụ

| Input | Output |
|-------|--------|
| `[1, 2, 2, 3, 1]` | `[1, 2, 3]` |

## Gợi ý

Dùng `.includes()` để kiểm tra trước khi thêm.

## Cách nộp bài

Tạo file (ví dụ `remove-duplicates.js`) và export hàm:

```js
function removeDuplicates (/* ... */) {
  // ...
}

module.exports = removeDuplicates
```

Kiểm tra:

```bash
javascripting verify remove-duplicates.js
```
