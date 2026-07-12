# 41. Hàm ghi nhớ (Memoize Function)

Cache kết quả hàm theo tham số đầu vào để tăng tốc khi gọi lại.

## Yêu cầu

Viết hàm `memoize(fn)`.

- Trả về hàm mới giống `fn` nhưng cache kết quả.
- Gọi lại cùng tham số → lấy từ cache, không gọi lại `fn`.

## Ví dụ

| Input | Output |
|-------|--------|
| `hàm bình phương` | `hàm có ghi nhớ` |

## Gợi ý

Closure giữ object cache; stringify tham số làm key.

## Cách nộp bài

Tạo file (ví dụ `memoize.js`) và export hàm:

```js
function memoize (/* ... */) {
  // ...
}

module.exports = memoize
```

Kiểm tra:

```bash
javascripting verify memoize.js
```
