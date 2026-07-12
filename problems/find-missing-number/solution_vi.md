# Lời giải — Tìm số còn thiếu trong dãy số

```js
function findMissingNumber (arr, n) {
  const expected = n * (n + 1) / 2
  let sum = 0
  for (let i = 0; i < arr.length; i++) sum += arr[i]
  return expected - sum
}

module.exports = findMissingNumber
```

Gợi ý: `S = n * (n + 1) / 2` trừ tổng thực tế.
