const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/testemongoose'

async function main() {
    await mongoose.connect(uri)
    console.log('Conectado ao mongodb com Mongoose')
}

main().catch((err) => console.log(err))

module.exports = mongoose