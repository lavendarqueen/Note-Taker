// set variables for express and path
const router = require("express").Router();
const path = require("path");

// Get notes.html file
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

module.exports = router;
