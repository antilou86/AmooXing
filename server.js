require('dotenv').config()
const express = require('express'); 
const server = express(); 
const port = process.env.PORT

//GET request - explaination of request
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

server.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);