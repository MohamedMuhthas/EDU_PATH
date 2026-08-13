const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { MongoMemoryServer } = require('mongodb-memory-server');

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    let uri = MONGO_URI;
    if (!uri) {
      // Fall back to in-memory MongoDB for local dev/tests when MONGO_URI is not provided
      const mongod = await MongoMemoryServer.create();
      uri = mongod.getUri();
      console.log('Using in-memory MongoDB for development/testing');
    }

    await mongoose.connect(uri, {
      // mongoose 7+ no longer needs useNewUrlParser/useUnifiedTopology options
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
