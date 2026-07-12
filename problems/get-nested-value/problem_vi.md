# 34. Truy xuất giá trị lồng sâu

Đọc an toàn giá trị object qua đường dẫn chuỗi.

## Yêu cầu

Viết hàm `getNestedValue(obj, path)`.

- `path` dạng `'a.b.c'`.
- Trả về giá trị, hoặc `undefined` nếu không tồn tại.

## Ví dụ

| Input | Output |
|-------|--------|
| `{a: {b: {c: 42}}}, 'a.b.c'` | `42` |

## Gợi ý

`.split('.')` rồi `reduce`/`for`.

## Cách nộp bài

Tạo file (ví dụ `get-nested-value.js`) và export hàm:

```js
function getNestedValue (/* ... */) {
  // ...
}

module.exports = getNestedValue
```

Kiểm tra:

```bash
javascripting verify get-nested-value.js
```
