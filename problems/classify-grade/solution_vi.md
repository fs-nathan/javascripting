# Lời giải — Xếp loại học lực

```js
function classifyGrade (score) {
  if (score >= 8.5) return 'Giỏi'
  if (score >= 7.0) return 'Khá'
  if (score >= 5.0) return 'Trung bình'
  return 'Yếu'
}

module.exports = classifyGrade
```

Gợi ý: Kiểm tra từ điều kiện cao nhất xuống thấp dần.
