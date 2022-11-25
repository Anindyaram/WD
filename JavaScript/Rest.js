// function sum(){
//     return arguments.reduce((total,el)=>total+el)
// }
//error output 

function sum(...nums){
    return nums
}
const num = sum(3,4,6,2,3,4,4,2)
console.log(num)

function raceResults(gold, silver, ...everyoneElse){
    console.log('gold:'+gold)
    console.log('silver:'+silver)
    console.log('Thanks to:'+ everyoneElse)
}
raceResults('dvbdfmkb','sdd','fdfvf','vdfvfd','fvdfv','dsdsv')



