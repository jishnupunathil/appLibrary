
const express = require('express')
const router = express.Router()





username='admin'
password='1234'


router.post('/',(req,res)=>{
    let userData=req.body
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE")


    // try{

        if(!username){
            res.status(401).send('invalid username')

        }else 
        if(password !== userData.password){
            res.status(401).send('invalid password')
        }else{

            let payload={subject:username+password}
            let token = jwt.sign(payload,'secretKey')
         res.status(200).send({token})   
        }
    })

    module.exports=router