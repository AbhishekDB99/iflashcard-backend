const cardTypeSchema = require("../models/FlashCardType");

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

module.exports = {
  insertCardType,
  getAllPublishedFlashCardTypes,
};
