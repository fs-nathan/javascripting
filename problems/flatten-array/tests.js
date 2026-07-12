'use strict'

module.exports = {
  functionName: 'flattenArray',
  cases: [
    { input: [[1, [2, [3, 4]], 5]], expected: [1, 2, 3, 4, 5] },
    { input: [[1, 2]], expected: [1, 2] }
  ]
}
