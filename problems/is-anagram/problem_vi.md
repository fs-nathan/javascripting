# 33. Kiểm tra chuỗi đảo ngữ (Anagram)

Anagram là chuỗi tạo bằng cách sắp xếp lại ký tự của chuỗi khác.

## Yêu cầu

Viết hàm `isAnagram(str1, str2)`.

- Không phân biệt hoa thường, bỏ qua khoảng trắng.

## Ví dụ

| Input | Output |
|-------|--------|
| `'silent', 'listen'` | `true` |

## Gợi ý

Chuẩn hóa rồi `.sort()` từng mảng ký tự.

## Cách nộp bài

Tạo file (ví dụ `is-anagram.js`) và export hàm:

```js
function isAnagram (/* ... */) {
  // ...
}

module.exports = isAnagram
```

Kiểm tra:

```bash
javascripting verify is-anagram.js
```
