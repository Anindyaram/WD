const express = require('express');
const router = express.Router()

router.get("/new",(req,res)=>{
    res.send("Bob Driwedi!")
    console.log("bobs name")
})

module.exports = router;

