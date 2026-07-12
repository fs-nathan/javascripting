function deepClone (obj) {
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
