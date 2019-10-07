const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
    string:String,
    required:{type:String,required:[true,"message"]}
})

module.exports = exampleSchema;