const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`This server is running ....`);
});

app.post("/", (req, res) => {
  res.send(`This server is my about route`);
});

module.exports = app;

// the below code fragment can be found in:
