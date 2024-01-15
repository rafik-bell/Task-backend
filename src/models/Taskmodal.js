const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    
    nametask :{
            type : String,
            required : true,
        },
    discription :{
            type : String,
            required : true,
        },
    status :{
            type : String,
            required : true,
        },
    date_creation :{
            type : Date,
            required : true,
        },
    date_completion :{
            type : Date,
            required : true,
        },
    user_association :{
            type : String,
            required : true,
        },          
        },
);
  module.exports = mongoose.model('Task', TaskSchema,'Task');