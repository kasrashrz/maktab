const express = require('express')
const router = express.Router()
const fs = require('fs')

router.post('/SingleUser',(req,res)=>{
    fs.readFile('Users.json', 'utf8' , function read(err, data) {
        if (err) {
            throw err;
        }
        else{
            if (data === ""){
                console.log('data does not exsist');
              }
            else{
                var arrayobject = JSON.parse(data);
                // console.log(req.params.name)
                    res.send(arrayobject[`${req.body.name}`])
                }
        }
})
})

router.get('/test',(req,res)=>{
    res.send('test')
})
module.exports = router