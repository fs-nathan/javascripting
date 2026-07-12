# 22. Cắt mảng thành các phần nhỏ

Chunking thường dùng khi phân trang dữ liệu.

## Yêu cầu

Viết hàm `chunkArray(arr, size)`.

- Chia mảng thành các mảng con, mỗi mảng con dài tối đa `size`.

## Ví dụ

| Input | Output |
|-------|--------|
| `[1,2,3,4,5], 2` | `[[1,2], [3,4], [5]]` |

## Gợi ý

`arr.slice(i, i + size)` với bước nhảy `size`.

## Cách nộp bài

Tạo file (ví dụ `chunk-array.js`) và export hàm:

```js
function chunkArray (/* ... */) {
  // ...
}

module.exports = chunkArray
```

Kiểm tra:

```bash
javascripting verify chunk-array.js
```
