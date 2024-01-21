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
  const documentCount = await flashCardSchema.countDocuments({
    createdBy: user.username,
  });
  const newCard = {
    question: requestBody.question,
    answer: requestBody.answer,
    cardType: requestBody.card_type,
    createdBy: user.username,
    index: +documentCount + 1,
  };
  await flashCardSchema.create(newCard);
  return {};
};

const getFlashCardByUserName = async (userName) => {
  const query = { createdBy: userName.username };
  const cards = await flashCardSchema.find(query);
  const cardsCount = await flashCardSchema.countDocuments(query);
  return { cards, cardsCount };
};

const getRandomFlashCard = async (userName) => {
  const query = { createdBy: userName.username };
  const randomCard = await flashCardSchema.aggregate(
    [{ $sample: { size: 1 } }],
    query
  );
  return randomCard;
};

module.exports = {
  insertCardType,
  getAllPublishedFlashCardTypes,
  insertNewCard,
  getFlashCardByUserName,
  getRandomFlashCard,
};
