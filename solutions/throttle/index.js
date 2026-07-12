function throttle (fn, limit) {
  let last = 0
  return function () {
    const now = Date.now()
    if (now - last >= limit) {
      last = now
      return fn.apply(this, arguments)
    }
  }
}

module.exports = throttle
