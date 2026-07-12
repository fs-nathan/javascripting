function countChars (str) {
  const result = {}
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    result[ch] = (result[ch] || 0) + 1
  }
  return result
}

module.exports = countChars
