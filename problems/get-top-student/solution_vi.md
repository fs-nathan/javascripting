# Lời giải — Tìm học sinh xuất sắc

```js
function getTopStudent (students) {
  let top = students[0]
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > top.score) top = students[i]
  }
  return top.name
}

module.exports = getTopStudent
```

Gợi ý: Duyệt mảng, giữ object có `.score` cao nhất.
