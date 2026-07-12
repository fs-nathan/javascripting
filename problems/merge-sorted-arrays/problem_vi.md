# 19. Gộp hai mảng tăng dần

Thao tác trên nhiều mảng cùng lúc với hai con trỏ.

## Yêu cầu

Viết hàm `mergeSortedArrays(arr1, arr2)`.

- Nhận 2 mảng đã sắp xếp tăng dần.
- Trả về mảng mới đã sắp xếp tăng dần.
- Không dùng `.sort()`.

## Ví dụ

| Input | Output |
|-------|--------|
| `[1,3,5], [2,4,6]` | `[1,2,3,4,5,6]` |

## Gợi ý

So sánh từng phần tử bằng hai con trỏ.

## Cách nộp bài

Tạo file (ví dụ `merge-sorted-arrays.js`) và export hàm:

```js
function mergeSortedArrays (/* ... */) {
  // ...
}

module.exports = mergeSortedArrays
```

Kiểm tra:

```bash
javascripting verify merge-sorted-arrays.js
```
