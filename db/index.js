const { Pool } = require('pg')

const pool = new Pool()

module.exports = {
  query: (text, params) => new Promise((resolve, reject) => {
    const start = Date.now()
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start
      console.log('executed query', { text, duration, rows: res.rowCount })

      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    });
  }),
}