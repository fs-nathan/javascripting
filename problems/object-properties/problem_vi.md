Bạn có thể truy cập và thao tác thuộc tính đối tượng — các khóa và giá trị — tương tự mảng.

Ví dụ dùng **ngoặc vuông**:

```js
const example = {
  pizza: 'yummy'
}

console.log(example['pizza'])
```

Code trên in chuỗi `'yummy'` ra terminal.

Hoặc dùng **cú pháp dấu chấm (dot notation)** cho kết quả giống nhau:

```js
example.pizza

example['pizza']
```

Hai dòng trên đều trả về `yummy`.

## Bài tập:

Tạo file tên `object-properties.js`.

Trong file đó khai báo biến `food` như sau:

```js
const food = {
  types: 'only pizza'
}
```

Dùng `console.log()` để in thuộc tính `types` của đối tượng `food` ra terminal.

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify object-properties.js
```
