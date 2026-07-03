Chúng ta có thể làm phép toán cơ bản với các toán tử quen thuộc: `+`, `-`, `*`, `/`, và `%`.

Với phép toán phức tạp hơn, dùng đối tượng `Math`.

Trong bài này chúng ta dùng đối tượng `Math` để làm tròn số.

## Bài tập:

Tạo file tên `rounding-numbers.js`.

Trong file đó khai báo biến tên `roundUp` tham chiếu số thập phân `1.5`.

Dùng phương thức `Math.round()` để làm tròn số. Phương thức này làm tròn lên hoặc xuống về số nguyên gần nhất.

Ví dụ dùng `Math.round()`:

```js
Math.round(0.5)
```

Khai báo biến thứ hai tên `rounded` tham chiếu kết quả của `Math.round()`, truyền biến `roundUp` làm đối số.

Dùng `console.log()` để in số đó ra terminal.

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify rounding-numbers.js
```
