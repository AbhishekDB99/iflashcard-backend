const mongoose = require("mongoose"); // If using Mongoose
// const { MongoClient } = require('mongodb'); // If using the MongoDB driver directly

const uri = process.env.DATABASE_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { connectToDatabase };
