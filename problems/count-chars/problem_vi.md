# 18. Đếm số lần xuất hiện ký tự

Dùng object làm bảng băm để lưu tần suất xuất hiện.

## Yêu cầu

Viết hàm `countChars(str)`.

- Nhận vào một chuỗi.
- Trả về object đếm tần suất từng ký tự.

## Ví dụ

| Input | Output |
|-------|--------|
| `'hello'` | `{h:1, e:1, l:2, o:1}` |

## Gợi ý

Nếu key đã có thì tăng 1, chưa có thì gán 1.

## Cách nộp bài

Tạo file (ví dụ `count-chars.js`) và export hàm:

```js
function countChars (/* ... */) {
  // ...
}

module.exports = countChars
```

Kiểm tra:

```bash
javascripting verify count-chars.js
```
