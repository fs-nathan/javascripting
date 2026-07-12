# 35. Mã hóa Caesar Cipher

Caesar dịch chuyển chữ cái trong bảng chữ cái.

## Yêu cầu

Viết hàm `caesarCipher(str, shift)`.

- Chỉ dịch chữ cái tiếng Anh, giữ nguyên ký tự khác.
- Giữ nguyên chữ hoa/thường.

## Ví dụ

| Input | Output |
|-------|--------|
| `'Abc', 2` | `'Cde'` |

## Gợi ý

Dùng `charCodeAt` / `fromCharCode`, wrap quanh alphabet.

## Cách nộp bài

Tạo file (ví dụ `caesar-cipher.js`) và export hàm:

```js
function caesarCipher (/* ... */) {
  // ...
}

module.exports = caesarCipher
```

Kiểm tra:

```bash
javascripting verify caesar-cipher.js
```
