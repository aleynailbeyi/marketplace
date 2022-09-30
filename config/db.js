const Pool = require('pg').Pool
const pool = new Pool({
  user: 'marketplace_user',
  host: 'localhost',
  database: 'marketplacedb',
  password: 'postgres',
  port: 5432,
})

const getProducts = (request, response) => {
    pool.query('SELECT * FROM customer ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getProducts,
  }