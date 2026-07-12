'use strict'

module.exports = {
  functionName: 'mergeObjects',
  cases: [
    { input: [{ a: 1 }, { b: 2, a: 3 }], expected: { a: 3, b: 2 } },
    { input: [{}, { x: 1 }], expected: { x: 1 } }
  ]
}
