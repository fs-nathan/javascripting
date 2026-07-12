# Lời giải — Tìm cặp số có tổng mục tiêu

```js
function twoSum (nums, target) {
  const seen = {}
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i]
    if (seen[need] !== undefined) return [seen[need], i]
    seen[nums[i]] = i
  }
  return []
}

module.exports = twoSum
```

Gợi ý: Có thể dùng hash map hoặc hai vòng lặp.
