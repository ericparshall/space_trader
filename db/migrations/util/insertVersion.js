module.exports = {
    run: (db, version) => {
      return db.query("INSERT INTO schema_migrations (version) VALUES ($1)", [version]);
    }
}