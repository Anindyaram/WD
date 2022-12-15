const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

input.addEventListener('input', function (e) {
    if(input.value===""){
        h1.innerText = 'Type below:'
    }else{
        h1.innerText = input.value;
    }
})
// input.addEventListener('',()=>{
//     h1.innerText = 'Type Below:';
// })