function isAnagram (str1, str2) {
  function normalize (s) {
    return s.toLowerCase().replace(/ /g, '').split('').sort().join('')
  }
  return normalize(str1) === normalize(str2)
}

module.exports = isAnagram
