# Lời giải — Tìm chuỗi con không lặp dài nhất

```js
function lengthOfLongestSubstring (s) {
  const seen = {}
  let left = 0
  let best = 0
  for (let right = 0; right < s.length; right++) {
    const ch = s[right]
    if (seen[ch] !== undefined && seen[ch] >= left) {
      left = seen[ch] + 1
    }
    seen[ch] = right
    best = Math.max(best, right - left + 1)
  }
  return best
}

module.exports = lengthOfLongestSubstring
```

Gợi ý: Dùng Set/Map theo dõi cửa sổ hiện tại.
