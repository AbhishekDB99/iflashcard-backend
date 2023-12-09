const {
  getAllUsers,
  getUserDetailsByUSerName,
  insertNewUser,
} = require("../service/userService");

const getAllUserDetails = async (req, res) => {
  try {
    if (req.body.user_name) {
      const response = await getUserDetailsByUSerName(req.body.user_name);
      res.status(200).json(response);
    } else {
      const response = await getAllUsers();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const insertNewUserDetails = async (req, res) => {
  const requestBody = req.body;
  try {
    const response = await insertNewUser(requestBody);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUserDetails,
  insertNewUserDetails,
};
