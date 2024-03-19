import fs, { mkdir } from 'fs'

if(!fs.existsSync('./minhapasta')) {
    console.log('Diretório inexistente')
    fs.mkdirSync('minhapasta')
    console.log("Diretório criado")
} else {
    console.log('O diretório já existe.')
}