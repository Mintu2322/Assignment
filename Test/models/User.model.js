
const mongoose = require('mongoose')

const signinSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    maxlength: 50
  },
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
})

const UserModel = mongoose.model('UserModel', signinSchema)
module.exports = UserModel
