const express = require('express')
const app = express()
const connectToDB = require('./db')
const loginRoutes = require('./routes/login.routes')
const routes = require('./routes/user.routes')
const PORT = 8000

connectToDB()

app.use(express.json())

app.use('/mintu', routes)
app.use('/mintunagar', loginRoutes)
app.listen(PORT, console.log('Server is listening on port', PORT))
