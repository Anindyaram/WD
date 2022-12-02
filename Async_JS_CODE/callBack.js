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


const DelayedColorChange=(newColor,delay,doCall)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor;
        doCall && doCall();
    },delay);
}

DelayedColorChange("violet",1000,()=>{
    DelayedColorChange("indigo",1000,()=>{
        DelayedColorChange("green",1000,()=>{
            DelayedColorChange("yellow",1000,()=>{
                DelayedColorChange("orange",1000,()=>{
                    DelayedColorChange("red",1000,()=>{
                        DelayedColorChange("white",1000,()=>{
                        });
                    });
                });
            });
        });
    });
});
    


