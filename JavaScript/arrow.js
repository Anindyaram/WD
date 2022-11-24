/*
const nam = x =>{
    console.log(x.toUpperCase());
}

nam('anindya')

const add = (x,y)=>{
    return x+y
}

const rollDice = ()=>{
    return Math.floor(Math.random() * 6) + 1
}
console.log(add(4,32))
console.log(rollDice())
//implicit return by using () in arrow function

const isEven = num =>(
    num%2 == 0
    )
    //or 
    const rllDice = num=> Math.floor(Math.random() *6)+1;
    console.log(isEven(31))
    
    console.log(rllDice())
*/

const movies = [
    {
        title:'Shawshank Redemption',
        rate:9.8
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

const isMovie = movies.map(mov=>console.log(`${mov.title} -  ${mov.rate*10}/100`))

// for(let i of isMovie) console.log(i)












