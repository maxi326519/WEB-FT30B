// const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [
  { author: "first author", title: "first title", contents: "contents" },
  { author: "second author", title: "second", contents: "hello" },
  { author: "third author", title: "third title", contents: "contents" },
];

var id = 0;

const server = express();
// to enable parsing of json bodies for post requests
// server.use(express.json());

// TODO: your code to handle requests
server.use(express.json());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.status(200).send("Hola Mundo");
});

// POST /posts
server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;

  if (author && title && contents) {

    let obj = {
      author: req.body.author,
      title: req.body.title,
      contents: req.body.contents,
      id: id++
    }

    posts.push(obj);

    res.json(obj);
    
  } else {
    res.status(422).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  }
});

// POST /posts/author/:author
server.post("/posts/author/:author", (req, res) => {
  const { author } = req.params;
  const { title, contents } = req.body;

  if (author && title && contents) {
    let obj = {
      author: author,
      title: title,
      contents: contents,
      id: id++
    };

    posts.push(obj);
    res.json(obj);
  } else {
    res.status(422).json({
        error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  }
});

// GET /posts
server.get("/posts", (req, res) => {
  const { term } = req.query;

  if(term){
    var post = posts.filter( e =>
      e.title.toLowerCase().includes(term.toLowerCase()) ||
      e.contents.toLowerCase().includes(term.toLowerCase()))

    res.json(post);
  }else{
    res.json(posts);
  }
});

module.exports = { posts, server };