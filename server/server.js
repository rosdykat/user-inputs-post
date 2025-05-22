// imports // This is our template server setup ====================

import express, { response } from "express"
import pg from "pg"
import dotenv from "dotenv"
import cors from "cors"

// configs

const app = express()
app.use(express.json()) //Allows server to understand json data
// by adding cors to our server, we allow resources (data) to reach our server to be processed, even if they come from a different origin
app.use(cors());
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

app.listen(8080, ()=>{
    console.log("Server is running on port 8080")
});

// root route
app.get("/", (request, response) =>{
    response.json({message: "Welcome to my server. This is the root route!"})
});

app.post("/messages", express.json(), (req, res) => {
    const body = req.body;
  console.log(body);
  const query = db.query(
    `INSERT INTO messages (message) VALUES ($1)`,
    [body.message]
  );
  res.json(query);
});

// // TODO: to set up a route to READ data from the database
// app.get("/staff", async (req, res)=> {
//     //query the database
//     const query = db.query(`SELECT * FROM messages`);
//     // parse the query into JSON
//     const data = res.json(query.rows);
//     console.log(data);
// });