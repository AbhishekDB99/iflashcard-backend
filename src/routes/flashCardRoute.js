const {
  insertNewCardType,
  getAllFlashCardTypes,
  insertANewCard,
  getFlashCardByUserNames,
  getRandomFlashCardByUserName,
} = require("../controller/flashCardController");

const router = require("express").Router();

router.post("/new_type", insertNewCardType);

router.get("/get_all_types", getAllFlashCardTypes);

router.post("/new_card", insertANewCard);

router.get("/card_by_username", getFlashCardByUserNames);

router.get("/random_card", getRandomFlashCardByUserName);

module.exports = router;
