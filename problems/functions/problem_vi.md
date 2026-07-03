Hàm (Function) là khối code nhận đầu vào, xử lý, rồi tạo đầu ra.

Ví dụ:

```js
function example (x) {
  return x * 2
}
```

Ta có thể **gọi (call)** hàm như sau để nhận số 10:

```js
example(5)
```

Ví dụ trên giả định hàm `example` nhận số làm đối số — đầu vào — và trả về số đó nhân 2.

## Bài tập:

Tạo file tên `functions.js`.

Trong file đó định nghĩa hàm tên `eat` nhận đối số tên `food`, mong đợi là chuỗi.

Trong hàm trả về đối số `food` như sau:

```js
return food + ' tasted really good.'
```

Trong ngoặc đơn của `console.log()`, gọi hàm `eat()` với chuỗi `bananas` làm đối số.

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify functions.js
```
