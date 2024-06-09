import express from 'express'
import exphbs from 'express-handlebars'
import conn from './db/conn.js'

import Task from './models/Task.js'

import TasksRoutes from './routes/TasksRoutes.js'


const port = 3000
const app = express()

// partials
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

// view engine
app.engine('handlebars', hbs.engine)
// app.set("views", "./views");
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

// routes
app.use('/tasks', TasksRoutes)



conn.sync()
.then(
    app.listen(port, () => {
        console.log(`App rodando na porta ${port}`)
    })
)
.catch((err) => console.log(err))