# 39. Kiểm tra chuỗi ngoặc hợp lệ

Dùng Stack để đối sánh cặp ngoặc.

## Yêu cầu

Viết hàm `isValidParentheses(str)`.

- Chuỗi chỉ gồm `'()'`, `'[]'`, `'{}'`.
- Trả về `true` nếu mở/đóng đúng thứ tự.

## Ví dụ

| Input | Output |
|-------|--------|
| `'{([])}'` | `true` |

## Gợi ý

Push ngoặc mở; gặp đóng thì pop và khớp cặp.

## Cách nộp bài

Tạo file (ví dụ `is-valid-parentheses.js`) và export hàm:

```js
function isValidParentheses (/* ... */) {
  // ...
}

module.exports = isValidParentheses
```

Kiểm tra:

```bash
javascripting verify is-valid-parentheses.js
```
