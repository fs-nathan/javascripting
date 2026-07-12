'use strict'

module.exports = [
  {
    stt: 31,
    key: 'TWO SUM',
    slug: 'two-sum',
    title: 'Tìm cặp số có tổng mục tiêu',
    topic: 'Thuật toán',
    fn: 'twoSum',
    intro: 'Tìm hai chỉ số trong mảng sao cho tổng hai phần tử bằng target.',
    req: 'Viết hàm `twoSum(nums, target)`.\n\n- Trả về mảng `[i, j]` (i < j) sao cho `nums[i] + nums[j] === target`.\n- Giả sử luôn có đúng một đáp án.',
    hint: 'Có thể dùng hash map hoặc hai vòng lặp.',
    example: { input: '[2, 7, 11, 15], 9', output: '[0, 1]' },
    solution: `function twoSum (nums, target) {
  const seen = {}
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i]
    if (seen[need] !== undefined) return [seen[need], i]
    seen[nums[i]] = i
  }
  return []
}

module.exports = twoSum
`,
    cases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] }
    ]
  },
  {
    stt: 32,
    key: 'FLATTEN ARRAY',
    slug: 'flatten-array',
    title: 'Làm phẳng mảng lồng nhau',
    topic: 'Đệ quy (Recursion)',
    fn: 'flattenArray',
    intro: 'Đệ quy giúp làm phẳng mảng lồng nhiều tầng.',
    req: 'Viết hàm `flattenArray(arr)`.\n\n- Trả về mảng một chiều.\n- Không dùng `.flat()`.',
    hint: 'Nếu phần tử là mảng thì gọi đệ quy rồi nối.',
    example: { input: '[1, [2, [3, 4]], 5]', output: '[1, 2, 3, 4, 5]' },
    solution: `function flattenArray (arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push.apply(result, flattenArray(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

module.exports = flattenArray
`,
    cases: [
      { input: [[1, [2, [3, 4]], 5]], expected: [1, 2, 3, 4, 5] },
      { input: [[1, 2]], expected: [1, 2] }
    ]
  },
  {
    stt: 33,
    key: 'IS ANAGRAM',
    slug: 'is-anagram',
    title: 'Kiểm tra chuỗi đảo ngữ (Anagram)',
    topic: 'Chuỗi (String)',
    fn: 'isAnagram',
    intro: 'Anagram là chuỗi tạo bằng cách sắp xếp lại ký tự của chuỗi khác.',
    req: "Viết hàm `isAnagram(str1, str2)`.\n\n- Không phân biệt hoa thường, bỏ qua khoảng trắng.",
    hint: 'Chuẩn hóa rồi `.sort()` từng mảng ký tự.',
    example: { input: "'silent', 'listen'", output: 'true' },
    solution: `function isAnagram (str1, str2) {
  function normalize (s) {
    return s.toLowerCase().replace(/ /g, '').split('').sort().join('')
  }
  return normalize(str1) === normalize(str2)
}

module.exports = isAnagram
`,
    cases: [
      { input: ['silent', 'listen'], expected: true },
      { input: ['hello', 'world'], expected: false },
      { input: ['Dormitory', 'dirty room'], expected: true }
    ]
  },
  {
    stt: 34,
    key: 'GET NESTED VALUE',
    slug: 'get-nested-value',
    title: 'Truy xuất giá trị lồng sâu',
    topic: 'Đối tượng (Object)',
    fn: 'getNestedValue',
    intro: 'Đọc an toàn giá trị object qua đường dẫn chuỗi.',
    req: "Viết hàm `getNestedValue(obj, path)`.\n\n- `path` dạng `'a.b.c'`.\n- Trả về giá trị, hoặc `undefined` nếu không tồn tại.",
    hint: "`.split('.')` rồi `reduce`/`for`.",
    example: { input: "{a: {b: {c: 42}}}, 'a.b.c'", output: '42' },
    solution: `function getNestedValue (obj, path) {
  const keys = path.split('.')
  let current = obj
  for (let i = 0; i < keys.length; i++) {
    if (current == null) return undefined
    current = current[keys[i]]
  }
  return current
}

module.exports = getNestedValue
`,
    cases: [
      { input: [{ a: { b: { c: 42 } } }, 'a.b.c'], expected: 42 },
      { input: [{ a: 1 }, 'a.b'], expected: undefined }
    ]
  },
  {
    stt: 35,
    key: 'CAESAR CIPHER',
    slug: 'caesar-cipher',
    title: 'Mã hóa Caesar Cipher',
    topic: 'Thuật toán',
    fn: 'caesarCipher',
    intro: 'Caesar dịch chuyển chữ cái trong bảng chữ cái.',
    req: "Viết hàm `caesarCipher(str, shift)`.\n\n- Chỉ dịch chữ cái tiếng Anh, giữ nguyên ký tự khác.\n- Giữ nguyên chữ hoa/thường.",
    hint: 'Dùng `charCodeAt` / `fromCharCode`, wrap quanh alphabet.',
    example: { input: "'Abc', 2", output: "'Cde'" },
    solution: `function caesarCipher (str, shift) {
  shift = ((shift % 26) + 26) % 26
  return str.split('').map(function (ch) {
    const code = ch.charCodeAt(0)
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65)
    }
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97)
    }
    return ch
  }).join('')
}

module.exports = caesarCipher
`,
    cases: [
      { input: ['Abc', 2], expected: 'Cde' },
      { input: ['xyz', 3], expected: 'abc' },
      { input: ['Hi!', 1], expected: 'Ij!' }
    ]
  },
  {
    stt: 36,
    key: 'MAX SUB ARRAY',
    slug: 'max-sub-array',
    title: 'Tìm mảng con có tổng lớn nhất',
    topic: 'Mảng (Array)',
    fn: 'maxSubArray',
    intro: 'Thuật toán Kadane tìm đoạn liên tiếp có tổng lớn nhất.',
    req: 'Viết hàm `maxSubArray(nums)`.\n\n- Trả về tổng lớn nhất của mảng con liên tiếp (ít nhất 1 phần tử).',
    hint: 'Nếu tổng tích lũy âm thì reset; luôn cập nhật max.',
    example: { input: '[-2, 1, -3, 4, -1, 2, 1]', output: '6' },
    solution: `function maxSubArray (nums) {
  let best = nums[0]
  let current = nums[0]
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i])
    best = Math.max(best, current)
  }
  return best
}

module.exports = maxSubArray
`,
    cases: [
      { input: [[-2, 1, -3, 4, -1, 2, 1]], expected: 6 },
      { input: [[1]], expected: 1 },
      { input: [[-1, -2]], expected: -1 }
    ]
  },
  {
    stt: 37,
    key: 'RUN LENGTH ENCODING',
    slug: 'run-length-encoding',
    title: 'Mã hóa độ dài loạt đơn (Run-length)',
    topic: 'Thuật toán',
    fn: 'runLengthEncoding',
    intro: 'Nén bằng cách thay chuỗi ký tự lặp bằng ký tự + số đếm.',
    req: "Viết hàm `runLengthEncoding(str)`.\n\n- Ví dụ: `'AABBBCCCC'` → `'A2B3C4'`.",
    hint: 'Đếm ký tự giống nhau liên tiếp rồi nối.',
    example: { input: "'AABBBCCCC'", output: "'A2B3C4'" },
    solution: `function runLengthEncoding (str) {
  if (!str) return ''
  let result = ''
  let count = 1
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++
    } else {
      result += str[i - 1] + String(count)
      count = 1
    }
  }
  return result
}

module.exports = runLengthEncoding
`,
    cases: [
      { input: ['AABBBCCCC'], expected: 'A2B3C4' },
      { input: ['A'], expected: 'A1' }
    ]
  },
  {
    stt: 38,
    key: 'FIND MISSING NUMBER',
    slug: 'find-missing-number',
    title: 'Tìm số còn thiếu trong dãy số',
    topic: 'Mảng (Array)',
    fn: 'findMissingNumber',
    intro: 'Dùng công thức tổng cấp số cộng để tìm số thiếu.',
    req: 'Viết hàm `findMissingNumber(arr, n)`.\n\n- Mảng chứa số từ 1 đến n thiếu đúng 1 số (độ dài = n - 1).\n- Trả về số còn thiếu.',
    hint: '`S = n * (n + 1) / 2` trừ tổng thực tế.',
    example: { input: '[1, 2, 4, 5], 5', output: '3' },
    solution: `function findMissingNumber (arr, n) {
  const expected = n * (n + 1) / 2
  let sum = 0
  for (let i = 0; i < arr.length; i++) sum += arr[i]
  return expected - sum
}

module.exports = findMissingNumber
`,
    cases: [
      { input: [[1, 2, 4, 5], 5], expected: 3 },
      { input: [[2, 3, 4], 4], expected: 1 }
    ]
  },
  {
    stt: 39,
    key: 'IS VALID PARENTHESES',
    slug: 'is-valid-parentheses',
    title: 'Kiểm tra chuỗi ngoặc hợp lệ',
    topic: 'Chuỗi (String)',
    fn: 'isValidParentheses',
    intro: 'Dùng Stack để đối sánh cặp ngoặc.',
    req: "Viết hàm `isValidParentheses(str)`.\n\n- Chuỗi chỉ gồm `'()'`, `'[]'`, `'{}'`.\n- Trả về `true` nếu mở/đóng đúng thứ tự.",
    hint: 'Push ngoặc mở; gặp đóng thì pop và khớp cặp.',
    example: { input: "'{([])}'", output: 'true' },
    solution: `function isValidParentheses (str) {
  const stack = []
  const pairs = { ')': '(', ']': '[', '}': '{' }
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch)
    } else {
      if (stack.pop() !== pairs[ch]) return false
    }
  }
  return stack.length === 0
}

module.exports = isValidParentheses
`,
    cases: [
      { input: ['{([])}'], expected: true },
      { input: ['([)]'], expected: false },
      { input: ['('], expected: false }
    ]
  },
  {
    stt: 40,
    key: 'BUBBLE SORT',
    slug: 'bubble-sort',
    title: 'Sắp xếp nổi bọt (Bubble Sort)',
    topic: 'Thuật toán',
    fn: 'bubbleSort',
    intro: 'Bubble sort hoán đổi phần tử liền kề sai thứ tự.',
    req: 'Viết hàm `bubbleSort(arr)`.\n\n- Sắp xếp tăng dần bằng bubble sort.\n- Trả về mảng đã sắp xếp.',
    hint: 'Hai vòng lặp lồng nhau, swap nếu `arr[j] > arr[j+1]`.',
    example: { input: '[5, 3, 8, 4, 2]', output: '[2, 3, 4, 5, 8]' },
    solution: `function bubbleSort (arr) {
  const a = arr.slice()
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        const temp = a[j]
        a[j] = a[j + 1]
        a[j + 1] = temp
      }
    }
  }
  return a
}

module.exports = bubbleSort
`,
    cases: [
      { input: [[5, 3, 8, 4, 2]], expected: [2, 3, 4, 5, 8] },
      { input: [[1]], expected: [1] },
      { input: [[]], expected: [] }
    ]
  }
]
