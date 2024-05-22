import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    
    sequelize.authenticate()
    console.log("Conectamos com sucesso ao sequelize!")

} catch (error) {
    console.log("Não foi possível conectar: ", error)
}

export default sequelize