const express = require('express')
const { loginPost } = require('../controller/user.controller')
const routes = express.Router()

routes.post('/add', loginPost)
routes.get('/datasignup', loginPost)
routes.put('/edit/:id', loginPost)
routes.delete('/new data/:id', loginPost)

module.exports = routes
