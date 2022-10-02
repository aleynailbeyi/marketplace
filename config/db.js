const Pool = require('pg').Pool
const dotenv = require('dotenv');
dotenv.config();

/*const pool = new Pool({
  user: 'marketplace_user',
  host: 'localhost',
  database: 'marketplacedb',
  password: 'postgres',
  port: 5432,
}) */

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  });
  pool.on('connect', () => {
    console.log('Db connected successfully!');
  });

  const getCustomer = (request, response) => {
    pool.query('SELECT * FROM customer ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  } 
const getProducts = (request, response) => {
    pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getOrders = (request, response) => {
    pool.query('SELECT * FROM orders ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getOrdersById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM orders WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const createProduct = (request, response) => {
    const { id, name, price } = request.body
  
    pool.query('INSERT INTO products (id, name, price) VALUES ($1, $2, $3) RETURNING *', [id, name, price], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Product added with ID: ${id}`)
    })
  }

  const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, price } = request.body
  
    pool.query(
      'UPDATE products SET name = $1, price = $2 WHERE id = $3',
      [name, price, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Product modified with ID: ${id}`)
      }
    )
  }

  const deleteProduct = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product deleted with ID: ${id}`)
    })
  }
  
  const getOrderProducts = (request, response) => {
    pool.query('SELECT * FROM order_products INNER JOIN orders ON order_products.order_id=orders.id', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


module.exports = {
    query: (text, params) => pool.query(text, params),
    getCustomer,
    getProducts,
    getOrders,
    getOrdersById,
    createProduct,
    updateProduct,
    deleteProduct,
    getOrderProducts
  }