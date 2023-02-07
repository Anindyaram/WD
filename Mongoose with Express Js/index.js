const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGODB CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname ,'views'));
app.set('view engine' ,'ejs');

app.get('/crud',(req ,res)=>{
    res.send('Hello Crud is here!')
})

app.listen(3000, ()=>{
    console.log("Connected to port 3000");
})

