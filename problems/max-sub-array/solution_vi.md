# Lời giải — Tìm mảng con có tổng lớn nhất

```js
function maxSubArray (nums) {
  let best = nums[0]
  let current = nums[0]
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i])
    best = Math.max(best, current)
  }
  return best
}

module.exports = maxSubArray
```

Gợi ý: Nếu tổng tích lũy âm thì reset; luôn cập nhật max.
