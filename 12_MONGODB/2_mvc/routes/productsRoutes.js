const express = require('express')
const ProductController = require('../controllers/ProductController')
const router = express.Router()


//routes
router.get('/', ProductController.showProducts)


module.exports = router