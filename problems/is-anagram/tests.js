'use strict'

module.exports = {
  functionName: 'isAnagram',
  cases: [
    { input: ['silent', 'listen'], expected: true },
    { input: ['hello', 'world'], expected: false },
    { input: ['Dormitory', 'dirty room'], expected: true }
  ]
}
