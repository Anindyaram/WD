const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/test',)
    .then(()=>{
        console.log("Connection!")
    })
    .catch(err=>{
        console.log("Error ")
        console.log(err)
    })
