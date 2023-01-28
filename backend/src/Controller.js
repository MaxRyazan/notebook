import db from "./db_connection.js";

class Controller{
    async get(req, res){
        try{
            const SQL_QUERY = 'SELECT * FROM notebook_db.notebook'
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
            const {id} = req.body
            const SQL_QUERY = `DELETE FROM notebook_db.notebook WHERE id = ${id}`
            db.query(SQL_QUERY, (err, data) => {
                if (err) return res.json(err);
                res.json(data)
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async create(req, res){
        try{
            const {id, name, description} = req.body
            const SQL_QUERY = `INSERT INTO notebook_db.notebook values(${id}, ${name}, ${description})`
            db.query(SQL_QUERY, (err, data) => {
                if (err) return res.json(err);
                res.json(data)
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new Controller()