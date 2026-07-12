# Lời giải — Truy xuất giá trị lồng sâu

```js
function getNestedValue (obj, path) {
  const keys = path.split('.')
  let current = obj
  for (let i = 0; i < keys.length; i++) {
    if (current == null) return undefined
    current = current[keys[i]]
  }
  return current
}

module.exports = getNestedValue
```

Gợi ý: `.split('.')` rồi `reduce`/`for`.
