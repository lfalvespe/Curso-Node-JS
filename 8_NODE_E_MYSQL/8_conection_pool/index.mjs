import express from "express";
import exphbs from "express-handlebars";
import { pool } from './db/conn.mjs'

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

  pool.query(sql, function (err) {
    if (err) {
      console.log(err);
    }
  });

  res.redirect("/");
});

app.get("/alunos/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM alunos WHERE id = ${id}`;

  pool.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const aluno = data[0];
    console.log(aluno);

    res.render("aluno", { aluno });
  });
});

app.get("/alunos/edit/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM alunos WHERE id = ${id}`;

  pool.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const aluno = data[0];

    res.render("editaluno", { aluno });
  });
});

app.get("/alunos", (req, res) => {
  const sql = "SELECT * FROM ALUNOS";

  pool.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const alunos = data;
    console.log(alunos);

    res.render("alunos", { alunos });
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/alunos/updatealuno", (req, res) => {

  const id = req.body.id
  const name = req.body.name;
  const age = req.body.age;
  const grade = req.body.grade;
  const level = req.body.level;
  const email = req.body.email;

  const sql = `UPDATE alunos SET name = '${name}', age = '${age}', grade = '${grade}', level = '${level}', email = '${email}' WHERE id = ${id}`;

  pool.query(sql, function (err) {
    if (err) {
      console.log(err)
      return
    }
   
  })

  res.redirect('/alunos')

});

app.post('/alunos/delete/:id', (req, res) => {

  const id = req.params.id

  const sql = `DELETE FROM alunos WHERE id = ${id}`

  pool.query(sql, function(err) {
    if(err) {
      console.log(err)
      return
    }

    res.redirect('/alunos')

  })

})

app.listen(port, () => {
  console.log(`APP rodando na porta ${port}`);
});