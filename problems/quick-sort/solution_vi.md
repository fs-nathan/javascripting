# Lời giải — Sắp xếp nhanh (Quick Sort)

```js
function quickSort (arr) {
  if (arr.length <= 1) return arr.slice()
  const pivot = arr[Math.floor(arr.length / 2)]
  const left = []
  const mid = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else if (arr[i] > pivot) right.push(arr[i])
    else mid.push(arr[i])
  }
  return quickSort(left).concat(mid, quickSort(right))
}

module.exports = quickSort
```

Gợi ý: Chọn pivot giữa; left < pivot, right > pivot.
