// try{
//     hello.toUpperCase();
// }catch{
//     console.log('Error!!!')
// }


function yell(msg){
    try{
        msg.toUpperCase().repeat(3);
        console.log(msg);
    }catch(e){
        console.log(`ERROR ${e}`)
    }
}

yell(3)