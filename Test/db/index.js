const mongoose = require('mongoose')
const dbURL = 'mongodb+srv://mintu:1234@cluster0.kbuhs3u.mongodb.net/?retryWrites=true&w=majority'

const connectToDB = function async () {
  mongoose.connect(dbURL, (urlERROR) => {
    if (urlERROR) throw urlERROR
    console.log('connect to mongodb database')
  })
}

module.exports = connectToDB