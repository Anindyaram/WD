const express = require('express');
const morgan = require('morgan');
const AppError = require('./AppError')
const app = express();

app.use(morgan('tiny'));
//My middleware to get method
app.use((req,res,next)=>{
    // req.method = 'GET'; This is making every request get request
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase() , req.path );
    next();
})

app.use('/dogs',(req,res,next)=>{
    console.log('Dogs');
    next();
})
/*
This runs for every route 
app.use((req,res,next)=>{
    const {password} = req.query;
    if(password === 'enticing'){
        next();
    }
    res.send('Enter Correct password')
})
*/
//middleware can be used in any route as callback 
const verifyPassword = (req,res,next)=>{
    const {password} = req.query;
    if(password === 'enticing'){
        next();
    }
    // res.send('Enter Correct password')
    // error handeling
    // res.status(401);
    // throw new Error('Password Required')
    throw new AppError('Password Required' , 401);
}

app.get('/',(req,res)=>{
    console.log(`REQUEST DATE ${req.requestTime}`)
    res.send('Hii Thier!!');
})

app.get('/dogs',(req,res)=>{
    console.log(`REQUEST DATE ${req.requestTime}`)
    res.send('I am here!');
})
//Using middleware as callback function in the route to verify the query string 
app.get('/secret',verifyPassword,(req,res)=>{
    res.send('SEcret Revealed!!');

})

app.get('/error',(req,res)=>{
    error.fly();
})

//If none of the routes are matching then this will run
app.use((req,res)=>{
    res.status(404).send('NOT FOUND!');
})

//Error handeler made by me
app.use((err ,req ,res ,next )=>{
    console.log("**********************************************")
    console.log("********************Error*********************")
    console.log("**********************************************")
    // res.status(500).send('Theirs an error please try again')
    //if we want other error handeler then we pass err in next();
    console.log(err)
    next(err);
})


app.listen(3000,()=>{
    console.log('Listening at port 3000');
})