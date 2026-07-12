'use strict'

module.exports = {
  functionName: 'customFilter',
  cases: [
    { input: [[1, 2, 3, 4], function (n) { return n % 2 === 0 }], expected: [2, 4] },
    { input: [['a', 'bb', 'c'], function (s) { return s.length > 1 }], expected: ['bb'] }
  ]
}
