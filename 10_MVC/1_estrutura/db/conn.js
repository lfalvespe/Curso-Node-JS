import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log("Conecvtado com sucesso ao banco")
} catch (error) {
    console.log("Erro ao conectar-se a o banco", error)
}

export default sequelize