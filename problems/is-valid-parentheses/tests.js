'use strict'

module.exports = {
  functionName: 'isValidParentheses',
  cases: [
    { input: ['{([])}'], expected: true },
    { input: ['([)]'], expected: false },
    { input: ['('], expected: false }
  ]
}
