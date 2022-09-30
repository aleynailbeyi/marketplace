const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/db')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/products', db.getProducts)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})