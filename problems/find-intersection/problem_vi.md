# 20. Tìm phần tử chung của hai mảng

Tìm tập giao (intersection) giữa hai mảng.

## Yêu cầu

Viết hàm `findIntersection(arr1, arr2)`.

- Trả về mảng phần tử xuất hiện ở cả hai mảng.
- Không trùng lặp trong kết quả.

## Ví dụ

| Input | Output |
|-------|--------|
| `[1,2,3], [2,3,4]` | `[2,3]` |

## Gợi ý

`arr2.includes(item)` và chưa có trong kết quả.

## Cách nộp bài

Tạo file (ví dụ `find-intersection.js`) và export hàm:

```js
function findIntersection (/* ... */) {
  // ...
}

module.exports = findIntersection
```

Kiểm tra:

```bash
javascripting verify find-intersection.js
```
