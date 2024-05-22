import express from 'express'
import exphbs from 'express-handlebars'

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

//routes
app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c"]

    res.render('dashboard', {items})
})

app.get('/blog', (req, res) => {

    const posts = [
        {
            id: 1,
            title: "Aprender Javascipt",
            category: 'Programação'
        },
        {
            id: 2,
            title: "Aprender Excel",
            category: 'Office'
        }, 
        {
            id: 3,
            title: "Aprender Canva",
            category: 'Gráficos'
        }, 
        {
            id: 4,
            title: "Aprender Python",
            category: 'Programação'
        },
    ]

    res.render('blog', {posts})
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