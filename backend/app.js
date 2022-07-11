const express=require('express')
const app=express()
const bookRouter=require('./routes/bookRoute')

app.use('/book',bookRouter)


app.listen(process.env.PORT || 5001,(req,res)=>{
    console.log('listenning to port 5001');
})