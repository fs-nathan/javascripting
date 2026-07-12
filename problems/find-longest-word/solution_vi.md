# Lời giải — Tìm từ dài nhất

```js
function findLongestWord (str) {
  const words = str.split(' ')
  let longest = words[0] || ''
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i]
  }
  return longest
}

module.exports = findLongestWord
```

Gợi ý: `.split(' ')` rồi so sánh `.length`.
