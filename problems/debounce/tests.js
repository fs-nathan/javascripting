'use strict'

module.exports = {
  functionName: 'debounce',
  run: function (debounce) {
    return new Promise(function (resolve) {
      let calls = 0
      let lastArg
      const d = debounce(function (x) {
        calls++
        lastArg = x
      }, 40)

      d(1)
      d(2)
      d(3)

      setTimeout(function () {
        const failures = []
        if (calls !== 1) {
          failures.push({
            input: [],
            expected: 1,
            actual: calls,
            message: 'Debounce chỉ được gọi fn một lần sau khi ngừng gọi'
          })
        }
        if (lastArg !== 3) {
          failures.push({
            input: [3],
            expected: 3,
            actual: lastArg,
            message: 'Phải dùng tham số của lần gọi cuối'
          })
        }
        resolve({ pass: failures.length === 0, failures })
      }, 120)
    })
  }
}
