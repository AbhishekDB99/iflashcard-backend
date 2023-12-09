const userSchema = require("../models/User");

const getAllUsers = async () => {
  const users = await userSchema.find();
  return users;
};

const getUserDetailsByUSerName = async (userName) => {
  const userDetail = await userSchema.find({ username: userName });
  return userDetail;
};

const insertNewUser = async (requestBody) => {
  const newUser = await userSchema.insertOne({
    username: requestBody.user_name,
    email: requestBody.email,
    age: requestBody.age,
  });
  return newUser;
};

module.exports = {
  getAllUsers,
  getUserDetailsByUSerName,
  insertNewUser,
};
