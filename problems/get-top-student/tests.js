'use strict'

module.exports = {
  functionName: 'getTopStudent',
  cases: [
    { input: [[{ name: 'A', score: 8 }, { name: 'B', score: 9 }]], expected: 'B' },
    { input: [[{ name: 'An', score: 10 }, { name: 'Bình', score: 7 }]], expected: 'An' }
  ]
}
