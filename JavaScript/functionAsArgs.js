function getThrice(func){
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





