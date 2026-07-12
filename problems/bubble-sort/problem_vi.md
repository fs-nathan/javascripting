# 40. Sắp xếp nổi bọt (Bubble Sort)

Bubble sort hoán đổi phần tử liền kề sai thứ tự.

## Yêu cầu

Viết hàm `bubbleSort(arr)`.

- Sắp xếp tăng dần bằng bubble sort.
- Trả về mảng đã sắp xếp.

## Ví dụ

| Input | Output |
|-------|--------|
| `[5, 3, 8, 4, 2]` | `[2, 3, 4, 5, 8]` |

## Gợi ý

Hai vòng lặp lồng nhau, swap nếu `arr[j] > arr[j+1]`.

## Cách nộp bài

Tạo file (ví dụ `bubble-sort.js`) và export hàm:

```js
function bubbleSort (/* ... */) {
  // ...
}

module.exports = bubbleSort
```

Kiểm tra:

```bash
javascripting verify bubble-sort.js
```
