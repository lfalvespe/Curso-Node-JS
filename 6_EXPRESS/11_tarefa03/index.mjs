import express from 'express'

import { router } from './clients/index.mjs'


const port = 5000
const app = express()

const clientRoutes = router

// static files
app.use(express.static('public'))

app.use('/clients', clientRoutes)


app.listen(port, () => {
    console.log(`App rodadndo na porta ${port}`)
})