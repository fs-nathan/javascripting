'use strict'

module.exports = {
  functionName: 'chunkArray',
  cases: [
    { input: [[1, 2, 3, 4, 5], 2], expected: [[1, 2], [3, 4], [5]] },
    { input: [[1, 2, 3], 5], expected: [[1, 2, 3]] }
  ]
}
