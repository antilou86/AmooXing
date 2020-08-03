require('dotenv').config()

//setup
const express = require('express'); 
const server = express();
const router = express.Router()
const port = process.env.PORT || 7777

//db pool
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

//middleware for auth
server.use(require("cors")());
server.use(require("helmet")());
server.use(express.json());

//test endpoint
server.get("/", (req, res) => {
    console.log("SUCCESSFUL GET TO '/' ")
    res.status(200).json("Yup, it's working..");    
  });

//create a db endpoint for checking test_tables
server.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

//routers
server.use(require("./endpoints/routers/users"));
server.use(require("./endpoints/routers/fish"));
server.use(require("./endpoints/routers/bugs"));
// server.use(require("./endpoints/routers/diys"));
// server.use(require("./endpoints/routers/flowers"));
// server.use(require("./endpoints/routers/materials"));
// server.use(require("./endpoints/routers/villagers"));

//Get all bugs and fish
const sellables_module = require("./endpoints/models/sea_critters")
// const validate_token = require("./endpoints/middleware/validate").token;
server.get("/sellables", async (req, res) => {
    try {
        const ret_list = await sellables_module.get_all_fish_sea_critters_and_bugs()
        ret_list.length > 0 
          ? res.status(200).json(ret_list)
          : res.status(500).json({message: "Server error while collecting information. please contact administrator"})
        } catch (err) {
      throw err
    }
})

const villagers_module = require("./endpoints/models/villagers")
server.get("/villagers", async (req, res) => {
  try {
      const ret_list = await villagers_module.get_all_villagers()
      ret_list.length > 0 
        ? res.status(200).json(ret_list)
        : res.status(500).json({message: "Server error while collecting information. please contact administrator"})
      } catch (err) {
    throw err
  }
})
// Admin only routes
const validate = require("./endpoints/middleware/validate");
server.use(validate.token, validate.admin);
// server.use(require("./endpoints/routers/whatever_route"));

// //POST request - user creation and initial profile generation
// server.post('/hobbits', (req, res) => {
//     res.status(201).json({ url: '/hobbits', operation: 'POST' });
//   });

// //PUT request - probably use this for updating fruits. probably need another one for turnips
// server.put('/hobbits', (req, res) => {
//     res.status(200).json({ url: '/hobbits', operation: 'PUT' });
//   });

// //DELETE request - to delete the user?
// server.delete('/hobbits', (req, res) => {
//     res.status(204);
//   });

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json(err);
});

server.listen(port, () =>
  console.log(`Server running on port:${port}`)
)