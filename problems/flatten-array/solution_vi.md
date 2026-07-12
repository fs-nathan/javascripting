# Lời giải — Làm phẳng mảng lồng nhau

```js
function flattenArray (arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push.apply(result, flattenArray(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

module.exports = flattenArray
```

Gợi ý: Nếu phần tử là mảng thì gọi đệ quy rồi nối.
