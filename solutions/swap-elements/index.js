function swapElements (arr, i, j) {
  const result = arr.slice()
  const temp = result[i]
  result[i] = result[j]
  result[j] = temp
  return result
}

module.exports = swapElements
