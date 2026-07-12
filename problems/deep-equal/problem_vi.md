# 44. So sánh bằng sâu (Deep Equal)

`===` chỉ so sánh tham chiếu với object. Deep equal so sánh cấu trúc và giá trị.

## Yêu cầu

Viết hàm `deepEqual(obj1, obj2)`.

- Trả về `true` nếu bằng nhau về cấu trúc và giá trị sâu bên trong.

## Ví dụ

| Input | Output |
|-------|--------|
| `{a: [1,2]}, {a: [1,2]}` | `true` |

## Gợi ý

Đệ quy so sánh từng thuộc tính.

## Cách nộp bài

Tạo file (ví dụ `deep-equal.js`) và export hàm:

```js
function deepEqual (/* ... */) {
  // ...
}

module.exports = deepEqual
```

Kiểm tra:

```bash
javascripting verify deep-equal.js
```
