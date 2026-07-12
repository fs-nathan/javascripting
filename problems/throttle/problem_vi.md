# 47. Hàm tiết lưu gọi (Throttle)

Throttle giới hạn: trong mỗi khoảng `limit` ms chỉ chạy tối đa một lần.

## Yêu cầu

Viết hàm `throttle(fn, limit)`.

- Trả về hàm mới chỉ cho phép kích hoạt `fn` tối đa một lần mỗi chu kỳ `limit` ms.

## Ví dụ

| Input | Output |
|-------|--------|
| `fn resize, 500` | `hàm throttle` |

## Gợi ý

Dùng cờ / timestamp lần chạy cuối.

## Cách nộp bài

Tạo file (ví dụ `throttle.js`) và export hàm:

```js
function throttle (/* ... */) {
  // ...
}

module.exports = throttle
```

Kiểm tra:

```bash
javascripting verify throttle.js
```
