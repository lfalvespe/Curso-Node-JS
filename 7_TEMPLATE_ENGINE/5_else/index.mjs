import express from 'express'
import exphbs from 'express-handlebars'

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//routes
app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})
app.get('/', (req, res) => {

    const user = {
        name: 'Maria',
        surname: 'Luiza',
        age: 30,
    }

    const palavra = 'Teste'

    const auth = false

    res.render('home', {user: user, palavra, auth})
})

app.listen(3000, () => {
    console.log('App funcionando')
})