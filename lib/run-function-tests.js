'use strict'

const path = require('path')

/**
 * Load a student/solution module and resolve the exported function.
 * Supports `module.exports = fn` and `module.exports = { [functionName]: fn }`.
 */
function loadFunction (attemptPath, functionName) {
  const resolved = path.resolve(attemptPath)
  delete require.cache[resolved]

  let exported
  try {
    exported = require(resolved)
  } catch (err) {
    throw new Error('Không thể tải file bài làm: ' + err.message)
  }

  let fn = exported
  if (typeof fn !== 'function' && exported && typeof exported[functionName] === 'function') {
    fn = exported[functionName]
  }

  if (typeof fn !== 'function') {
    throw new Error(
      'File phải export hàm "' + functionName +
      '" (module.exports = ' + functionName + ' hoặc module.exports = { ' +
      functionName + ' }).'
    )
  }

  return fn
}

function valuesEqual (expected, actual) {
  try {
    const assert = require('assert')
    assert.deepStrictEqual(actual, expected)
    return true
  } catch (_) {
    return false
  }
}

function runCases (fn, cases) {
  const failures = []

  for (let i = 0; i < cases.length; i++) {
    const testCase = cases[i]
    const input = testCase.input || []
    let actual

    try {
      actual = fn.apply(null, input)
    } catch (err) {
      failures.push({
        index: i,
        input,
        expected: testCase.expected,
        actual: undefined,
        message: 'Ném lỗi: ' + err.message
      })
      continue
    }

    if (!valuesEqual(testCase.expected, actual)) {
      failures.push({
        index: i,
        input,
        expected: testCase.expected,
        actual,
        message: testCase.message
      })
    }
  }

  return {
    pass: failures.length === 0,
    failures
  }
}

/**
 * @param {string} attemptPath - Absolute or relative path to student JS file
 * @param {{ functionName: string, cases?: Array, run?: Function }} suite
 * @returns {{ pass: boolean, failures: Array } | Promise<{ pass: boolean, failures: Array }>}
 */
function runFunctionTests (attemptPath, suite) {
  if (!suite || typeof suite.functionName !== 'string') {
    throw new Error('tests.js phải khai báo functionName')
  }

  const fn = loadFunction(attemptPath, suite.functionName)

  if (typeof suite.run === 'function') {
    return suite.run(fn)
  }

  if (!Array.isArray(suite.cases)) {
    throw new Error('tests.js phải có cases[] hoặc hàm run(fn)')
  }

  return runCases(fn, suite.cases)
}

module.exports = runFunctionTests
module.exports.loadFunction = loadFunction
module.exports.runCases = runCases
