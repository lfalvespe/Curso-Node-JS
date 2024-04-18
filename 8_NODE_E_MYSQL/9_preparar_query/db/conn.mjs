import mysql from 'mysql2'

export const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_escola_maria_do_carmo'
})


