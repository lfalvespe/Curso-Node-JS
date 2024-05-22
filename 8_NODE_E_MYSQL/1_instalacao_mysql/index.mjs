import express from 'express'
import exphbs from 'express-handlebars'
import mysql from 'mysql2'

const port = 3000
const app = express()

// engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// statics
app.use(express.static('public'))


//routes
app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_escola_maria_do_carmo'
})

conn.connect(function(err) {

    if(err) {
        console.log(err)
        return
    }

    console.log('Conectado ao banco de dados MySQL')

    app.listen(port, () => {
        console.log(`APP rodando na porta ${port}`)
    })
})