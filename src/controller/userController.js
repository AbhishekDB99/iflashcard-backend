const getUserDetails = async (req, res) => {
  try {
    console.log("user get" + req.params.id);
    console.log(res.status(code));
    res.send("testing" + " " + req.params.id);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  getUserDetails,
};
