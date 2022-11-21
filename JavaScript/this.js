const myName = {
    name:'Anindya',
    middle:'Ram',
    last:'Tripathi',
    full(){
        console.log(`${this.name} ${this.middle} ${this.last}`);
    }
}
myName.full();