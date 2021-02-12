const express = require('express')
const app = express()
 

const UserRouter = require('./routes/User')

app.get('/', function (req, res) {
  res.send('main')
})
 

app.use('/user', UserRouter)

app.listen(3000)
