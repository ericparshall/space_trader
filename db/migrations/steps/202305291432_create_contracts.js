// Path: db/migrations/steps/202305291432_create_contracts.js
module.exports = {
  run: (db) => db.query('CREATE TABLE IF NOT EXISTS contracts (\n' +
    '    id VARCHAR(50) PRIMARY KEY,\n' +
    '    factionSymbol VARCHAR(50),\n' +
    '    type VARCHAR(50),\n' +
    '    terms JSONB,\n' +
    '    accepted BOOLEAN,\n' +
    '    fulfilled BOOLEAN,\n' +
    '    expiration TIMESTAMP,\n' +
    '    deadlineToAccept TIMESTAMP\n' +
    ');', [])
}
