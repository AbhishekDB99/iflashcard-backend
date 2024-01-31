const { getHealthStatus } = require("../controller/commonController");

  const router = require("express").Router();
  
  router.get("/healthy", getHealthStatus);
    
  module.exports = router;
  