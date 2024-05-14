import express from "express";
import pool from '../db/pool.js'

const router = express.Router();

// middleware
router.use(
  express.urlencoded({
    extended: true,
  })
);
router.use(express.json());

// routes
router.get("/professores/formprofessor", (req, res) => {
  res.render("formprofessor");
});

router.get("/professores/edit/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM professores WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(sql, data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const professor = data[0];

    res.render("editprofessor", { professor });
  });
});

router.post("/professores/saveedit", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const disciplina = req.body.disciplina;
  const email = req.body.email;

  const sql = `UPDATE professores SET name = '${name}', disciplina = '${disciplina}', email = '${email}' WHERE id = ${id}`;

  pool.query(sql, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });

  res.redirect(`/professores/${id}`);
});

router.get("/professores", (req, res) => {
  const sql = `SELECT * FROM professores`;

  pool.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const professores = data;

    res.render("professores", { professores });
  });
});

router.get("/professores/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM professores WHERE id = ${id}`;

  pool.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const professor = data[0];

    res.render("professor", { professor });
  });
});

router.post("/professores/register", (req, res) => {
  const name = req.body.name;
  const disciplina = req.body.disciplina;
  const email = req.body.email;

  const sql = `INSERT INTO professores (name, disciplina, email) VALUES ('${name}', '${disciplina}', '${email}')`;

  pool.query(sql, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });

  res.redirect("/professores");
});

router.post("/professores/delete/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM professores WHERE id = ${id}`;

  pool.query(sql, (err) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/professores");
  });
});



export default router
