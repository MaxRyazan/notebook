import express from 'express'
import cors from "cors"
import router from "./src/routes_backend.js";
const PORT = 8081
const app = express()


app.use(cors({origin: '*'}));
app.use(express.json())
app.use(router)


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})