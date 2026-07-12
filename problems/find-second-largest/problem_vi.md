# 15. Tìm số lớn thứ hai

Tìm phần tử lớn thứ n giúp rèn luyện quản lý trạng thái nhiều biến trong vòng lặp.

## Yêu cầu

Viết hàm `findSecondLargest(arr)`.

- Nhận vào mảng số nguyên có ít nhất 2 phần tử khác nhau.
- Trả về số lớn thứ hai.
- Không dùng `.sort()`.

## Ví dụ

| Input | Output |
|-------|--------|
| `[1, 5, 2, 7, 6]` | `6` |

## Gợi ý

Dùng hai biến `max1` và `max2`.

## Cách nộp bài

Tạo file (ví dụ `find-second-largest.js`) và export hàm:

```js
function findSecondLargest (/* ... */) {
  // ...
}

module.exports = findSecondLargest
```

Kiểm tra:

```bash
javascripting verify find-second-largest.js
```
