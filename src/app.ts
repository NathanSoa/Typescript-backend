import express from "express"
import { movieRouter } from "./Routes/MovieRouter"

const app = express()

app.use(express.json())
app.use(movieRouter)

export { app }