# 04. Xếp loại học lực

Cấu trúc if - else if - else cho phép kiểm tra nhiều điều kiện logic liên tiếp.

## Yêu cầu

Viết hàm `classifyGrade(score)`.

- Nhận vào điểm số từ 0 đến 10.
- Trả về: `'Giỏi'` nếu >= 8.5, `'Khá'` nếu >= 7.0 và < 8.5, `'Trung bình'` nếu >= 5.0 và < 7.0, `'Yếu'` nếu < 5.0.

## Ví dụ

| Input | Output |
|-------|--------|
| `7.5` | `'Khá'` |

## Gợi ý

Kiểm tra từ điều kiện cao nhất xuống thấp dần.

## Cách nộp bài

Tạo file (ví dụ `classify-grade.js`) và export hàm:

```js
function classifyGrade (/* ... */) {
  // ...
}

module.exports = classifyGrade
```

Kiểm tra:

```bash
javascripting verify classify-grade.js
```
