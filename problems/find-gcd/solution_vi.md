# Lời giải — Tìm ước số chung lớn nhất

```js
function findGCD (a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

module.exports = findGCD
```

Gợi ý: Thuật toán Euclid: thay b bằng a % b cho đến khi b = 0.
