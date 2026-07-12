# Lời giải — Kiểm tra mảng con

```js
function isSubset (subset, array) {
  for (let i = 0; i < subset.length; i++) {
    if (!array.includes(subset[i])) return false
  }
  return true
}

module.exports = isSubset
```

Gợi ý: Dùng `.every` hoặc vòng lặp + `.includes`.
