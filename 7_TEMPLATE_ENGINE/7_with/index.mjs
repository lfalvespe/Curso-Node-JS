import express from 'express'
import exphbs from 'express-handlebars'

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//routes
app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c"]

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node JS',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender Node JS',
        comments: 4
    }

    res.render('blogpost', {post})
})

app.get('/', (req, res) => {

    const user = {
        name: 'Maria',
        surname: 'Luiza',
        age: 30,
    }

    const palavra = 'Teste'

    const auth = true

    res.render('home', {user: user, palavra, auth})
})

app.listen(3000, () => {
    console.log('App funcionando')
})