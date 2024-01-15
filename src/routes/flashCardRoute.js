const {
  insertNewCardType,
  getAllFlashCardTypes,
} = require("../controller/cardTypeController");

const router = require("express").Router();

router.post("/new_type", insertNewCardType);

router.get("/get_all_types", getAllFlashCardTypes);

module.exports = router;
