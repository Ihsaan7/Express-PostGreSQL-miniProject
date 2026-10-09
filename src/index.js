import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

import { errorHandler } from "./middlewares/errorHandling.js";
import userRouter from "./routes/user.route.js"
import pool from "./config/db.js";

const app  = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use("/api/v1", userRouter);

// Errors


// DB-Testing
app.get("/db-test", async(req , res)=>
    {
        console.log("Starting...")
        const result = await pool.query("SELECT current_database()")
        console.log("End: Connection sucessful")
        res.send(`The database name is: ${result.rows[0].current_database}`)
    })


// Server Listening
app.listen(PORT , ()=> console.log(`Server is running at ${PORT}`))