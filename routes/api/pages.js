const pageRouter = require("express").Router();
const path = require("path");

// Sets up a route to handle GET request for /index
pageRouter.get("/index", (req, res) => {
  // when request is made, the server sends back the index.html file
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// Sets up a route to handle GET request for /notes
pageRouter.get("/notes", (req, res) => {
  // when request is made, the server sends back the notes.html file
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = pageRouter;
