'use strict'

module.exports = {
  functionName: 'deepEqual',
  cases: [
    { input: [{ a: [1, 2] }, { a: [1, 2] }], expected: true },
    { input: [{ a: 1 }, { a: 2 }], expected: false },
    { input: [null, null], expected: true },
    { input: [[1, { x: 2 }], [1, { x: 2 }]], expected: true }
  ]
}
