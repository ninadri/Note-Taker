# Note Taker

## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

The user must install the express packages and start the server using the ƒollowing commands:

```bash
npm i
```

```bash
npm run start
```

## Usage

This application will allow the following API routes to work in INSOMNIA:

- `GET /api/notes` will read the `db.json` file and return all saved notes as JSON.

- `POST /api/notes` will receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. It will give each note a unique id when it's saved.

- `DELETE /api/notes/:id` will receive a query parameter that contains the id of a note to delete. To remove the note, go the the `db.json` file and use the given `id` property, and it will rewrite the notes to the `db.json` file.

## Credits

I had some help from Wesley with tutoring regarding this module and asked Chandler, our TA, for help.

## License

MIT License

---

© Adriana Nino. [Github Repo](https://github.com/ninadri/Note-Taker).
