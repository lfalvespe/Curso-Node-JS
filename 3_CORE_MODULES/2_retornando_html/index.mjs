import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html')
  
  res.end(
    `<div>
      <h1>Node JS</h1>
      <hr />
      <h2>Retornando HTML com o módulo .end()</h2>
      <p>algum texto</p>
    </div>`
  );
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
