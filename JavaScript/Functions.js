function capitalize(str){
    let a = str.slice(0,1).toUpperCase();
    let ne = `${a}${str.slice(1,str.length)}`;
    return ne;
}

capitalize('anindya');

