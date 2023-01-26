import express from 'express'
import * as dotenv from 'dotenv'
import { getAllNotes, insertNote, deleteNote} from './actions.js'
dotenv.config()
const app = express()


let PORT =  5000;

app.get('/', (_, res) => {
    res.send('Привет')
})

app.get('/notes', async (_, res) => {
    res.send(getAllNotes)
})

app.post('/notes', async (req, res) => {
    res.send(await insertNote(req.body))
})

app.delete('/notes/:time', async (req, res) => {
    res.send(await deleteNote(req.params.time))
})




app.listen(`${PORT}`, () => {
    console.log(`Слушаем порт: http://localhost:${PORT}`)
})