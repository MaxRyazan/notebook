import * as mysql from "mysql2";

const db = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    port: '3306',
    password: 'bestuser'
});

db.execute('CREATE DATABASE IF NOT EXISTS notebook_db')
db.execute('CREATE TABLE IF NOT EXISTS notebook_db.notebook(id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255), description varchar(255));')
db.execute(`INSERT IGNORE INTO notebook_db.notebook VALUES(1, 'NAME', 'DESCRIPTION')`)

export default db;