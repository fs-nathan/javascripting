# 10. Tính giai thừa

Giai thừa của n (n!) là tích các số nguyên dương từ 1 đến n. Quy ước 0! = 1.

## Yêu cầu

Viết hàm `factorial(n)`.

- Nhận vào số nguyên không âm `n`.
- Trả về giá trị n giai thừa.

## Ví dụ

| Input | Output |
|-------|--------|
| `4` | `24` |

## Gợi ý

Nếu n là 0 hoặc 1 trả về 1.

## Cách nộp bài

Tạo file (ví dụ `factorial.js`) và export hàm:

```js
function factorial (/* ... */) {
  // ...
}

module.exports = factorial
```

Kiểm tra:

```bash
javascripting verify factorial.js
```
