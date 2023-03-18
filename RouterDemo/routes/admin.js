const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next();
    }else{
        res.send('Sorry not an admin')
    }
})

router.get('/topsecret',(req,res)=>{
    res.send('Top secret content')
})

router.get('/deleteeverything',(req,res)=>{
    res.send('Everything is going to be deleted')
})

module.exports = router;