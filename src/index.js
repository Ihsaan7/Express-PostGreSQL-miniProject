import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();
const app  = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(cors())

// Routes

// Errors

// Server Listening
app.listen(PORT , ()=> console.log(`Server is running at ${PORT}`))