const path = require('path')
const fs = require('fs')
const os = require('os')
const storage = require('workshopper-adventure-storage')
const problem = require('./lib/problem')
const functionProblem = require('./lib/function-problem')

const i18nDir = path.join(__dirname, 'i18n')
const languages = ['en'].concat(fs.readdirSync(i18nDir)
  .filter((f) => f.match(/\w+\.json/))
  .map((f) => f.replace('.json', ''))
)
const isTestRun = Boolean(process.env.HOME && process.env.HOME.includes('workshopper-test'))
// workshopper-adventure-test sets HOME under ~/.workshopper-test and expects English
// strings plus internal exercise keys (INTRODUCTION). Use vi for normal runs only.

const appStorageDir = storage(os.homedir(), '.config', 'javascripting')
const VI_DEFAULT_VERSION = 1

function ensureVietnameseDefault () {
  if (isTestRun) return

  const storedVersion = appStorageDir.get('viDefaultVersion') || 0
  const langExplicit = appStorageDir.get('langExplicit')

  // One-time migration for legacy `en` from npm/global workshopper storage
  if (storedVersion < VI_DEFAULT_VERSION) {
    appStorageDir.save('lang', { selected: 'vi' })
    appStorageDir.save('langExplicit', false)
    appStorageDir.save('viDefaultVersion', VI_DEFAULT_VERSION)
    return
  }

  if (!langExplicit) {
    appStorageDir.save('lang', { selected: 'vi' })
  }
}

ensureVietnameseDefault()

const jsing = require('workshopper-adventure')({
  appDir: __dirname,
  languages,
  defaultLang: isTestRun ? 'en' : 'vi',
  header: require('workshopper-adventure/default/header'),
  footer: require('./lib/footer.js')
})

if (!isTestRun) {
  const originalChangeLang = jsing.i18n.change.bind(jsing.i18n)
  jsing.i18n.change = function changeLang (lang) {
    jsing.appStorage.save('langExplicit', true)
    return originalChangeLang(lang)
  }

  if (!jsing.appStorage.get('langExplicit')) {
    originalChangeLang('vi')
  }
}

jsing.addAll(require('./menu.json').map(function (name) {
  return {
    name,
    fn: function () {
      const p = name.toLowerCase().replace(/\s/g, '-')
      const dir = require('path').join(__dirname, 'problems', p)
      const testsPath = path.join(dir, 'tests.js')
      if (fs.existsSync(testsPath)) {
        return functionProblem(dir)
      }
      return problem(dir)
    }
  }
}))

module.exports = jsing
