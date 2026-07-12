'use strict'

module.exports = {
  functionName: 'runLengthEncoding',
  cases: [
    { input: ['AABBBCCCC'], expected: 'A2B3C4' },
    { input: ['A'], expected: 'A1' }
  ]
}
