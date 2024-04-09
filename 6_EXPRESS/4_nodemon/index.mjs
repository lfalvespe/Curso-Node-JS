import express from 'express'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path'

 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 3000 // variável ambiente

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})
.listen(
    port,
    () => {
        console.log(`App rodando na porta ${port}`)
    }
)