'use strict'

module.exports = {
  functionName: 'getNestedValue',
  cases: [
    { input: [{ a: { b: { c: 42 } } }, 'a.b.c'], expected: 42 },
    { input: [{ a: 1 }, 'a.b'], expected: undefined }
  ]
}
