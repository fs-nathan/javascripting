# 24. Di chuyển số 0 về cuối mảng

Sắp xếp lại phần tử theo điều kiện mà vẫn giữ thứ tự tương đối của phần tử khác 0.

## Yêu cầu

Viết hàm `moveZeros(arr)`.

- Đưa tất cả số 0 về cuối mảng.
- Giữ nguyên thứ tự các phần tử khác 0.

## Ví dụ

| Input | Output |
|-------|--------|
| `[0, 1, 0, 3, 12]` | `[1, 3, 12, 0, 0]` |

## Gợi ý

Tạo mảng non-zero rồi nối thêm các số 0.

## Cách nộp bài

Tạo file (ví dụ `move-zeros.js`) và export hàm:

```js
function moveZeros (/* ... */) {
  // ...
}

module.exports = moveZeros
```

Kiểm tra:

```bash
javascripting verify move-zeros.js
```
