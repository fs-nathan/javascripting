# 37. Mã hóa độ dài loạt đơn (Run-length)

Nén bằng cách thay chuỗi ký tự lặp bằng ký tự + số đếm.

## Yêu cầu

Viết hàm `runLengthEncoding(str)`.

- Ví dụ: `'AABBBCCCC'` → `'A2B3C4'`.

## Ví dụ

| Input | Output |
|-------|--------|
| `'AABBBCCCC'` | `'A2B3C4'` |

## Gợi ý

Đếm ký tự giống nhau liên tiếp rồi nối.

## Cách nộp bài

Tạo file (ví dụ `run-length-encoding.js`) và export hàm:

```js
function runLengthEncoding (/* ... */) {
  // ...
}

module.exports = runLengthEncoding
```

Kiểm tra:

```bash
javascripting verify run-length-encoding.js
```
