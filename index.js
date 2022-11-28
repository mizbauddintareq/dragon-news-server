const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const catagories = require("./data/categories.json");

app.get("/news-categories", (req, res) => {
  res.send(catagories);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
