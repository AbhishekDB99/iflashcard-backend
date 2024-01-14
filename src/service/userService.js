const bcrypt = require("bcrypt");
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
  const allUsers = await getAllUsers();
  const isUserFound = allUsers.filter(
    (user) => user.username == requestBody.user_name
  );
  if (isUserFound.length > 0) {
    return { message: "User with the username already exists!!!" };
  } else {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(requestBody.password, saltRound);

    const newUser = {
      username: requestBody.user_name,
      email: requestBody.email,
      age: requestBody.age,
      password: hashedPassword,
    };

    await userSchema.create(newUser);
    return {};
  }
};

module.exports = {
  getAllUsers,
  getUserDetailsByUSerName,
  insertNewUser,
};
