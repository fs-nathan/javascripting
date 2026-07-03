Phạm vi (Scope) là tập các biến, đối tượng và hàm mà bạn có thể truy cập.

JavaScript có hai phạm vi: `global` (toàn cục) và `local` (cục bộ). Biến khai báo ngoài hàm là biến **toàn cục (global variable)** — giá trị truy cập và sửa được trong toàn chương trình. Biến khai báo trong hàm là **cục bộ (local)** — tạo và hủy mỗi lần hàm chạy, không truy cập được từ bên ngoài.

Hàm định nghĩa bên trong hàm khác (hàm lồng nhau — nested functions) truy cập được phạm vi của hàm cha.

Chú ý comment trong code dưới đây:

```js
const a = 4 // a is a global variable, it can be accessed by the functions below

function foo () {
  const b = a * 3 // b cannot be accessed outside foo function, but can be accessed by functions
  // defined inside foo
  function bar (c) {
    const b = 2 // another `b` variable is created inside bar function scope
    // the changes to this new `b` variable don't affect the old `b` variable
    console.log(a, b, c)
  }

  bar(b * 4)
}

foo() // 4, 2, 48
```


IIFE (Immediately Invoked Function Expression) là pattern phổ biến để tạo phạm vi cục bộ.

Ví dụ:
```js
(function () { // the function expression is surrounded by parentheses
  // variables defined here
  // can't be accessed outside
})() // the function is immediately invoked
```
## Bài tập:

Tạo file tên `scope.js`.

Trong file đó copy code sau:
```js
const a = 1; const b = 2; const c = 3;

(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 8;
      })()
    })()
  })()
})()
```

Dựa vào **phạm vi (Scope)** của biến, đặt đoạn code sau vào một trong các hàm trong `scope.js`
để output là `a: 1, b: 8, c: 6`
```js
console.log(`a: ${a}, b: ${b}, c: ${c}`);
```

Kiểm tra chương trình bằng lệnh:

```bash
javascripting verify scope.js
```
