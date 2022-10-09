const UserModel = require('../models/User.model.js')
async function loginPost (req, res) {
  const newUser = new UserModel(req.body)

  try {
    const usernameExists = await UserModel.findOne({ username: req.body.username })
    const emailExists = await UserModel.findOne({ email: req.body.email })
    console.log(usernameExists, emailExists)

    if (usernameExists && emailExists) {
      res.status(400).send('Username already exists')
      throw new Error('Username and email already exists')
    } else if (usernameExists) {
      res.status(400)
      throw new Error('Username already exists')
    } else if (emailExists) {
      res.status(400)
      throw new Error('Email already exists')
    } else {
      try {
        await newUser.save()
        res.send({ message: 'user details updated successfully' })
      } catch (error) {
        res.send({ message: error })
      }
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = { loginPost }
