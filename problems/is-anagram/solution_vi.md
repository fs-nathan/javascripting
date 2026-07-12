# Lời giải — Kiểm tra chuỗi đảo ngữ (Anagram)

```js
function isAnagram (str1, str2) {
  function normalize (s) {
    return s.toLowerCase().replace(/ /g, '').split('').sort().join('')
  }
  return normalize(str1) === normalize(str2)
}

module.exports = isAnagram
```

Gợi ý: Chuẩn hóa rồi `.sort()` từng mảng ký tự.
