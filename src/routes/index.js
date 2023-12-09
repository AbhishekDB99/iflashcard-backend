const express = require("express");

const router = express.Router();

router.use("/user", require("./userRoutes.js"));

module.exports = router;
