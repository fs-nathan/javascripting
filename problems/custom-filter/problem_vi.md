# 30. Lọc mảng theo điều kiện

Tự implement filter: giữ phần tử thỏa callback.

## Yêu cầu

Viết hàm `customFilter(arr, callback)`.

- Trả về mảng mới gồm phần tử mà `callback(item)` trả về truthy.
- Không dùng `.filter()`.

## Ví dụ

| Input | Output |
|-------|--------|
| `[1,2,3,4], n => n % 2 === 0` | `[2,4]` |

## Gợi ý

Duyệt mảng, `push` khi callback đúng.

## Cách nộp bài

Tạo file (ví dụ `custom-filter.js`) và export hàm:

```js
function customFilter (/* ... */) {
  // ...
}

module.exports = customFilter
```

Kiểm tra:

```bash
javascripting verify custom-filter.js
```
