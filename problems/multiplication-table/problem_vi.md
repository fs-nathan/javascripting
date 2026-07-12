# 08. In bảng cửu chương n

Vòng lặp có thể tạo định dạng văn bản lặp lại dựa trên tham số.

## Yêu cầu

Viết hàm `multiplicationTable(n)`.

- Nhận vào một số nguyên `n` (từ 1 đến 9).
- Trả về một mảng chứa các chuỗi kết quả phép nhân từ 1 đến 10.

## Ví dụ

| Input | Output |
|-------|--------|
| `5` | `['5 x 1 = 5', ..., '5 x 10 = 50']` |

## Gợi ý

Template: `` `${n} x ${i} = ${n * i}` ``.

## Cách nộp bài

Tạo file (ví dụ `multiplication-table.js`) và export hàm:

```js
function multiplicationTable (/* ... */) {
  // ...
}

module.exports = multiplicationTable
```

Kiểm tra:

```bash
javascripting verify multiplication-table.js
```
