# 25. Kiểm tra mảng con

Kiểm tra tập con: mọi phần tử của mảng A có trong mảng B hay không.

## Yêu cầu

Viết hàm `isSubset(subset, array)`.

- Trả về `true` nếu mọi phần tử của `subset` đều có trong `array`.

## Ví dụ

| Input | Output |
|-------|--------|
| `[1, 2], [1, 2, 3, 4]` | `true` |

## Gợi ý

Dùng `.every` hoặc vòng lặp + `.includes`.

## Cách nộp bài

Tạo file (ví dụ `is-subset.js`) và export hàm:

```js
function isSubset (/* ... */) {
  // ...
}

module.exports = isSubset
```

Kiểm tra:

```bash
javascripting verify is-subset.js
```
