# 38. Tìm số còn thiếu trong dãy số

Dùng công thức tổng cấp số cộng để tìm số thiếu.

## Yêu cầu

Viết hàm `findMissingNumber(arr, n)`.

- Mảng chứa số từ 1 đến n thiếu đúng 1 số (độ dài = n - 1).
- Trả về số còn thiếu.

## Ví dụ

| Input | Output |
|-------|--------|
| `[1, 2, 4, 5], 5` | `3` |

## Gợi ý

`S = n * (n + 1) / 2` trừ tổng thực tế.

## Cách nộp bài

Tạo file (ví dụ `find-missing-number.js`) và export hàm:

```js
function findMissingNumber (/* ... */) {
  // ...
}

module.exports = findMissingNumber
```

Kiểm tra:

```bash
javascripting verify find-missing-number.js
```
