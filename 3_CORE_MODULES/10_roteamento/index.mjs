import http from "http";

import fs from "fs";

import url from "url";

const port = 3000;

const server = http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const page = q.pathname.substring(1);

    if (page.includes('html')) {
        if (fs.existsSync(page)) {
            fs.readFile(page, (err, data) => {
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.write(data)
                return res.end()
            })
        }
    } else {
      fs.readFile('404.html', (err, data) => {
        res.writeHead(404, {'Content-Type' : 'text/html'})
        res.write(data)
        return res.end()
      })
    }
  })
  .listen(port, () => {
    console.log(`Servidor rodandona porta ${port}`);
  });
