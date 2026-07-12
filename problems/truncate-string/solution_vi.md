# Lời giải — Cắt ngắn chuỗi văn bản

```js
function truncateString (str, maxLength) {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength) + '...'
}

module.exports = truncateString
```

Gợi ý: Dùng `.slice(0, maxLength) + '...'`.
