const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  console.log("inside");
  const jwtSecret = config.get("jwtSecret");
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: "Invalid token!!", status: 401 });
  } else {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }

      req.user = decoded; // Attach the decoded payload to the request
      next();
    });
  }
};

module.exports = verifyToken;
