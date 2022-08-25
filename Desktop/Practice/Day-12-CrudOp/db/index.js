const mongoose = require("mongoose");
const MONGO_DB_URL = 'mongodb+srv://test:1432@cluster0.q6etn12.mongodb.net/?retryWrites=true&w=majority'

const connectToDB = async () => {
  mongoose.connect(MONGO_DB_URL, (err) => {
    if (err) throw err;
    console.log("Connected To MongoDB Database");
  });
};

module.exports = connectToDB;