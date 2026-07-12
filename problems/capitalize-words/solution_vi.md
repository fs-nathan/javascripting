# Lời giải — Viết hoa chữ cái đầu

```js
function capitalizeWords (str) {
  return str.split(' ').map(function (word) {
    if (!word) return word
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }).join(' ')
}

module.exports = capitalizeWords
```

Gợi ý: Dùng `.split(' ')`, `.toUpperCase()`, `.slice(1)`.
