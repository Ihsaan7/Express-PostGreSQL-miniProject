import "dotenv/config";
import pkg from "pg"
const {Pool} = pkg

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DBPORT
})  

pool.on("Connected", ()=> console.log("Connection to DB established!"))

export default pool