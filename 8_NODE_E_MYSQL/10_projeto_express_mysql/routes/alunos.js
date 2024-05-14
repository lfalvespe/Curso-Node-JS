import express from "express";
import { Router } from "express";
import pool from "../db/pool.js";

const router = Router();

// middleware
router.use(
  express.urlencoded({
    extended: true,
  })
);
router.use(express.json());

// routes
router.get("/alunos/formaluno", (req, res) => {
  res.render("formaluno");
});

router.post("/alunos/register", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const grade = req.body.grade;
  const level = req.body.level;
  const email = req.body.email;

  const sql = `INSERT INTO alunos (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)`;

  const data = ['name', 'age', 'level', 'grade', 'email', name, age, level, grade, email]

  pool.query(sql, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });

  res.redirect("/alunos");
});

router.get("/alunos/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM alunos WHERE id = ${id}`;

  pool.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const aluno = data[0];

    res.render("aluno", { aluno });
  });
});

router.get("/alunos", (req, res) => {
  const sql = "SELECT * FROM alunos";

  pool.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }

    const alunos = data;

    res.render("alunos", { alunos });
  });
});

router.post("/alunos/delete/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM alunos WHERE id = ${id}`;

  pool.query(sql, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/alunos");
  });
});

router.get("/alunos/edit/:id", (req, res) => {
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

router.post('/alunos/saveedit', (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const age = req.body.age
  const level = req.body.level
  const grade = req.body.grade
  const email = req.body.email

  const sql = `UPDATE alunos SET name = '${name}', age = '${age}', level = '${level}', grade = '${grade}', email = '${email}' WHERE id = ${id}`



  pool.query(sql, (err, data) => {
    if(err) {
      console.log(err)
      return
    }

    res.redirect('/alunos')
  })
})

export default router;
