const { ObjectId } = require('mongodb')
const Product = require('../models/Product')

module.exports = class ProductController {
   
   static async createProduct(req, res) {
      res.render('products/create')
   }
   static async createProductPost(req, res) {
   const name = req.body.name
   const image = req.body.image
   const price  =  req.body.price
   const description  =  req.body.description

   const product = new Product({name, image, price, description})

   await product.save()
   
   res.redirect('/products')
   }
   static async showProducts(req, res) {
      const products = await Product.find().lean() //método lean para que o handlebars consiga ler os dados

      res.render('products/all', { products })
   }
   static async showProductDetails(req, res) {
      const id = req.params.id

      const product = await Product.findById(id).lean() //método lean para que o handlebars consiga ler os dados

      res.render('products/product', { product })
   }
   static async editProduct(req, res) {
      const id = req.params.id
      const product = await Product.findById(id).lean()

      res.render('products/edit', { product })
   }
   static async editProductPost(req, res) {
      const id = req.body.id

      const product = {
         name: req.body.name,
         price: req.body.price,
         image: req.body.image,
         description: req.body.description
      }

      const editedProduct = await Product.updateOne({_id: id}, product)
      res.redirect('/products')
   
   }
  
}