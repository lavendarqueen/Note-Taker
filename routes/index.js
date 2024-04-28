// set variables for express and path
const router = require("express").Router();
const path = require("path");

// set variables for api and notes routes
const apiRoutes = require("./api");
const notesRoutes = require("./notes");

// Add "/api" prefix to all routes in the api director
router.use("/api", apiRoutes);
// Assign http:localhost:3001/notes route to the notes.js file in the routes folder
router.use("/notes", notesRouter);

// Get index.html file
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = router;
