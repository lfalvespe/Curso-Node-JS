import express from 'express'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path'

const router = express.Router()

// base path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basePath = path.join(__dirname, '../templates')


router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`)

    res.sendFile(`${basePath}/userform.html`)
})

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

export default router