# Lời giải — Hàm ghi nhớ (Memoize Function)

```js
function memoize (fn) {
  const cache = {}
  return function () {
    const key = JSON.stringify(Array.prototype.slice.call(arguments))
    if (Object.prototype.hasOwnProperty.call(cache, key)) {
      return cache[key]
    }
    const result = fn.apply(this, arguments)
    cache[key] = result
    return result
  }
}

module.exports = memoize
```

Gợi ý: Closure giữ object cache; stringify tham số làm key.
