# 03. Tính tổng số lẻ

Vòng lặp (for/while) lặp lại một khối lệnh nhiều lần.

## Yêu cầu

Viết hàm `sumOfOdds(n)`.

- Nhận vào một số nguyên dương `n`.
- Tính và trả về tổng của toàn bộ các số lẻ từ 1 đến `n`.

## Ví dụ

| Input | Output |
|-------|--------|
| `5` | `9` |

## Gợi ý

Nếu `i % 2 !== 0` thì cộng `i` vào tổng.

## Cách nộp bài

Tạo file (ví dụ `sum-of-odds.js`) và export hàm:

```js
function sumOfOdds (/* ... */) {
  // ...
}

module.exports = sumOfOdds
```

Kiểm tra:

```bash
javascripting verify sum-of-odds.js
```
