# 36. Tìm mảng con có tổng lớn nhất

Thuật toán Kadane tìm đoạn liên tiếp có tổng lớn nhất.

## Yêu cầu

Viết hàm `maxSubArray(nums)`.

- Trả về tổng lớn nhất của mảng con liên tiếp (ít nhất 1 phần tử).

## Ví dụ

| Input | Output |
|-------|--------|
| `[-2, 1, -3, 4, -1, 2, 1]` | `6` |

## Gợi ý

Nếu tổng tích lũy âm thì reset; luôn cập nhật max.

## Cách nộp bài

Tạo file (ví dụ `max-sub-array.js`) và export hàm:

```js
function maxSubArray (/* ... */) {
  // ...
}

module.exports = maxSubArray
```

Kiểm tra:

```bash
javascripting verify max-sub-array.js
```
