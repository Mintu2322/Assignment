const express = require('express');
const app = express();
PORT = 8282;

app.get('/', (req, res) => {
    res.send("Hello This is mintu");
});

app.post('/', (req, res) => {
    const { username, password } =
        req.body;
    res.send({
        username: username,
        password: password
})
});

    // Save Mongo DB

    const loginSchema = mongoose.Schema({
        username: {
          type: String,
          required: true,
          unique: true,
          maxlength: 50
        },
        password: {
          type: String,
          required: true,
          minlength: 8
        }
    })

    
    const connectToDB = async () => {
        mongoose.connect(MONGO_DB_URL,
          err => {
              if(err) throw err;
              console.log('Connected To MongoDB Database');
          });
      }
    connectToDB();

app.listen(console.log("Server running on port", PORT));

