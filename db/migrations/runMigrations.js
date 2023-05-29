const db = require('../index.js')
const fs = require('fs')
const insertVersion = require('./util/insertVersion.js')

const runMigrations = () => {
  require('./util/createSchemaMigrations.js').run(db)
    .then(versions => {
      const migrationScripts = fs.readdirSync('./db/migrations/steps').reduce((acc, fileName) => {
        const version = fileName.split('_')[0]
        acc[version] = fileName
        return acc
      }, {})

      const versionsToRun = Object.keys(migrationScripts).filter(version => !versions.includes(version)).sort()
      console.log('Database migration versions to run', versionsToRun)

      versionsToRun.forEach(version => {
        console.log(`Running migration ./steps/${migrationScripts[version]}`)

        const script = require(`./steps/${migrationScripts[version]}`)

        script.run(db)
          .then(() => insertVersion.run(db, version))
          .then(() => console.log(`Migration ${version} complete`))
          .catch(err => {
            console.error(`Error running migration ${version}`)
            console.error(err)
          })
      })
    })
    .catch(err => {
      console.error('Error creating schema_migrations table')
      console.error(err)
    })
}

// list files in directory relative to this file

module.exports = runMigrations
