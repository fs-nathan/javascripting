# Lời giải — Tính giai thừa

```js
function factorial (n) {
  if (n === 0 || n === 1) return 1
  let result = 1
  for (let i = 2; i <= n; i++) result *= i
  return result
}

module.exports = factorial
```

Gợi ý: Nếu n là 0 hoặc 1 trả về 1.
