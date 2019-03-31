// Student Name: Ishratben Vahora
// StudentID: 300986257
// Date: 2019-03-30
let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);