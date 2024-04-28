const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

app.use(express.static("public"));

app.get("/", (rec, res) => res.send("Navigate to /send or /routes"));

app.get("/send", (req, res) =>
  res.sendFile(path.join(__dirname, "public/send.html"))
);

app.get("/paths", (req, res) =>
  res.sendFile(path.join(__dirname, "public/paths.html"))
);

app.listen(PORT, () => {
  console.log(`App listening AT HTTP://LOCALHOST:${PORT}`);
});
