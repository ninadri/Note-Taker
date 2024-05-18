const express = require("express");
const path = require("path");
const pageRouter = require("./routes/api/pages");
const notesRouter = require("./routes/api/notes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(pageRouter);
app.use("/api/notes", notesRouter);

// GET route for Homepage
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/assets/index.html"))
);

app.listen(PORT, () => {
  console.info(`Server started on http://localhost:${PORT}`);
});
