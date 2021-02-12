const express = require('express')
const router = express.Router()

const routes = ["login","register","checkout"]

router.get('/login',(req,res)=>{
    res.send(routes[0])
})

router.get('/register',(req,res)=>{
    res.send(routes[1])
})

router.get('/checkout',(req,res)=>{
    res.send(routes[2])
})
module.exports = router