function curry (fn) {
  return function curried () {
    const args = Array.prototype.slice.call(arguments)
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }
    return function () {
      return curried.apply(this, args.concat(Array.prototype.slice.call(arguments)))
    }
  }
}

module.exports = curry
