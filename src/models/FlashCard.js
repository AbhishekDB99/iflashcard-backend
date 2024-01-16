const mongoose = require("mongoose");

const flashCardSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  answer: {
    type: String,
    require: true,
  },
  flashCardType: {
    type: String,
    require: true,
  },
  createdBy: {
    type: String,
    require: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
    require: false,
  },
});

module.exports = mongoose.model("flashcard", flashCardSchema);
