module.exports = {
  run: (db) => db.query('CREATE TABLE IF NOT EXISTS schema_migrations (version varchar(255) NOT NULL CONSTRAINT unique_schema_migrations UNIQUE)', [])
    .then(() => {
      const versions = []

      return db.query('SELECT version from public.schema_migrations', []).then((res) => {
        res.rows.forEach((row) => {
          versions.push(row.version)
        })

        return versions
      })
    })
}
