const express = require('express')
const { loginUser } = require('../controller/login.controller')

const loginRoutes = express.Router()
loginRoutes.post('/add', loginUser)
loginRoutes.get('/datalogin', loginUser)
loginRoutes.put('/edit/:id', loginUser)
loginRoutes.delete('/new data/:id', loginUser)


module.exports = loginRoutes
