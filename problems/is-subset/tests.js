'use strict'

module.exports = {
  functionName: 'isSubset',
  cases: [
    { input: [[1, 2], [1, 2, 3, 4]], expected: true },
    { input: [[1, 5], [1, 2, 3]], expected: false }
  ]
}
