# Lời giải — Đếm số ký tự khoảng trắng

```js
function countSpaces (str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') count++
  }
  return count
}

module.exports = countSpaces
```

Gợi ý: Duyệt từng ký tự hoặc dùng `.split(' ')`.
