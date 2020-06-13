require('dotenv').config()

const express = require('express');
const cors = require('cors')
const server = express();

const hostname = process.env.DB_HOST || '127.0.0.1+';
const port = process.env.PORT || 7777; 


server.get('/', (req,res) => {
    console.log("200: GET request to /")
    const fruits = [ //all this will eventually pulled from the DB instead of hard coded.
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
//handles 404s
server.use(function(req,res){
    res.status(404).send("whatever you just did isn't a thing.")
})

server.listen(port, hostname, () => {
  // start watching for connections on the port specified
  console.log(`Server running at http://${hostname}:${port}/`);
});