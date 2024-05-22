import express from "express";
import exphbs from "express-handlebars";

const port = 3000;
const app = express();

// partials dir
const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});

// template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static('public'))

// variables
const products = [
  {
    id: '1',
    title: "mouse",
    category: "periféricos",
    price: 109.9,
  },
  {
    id: '2',
    title: "motherboard LGA 1700",
    category: "hardware",
    price: 759.8,
  },
  {
    id: '3',
    title: "fonte real 600W",
    category: "energy",
    price: 109.9,
  },
  {
    id: '4',
    title: "teclado mecânico",
    category: "periféricos",
    price: 267.5,
  },
];

// routes
app.get('/products/:id', (req, res) => {
  const id = req.params.id

  const product = products[id-1]
  
  res.render('products', {product})
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get("/", (req, res) => {
  res.render('home', { products });
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
