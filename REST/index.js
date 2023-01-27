const express = require('express');
const app = express();

app.get('/tacos' , (req,res)=>{
    console.log('tacos accessed')
    res.send('/tacos started')
})

app.post('/tacos' , (req,res)=>{
    console.log('this is a post request!')
    const a = {
        reqType: 'POST',
        paths: '/tacos'
    }
    res.send(a.reqType );

})

app.listen(8080 , ()=>{
    console.log("Connected to localhost:/8080 ");
})