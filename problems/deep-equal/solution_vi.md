# Lời giải — So sánh bằng sâu (Deep Equal)

```js
function deepEqual (a, b) {
  if (a === b) return true
  if (typeof a !== typeof b) return false
  if (a == null || b == null) return a === b
  if (typeof a !== 'object') return false
  if (Array.isArray(a) !== Array.isArray(b)) return false
  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  if (keysA.length !== keysB.length) return false
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i]
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false
    if (!deepEqual(a[key], b[key])) return false
  }
  return true
}

module.exports = deepEqual
```

Gợi ý: Đệ quy so sánh từng thuộc tính.
