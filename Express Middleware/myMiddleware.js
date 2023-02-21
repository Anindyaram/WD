const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));
//My middleware to get method
app.use((req,res,next)=>{
    // req.method = 'GET'; This is making every request get request
    console.log(req.method.toUpperCase() , req.path );
    next();
})

app.get('/',(req,res)=>{
    res.send('Hii Thier!!');
})

app.get('/begin',(req,res)=>{
    res.send('I am here!');
})

app.listen(3000,()=>{
    console.log('Listening at port 3000');
})