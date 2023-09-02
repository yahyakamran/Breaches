const mongoose = require("mongoose");

// Connect to your Atlas cluster

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error is in DB : ${error.message}`);
    process.exit();
  }
}

module.exports = connectDB;
