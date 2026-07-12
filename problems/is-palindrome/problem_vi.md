# 17. Kiểm tra Palindrome

Chuỗi Palindrome đọc xuôi hay ngược đều giống nhau.

## Yêu cầu

Viết hàm `isPalindrome(str)`.

- Nhận vào một chuỗi.
- Trả về `true` nếu đối xứng.
- Bỏ qua viết hoa/thường và khoảng trắng.

## Ví dụ

| Input | Output |
|-------|--------|
| `'Race car'` | `true` |

## Gợi ý

Chuẩn hóa rồi so với bản đảo ngược.

## Cách nộp bài

Tạo file (ví dụ `is-palindrome.js`) và export hàm:

```js
function isPalindrome (/* ... */) {
  // ...
}

module.exports = isPalindrome
```

Kiểm tra:

```bash
javascripting verify is-palindrome.js
```
