# Lời giải — In bảng cửu chương n

```js
function multiplicationTable (n) {
  const rows = []
  for (let i = 1; i <= 10; i++) {
    rows.push(n + ' x ' + i + ' = ' + (n * i))
  }
  return rows
}

module.exports = multiplicationTable
```

Gợi ý: Template: `` `${n} x ${i} = ${n * i}` ``.
