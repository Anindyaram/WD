const express = require('express')
const path = require('path');
const app = express();

app.set('view engine' , 'ejs'); //setting ejs 

app.set('views' , path.join(__dirname , '/views'))

app.get('/',(req ,res)=>{
    console.log("Sends the webpage to localhost:3000")
    res.render('home.ejs');
})
//Sending data by templating
app.get('/rand' , (req , res)=>{
    console.log('Random page accessed!');
    const num = Math.floor(Math.random()*10)+1;
    res.render('subpage.ejs' , {rand : num});
})
//created a sub page by using a pattern for pages like https://localhost:3000/subpage
app.get('/:pages' , (req ,res)=>{
    console.log('Entered sub page!');
    res.send('Sorry This Sub Page is not available');
})

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