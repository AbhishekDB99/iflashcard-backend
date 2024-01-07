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
  const allUsers = await getAllUsers()
  console.log(allUsers);
  const isUserFound = allUsers.filter((user)=>user.username == requestBody.user_name)
  if(isUserFound.length>0){
    return{message:"User with the username already exists!!!"}
  }else{
    const newUser = await userSchema.create({
      username: requestBody.user_name,
      email: requestBody.email,
      age: requestBody.age,
    });
    return newUser;
  }
};

module.exports = {
  getAllUsers,
  getUserDetailsByUSerName,
  insertNewUser,
};
