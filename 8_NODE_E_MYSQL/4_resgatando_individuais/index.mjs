import express from "express";
import exphbs from "express-handlebars";
import mysql from "mysql2";

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
app.post("/alunos/insert", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const grade = req.body.grade;
  const level = req.body.level;
  const email = req.body.email;

  const sql = `INSERT INTO ALUNOS (name, age, grade, level, email) VALUES
  ('${name}', '${age}', '${grade}', '${level}', '${email}')`;

  conn.query(sql, function (err) {
    if (err) {
      console.log(err);
    }
  });

  res.redirect("/");
});

app.get('/alunos/:id', (req, res) => {
  const id =  req.params.id

  const sql = `SELECT * FROM ALUNOS WHERE ID = ${id}`

  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    const aluno = data[0]
    console.log(aluno)

    res.render('aluno', {aluno})
  })
 
})

app.get('/alunos', (req, res) => {
  const sql = "SELECT * FROM ALUNOS"

  conn.query(sql, function (err, data) {
      if(err) {
          console.log(err)
          return
      }

      const alunos = data
      console.log(alunos)

      res.render('alunos', {alunos})
  })

})

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", (req, res) => {
  res.render("home");
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_escola_maria_do_carmo",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Conectado ao banco de dados MySQL");

  app.listen(port, () => {
    console.log(`APP rodando na porta ${port}`);
  });
});
