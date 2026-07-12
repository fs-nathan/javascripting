# 31. Tìm cặp số có tổng mục tiêu

Tìm hai chỉ số trong mảng sao cho tổng hai phần tử bằng target.

## Yêu cầu

Viết hàm `twoSum(nums, target)`.

- Trả về mảng `[i, j]` (i < j) sao cho `nums[i] + nums[j] === target`.
- Giả sử luôn có đúng một đáp án.

## Ví dụ

| Input | Output |
|-------|--------|
| `[2, 7, 11, 15], 9` | `[0, 1]` |

## Gợi ý

Có thể dùng hash map hoặc hai vòng lặp.

## Cách nộp bài

Tạo file (ví dụ `two-sum.js`) và export hàm:

```js
function twoSum (/* ... */) {
  // ...
}

module.exports = twoSum
```

Kiểm tra:

```bash
javascripting verify two-sum.js
```
