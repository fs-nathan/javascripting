# 27. Tính số Fibonacci thứ n

Dãy Fibonacci: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).

## Yêu cầu

Viết hàm `fibonacci(n)`.

- Trả về số Fibonacci thứ `n` (n >= 0).

## Ví dụ

| Input | Output |
|-------|--------|
| `7` | `13` |

## Gợi ý

Dùng vòng lặp với hai biến trước đó.

## Cách nộp bài

Tạo file (ví dụ `fibonacci.js`) và export hàm:

```js
function fibonacci (/* ... */) {
  // ...
}

module.exports = fibonacci
```

Kiểm tra:

```bash
javascripting verify fibonacci.js
```
