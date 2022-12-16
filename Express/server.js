const express = require("express")
const rout = require("./router/index.js") 

const app = express()

app.get("/",(req,res)=>{
    console.log("Here");
    res.send("Life is moving with slow pace!!")
})

app.use('/index',rout)

app.listen(3000)




