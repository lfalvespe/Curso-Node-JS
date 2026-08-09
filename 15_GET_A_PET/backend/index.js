const express = require('express')
const cors = require('cors')
const port = 5000

const app = express()

app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log("server is on")
})


