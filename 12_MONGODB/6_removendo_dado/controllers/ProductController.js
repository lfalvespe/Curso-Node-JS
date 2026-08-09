const { ObjectId } = require('mongodb')
const Product = require('../models/Product')

module.exports = class ProductController {
   static async showProducts(req, res) {

      const products = await Product.getProducts()

      res.render('products/all', {products})

   }

   static async showProductDetails(req, res) {
      const id = req.params.id.toString()

      const product = await Product.getProductById(id)

      res.render('products/product', {product})
   }

   static createProduct(req, res) {
      res.render('products/create')
   }
   static async createProductPost(req, res) {
   const name = req.body.name
   const image = req.body.image
   const price  =  req.body.price
   const description  =  req.body.description

   const product = new Product(name, image, price, description)

   await product.save()
   
   res.redirect('/products/all')

   }

   static async editProduct(req, res) {

      const id = req.params.id.toString()

      const product = await Product.getProductById(id)

      res.render('products/edit', {product})
     
   }

   static async editProductPost(req, res) {
      const id = req.body.id.toString()
      const name = req.body.name
      const image = req.body.image
      const price = req.body.price
      const description = req.body.description

      const message = "Produto editado com sucesso!"

      await Product.edit(id, name, image, price, description)

      const product = await Product.getProductById(id)

      res.render('products/product', {product, message})

   }

   static async deleteProduct(req, res) {
      const id = req.body.id.toString()

      await Product.delete(id)
      res.redirect('/products')
   }
 
}