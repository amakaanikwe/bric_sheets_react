// use mongoose to create a schema
const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        requiered:true
    },
    username:{
        type:String,
        requiered:true
    },    
    email:{
        type:String,
        requiered:true
    },    
    password:{
        type:String,
        requiered:true
    },
    date:{
        type:Date,
        default:Date.now
    },

})

module.exports = mongoose.model('newUserTable', signUpTemplate);