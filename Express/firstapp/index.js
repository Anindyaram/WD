const express = require("express")
const app = express();
// console.dir(app)

//whenever thier is a request then use runs automatically
app.use((req,res)=>{
    console.log("I got a request 😊");
    // res.status(404).send("I have a bad news for you 43:32:65:23")
    res.send("<h1>Their's a bad news for you guys!!</h1>")
})  

//connects to the localhost:3000
app.listen(3000,()=>{
    console.log("Listening at port 3000");
}) 

