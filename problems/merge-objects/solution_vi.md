# Lời giải — Gộp hai đối tượng cấu trúc

```js
function mergeObjects (obj1, obj2) {
  return Object.assign({}, obj1, obj2)
}

module.exports = mergeObjects
```

Gợi ý: `Object.assign({}, obj1, obj2)` hoặc spread.
