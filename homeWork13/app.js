const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const UserRouter = require('./routes/User')
const AdminRouter = require('./routes/Admin')

app.use('/user', UserRouter)
app.use('/admin', AdminRouter)


app.listen(3000)
