const express = require('express');
const app = express();
const path = require('path');

//runs for every request
app.use(express.urlencoded({extended:true}));
app.use(express.json);
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');

//Adding comments so we can use REST guidelines
const comments = [
    {
        username:'Todd',
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. t?"
    },
    {
        username:'Crude',
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ?"
    },
    {
        username:'Resty',
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ?"
    },
    {
        username:'SEgi',
        comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ?"
    },
    
]

app.get('/comments' , (req , res)=>{
    res.render('comments/index.ejs' , {comments});
})

app.get('/tacos' , (req,res)=>{
    console.log("get request from /tacos")
    res.send('/tacos started')
})

app.post('/tacos' , (req,res)=>{
    console.log('this is a post request!')
    // const a = {reqType: 'POST',paths: '/tacos'}
    res.send('POST');
    // console.log(req.body);

})

app.listen(3000 , ()=>{
    console.log("Connected to localhost:/3000 ");
})

/*
GET /comments - list all comments
POST /comments - create a new comment
GET /comments/:id - geting one comment (using ID)
PATCH /comments/:id - update one comment
DELETE /comments/:id - delete one comment
*/
