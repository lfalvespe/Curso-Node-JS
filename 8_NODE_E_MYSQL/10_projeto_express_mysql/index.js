import express from "express";
import exphbs from "express-handlebars";

import professores from "./routes/professores.js";
import alunos from "./routes/alunos.js"

const port = 3000;
const app = express();

app.use(professores);
app.use(alunos)

// view engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// statics
app.use(express.static("public"));

//routes
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", (req, res) => {
  res.render("home");
});


app.listen(port, () => {
  console.log(`Servidor rodando na port ${port}`);
});
