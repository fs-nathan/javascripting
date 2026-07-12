# 23. Cắt ngắn chuỗi văn bản

Truncate dùng để hiện bản xem trước, tránh vỡ giao diện.

## Yêu cầu

Viết hàm `truncateString(str, maxLength)`.

- Nếu độ dài chuỗi lớn hơn `maxLength`, cắt còn `maxLength` ký tự và thêm `'...'`.
- Nếu không vượt, trả về chuỗi gốc.

## Ví dụ

| Input | Output |
|-------|--------|
| `'Hello World', 5` | `'Hello...'` |

## Gợi ý

Dùng `.slice(0, maxLength) + '...'`.

## Cách nộp bài

Tạo file (ví dụ `truncate-string.js`) và export hàm:

```js
function truncateString (/* ... */) {
  // ...
}

module.exports = truncateString
```

Kiểm tra:

```bash
javascripting verify truncate-string.js
```
