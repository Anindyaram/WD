//old method
function rollDice(para){
    if(para === undefined){
        para = 6
    }
    return Math.floor(Math.random() * 6)+1
}
//New Method
function Rolldice(side=6){
    return Math.floor(Math.random()*6)+1 
}

function obj(cretor){
    return (Math.random() + 1).toString(36).substring(2);
}

function Name( person,mes = 'Hey There!!'){//order of default matters!!
    return `${mes} ${person}`
}


