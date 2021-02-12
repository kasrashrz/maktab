const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/getAllUsers',(req,res)=>{
   res.send(fs.readFileSync('Users.json'))
})

module.exports = router