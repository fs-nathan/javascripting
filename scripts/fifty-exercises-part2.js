'use strict'

module.exports = [
  {
    stt: 11,
    key: 'CAPITALIZE WORDS',
    slug: 'capitalize-words',
    title: 'Viết hoa chữ cái đầu',
    topic: 'Chuỗi (String)',
    fn: 'capitalizeWords',
    intro: 'Kết hợp cắt chuỗi, viết hoa chữ cái và nối chuỗi giúp định dạng lại văn bản.',
    req: 'Viết hàm `capitalizeWords(str)`.\n\n- Nhận vào một chuỗi văn bản nhiều từ.\n- Viết hoa chữ cái đầu tiên của mỗi từ, các chữ cái còn lại viết thường.',
    hint: "Dùng `.split(' ')`, `.toUpperCase()`, `.slice(1)`.",
    example: { input: "'học javascript rất vui'", output: "'Học Javascript Rất Vui'" },
    solution: `function capitalizeWords (str) {
  return str.split(' ').map(function (word) {
    if (!word) return word
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }).join(' ')
}

module.exports = capitalizeWords
`,
    cases: [
      { input: ['học javascript rất vui'], expected: 'Học Javascript Rất Vui' },
      { input: ['HELLO'], expected: 'Hello' }
    ]
  },
  {
    stt: 12,
    key: 'REMOVE DUPLICATES',
    slug: 'remove-duplicates',
    title: 'Loại bỏ phần tử trùng lặp',
    topic: 'Mảng (Array)',
    fn: 'removeDuplicates',
    intro: 'Sàng lọc và loại bỏ dữ liệu trùng lặp để dữ liệu đồng nhất.',
    req: 'Viết hàm `removeDuplicates(arr)`.\n\n- Nhận vào một mảng chứa số hoặc chuỗi.\n- Trả về mảng mới chứa các phần tử duy nhất theo thứ tự xuất hiện gốc.\n- Không sử dụng đối tượng `Set`.',
    hint: 'Dùng `.includes()` để kiểm tra trước khi thêm.',
    example: { input: '[1, 2, 2, 3, 1]', output: '[1, 2, 3]' },
    solution: `function removeDuplicates (arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) result.push(arr[i])
  }
  return result
}

module.exports = removeDuplicates
`,
    cases: [
      { input: [[1, 2, 2, 3, 1]], expected: [1, 2, 3] },
      { input: [['a', 'b', 'a']], expected: ['a', 'b'] }
    ]
  },
  {
    stt: 13,
    key: 'GET TOP STUDENT',
    slug: 'get-top-student',
    title: 'Tìm học sinh xuất sắc',
    topic: 'Đối tượng (Object)',
    fn: 'getTopStudent',
    intro: 'Đối tượng (Object) đại diện dữ liệu dạng key-value. Mảng đối tượng dùng rất phổ biến.',
    req: "Viết hàm `getTopStudent(students)`.\n\n- Nhận vào mảng object dạng `{ name: string, score: number }`.\n- Trả về thuộc tính `name` của học sinh có `score` cao nhất.",
    hint: 'Duyệt mảng, giữ object có `.score` cao nhất.',
    example: { input: "[{name: 'A', score: 8}, {name: 'B', score: 9}]", output: "'B'" },
    solution: `function getTopStudent (students) {
  let top = students[0]
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > top.score) top = students[i]
  }
  return top.name
}

module.exports = getTopStudent
`,
    cases: [
      {
        input: [[{ name: 'A', score: 8 }, { name: 'B', score: 9 }]],
        expected: 'B'
      },
      {
        input: [[{ name: 'An', score: 10 }, { name: 'Bình', score: 7 }]],
        expected: 'An'
      }
    ]
  },
  {
    stt: 14,
    key: 'REVERSE STRING',
    slug: 'reverse-string',
    title: 'Đảo ngược chuỗi',
    topic: 'Chuỗi (String)',
    fn: 'reverseString',
    intro: 'Xử lý đảo ngược chuỗi giúp tư duy về cấu trúc dữ liệu tuyến tính.',
    req: 'Viết hàm `reverseString(str)`.\n\n- Nhận vào một chuỗi ký tự.\n- Trả về chuỗi đó theo thứ tự đảo ngược hoàn toàn.',
    hint: "`.split('').reverse().join('')`.",
    example: { input: "'hello'", output: "'olleh'" },
    solution: `function reverseString (str) {
  return str.split('').reverse().join('')
}

module.exports = reverseString
`,
    cases: [
      { input: ['hello'], expected: 'olleh' },
      { input: [''], expected: '' },
      { input: ['a'], expected: 'a' }
    ]
  },
  {
    stt: 15,
    key: 'FIND SECOND LARGEST',
    slug: 'find-second-largest',
    title: 'Tìm số lớn thứ hai',
    topic: 'Mảng (Array)',
    fn: 'findSecondLargest',
    intro: 'Tìm phần tử lớn thứ n giúp rèn luyện quản lý trạng thái nhiều biến trong vòng lặp.',
    req: 'Viết hàm `findSecondLargest(arr)`.\n\n- Nhận vào mảng số nguyên có ít nhất 2 phần tử khác nhau.\n- Trả về số lớn thứ hai.\n- Không dùng `.sort()`.',
    hint: 'Dùng hai biến `max1` và `max2`.',
    example: { input: '[1, 5, 2, 7, 6]', output: '6' },
    solution: `function findSecondLargest (arr) {
  let max1 = -Infinity
  let max2 = -Infinity
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    if (n > max1) {
      max2 = max1
      max1 = n
    } else if (n < max1 && n > max2) {
      max2 = n
    }
  }
  return max2
}

module.exports = findSecondLargest
`,
    cases: [
      { input: [[1, 5, 2, 7, 6]], expected: 6 },
      { input: [[10, 10, 9]], expected: 9 }
    ]
  },
  {
    stt: 16,
    key: 'IS PRIME',
    slug: 'is-prime',
    title: 'Kiểm tra số nguyên tố',
    topic: 'Thuật toán',
    fn: 'isPrime',
    intro: 'Số nguyên tố lớn hơn 1 và chỉ chia hết cho 1 và chính nó.',
    req: 'Viết hàm `isPrime(n)`.\n\n- Nhận vào số nguyên `n`.\n- Trả về `true` nếu là số nguyên tố, ngược lại `false`.',
    hint: 'Nếu n < 2 trả false. Lặp tới `Math.sqrt(n)`.',
    example: { input: '11', output: 'true' },
    solution: `function isPrime (n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

module.exports = isPrime
`,
    cases: [
      { input: [11], expected: true },
      { input: [1], expected: false },
      { input: [2], expected: true },
      { input: [9], expected: false }
    ]
  },
  {
    stt: 17,
    key: 'IS PALINDROME',
    slug: 'is-palindrome',
    title: 'Kiểm tra Palindrome',
    topic: 'Chuỗi (String)',
    fn: 'isPalindrome',
    intro: 'Chuỗi Palindrome đọc xuôi hay ngược đều giống nhau.',
    req: "Viết hàm `isPalindrome(str)`.\n\n- Nhận vào một chuỗi.\n- Trả về `true` nếu đối xứng.\n- Bỏ qua viết hoa/thường và khoảng trắng.",
    hint: 'Chuẩn hóa rồi so với bản đảo ngược.',
    example: { input: "'Race car'", output: 'true' },
    solution: `function isPalindrome (str) {
  const normalized = str.toLowerCase().replace(/ /g, '')
  return normalized === normalized.split('').reverse().join('')
}

module.exports = isPalindrome
`,
    cases: [
      { input: ['Race car'], expected: true },
      { input: ['hello'], expected: false },
      { input: ['A'], expected: true }
    ]
  },
  {
    stt: 18,
    key: 'COUNT CHARS',
    slug: 'count-chars',
    title: 'Đếm số lần xuất hiện ký tự',
    topic: 'Đối tượng (Object)',
    fn: 'countChars',
    intro: 'Dùng object làm bảng băm để lưu tần suất xuất hiện.',
    req: "Viết hàm `countChars(str)`.\n\n- Nhận vào một chuỗi.\n- Trả về object đếm tần suất từng ký tự.",
    hint: 'Nếu key đã có thì tăng 1, chưa có thì gán 1.',
    example: { input: "'hello'", output: '{h:1, e:1, l:2, o:1}' },
    solution: `function countChars (str) {
  const result = {}
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    result[ch] = (result[ch] || 0) + 1
  }
  return result
}

module.exports = countChars
`,
    cases: [
      { input: ['hello'], expected: { h: 1, e: 1, l: 2, o: 1 } },
      { input: [''], expected: {} }
    ]
  },
  {
    stt: 19,
    key: 'MERGE SORTED ARRAYS',
    slug: 'merge-sorted-arrays',
    title: 'Gộp hai mảng tăng dần',
    topic: 'Mảng (Array)',
    fn: 'mergeSortedArrays',
    intro: 'Thao tác trên nhiều mảng cùng lúc với hai con trỏ.',
    req: 'Viết hàm `mergeSortedArrays(arr1, arr2)`.\n\n- Nhận 2 mảng đã sắp xếp tăng dần.\n- Trả về mảng mới đã sắp xếp tăng dần.\n- Không dùng `.sort()`.',
    hint: 'So sánh từng phần tử bằng hai con trỏ.',
    example: { input: '[1,3,5], [2,4,6]', output: '[1,2,3,4,5,6]' },
    solution: `function mergeSortedArrays (arr1, arr2) {
  const result = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) result.push(arr1[i++])
  while (j < arr2.length) result.push(arr2[j++])
  return result
}

module.exports = mergeSortedArrays
`,
    cases: [
      { input: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
      { input: [[], [1, 2]], expected: [1, 2] }
    ]
  },
  {
    stt: 20,
    key: 'FIND INTERSECTION',
    slug: 'find-intersection',
    title: 'Tìm phần tử chung của hai mảng',
    topic: 'Mảng (Array)',
    fn: 'findIntersection',
    intro: 'Tìm tập giao (intersection) giữa hai mảng.',
    req: 'Viết hàm `findIntersection(arr1, arr2)`.\n\n- Trả về mảng phần tử xuất hiện ở cả hai mảng.\n- Không trùng lặp trong kết quả.',
    hint: '`arr2.includes(item)` và chưa có trong kết quả.',
    example: { input: '[1,2,3], [2,3,4]', output: '[2,3]' },
    solution: `function findIntersection (arr1, arr2) {
  const result = []
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i]
    if (arr2.includes(item) && !result.includes(item)) result.push(item)
  }
  return result
}

module.exports = findIntersection
`,
    cases: [
      { input: [[1, 2, 3], [2, 3, 4]], expected: [2, 3] },
      { input: [[1, 1, 2], [1]], expected: [1] }
    ]
  }
]
