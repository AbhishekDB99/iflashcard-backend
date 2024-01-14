const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { getUserDetailsByUSerName } = require("./userService");

const authLoginService = async (requestBody) => {
  const userDetails = await getUserDetailsByUSerName(requestBody.username);

  const isPasswordCheck = await bcrypt.compare(
    requestBody.password,
    userDetails[0].password
  );
  if (isPasswordCheck) {
    const payload = {
      username: requestBody.username,
    };
    const options = {
      expiresIn: "24h",
    };
    return jwt.sign(payload, config.get("jwtSecret"), options);
  } else {
    return { message: "Password Invalid" };
  }
};

module.exports = {
  authLoginService,
};
