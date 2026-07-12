'use strict'

module.exports = {
  functionName: 'truncateString',
  cases: [
    { input: ['Hello World', 5], expected: 'Hello...' },
    { input: ['Hi', 5], expected: 'Hi' }
  ]
}
