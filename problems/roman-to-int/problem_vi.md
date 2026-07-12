# 49. Chuyển số La Mã thành số nguyên

Số La Mã: I,V,X,L,C,D,M. Trừ khi số nhỏ đứng trước số lớn.

## Yêu cầu

Viết hàm `romanToInt(s)`.

- Nhận chuỗi La Mã hợp lệ, trả về số nguyên.

## Ví dụ

| Input | Output |
|-------|--------|
| `'MCMXCIV'` | `1994` |

## Gợi ý

Nếu ký tự hiện tại < ký tự sau thì trừ, không thì cộng.

## Cách nộp bài

Tạo file (ví dụ `roman-to-int.js`) và export hàm:

```js
function romanToInt (/* ... */) {
  // ...
}

module.exports = romanToInt
```

Kiểm tra:

```bash
javascripting verify roman-to-int.js
```
