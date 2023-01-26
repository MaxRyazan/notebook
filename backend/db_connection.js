import * as mysql from 'mysql2'
import * as dotenv from 'dotenv'
dotenv.config()

export const pool = mysql.createPool({
    user: 'root',
    password: 'bestuser',
    database: 'notebook',
    port: 3306,
    host: 'mysql'
})
const CREATE_TABLE_QUERY = `CREATE TABLE IF NOT EXIST notebook (
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP PRIMARY_KEY,
    title varchar(255),
    body varchar(255)
    )`
const INSERT_QUERY = `INSERT into notebook values(100000, 'Тестовая запись', 
'Тело записи, тест')`

pool.getConnection((err, connection) => {
    if(!err){
        connection.query(CREATE_TABLE_QUERY, (err) => {
            if(!err){
                console.log('Таблица создана')
                connection.query(INSERT_QUERY, () => {
                    console.log('Данные сохранены в таблицу!')
                })
            }
        })
        connection.release()
    }
})
