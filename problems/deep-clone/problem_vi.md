# 48. Sao chép sâu (Deep Clone)

Gán object thường chỉ copy tham chiếu. Deep clone tạo bản sao độc lập.

## Yêu cầu

Viết hàm `deepClone(obj)`.

- Sao chép sâu object/mảng lồng nhau.
- Không dùng `JSON.parse(JSON.stringify(obj))`.

## Ví dụ

| Input | Output |
|-------|--------|
| `{x: 1, y: {z: 2}}` | `object mới độc lập` |

## Gợi ý

Đệ quy: tạo object/mảng mới, clone từng thuộc tính.

## Cách nộp bài

Tạo file (ví dụ `deep-clone.js`) và export hàm:

```js
function deepClone (/* ... */) {
  // ...
}

module.exports = deepClone
```

Kiểm tra:

```bash
javascripting verify deep-clone.js
```
