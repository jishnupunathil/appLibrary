const express=require('express')
const app=express()
const bookRouter=require('./routes/bookRoute')
const loginRouter=require('./routes/loginRoute')
const bodyParser=require('body-parser')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json())
app.use('/books',bookRouter)
app.use('/login',loginRouter)







app.listen(process.env.PORT || 5001,(req,res)=>{
    console.log('listenning to port 5001');
})