Phần tử mảng truy cập qua chỉ số (index).

Chỉ số bắt đầu từ 0 đến độ dài mảng trừ 1.

Ví dụ:


```js
const pets = ['cat', 'dog', 'rat']

console.log(pets[0])
```

Code trên in phần tử đầu của mảng `pets` — chuỗi `cat`.

Phần tử mảng chỉ truy cập bằng cú pháp ngoặc vuông.

Cú pháp dấu chấm không hợp lệ.

Hợp lệ:

```js
console.log(pets[0])
```

Không hợp lệ:
```
console.log(pets.1);
```

## Bài tập:

Tạo file tên `accessing-array-values.js`.

Trong file đó khai báo mảng `food`:
```js
const food = ['apple', 'pizza', 'pear']
```


Dùng `console.log()` để in giá trị **thứ hai** của mảng ra terminal.

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify accessing-array-values.js
```
