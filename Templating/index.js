const express = require('express')
const path = require('path'); 
const app = express();

app.set('view engine' , 'ejs'); //setting ejs 

//Use to join the paths. So that index.js can access views file even when it is called from outside the current directory 
app.set('views' , path.join(__dirname , '/views'))

app.get('/',(req ,res)=>{
    console.log("Sends the webpage to localhost:3000")
    res.render('home.ejs');
})
//Sending data by templating https://localhost:3000/rand
app.get('/rand' , (req , res)=>{
    console.log('Random page accessed!');
    const num = Math.floor(Math.random()*10)+1; // Data that we are going to send from route to Embedded JavaScript
    res.render('rand.ejs' /*File that we have to access*/ , {num : num}/*Object:key value pair as 2nd argument*/);
})
//created a sub page by using a pattern for pages like https://localhost:3000/subpage
app.get('/r/:subpage' , (req ,res)=>{
    console.log('Entered sub page!');
    const {subpage} = req.params;
    res.render('subpage.ejs' , {subpage});
})

//Connecting to https://localhost:3000/
app.listen(3000 , ()=>{
    console.log('Listening on port 3000');
})
/* 
cd ..
nodemon Templating/index.js 
Error geting to fix we add path

fixing this by adding --
const path = require('path');
app.set('views' , path.join(__dirname , '/views'))
*/ 