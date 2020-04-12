require('dotenv').config()

//setup
const express = require('express'); 
const server = express();
const router = express.Router()
const port = process.env.PORT || 7777

//middleware for auth
server.use(require("cors")());
server.use(require("helmet")());
server.use(express.json());

//test endpoint
server.get("/", (req, res) => {
    console.log("did this fire?")
    res.status(200).json("Yup, it working..");
  });

//routers
server.use(require("./endpoints/routers/users"));
//server.use(require("./endpoints/routers/images"));   <--for future use


// Admin only routes
const validate = require("./endpoints/middleware/validate");
server.use(validate.token, validate.admin);
// server.use(require("./endpoints/routers/whatever_route"));


//GET request
server.get('/hobbits', (req, res) => {
    // query string parameters get added to req.query
    const sortField = req.query.sortby || 'id';
    const hobbits = [ { id: 1, name: 'Samwise Gamgee', }, { id: 2, name: 'Frodo Baggins', },];
    // apply the sorting
    const response = hobbits.sort( (a, b) => (a[sortField] < b[sortField] ? -1 : 1) );
    res.status(200).json(response);
  });

//POST request - user creation and initial profile generation
server.post('/hobbits', (req, res) => {
    res.status(201).json({ url: '/hobbits', operation: 'POST' });
  });

//PUT request - probably use this for updating fruits. probably need another one for turnips
server.put('/hobbits', (req, res) => {
    res.status(200).json({ url: '/hobbits', operation: 'PUT' });
  });

//DELETE request - to delete the user?
server.delete('/hobbits', (req, res) => {
    res.status(204);
  });

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json(err);
});

server.listen(port, () =>
  console.log(`Server running on localhost:${port}`)
)