Bạn thường cần thay đổi nội dung chuỗi.

Chuỗi có sẵn các phương thức để kiểm tra và thao tác nội dung.

Ví dụ dùng phương thức `.replace()`:

```js
let example = 'this example exists'
example = example.replace('exists', 'is awesome')
console.log(example)
```

Lưu ý: để đổi giá trị mà biến `example` tham chiếu, ta cần dùng dấu bằng lần nữa, lần này với `example.replace()` ở bên phải dấu bằng.

## Bài tập:

Tạo file tên `revising-strings.js`.

Khai báo biến tên `pizza` tham chiếu chuỗi: `'pizza is alright'`

Dùng `.replace()` để đổi `alright` thành `wonderful`.

Dùng `console.log()` để in kết quả của `.replace()` ra terminal.

Kiểm tra chương trình bằng lệnh:

`javascripting verify revising-strings.js`
