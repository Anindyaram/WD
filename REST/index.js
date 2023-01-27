const express = require('express');
const app = express();

//runs for every request
app.use(express.urlencoded({extended:true}));

app.get('/tacos' , (req,res)=>{
    console.log("get request from /tacos")
    res.send('/tacos started')
})

app.post('/tacos' , (req,res)=>{
    console.log('this is a post request!')
    const a = {reqType: 'POST',paths: '/tacos'}
    res.send(a.reqType );
    console.log(req.body);

})

app.listen(8080 , ()=>{
    console.log("Connected to localhost:/8080 ");
})