//Middleware runs automatically it depends when and where we want to use them. We can run it before or after any function or when something is done on user side ,etc
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})
//This is called a middleware which runs before the save function automatically
personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!!")
})

//This is called a middleware which runs after the save function automatically
personSchema.post('save', async function () {
    console.log("JUST SAVED!!!!")
})

const Person = mongoose.model('Person', personSchema);


