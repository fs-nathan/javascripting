'use strict'

module.exports = {
  functionName: 'curry',
  run: function (curry) {
    function sum (a, b, c) {
      return a + b + c
    }
    const curried = curry(sum)
    const failures = []
    const r1 = curried(1)(2)(3)
    const r2 = curried(1, 2)(3)
    const r3 = curried(1)(2, 3)
    if (r1 !== 6) failures.push({ input: [1, 2, 3], expected: 6, actual: r1, message: '(1)(2)(3)' })
    if (r2 !== 6) failures.push({ input: [1, 2, 3], expected: 6, actual: r2, message: '(1, 2)(3)' })
    if (r3 !== 6) failures.push({ input: [1, 2, 3], expected: 6, actual: r3, message: '(1)(2, 3)' })
    return { pass: failures.length === 0, failures }
  }
}
