# Lời giải — Kiểm tra Palindrome

```js
function isPalindrome (str) {
  const normalized = str.toLowerCase().replace(/ /g, '')
  return normalized === normalized.split('').reverse().join('')
}

module.exports = isPalindrome
```

Gợi ý: Chuẩn hóa rồi so với bản đảo ngược.
