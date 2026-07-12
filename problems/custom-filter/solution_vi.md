# Lời giải — Lọc mảng theo điều kiện

```js
function customFilter (arr, callback) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) result.push(arr[i])
  }
  return result
}

module.exports = customFilter
```

Gợi ý: Duyệt mảng, `push` khi callback đúng.
