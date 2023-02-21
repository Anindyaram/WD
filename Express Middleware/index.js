const express = require('express');
const morgan = require('morgan');
const app = express();
/*This will run on every request and log info will be printed on the terminal
Morgan is a predefine middleware 
*/
// app.use(morgan('common'));
// app.use(morgan('tiny'));
app.use(morgan('dev'));
//Middleware defined by me
app.use((req,res,next)=>{
    console.log("This is my first middleware!");
    return next();//This tells what to do after the above completes.Goes to next matching thing
    console.log('This is middleware after first middleware!')
})
app.use((req,res,next)=>{
    console.log('This is my second middleware!');
    next();//This will call next mathing thing 
})
app.use((req,res,next)=>{
    console.log('This is my third middleware!');
    next();//This will call next mathing thing 
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