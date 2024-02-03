// const express = require("express");

// const router = express.Router();

// router.use("/auth", require("./login.js"));

// router.use(require("../middleware/tokenVerification.js"));

// router.use("/user", require("./userRoutes.js"));

// module.exports = router;

const routes = (app) => {
  app.use("/auth", require("./login.js"));

  app.use("/public", require("./public.js"));

  const tokenVerification = require("../middleware/tokenVerification.js");

  app.use(tokenVerification);

  app.use("/user", require("./userRoutes.js"));

  app.use("/flash_card", require("./flashCardRoute.js"));
};

module.exports = routes;
