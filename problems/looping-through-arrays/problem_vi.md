Trong bài này chúng ta dùng **vòng lặp for (For Loop)** để truy cập và thao tác danh sách giá trị trong mảng.

Truy cập phần tử mảng qua số nguyên.

Mỗi phần tử được xác định bằng số, bắt đầu từ `0`.

Trong mảng này `hi` có chỉ số `1`:

```js
const greetings = ['hello', 'hi', 'good morning']
```

Truy cập như sau:

```js
greetings[1]
```

Trong **vòng lặp for** ta dùng biến `i` trong ngoặc vuông thay vì số nguyên trực tiếp.

## Bài tập:

Tạo file tên `looping-through-arrays.js`.

Trong file đó khai báo biến `pets` tham chiếu mảng:

```js
['cat', 'dog', 'rat']
```

Tạo vòng lặp for đổi mỗi chuỗi trong mảng thành dạng số nhiều.

Dùng câu lệnh như sau trong vòng lặp:

```js
pets[i] = pets[i] + 's'
```

Sau vòng lặp, dùng `console.log()` để in mảng `pets` ra terminal.

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify looping-through-arrays.js
```
