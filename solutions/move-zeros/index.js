function moveZeros (arr) {
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
