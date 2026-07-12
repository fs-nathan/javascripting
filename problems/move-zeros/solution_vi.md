# Lời giải — Di chuyển số 0 về cuối mảng

```js
function moveZeros (arr) {
  const nonZero = []
  let zeros = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeros++
    else nonZero.push(arr[i])
  }
  for (let i = 0; i < zeros; i++) nonZero.push(0)
  return nonZero
}

module.exports = moveZeros
```

Gợi ý: Tạo mảng non-zero rồi nối thêm các số 0.
