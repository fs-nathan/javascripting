# Lời giải — Kiểm tra năm nhuận

```js
function isLeapYear (year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

module.exports = isLeapYear
```

Gợi ý: Dùng `%` kết hợp `&&`, `||`.
