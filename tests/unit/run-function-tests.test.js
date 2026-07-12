'use strict'

const assert = require('assert')
const path = require('path')
const fs = require('fs')
const os = require('os')

const runFunctionTests = require('../../lib/run-function-tests')

const fixturesDir = fs.mkdtempSync(path.join(os.tmpdir(), 'jsing-fn-'))

function writeFixture (name, source) {
  const filePath = path.join(fixturesDir, name)
  fs.writeFileSync(filePath, source)
  return filePath
}

function deepEqualCases () {
  return {
    functionName: 'add',
    cases: [
      { input: [1, 2], expected: 3 },
      { input: [0, 0], expected: 0 }
    ]
  }
}

// --- RED/GREEN expectations ---

{
  const attemptPath = writeFixture('add-ok.js', `
    function add (a, b) { return a + b }
    module.exports = add
  `)
  const result = runFunctionTests(attemptPath, deepEqualCases())
  assert.strictEqual(result.pass, true)
  assert.strictEqual(result.failures.length, 0)
}

{
  const attemptPath = writeFixture('add-bad.js', `
    function add (a, b) { return a - b }
    module.exports = add
  `)
  const result = runFunctionTests(attemptPath, deepEqualCases())
  assert.strictEqual(result.pass, false)
  assert.strictEqual(result.failures.length, 1)
  assert.deepStrictEqual(result.failures[0].input, [1, 2])
  assert.strictEqual(result.failures[0].expected, 3)
  assert.strictEqual(result.failures[0].actual, -1)
}

{
  const attemptPath = writeFixture('add-obj.js', `
    function merge (a, b) { return Object.assign({}, a, b) }
    module.exports = merge
  `)
  const result = runFunctionTests(attemptPath, {
    functionName: 'merge',
    cases: [
      { input: [{ a: 1 }, { b: 2 }], expected: { a: 1, b: 2 } }
    ]
  })
  assert.strictEqual(result.pass, true)
}

{
  const attemptPath = writeFixture('not-a-fn.js', 'module.exports = 42')
  assert.throws(
    () => runFunctionTests(attemptPath, deepEqualCases()),
    /function|export|hàm/i
  )
}

{
  const attemptPath = writeFixture('named-export-ok.js', `
    function add (a, b) { return a + b }
    module.exports = { add }
  `)
  const result = runFunctionTests(attemptPath, deepEqualCases())
  assert.strictEqual(result.pass, true)
}

{
  const attemptPath = writeFixture('custom-run.js', `
    function identity (x) { return x }
    module.exports = identity
  `)
  const result = runFunctionTests(attemptPath, {
    functionName: 'identity',
    run: function (fn) {
      const value = fn(7)
      if (value !== 7) {
        return {
          pass: false,
          failures: [{ input: [7], expected: 7, actual: value, message: 'custom' }]
        }
      }
      return { pass: true, failures: [] }
    }
  })
  assert.strictEqual(result.pass, true)
}

console.log('ok — run-function-tests')
