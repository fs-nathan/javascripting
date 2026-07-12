# Lời giải — Tìm phần tử chung của hai mảng

```js
function findIntersection (arr1, arr2) {
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i]
    if (arr2.includes(item) && !result.includes(item)) result.push(item)
  }
  return result
}

module.exports = findIntersection
```

Gợi ý: `arr2.includes(item)` và chưa có trong kết quả.
