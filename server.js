const express = require("express");
const path = require("path");
const pageRouter = require("./routes/pages");
const notesRouter = require("./routes/notes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", pageRouter);
app.use("/api", notesRouter);

app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/public/notes.html");
});

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () => {
  console.info(`Server started on http://localhost:${PORT}`);
});
