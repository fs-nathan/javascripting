# Lời giải — Tìm số nhỏ nhất

```js
function findMin (arr) {
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]
  }
  return min
}

module.exports = findMin
```

Gợi ý: Gán phần tử đầu làm min tạm, so sánh các phần tử còn lại.
