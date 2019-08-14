const express = require("express");
const path = require("path");

const app = express();
const port = 5555;

app.use(express.static(path.resolve(__dirname, "build")));

app.listen(port, () => {
  console.log(`Listening of port ${port}`);
});
