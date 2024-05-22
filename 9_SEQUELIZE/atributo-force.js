// O atributo 'force' recria a tabela, zerando os dados

import { error } from "console";

conn.sync({force: true})
.then(() => {
    console.log("Conectado com sucesso!")
})
.catch((error) => {
    console.log(error)
})