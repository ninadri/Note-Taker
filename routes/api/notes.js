const notesRouter = require("express").Router();
const uuid = require("../../helpers/uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../../helpers/fsUtils");

// GET route for retrieving all the notes
notesRouter.get("/", (req, res) =>
  readFromFile("./db/notes.json").then((data) => res.json(JSON.parse(data)))
);

// POST route for submitting a new note
notesRouter.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, "./db/notes.json");
    res.json(`Note added successfully`);
  } else {
    res.error("Error in adding nope");
  }
});

// DELETE for deleting a note by it's id
notesRouter.delete("/:note_id", (req, res) => {
  const noteId = req.params.note_id;
  readFromFile("./db/notes.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id !== noteId);

      writeToFile("./db/notes.json", result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});

module.exports = notesRouter;
