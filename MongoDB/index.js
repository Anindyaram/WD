const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.set('useFindAndModify',false);
//connecting to the database running in the background
mongoose.connect('mongodb://127.0.0.1:27017/movieApp',)
    .then(()=>{
        console.log("Connection!")
    })
    .catch(err=>{
        console.log("Error ")
        console.log(err)
    })

//Created an instance of schema design
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating:String
});

//Created a model of the above instance
const Movie = mongoose.model('Movie' ,movieSchema);

//Entered data into the above model but we have to run amadeus.save() to send in mongo
// const amadeus = new Movie({title:'Amadeus',year:1988 ,score:9.2 ,rating:'R'});
/*
//Entered the multiple data in mongo and it is saved automatically
Movie.insertMany([
    {title:'Amadeus',year:1980 ,score:9.2 ,rating:'R'},
    {title:'Amade',year:1989 ,score:8.2 ,rating:'R'},
    {title:'madeu',year:1990 ,score:8.6 ,rating:'R'},
    {title:'adeu',year:1999 ,score:8.4 ,rating:'R'}
])
*/


//run mongod in background 
// run node 
// inside node -> .load index.js(this will run index.js)
// we can access instances like amadeus
//type amadeus.save() ->to save the amadeus instance to mongo
//now go to powershell and run mongosh (which is mongo shell)
//inside mongosh now we see amadeus data