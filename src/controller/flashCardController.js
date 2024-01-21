const {
  insertCardType,
  getAllPublishedFlashCardTypes,
  insertNewCard,
  getFlashCardByUserName,
  getRandomFlashCard,
} = require("../service/flashCardService");

const insertNewCardType = async (req, res) => {
  try {
    const requestBody = req.body;
    const response = await insertCardType(requestBody, req.user);
    res
      .status(200)
      .send({ data: response, message: "Inserted successfully", status: 200 });
  } catch (error) {
    res.status(401).send({ message: "Error inserting", status: 401 });
  }
};

const getAllFlashCardTypes = async (req, res) => {
  try {
    const response = await getAllPublishedFlashCardTypes();
    res
      .status(200)
      .send({ data: response, message: "Fetched successfully", status: 200 });
  } catch (error) {
    res.status(401).send({ message: "Error fetching", status: 401 });
  }
};

const insertANewCard = async (req, res) => {
  try {
    const requestBody = req.body;
    const response = await insertNewCard(requestBody, req.user);
    res
      .status(200)
      .send({ data: response, message: "Inserted Successfully", status: 200 });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "Error inserting" });
  }
};

const getFlashCardByUserNames = async (req, res) => {
  try {
    const response = await getFlashCardByUserName(req.user);
    res.status(200).send({ data: response, message: "Fetched", status: 200 });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "Error", status: 401 });
  }
};

const getRandomFlashCardByUserName = async (req, res) => {
  try {
    const response = await getRandomFlashCard(req.user);
    res.status(200).send({
      data: response,
      message: "Cards fetched successfully",
      status: 200,
    });
  } catch (error) {
    res.status(401).send({ message: "Error fetching cards", status: 401 });
  }
};

module.exports = {
  insertNewCardType,
  getAllFlashCardTypes,
  insertANewCard,
  getFlashCardByUserNames,
  getRandomFlashCardByUserName,
};
