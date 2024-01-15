const {
  getAllUsers,
  getUserDetailsByUSerName,
  insertNewUser,
} = require("../service/userService");

const getAllUserDetails = async (req, res) => {
  try {
    if (req.body.user_name) {
      const response = await getUserDetailsByUSerName(req.body.user_name);
      res
        .status(200)
        .send({ data: response, message: "Fetched user", status: 200 });
    } else {
      const response = await getAllUsers();
      res
        .status(200)
        .send({ data: response, message: "Fetched all users", status: 200 });
    }
  } catch (error) {
    res
      .status(500)
      .send({ data: response, message: error.message, status: 500 });
  }
};

const insertNewUserDetails = async (req, res) => {
  const requestBody = req.body;
  try {
    const response = await insertNewUser(requestBody);
    res
      .status(200)
      .send({ data: response, message: "Fetched user", status: 200 });
  } catch (error) {
    res
      .status(500)
      .send({ data: response, message: error.message, status: 500 });
  }
};

module.exports = {
  getAllUserDetails,
  insertNewUserDetails,
};
