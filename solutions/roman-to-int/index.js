function romanToInt (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let total = 0
  for (let i = 0; i < s.length; i++) {
    const value = map[s[i]]
    const next = map[s[i + 1]]
    if (next && value < next) total -= value
    else total += value
  }
  return total
}

module.exports = romanToInt
