const express = require("express")
const app = express();
// console.dir(app)

//whenever thier is a request then use runs automatically
// app.use((req,res)=>{
//     console.log("I got a request 😊");
//     // res.status(404).send("I have a bad news for you 43:32:65:23")
//     res.send("<h1>Their's a bad news for you guys!!</h1>")
// })  
app.get('/', (req,res)=>{
    console.log("here comes the home page!");
    res.send({name:'Prince'});
})

app.post('/about' , (req ,res)=>{
    console.log('we got a post request!!');
    res.send('POST request from /home ')
})

app.get('/about',(req,res)=>{
    console.log("its about section😲");

    res.send("<h1>Anindya Ram Tripathi</h1>");
})

//connects to the localhost:3000
app.listen(3000,()=>{
    console.log("Listening at port 3000");
}) 

