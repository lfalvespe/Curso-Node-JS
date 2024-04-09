import express from 'express'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path'

// routers
import router from './users/index.mjs'

const users = router

const app = express()
const port = 3000 // variável ambiente

// middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// base path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const basePath = path.join(__dirname, 'templates')

app.use('/users', users)


// rotas
app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})


app.listen(port,() => {
        console.log(`App rodando na porta ${port}`)
})