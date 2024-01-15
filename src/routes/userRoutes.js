const {
  getAllUserDetails,
  insertNewUserDetails,
} = require("../controller/userController");

const router = require("express").Router();

router.post("/", getAllUserDetails);

router.post("/new_user", insertNewUserDetails);

module.exports = router;
