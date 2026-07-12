# Lời giải — Kiểm tra số nguyên tố

```js
function isPrime (n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

module.exports = isPrime
```

Gợi ý: Nếu n < 2 trả false. Lặp tới `Math.sqrt(n)`.
