# 16. Kiểm tra số nguyên tố

Số nguyên tố lớn hơn 1 và chỉ chia hết cho 1 và chính nó.

## Yêu cầu

Viết hàm `isPrime(n)`.

- Nhận vào số nguyên `n`.
- Trả về `true` nếu là số nguyên tố, ngược lại `false`.

## Ví dụ

| Input | Output |
|-------|--------|
| `11` | `true` |

## Gợi ý

Nếu n < 2 trả false. Lặp tới `Math.sqrt(n)`.

## Cách nộp bài

Tạo file (ví dụ `is-prime.js`) và export hàm:

```js
function isPrime (/* ... */) {
  // ...
}

module.exports = isPrime
```

Kiểm tra:

```bash
javascripting verify is-prime.js
```
