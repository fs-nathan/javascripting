function isValidParentheses (str) {
  const stack = []
  const pairs = { ')': '(', ']': '[', '}': '{' }
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch)
    } else {
      if (stack.pop() !== pairs[ch]) return false
    }
  }
  return stack.length === 0
}

module.exports = isValidParentheses
