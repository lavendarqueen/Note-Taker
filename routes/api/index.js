const router = require("express").Router();
const noteRoutes = require("./notes");

//Prefix all routes defined in "notes.js" with "/notes"
//http://localhost:3001/api/notes
router.use("/notes", noteRoutes);

module.exports = router;
