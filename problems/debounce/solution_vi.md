# Lời giải — Hàm gom cụm gọi (Debounce)

```js
function debounce (fn, delay) {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

module.exports = debounce
```

Gợi ý: `clearTimeout` + `setTimeout` trong closure.
