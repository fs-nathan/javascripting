# Lời giải — Đảo vị trí hai phần tử

```js
function swapElements (arr, i, j) {
  const result = arr.slice()
  const temp = result[i]
  result[i] = result[j]
  result[j] = temp
  return result
}

module.exports = swapElements
```

Gợi ý: Dùng biến tạm để hoán đổi.
