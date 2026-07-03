Hàm có thể nhận bất kỳ số lượng đối số nào. Đối số có thể là chuỗi, số, mảng, đối tượng, thậm chí hàm khác.

Ví dụ:

```js
function example (firstArg, secondArg) {
  console.log(firstArg, secondArg)
}
```

Ta có thể **gọi** hàm với hai đối số:

```js
example('hello', 'world')
```

Ví dụ trên in `hello world` ra terminal.

## Bài tập:

Tạo file tên `function-arguments.js`.

Trong file đó định nghĩa hàm tên `math` nhận ba đối số. Quan trọng: tên đối số chỉ để tham chiếu — đặt tên tùy ý.

Trong hàm `math`, trả về kết quả nhân đối số thứ hai và thứ ba, rồi cộng với đối số thứ nhất.

Sau đó, trong ngoặc đơn của `console.log()`, gọi `math()` với `53` là đối số đầu, `61` là thứ hai, `67` là thứ ba.

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify function-arguments.js
```
