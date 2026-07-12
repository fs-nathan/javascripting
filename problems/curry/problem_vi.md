# 50. Chuyển đổi chuỗi hàm (Currying)

Currying biến hàm nhiều tham số thành chuỗi hàm mỗi lần nhận một (hoặc vài) tham số.

## Yêu cầu

Viết hàm `curry(fn)`.

- Trả về hàm curried: tích lũy tham số đến khi đủ `fn.length` rồi mới gọi `fn`.
- Ví dụ: `curry((a,b,c) => a+b+c)(1)(2)(3) === 6`.

## Ví dụ

| Input | Output |
|-------|--------|
| `sum(a,b,c)` | `curriedSum(1)(2)(3) === 6` |

## Gợi ý

Dùng `fn.length` và đệ quy tích lũy args.

## Cách nộp bài

Tạo file (ví dụ `curry.js`) và export hàm:

```js
function curry (/* ... */) {
  // ...
}

module.exports = curry
```

Kiểm tra:

```bash
javascripting verify curry.js
```
