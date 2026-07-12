# 07. Tính trung bình cộng

Tính trung bình cộng dựa trên tổng các giá trị chia cho số phần tử.

## Yêu cầu

Viết hàm `calculateAverage(arr)`.

- Nhận vào một mảng chứa các số.
- Trả về điểm trung bình cộng.
- Nếu mảng rỗng, trả về `0`.

## Ví dụ

| Input | Output |
|-------|--------|
| `[4, 6, 8, 10]` | `7` |

## Gợi ý

Nếu `arr.length === 0` trả về 0.

## Cách nộp bài

Tạo file (ví dụ `calculate-average.js`) và export hàm:

```js
function calculateAverage (/* ... */) {
  // ...
}

module.exports = calculateAverage
```

Kiểm tra:

```bash
javascripting verify calculate-average.js
```
