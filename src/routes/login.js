const { authLogin } = require("../controller/authController");

const router = require("express").Router();

router.post("/login", authLogin);

module.exports = router;
