import db from "./db_connection.js";

class Controller{
    async get(req, res){
        try{
            const SQL_QUERY = 'SELECT * FROM table1'
            db.query(SQL_QUERY, (err, data) => {
                if(err) return  res.json(err);
                res.json(data)
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res){
        try{
            const id = +req.params.id
            const SQL_QUERY = `DELETE FROM table1 WHERE id = ${id}`
            db.query(SQL_QUERY, (err, data) => {
                if (err) return res.json(err);
                res.json(data)
            })
        } catch (e) {
            res.status(400).json(e)
        }
    }

    async create(req, res){
        try{
            const {name, description} = req.body
            const SQL_QUERY = `INSERT INTO table1 values(${name}, ${description})`
            db.query(SQL_QUERY, (err, data) => {
                if (err) return res.json(err);
                res.json(data)
            })
        } catch (e) {

        }
    }

}

export default new Controller()