const express = require('express');
const app = express();
const mangoose = require('mangoose');
const PORT = 8000;
const MANGO_DB_URL = 'mongodb+srv://mintu:<2322>@cluster0.rf1iabn.mongodb.net/?retryWrites=true&w=majority';
const connectToDB = async () => {
    mongoose.connect(MANGO_DB_URL,
      err => {
          if(err) throw err;
          console.log('Connected To MongoDB Database');
      });
  }
connectToDB();


app.listen(PORT, function() {
 console.log('Server running on port' + PORT);
});