Vòng lặp FOR (For Loop) cho phép chạy một khối code nhiều lần. Vòng lặp này in ra console mười lần:

```js
for (let i = 0; i < 10; i++) {
  // log the numbers 0 through 9
  console.log(i)
}
```

Phần đầu `let i = 0` chạy một lần khi bắt đầu vòng lặp. Biến `i` theo dõi số lần vòng lặp đã chạy.

Phần thứ hai `i < 10` được kiểm tra trước mỗi lần lặp. Nếu điều kiện đúng, code trong vòng lặp được thực thi. Nếu sai, vòng lặp kết thúc. `i < 10` nghĩa là vòng lặp tiếp tục khi `i` nhỏ hơn `10`.

Phần cuối `i++` chạy sau mỗi lần lặp, tăng `i` lên 1. Khi `i` đạt `10`, vòng lặp dừng.

## Bài tập:

Tạo file tên `for-loop.js`.

Trong file đó khai báo biến `total` bằng `0`.

Khai báo biến thứ hai `limit` bằng `10`.

Tạo vòng lặp for với biến `i` bắt đầu từ 0, tăng 1 mỗi lần lặp. Vòng lặp chạy khi `i` nhỏ hơn `limit`.

Mỗi lần lặp, cộng `i` vào biến `total`. Dùng câu lệnh:

```js
total += i
```

Trong vòng for, câu lệnh này còn gọi là _bộ tích lũy (accumulator)_ — giống tổng đang chạy trên máy tính tiền khi quét từng món. Ở bài này có 10 món, giá tăng 1 mỗi món (món đầu miễn phí!).

Sau vòng for, dùng `console.log()` để in biến `total` ra terminal.

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify for-loop.js
```
