
const express = require('express');

const hostname = '127.0.0.1'; // the local computer where the server is running
const port = process.env.PORT || 7777; // a port we'll use to watch for traffic

const server = express();

server.get('/', (req,res) => {
    console.log("200: GET request to /")
    const fruits = [ //all this will eventually pulled from the DB
        {
            id: 1, 
            name: "Peach"
        },
        {
            id: 2, 
            name: "Pear"
        }
    ] 
    res.status(200).json({fruits, message:"Yup, it's working.."})
})

server.listen(port, hostname, () => {
  // start watching for connections on the port specified
  console.log(`Server running at http://${hostname}:${port}/`);
});