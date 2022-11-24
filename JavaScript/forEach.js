const nam = [0,1,2,3,4,5,6,7,8,9];
/*
function print(num){
    console.log(num)
}
nam.forEach(print)

nam.forEach(function(k){
    if(k%2 == 0){
        console.log(k);
    }
})

*/
//object as an array

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

movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.rate}/10`)
})



















