// const scores =[123,435,645,7678,35345,5464,4535,324,656,787]

// const highScore = scores[0]
// const secondHighScore = scores[1]
//             //or
// const [gold, silver,bronge,...everyoneElse] = scores;
// console.log(gold)
// console.log(silver)
// console.log(bronge)
// console.log(everyoneElse)

//destructuring objects
// const movies = {
//     title:'fight club',
//     rating:'9.5',
//     imdb:'8.8',
//     director:'David Fincher',
//     cast:'Edward Notan and Brad Pitt'
// }
// const {title , rating , imdb,...details}=movies;
// console.log(title)
// console.log(rating)
// console.log(imdb)
// console.log(details)
// const{cast:hero}=movies
// console.log(hero)

//Destructuring params

const user ={
    email:'asncdisncs@gmail.com',
    firstName:'Anindya',
    lastName:'Tripathi',
    born:'2099',
    city:'kyiv',
    country:'Ukraine'
}
// function fullName(user){
//     const {firstName , lastName } = user;
//     return `${firstName} ${lastName}`
// }
//or
// function fullName({firstName , lastName  }){
//     return `${firstName} ${lastName}`
// }
// console.log(fullName(user))

const movies = [
    {
        title:'Shawshank Redemption',
        rate:9.8
    },
    {
        title: 'Godfather',
        rate:9.5
    },
    {
        title:'Forest Gump',
        rate:9.2
    },
    {
        title:'Fight Club',
        rate:8.8
    }
]

// movies.filter((movies)=>movies.rate >=9)
// movies.filter(({rate})=> rate>=9)
movies.map(movie => {
    return `${movie.title} is rated (${movie.rate}) `
})
//or 
movies.map(({title,rate}) => {
    return `${title} is rated (${rate}) `
})







