// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];

const server = express();
// to enable parsing of json bodies for post requests
// server.use(express.json());

// TODO: your code to handle requests
server.get('/', (req, res)=>{
    res.status(200).send('Hola Mundo');
})

server.get('/posts/:author/:title/:contents', (req, res)=>{
    var error =  {error: "No se recibieron los parámetros necesarios para crear el Post"}
    console.log(req.params);

/*     if((req.params.hasOwnProperty('author')) &&
        (req.params.hasOwnProperty('title')) &&
        (req.params.hasOwnProperty('contents'))){
        res.send('respuesta');
    }else{
        res.json(error);
    } */

    res.send(`${req.params.author} - ${req.params.title} - ${req.params.contents}`);
})
// http://localhost:3000/posts/author=nombredeautor&title=titulo&contents=contenido


module.exports = { posts, server };
