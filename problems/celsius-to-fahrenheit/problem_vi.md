# 01. Chuyển đổi nhiệt độ

Biến dùng để lưu trữ giá trị dữ liệu. Các phép toán cơ bản (`+`, `-`, `*`, `/`) giúp xử lý và biến đổi dữ liệu.

## Yêu cầu

Viết hàm `celsiusToFahrenheit(celsius)`.

- Nhận vào một số đại diện cho độ C.
- Tính và trả về giá trị độ F tương ứng.
- Kết quả làm tròn đến 1 chữ số thập phân (dùng `.toFixed(1)` — trả về **chuỗi**).

## Ví dụ

| Input | Output |
|-------|--------|
| `30` | `'86.0'` |

## Gợi ý

Công thức: `F = C * 1.8 + 32`. Dùng `.toFixed(1)`.

## Cách nộp bài

Tạo file (ví dụ `celsius-to-fahrenheit.js`) và export hàm:

```js
function celsiusToFahrenheit (/* ... */) {
  // ...
}

module.exports = celsiusToFahrenheit
```

Kiểm tra:

```bash
javascripting verify celsius-to-fahrenheit.js
```
