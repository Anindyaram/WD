const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/movieApp',)
    .then(()=>{
        console.log("Connection!")
    })
    .catch(err=>{
        console.log("Error ")
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating:String
});

const Movie = mongoose.model('Movie' ,movieSchema);
const amadeus = new Movie({title:'Amadeus',year:1988 ,score:9.2 ,rating:'R'});


//run mongod in background 
// run node 
// inside node -> .load index.js(this will run index.js)
// we can access instances like amadeus
//type amadeus.save() ->to save the amadeus instance to mongo
//now go to powershell and run mongosh (which is mongo shell)
//inside mongosh now we see amadeus data