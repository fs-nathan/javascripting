Có nhiều cách thao tác mảng.

Một tác vụ phổ biến là lọc mảng để chỉ giữ một số giá trị nhất định.

Với việc này dùng phương thức `.filter()`.

Ví dụ:

```js
const pets = ['cat', 'dog', 'elephant']

const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
})
```

Biến `filtered` giờ chỉ chứa `cat` và `dog`.

## Bài tập:

Tạo file tên `array-filtering.js`.

Trong file đó khai báo biến `numbers` tham chiếu mảng:

```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Như trên, khai báo biến `filtered` tham chiếu kết quả của `numbers.filter()`.

Hàm truyền vào `.filter()` trông tương tự:

```js
function evenNumbers (number) {
  return number % 2 === 0
}
```

Chú ý cú pháp trong toàn bộ lời giải. Dùng `console.log()` để in mảng `filtered` ra terminal.

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify array-filtering.js
```
