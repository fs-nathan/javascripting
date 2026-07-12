# Lời giải — Mã hóa độ dài loạt đơn (Run-length)

```js
function runLengthEncoding (str) {
  if (!str) return ''
  let result = ''
  let count = 1
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++
    } else {
      result += str[i - 1] + String(count)
      count = 1
    }
  }
  return result
}

module.exports = runLengthEncoding
```

Gợi ý: Đếm ký tự giống nhau liên tiếp rồi nối.
