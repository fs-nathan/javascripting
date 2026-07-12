function findSecondLargest (arr) {
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
