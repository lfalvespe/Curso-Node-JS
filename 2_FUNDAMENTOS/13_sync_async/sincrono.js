const fs = require('fs')

console.log('Início')

fs.writeFileSync("arquivo.txt", "Algum texto")

console.log("Fim")