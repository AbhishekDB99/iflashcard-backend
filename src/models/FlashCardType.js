const mongoose = require("mongoose");

const cardTypeSchema = new mongoose.Schema({
  cardType: {
    type: String,
    required: true,
  },
  isPublished: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("flashcard-types", cardTypeSchema);
