import express from 'express'

const app = express()

const port = 3000 // variável ambiente

app.get('/', (req, resp) => {
    resp.send('Hello express!')
})
.listen(
    port,
    () => {
        console.log(`App rodando na porta ${port}`)
    }
)