require("dotenv").config();
var cors = require('cors')
const config = require("config");
global.config = config;

const express = require("express");
// const router = require("./src/routes");
const indexRouter = require("./src/routes");

const app = express();
const port = process.env.PORT;
const { connectToDatabase } = require("./src/database/index");

app.use(cors())

connectToDatabase();

app.use(express.json());
// app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
indexRouter(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
