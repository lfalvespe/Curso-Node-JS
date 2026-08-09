const { ObjectId } = require('mongodb')
const conn = require('../db/conn')

class Product {
    constructor(name, image, price, description) {
        this.name = name
        this.image = image
        this.price = price
        this.description = description
    }

    async save() {
        const product = await conn.db().collection('products').insertOne({
            name: this.name,
            image: this.image,
            price: this.price, 
            description: this.description
        })

        return product
    }

    static getProducts() {
        const products = conn.db().collection('products').find().toArray()

        return products
    }

    static getProductById(id) {
        const product = conn.db().collection('products').findOne({_id: ObjectId.createFromHexString(id)})

        return product
    }

    static async edit(id, name, image, price, description) {
        const editedProduct = await conn.db().collection('products').updateOne({_id: ObjectId.createFromHexString(id)}, {$set:{name: name, image: image, price: price, description: description}})
        return editedProduct
    }

    static async delete(id) {

        const deletedProduct = await conn.db().collection('products').deleteOne({_id: ObjectId.createFromHexString(id)})

        return deletedProduct
    }
}

module.exports = Product