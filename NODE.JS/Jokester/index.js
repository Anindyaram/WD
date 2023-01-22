// const joke =require('give-me-a-joke')
const oneLinerJoke = require('one-liner-joke')
const color = require('colors')
// const cowsay = require('cowsay') //on CLI run "npm link cowsay" to use  
// console.dir(oneLinerJoke);

// joke.getRandomDadJoke (function(joke) {
//      console.log(joke);
// });

// var category = "knock knock";
// joke.getRandomJokeOfTheDay (category, function(joke) {
//      // NOTE: The service provider has made the restriction of 5 calls an hour for RandomJokeOfTheDay
//     console.log(joke.rainbow);
// });

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body.blue);
