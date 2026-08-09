const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017/bancoteste"

const client = new MongoClient(uri)

const run = async () => {
    try {
        await client.connect()
        console.log("Conectado ao Mongodb !!!")
    } catch (error) {
        console.log(error)
    }
}

run()

module.exports = client