'use strict'

module.exports = {
  functionName: 'celsiusToFahrenheit',
  cases: [
    { input: [30], expected: '86.0' },
    { input: [0], expected: '32.0' },
    { input: [100], expected: '212.0' },
    { input: [-40], expected: '-40.0' }
  ]
}
