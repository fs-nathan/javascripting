# 32. Làm phẳng mảng lồng nhau

Đệ quy giúp làm phẳng mảng lồng nhiều tầng.

## Yêu cầu

Viết hàm `flattenArray(arr)`.

- Trả về mảng một chiều.
- Không dùng `.flat()`.

## Ví dụ

| Input | Output |
|-------|--------|
| `[1, [2, [3, 4]], 5]` | `[1, 2, 3, 4, 5]` |

## Gợi ý

Nếu phần tử là mảng thì gọi đệ quy rồi nối.

## Cách nộp bài

Tạo file (ví dụ `flatten-array.js`) và export hàm:

```js
function flattenArray (/* ... */) {
  // ...
}

module.exports = flattenArray
```

Kiểm tra:

```bash
javascripting verify flatten-array.js
```
