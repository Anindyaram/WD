// setTimeout(() => {
//     document.body.style.backgroundColor = "Yellow";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "Green";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "Blue";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "Red";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "White";
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = "maroon";
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);

// }, 1000);


// const DelayedColorChange=(newColor,delay,doCall)=>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor = newColor;
//         doCall && doCall();
//     },delay);
// }

// DelayedColorChange("violet",1000,()=>{
//     DelayedColorChange("indigo",1000,()=>{
//         DelayedColorChange("green",1000,()=>{
//             DelayedColorChange("yellow",1000,()=>{
//                 DelayedColorChange("orange",1000,()=>{
//                     DelayedColorChange("red",1000,()=>{
//                         DelayedColorChange("white",1000,()=>{
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });


/***************************************Using Promises to counter Callback Hell****************************************/
const delayedColorChange =(color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor =color;
            resolve();
        },delay)
    })
}
delayedColorChange('red',1000)
    .then(()=> delayedColorChange('orange',1000))
    .then(()=> delayedColorChange('green',1000))
    .then(()=> delayedColorChange('indigo',1000))
    .then(()=> delayedColorChange('blue',1000))
    .then(()=> delayedColorChange('yellow',1000))
    .then(()=> delayedColorChange('maroon',1000))
    .then(()=> delayedColorChange('teal',1000))
    .then(()=> delayedColorChange('olive',1000))








    


