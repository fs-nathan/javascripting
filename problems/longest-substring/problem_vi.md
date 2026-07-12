# 43. Tìm chuỗi con không lặp dài nhất

Sliding window tìm chuỗi con liên tiếp không trùng ký tự dài nhất.

## Yêu cầu

Viết hàm `lengthOfLongestSubstring(s)`.

- Trả về độ dài chuỗi con liên tiếp dài nhất không có ký tự trùng.

## Ví dụ

| Input | Output |
|-------|--------|
| `'abcabcbb'` | `3` |

## Gợi ý

Dùng Set/Map theo dõi cửa sổ hiện tại.

## Cách nộp bài

Tạo file (ví dụ `longest-substring.js`) và export hàm:

```js
function lengthOfLongestSubstring (/* ... */) {
  // ...
}

module.exports = lengthOfLongestSubstring
```

Kiểm tra:

```bash
javascripting verify longest-substring.js
```
