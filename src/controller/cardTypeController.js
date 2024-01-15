const {
  insertCardType,
  getAllPublishedFlashCardTypes,
} = require("../service/cardTypeService");

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

module.exports = {
  insertNewCardType,
  getAllFlashCardTypes,
};
