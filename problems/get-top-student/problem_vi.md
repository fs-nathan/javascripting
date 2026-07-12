# 13. Tìm học sinh xuất sắc

Đối tượng (Object) đại diện dữ liệu dạng key-value. Mảng đối tượng dùng rất phổ biến.

## Yêu cầu

Viết hàm `getTopStudent(students)`.

- Nhận vào mảng object dạng `{ name: string, score: number }`.
- Trả về thuộc tính `name` của học sinh có `score` cao nhất.

## Ví dụ

| Input | Output |
|-------|--------|
| `[{name: 'A', score: 8}, {name: 'B', score: 9}]` | `'B'` |

## Gợi ý

Duyệt mảng, giữ object có `.score` cao nhất.

## Cách nộp bài

Tạo file (ví dụ `get-top-student.js`) và export hàm:

```js
function getTopStudent (/* ... */) {
  // ...
}

module.exports = getTopStudent
```

Kiểm tra:

```bash
javascripting verify get-top-student.js
```
