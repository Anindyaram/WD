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
    }
})

const Shop = mongoose.model('Shop', shopSchema);

const vegies = new Shop({price:20});
vegies.save()
    .then(n =>{
        console.log('Worked just fine!');
        console.log(n);
    })
    .catch(err=>{
        console.log('ERROR oh boi!!');
        console.log(err.errors.name.properties.message);
    })

// Shop.insertMany([
//     {name:'rice' ,price:40},
//     {name:'cerials',price:80}
// ])





