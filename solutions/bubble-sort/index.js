function bubbleSort (arr) {
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
