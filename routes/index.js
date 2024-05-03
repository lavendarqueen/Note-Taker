// set variables for express and path
const router = require("express").Router();
const path = require("path");

// set variables for api and notes routes
const apiRoutes = require("./api");
const notesRouter = require("./notes");

// Add "/api" prefix to all routes in the api director
router.use("/api", apiRoutes);
// Assign http:localhost:3001/notes route to the notes.js file in the routes folder
router.use("/notes", notesRouter);

module.exports = router;
