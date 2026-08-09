const express = require('express')
const ProductController = require('../controllers/ProductController')
const router = express.Router()


//routes
router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
// router.post('/delete', ProductController.deleteProduct)
// router.get('/edit/:id', ProductController.editProduct)
// router.post('/edit', ProductController.editProductPost)
router.get('/', ProductController.showProducts)
router.get('/:id', ProductController.showProductDetails)


module.exports = router