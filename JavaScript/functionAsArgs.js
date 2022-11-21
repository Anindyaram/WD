/*function getThrice(func){
    func();
    func();
    func();
}

function Ntime(func,numOfTime){
    for(let i=0;i<numOfTime;i++){
        func();
    }
}

function rolldice(){
    let roll = Math.floor(Math.random() *6) + 1;
    console.log(roll);
}
Ntime(rolldice,20);

*/

//Returning a function 

// function compare(){
//     const rand = Math.random();
//     if(rand>0.5){
//         return function(){
//             console.log('greater then 0.5!,You are lucky');
//         }
//     }else{
//         return function(){
//             console.log('Not Greater then 0.5')
//             console.log('Try next time!');
//         }
//     }
// }
// let result = compare();
// result();

function camparison(min,max){
    return function(num){
        return num>=min && num<=max;
    }
}

const age = camparison(0,18);
age(18);




