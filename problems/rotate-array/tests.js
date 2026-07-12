'use strict'

module.exports = {
  functionName: 'rotateArray',
  cases: [
    { input: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
    { input: [[1, 2], 3], expected: [2, 1] },
    { input: [[], 1], expected: [] }
  ]
}
