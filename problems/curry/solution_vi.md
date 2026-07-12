# Lời giải — Chuyển đổi chuỗi hàm (Currying)

```js
function curry (fn) {
  return function curried () {
    const args = Array.prototype.slice.call(arguments)
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }
    return function () {
      return curried.apply(this, args.concat(Array.prototype.slice.call(arguments)))
    }
  }
}

module.exports = curry
```

Gợi ý: Dùng `fn.length` và đệ quy tích lũy args.
