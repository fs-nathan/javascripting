# 11. Viết hoa chữ cái đầu

Kết hợp cắt chuỗi, viết hoa chữ cái và nối chuỗi giúp định dạng lại văn bản.

## Yêu cầu

Viết hàm `capitalizeWords(str)`.

- Nhận vào một chuỗi văn bản nhiều từ.
- Viết hoa chữ cái đầu tiên của mỗi từ, các chữ cái còn lại viết thường.

## Ví dụ

| Input | Output |
|-------|--------|
| `'học javascript rất vui'` | `'Học Javascript Rất Vui'` |

## Gợi ý

Dùng `.split(' ')`, `.toUpperCase()`, `.slice(1)`.

## Cách nộp bài

Tạo file (ví dụ `capitalize-words.js`) và export hàm:

```js
function capitalizeWords (/* ... */) {
  // ...
}

module.exports = capitalizeWords
```

Kiểm tra:

```bash
javascripting verify capitalize-words.js
```
