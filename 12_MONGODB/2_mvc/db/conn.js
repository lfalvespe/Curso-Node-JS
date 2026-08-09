const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:2770/testemongodb'

const client = new MongoClient(uri)

async function run() {
    try {
        client.connect()
        console.log('Conectado ao MongoDB!')
    } catch (error) {
        console.log('Houve um erro: ', error)
    }
}

run()

module.exports = client