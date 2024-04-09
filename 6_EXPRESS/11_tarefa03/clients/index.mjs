import express from 'express'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

export const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const basePath = path.join(__dirname, '../templates')


//routes
router.get('/:id', (req, res) => {
    const id = req.params.id

    console.log(`Exibindo o Cliente de id ${id}`)

    res.sendFile(`${basePath}/client.html`)
})

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/clients.html`)
})