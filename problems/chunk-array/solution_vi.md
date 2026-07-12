# Lời giải — Cắt mảng thành các phần nhỏ

```js
function chunkArray (arr, size) {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

module.exports = chunkArray
```

Gợi ý: `arr.slice(i, i + size)` với bước nhảy `size`.
