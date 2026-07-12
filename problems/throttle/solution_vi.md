# Lời giải — Hàm tiết lưu gọi (Throttle)

```js
function throttle (fn, limit) {
  let last = 0
  return function () {
    const now = Date.now()
    if (now - last >= limit) {
      last = now
      return fn.apply(this, arguments)
    }
  }
}

module.exports = throttle
```

Gợi ý: Dùng cờ / timestamp lần chạy cuối.
