const express = require("express")
const app = express();
// console.dir(app)

//whenever 
app.use(()=>{
    console.log("I got a request 😊")
})

//connects to the localhost:3000
app.listen(3000,()=>{
    console.log("Listening at port 3000");
}) 

