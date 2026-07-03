Để mọi thứ gọn gàng, hãy tạo một thư mục cho workshop này.

Chạy lệnh sau để tạo thư mục tên `javascripting` (hoặc tên khác nếu bạn muốn):

```bash
mkdir javascripting
```

Di chuyển vào thư mục `javascripting`:

```bash
cd javascripting
```

Tạo file tên `introduction.js`:

```bash
touch introduction.js
```

Hoặc nếu bạn dùng Windows:
```bash
type NUL > introduction.js
```
(`type` là một phần của lệnh!)

Mở file bằng trình soạn thảo yêu thích và thêm dòng sau:

```js
console.log('hello')
```

Lưu file, rồi kiểm tra chương trình bằng lệnh:

```bash
javascripting verify introduction.js
```

Nhân tiện, trong suốt tutorial này bạn có thể đặt tên file tùy ý — ví dụ dùng `catsAreAwesome.js` cho mọi bài. Chỉ cần chạy:

```bash
javascripting verify catsAreAwesome.js
```

