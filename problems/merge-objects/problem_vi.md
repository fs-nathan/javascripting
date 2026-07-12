# 26. Gộp hai đối tượng cấu trúc

Gộp object: key trùng thì lấy giá trị từ object sau.

## Yêu cầu

Viết hàm `mergeObjects(obj1, obj2)`.

- Trả về object mới gộp hai object.
- Nếu trùng key, lấy giá trị từ `obj2`.

## Ví dụ

| Input | Output |
|-------|--------|
| `{a:1}, {b:2, a:3}` | `{a:3, b:2}` |

## Gợi ý

`Object.assign({}, obj1, obj2)` hoặc spread.

## Cách nộp bài

Tạo file (ví dụ `merge-objects.js`) và export hàm:

```js
function mergeObjects (/* ... */) {
  // ...
}

module.exports = mergeObjects
```

Kiểm tra:

```bash
javascripting verify merge-objects.js
```
