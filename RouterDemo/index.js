const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelter');
const dogsRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')

//Creating a route template
app.use('/shelter',shelterRoutes);
app.use('/dogs' , dogsRoutes);
app.use('/admin',adminRoutes); //used middleware in this route http://localhost:3000/admin/deleteeverything?isAdmin=true

app.listen(3000,()=>{
    console.log('Listening to port 3000!');
})

/*
/shelters
post/shelters
/shelters/:Id
/shelters/:Id/edit

/dogs
post/dogs
/dogs/:id
/dogs/:id/edit
*/