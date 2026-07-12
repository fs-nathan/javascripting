'use strict'

/**
 * Canonical definitions for the 50 function exercises.
 * Used by scripts/generate-fifty-exercises.js and for bulk verification.
 */

const exercises = [
  {
    stt: 1,
    key: 'CELSIUS TO FAHRENHEIT',
    slug: 'celsius-to-fahrenheit',
    title: 'Chuyển đổi nhiệt độ',
    topic: 'Biến & Toán tử',
    fn: 'celsiusToFahrenheit',
    intro: 'Biến dùng để lưu trữ giá trị dữ liệu. Các phép toán cơ bản (`+`, `-`, `*`, `/`) giúp xử lý và biến đổi dữ liệu.',
    req: [
      'Viết hàm `celsiusToFahrenheit(celsius)`.',
      '',
      '- Nhận vào một số đại diện cho độ C.',
      '- Tính và trả về giá trị độ F tương ứng.',
      '- Kết quả làm tròn đến 1 chữ số thập phân (dùng `.toFixed(1)` — trả về **chuỗi**).'
    ].join('\n'),
    hint: 'Công thức: `F = C * 1.8 + 32`. Dùng `.toFixed(1)`.',
    example: { input: '30', output: "'86.0'" },
    solution: `function celsiusToFahrenheit (celsius) {
  return (celsius * 1.8 + 32).toFixed(1)
}

module.exports = celsiusToFahrenheit
`,
    cases: [
      { input: [30], expected: '86.0' },
      { input: [0], expected: '32.0' },
      { input: [100], expected: '212.0' },
      { input: [-40], expected: '-40.0' }
    ]
  },
  {
    stt: 2,
    key: 'IS LEAP YEAR',
    slug: 'is-leap-year',
    title: 'Kiểm tra năm nhuận',
    topic: 'Câu lệnh điều kiện',
    fn: 'isLeapYear',
    intro: 'Câu lệnh if-else điều hướng chương trình chạy theo các nhánh logic dựa trên điều kiện đúng (true) hoặc sai (false).',
    req: [
      'Viết hàm `isLeapYear(year)`.',
      '',
      '- Nhận vào một năm dạng số nguyên dương.',
      '- Trả về `true` nếu là năm nhuận, ngược lại trả về `false`.',
      '- Năm nhuận chia hết cho 4, nhưng không chia hết cho 100 trừ khi chia hết cho 400.'
    ].join('\n'),
    hint: 'Dùng `%` kết hợp `&&`, `||`.',
    example: { input: '2024', output: 'true' },
    solution: `function isLeapYear (year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

module.exports = isLeapYear
`,
    cases: [
      { input: [2024], expected: true },
      { input: [1900], expected: false },
      { input: [2000], expected: true },
      { input: [2023], expected: false }
    ]
  },
  {
    stt: 3,
    key: 'SUM OF ODDS',
    slug: 'sum-of-odds',
    title: 'Tính tổng số lẻ',
    topic: 'Vòng lặp',
    fn: 'sumOfOdds',
    intro: 'Vòng lặp (for/while) lặp lại một khối lệnh nhiều lần.',
    req: [
      'Viết hàm `sumOfOdds(n)`.',
      '',
      '- Nhận vào một số nguyên dương `n`.',
      '- Tính và trả về tổng của toàn bộ các số lẻ từ 1 đến `n`.'
    ].join('\n'),
    hint: 'Nếu `i % 2 !== 0` thì cộng `i` vào tổng.',
    example: { input: '5', output: '9' },
    solution: `function sumOfOdds (n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) sum += i
  }
  return sum
}

module.exports = sumOfOdds
`,
    cases: [
      { input: [5], expected: 9 },
      { input: [1], expected: 1 },
      { input: [10], expected: 25 }
    ]
  },
  {
    stt: 4,
    key: 'CLASSIFY GRADE',
    slug: 'classify-grade',
    title: 'Xếp loại học lực',
    topic: 'Câu lệnh điều kiện',
    fn: 'classifyGrade',
    intro: 'Cấu trúc if - else if - else cho phép kiểm tra nhiều điều kiện logic liên tiếp.',
    req: [
      'Viết hàm `classifyGrade(score)`.',
      '',
      '- Nhận vào điểm số từ 0 đến 10.',
      "- Trả về: `'Giỏi'` nếu >= 8.5, `'Khá'` nếu >= 7.0 và < 8.5, `'Trung bình'` nếu >= 5.0 và < 7.0, `'Yếu'` nếu < 5.0."
    ].join('\n'),
    hint: 'Kiểm tra từ điều kiện cao nhất xuống thấp dần.',
    example: { input: '7.5', output: "'Khá'" },
    solution: `function classifyGrade (score) {
  if (score >= 8.5) return 'Giỏi'
  if (score >= 7.0) return 'Khá'
  if (score >= 5.0) return 'Trung bình'
  return 'Yếu'
}

module.exports = classifyGrade
`,
    cases: [
      { input: [7.5], expected: 'Khá' },
      { input: [9], expected: 'Giỏi' },
      { input: [5], expected: 'Trung bình' },
      { input: [4.9], expected: 'Yếu' }
    ]
  },
  {
    stt: 5,
    key: 'FIND MIN',
    slug: 'find-min',
    title: 'Tìm số nhỏ nhất',
    topic: 'Mảng (Array)',
    fn: 'findMin',
    intro: 'Mảng (Array) chứa danh sách phần tử. Việc duyệt qua mảng giúp so sánh và lọc phần tử đặc biệt.',
    req: [
      'Viết hàm `findMin(arr)`.',
      '',
      '- Nhận vào một mảng số nguyên.',
      '- Tìm và trả về giá trị nhỏ nhất trong mảng.',
      '- Không được sử dụng hàm `Math.min()`.'
    ].join('\n'),
    hint: 'Gán phần tử đầu làm min tạm, so sánh các phần tử còn lại.',
    example: { input: '[10, 5, 28, 2, 15]', output: '2' },
    solution: `function findMin (arr) {
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]
  }
  return min
}

module.exports = findMin
`,
    cases: [
      { input: [[10, 5, 28, 2, 15]], expected: 2 },
      { input: [[-3, -1, -7]], expected: -7 },
      { input: [[42]], expected: 42 }
    ]
  },
  {
    stt: 6,
    key: 'COUNT SPACES',
    slug: 'count-spaces',
    title: 'Đếm số ký tự khoảng trắng',
    topic: 'Chuỗi (String)',
    fn: 'countSpaces',
    intro: 'Chuỗi bản chất gần giống như một mảng ký tự.',
    req: [
      'Viết hàm `countSpaces(str)`.',
      '',
      '- Nhận vào một chuỗi bất kỳ.',
      "- Đếm và trả về số lượng khoảng trắng `' '` có trong chuỗi."
    ].join('\n'),
    hint: "Duyệt từng ký tự hoặc dùng `.split(' ')`.",
    example: { input: "'Học lập trình JS'", output: '3' },
    solution: `function countSpaces (str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') count++
  }
  return count
}

module.exports = countSpaces
`,
    cases: [
      { input: ['Học lập trình JS'], expected: 3 },
      { input: ['nospace'], expected: 0 },
      { input: ['a b c'], expected: 2 }
    ]
  },
  {
    stt: 7,
    key: 'CALCULATE AVERAGE',
    slug: 'calculate-average',
    title: 'Tính trung bình cộng',
    topic: 'Mảng (Array)',
    fn: 'calculateAverage',
    intro: 'Tính trung bình cộng dựa trên tổng các giá trị chia cho số phần tử.',
    req: [
      'Viết hàm `calculateAverage(arr)`.',
      '',
      '- Nhận vào một mảng chứa các số.',
      '- Trả về điểm trung bình cộng.',
      '- Nếu mảng rỗng, trả về `0`.'
    ].join('\n'),
    hint: 'Nếu `arr.length === 0` trả về 0.',
    example: { input: '[4, 6, 8, 10]', output: '7' },
    solution: `function calculateAverage (arr) {
  if (arr.length === 0) return 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) sum += arr[i]
  return sum / arr.length
}

module.exports = calculateAverage
`,
    cases: [
      { input: [[4, 6, 8, 10]], expected: 7 },
      { input: [[]], expected: 0 },
      { input: [[10]], expected: 10 }
    ]
  },
  {
    stt: 8,
    key: 'MULTIPLICATION TABLE',
    slug: 'multiplication-table',
    title: 'In bảng cửu chương n',
    topic: 'Vòng lặp',
    fn: 'multiplicationTable',
    intro: 'Vòng lặp có thể tạo định dạng văn bản lặp lại dựa trên tham số.',
    req: [
      'Viết hàm `multiplicationTable(n)`.',
      '',
      '- Nhận vào một số nguyên `n` (từ 1 đến 9).',
      '- Trả về một mảng chứa các chuỗi kết quả phép nhân từ 1 đến 10.'
    ].join('\n'),
    hint: 'Template: `` `${n} x ${i} = ${n * i}` ``.',
    example: { input: '5', output: "['5 x 1 = 5', ..., '5 x 10 = 50']" },
    solution: `function multiplicationTable (n) {
  const rows = []
  for (let i = 1; i <= 10; i++) {
    rows.push(n + ' x ' + i + ' = ' + (n * i))
  }
  return rows
}

module.exports = multiplicationTable
`,
    cases: [
      {
        input: [5],
        expected: [
          '5 x 1 = 5', '5 x 2 = 10', '5 x 3 = 15', '5 x 4 = 20', '5 x 5 = 25',
          '5 x 6 = 30', '5 x 7 = 35', '5 x 8 = 40', '5 x 9 = 45', '5 x 10 = 50'
        ]
      },
      {
        input: [2],
        expected: [
          '2 x 1 = 2', '2 x 2 = 4', '2 x 3 = 6', '2 x 4 = 8', '2 x 5 = 10',
          '2 x 6 = 12', '2 x 7 = 14', '2 x 8 = 16', '2 x 9 = 18', '2 x 10 = 20'
        ]
      }
    ]
  },
  {
    stt: 9,
    key: 'CHECK EXTENSION',
    slug: 'check-extension',
    title: 'Kiểm tra đuôi file',
    topic: 'Chuỗi (String)',
    fn: 'checkExtension',
    intro: 'Phương thức chuỗi giúp kiểm tra ký tự ở đầu hoặc cuối chuỗi.',
    req: [
      'Viết hàm `checkExtension(filename, ext)`.',
      '',
      '- Nhận vào chuỗi tên file và chuỗi phần mở rộng mong muốn.',
      '- Trả về `true` nếu file kết thúc bằng đuôi đó, `false` nếu ngược lại.'
    ].join('\n'),
    hint: 'Dùng `.endsWith()`.',
    example: { input: "'image.png', 'png'", output: 'true' },
    solution: `function checkExtension (filename, ext) {
  return filename.endsWith(ext)
}

module.exports = checkExtension
`,
    cases: [
      { input: ['image.png', 'png'], expected: true },
      { input: ['image.png', 'jpg'], expected: false },
      { input: ['a.tar.gz', '.gz'], expected: true }
    ]
  },
  {
    stt: 10,
    key: 'FACTORIAL',
    slug: 'factorial',
    title: 'Tính giai thừa',
    topic: 'Toán học',
    fn: 'factorial',
    intro: 'Giai thừa của n (n!) là tích các số nguyên dương từ 1 đến n. Quy ước 0! = 1.',
    req: [
      'Viết hàm `factorial(n)`.',
      '',
      '- Nhận vào số nguyên không âm `n`.',
      '- Trả về giá trị n giai thừa.'
    ].join('\n'),
    hint: 'Nếu n là 0 hoặc 1 trả về 1.',
    example: { input: '4', output: '24' },
    solution: `function factorial (n) {
  if (n === 0 || n === 1) return 1
  let result = 1
  for (let i = 2; i <= n; i++) result *= i
  return result
}

module.exports = factorial
`,
    cases: [
      { input: [4], expected: 24 },
      { input: [0], expected: 1 },
      { input: [1], expected: 1 },
      { input: [5], expected: 120 }
    ]
  }
]

module.exports = exercises
