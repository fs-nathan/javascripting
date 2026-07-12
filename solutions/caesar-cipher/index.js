function caesarCipher (str, shift) {
  shift = ((shift % 26) + 26) % 26
  return str.split('').map(function (ch) {
    const code = ch.charCodeAt(0)
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65)
    }
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97)
    }
    return ch
  }).join('')
}

module.exports = caesarCipher
