// src/data/createUserTable.js
import pool from "../config/db.js";

const createUserTable = async () => {
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      );
    `;
    await pool.query(query);
    console.log("User table created");
  } catch (error) {
    console.error("Error creating user table:", error);
  }
};

export default createUserTable;