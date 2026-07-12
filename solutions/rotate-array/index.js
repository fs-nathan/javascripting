function rotateArray (arr, k) {
  if (arr.length === 0) return []
  k = k % arr.length
  if (k === 0) return arr.slice()
  return arr.slice(-k).concat(arr.slice(0, arr.length - k))
}

module.exports = rotateArray
