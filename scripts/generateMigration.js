const fs = require('fs')
const path = require('path')
const migrationName = process.argv[2]
const { DateTime } = require('luxon')
const timestamp = DateTime.local().toFormat('yyyyMMddHHmm')

const migrationFileName = `${timestamp}_${migrationName}.js`
const migrationFileContents = `// Path: db/migrations/steps/${migrationFileName}
module.exports = {
  run: (db) => db.query('', [])
}
`
const migrationFilePath = path.join(__dirname, '..', 'db', 'migrations', 'steps', migrationFileName)
fs.writeFileSync(migrationFilePath, migrationFileContents)
console.log(`Created migration file ${migrationFilePath}`)
