// set up routes
const express = require("express");
const routes = require("/routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening AT HTTP://localhost:${PORT}`);
});
