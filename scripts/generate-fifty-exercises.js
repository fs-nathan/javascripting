'use strict'

const fs = require('fs')
const path = require('path')
const util = require('util')

const exercises = []
  .concat(require('./fifty-exercises-part1'))
  .concat(require('./fifty-exercises-part2'))
  .concat(require('./fifty-exercises-part3'))
  .concat(require('./fifty-exercises-part4'))
  .concat(require('./fifty-exercises-part5'))

const root = path.join(__dirname, '..')

function pad (n) {
  return String(n).padStart(2, '0')
}

function jsLiteral (value) {
  if (typeof value === 'function') return value.toString()
  return util.inspect(value, {
    depth: null,
    compact: true,
    breakLength: Infinity
  })
}

function buildTestsJs (ex) {
  if (ex.testsSource) return ex.testsSource

  const lines = [
    "'use strict'",
    '',
    'module.exports = {',
    "  functionName: '" + ex.fn + "',",
    '  cases: ['
  ]

  ex.cases.forEach(function (c, idx) {
    const inputRepr = c.input.map(jsLiteral).join(', ')
    const expectedRepr = jsLiteral(c.expected)
    const comma = idx < ex.cases.length - 1 ? ',' : ''
    lines.push('    { input: [' + inputRepr + '], expected: ' + expectedRepr + ' }' + comma)
  })

  lines.push('  ]')
  lines.push('}')
  lines.push('')
  return lines.join('\n')
}

function buildProblemMd (ex) {
  return [
    '# ' + pad(ex.stt) + '. ' + ex.title,
    '',
    ex.intro,
    '',
    '## Yêu cầu',
    '',
    ex.req,
    '',
    '## Ví dụ',
    '',
    '| Input | Output |',
    '|-------|--------|',
    '| `' + ex.example.input + '` | `' + ex.example.output + '` |',
    '',
    '## Gợi ý',
    '',
    ex.hint,
    '',
    '## Cách nộp bài',
    '',
    'Tạo file (ví dụ `' + ex.slug + '.js`) và export hàm:',
    '',
    '```js',
    'function ' + ex.fn + ' (/* ... */) {',
    '  // ...',
    '}',
    '',
    'module.exports = ' + ex.fn,
    '```',
    '',
    'Kiểm tra:',
    '',
    '```bash',
    'javascripting verify ' + ex.slug + '.js',
    '```',
    ''
  ].join('\n')
}

function buildSolutionMd (ex) {
  return [
    '# Lời giải — ' + ex.title,
    '',
    '```js',
    ex.solution.trim(),
    '```',
    '',
    'Gợi ý: ' + ex.hint,
    ''
  ].join('\n')
}

function writeExercise (ex) {
  const problemDir = path.join(root, 'problems', ex.slug)
  const solutionDir = path.join(root, 'solutions', ex.slug)
  fs.mkdirSync(problemDir, { recursive: true })
  fs.mkdirSync(solutionDir, { recursive: true })

  fs.writeFileSync(path.join(problemDir, 'problem_vi.md'), buildProblemMd(ex))
  fs.writeFileSync(path.join(problemDir, 'solution_vi.md'), buildSolutionMd(ex))
  fs.writeFileSync(path.join(problemDir, 'tests.js'), buildTestsJs(ex))
  fs.writeFileSync(path.join(solutionDir, 'index.js'), ex.solution)
}

function updateMenuAndI18n () {
  const menuPath = path.join(root, 'menu.json')
  const viPath = path.join(root, 'i18n', 'vi.json')

  const baseMenu = [
    'INTRODUCTION', 'VARIABLES', 'STRINGS', 'STRING LENGTH', 'REVISING STRINGS',
    'NUMBERS', 'ROUNDING NUMBERS', 'NUMBER TO STRING', 'IF STATEMENT', 'FOR LOOP',
    'ARRAYS', 'ARRAY FILTERING', 'ACCESSING ARRAY VALUES', 'LOOPING THROUGH ARRAYS',
    'OBJECTS', 'OBJECT PROPERTIES', 'OBJECT KEYS', 'FUNCTIONS', 'FUNCTION ARGUMENTS',
    'SCOPE'
  ]

  const menu = baseMenu.concat(exercises.map(function (ex) { return ex.key }))
  fs.writeFileSync(menuPath, JSON.stringify(menu, null, 2) + '\n')

  const vi = JSON.parse(fs.readFileSync(viPath, 'utf8'))
  exercises.forEach(function (ex) {
    vi.exercise[ex.key] = pad(ex.stt) + '. ' + ex.title
  })
  fs.writeFileSync(viPath, JSON.stringify(vi, null, 2) + '\n')
}

exercises.forEach(writeExercise)
updateMenuAndI18n()

console.log('Generated ' + exercises.length + ' exercises')
