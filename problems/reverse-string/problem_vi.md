# 14. Đảo ngược chuỗi

Xử lý đảo ngược chuỗi giúp tư duy về cấu trúc dữ liệu tuyến tính.

## Yêu cầu

Viết hàm `reverseString(str)`.

- Nhận vào một chuỗi ký tự.
- Trả về chuỗi đó theo thứ tự đảo ngược hoàn toàn.

## Ví dụ

| Input | Output |
|-------|--------|
| `'hello'` | `'olleh'` |

## Gợi ý

`.split('').reverse().join('')`.

## Cách nộp bài

Tạo file (ví dụ `reverse-string.js`) và export hàm:

```js
function reverseString (/* ... */) {
  // ...
}

module.exports = reverseString
```

Kiểm tra:

```bash
javascripting verify reverse-string.js
```
