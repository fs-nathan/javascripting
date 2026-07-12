'use strict'

module.exports = {
  functionName: 'checkExtension',
  cases: [
    { input: ['image.png', 'png'], expected: true },
    { input: ['image.png', 'jpg'], expected: false },
    { input: ['a.tar.gz', '.gz'], expected: true }
  ]
}
