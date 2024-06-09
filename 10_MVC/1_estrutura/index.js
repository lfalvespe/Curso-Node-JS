import express from 'express'
import exphbs from 'express-handlebars'
import conn from './db/conn.js'

const port = 3000
const app = express()

// partials
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

// view engine
app.engine('handlebars', exphbs.engine)
app.set('view engine', 'handlebars')

// static
app.use(express.static('public'))

// middleware
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())


conn.sync(() => {
    app.listen(port, () => {
        console.log(`App rodando na porta, ${port}`)
    })
})