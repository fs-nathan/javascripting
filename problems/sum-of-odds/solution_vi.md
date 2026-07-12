# Lời giải — Tính tổng số lẻ

```js
function sumOfOdds (n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) sum += i
  }
  return sum
}

module.exports = sumOfOdds
```

Gợi ý: Nếu `i % 2 !== 0` thì cộng `i` vào tổng.
