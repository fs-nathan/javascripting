JavaScript có sẵn cách liệt kê tất cả khóa của đối tượng. Hữu ích khi duyệt mọi thuộc tính và thao tác giá trị tương ứng.

Ví dụ liệt kê khóa bằng phương thức prototype **Object.keys()**:

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

Code trên in mảng chuỗi — mỗi chuỗi là một khóa của đối tượng `car`. `['make', 'model', 'year']`

## Bài tập:

Tạo file tên `object-keys.js`.

Trong file đó khai báo biến `car` như sau:

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

Sau đó khai báo biến `keys` như sau:
```js
const keys = Object.keys(car)
```

Dùng `console.log()` để in biến `keys` ra terminal.

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify object-keys.js
```
