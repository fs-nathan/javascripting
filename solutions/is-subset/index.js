function isSubset (subset, array) {
  for (let i = 0; i < subset.length; i++) {
    if (!array.includes(subset[i])) return false
  }
  return true
}

module.exports = isSubset
