const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hii Thier!!');
})

app.get('/begin',(req,res)=>{
    res.send('I am here!');
})

app.listen(3000,()=>{
    console.log('Listening at port 3000');
})