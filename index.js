const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/db')
const port = 5000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/customer', db.getCustomer)
app.get('/products', db.getProducts)
app.get('/orders', db.getOrders)
app.get('/orders/:id', db.getOrdersById)
app.post('/products', db.createProduct)
app.put('/products/:id', db.updateProduct)
app.delete('/products/:id', db.deleteProduct)
app.get('/order_products', db.getOrderProducts)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})