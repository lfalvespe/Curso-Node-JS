import express from "express";
import exphbs from "express-handlebars";
import conn from './db/conn.js'

import User from './models/User.js'

const port = 3000;
const app = express();

//middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// statics
app.use(express.static("public"));

//routes
app.get("/", (req, res) => {
  res.render("home");
});


conn.sync()
.then(() => {
  app.listen(port, () => {
    console.log(`App rodando na porta, ${port}`)
  })
})
.catch((err) => {
  console.log(err)
})