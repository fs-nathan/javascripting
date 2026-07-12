# 45. Sắp xếp nhanh (Quick Sort)

Divide and Conquer: chọn pivot, chia mảng left/right, đệ quy.

## Yêu cầu

Viết hàm `quickSort(arr)`.

- Trả về mảng mới đã sắp xếp tăng dần bằng Quick Sort.

## Ví dụ

| Input | Output |
|-------|--------|
| `[6, 2, 9, 1, 5]` | `[1, 2, 5, 6, 9]` |

## Gợi ý

Chọn pivot giữa; left < pivot, right > pivot.

## Cách nộp bài

Tạo file (ví dụ `quick-sort.js`) và export hàm:

```js
function quickSort (/* ... */) {
  // ...
}

module.exports = quickSort
```

Kiểm tra:

```bash
javascripting verify quick-sort.js
```
