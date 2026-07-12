# 21. Tìm ước số chung lớn nhất

USCLN/GCD của hai số là số lớn nhất mà cả hai đều chia hết.

## Yêu cầu

Viết hàm `findGCD(a, b)`.

- Nhận 2 số nguyên dương.
- Trả về ước số chung lớn nhất.

## Ví dụ

| Input | Output |
|-------|--------|
| `12, 18` | `6` |

## Gợi ý

Thuật toán Euclid: thay b bằng a % b cho đến khi b = 0.

## Cách nộp bài

Tạo file (ví dụ `find-gcd.js`) và export hàm:

```js
function findGCD (/* ... */) {
  // ...
}

module.exports = findGCD
```

Kiểm tra:

```bash
javascripting verify find-gcd.js
```
