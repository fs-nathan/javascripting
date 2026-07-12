function isPalindrome (str) {
  const normalized = str.toLowerCase().replace(/ /g, '')
  return normalized === normalized.split('').reverse().join('')
}

module.exports = isPalindrome
