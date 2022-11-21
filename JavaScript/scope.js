/*
//function scope
function myName(){
    let name = "Anindya";
    console.log(name);
}
// console.log(name) we can't access



//block scope
if(num === 1){
    const n = 'Anindya';
    console.log(n);
} 
//console.log(n) can't acceess



//Lexical scope
function myName(){
    const name = 'Anindya';
    function a(){
        const mid = 'Ram';
        function b(){
            const last = 'Tripathi';
            console.log(name);
            console.log(mid);
            console.log(last);
        }
        b();    
    }
    a();
}
myName()
*/



//Function Expression
// let numb = function(name){
//     console.log(name);
// }
let add = function(x,y){
    return x+y;
}




