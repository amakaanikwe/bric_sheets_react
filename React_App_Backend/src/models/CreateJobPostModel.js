// use mongoose to create a schema
const mongoose = require('mongoose');

const jobPostTemplate = new mongoose.Schema({
    username:{
        type:String,
        requiered:true
    },
    company:{
        type:String,
        requiered:true
    },
    jobTitle:{
        type:String,
        requiered:true
    },    
    jobType:{
        type:String,
        requiered:true
    },    
    jobDetails:{
        type:String,
        requiered:true
    },
    phoneNumber:{
        type:String,
        requiered:true
    },
    email:{
        type:String,
        requiered:true
    },
    date:{
        type:Date,
        default:Date.now
    },

})

module.exports = mongoose.model('newUserTable', jobPostTemplate);