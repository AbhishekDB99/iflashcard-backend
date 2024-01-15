const { authLoginService } = require("../service/authService");

const authLogin = async (req, res) => {
  try {
    const requestBody = req.body;
    const response = await authLoginService(requestBody);
    res
      .status(200)
      .send({ data: response, message: "Login successful", status: 200 });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "Invalid credentials", status: 401 });
  }
};

module.exports = {
  authLogin,
};
