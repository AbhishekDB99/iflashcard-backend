require("dotenv").config();

const express = require("express");
const router = require("./src/routes");
const app = express();
const port = process.env.PORT;
const { connectToDatabase } = require("./src/database/index");

connectToDatabase();

app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
