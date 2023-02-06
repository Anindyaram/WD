const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// mongoose.set('useFindAndModify',false);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(()=>{
        console.log('Connected!!');
    })
    .catch(err=>{
        console.log('Error!');
        console.log(err);
    })

const shopSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number, //validation that can be convert into a number
        required:true,
        min:[0,'Hey dude! Price must be positive'] //Added my error message
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:[String],    //Array storing
    qty:{                   //Nested query 
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{
        type:String,
        enum:['S','M','L']
    }
})

//I can access this on every instance of product
shopSchema.methods.greet = function(){
    console.log("Namaskar!");
    console.log(`-from ${this.name}`)
}
//for changing the sale we can make a method like
shopSchema.methods.toggleSale=function(){
    this.onSale = !this.onSale;
    return this.save(); //takes time
}
//Adding categories 
shopSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}


const Shop = mongoose.model('Shop', shopSchema);

// Finding a product and i have greet method accessible on it
const findProduct = async ()=>{
    const foundProduct = await Shop.findOne({name:'Tire pump'});
    console.log(foundProduct) ;
    await foundProduct.toggleSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Cringe');
    console.log(foundProduct);
}
findProduct();


//Creating new data with validation
// const vegies = new Shop({name:'Tire pump' ,price:40.5 ,categories:['Cyclic']})
// vegies.save()
//     .then(n =>{
//         console.log('Worked just fine!');
//         console.log(n);
//     })
//     .catch(err=>{
//         console.log('ERROR oh boi!!');
//         console.log(err.errors.name.properties.message);
//     })

//updating with validation
// Shop.findOneAndUpdate({name:'Tire pump'} , {price:-9},{new:true}) //Updated to -9 even after validation
// Shop.findOneAndUpdate({name:'Tire pump'} , {price:-9},{new:true , runValidators:true}) //Now validation will be checked and -9 will not appended to data
        // .then(n =>{
        //     console.log('Worked just fine!');
        //     console.log(n);
        // })
        // .catch(err=>{
        //     console.log('ERROR oh boi!!');
        //     console.log(err.errors);
        //     // console.log(err.errors.name.properties.message);
        // })

// Shop.insertMany([
//     {name:'rice' ,price:40},
//     {name:'cerials',price:80}
// ])





