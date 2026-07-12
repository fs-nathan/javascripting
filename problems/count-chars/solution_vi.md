# Lời giải — Đếm số lần xuất hiện ký tự

```js
function countChars (str) {
  const result = {}
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    result[ch] = (result[ch] || 0) + 1
  }
  return result
}

module.exports = countChars
```

Gợi ý: Nếu key đã có thì tăng 1, chưa có thì gán 1.
