'use strict'

const fs = require('fs')
const path = require('path')
const runFunctionTests = require('./run-function-tests')

function formatValue (value) {
  if (typeof value === 'undefined') return 'undefined'
  try {
    return JSON.stringify(value)
  } catch (_) {
    return String(value)
  }
}

function formatFailures (failures) {
  return failures.map(function (failure, i) {
    const lines = [
      '### Case #' + ((failure.index != null ? failure.index : i) + 1),
      '- Input: `' + formatValue(failure.input) + '`',
      '- Kỳ vọng: `' + formatValue(failure.expected) + '`',
      '- Nhận được: `' + formatValue(failure.actual) + '`'
    ]
    if (failure.message) {
      lines.push('- Chi tiết: ' + failure.message)
    }
    return lines.join('\n')
  }).join('\n\n')
}

function resolveLocalizedFile (dirname, basename, lang) {
  const postfix = lang === 'en' ? '' : '_' + lang
  const localized = path.join(dirname, basename + postfix + '.md')
  if (fs.existsSync(localized)) return localized

  const vi = path.join(dirname, basename + '_vi.md')
  if (fs.existsSync(vi)) return vi

  return path.join(dirname, basename + '.md')
}

module.exports = function createFunctionProblem (dirname) {
  const exports = {}
  let problemName = dirname.split(path.sep)
  problemName = problemName[problemName.length - 1]
  let suite

  exports.init = function (workshopper) {
    const lang = workshopper.i18n.lang()

    this.problem = { file: resolveLocalizedFile(dirname, 'problem', lang) }
    this.solution = { file: resolveLocalizedFile(dirname, 'solution', lang) }
    this.solutionPath = path.resolve(__dirname, '..', 'solutions', problemName, 'index.js')

    const testsPath = path.join(dirname, 'tests.js')
    delete require.cache[require.resolve(testsPath)]
    suite = require(testsPath)
  }

  exports.verify = function (args, cb) {
    function failWithMessage (message) {
      exports.fail = [
        { text: message, type: 'md' },
        require('./footer.js')
      ]
      cb(null, false)
    }

    if (!args || !args[0]) {
      return failWithMessage([
        '## Chưa đạt',
        '',
        'Thiếu tên file bài làm.',
        '',
        'Chạy lệnh dạng:',
        '',
        '```bash',
        'javascripting verify ten-file.js',
        '```'
      ].join('\n'))
    }

    const attemptPath = path.resolve(process.cwd(), args[0])
    if (!fs.existsSync(attemptPath)) {
      return failWithMessage([
        '## Chưa đạt',
        '',
        'Không tìm thấy file: `' + args[0] + '`',
        '',
        'Kiểm tra bạn đang đứng đúng thư mục và tên file.'
      ].join('\n'))
    }

    let resultOrPromise
    try {
      resultOrPromise = runFunctionTests(attemptPath, suite)
    } catch (err) {
      return failWithMessage([
        '## Chưa đạt',
        '',
        err.message,
        '',
        'Kiểm tra lại tên hàm và cách `module.exports`.'
      ].join('\n'))
    }

    Promise.resolve(resultOrPromise).then(function (result) {
      if (result.pass) {
        return cb(null, true)
      }

      failWithMessage([
        '## Chưa đạt — một số test case thất bại',
        '',
        formatFailures(result.failures || []),
        '',
        'Sửa hàm `' + suite.functionName + '` rồi chạy lại:',
        '',
        '```bash',
        'javascripting verify ' + args[0],
        '```'
      ].join('\n'))
    }).catch(function (err) {
      failWithMessage([
        '## Chưa đạt',
        '',
        err.message || String(err)
      ].join('\n'))
    })
  }

  return exports
}
