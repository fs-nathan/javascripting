# 42. Xoay mảng vòng tròn k bước

Dịch phần tử sang phải k bước, phần tử cuối quay về đầu.

## Yêu cầu

Viết hàm `rotateArray(arr, k)`.

- Xoay phải `k` lần.
- Nếu `k` lớn hơn độ dài mảng, dùng `k % length`.

## Ví dụ

| Input | Output |
|-------|--------|
| `[1, 2, 3, 4, 5], 2` | `[4, 5, 1, 2, 3]` |

## Gợi ý

Dùng `slice` và nối hai phần.

## Cách nộp bài

Tạo file (ví dụ `rotate-array.js`) và export hàm:

```js
function rotateArray (/* ... */) {
  // ...
}

module.exports = rotateArray
```

Kiểm tra:

```bash
javascripting verify rotate-array.js
```
