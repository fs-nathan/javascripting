'use strict'

module.exports = {
  functionName: 'throttle',
  run: function (throttle) {
    return new Promise(function (resolve) {
      let calls = 0
      const t = throttle(function () {
        calls++
      }, 80)

      t()
      t()
      t()

      setTimeout(function () {
        t()
        const failures = []
        if (calls !== 2) {
          failures.push({
            input: [],
            expected: 2,
            actual: calls,
            message: 'Throttle: 1 lần ngay + 1 lần sau khi hết limit'
          })
        }
        resolve({ pass: failures.length === 0, failures })
      }, 100)
    })
  }
}
