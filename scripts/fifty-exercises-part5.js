'use strict'

module.exports = [
  {
    stt: 41,
    key: 'MEMOIZE',
    slug: 'memoize',
    title: 'Hàm ghi nhớ (Memoize Function)',
    topic: 'Hàm nâng cao',
    fn: 'memoize',
    intro: 'Cache kết quả hàm theo tham số đầu vào để tăng tốc khi gọi lại.',
    req: 'Viết hàm `memoize(fn)`.\n\n- Trả về hàm mới giống `fn` nhưng cache kết quả.\n- Gọi lại cùng tham số → lấy từ cache, không gọi lại `fn`.',
    hint: 'Closure giữ object cache; stringify tham số làm key.',
    example: { input: 'hàm bình phương', output: 'hàm có ghi nhớ' },
    solution: `function memoize (fn) {
  const cache = {}
  return function () {
    const key = JSON.stringify(Array.prototype.slice.call(arguments))
    if (Object.prototype.hasOwnProperty.call(cache, key)) {
      return cache[key]
    }
    const result = fn.apply(this, arguments)
    cache[key] = result
    return result
  }
}

module.exports = memoize
`,
    testsSource: `'use strict'

module.exports = {
  functionName: 'memoize',
  run: function (memoize) {
    let calls = 0
    function square (n) {
      calls++
      return n * n
    }
    const memoized = memoize(square)
    const a = memoized(4)
    const b = memoized(4)
    const c = memoized(5)
    const failures = []
    if (a !== 16 || b !== 16) {
      failures.push({ input: [4], expected: 16, actual: b, message: 'Kết quả memoize sai' })
    }
    if (c !== 25) {
      failures.push({ input: [5], expected: 25, actual: c })
    }
    if (calls !== 2) {
      failures.push({
        input: [],
        expected: 2,
        actual: calls,
        message: 'Hàm gốc chỉ được gọi lại khi tham số mới (kỳ vọng 2 lần)'
      })
    }
    return { pass: failures.length === 0, failures }
  }
}
`
  },
  {
    stt: 42,
    key: 'ROTATE ARRAY',
    slug: 'rotate-array',
    title: 'Xoay mảng vòng tròn k bước',
    topic: 'Mảng (Array)',
    fn: 'rotateArray',
    intro: 'Dịch phần tử sang phải k bước, phần tử cuối quay về đầu.',
    req: 'Viết hàm `rotateArray(arr, k)`.\n\n- Xoay phải `k` lần.\n- Nếu `k` lớn hơn độ dài mảng, dùng `k % length`.',
    hint: 'Dùng `slice` và nối hai phần.',
    example: { input: '[1, 2, 3, 4, 5], 2', output: '[4, 5, 1, 2, 3]' },
    solution: `function rotateArray (arr, k) {
  if (arr.length === 0) return []
  k = k % arr.length
  if (k === 0) return arr.slice()
  return arr.slice(-k).concat(arr.slice(0, arr.length - k))
}

module.exports = rotateArray
`,
    cases: [
      { input: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
      { input: [[1, 2], 3], expected: [2, 1] },
      { input: [[], 1], expected: [] }
    ]
  },
  {
    stt: 43,
    key: 'LONGEST SUBSTRING',
    slug: 'longest-substring',
    title: 'Tìm chuỗi con không lặp dài nhất',
    topic: 'Chuỗi (String)',
    fn: 'lengthOfLongestSubstring',
    intro: 'Sliding window tìm chuỗi con liên tiếp không trùng ký tự dài nhất.',
    req: 'Viết hàm `lengthOfLongestSubstring(s)`.\n\n- Trả về độ dài chuỗi con liên tiếp dài nhất không có ký tự trùng.',
    hint: 'Dùng Set/Map theo dõi cửa sổ hiện tại.',
    example: { input: "'abcabcbb'", output: '3' },
    solution: `function lengthOfLongestSubstring (s) {
  const seen = {}
  let left = 0
  let best = 0
  for (let right = 0; right < s.length; right++) {
    const ch = s[right]
    if (seen[ch] !== undefined && seen[ch] >= left) {
      left = seen[ch] + 1
    }
    seen[ch] = right
    best = Math.max(best, right - left + 1)
  }
  return best
}

module.exports = lengthOfLongestSubstring
`,
    cases: [
      { input: ['abcabcbb'], expected: 3 },
      { input: ['bbbbb'], expected: 1 },
      { input: ['pwwkew'], expected: 3 },
      { input: [''], expected: 0 }
    ]
  },
  {
    stt: 44,
    key: 'DEEP EQUAL',
    slug: 'deep-equal',
    title: 'So sánh bằng sâu (Deep Equal)',
    topic: 'Đối tượng (Object)',
    fn: 'deepEqual',
    intro: '`===` chỉ so sánh tham chiếu với object. Deep equal so sánh cấu trúc và giá trị.',
    req: 'Viết hàm `deepEqual(obj1, obj2)`.\n\n- Trả về `true` nếu bằng nhau về cấu trúc và giá trị sâu bên trong.',
    hint: 'Đệ quy so sánh từng thuộc tính.',
    example: { input: '{a: [1,2]}, {a: [1,2]}', output: 'true' },
    solution: `function deepEqual (a, b) {
  if (a === b) return true
  if (typeof a !== typeof b) return false
  if (a == null || b == null) return a === b
  if (typeof a !== 'object') return false
  if (Array.isArray(a) !== Array.isArray(b)) return false
  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  if (keysA.length !== keysB.length) return false
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i]
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false
    if (!deepEqual(a[key], b[key])) return false
  }
  return true
}

module.exports = deepEqual
`,
    cases: [
      { input: [{ a: [1, 2] }, { a: [1, 2] }], expected: true },
      { input: [{ a: 1 }, { a: 2 }], expected: false },
      { input: [null, null], expected: true },
      { input: [[1, { x: 2 }], [1, { x: 2 }]], expected: true }
    ]
  },
  {
    stt: 45,
    key: 'QUICK SORT',
    slug: 'quick-sort',
    title: 'Sắp xếp nhanh (Quick Sort)',
    topic: 'Thuật toán',
    fn: 'quickSort',
    intro: 'Divide and Conquer: chọn pivot, chia mảng left/right, đệ quy.',
    req: 'Viết hàm `quickSort(arr)`.\n\n- Trả về mảng mới đã sắp xếp tăng dần bằng Quick Sort.',
    hint: 'Chọn pivot giữa; left < pivot, right > pivot.',
    example: { input: '[6, 2, 9, 1, 5]', output: '[1, 2, 5, 6, 9]' },
    solution: `function quickSort (arr) {
  if (arr.length <= 1) return arr.slice()
  const pivot = arr[Math.floor(arr.length / 2)]
  const left = []
  const mid = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    else if (arr[i] > pivot) right.push(arr[i])
    else mid.push(arr[i])
  }
  return quickSort(left).concat(mid, quickSort(right))
}

module.exports = quickSort
`,
    cases: [
      { input: [[6, 2, 9, 1, 5]], expected: [1, 2, 5, 6, 9] },
      { input: [[3, 3, 1]], expected: [1, 3, 3] },
      { input: [[]], expected: [] }
    ]
  },
  {
    stt: 46,
    key: 'DEBOUNCE',
    slug: 'debounce',
    title: 'Hàm gom cụm gọi (Debounce)',
    topic: 'Hàm nâng cao',
    fn: 'debounce',
    intro: 'Debounce trì hoãn thực thi cho đến khi ngừng gọi trong khoảng `delay`.',
    req: 'Viết hàm `debounce(fn, delay)`.\n\n- Trả về hàm mới: mỗi lần gọi sẽ reset timer; chỉ chạy `fn` sau khi im lặng đủ `delay` ms.',
    hint: '`clearTimeout` + `setTimeout` trong closure.',
    example: { input: 'fn tìm kiếm, 300', output: 'hàm debounce' },
    solution: `function debounce (fn, delay) {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

module.exports = debounce
`,
    testsSource: `'use strict'

module.exports = {
  functionName: 'debounce',
  run: function (debounce) {
    return new Promise(function (resolve) {
      let calls = 0
      let lastArg
      const d = debounce(function (x) {
        calls++
        lastArg = x
      }, 40)

      d(1)
      d(2)
      d(3)

      setTimeout(function () {
        const failures = []
        if (calls !== 1) {
          failures.push({
            input: [],
            expected: 1,
            actual: calls,
            message: 'Debounce chỉ được gọi fn một lần sau khi ngừng gọi'
          })
        }
        if (lastArg !== 3) {
          failures.push({
            input: [3],
            expected: 3,
            actual: lastArg,
            message: 'Phải dùng tham số của lần gọi cuối'
          })
        }
        resolve({ pass: failures.length === 0, failures })
      }, 120)
    })
  }
}
`
  },
  {
    stt: 47,
    key: 'THROTTLE',
    slug: 'throttle',
    title: 'Hàm tiết lưu gọi (Throttle)',
    topic: 'Hàm nâng cao',
    fn: 'throttle',
    intro: 'Throttle giới hạn: trong mỗi khoảng `limit` ms chỉ chạy tối đa một lần.',
    req: 'Viết hàm `throttle(fn, limit)`.\n\n- Trả về hàm mới chỉ cho phép kích hoạt `fn` tối đa một lần mỗi chu kỳ `limit` ms.',
    hint: 'Dùng cờ / timestamp lần chạy cuối.',
    example: { input: 'fn resize, 500', output: 'hàm throttle' },
    solution: `function throttle (fn, limit) {
  let last = 0
  return function () {
    const now = Date.now()
    if (now - last >= limit) {
      last = now
      return fn.apply(this, arguments)
    }
  }
}

module.exports = throttle
`,
    testsSource: `'use strict'

module.exports = {
  functionName: 'throttle',
  run: function (throttle) {
    return new Promise(function (resolve) {
      let calls = 0
      const t = throttle(function () {
        calls++
      }, 80)

      t()
      t()
      t()

      setTimeout(function () {
        t()
        const failures = []
        if (calls !== 2) {
          failures.push({
            input: [],
            expected: 2,
            actual: calls,
            message: 'Throttle: 1 lần ngay + 1 lần sau khi hết limit'
          })
        }
        resolve({ pass: failures.length === 0, failures })
      }, 100)
    })
  }
}
`
  },
  {
    stt: 48,
    key: 'DEEP CLONE',
    slug: 'deep-clone',
    title: 'Sao chép sâu (Deep Clone)',
    topic: 'Đệ quy (Recursion)',
    fn: 'deepClone',
    intro: 'Gán object thường chỉ copy tham chiếu. Deep clone tạo bản sao độc lập.',
    req: 'Viết hàm `deepClone(obj)`.\n\n- Sao chép sâu object/mảng lồng nhau.\n- Không dùng `JSON.parse(JSON.stringify(obj))`.',
    hint: 'Đệ quy: tạo object/mảng mới, clone từng thuộc tính.',
    example: { input: '{x: 1, y: {z: 2}}', output: 'object mới độc lập' },
    solution: `function deepClone (obj) {
  if (obj === null || typeof obj !== 'object') return obj
  if (Array.isArray(obj)) {
    return obj.map(function (item) { return deepClone(item) })
  }
  const copy = {}
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    copy[keys[i]] = deepClone(obj[keys[i]])
  }
  return copy
}

module.exports = deepClone
`,
    testsSource: `'use strict'

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
`
  },
  {
    stt: 49,
    key: 'ROMAN TO INT',
    slug: 'roman-to-int',
    title: 'Chuyển số La Mã thành số nguyên',
    topic: 'Thuật toán',
    fn: 'romanToInt',
    intro: 'Số La Mã: I,V,X,L,C,D,M. Trừ khi số nhỏ đứng trước số lớn.',
    req: "Viết hàm `romanToInt(s)`.\n\n- Nhận chuỗi La Mã hợp lệ, trả về số nguyên.",
    hint: 'Nếu ký tự hiện tại < ký tự sau thì trừ, không thì cộng.',
    example: { input: "'MCMXCIV'", output: '1994' },
    solution: `function romanToInt (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let total = 0
  for (let i = 0; i < s.length; i++) {
    const value = map[s[i]]
    const next = map[s[i + 1]]
    if (next && value < next) total -= value
    else total += value
  }
  return total
}

module.exports = romanToInt
`,
    cases: [
      { input: ['MCMXCIV'], expected: 1994 },
      { input: ['III'], expected: 3 },
      { input: ['LVIII'], expected: 58 }
    ]
  },
  {
    stt: 50,
    key: 'CURRY',
    slug: 'curry',
    title: 'Chuyển đổi chuỗi hàm (Currying)',
    topic: 'Hàm nâng cao',
    fn: 'curry',
    intro: 'Currying biến hàm nhiều tham số thành chuỗi hàm mỗi lần nhận một (hoặc vài) tham số.',
    req: 'Viết hàm `curry(fn)`.\n\n- Trả về hàm curried: tích lũy tham số đến khi đủ `fn.length` rồi mới gọi `fn`.\n- Ví dụ: `curry((a,b,c) => a+b+c)(1)(2)(3) === 6`.',
    hint: 'Dùng `fn.length` và đệ quy tích lũy args.',
    example: { input: 'sum(a,b,c)', output: 'curriedSum(1)(2)(3) === 6' },
    solution: `function curry (fn) {
  return function curried () {
    const args = Array.prototype.slice.call(arguments)
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }
    return function () {
      return curried.apply(this, args.concat(Array.prototype.slice.call(arguments)))
    }
  }
}

module.exports = curry
`,
    testsSource: `'use strict'

module.exports = {
  functionName: 'curry',
  run: function (curry) {
    function sum (a, b, c) {
      return a + b + c
    }
    const curried = curry(sum)
    const failures = []
    const r1 = curried(1)(2)(3)
    const r2 = curried(1, 2)(3)
    const r3 = curried(1)(2, 3)
    if (r1 !== 6) failures.push({ input: [1, 2, 3], expected: 6, actual: r1, message: '(1)(2)(3)' })
    if (r2 !== 6) failures.push({ input: [1, 2, 3], expected: 6, actual: r2, message: '(1, 2)(3)' })
    if (r3 !== 6) failures.push({ input: [1, 2, 3], expected: 6, actual: r3, message: '(1)(2, 3)' })
    return { pass: failures.length === 0, failures }
  }
}
`
  }
]
