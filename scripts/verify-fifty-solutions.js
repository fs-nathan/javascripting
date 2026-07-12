'use strict'

const path = require('path')
const fs = require('fs')
const run = require('../lib/run-function-tests')

const root = path.join(__dirname, '..')

const problems = fs.readdirSync(path.join(root, 'problems')).filter(function (name) {
  return fs.existsSync(path.join(root, 'problems', name, 'tests.js'))
}).sort()

async function main () {
  let failed = 0

  for (let i = 0; i < problems.length; i++) {
    const slug = problems[i]
    const suitePath = path.join(root, 'problems', slug, 'tests.js')
    delete require.cache[require.resolve(suitePath)]
    const suite = require(suitePath)
    const solution = path.join(root, 'solutions', slug, 'index.js')

    try {
      const result = await Promise.resolve(run(solution, suite))
      if (!result.pass) {
        failed++
        console.error('FAIL', slug, result.failures)
      }
    } catch (err) {
      failed++
      console.error('ERROR', slug, err.message)
    }
  }

  if (failed) {
    console.error('verify-fifty: ' + failed + '/' + problems.length + ' failed')
    process.exit(1)
  }

  console.log('ok — verify-fifty (' + problems.length + ')')
}

main()
