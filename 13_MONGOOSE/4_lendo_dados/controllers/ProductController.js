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
  
}