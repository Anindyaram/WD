const { query } = require("express");
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

//Making pattern for sub paths like subreddit
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params; //extracting parameters
    console.log(req.params);
    res.send(`This is ${subreddit} subreddit 😁`);
    // console.log(req.params);
    // res.send('<h1>This is a subreddit</h1>');
})

//query string in request object
app.get('/search' ,(req,res)=>{
    const { q } = req.query;
    // console.log(req.query);
    if(!q){
        res.send('Nothing searched!!')
    }
    res.send(`<h1>Search result for: ${q}</h1>`);
    // console.log(req.query);
    // res.send('Query String !');
})
// http://localhost:3000/search?q=dog === { q: 'dog' }
// http://localhost:3000/search?q=dog&color=red === { q: 'dog', color: 'red' }

app.post('/about' , (req ,res)=>{
    console.log('we got a post request!!');
    res.send('POST request from /home ')
})

app.get('/about',(req,res)=>{
    console.log("its about section😲");

    res.send("<h1>Anindya Ram Tripathi</h1>");
})

app.get('*' , (req ,res)=>{
    res.send(`I don't know this path`)
})

//connects to the localhost:3000
app.listen(3000,()=>{
    console.log("Listening at port 3000");
}) 

