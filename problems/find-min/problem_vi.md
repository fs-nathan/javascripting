# 05. Tìm số nhỏ nhất

Mảng (Array) chứa danh sách phần tử. Việc duyệt qua mảng giúp so sánh và lọc phần tử đặc biệt.

## Yêu cầu

Viết hàm `findMin(arr)`.

- Nhận vào một mảng số nguyên.
- Tìm và trả về giá trị nhỏ nhất trong mảng.
- Không được sử dụng hàm `Math.min()`.

## Ví dụ

| Input | Output |
|-------|--------|
| `[10, 5, 28, 2, 15]` | `2` |

## Gợi ý

Gán phần tử đầu làm min tạm, so sánh các phần tử còn lại.

## Cách nộp bài

Tạo file (ví dụ `find-min.js`) và export hàm:

```js
function findMin (/* ... */) {
  // ...
}

module.exports = findMin
```

Kiểm tra:

```bash
javascripting verify find-min.js
```
