'use strict'

module.exports = {
  functionName: 'classifyGrade',
  cases: [
    { input: [7.5], expected: 'Khá' },
    { input: [9], expected: 'Giỏi' },
    { input: [5], expected: 'Trung bình' },
    { input: [4.9], expected: 'Yếu' }
  ]
}
