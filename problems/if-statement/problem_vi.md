Câu lệnh điều kiện (Conditional Statement) dùng để thay đổi luồng chương trình dựa trên điều kiện boolean.

Câu lệnh điều kiện trông như sau:

```js
if (n > 1) {
  console.log('the variable n is greater than 1.')
} else {
  console.log('the variable n is less than or equal to 1.')
}
```

Trong dấu ngoặc đơn bạn nhập biểu thức logic — kết quả là true hoặc false.

Khối `else` là tùy chọn, chứa code chạy khi điều kiện là false.

## Bài tập:

Tạo file tên `if-statement.js`.

Trong file đó khai báo biến tên `fruit`.

Gán cho `fruit` giá trị chuỗi **"orange"**.

Dùng `console.log()` để in **"The fruit name has more than five characters."** nếu độ dài của `fruit` lớn hơn năm.
Ngược lại, in **"The fruit name has five characters or less."**

> **Lưu ý:** Giữ nguyên các chuỗi tiếng Anh trên — lệnh `verify` so khớp chính xác từng ký tự.

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify if-statement.js
```
