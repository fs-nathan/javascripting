# 28. Tìm từ dài nhất

Tách chuỗi thành từ rồi tìm từ có độ dài lớn nhất.

## Yêu cầu

Viết hàm `findLongestWord(str)`.

- Trả về từ dài nhất trong chuỗi (tách bởi khoảng trắng).
- Nếu nhiều từ cùng độ dài, trả về từ đầu tiên.

## Ví dụ

| Input | Output |
|-------|--------|
| `'The quick brown fox'` | `'quick'` |

## Gợi ý

`.split(' ')` rồi so sánh `.length`.

## Cách nộp bài

Tạo file (ví dụ `find-longest-word.js`) và export hàm:

```js
function findLongestWord (/* ... */) {
  // ...
}

module.exports = findLongestWord
```

Kiểm tra:

```bash
javascripting verify find-longest-word.js
```
