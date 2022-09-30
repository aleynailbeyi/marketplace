const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')

router.get("/",(req,res)=>{
    Customer.findAll().then((customer)=>res.json(customer)).catch((err)=>console.log(err))
})
module.exports = router