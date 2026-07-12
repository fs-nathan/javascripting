'use strict'

module.exports = {
  functionName: 'memoize',
  run: function (memoize) {
    let calls = 0
    function square (n) {
      calls++
      return n * n
    }
    const memoized = memoize(square)
    const a = memoized(4)
    const b = memoized(4)
    const c = memoized(5)
    const failures = []
    if (a !== 16 || b !== 16) {
      failures.push({ input: [4], expected: 16, actual: b, message: 'Kết quả memoize sai' })
    }
    if (c !== 25) {
      failures.push({ input: [5], expected: 25, actual: c })
    }
    if (calls !== 2) {
      failures.push({
        input: [],
        expected: 2,
        actual: calls,
        message: 'Hàm gốc chỉ được gọi lại khi tham số mới (kỳ vọng 2 lần)'
      })
    }
    return { pass: failures.length === 0, failures }
  }
}
