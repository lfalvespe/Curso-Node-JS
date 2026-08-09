const { ObjectId } = require('mongodb')
const Product = require('../models/Product')

module.exports = class ProductController {
   
   static async createProduct(req, res) {
      res.render('products/create')
   }
   

  
}