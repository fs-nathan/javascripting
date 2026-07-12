# 46. Hàm gom cụm gọi (Debounce)

Debounce trì hoãn thực thi cho đến khi ngừng gọi trong khoảng `delay`.

## Yêu cầu

Viết hàm `debounce(fn, delay)`.

- Trả về hàm mới: mỗi lần gọi sẽ reset timer; chỉ chạy `fn` sau khi im lặng đủ `delay` ms.

## Ví dụ

| Input | Output |
|-------|--------|
| `fn tìm kiếm, 300` | `hàm debounce` |

## Gợi ý

`clearTimeout` + `setTimeout` trong closure.

## Cách nộp bài

Tạo file (ví dụ `debounce.js`) và export hàm:

```js
function debounce (/* ... */) {
  // ...
}

module.exports = debounce
```

Kiểm tra:

```bash
javascripting verify debounce.js
```
