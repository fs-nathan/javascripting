# Lời giải — Chuyển đổi nhiệt độ

```js
function celsiusToFahrenheit (celsius) {
  return (celsius * 1.8 + 32).toFixed(1)
}

module.exports = celsiusToFahrenheit
```

Gợi ý: Công thức: `F = C * 1.8 + 32`. Dùng `.toFixed(1)`.
