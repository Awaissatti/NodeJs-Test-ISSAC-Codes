const Test = require("./modules/test.controller");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(Test.solution());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
