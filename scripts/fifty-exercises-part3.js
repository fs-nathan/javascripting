'use strict'

module.exports = [
  {
    stt: 21,
    key: 'FIND GCD',
    slug: 'find-gcd',
    title: 'Tìm ước số chung lớn nhất',
    topic: 'Toán học',
    fn: 'findGCD',
    intro: 'USCLN/GCD của hai số là số lớn nhất mà cả hai đều chia hết.',
    req: 'Viết hàm `findGCD(a, b)`.\n\n- Nhận 2 số nguyên dương.\n- Trả về ước số chung lớn nhất.',
    hint: 'Thuật toán Euclid: thay b bằng a % b cho đến khi b = 0.',
    example: { input: '12, 18', output: '6' },
    solution: `function findGCD (a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

module.exports = findGCD
`,
    cases: [
      { input: [12, 18], expected: 6 },
      { input: [7, 3], expected: 1 },
      { input: [100, 25], expected: 25 }
    ]
  },
  {
    stt: 22,
    key: 'CHUNK ARRAY',
    slug: 'chunk-array',
    title: 'Cắt mảng thành các phần nhỏ',
    topic: 'Mảng (Array)',
    fn: 'chunkArray',
    intro: 'Chunking thường dùng khi phân trang dữ liệu.',
    req: 'Viết hàm `chunkArray(arr, size)`.\n\n- Chia mảng thành các mảng con, mỗi mảng con dài tối đa `size`.',
    hint: '`arr.slice(i, i + size)` với bước nhảy `size`.',
    example: { input: '[1,2,3,4,5], 2', output: '[[1,2], [3,4], [5]]' },
    solution: `function chunkArray (arr, size) {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

module.exports = chunkArray
`,
    cases: [
      { input: [[1, 2, 3, 4, 5], 2], expected: [[1, 2], [3, 4], [5]] },
      { input: [[1, 2, 3], 5], expected: [[1, 2, 3]] }
    ]
  },
  {
    stt: 23,
    key: 'TRUNCATE STRING',
    slug: 'truncate-string',
    title: 'Cắt ngắn chuỗi văn bản',
    topic: 'Chuỗi (String)',
    fn: 'truncateString',
    intro: 'Truncate dùng để hiện bản xem trước, tránh vỡ giao diện.',
    req: "Viết hàm `truncateString(str, maxLength)`.\n\n- Nếu độ dài chuỗi lớn hơn `maxLength`, cắt còn `maxLength` ký tự và thêm `'...'`.\n- Nếu không vượt, trả về chuỗi gốc.",
    hint: 'Dùng `.slice(0, maxLength) + \'...\'`.',
    example: { input: "'Hello World', 5", output: "'Hello...'" },
    solution: `function truncateString (str, maxLength) {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength) + '...'
}

module.exports = truncateString
`,
    cases: [
      { input: ['Hello World', 5], expected: 'Hello...' },
      { input: ['Hi', 5], expected: 'Hi' }
    ]
  },
  {
    stt: 24,
    key: 'MOVE ZEROS',
    slug: 'move-zeros',
    title: 'Di chuyển số 0 về cuối mảng',
    topic: 'Mảng (Array)',
    fn: 'moveZeros',
    intro: 'Sắp xếp lại phần tử theo điều kiện mà vẫn giữ thứ tự tương đối của phần tử khác 0.',
    req: 'Viết hàm `moveZeros(arr)`.\n\n- Đưa tất cả số 0 về cuối mảng.\n- Giữ nguyên thứ tự các phần tử khác 0.',
    hint: 'Tạo mảng non-zero rồi nối thêm các số 0.',
    example: { input: '[0, 1, 0, 3, 12]', output: '[1, 3, 12, 0, 0]' },
    solution: `function moveZeros (arr) {
  const nonZero = []
  let zeros = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeros++
    else nonZero.push(arr[i])
  }
  for (let i = 0; i < zeros; i++) nonZero.push(0)
  return nonZero
}

module.exports = moveZeros
`,
    cases: [
      { input: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
      { input: [[1, 2, 3]], expected: [1, 2, 3] }
    ]
  },
  {
    stt: 25,
    key: 'IS SUBSET',
    slug: 'is-subset',
    title: 'Kiểm tra mảng con',
    topic: 'Mảng (Array)',
    fn: 'isSubset',
    intro: 'Kiểm tra tập con: mọi phần tử của mảng A có trong mảng B hay không.',
    req: 'Viết hàm `isSubset(subset, array)`.\n\n- Trả về `true` nếu mọi phần tử của `subset` đều có trong `array`.',
    hint: 'Dùng `.every` hoặc vòng lặp + `.includes`.',
    example: { input: '[1, 2], [1, 2, 3, 4]', output: 'true' },
    solution: `function isSubset (subset, array) {
  for (let i = 0; i < subset.length; i++) {
    if (!array.includes(subset[i])) return false
  }
  return true
}

module.exports = isSubset
`,
    cases: [
      { input: [[1, 2], [1, 2, 3, 4]], expected: true },
      { input: [[1, 5], [1, 2, 3]], expected: false }
    ]
  },
  {
    stt: 26,
    key: 'MERGE OBJECTS',
    slug: 'merge-objects',
    title: 'Gộp hai đối tượng cấu trúc',
    topic: 'Đối tượng (Object)',
    fn: 'mergeObjects',
    intro: 'Gộp object: key trùng thì lấy giá trị từ object sau.',
    req: 'Viết hàm `mergeObjects(obj1, obj2)`.\n\n- Trả về object mới gộp hai object.\n- Nếu trùng key, lấy giá trị từ `obj2`.',
    hint: '`Object.assign({}, obj1, obj2)` hoặc spread.',
    example: { input: "{a:1}, {b:2, a:3}", output: '{a:3, b:2}' },
    solution: `function mergeObjects (obj1, obj2) {
  return Object.assign({}, obj1, obj2)
}

module.exports = mergeObjects
`,
    cases: [
      { input: [{ a: 1 }, { b: 2, a: 3 }], expected: { a: 3, b: 2 } },
      { input: [{}, { x: 1 }], expected: { x: 1 } }
    ]
  },
  {
    stt: 27,
    key: 'FIBONACCI',
    slug: 'fibonacci',
    title: 'Tính số Fibonacci thứ n',
    topic: 'Toán học',
    fn: 'fibonacci',
    intro: 'Dãy Fibonacci: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).',
    req: 'Viết hàm `fibonacci(n)`.\n\n- Trả về số Fibonacci thứ `n` (n >= 0).',
    hint: 'Dùng vòng lặp với hai biến trước đó.',
    example: { input: '7', output: '13' },
    solution: `function fibonacci (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    const next = a + b
    a = b
    b = next
  }
  return b
}

module.exports = fibonacci
`,
    cases: [
      { input: [7], expected: 13 },
      { input: [0], expected: 0 },
      { input: [1], expected: 1 },
      { input: [10], expected: 55 }
    ]
  },
  {
    stt: 28,
    key: 'FIND LONGEST WORD',
    slug: 'find-longest-word',
    title: 'Tìm từ dài nhất',
    topic: 'Chuỗi (String)',
    fn: 'findLongestWord',
    intro: 'Tách chuỗi thành từ rồi tìm từ có độ dài lớn nhất.',
    req: "Viết hàm `findLongestWord(str)`.\n\n- Trả về từ dài nhất trong chuỗi (tách bởi khoảng trắng).\n- Nếu nhiều từ cùng độ dài, trả về từ đầu tiên.",
    hint: "`.split(' ')` rồi so sánh `.length`.",
    example: { input: "'The quick brown fox'", output: "'quick'" },
    solution: `function findLongestWord (str) {
  const words = str.split(' ')
  let longest = words[0] || ''
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i]
  }
  return longest
}

module.exports = findLongestWord
`,
    cases: [
      { input: ['The quick brown fox'], expected: 'quick' },
      { input: ['a bb ccc'], expected: 'ccc' }
    ]
  },
  {
    stt: 29,
    key: 'SWAP ELEMENTS',
    slug: 'swap-elements',
    title: 'Đảo vị trí hai phần tử',
    topic: 'Mảng (Array)',
    fn: 'swapElements',
    intro: 'Hoán đổi hai phần tử trong mảng theo chỉ số.',
    req: 'Viết hàm `swapElements(arr, i, j)`.\n\n- Trả về mảng mới (hoặc cùng mảng) sau khi đổi chỗ phần tử ở chỉ số `i` và `j`.',
    hint: 'Dùng biến tạm để hoán đổi.',
    example: { input: '[1, 2, 3, 4], 0, 3', output: '[4, 2, 3, 1]' },
    solution: `function swapElements (arr, i, j) {
  const result = arr.slice()
  const temp = result[i]
  result[i] = result[j]
  result[j] = temp
  return result
}

module.exports = swapElements
`,
    cases: [
      { input: [[1, 2, 3, 4], 0, 3], expected: [4, 2, 3, 1] },
      { input: [[1, 2], 0, 1], expected: [2, 1] }
    ]
  },
  {
    stt: 30,
    key: 'CUSTOM FILTER',
    slug: 'custom-filter',
    title: 'Lọc mảng theo điều kiện',
    topic: 'Mảng (Array)',
    fn: 'customFilter',
    intro: 'Tự implement filter: giữ phần tử thỏa callback.',
    req: 'Viết hàm `customFilter(arr, callback)`.\n\n- Trả về mảng mới gồm phần tử mà `callback(item)` trả về truthy.\n- Không dùng `.filter()`.',
    hint: 'Duyệt mảng, `push` khi callback đúng.',
    example: { input: '[1,2,3,4], n => n % 2 === 0', output: '[2,4]' },
    solution: `function customFilter (arr, callback) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) result.push(arr[i])
  }
  return result
}

module.exports = customFilter
`,
    cases: [
      {
        input: [[1, 2, 3, 4], function (n) { return n % 2 === 0 }],
        expected: [2, 4]
      },
      {
        input: [['a', 'bb', 'c'], function (s) { return s.length > 1 }],
        expected: ['bb']
      }
    ]
  }
]
