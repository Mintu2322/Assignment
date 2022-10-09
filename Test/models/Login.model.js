const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 30
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
})

const LoginModel = mongoose.model('LoginModel', loginSchema)
module.exports = LoginModel