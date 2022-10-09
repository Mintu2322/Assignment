const UserModel = require('../models/User.model')
const LoginModel = require('../models/Login.model')
async function loginUser (req, res) {
  const existUser = new LoginModel(req.body)

  const usernameExists = await UserModel.findOne({ username: req.body.username })
  const passwordExists = await UserModel.findOne({ password: req.body.password })

  if (usernameExists && passwordExists) {
    res.status(400).send('Username already exists')
    throw new Error('Username and password already exists')
  } else if (usernameExists) {
    res.status(400)
    throw new Error('Username already exists')
  } else if (passwordExists) {
    res.status(400)
    throw new Error('password already exists')
  } else {
    try {
      await existUser.save()
      res.send({ message: 'user details updated successfully' })
    } catch (error) {
      res.send({ message: error })
    }
  }
}

module.exports = { loginUser }
