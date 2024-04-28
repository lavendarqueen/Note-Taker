const { parse } = require("path");
const router = require("express").Router();
const { readFile, writeFile } = require("fs").promises;

// Routed to http:localhost:3001/api/notes
// declared keys for unique id, title, and text.
router.post("/", async (req, res) => {
  const newNote = {
    id: crypto.randomUUID(),
    title: req.body.title,
    text: req.body.text,
  };

  // read existing database, parse and stringify to parsedDB
  try {
    const existingDB = await readFile("db/db.json");
    const parsedDB = JSON.parse(existingDB);
    parsedDB.push(newNote);
    await writeFile("db/db.json", JSON.stringify(parsedDB));
    res.json("New note successfully saved to database.");
    // check for errors using try/catch
  } catch (err) {
    res.status(500).json(error.message);
  }
});

//  get route checking for errors using try/catch
router.get("/", async (req, res) => {
  try {
    const existingDB = await readFile("db/db.json");
    res.send(existingDB);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// delete note using unique id check for errors using try/catch
router.delete("/:id", async (req, res) => {
  // identify note by unique id, read existingDB parse db using JSON.parse to filter note with id.
  try {
    const noteID = req.params.id;
    const existingDB = await readFile("db/db.json");
    const parsedDB = JSON.parse(existingDB);
    // create new array from parsedDB filtered by id and delete note using writeFile and JSON.stringify
    const newARR = parsedDB.filter((filteredDB) => filteredDB.id !== noteID);
    await writeFile("db/db.json", JSON.stringify(newARR));
    res.send(newARR);
    // check for errors using try/catch
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
