import * as mysql from "mysql2";

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"bestuser",
    database:"aspect_db"
})

export default db;