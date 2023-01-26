import { pool } from 'db_connection.js'

export const getAllNotes =  () => {
     new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if(err) return reject(err.message);
            connection.query(
                'SELECT * FROM `notes` ORDER BY `time`',
                (err,result) => {
                    if(err) return reject(err.message);
                    resolve(result)
                }
            )
            connection.release()
        })
    })
}

export const insertNote = async () => {
    return JSON.stringify({
        'Название' : 'Добавить заметку'
    })
}

export const deleteNote = async  () => {
    return JSON.stringify({
        'Название' : 'Удалить заметку'
    })
}