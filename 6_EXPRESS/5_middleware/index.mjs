import express from 'express'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path'

 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 3000 // variável ambiente

const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next) {
    req.authStatus = true

    if(req.authStatus) {
        console.log('Está logado, pode continuar.')
        next()
    } else {
        console.log('Não está logado, faça login para continuar!')
        next()
    }
}

app.use(checkAuth)

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})
.listen(
    port,
    () => {
        console.log(`App rodando na porta ${port}`)
    }
)