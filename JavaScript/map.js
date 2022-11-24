//Map in javascript => It creates new array after iterating the array
/*
const nme = ['anindya','ram','tripathi']

const cap = nme.map(function(t){
    return t.toUpperCase();
})

for(let v of cap){
    console.log(v)
}
console.log("\n")
for(let v of nme){
    console.log(v)
}
*/

const movies = [
    {
        title:'Shawshank Redemption',
        rate:10
    },
    {
        title: 'Godfather',
        rate:9.8
    },
    {
        title:'Forest Gump',
        rate:9.8
    },
    {
        title:'Fight Club',
        rate:9.9
    }
]

const movieList = movies.map(function(t){
    return t.title
})

for(let movie of movieList){
    console.log(movie)
}
















