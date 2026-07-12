# Lời giải — Tính trung bình cộng

```js
function calculateAverage (arr) {
  if (arr.length === 0) return 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) sum += arr[i]
  return sum / arr.length
}

module.exports = calculateAverage
```

Gợi ý: Nếu `arr.length === 0` trả về 0.
