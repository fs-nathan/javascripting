function flattenArray (arr) {
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
