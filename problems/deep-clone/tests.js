'use strict'

module.exports = {
  functionName: 'deepClone',
  run: function (deepClone) {
    const original = { x: 1, y: { z: 2 }, arr: [1, { a: 3 }] }
    const cloned = deepClone(original)
    const failures = []

    if (cloned === original || cloned.y === original.y || cloned.arr === original.arr) {
      failures.push({
        input: [],
        expected: 'tham chiếu khác',
        actual: 'cùng tham chiếu',
        message: 'Deep clone phải tạo object/mảng mới'
      })
    }

    cloned.y.z = 99
    if (original.y.z === 99) {
      failures.push({
        input: [],
        expected: 2,
        actual: original.y.z,
        message: 'Sửa clone không được ảnh hưởng object gốc'
      })
    }

    if (cloned.x !== 1 || cloned.arr[1].a !== 3) {
      failures.push({
        input: [],
        expected: original,
        actual: cloned,
        message: 'Giá trị clone phải khớp bản gốc'
      })
    }

    return { pass: failures.length === 0, failures }
  }
}
