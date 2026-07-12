# 09. Kiểm tra đuôi file

Phương thức chuỗi giúp kiểm tra ký tự ở đầu hoặc cuối chuỗi.

## Yêu cầu

Viết hàm `checkExtension(filename, ext)`.

- Nhận vào chuỗi tên file và chuỗi phần mở rộng mong muốn.
- Trả về `true` nếu file kết thúc bằng đuôi đó, `false` nếu ngược lại.

## Ví dụ

| Input | Output |
|-------|--------|
| `'image.png', 'png'` | `true` |

## Gợi ý

Dùng `.endsWith()`.

## Cách nộp bài

Tạo file (ví dụ `check-extension.js`) và export hàm:

```js
function checkExtension (/* ... */) {
  // ...
}

module.exports = checkExtension
```

Kiểm tra:

```bash
javascripting verify check-extension.js
```
