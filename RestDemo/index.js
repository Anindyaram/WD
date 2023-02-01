const express = require('express');
const app = express();
const path = require('path');
const { v4 : uuidv4 } = require('uuid');
uuidv4();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('views',path.join(__dirname , 'views'));
app.set('view engine','ejs');

let comments = [
    {
        id:uuidv4(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {   
        id:uuidv4(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id:uuidv4(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id:uuidv4(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/' , (req,res)=>{
    res.send('Go To comments')
})

//Rendering the index js
app.get('/comments' , (req,res)=>{
    res.render('comments/index' , {comments});
})
//Creating the new comment by renering the new.ejs and sending to /comments
app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})
//Here we will come after making new comment and comment will be extracted and added by this 
app.post('/comments' , (req,res)=>{
    // console.log(req.body)
    const {username , comment} = req.body
    comments.push({username,comment ,id:uuidv4()});
    // res.send("IT WORKED!"); this is send first if we will uncomment and redirection will not work
    res.redirect('/comments');
})

app.get('/comments/:id' , (req ,res)=>{
    const { id } = req.params;
    //used parseInt because req.params gives string as output
    // const comment = comments.find(c => c.id === parseInt(id));
    //as we are using UUIDV4 so we don't need to parse it into int as it give it as Default
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment});
})

//This is how we will process data 
app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})


app.listen(3000 , ()=>{
    console.log('Listening to port 3000!');
})

/*
BASIC RESTfull Route -
GET /cmoments        =  list all comments               - index route
POST /comments       =  create a new comment            - create route 
GET /comments/:id    =  get one comment (using ID)      - show route
PATCH /comments/:id  =  update one comment              - update route
delete /comments/:id =  delete one comment              - delete route
*/

