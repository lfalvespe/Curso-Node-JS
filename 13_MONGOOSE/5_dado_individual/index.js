const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const port = 3000

const productsRoutes = require('./routes/productsRoutes') 

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

app.use(express.static('public'))


//routes
app.use('/products', productsRoutes)

app.listen(port, () => console.log('App rodando na porta: ', port))