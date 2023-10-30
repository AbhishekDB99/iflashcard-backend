const mongoose = require('mongoose'); // If using Mongoose
// const { MongoClient } = require('mongodb'); // If using the MongoDB driver directly

const uri = 'mongodb://0.0.0.0:27017/iflashcard';

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = { connectToDatabase };
