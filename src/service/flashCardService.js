const cardTypeSchema = require("../models/FlashCardType");
const flashCardSchema = require("../models/FlashCard");

const insertCardType = async (requestBody, user) => {
  const newType = {
    cardType: requestBody.card_type,
    isPublished: requestBody.is_publish,
    createdBy: user.username,
  };
  await cardTypeSchema.create(newType);
  return {};
};

const getAllPublishedFlashCardTypes = async () => {
  const query = { isPublished: "true" };
  const data = await cardTypeSchema.find(query, "-_id");
  return data;
};

const insertNewCard = async (requestBody, user) => {
  const newCard = {
    question: requestBody.question,
    answer: requestBody.answer,
    cardType: requestBody.card_type,
    createdBy: user.username,
  };
  await flashCardSchema.create(newCard);
  return {};
};

const getFlashCardByUserName = async (userName) => {
  const query = { createdBy: userName.username };
  const cards = await flashCardSchema.find(query);
  return cards;
};

module.exports = {
  insertCardType,
  getAllPublishedFlashCardTypes,
  insertNewCard,
  getFlashCardByUserName,
};
