import mysql from 'mysql2'

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_escola_pernambucana'
})

export default pool