# 02. Kiểm tra năm nhuận

Câu lệnh if-else điều hướng chương trình chạy theo các nhánh logic dựa trên điều kiện đúng (true) hoặc sai (false).

## Yêu cầu

Viết hàm `isLeapYear(year)`.

- Nhận vào một năm dạng số nguyên dương.
- Trả về `true` nếu là năm nhuận, ngược lại trả về `false`.
- Năm nhuận chia hết cho 4, nhưng không chia hết cho 100 trừ khi chia hết cho 400.

## Ví dụ

| Input | Output |
|-------|--------|
| `2024` | `true` |

## Gợi ý

Dùng `%` kết hợp `&&`, `||`.

## Cách nộp bài

Tạo file (ví dụ `is-leap-year.js`) và export hàm:

```js
function isLeapYear (/* ... */) {
  // ...
}

module.exports = isLeapYear
```

Kiểm tra:

```bash
javascripting verify is-leap-year.js
```
