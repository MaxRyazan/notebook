import express from 'express'
import cors from "cors"
import * as mysql from "mysql2";
const PORT = 8081
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"bestuser",
    database:"aspect_db"
})

app.use(cors({origin: '*'}));
app.use(express.json())

app.get('/', (req, res) => {
    const query = 'SELECT * FROM table1'
    db.query(query, (err, data) => {
        if(err) return  res.json(err);
        res.json(data)
    })
})

app.delete('/:id', (req, res) => {
    const id = +req.params.id
    const query = `DELETE FROM table1 WHERE id = ${id}`
    db.query(query, (err, data) => {
        if(err){
            res.send('We have a error HERE !')
        }
    })
})
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})