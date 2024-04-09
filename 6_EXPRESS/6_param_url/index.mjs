import express from 'express'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path'

 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 3000 // variável ambiente

const basePath = path.join(__dirname, 'templates')


// rotas

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})


app.listen(port,() => {
        console.log(`App rodando na porta ${port}`)
})