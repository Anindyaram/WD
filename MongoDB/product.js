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

const Shop = mongoose.model('Shop', shopSchema);

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

// Shop.findOneAndUpdate({name:'Tire pump'} , {price:-9},{new:true}) //Updated to -9 even after validation
Shop.findOneAndUpdate({name:'Tire pump'} , {price:-9},{new:true , runValidators:true}) //Now validation will be checked and -9 will not appended to data
        .then(n =>{
            console.log('Worked just fine!');
            console.log(n);
        })
        .catch(err=>{
            console.log('ERROR oh boi!!');
            console.log(err.errors);
            // console.log(err.errors.name.properties.message);
        })

// Shop.insertMany([
//     {name:'rice' ,price:40},
//     {name:'cerials',price:80}
// ])





