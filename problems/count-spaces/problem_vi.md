# 06. Đếm số ký tự khoảng trắng

Chuỗi bản chất gần giống như một mảng ký tự.

## Yêu cầu

Viết hàm `countSpaces(str)`.

- Nhận vào một chuỗi bất kỳ.
- Đếm và trả về số lượng khoảng trắng `' '` có trong chuỗi.

## Ví dụ

| Input | Output |
|-------|--------|
| `'Học lập trình JS'` | `3` |

## Gợi ý

Duyệt từng ký tự hoặc dùng `.split(' ')`.

## Cách nộp bài

Tạo file (ví dụ `count-spaces.js`) và export hàm:

```js
function countSpaces (/* ... */) {
  // ...
}

module.exports = countSpaces
```

Kiểm tra:

```bash
javascripting verify count-spaces.js
```
